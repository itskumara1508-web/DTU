import React from 'react';
import { OperatingMode, TelemetryMessage, UITheme } from '../types/telemetry';
import {
  AlertTriangle,
  Battery,
  Camera,
  CheckCircle2,
  Compass,
  Cpu,
  Layers,
  Navigation,
  Radio,
  Server,
  Shield,
  Wifi,
  WifiOff,
  XCircle,
  Zap
} from 'lucide-react';

interface HardwarePageProps {
  mode: OperatingMode;
  telemetry: TelemetryMessage;
  isConnected: boolean;
  theme?: UITheme;
  onRetryConnection: () => void;
}

export const HardwarePage: React.FC<HardwarePageProps> = ({
  mode,
  telemetry,
  isConnected,
  theme = 'DARK',
  onRetryConnection,
}) => {
  const isRealHardware = mode === 'REAL_HARDWARE';
  const showConnected = isRealHardware ? isConnected : true;
  const isDark = theme === 'DARK';

  const devices = [
    {
      name: 'ONBOARD COMPUTER',
      model: 'NVIDIA Jetson Orin Nano (8GB)',
      role: 'Master Autonomy & ROS 2 Host',
      interface: 'PCIe / USB 3.2 / CAN',
      connected: showConnected && telemetry.health.jetson_connected,
      icon: Cpu,
    },
    {
      name: 'MICROCONTROLLER (MCU)',
      model: 'STM32F407VET6 (168MHz ARM Cortex-M4)',
      role: 'Motor PWM, 1kHz PID, Encoders, Safety HAL',
      interface: 'UART / CAN Bus 2.0B (1 Mbps)',
      connected: showConnected && telemetry.health.stm32_connected,
      icon: Server,
    },
    {
      name: 'MOTOR DRIVERS',
      model: 'VESC 6 Dual 50A BLDC Controllers',
      role: '6WD Brushless Hub Motor Commutation',
      interface: 'CAN Bus ID 0x14 / 0x15',
      connected: showConnected && telemetry.health.motor_driver_connected,
      icon: Zap,
    },
    {
      name: 'STEREO VISION CAMERA',
      model: 'Intel RealSense D435i / USB3 RGB',
      role: 'Object, Traffic Light, & Face Detection',
      interface: 'USB 3.1 Gen 1 (30 FPS 1080p)',
      connected: showConnected && telemetry.health.camera_connected,
      icon: Camera,
    },
    {
      name: '360° LiDAR SCANNER',
      model: 'Slamtec RPLiDAR S2 (30m Range)',
      role: 'Obstacle Avoidance & 2D/3D Point Cloud',
      interface: 'Ethernet / UART (7,200 pts/s)',
      connected: showConnected && telemetry.health.lidar_connected,
      icon: Radio,
    },
    {
      name: 'IMU 9-AXIS SENSOR',
      model: 'Bosch BNO085 9-DOF AHRS',
      role: 'Roll, 20° Ramp Pitch, Yaw EKF Fusion',
      interface: 'I2C / SPI (100 Hz)',
      connected: showConnected && telemetry.health.imu_connected,
      icon: Compass,
    },
    {
      name: 'RTK GNSS DUAL RECEIVER',
      model: 'u-blox ZED-F9P Multi-Band RTK',
      role: 'Centimeter-Level Localization (±0.02m)',
      interface: 'UART / USB (10 Hz RTK Fix)',
      connected: showConnected && telemetry.health.gps_connected,
      icon: Navigation,
    },
    {
      name: 'SAFETY E-STOP SUBSYSTEM',
      model: 'Normally Closed Loop + LoRa 868MHz',
      role: '≥150m Range Wireless & Mechanical Interlock',
      interface: 'Hardware Relay Contactor',
      connected: showConnected && telemetry.health.estop_connected && !telemetry.safety.estop,
      icon: Shield,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Title & Architecture Banner */}
      <div className={`p-6 rounded-2xl border shadow-xl ${
        isDark ? 'bg-slate-900/80 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-black tracking-wider">HARDWARE INTEGRATION ARCHITECTURE</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                isRealHardware
                  ? isConnected
                    ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800'
                    : 'bg-rose-950/60 text-rose-400 border-rose-800'
                  : 'bg-blue-950/60 text-cyan-400 border-blue-800'
              }`}>
                {isRealHardware ? (isConnected ? 'LIVE PHYSICAL HARDWARE' : 'DISCONNECTED') : 'HARDWARE-IN-THE-LOOP SIM'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-3xl">
              Strict physical decoupling: Autonomous state machine runs strictly <strong>ONBOARD</strong> the Jetson computer.
              The Web GCS receives unidirectional telemetry via WebSocket and never issues low-level motor PWM directly.
            </p>
          </div>

          {isRealHardware && !isConnected && (
            <button
              onClick={onRetryConnection}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors shadow-md"
            >
              RECONNECT TO GATEWAY
            </button>
          )}
        </div>
      </div>

      {/* Gateway Alert Banner if in Real Hardware mode and disconnected */}
      {isRealHardware && !isConnected && (
        <div className="p-4 rounded-2xl bg-rose-950/40 border-2 border-rose-800 text-rose-200 shadow-xl">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-sm tracking-wide text-rose-300">
                HARDWARE CONNECTION UNAVAILABLE
              </div>
              <p className="mt-1 text-slate-300 leading-relaxed text-xs">
                The Ground Control Station could not connect to the local Robotics Gateway at{' '}
                <code className="bg-slate-900 border border-rose-800 px-1 py-0.5 rounded font-mono text-rose-400 font-bold">ws://127.0.0.1:8000/ws/telemetry</code>.
                Telemetry will not be faked in Real Hardware Mode.
              </p>
              <div className="mt-3 p-3 bg-slate-950 rounded-xl border border-rose-900 font-mono text-xs text-slate-300">
                <span className="text-slate-500"># Launch gateway daemon on companion computer:</span><br />
                <span className="text-cyan-400 font-bold">$ cd /Users/ankitsheoran/Downloads/DTU</span><br />
                <span className="text-cyan-400 font-bold">$ ./robot_gateway/venv/bin/python -m robot_gateway.main</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hardware Node Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {devices.map((dev) => {
          const Icon = dev.icon;
          return (
            <div
              key={dev.name}
              className={`rounded-2xl p-4 border transition-all shadow-md ${
                dev.connected
                  ? isDark
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                  : 'bg-slate-900/30 border-rose-900/60 opacity-80'
              }`}
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-200 dark:border-slate-700/40">
                <div className="flex items-center space-x-2.5">
                  <div className={`p-2 rounded-xl ${dev.connected ? isDark ? 'bg-blue-600/20 text-cyan-400' : 'bg-blue-50 text-blue-700' : isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-100 text-slate-500'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-semibold">{dev.name}</div>
                    <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{dev.model}</div>
                  </div>
                </div>
                {dev.connected ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-600" />
                )}
              </div>

              <div className="mt-2.5 space-y-1.5 text-[11px]">
                <div>
                  <span className="text-slate-500">ROLE:</span> <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{dev.role}</span>
                </div>
                <div>
                  <span className="text-slate-500">BUS:</span> <span className={`font-mono font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>{dev.interface}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Signal Architecture Diagram */}
      <div className={`p-6 rounded-2xl border shadow-xl ${
        isDark ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <div className="text-sm font-black tracking-wider uppercase mb-3">
          DATAFLOW & HARNESS ARCHITECTURE
        </div>
        <div className={`p-4 rounded-xl border font-mono text-xs overflow-x-auto leading-relaxed ${
          isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-300 text-slate-800'
        }`}>
          <pre>{`[ WEB GROUND CONTROL STATION (React + Three.js) ]
         │
         │  Local WebSocket (JSON Telemetry @ 30Hz)
         ▼
[ LOCAL ROBOTICS GATEWAY (Python FastAPI) ]
         │
         ├── ROS 2 DDS / Zenoh Micro-Bridge
         ├── /raman/mission_state
         ├── /raman/perception/detections
         └── /safety/estop_cmd
         ▼
[ ONBOARD COMPUTE: NVIDIA Jetson Orin Nano ] (100% Autonomy Execution)
         ├── Camera (RealSense USB 3.0)
         ├── RPLiDAR S2 (Ethernet UDP)
         ├── IMU BNO085 (SPI 100Hz)
         └── RTK GNSS (UART 10Hz)
         │
         │  UART / CAN Bus 2.0B (1 Mbps)
         ▼
[ MICROCONTROLLER HAL: STM32F407 (168MHz) ]
         ├── Dual VESC 6 BLDC Drivers (CAN ID 0x14, 0x15)
         ├── Closed-Loop Speed/Heading PID (1 kHz)
         ├── Wheel Optical Encoders (Quadrature Ticks)
         └── Normally Closed Hardware Safety Relays & E-Stop`}</pre>
        </div>
      </div>
    </div>
  );
};
