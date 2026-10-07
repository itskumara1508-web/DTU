/**
 * @file hal_protocol.h
 * @brief Hardware Abstraction Layer Serial/CAN Protocol between Jetson and STM32/ESP32.
 * @details Implements framed packets with CRC16 for deterministic robotics communication.
 */

#ifndef HAL_PROTOCOL_H
#define HAL_PROTOCOL_H

#include <stdint.h>
#include <stdbool.h>

#define HAL_PACKET_HEADER_0  0xAA
#define HAL_PACKET_HEADER_1  0x55

// Message IDs: Jetson -> MCU
#define MSG_CMD_VELOCITY     0x10
#define MSG_CMD_STEERING     0x11
#define MSG_CMD_ESTOP_TRIP   0x12
#define MSG_CMD_ESTOP_RESET  0x13
#define MSG_CMD_WATCHDOG_PING 0x14

// Message IDs: MCU -> Jetson
#define MSG_FEEDBACK_ODOM    0x20
#define MSG_FEEDBACK_POWER   0x21
#define MSG_FEEDBACK_SAFETY  0x22

#pragma pack(push, 1)

typedef struct {
    uint8_t header[2];       // 0xAA, 0x55
    uint8_t msg_id;
    uint8_t payload_len;
    uint8_t seq;
} HalHeader_t;

// Jetson -> MCU: Velocity & Steering command
typedef struct {
    int16_t linear_velocity_mms;   // mm/s
    int16_t steering_angle_mdeg;   // millidegrees (-35000 to +35000)
    uint16_t max_torque_limit;     // mA current limit
    uint8_t  enable_flag;
} HalCmdVelocityPayload_t;

// MCU -> Jetson: Wheel Odometry & RPM feedback
typedef struct {
    int32_t left_encoder_ticks;
    int32_t right_encoder_ticks;
    int16_t left_rpm;
    int16_t right_rpm;
    uint16_t left_current_ma;
    uint16_t right_current_ma;
    uint8_t  motor_temp_c;
} HalOdomFeedbackPayload_t;

// MCU -> Jetson: Safety & E-stop hardware status
typedef struct {
    uint8_t mechanical_estop_pin_active; // 1 = tripped, 0 = armed
    uint8_t wireless_estop_pin_active;   // 1 = tripped, 0 = armed
    uint8_t relay_power_latched;         // 1 = motors energized
    uint16_t bus_voltage_mv;             // e.g. 24600 mV
    uint16_t total_current_ma;
    uint8_t watchdog_tripped;
} HalSafetyFeedbackPayload_t;

#pragma pack(pop)

uint16_t hal_calculate_crc16(const uint8_t *data, uint16_t length);
bool hal_parse_packet(const uint8_t *buf, uint16_t len, HalHeader_t *header, uint8_t *payload);

#endif // HAL_PROTOCOL_H

