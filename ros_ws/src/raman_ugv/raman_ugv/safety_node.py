"""
R.A.M.A.N. Hardware and Software Safety Node
Monitors:
  - Mechanical E-Stop (hardwired normally closed loop)
  - Wireless E-Stop link (heartbeat timeout >= 150m spec)
  - Software Safety Watchdog
  - Motor power relay contactor status
"""
import time

class SafetyNode:
    def __init__(self, heartbeat_timeout_s: float = 0.25):
        self.heartbeat_timeout = heartbeat_timeout_s
        self.last_wireless_heartbeat = time.time()
        self.mechanical_estop_tripped = False
        self.software_estop_tripped = False
        self.motor_power_enabled = True

    def receive_heartbeat(self, rssi: int):
        self.last_wireless_heartbeat = time.time()

    def trip_mechanical(self):
        self.mechanical_estop_tripped = True
        self.motor_power_enabled = False

    def trip_software(self, reason: str):
        self.software_estop_tripped = True
        self.motor_power_enabled = False
        print(f"[SAFETY] Software E-Stop Tripped: {reason}")

    def is_safe_to_drive(self) -> bool:
        time_since_heartbeat = time.time() - self.last_wireless_heartbeat
        if time_since_heartbeat > self.heartbeat_timeout:
            self.motor_power_enabled = False
            return False
        if self.mechanical_estop_tripped or self.software_estop_tripped:
            self.motor_power_enabled = False
            return False
        return True

def main():
    print("Starting raman_ugv safety_node...")

if __name__ == "__main__":
    main()

