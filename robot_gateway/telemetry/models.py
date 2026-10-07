from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
import time

class PositionData(BaseModel):
    x: float = 0.0
    y: float = 0.0
    heading: float = 0.0  # degrees

class IMUData(BaseModel):
    roll: float = 0.0     # degrees
    pitch: float = 0.0    # degrees
    yaw: float = 0.0      # degrees
    accel_x: float = 0.0
    accel_y: float = 0.0
    accel_z: float = 9.81

class GPSData(BaseModel):
    fix: str = "RTK_FIXED"
    latitude: float = 28.749912  # DTU Delhi Campus
    longitude: float = 77.117024
    altitude: float = 218.4
    satellites: int = 24
    accuracy: float = 0.02  # meters

class MotorData(BaseModel):
    left: int = 0         # RPM
    right: int = 0        # RPM
    temp_c: float = 38.5
    current_a: float = 3.2

class SafetyData(BaseModel):
    estop: bool = False
    mechanical_estop: bool = False
    wireless_estop: bool = False
    software_safety: bool = True
    wireless_link: bool = True
    heartbeat_age_ms: int = 15
    watchdog_ok: bool = True
    link_rssi: int = -58  # dBm

class LidarTelemetry(BaseModel):
    points_count: int = 720
    nearest_distance: float = 8.5
    min_angle_deg: float = 0.0
    collision_zone_clear: bool = True

class VisionTelemetry(BaseModel):
    detected_sign: Optional[str] = None
    sign_confidence: float = 0.0
    traffic_light_state: Optional[str] = None  # RED, YELLOW, GREEN
    face_matched: bool = False
    face_confidence: float = 0.0
    target_aligned: bool = False

class MissionTelemetry(BaseModel):
    state: str = "IDLE"  # IDLE, INITIALIZING, LOCALIZING, NAVIGATING, etc.
    active_waypoint_idx: int = 0
    total_waypoints: int = 6
    distance_to_target: float = 25.0
    laser_active: bool = False
    laser_timer: float = 0.0
    step_description: str = "Awaiting mission start"

class HardwareHealth(BaseModel):
    jetson_connected: bool = True
    stm32_connected: bool = True
    motor_driver_connected: bool = True
    camera_connected: bool = True
    lidar_connected: bool = True
    imu_connected: bool = True
    gps_connected: bool = True
    estop_connected: bool = True
    cpu_usage_pct: float = 28.4
    gpu_usage_pct: float = 42.1
    ram_usage_gb: float = 2.1
    temperature_c: float = 44.5

class TelemetryMessage(BaseModel):
    timestamp: float = Field(default_factory=time.time)
    mode: str = "AUTONOMOUS"  # AUTONOMOUS or MANUAL
    speed: float = 0.0        # km/h
    battery: int = 87         # %
    battery_voltage: float = 24.6
    battery_current: float = 4.2
    position: PositionData = Field(default_factory=PositionData)
    imu: IMUData = Field(default_factory=IMUData)
    gps: GPSData = Field(default_factory=GPSData)
    motors: MotorData = Field(default_factory=MotorData)
    safety: SafetyData = Field(default_factory=SafetyData)
    lidar: LidarTelemetry = Field(default_factory=LidarTelemetry)
    vision: VisionTelemetry = Field(default_factory=VisionTelemetry)
    mission: MissionTelemetry = Field(default_factory=MissionTelemetry)
    health: HardwareHealth = Field(default_factory=HardwareHealth)

class ManualVelocityCommand(BaseModel):
    linear_x: float  # m/s (-1.5 to 1.5)
    angular_z: float # rad/s (-1.0 to 1.0)
    source: str = "WEB_MANUAL_OVERRIDE"

class ManualSteeringCommand(BaseModel):
    steering_angle_deg: float # -35 to 35
    throttle_pct: float       # -100 to 100

class StopCommand(BaseModel):
    reason: str = "USER_STOP_COMMAND"
    emergency: bool = False

