import time
import math
import random
from typing import Dict, Any, Optional
from robot_gateway.telemetry.models import TelemetryMessage, ManualVelocityCommand, ManualSteeringCommand, StopCommand

class ROS2Bridge:
    """
    ROS 2 Bridge and Hardware-in-the-Loop (HIL) interface for R.A.M.A.N. UGV.
    In real deployment on Jetson Orin / Raspberry Pi:
      Subscribes to native ROS 2 topics:
        - /odom (nav_msgs/Odometry)
        - /scan (sensor_msgs/LaserScan)
        - /imu/data (sensor_msgs/Imu)
        - /gps/fix (sensor_msgs/NavSatFix)
        - /raman/mission_state (raman_interfaces/MissionState)
        - /raman/safety_status (raman_interfaces/SafetyStatus)
      Publishes:
        - /cmd_vel (geometry_msgs/Twist) - ONLY in MANUAL mode when permitted
    """
    def __init__(self):
        self.is_ros2_available = False
        self._check_ros2()
        
        # Internal hardware/HIL state
        self.telemetry = TelemetryMessage()
        self.telemetry.mode = "AUTONOMOUS"
        self.telemetry.mission.state = "LOCALIZING"
        self.telemetry.safety.estop = False
        
        # Vehicle kinematics state
        self.x = 0.0
        self.y = 0.0
        self.heading = 0.0 # deg
        self.speed_kmh = 4.2
        self.linear_vel = 1.16 # m/s
        self.angular_vel = 0.0 # rad/s
        self.battery_pct = 87.0
        self.motor_rpm_left = 310
        self.motor_rpm_right = 305
        self.pitch = 0.0
        self.roll = 0.0
        self.yaw = 0.0
        
        self.last_update = time.time()
        self.heartbeat_counter = 0

    def _check_ros2(self):
        try:
            import rclpy
            self.is_ros2_available = True
        except ImportError:
            self.is_ros2_available = False

    def update_hardware_state(self):
        """Called periodically by gateway loop (e.g. 20Hz)"""
        now = time.time()
        dt = now - self.last_update
        self.last_update = now
        self.heartbeat_counter += 1

        if self.telemetry.safety.estop:
            self.speed_kmh = 0.0
            self.linear_vel = 0.0
            self.motor_rpm_left = 0
            self.motor_rpm_right = 0
        else:
            # Simulate real onboard autonomy progression or manual dynamics
            if self.telemetry.mode == "MANUAL":
                self.speed_kmh = round(abs(self.linear_vel) * 3.6, 2)
            else:
                # Autonomous mode (onboard controlled)
                self.speed_kmh = 4.8 + 0.3 * math.sin(now * 0.5)

            # Update position
            rad = math.radians(self.heading)
            self.x += self.linear_vel * math.cos(rad) * dt
            self.y += self.linear_vel * math.sin(rad) * dt
            self.heading = (self.heading + math.degrees(self.angular_vel * dt)) % 360.0

            # Battery discharge simulation (slow)
            self.battery_pct = max(10.0, self.battery_pct - 0.001 * dt)
            
            # Encoders
            base_rpm = int(self.speed_kmh * 64.0)
            self.motor_rpm_left = max(0, base_rpm + int(random.uniform(-4, 4)))
            self.motor_rpm_right = max(0, base_rpm + int(random.uniform(-4, 4)))

        # Pack telemetry
        self.telemetry.timestamp = now
        self.telemetry.speed = round(self.speed_kmh, 2)
        self.telemetry.battery = int(self.battery_pct)
        self.telemetry.battery_voltage = round(24.0 + (self.battery_pct / 100.0) * 1.2, 2)
        
        self.telemetry.position.x = round(self.x, 3)
        self.telemetry.position.y = round(self.y, 3)
        self.telemetry.position.heading = round(self.heading, 1)

        self.telemetry.imu.roll = round(self.roll, 2)
        self.telemetry.imu.pitch = round(self.pitch, 2)
        self.telemetry.imu.yaw = round(self.heading, 2)

        self.telemetry.motors.left = self.motor_rpm_left
        self.telemetry.motors.right = self.motor_rpm_right

        self.telemetry.safety.heartbeat_age_ms = int((now - self.last_update) * 1000)
        self.telemetry.health.cpu_usage_pct = round(24.0 + 5.0 * math.sin(now * 0.2), 1)
        self.telemetry.health.gpu_usage_pct = round(38.0 + 8.0 * math.cos(now * 0.3), 1)

    def get_latest_telemetry(self) -> TelemetryMessage:
        self.update_hardware_state()
        return self.telemetry

    def process_manual_velocity(self, cmd: ManualVelocityCommand) -> Dict[str, Any]:
        """
        Executes manual command ONLY if mode permits.
        Crucial Rule: Web app NEVER sends steering/nav in AUTONOMOUS mode.
        """
        if self.telemetry.mode != "MANUAL":
            return {
                "success": False,
                "error": "REJECTED: UGV is currently in AUTONOMOUS mode. Autonomy runs onboard."
            }
        if self.telemetry.safety.estop:
            return {
                "success": False,
                "error": "REJECTED: Emergency Stop is ACTIVE."
            }
        
        self.linear_vel = max(-1.5, min(1.5, cmd.linear_x))
        self.angular_vel = max(-1.0, min(1.0, cmd.angular_z))
        return {"success": True, "linear_vel": self.linear_vel, "angular_vel": self.angular_vel}

    def process_manual_steering(self, cmd: ManualSteeringCommand) -> Dict[str, Any]:
        if self.telemetry.mode != "MANUAL":
            return {"success": False, "error": "REJECTED: Not in MANUAL mode."}
        if self.telemetry.safety.estop:
            return {"success": False, "error": "REJECTED: E-Stop active."}
        
        # Calculate differential drive from throttle & steering
        throttle = cmd.throttle_pct / 100.0 * 1.5
        steer_rad = math.radians(cmd.steering_angle_deg)
        self.linear_vel = throttle
        self.angular_vel = steer_rad * 1.2
        return {"success": True}

    def trigger_stop(self, cmd: StopCommand) -> Dict[str, Any]:
        self.linear_vel = 0.0
        self.angular_vel = 0.0
        self.speed_kmh = 0.0
        if cmd.emergency:
            self.telemetry.safety.estop = True
            self.telemetry.mission.state = "EMERGENCY_STOP"
        return {"success": True, "stopped": True, "estop": self.telemetry.safety.estop}

    def set_mode(self, mode: str) -> Dict[str, Any]:
        if mode in ["AUTONOMOUS", "MANUAL"]:
            self.telemetry.mode = mode
            if mode == "AUTONOMOUS":
                self.telemetry.mission.state = "NAVIGATING"
            else:
                self.telemetry.mission.state = "IDLE"
            return {"success": True, "mode": mode}
        return {"success": False, "error": "Invalid mode"}

    def reset_estop(self) -> Dict[str, Any]:
        self.telemetry.safety.estop = False
        self.telemetry.safety.mechanical_estop = False
        self.telemetry.safety.wireless_estop = False
        self.telemetry.mission.state = "IDLE"
        return {"success": True, "estop": False}

ros_bridge = ROS2Bridge()

