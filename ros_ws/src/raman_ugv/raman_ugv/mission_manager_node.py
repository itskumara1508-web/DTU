"""
R.A.M.A.N. Onboard Mission Manager Node
Executes the master state machine independently onboard the Jetson/Pi.
"""
import time
from enum import Enum

class MissionState(Enum):
    IDLE = "IDLE"
    INITIALIZING = "INITIALIZING"
    LOCALIZING = "LOCALIZING"
    NAVIGATING = "NAVIGATING"
    OBSTACLE_DETECTED = "OBSTACLE_DETECTED"
    REPLANNING = "REPLANNING"
    TRAFFIC_SIGN = "TRAFFIC_SIGN"
    TRAFFIC_LIGHT = "TRAFFIC_LIGHT"
    RAMP_TRAVERSAL = "RAMP_TRAVERSAL"
    TARGET_SEARCH = "TARGET_SEARCH"
    FACE_MATCH = "FACE_MATCH"
    TARGET_ALIGNMENT = "TARGET_ALIGNMENT"
    LASER_INDICATION = "LASER_INDICATION"
    MISSION_COMPLETE = "MISSION_COMPLETE"
    EMERGENCY_STOP = "EMERGENCY_STOP"
    FAULT = "FAULT"

class MissionManagerNode:
    def __init__(self):
        self.state = MissionState.IDLE
        self.active_waypoint = 0
        self.total_waypoints = 7
        self.laser_timer_start = 0.0
        self.laser_indication_duration = 2.0  # DTU spec: >= 2.0s
        self.target_locked = False
        self.traffic_light_color = "UNKNOWN"
        self.ramp_traversed = False

    def transition_to(self, new_state: MissionState, reason: str = ""):
        old_state = self.state
        self.state = new_state
        print(f"[MISSION MANAGER] Transition: {old_state.value} -> {new_state.value}. Reason: {reason}")

    def step(self, perception_input: dict, localization_input: dict, safety_input: dict):
        # Safety override has highest priority
        if safety_input.get("estop_tripped", False):
            self.transition_to(MissionState.EMERGENCY_STOP, "E-Stop triggered")
            return self.state

        if self.state == MissionState.IDLE:
            pass  # Waiting for launch trigger

        elif self.state == MissionState.INITIALIZING:
            if perception_input.get("sensors_healthy", False):
                self.transition_to(MissionState.LOCALIZING, "Sensors validated")

        elif self.state == MissionState.LOCALIZING:
            if localization_input.get("rtk_fix", False):
                self.transition_to(MissionState.NAVIGATING, "RTK fix obtained (accuracy < 0.05m)")

        elif self.state == MissionState.NAVIGATING:
            # Check for traffic sign
            if perception_input.get("detected_sign") == "STOP":
                self.transition_to(MissionState.TRAFFIC_SIGN, "STOP sign detected")
            # Check for traffic light
            elif perception_input.get("traffic_light") == "RED":
                self.transition_to(MissionState.TRAFFIC_LIGHT, "Red traffic light active")
            # Check for obstacle
            elif perception_input.get("obstacle_distance", 99.0) < 3.0:
                self.transition_to(MissionState.OBSTACLE_DETECTED, "Obstacle within 3.0m safety buffer")
            # Check for 20 deg ramp
            elif localization_input.get("pitch_angle", 0.0) > 15.0:
                self.transition_to(MissionState.RAMP_TRAVERSAL, "Entering 20-degree ramp")
            # Check for gallery waypoint
            elif self.active_waypoint == 5:
                self.transition_to(MissionState.TARGET_SEARCH, "Arrived at Face Target Gallery")

        elif self.state == MissionState.OBSTACLE_DETECTED:
            self.transition_to(MissionState.REPLANNING, "Initiating Local A* / DWA re-route")

        elif self.state == MissionState.REPLANNING:
            if perception_input.get("safe_path_found", True):
                self.transition_to(MissionState.NAVIGATING, "Safe corridor re-established")

        elif self.state == MissionState.TRAFFIC_LIGHT:
            if perception_input.get("traffic_light") == "GREEN":
                self.transition_to(MissionState.NAVIGATING, "Green light confirmed. Resuming.")

        elif self.state == MissionState.TARGET_SEARCH:
            if perception_input.get("face_matched", False):
                self.transition_to(MissionState.FACE_MATCH, "Candidate face matched reference (>95%)")

        elif self.state == MissionState.FACE_MATCH:
            self.transition_to(MissionState.TARGET_ALIGNMENT, "Aligning pan-tilt laser module")

        elif self.state == MissionState.TARGET_ALIGNMENT:
            if perception_input.get("target_aligned", False):
                self.laser_timer_start = time.time()
                self.transition_to(MissionState.LASER_INDICATION, "Firing 532nm laser beam for 2.0s")

        elif self.state == MissionState.LASER_INDICATION:
            elapsed = time.time() - self.laser_timer_start
            if elapsed >= self.laser_indication_duration:
                self.target_locked = True
                self.active_waypoint = 6  # Route to finish
                self.transition_to(MissionState.NAVIGATING, "Target indicated for 2.0s. Proceeding to finish.")

        elif self.state == MissionState.RAMP_TRAVERSAL:
            if localization_input.get("pitch_angle", 0.0) < 5.0 and localization_input.get("position_x", 0.0) > 45.0:
                self.ramp_traversed = True
                self.transition_to(MissionState.NAVIGATING, "20-degree ramp cleared successfully")

        return self.state

def main():
    print("Starting raman_ugv mission_manager_node...")

if __name__ == "__main__":
    main()

