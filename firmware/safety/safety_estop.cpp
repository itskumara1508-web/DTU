/**
 * @file safety_estop.cpp
 * @brief Independent hardware E-Stop interrupt handler.
 * Controls main battery isolation contactor relay.
 */

#include <stdint.h>

class SafetyInterlock {
private:
    bool mechanical_pin_state = false;
    bool wireless_pin_state = false;
    bool relay_energized = false;

public:
    void init() {
        // Configure GPIO pins with pull-ups for normally-closed E-Stop safety loop
        set_contactor_relay(false); // Disarmed on boot
    }

    // Called immediately on GPIO EXTI edge interrupt
    void on_estop_interrupt(bool mechanical_open, bool wireless_open) {
        mechanical_pin_state = mechanical_open;
        wireless_pin_state = wireless_open;

        if (mechanical_open || wireless_open) {
            // Cut power immediately to motor driver bus
            set_contactor_relay(false);
        }
    }

    void arm_system() {
        if (!mechanical_pin_state && !wireless_pin_state) {
            set_contactor_relay(true);
        }
    }

    bool is_armed() const {
        return relay_energized;
    }

private:
    void set_contactor_relay(bool enable) {
        relay_energized = enable;
        // Hardware GPIO toggle to solid-state contactor
    }
};

