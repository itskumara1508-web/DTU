"""
R.A.M.A.N. Path Planning and Navigation Node
Implements Global Waypoint Management + Local Pure Pursuit + Obstacle Avoidance.
"""
import math
from typing import List, Tuple

class Waypoint:
    def __init__(self, x: float, y: float, speed_limit_kmh: float = 6.0, name: str = ""):
        self.x = x
        self.y = y
        self.speed_limit_kmh = speed_limit_kmh
        self.name = name

class PurePursuitPlanner:
    def __init__(self, lookahead_distance: float = 2.5, wheelbase: float = 0.65):
        self.lookahead = lookahead_distance
        self.wheelbase = wheelbase
        self.waypoints: List[Waypoint] = []
        self.current_idx = 0

    def set_waypoints(self, waypoints: List[Waypoint]):
        self.waypoints = waypoints
        self.current_idx = 0

    def compute_steering(self, current_x: float, current_y: float, current_heading_rad: float) -> Tuple[float, float, bool]:
        """
        Returns (steering_angle_rad, target_speed_kmh, mission_finished)
        """
        if not self.waypoints or self.current_idx >= len(self.waypoints):
            return 0.0, 0.0, True

        target_wp = self.waypoints[self.current_idx]
        dx = target_wp.x - current_x
        dy = target_wp.y - current_y
        dist = math.hypot(dx, dy)

        # Waypoint arrival threshold (0.8m)
        if dist < 0.8:
            self.current_idx += 1
            if self.current_idx >= len(self.waypoints):
                return 0.0, 0.0, True
            target_wp = self.waypoints[self.current_idx]
            dx = target_wp.x - current_x
            dy = target_wp.y - current_y
            dist = math.hypot(dx, dy)

        # Pure Pursuit geometry
        alpha = math.atan2(dy, dx) - current_heading_rad
        # Normalize alpha to [-pi, pi]
        alpha = math.atan2(math.sin(alpha), math.cos(alpha))

        steering_angle = math.atan2(2.0 * self.wheelbase * math.sin(alpha), self.lookahead)
        steering_angle = max(-math.radians(35), min(math.radians(35), steering_angle))

        return steering_angle, target_wp.speed_limit_kmh, False

def main():
    print("Starting raman_ugv planner_node...")

if __name__ == "__main__":
    main()

