from fastapi import APIRouter, HTTPException
from typing import Dict, Any, List
from robot_gateway.telemetry.models import (
    TelemetryMessage,
    ManualVelocityCommand,
    ManualSteeringCommand,
    StopCommand
)
from robot_gateway.ros_bridge.ros_bridge import ros_bridge

router = APIRouter()

@router.get("/")
def get_gateway_info() -> Dict[str, Any]:
    return {
        "system": "CTRL FIRST Robotics Gateway",
        "version": "2.4.0",
        "competition": "Autonomous UGV Platform",
        "ros2_installed": ros_bridge.is_ros2_available,
        "protocol": "WebSocket + REST",
        "tagline": "CTRL FIRST: ONE UGV. MULTIPLE ENVIRONMENTS. ONE AUTONOMOUS BRAIN."
    }

@router.get("/telemetry", response_model=TelemetryMessage)
def get_telemetry():
    return ros_bridge.get_latest_telemetry()

@router.get("/robot/status")
def get_robot_status():
    t = ros_bridge.get_latest_telemetry()
    return {
        "mode": t.mode,
        "battery_pct": t.battery,
        "voltage": t.battery_voltage,
        "speed_kmh": t.speed,
        "health": t.health.model_dump(),
        "safety_armed": not t.safety.estop
    }

@router.get("/navigation/status")
def get_navigation_status():
    t = ros_bridge.get_latest_telemetry()
    return {
        "mission_state": t.mission.state,
        "current_position": t.position.model_dump(),
        "active_waypoint": t.mission.active_waypoint_idx,
        "total_waypoints": t.mission.total_waypoints,
        "distance_to_target": t.mission.distance_to_target,
        "safe_corridor_active": True,
        "obstacle_avoidance_engaged": t.mission.state == "OBSTACLE_DETECTED"
    }

@router.get("/navigation/path")
def get_navigation_path():
    # Return competition track waypoints
    return {
        "global_path": [
            {"x": 0.0, "y": 0.0, "z": 0.0, "type": "START"},
            {"x": 10.0, "y": 0.0, "z": 0.0, "type": "TRACK_STRAIGHT"},
            {"x": 20.0, "y": 0.0, "z": 0.0, "type": "OBSTACLE_CORRIDOR"},
            {"x": 30.0, "y": 0.0, "z": 0.0, "type": "TRAFFIC_LIGHT"},
            {"x": 42.0, "y": 0.0, "z": 2.1, "type": "RAMP_20_DEG"},
            {"x": 55.0, "y": 0.0, "z": 0.0, "type": "TARGET_GALLERY"},
            {"x": 65.0, "y": 0.0, "z": 0.0, "type": "FINISH"}
        ],
        "local_trajectory": [
            {"x": ros_bridge.x, "y": ros_bridge.y},
            {"x": ros_bridge.x + 2.0, "y": ros_bridge.y + 0.1},
            {"x": ros_bridge.x + 4.0, "y": ros_bridge.y}
        ]
    }

@router.get("/sensors/lidar")
def get_lidar_telemetry():
    t = ros_bridge.get_latest_telemetry()
    return t.lidar.model_dump()

@router.get("/sensors/imu")
def get_imu_telemetry():
    t = ros_bridge.get_latest_telemetry()
    return t.imu.model_dump()

@router.get("/sensors/gps")
def get_gps_telemetry():
    t = ros_bridge.get_latest_telemetry()
    return t.gps.model_dump()

@router.get("/motor/status")
def get_motor_status():
    t = ros_bridge.get_latest_telemetry()
    return {
        "left_rpm": t.motors.left,
        "right_rpm": t.motors.right,
        "motor_temp_c": t.motors.temp_c,
        "motor_current_a": t.motors.current_a,
        "watchdog_ok": t.safety.watchdog_ok
    }

@router.get("/mission/state")
def get_mission_state():
    t = ros_bridge.get_latest_telemetry()
    return t.mission.model_dump()

@router.post("/mission/state")
def set_mission_state(data: Dict[str, Any]):
    new_state = data.get("state")
    if new_state:
        ros_bridge.telemetry.mission.state = new_state
        return {"success": True, "state": new_state}
    raise HTTPException(status_code=400, detail="Missing 'state' in request")

@router.get("/safety/status")
def get_safety_status():
    t = ros_bridge.get_latest_telemetry()
    return t.safety.model_dump()

@router.post("/safety/reset")
def reset_safety_estop():
    return ros_bridge.reset_estop()

@router.post("/robot/mode")
def set_robot_mode(data: Dict[str, str]):
    mode = data.get("mode")
    if not mode:
        raise HTTPException(status_code=400, detail="Missing 'mode'")
    res = ros_bridge.set_mode(mode)
    if not res.get("success"):
        raise HTTPException(status_code=400, detail=res.get("error"))
    return res

# MANUAL CONTROL COMMANDS (Strictly gated by manual mode)
@router.post("/cmd/velocity")
def post_manual_velocity(cmd: ManualVelocityCommand):
    result = ros_bridge.process_manual_velocity(cmd)
    if not result.get("success"):
        raise HTTPException(status_code=403, detail=result.get("error"))
    return result

@router.post("/cmd/steering")
def post_manual_steering(cmd: ManualSteeringCommand):
    result = ros_bridge.process_manual_steering(cmd)
    if not result.get("success"):
        raise HTTPException(status_code=403, detail=result.get("error"))
    return result

@router.post("/cmd/stop")
def post_manual_stop(cmd: StopCommand):
    return ros_bridge.trigger_stop(cmd)

