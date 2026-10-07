import React from 'react';
import { OperatingMode, TelemetryMessage, UITheme } from '../types/telemetry';
import {
  Battery,
  Bot,
  Play,
  RotateCcw,
  Shield,
  ShieldAlert,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Cpu,
  Layers,
  Network,
  Sun,
  Moon,
  Radio,
  Zap,
} from 'lucide-react';

interface TopStatusBarProps {
  mode: OperatingMode;
  onModeChange: (mode: OperatingMode) => void;
  telemetry: TelemetryMessage;
  isConnected: boolean;
  soundEnabled: boolean;
  onToggleSound: () => void;
  theme: UITheme;
  onToggleTheme: () => void;
  onStartFullDemo: () => void;
  onResetMission: () => void;
  onToggleTrafficLight?: () => void;
  activeNavTab: 'MISSION_CONTROL' | 'HARDWARE' | 'ROS_NODES';
  onNavTabChange: (tab: 'MISSION_CONTROL' | 'HARDWARE' | 'ROS_NODES') => void;
}

export const TopStatusBar: React.FC<TopStatusBarProps> = ({
  mode,
  onModeChange,
  telemetry,
  isConnected,
  soundEnabled,
  onToggleSound,
  theme,
  onToggleTheme,
  onStartFullDemo,
  onResetMission,
  onToggleTrafficLight,
  activeNavTab,
  onNavTabChange,
}) => {
  const isEstop = telemetry.safety.estop;
  const trafficLightState = telemetry.vision.traffic_light_state || 'GREEN';
  const isDark = theme === 'DARK';

  return (
    <header className={`h-14 px-3 md:px-5 flex items-center justify-between select-none z-30 shrink-0 transition-colors duration-200 border-b ${
      isDark
        ? 'bg-slate-950/95 border-slate-800 text-slate-100 shadow-lg'
        : 'bg-white/95 border-slate-200 text-slate-900 shadow-sm'
    }`}>
      {/* 1. Left: Branding & Core Navigation Tabs */}
      <div className="flex items-center space-x-3">
        {/* Brand Icon & Name */}
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md font-black shrink-0">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5 leading-none">
              <span className={`text-base font-black tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                CTRL FIRST
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                isDark ? 'bg-blue-950/70 text-cyan-400 border-blue-800' : 'bg-blue-50 text-blue-700 border-blue-200'
              }`}>
                v3.0 PRO
              </span>
            </div>
            <div className="text-[9px] text-slate-500 font-mono tracking-tight mt-0.5 hidden sm:block">
              AUTONOMOUS UGV GROUND CONTROL STATION
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={`hidden md:flex items-center space-x-1 ml-3 pl-3 border-l text-xs font-bold ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <button
            onClick={() => onNavTabChange('MISSION_CONTROL')}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeNavTab === 'MISSION_CONTROL'
                ? isDark
                  ? 'bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm'
                  : 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>MISSION CONTROL</span>
          </button>

          <button
            onClick={() => onNavTabChange('HARDWARE')}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeNavTab === 'HARDWARE'
                ? isDark
                  ? 'bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm'
                  : 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-600" />
            <span>HARDWARE</span>
          </button>

          <button
            onClick={() => onNavTabChange('ROS_NODES')}
            className={`px-3 py-1.5 rounded-xl transition-all flex items-center space-x-1.5 ${
              activeNavTab === 'ROS_NODES'
                ? isDark
                  ? 'bg-slate-800 text-cyan-400 border border-slate-700 shadow-sm'
                  : 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                : isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Network className="w-3.5 h-3.5 text-purple-600" />
            <span>ROS 2 GRAPH</span>
          </button>
        </div>
      </div>

      {/* 2. Center: Mode Switcher & Master Mission Trigger */}
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* Operating Mode Switcher */}
        <div className={`flex rounded-xl p-0.5 text-xs font-bold border ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-300'
        }`}>
          <button
            onClick={() => onModeChange('SIMULATION')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              mode === 'SIMULATION'
                ? isDark
                  ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700'
                  : 'bg-white text-emerald-700 shadow-sm border border-slate-200'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            SIMULATION
          </button>
          <button
            onClick={() => onModeChange('REAL_HARDWARE')}
            className={`px-2.5 py-1 rounded-lg transition-all ${
              mode === 'REAL_HARDWARE'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            REAL UGV
          </button>
        </div>

        {/* ONE-CLICK FULL AUTONOMOUS MISSION RUNNER */}
        <button
          onClick={onStartFullDemo}
          className="flex items-center space-x-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold px-3.5 py-1.5 rounded-xl shadow-md text-xs transition-all hover:scale-102 active:scale-95"
          title="Run full end-to-end 13-stage autonomous mission"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span className="hidden sm:inline">LAUNCH FULL MISSION</span>
          <span className="sm:hidden">LAUNCH</span>
        </button>

        <button
          onClick={onResetMission}
          title="Reset Simulation to Start"
          className={`p-1.5 rounded-xl border transition-colors ${
            isDark
              ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
              : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Right: Live Telemetry Status Pills & Safety Controls */}
      <div className="flex items-center space-x-2 text-xs">
        {/* Interactive Traffic Light Pill */}
        {onToggleTrafficLight && (
          <button
            onClick={onToggleTrafficLight}
            title="Click to toggle Traffic Light between RED and GREEN"
            className={`px-2.5 py-1 rounded-xl border font-bold flex items-center space-x-1.5 transition-all shadow-sm ${
              trafficLightState === 'RED'
                ? isDark
                  ? 'bg-rose-950/60 text-rose-300 border-rose-800 animate-pulse'
                  : 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
                : trafficLightState === 'YELLOW'
                ? isDark
                  ? 'bg-amber-950/60 text-amber-300 border-amber-800'
                  : 'bg-amber-50 text-amber-700 border-amber-300'
                : isDark
                ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                : 'bg-emerald-50 text-emerald-700 border-emerald-300'
            }`}
          >
            <span className={`w-2.5 h-2.5 rounded-full ${
              trafficLightState === 'RED'
                ? 'bg-rose-500'
                : trafficLightState === 'YELLOW'
                ? 'bg-amber-400'
                : 'bg-emerald-500'
            }`} />
            <span>SIGNAL: {trafficLightState}</span>
          </button>
        )}

        {/* Hardware Link Status */}
        <div className={`hidden xl:flex items-center space-x-1.5 px-2.5 py-1 rounded-xl border font-bold ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          {isConnected ? (
            <>
              <Wifi className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500">CONNECTED</span>
            </>
          ) : (
            <>
              <WifiOff className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-rose-500">
                {mode === 'REAL_HARDWARE' ? 'UGV OFFLINE' : 'SIM CLIENT'}
              </span>
            </>
          )}
        </div>

        {/* Autonomy Badge */}
        <div className={`hidden lg:flex items-center space-x-1 px-2.5 py-1 rounded-xl border font-bold ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <Zap className="w-3.5 h-3.5 text-blue-500" />
          <span className={telemetry.mode === 'AUTONOMOUS' ? 'text-blue-500' : 'text-amber-500'}>
            {telemetry.mode}
          </span>
          {telemetry.mode === 'AUTONOMOUS' && (
            <span className={`text-[9px] px-1 py-0.2 rounded font-bold border ${
              isDark ? 'bg-blue-950 text-blue-400 border-blue-800' : 'bg-blue-100 text-blue-800 border-blue-200'
            }`}>
              ONBOARD
            </span>
          )}
        </div>

        {/* Battery */}
        <div className={`flex items-center space-x-1 px-2.5 py-1 rounded-xl border font-bold ${
          isDark ? 'bg-slate-900 border-slate-800 text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-800'
        }`}>
          <Battery className={`w-3.5 h-3.5 ${telemetry.battery < 25 ? 'text-rose-500 animate-pulse' : 'text-emerald-500'}`} />
          <span>{telemetry.battery}%</span>
        </div>

        {/* GPS Fix */}
        <div className={`hidden sm:flex items-center space-x-1 px-2.5 py-1 rounded-xl border font-bold ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <Radio className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-emerald-500">{telemetry.gps.fix}</span>
        </div>

        {/* Safety Armed / E-Stop Tag */}
        <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-xl border font-black ${
          isEstop
            ? 'bg-rose-500 text-white border-rose-600 animate-pulse'
            : isDark
            ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
            : 'bg-emerald-50 text-emerald-800 border-emerald-300'
        }`}>
          {isEstop ? <ShieldAlert className="w-3.5 h-3.5" /> : <Shield className="w-3.5 h-3.5" />}
          <span>{isEstop ? 'E-STOP' : 'ARMED'}</span>
        </div>

        {/* Theme Toggle (Day / Night) */}
        <button
          onClick={onToggleTheme}
          className={`p-1.5 rounded-xl border transition-colors ${
            isDark
              ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800'
              : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
          }`}
          title={isDark ? 'Switch to Aerospace Light Theme' : 'Switch to Cyber Stealth Dark Theme'}
        >
          {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>

        {/* Sound Toggle */}
        <button
          onClick={onToggleSound}
          className={`p-1.5 rounded-xl border transition-colors ${
            isDark
              ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
              : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
          }`}
          title={soundEnabled ? 'Mute Audio & Speech' : 'Enable Audio & Speech Announcer'}
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-500" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
        </button>
      </div>
    </header>
  );
};
