/**
 * @file motor_controller.cpp
 * @brief Closed-loop velocity PID motor controller for R.A.M.A.N. UGV.
 * Runs at 1 kHz on STM32 / ESP32.
 */

#include <stdint.h>
#include <algorithm>

class MotorPID {
public:
    float kp = 1.8f;
    float ki = 0.35f;
    float kd = 0.08f;
    float integral = 0.0f;
    float prev_error = 0.0f;
    float max_output = 1000.0f; // PWM range 0-1000

    float compute(float target_rpm, float current_rpm, float dt) {
        float error = target_rpm - current_rpm;
        integral += error * dt;
        // Anti-windup clamping
        integral = std::max(-300.0f, std::min(300.0f, integral));
        float derivative = (error - prev_error) / dt;
        prev_error = error;

        float output = (kp * error) + (ki * integral) + (kd * derivative);
        return std::max(-max_output, std::min(max_output, output));
    }

    void reset() {
        integral = 0.0f;
        prev_error = 0.0f;
    }
};

class UGVMotorDriver {
private:
    MotorPID left_pid;
    MotorPID right_pid;
    bool emergency_stopped = false;

public:
    void init() {
        left_pid.reset();
        right_pid.reset();
    }

    void set_emergency_stop(bool stop) {
        emergency_stopped = stop;
        if (stop) {
            set_left_pwm(0);
            set_right_pwm(0);
            left_pid.reset();
            right_pid.reset();
        }
    }

    void update_control_loop(float target_left_rpm, float target_right_rpm,
                             float current_left_rpm, float current_right_rpm,
                             float dt) {
        if (emergency_stopped) {
            set_left_pwm(0);
            set_right_pwm(0);
            return;
        }

        float left_pwm = left_pid.compute(target_left_rpm, current_left_rpm, dt);
        float right_pwm = right_pid.compute(target_right_rpm, current_right_rpm, dt);

        set_left_pwm((int16_t)left_pwm);
        set_right_pwm((int16_t)right_pwm);
    }

private:
    void set_left_pwm(int16_t pwm) {
        // Hardware timer PWM write on STM32 TIM1_CH1 / TIM1_CH2
    }

    void set_right_pwm(int16_t pwm) {
        // Hardware timer PWM write on STM32 TIM1_CH3 / TIM1_CH4
    }
};

