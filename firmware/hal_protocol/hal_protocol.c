#include "hal_protocol.h"

uint16_t hal_calculate_crc16(const uint8_t *data, uint16_t length) {
    uint16_t crc = 0xFFFF;
    for (uint16_t i = 0; i < length; i++) {
        crc ^= (uint16_t)data[i];
        for (uint8_t j = 0; j < 8; j++) {
            if (crc & 0x0001) {
                crc = (crc >> 1) ^ 0xA001;
            } else {
                crc = crc >> 1;
            }
        }
    }
    return crc;
}

bool hal_parse_packet(const uint8_t *buf, uint16_t len, HalHeader_t *header, uint8_t *payload) {
    if (len < sizeof(HalHeader_t) + 2) {
        return false;
    }
    if (buf[0] != HAL_PACKET_HEADER_0 || buf[1] != HAL_PACKET_HEADER_1) {
        return false;
    }
    const HalHeader_t *hdr = (const HalHeader_t *)buf;
    if (len < sizeof(HalHeader_t) + hdr->payload_len + 2) {
        return false;
    }
    uint16_t expected_crc = hal_calculate_crc16(buf, sizeof(HalHeader_t) + hdr->payload_len);
    uint16_t received_crc = (uint16_t)buf[sizeof(HalHeader_t) + hdr->payload_len] |
                            ((uint16_t)buf[sizeof(HalHeader_t) + hdr->payload_len + 1] << 8);

    if (expected_crc != received_crc) {
        return false;
    }

    *header = *hdr;
    for (uint8_t i = 0; i < hdr->payload_len; i++) {
        payload[i] = buf[sizeof(HalHeader_t) + i];
    }
    return true;
}

