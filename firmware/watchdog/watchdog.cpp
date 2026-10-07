/**
 * @file watchdog.cpp
 * @brief 100ms hardware communication watchdog.
 * Automatically halts motors if no heartbeat is received from Jetson within 100ms.
 */

#include <stdint.h>

class HardwareWatchdog {
private:
    uint32_t last_heartbeat_ms = 0;
    const uint32_t TIMEOUT_MS = 100;
    bool watchdog_tripped = false;

public:
    void feed(uint32_t current_ms) {
        last_heartbeat_ms = current_ms;
        watchdog_tripped = false;
    }

    bool check(uint32_t current_ms) {
        if ((current_ms - last_heartbeat_ms) > TIMEOUT_MS) {
            watchdog_tripped = true;
            return false; // TIMEOUT: Trip safety!
        }
        return true; // OK
    }

    bool is_tripped() const {
        return watchdog_tripped;
    }
};

