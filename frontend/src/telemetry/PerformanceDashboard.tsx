import React from 'react';
import { TelemetryMessage } from '../types/telemetry';
import { Cpu, Network, Thermometer } from 'lucide-react';

interface PerformanceDashboardProps {
  telemetry: TelemetryMessage;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ telemetry }) => {
  return (
    <div className="space-y-3">
      {/* 1. Onboard Compute Health */}
      <div className="bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center space-x-1.5 font-bold text-blue-700">
            <Cpu className="w-3.5 h-3.5" />
            <span>ONBOARD JETSON ORIN METRICS</span>
          </div>
          <span className="text-[10px] text-emerald-700 font-bold">NOMINAL</span>
        </div>

        <div className="mt-2 space-y-2.5">
          {/* CPU Usage */}
          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-slate-600 font-medium">CPU LOAD (8-CORE ARM):</span>
              <span className="font-bold text-slate-900">{telemetry.health.cpu_usage_pct}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full"
                style={{ width: `${telemetry.health.cpu_usage_pct}%` }}
              />
            </div>
          </div>

          {/* GPU Usage */}
          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-slate-600 font-medium">GPU LOAD (AMPERE 1024-CORE):</span>
              <span className="font-bold text-slate-900">{telemetry.health.gpu_usage_pct}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full rounded-full"
                style={{ width: `${telemetry.health.gpu_usage_pct}%` }}
              />
            </div>
          </div>

          {/* RAM Usage */}
          <div>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="text-slate-600 font-medium">RAM UTILIZATION:</span>
              <span className="font-bold text-slate-900">{telemetry.health.ram_usage_gb} GB / 8.0 GB</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-purple-600 h-full rounded-full"
                style={{ width: `${(telemetry.health.ram_usage_gb / 8.0) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Frequency & Latency Pipeline */}
      <div className="bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center space-x-1.5 font-bold text-indigo-700">
            <Network className="w-3.5 h-3.5" />
            <span>NODE PIPELINE FREQUENCIES</span>
          </div>
          <span className="text-[10px] text-slate-500 font-semibold">ROS 2 IPC</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2 text-[11px]">
          <div className="bg-white p-2 rounded-md border border-slate-200">
            <div className="text-slate-500 text-[10px]">NAV FREQUENCY</div>
            <div className="font-bold text-emerald-700">50 Hz</div>
          </div>
          <div className="bg-white p-2 rounded-md border border-slate-200">
            <div className="text-slate-500 text-[10px]">CAMERA INFERENCE</div>
            <div className="font-bold text-blue-700">30 FPS (33ms)</div>
          </div>
          <div className="bg-white p-2 rounded-md border border-slate-200">
            <div className="text-slate-500 text-[10px]">LiDAR SCAN RATE</div>
            <div className="font-bold text-slate-800">7,200 pts/s</div>
          </div>
          <div className="bg-white p-2 rounded-md border border-slate-200">
            <div className="text-slate-500 text-[10px]">GATEWAY PING</div>
            <div className="font-bold text-emerald-700">{telemetry.safety.heartbeat_age_ms} ms</div>
          </div>
        </div>
      </div>

      {/* 3. Temperatures & Thermal System */}
      <div className="bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center space-x-1.5 font-bold text-amber-700">
            <Thermometer className="w-3.5 h-3.5" />
            <span>THERMAL MONITOR</span>
          </div>
          <span className="text-[10px] text-slate-500 font-semibold">SAFE LIMIT &lt; 75°C</span>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2 text-[11px]">
          <div className="bg-white p-2 rounded-md border border-slate-200">
            <div className="text-slate-500 text-[10px]">JETSON SOC TEMP</div>
            <div className="font-bold text-slate-900">{telemetry.health.temperature_c}°C</div>
          </div>
          <div className="bg-white p-2 rounded-md border border-slate-200">
            <div className="text-slate-500 text-[10px]">MOTOR DRIVERS</div>
            <div className="font-bold text-slate-900">{telemetry.motors.temp_c}°C</div>
          </div>
        </div>
      </div>
    </div>
  );
};
