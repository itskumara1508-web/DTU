import React, { useState } from 'react';
import { TelemetryMessage, UITheme } from '../types/telemetry';
import { FaceRecognitionPanel } from './FaceRecognitionPanel';
import { PerformanceDashboard } from './PerformanceDashboard';
import { RamanRequirementsPanel } from './RamanRequirementsPanel';
import { Activity, Camera, Compass, Cpu, Gauge, Navigation2, Radio, Shield } from 'lucide-react';

interface TelemetryPanelProps {
  telemetry: TelemetryMessage;
  theme?: UITheme;
}

export const TelemetryPanel: React.FC<TelemetryPanelProps> = ({ telemetry, theme = 'LIGHT' }) => {
  const [activeTab, setActiveTab] = useState<'SENSORS' | 'VISION' | 'SYSTEM' | 'RAMAN_SPECS'>('SENSORS');
  const isDark = theme === 'DARK';

  return (
    <div className={`w-full h-full flex flex-col text-xs select-none shadow-sm transition-colors duration-200 border-l ${
      isDark ? 'bg-slate-950/90 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
    }`}>
      {/* Tabs Header */}
      <div className={`flex p-1.5 space-x-1 border-b ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <button
          onClick={() => setActiveTab('SENSORS')}
          className={`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1 font-bold transition-all ${
            activeTab === 'SENSORS'
              ? isDark
                ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700'
                : 'bg-white text-emerald-700 shadow-sm border border-slate-200'
              : isDark
              ? 'text-slate-400 hover:text-white'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>SENSORS</span>
        </button>

        <button
          onClick={() => setActiveTab('VISION')}
          className={`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1 font-bold transition-all ${
            activeTab === 'VISION'
              ? isDark
                ? 'bg-slate-800 text-purple-400 shadow-sm border border-slate-700'
                : 'bg-white text-purple-700 shadow-sm border border-slate-200'
              : isDark
              ? 'text-slate-400 hover:text-white'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Camera className="w-3.5 h-3.5" />
          <span>CV & AI</span>
        </button>

        <button
          onClick={() => setActiveTab('SYSTEM')}
          className={`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1 font-bold transition-all ${
            activeTab === 'SYSTEM'
              ? isDark
                ? 'bg-slate-800 text-blue-400 shadow-sm border border-slate-700'
                : 'bg-white text-blue-700 shadow-sm border border-slate-200'
              : isDark
              ? 'text-slate-400 hover:text-white'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>DIAGS</span>
        </button>

        <button
          onClick={() => setActiveTab('RAMAN_SPECS')}
          className={`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1 font-bold transition-all ${
            activeTab === 'RAMAN_SPECS'
              ? isDark
                ? 'bg-slate-800 text-amber-400 shadow-sm border border-slate-700'
                : 'bg-white text-amber-700 shadow-sm border border-slate-200'
              : isDark
              ? 'text-slate-400 hover:text-white'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>SPECS</span>
        </button>
      </div>

      {/* Tab Contents */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {activeTab === 'SENSORS' && (
          <>
            {/* 0. DYNAMIC SPEEDOMETER & POWERTRAIN CARD */}
            <div className={`rounded-xl border p-2.5 shadow-sm ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                <div className="flex items-center space-x-1.5 font-bold">
                  <Gauge className="w-3.5 h-3.5 text-blue-500" />
                  <span>VEHICLE SPEEDOMETER</span>
                </div>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono border ${
                  isDark ? 'bg-slate-800 text-cyan-400 border-slate-700' : 'bg-slate-200 text-slate-800 border-slate-300'
                }`}>
                  {telemetry.position.x.toFixed(1)}m TRAVERSED
                </span>
              </div>

              <div className="mt-2.5 flex items-center justify-between">
                {/* SVG Radial Speedometer Gauge */}
                <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke={isDark ? '#1e293b' : '#e2e8f0'} strokeWidth="8" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke={telemetry.speed > 8 ? '#ef4444' : telemetry.speed > 4 ? '#3b82f6' : '#10b981'}
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset={251.2 - (Math.min(10, telemetry.speed) / 10) * 251.2}
                      strokeLinecap="round"
                      fill="none"
                      className="transition-all duration-150"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className={`text-xl font-black leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {telemetry.speed.toFixed(1)}
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 mt-0.5">KM/H</span>
                  </div>
                </div>

                {/* Left & Right Motor RPM Bars */}
                <div className="flex-1 pl-3 space-y-2">
                  <div>
                    <div className="flex justify-between text-[10px] opacity-80 mb-0.5 font-bold">
                      <span>LEFT 3WD HUB</span>
                      <span className="font-mono text-blue-500">{telemetry.motors.left} RPM</span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div
                        className="bg-blue-600 h-full transition-all duration-150"
                        style={{ width: `${Math.min(100, (telemetry.motors.left / 450) * 100)}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] opacity-80 mb-0.5 font-bold">
                      <span>RIGHT 3WD HUB</span>
                      <span className="font-mono text-blue-500">{telemetry.motors.right} RPM</span>
                    </div>
                    <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div
                        className="bg-blue-600 h-full transition-all duration-150"
                        style={{ width: `${Math.min(100, (telemetry.motors.right / 450) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 1. LiDAR 360 Telemetry */}
            <div className={`rounded-xl border p-2.5 shadow-sm ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                <div className="flex items-center space-x-1.5 font-bold text-blue-500">
                  <Radio className="w-3.5 h-3.5" />
                  <span>360° 2D/3D LiDAR SENSOR</span>
                </div>
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${
                  isDark ? 'bg-blue-950/60 text-cyan-400 border-blue-800' : 'bg-blue-100 text-blue-800 border-blue-200'
                }`}>
                  720 PTS / 10 Hz
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="text-slate-500 text-[10px]">NEAREST OBSTACLE</div>
                  <div className={`text-sm font-bold ${telemetry.lidar.nearest_distance < 3.0 ? 'text-amber-500' : 'text-emerald-500'}`}>
                    {telemetry.lidar.nearest_distance.toFixed(1)} m
                  </div>
                </div>
                <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="text-slate-500 text-[10px]">MIN AZIMUTH</div>
                  <div className="text-sm font-bold">{telemetry.lidar.min_angle_deg.toFixed(1)}°</div>
                </div>
              </div>
              <div className={`mt-2 flex items-center justify-between text-[11px] px-2.5 py-1.5 rounded-xl border ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <span className="opacity-70">COLLISION ZONE:</span>
                <span className={`font-bold ${telemetry.lidar.collision_zone_clear ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {telemetry.lidar.collision_zone_clear ? 'CLEAR (SAFE)' : 'RISK DETECTED'}
                </span>
              </div>
            </div>

            {/* 2. IMU Attitude & Artificial Horizon */}
            <div className={`rounded-xl border p-2.5 shadow-sm ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                <div className="flex items-center space-x-1.5 font-bold text-emerald-500">
                  <Compass className="w-3.5 h-3.5" />
                  <span>IMU 9-DOF ATTITUDE</span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold">100 Hz EKF</span>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                {/* SVG Artificial Horizon Gyro */}
                <div className="relative w-20 h-20 bg-slate-900 rounded-full border-2 border-slate-400 flex items-center justify-center overflow-hidden shadow-inner shrink-0">
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-sky-500 to-amber-700 transition-transform duration-100"
                    style={{
                      transform: `translateY(${telemetry.imu.pitch * 0.8}px) rotate(${telemetry.imu.roll}deg)`
                    }}
                  />
                  <div className="absolute w-10 h-0.5 bg-white z-10 shadow-sm" />
                  <div className="absolute w-2 h-2 bg-rose-500 rounded-full z-10" />
                </div>
                {/* RPY Metrics */}
                <div className="flex-1 pl-3 space-y-1">
                  <div className="flex justify-between">
                    <span className="opacity-70">PITCH (RAMP):</span>
                    <span className={`font-bold ${Math.abs(telemetry.imu.pitch) > 10 ? 'text-amber-500' : ''}`}>
                      {telemetry.imu.pitch.toFixed(1)}°
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">ROLL:</span>
                    <span className="font-bold">{telemetry.imu.roll.toFixed(1)}°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">YAW / HEADING:</span>
                    <span className="font-bold text-blue-500">{telemetry.imu.yaw.toFixed(1)}°</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. GNSS / RTK Precise Positioning */}
            <div className={`rounded-xl border p-2.5 shadow-sm ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                <div className="flex items-center space-x-1.5 font-bold text-amber-500">
                  <Navigation2 className="w-3.5 h-3.5" />
                  <span>GNSS / RTK SENSOR</span>
                </div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold border ${
                  isDark ? 'bg-emerald-950/60 text-emerald-400 border-emerald-800' : 'bg-emerald-100 text-emerald-800 border-emerald-300'
                }`}>
                  {telemetry.gps.fix}
                </span>
              </div>
              <div className="mt-2 space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="opacity-70">LAT / LON:</span>
                  <span className="font-mono font-bold">{telemetry.gps.latitude.toFixed(6)}, {telemetry.gps.longitude.toFixed(6)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">ACCURACY:</span>
                  <span className="font-bold text-emerald-500">±{telemetry.gps.accuracy} m</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-70">SATELLITES:</span>
                  <span className="font-mono font-bold text-blue-500">{telemetry.gps.satellites} (GPS+GLO+GAL+BDS)</span>
                </div>
              </div>
            </div>

            {/* 4. Wheel Encoders & Power */}
            <div className={`rounded-xl border p-2.5 shadow-sm ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                <div className="flex items-center space-x-1.5 font-bold text-indigo-500">
                  <Gauge className="w-3.5 h-3.5" />
                  <span>ENCODERS & POWER</span>
                </div>
                <span className="text-[10px] text-slate-500 font-semibold">STM32 HAL</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="text-slate-500 text-[10px]">LEFT WHEEL RPM</div>
                  <div className="text-sm font-bold">{telemetry.motors.left}</div>
                </div>
                <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="text-slate-500 text-[10px]">RIGHT WHEEL RPM</div>
                  <div className="text-sm font-bold">{telemetry.motors.right}</div>
                </div>
                <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="text-slate-500 text-[10px]">BATTERY VOLTAGE</div>
                  <div className="text-sm font-bold text-emerald-500">{telemetry.battery_voltage} V</div>
                </div>
                <div className={`p-2 rounded-xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="text-slate-500 text-[10px]">BUS CURRENT</div>
                  <div className="text-sm font-bold text-blue-500">{telemetry.battery_current} A</div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'VISION' && (
          <FaceRecognitionPanel telemetry={telemetry} />
        )}

        {activeTab === 'SYSTEM' && (
          <PerformanceDashboard telemetry={telemetry} />
        )}

        {activeTab === 'RAMAN_SPECS' && (
          <RamanRequirementsPanel telemetry={telemetry} />
        )}
      </div>
    </div>
  );
};
