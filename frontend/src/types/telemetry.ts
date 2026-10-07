export type OperatingMode = 'SIMULATION' | 'REAL_HARDWARE';

export type MissionState =
  | 'IDLE'
  | 'INITIALIZING'
  | 'LOCALIZING'
  | 'NAVIGATING'
  | 'OBSTACLE_DETECTED'
  | 'REPLANNING'
  | 'TRAFFIC_SIGN'
  | 'TRAFFIC_LIGHT'
  | 'RAMP_TRAVERSAL'
  | 'TARGET_SEARCH'
  | 'FACE_MATCH'
  | 'TARGET_ALIGNMENT'
  | 'LASER_INDICATION'
  | 'MISSION_COMPLETE'
  | 'EMERGENCY_STOP'
  | 'FAULT';

export type CameraMode = 'TOP' | 'ISOMETRIC' | 'FOLLOW' | 'FPV' | 'FREE';
export type UITheme = 'LIGHT' | 'DARK';

export interface PositionData {
  x: number;
  y: number;
  heading: number; // degrees
}

export interface IMUData {
  roll: number;
  pitch: number;
  yaw: number;
  accel_x: number;
  accel_y: number;
  accel_z: number;
}

export interface GPSData {
  fix: 'NO_FIX' | 'GPS_2D' | 'GPS_3D' | 'RTK_FLOAT' | 'RTK_FIXED';
  latitude: number;
  longitude: number;
  altitude: number;
  satellites: number;
  accuracy: number; // meters
}

export interface MotorData {
  left: number;  // RPM
  right: number; // RPM
  temp_c: number;
  current_a: number;
}

export interface SafetyData {
  estop: boolean;
  mechanical_estop: boolean;
  wireless_estop: boolean;
  software_safety: boolean;
  wireless_link: boolean;
  heartbeat_age_ms: number;
  watchdog_ok: boolean;
  link_rssi: number; // dBm
}

export interface LidarTelemetry {
  points_count: number;
  nearest_distance: number;
  min_angle_deg: number;
  collision_zone_clear: boolean;
}

export interface VisionTelemetry {
  detected_sign: string | null; // STOP, SLOW, TURN, etc.
  sign_confidence: number;
  traffic_light_state: 'RED' | 'YELLOW' | 'GREEN' | null;
  face_matched: boolean;
  face_confidence: number;
  target_aligned: boolean;
  target_candidate_id?: string;
}

export interface MissionTelemetry {
  state: MissionState;
  active_waypoint_idx: number;
  total_waypoints: number;
  distance_to_target: number;
  laser_active: boolean;
  laser_timer: number;
  step_description: string;
}

export interface HardwareHealth {
  jetson_connected: boolean;
  stm32_connected: boolean;
  motor_driver_connected: boolean;
  camera_connected: boolean;
  lidar_connected: boolean;
  imu_connected: boolean;
  gps_connected: boolean;
  estop_connected: boolean;
  cpu_usage_pct: number;
  gpu_usage_pct: number;
  ram_usage_gb: number;
  temperature_c: number;
}

export interface TelemetryMessage {
  timestamp: number;
  mode: 'AUTONOMOUS' | 'MANUAL';
  speed: number; // km/h
  battery: number; // %
  battery_voltage: number;
  battery_current: number;
  position: PositionData;
  imu: IMUData;
  gps: GPSData;
  motors: MotorData;
  safety: SafetyData;
  lidar: LidarTelemetry;
  vision: VisionTelemetry;
  mission: MissionTelemetry;
  health: HardwareHealth;
}

export interface EventLogEntry {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'DANGER' | 'SUCCESS';
  message: string;
}

export interface FaceCandidate {
  id: string;
  name: string;
  similarity: number;
  isMatch: boolean;
  imagePlaceholderColor: string;
}

