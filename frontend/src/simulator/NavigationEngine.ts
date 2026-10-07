import { MissionState, TelemetryMessage, EventLogEntry } from '../types/telemetry';
import { soundEngine } from '../sounds/soundEngine';

export interface NavWaypoint {
  id: string;
  x: number;
  z: number;
  type: string;
  targetSpeedKmh: number;
  description: string;
}

export class NavigationEngine {
  // Vehicle Kinematic State
  public x = 0.0;
  public y = 0.0;
  public z = 0.0;
  public heading = 0.0; // degrees (0 = along +X)
  public pitch = 0.0;   // degrees
  public roll = 0.0;    // degrees
  public speedKmh = 0.0;
  public steeringAngle = 0.0; // degrees (-35 to +35)
  public targetSpeedKmh = 0.0;

  // Wheel Encoders & Power
  public leftRpm = 0;
  public rightRpm = 0;
  public distanceTraveledM = 0.0;
  public batteryPct = 87.0;

  // Laser Targeting State
  public laserActive = false;
  public laserTimerSec = 0.0;
  public laserTargetPos: [number, number, number] | undefined = undefined;

  // Autonomy & State Machine
  public missionState: MissionState = 'IDLE';
  public isAutonomous = false;
  public estopActive = false;
  public trafficLightColor: 'RED' | 'YELLOW' | 'GREEN' = 'GREEN';
  public trafficLightTimer = 0.0;
  public activeWpIdx = 0;

  // Waypoints along track
  public waypoints: NavWaypoint[] = [
    { id: 'WP_START', x: 0.0, z: 0.0, type: 'START', targetSpeedKmh: 4.5, description: 'Start line alignment' },
    { id: 'WP_STRAIGHT', x: 8.0, z: 0.0, type: 'TRACK', targetSpeedKmh: 6.0, description: 'Straight corridor traversal' },
    { id: 'WP_OBSTACLE_AVOID', x: 13.5, z: 0.75, type: 'OBSTACLE_CORRIDOR', targetSpeedKmh: 3.5, description: 'Dynamic obstacle swerve' },
    { id: 'WP_CLEAR_OBSTACLE', x: 17.5, z: 0.0, type: 'RECOVER_PATH', targetSpeedKmh: 5.5, description: 'Re-align to track centerline' },
    { id: 'WP_POTHOLE_BYPASS', x: 21.0, z: -0.4, type: 'TERRAIN', targetSpeedKmh: 4.0, description: 'Pothole safe bypass' },
    { id: 'WP_TRAFFIC_LIGHT', x: 23.8, z: 0.0, type: 'TRAFFIC_LIGHT', targetSpeedKmh: 3.8, description: 'Traffic signal inspection' },
    { id: 'WP_RAMP_ENTER', x: 30.0, z: 0.0, type: 'RAMP_ENTRY', targetSpeedKmh: 3.2, description: '20° Ramp entry alignment' },
    { id: 'WP_RAMP_APEX', x: 36.0, z: 0.0, type: 'RAMP_APEX', targetSpeedKmh: 3.0, description: 'Ramp crest traversal' },
    { id: 'WP_RAMP_EXIT', x: 42.0, z: 0.0, type: 'RAMP_DESCENT', targetSpeedKmh: 3.8, description: 'Ramp descent complete' },
    { id: 'WP_TARGET_GALLERY', x: 48.0, z: 0.0, type: 'TARGET_GALLERY', targetSpeedKmh: 4.0, description: 'Face Target Gallery search' },
    { id: 'WP_FINISH', x: 62.0, z: 0.0, type: 'FINISH', targetSpeedKmh: 5.0, description: 'Finish gate checkpoint' }
  ];

  // Callback to push event logs
  public onLogMessage?: (msg: string, level: EventLogEntry['level']) => void;
  public onMissionComplete?: () => void;

  constructor() {}

  public log(message: string, level: EventLogEntry['level'] = 'INFO') {
    if (this.onLogMessage) {
      this.onLogMessage(message, level);
    }
  }

  public startAutonomousMission() {
    this.isAutonomous = true;
    this.estopActive = false;
    this.activeWpIdx = 0;
    this.missionState = 'INITIALIZING';
    soundEngine.playSystemStart();
    this.log('SYSTEM BOOT: All onboard nodes initialized', 'INFO');

    setTimeout(() => {
      if (this.missionState === 'INITIALIZING') {
        this.missionState = 'LOCALIZING';
        this.log('RTK FIX: Dual GNSS base station locked (accuracy ±0.02m)', 'SUCCESS');
        soundEngine.playAutonomousMode();
      }
    }, 1200);

    setTimeout(() => {
      if (this.missionState === 'LOCALIZING') {
        this.missionState = 'NAVIGATING';
        this.targetSpeedKmh = 5.2;
        this.log('AUTONOMOUS MODE ENGAGED: Navigation stack active ONBOARD', 'SUCCESS');
      }
    }, 2400);
  }

  public resetSimulation() {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    this.heading = 0.0;
    this.pitch = 0.0;
    this.roll = 0.0;
    this.speedKmh = 0.0;
    this.targetSpeedKmh = 0.0;
    this.steeringAngle = 0.0;
    this.activeWpIdx = 0;
    this.isAutonomous = false;
    this.estopActive = false;
    this.laserActive = false;
    this.laserTimerSec = 0.0;
    this.trafficLightColor = 'GREEN';
    this.missionState = 'IDLE';
    this.distanceTraveledM = 0.0;
    this.log('SIMULATION RESET: UGV returned to START position', 'INFO');
  }

  public triggerEmergencyStop() {
    this.estopActive = true;
    this.isAutonomous = false;
    this.speedKmh = 0.0;
    this.targetSpeedKmh = 0.0;
    this.leftRpm = 0;
    this.rightRpm = 0;
    this.laserActive = false;
    this.missionState = 'EMERGENCY_STOP';
    soundEngine.playEmergencyStop();
    this.log('EMERGENCY STOP ACTIVATED: Motor bus disconnected, Autonomy halted', 'DANGER');
  }

  public resetEmergencyStop() {
    this.estopActive = false;
    this.missionState = 'IDLE';
    this.log('E-STOP RESET: Safety interlock armed. Ready for launch.', 'INFO');
  }

  public manualDrive(forward: number, turn: number) {
    if (this.estopActive) return;
    this.isAutonomous = false;
    this.targetSpeedKmh = forward * 6.5; // Up to 6.5 km/h
    this.steeringAngle = turn * 32.0;    // Up to 32 degrees
  }

  public toggleTrafficLight() {
    if (this.trafficLightColor === 'RED' || this.trafficLightColor === 'YELLOW') {
      this.trafficLightColor = 'GREEN';
      this.trafficLightTimer = 0.0;
      soundEngine.playTrafficLight();
      this.log('TRAFFIC SIGNAL OVERRIDE: Switched to GREEN. Resuming trajectory.', 'SUCCESS');
      if (this.missionState === 'TRAFFIC_LIGHT') {
        this.missionState = 'NAVIGATING';
        this.targetSpeedKmh = 4.2;
        this.activeWpIdx = Math.max(6, this.activeWpIdx);
      }
    } else {
      this.trafficLightColor = 'RED';
      this.trafficLightTimer = 0.0;
      this.log('TRAFFIC SIGNAL OVERRIDE: Switched to RED. Holding vehicle.', 'WARN');
    }
  }

  public update(dt: number) {
    if (this.estopActive) {
      this.speedKmh = 0;
      this.leftRpm = 0;
      this.rightRpm = 0;
      return;
    }

    // 1. Autonomous Path Following and State Machine
    if (this.isAutonomous && this.missionState !== 'MISSION_COMPLETE') {
      this.stepAutonomousBehavior(dt);
    }

    // 2. Realistic Speed Inertia and Motor Response
    const speedChange = (this.targetSpeedKmh - this.speedKmh) * Math.min(1.0, dt * 2.8);
    this.speedKmh += speedChange;
    if (Math.abs(this.speedKmh) < 0.05) this.speedKmh = 0;

    // 3. Vehicle Kinematics Integration (Bicycle / Diff-Drive Model)
    const speedMs = this.speedKmh / 3.6;
    const headingRad = THREE_Math_degToRad(this.heading);

    // Yaw rate from front wheel steering angle: omega = (v / L) * tan(delta)
    const wheelbase = 0.65; // meters
    const steerRad = THREE_Math_degToRad(this.steeringAngle);
    const yawRateRad = (speedMs / wheelbase) * Math.tan(steerRad);
    this.heading += (yawRateRad * (180 / Math.PI)) * dt;

    // Translate along vehicle heading vector
    this.x += speedMs * Math.cos(headingRad) * dt;
    this.z += speedMs * Math.sin(headingRad) * dt;
    this.distanceTraveledM += Math.abs(speedMs * dt);

    // 4. Terrain & 20-Degree Ramp Incline Pitch Solver
    this.solveTerrainElevationAndPitch();

    // 5. Wheel Encoders calculation
    const baseRpm = (speedMs / (2 * Math.PI * 0.22)) * 60;
    const diffRpm = (this.steeringAngle / 35.0) * (baseRpm * 0.3);
    this.leftRpm = Math.round(baseRpm - diffRpm);
    this.rightRpm = Math.round(baseRpm + diffRpm);

    // Battery gentle discharge
    this.batteryPct = Math.max(15, this.batteryPct - 0.0005 * dt);
  }

  private stepAutonomousBehavior(dt: number) {
    if (this.activeWpIdx >= this.waypoints.length) {
      if (this.missionState !== 'MISSION_COMPLETE') {
        this.missionState = 'MISSION_COMPLETE';
        this.targetSpeedKmh = 0;
        soundEngine.playMissionComplete();
        this.log('MISSION COMPLETE: All competition checkpoints passed with 0 collisions!', 'SUCCESS');
        if (this.onMissionComplete) this.onMissionComplete();
      }
      return;
    }

    const currentWp = this.waypoints[this.activeWpIdx];
    const dx = currentWp.x - this.x;
    const dz = currentWp.z - this.z;
    const distToWp = Math.hypot(dx, dz);

    // --- State-Specific Triggers & Checkpoints ---

    // A. Dynamic Obstacle Avoidance Trigger (x around 11m)
    if (this.x > 10.5 && this.x < 15.0 && this.activeWpIdx === 2) {
      if (this.missionState !== 'OBSTACLE_DETECTED' && this.missionState !== 'REPLANNING') {
        this.missionState = 'OBSTACLE_DETECTED';
        soundEngine.playObstacleWarning();
        this.log('OBSTACLE DETECTED: LiDAR reports obstacle at 2.8m. Risk: HIGH', 'WARN');
        setTimeout(() => {
          if (this.missionState === 'OBSTACLE_DETECTED') {
            this.missionState = 'REPLANNING';
            this.log('PATH REPLANNING: Local A* generated safe corridor swerve (+0.75m Z)', 'INFO');
          }
        }, 800);
      }
    }

    // B. Traffic Light Encounter (approaching hold line at x ~ 23.8m)
    if (this.activeWpIdx === 5) {
      if (this.x >= 22.8) {
        if (this.trafficLightColor === 'RED') {
          this.missionState = 'TRAFFIC_LIGHT';
          this.targetSpeedKmh = 0.0;
          this.trafficLightTimer += dt;

          if (this.trafficLightTimer >= 2.0 && this.trafficLightTimer < 2.8) {
            this.trafficLightColor = 'YELLOW';
          }
          return; // Hold at stop bar
        } else if (this.trafficLightColor === 'YELLOW') {
          this.missionState = 'TRAFFIC_LIGHT';
          this.targetSpeedKmh = 0.0;
          this.trafficLightTimer += dt;

          if (this.trafficLightTimer >= 2.8) {
            // Switch to GREEN!
            this.trafficLightColor = 'GREEN';
            this.trafficLightTimer = 0.0;
            soundEngine.playTrafficLight();
            this.log('TRAFFIC LIGHT SWITCHED: GREEN confirmed. Resuming trajectory.', 'SUCCESS');
            this.missionState = 'NAVIGATING';
            this.targetSpeedKmh = 4.2;
            this.activeWpIdx = 6; // Move to Ramp
          }
          return; // Hold at yellow
        } else if (this.trafficLightColor === 'GREEN') {
          // Already green, proceed
          this.missionState = 'NAVIGATING';
          this.targetSpeedKmh = 4.2;
          this.activeWpIdx = 6;
        }
      }
    }

    // C. 20-Degree Ramp Encounter (x around 30.0m - 42.0m)
    if (this.x >= 29.5 && this.x <= 42.5) {
      if (this.missionState !== 'RAMP_TRAVERSAL') {
        this.missionState = 'RAMP_TRAVERSAL';
        this.log('RAMP DETECTED: 20° Incline. Low gear terrain traversal engaged.', 'INFO');
      }
    }

    // D. Face Target Gallery & 2.0s Laser Indication (x around 48.0m)
    if (this.x >= 47.5 && this.x <= 49.0 && this.activeWpIdx === 9) {
      if (this.missionState !== 'TARGET_SEARCH' &&
          this.missionState !== 'FACE_MATCH' &&
          this.missionState !== 'TARGET_ALIGNMENT' &&
          this.missionState !== 'LASER_INDICATION') {
        this.missionState = 'TARGET_SEARCH';
        this.targetSpeedKmh = 0;
        this.log('TARGET SEARCH: Camera scanning Face Target Gallery candidate panels...', 'INFO');

        setTimeout(() => {
          this.missionState = 'FACE_MATCH';
          soundEngine.playTargetFound();
          this.log('FACE MATCH CONFIRMED: Target Candidate C matches Suspect Alpha (96.7% confidence)', 'SUCCESS');

          setTimeout(() => {
            this.missionState = 'TARGET_ALIGNMENT';
            this.log('TARGET ALIGNMENT: Pan-tilt gimbal aligned to (48.0m, 1.25m, 2.8m)', 'INFO');

            setTimeout(() => {
              this.missionState = 'LASER_INDICATION';
              this.laserActive = true;
              this.laserTargetPos = [50.0, 1.25, 2.8];
              soundEngine.playLaserConfirmation();
              this.log('LASER INDICATION STARTED: 532nm beam firing (DTU spec: >= 2.00s)...', 'WARN');
            }, 700);
          }, 900);
        }, 1200);
        return;
      }

      if (this.missionState === 'LASER_INDICATION') {
        this.laserTimerSec += dt;
        if (this.laserTimerSec >= 2.0) {
          this.laserActive = false;
          this.log('LASER INDICATION COMPLETE: 2.00s confirmed ✓ Target neutralized/marked.', 'SUCCESS');
          this.missionState = 'NAVIGATING';
          this.activeWpIdx = 10; // Proceed to Finish
        }
        return;
      }

      if (this.missionState === 'TARGET_SEARCH' || this.missionState === 'FACE_MATCH' || this.missionState === 'TARGET_ALIGNMENT') {
        return; // Await async sequence
      }
    }

    // --- Pure Pursuit Steering to active waypoint ---
    const targetHeadingRad = Math.atan2(dz, dx);
    const currentHeadingRad = THREE_Math_degToRad(this.heading);
    let headingError = targetHeadingRad - currentHeadingRad;
    // Normalize to [-pi, pi]
    headingError = Math.atan2(Math.sin(headingError), Math.cos(headingError));

    this.steeringAngle = Math.max(-32, Math.min(32, headingError * (180 / Math.PI) * 1.5));
    this.targetSpeedKmh = currentWp.targetSpeedKmh;

    // Check waypoint arrival
    if (distToWp < 1.0) {
      this.log(`WAYPOINT CLEARED: ${currentWp.id} (${currentWp.description})`, 'INFO');
      this.activeWpIdx++;
      if (this.activeWpIdx === 5) {
        // Prepare traffic light red
        this.trafficLightColor = 'RED';
        this.trafficLightTimer = 0.0;
        this.log('TRAFFIC SIGNAL RED: Stopping at designated hold line', 'WARN');
      }
    }
  }

  private solveTerrainElevationAndPitch() {
    // 20-Degree Ramp: x in [30.0, 42.0]
    // Incline: [30.0, 34.4], height rises from 0 to 1.6m at 20 deg
    // Apex: [34.4, 37.6], height 1.6m, pitch 0 deg
    // Decline: [37.6, 42.0], height falls from 1.6m to 0 at -20 deg
    if (this.x >= 30.0 && this.x <= 34.4) {
      const progress = (this.x - 30.0) / 4.4;
      this.y = progress * 1.6;
      this.pitch = 20.0; // Pitched up by 20 degrees!
    } else if (this.x > 34.4 && this.x <= 37.6) {
      this.y = 1.6;
      this.pitch = 0.0;  // Level on apex
    } else if (this.x > 37.6 && this.x <= 42.0) {
      const progress = (this.x - 37.6) / 4.4;
      this.y = 1.6 * (1.0 - progress);
      this.pitch = -20.0; // Pitched down by 20 degrees!
    } else {
      this.y = 0.0;
      this.pitch = 0.0;
    }
  }

  public getTelemetryMessage(): TelemetryMessage {
    return {
      timestamp: Date.now() / 1000,
      mode: this.isAutonomous ? 'AUTONOMOUS' : 'MANUAL',
      speed: Number(this.speedKmh.toFixed(1)),
      battery: Math.round(this.batteryPct),
      battery_voltage: Number((24.0 + (this.batteryPct / 100) * 1.2).toFixed(1)),
      battery_current: Number((3.2 + (this.speedKmh / 10) * 8.5).toFixed(1)),
      position: {
        x: Number(this.x.toFixed(2)),
        y: Number(this.z.toFixed(2)),
        heading: Number(this.heading.toFixed(1))
      },
      imu: {
        roll: Number(this.roll.toFixed(1)),
        pitch: Number(this.pitch.toFixed(1)),
        yaw: Number(this.heading.toFixed(1)),
        accel_x: 0.1,
        accel_y: 0.0,
        accel_z: 9.81
      },
      gps: {
        fix: 'RTK_FIXED',
        latitude: 28.749912,
        longitude: 77.117024,
        altitude: Number((218.4 + this.y).toFixed(1)),
        satellites: 24,
        accuracy: 0.02
      },
      motors: {
        left: this.leftRpm,
        right: this.rightRpm,
        temp_c: Number((38.0 + (this.distanceTraveledM / 10) * 0.8).toFixed(1)),
        current_a: Number((2.8 + (this.speedKmh / 10) * 4.5).toFixed(1))
      },
      safety: {
        estop: this.estopActive,
        mechanical_estop: false,
        wireless_estop: false,
        software_safety: true,
        wireless_link: true,
        heartbeat_age_ms: 12,
        watchdog_ok: true,
        link_rssi: -56
      },
      lidar: {
        points_count: 720,
        nearest_distance: this.x > 10 && this.x < 16 ? 2.8 : 8.5,
        min_angle_deg: 14.2,
        collision_zone_clear: !(this.x > 10 && this.x < 15)
      },
      vision: {
        detected_sign: this.x > 6 && this.x < 9 ? 'STOP' : this.x > 9 && this.x < 12 ? 'SLOW' : null,
        sign_confidence: this.x > 6 && this.x < 9 ? 97.4 : 0,
        traffic_light_state: this.trafficLightColor,
        face_matched: this.missionState === 'FACE_MATCH' || this.missionState === 'TARGET_ALIGNMENT' || this.missionState === 'LASER_INDICATION',
        face_confidence: 96.7,
        target_aligned: this.missionState === 'TARGET_ALIGNMENT' || this.missionState === 'LASER_INDICATION',
        target_candidate_id: 'TARGET_C_MATCH'
      },
      mission: {
        state: this.missionState,
        active_waypoint_idx: this.activeWpIdx,
        total_waypoints: this.waypoints.length,
        distance_to_target: Math.max(0, Number((62.0 - this.x).toFixed(1))),
        laser_active: this.laserActive,
        laser_timer: Number(this.laserTimerSec.toFixed(2)),
        step_description: this.waypoints[Math.min(this.activeWpIdx, this.waypoints.length - 1)]?.description || ''
      },
      health: {
        jetson_connected: true,
        stm32_connected: true,
        motor_driver_connected: true,
        camera_connected: true,
        lidar_connected: true,
        imu_connected: true,
        gps_connected: true,
        estop_connected: true,
        cpu_usage_pct: 26.5,
        gpu_usage_pct: 41.2,
        ram_usage_gb: 2.1,
        temperature_c: 43.8
      }
    };
  }
}

function THREE_Math_degToRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

