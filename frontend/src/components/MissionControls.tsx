import React, { useState, useEffect } from 'react';
import { CameraMode, MissionState, TelemetryMessage, UITheme } from '../types/telemetry';
import {
  Camera,
  Layers,
  Play,
  RotateCcw,
  ShieldAlert,
  Sliders,
  CheckCircle2,
  Clock,
  Compass,
  Zap,
  Target,
  AlertTriangle,
  Radio,
} from 'lucide-react';

interface MissionControlsProps {
  telemetry: TelemetryMessage;
  cameraMode: CameraMode;
  theme?: UITheme;
  onCameraModeChange: (mode: CameraMode) => void;
  onManualDrive: (forward: number, turn: number) => void;
  onEmergencyStop: () => void;
  onResetEstop: () => void;
  onStartAutonomous: () => void;
  onResetMission: () => void;
  onToggleTrafficLight?: () => void;
}

export const MissionControls: React.FC<MissionControlsProps> = ({
  telemetry,
  cameraMode,
  theme = 'LIGHT',
  onCameraModeChange,
  onManualDrive,
  onEmergencyStop,
  onResetEstop,
  onStartAutonomous,
  onResetMission,
  onToggleTrafficLight,
}) => {
  const [activeTab, setActiveTab] = useState<'MISSION' | 'TELEOP'>('MISSION');
  const currentState = telemetry.mission.state;
  const isAutonomous = telemetry.mode === 'AUTONOMOUS';
  const isEstop = telemetry.safety.estop;
  const isDark = theme === 'DARK';

  // Keyboard controls listener (W, A, S, D, SPACE)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        onEmergencyStop();
        return;
      }
      if (isAutonomous || isEstop) return;

      switch (e.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          onManualDrive(1.0, 0);
          break;
        case 's':
        case 'arrowdown':
          onManualDrive(-0.8, 0);
          break;
        case 'a':
        case 'arrowleft':
          onManualDrive(0.5, -1.0);
          break;
        case 'd':
        case 'arrowright':
          onManualDrive(0.5, 1.0);
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (isAutonomous || isEstop) return;
      if (['w', 's', 'a', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(e.key.toLowerCase())) {
        onManualDrive(0, 0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isAutonomous, isEstop, onManualDrive, onEmergencyStop]);

  const stateMachineOrder: { state: MissionState; label: string; desc: string }[] = [
    { state: 'IDLE', label: 'IDLE', desc: 'Standby at start pad' },
    { state: 'INITIALIZING', label: 'INITIALIZING', desc: 'All ROS 2 nodes booting' },
    { state: 'LOCALIZING', label: 'LOCALIZING', desc: 'Dual RTK GNSS locked' },
    { state: 'NAVIGATING', label: 'WAYPOINT FLIGHT', desc: 'Pure pursuit speed controller' },
    { state: 'OBSTACLE_DETECTED', label: 'OBSTACLE DETECT', desc: 'LiDAR threat evaluation' },
    { state: 'REPLANNING', label: 'PATH REPLAN', desc: 'Local A* corridor bypass' },
    { state: 'TRAFFIC_LIGHT', label: 'TRAFFIC SIGNAL', desc: 'Stop line hold bar' },
    { state: 'RAMP_TRAVERSAL', label: '20° RAMP', desc: 'High torque incline traversal' },
    { state: 'TARGET_SEARCH', label: 'TARGET SEARCH', desc: 'Camera scanning candidate panels' },
    { state: 'FACE_MATCH', label: 'FACE MATCH', desc: 'Cosine similarity 96.7% match' },
    { state: 'TARGET_ALIGNMENT', label: 'ALIGNMENT', desc: 'Pan-tilt turret lock' },
    { state: 'LASER_INDICATION', label: '532nm LASER (2s)', desc: 'Precision laser mark' },
    { state: 'MISSION_COMPLETE', label: 'COMPLETE', desc: 'Finish gantry cleared' },
  ];

  return (
    <div className={`w-full h-full flex flex-col text-xs select-none shadow-sm transition-colors duration-200 border-r ${
      isDark ? 'bg-slate-950/90 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
    }`}>
      {/* Control Tabs Header */}
      <div className={`flex p-1.5 space-x-1.5 border-b ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
      }`}>
        <button
          onClick={() => setActiveTab('MISSION')}
          className={`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1.5 font-bold transition-all ${
            activeTab === 'MISSION'
              ? isDark
                ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700'
                : 'bg-white text-emerald-700 shadow-sm border border-slate-200'
              : isDark
              ? 'text-slate-400 hover:text-white'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>MISSION STEPS</span>
        </button>

        <button
          onClick={() => setActiveTab('TELEOP')}
          className={`flex-1 py-1.5 px-2 rounded-xl flex items-center justify-center space-x-1.5 font-bold transition-all ${
            activeTab === 'TELEOP'
              ? isDark
                ? 'bg-slate-800 text-cyan-400 shadow-sm border border-slate-700'
                : 'bg-white text-blue-700 shadow-sm border border-slate-200'
              : isDark
              ? 'text-slate-400 hover:text-white'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>MANUAL TELEOP</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {/* 3D Camera Perspectives Selector */}
        <div className={`rounded-xl border p-2.5 shadow-sm ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center justify-between pb-1.5 border-b text-[11px] font-bold border-slate-200/50">
            <div className="flex items-center space-x-1.5">
              <Camera className="w-3.5 h-3.5 text-blue-500" />
              <span>CAMERA ANGLES</span>
            </div>
            <span className="text-[10px] text-blue-500 font-bold">{cameraMode}</span>
          </div>

          <div className="grid grid-cols-3 gap-1.5 mt-2">
            {(['FOLLOW', 'ISOMETRIC', 'TOP', 'FPV', 'FREE'] as CameraMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => onCameraModeChange(mode)}
                className={`py-1.5 px-1 rounded-lg text-[10px] font-bold border transition-all ${
                  cameraMode === mode
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm scale-102'
                    : isDark
                    ? 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {mode === 'FPV' ? 'FRONT CAM' : mode}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'MISSION' ? (
          <>
            {/* Mission State Machine Visualization */}
            <div className={`rounded-xl border p-2.5 shadow-sm ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                <span className="font-bold">MISSION PIPELINE</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono border ${
                  isDark ? 'bg-slate-800 text-cyan-400 border-slate-700' : 'bg-slate-200 text-slate-800 border-slate-300'
                }`}>
                  {currentState}
                </span>
              </div>

              {/* Live Traffic Signal Monitor & Override Card */}
              <div className={`my-2.5 p-2 rounded-xl border shadow-sm flex items-center justify-between ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <div className="flex items-center space-x-2">
                  <div className={`w-3.5 h-3.5 rounded-full shadow-sm ${
                    telemetry.vision.traffic_light_state === 'RED'
                      ? 'bg-rose-500 animate-pulse ring-2 ring-rose-300'
                      : telemetry.vision.traffic_light_state === 'YELLOW'
                      ? 'bg-amber-400 animate-pulse ring-2 ring-amber-200'
                      : 'bg-emerald-500 ring-2 ring-emerald-200'
                  }`} />
                  <div>
                    <div className="text-[9px] text-slate-500 font-bold uppercase leading-none">SIGNAL STATUS</div>
                    <div className={`text-xs font-bold leading-tight ${
                      telemetry.vision.traffic_light_state === 'RED'
                        ? 'text-rose-500'
                        : telemetry.vision.traffic_light_state === 'YELLOW'
                        ? 'text-amber-500'
                        : 'text-emerald-500'
                    }`}>
                      {telemetry.vision.traffic_light_state || 'GREEN'} {currentState === 'TRAFFIC_LIGHT' && '(HOLDING)'}
                    </div>
                  </div>
                </div>

                {onToggleTrafficLight && (
                  <button
                    onClick={onToggleTrafficLight}
                    className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all ${
                      isDark
                        ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                    }`}
                    title="Toggle Signal between Red and Green"
                  >
                    {telemetry.vision.traffic_light_state === 'RED' ? 'FORCE GREEN ➔' : 'SET RED'}
                  </button>
                )}
              </div>

              {/* 13-Stage Flow List */}
              <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-0.5">
                {stateMachineOrder.map((item, idx) => {
                  const isActive = currentState === item.state;
                  return (
                    <div
                      key={item.state}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-xl transition-all ${
                        isActive
                          ? isDark
                            ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/70 font-bold shadow-md'
                            : 'bg-emerald-50 text-emerald-900 border border-emerald-400 font-bold shadow-sm'
                          : isDark
                          ? 'bg-slate-900/40 text-slate-400 border border-slate-800/60 hover:bg-slate-900/80'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-500 animate-ping' : 'bg-slate-400'}`} />
                        <div>
                          <div className="text-[11px] leading-tight">{idx + 1}. {item.label}</div>
                          <div className="text-[9px] text-slate-500 leading-none">{item.desc}</div>
                        </div>
                      </div>
                      {isActive && (
                        <span className="text-[9px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-black">
                          ACTIVE
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Master Autonomy Launcher */}
              <div className="mt-3 pt-2.5 border-t border-slate-200/50 flex items-center space-x-2">
                <button
                  onClick={onStartAutonomous}
                  className="flex-1 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>ENGAGE ONBOARD AUTONOMY</span>
                </button>
                <button
                  onClick={onResetMission}
                  className={`px-3 py-2 rounded-xl border transition-colors ${
                    isDark
                      ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  }`}
                  title="Reset Mission"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Manual Teleoperation Panel */}
            <div className={`rounded-xl border p-2.5 shadow-sm ${
              isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/50">
                <span className="font-bold">MANUAL UGV CONTROL</span>
                <span className="text-[10px] text-slate-500 font-semibold">WASD / ARROWS</span>
              </div>

              {isAutonomous && (
                <div className="my-2.5 p-2 bg-amber-500/15 border border-amber-500/30 rounded-xl text-[11px] text-amber-500 font-medium">
                  ⚠️ AUTONOMOUS CONTROL ONBOARD: Manual steering is locked during autonomous mission.
                </div>
              )}

              {/* D-Pad Buttons */}
              <div className="my-4 flex flex-col items-center justify-center space-y-1.5">
                <button
                  onMouseDown={() => onManualDrive(1.0, 0)}
                  onMouseUp={() => onManualDrive(0, 0)}
                  onTouchStart={() => onManualDrive(1.0, 0)}
                  onTouchEnd={() => onManualDrive(0, 0)}
                  className={`w-14 h-12 rounded-xl font-bold border transition-all active:scale-95 shadow-sm flex items-center justify-center ${
                    isDark ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  ▲ W
                </button>
                <div className="flex space-x-2">
                  <button
                    onMouseDown={() => onManualDrive(0.5, -1.0)}
                    onMouseUp={() => onManualDrive(0, 0)}
                    onTouchStart={() => onManualDrive(0.5, -1.0)}
                    onTouchEnd={() => onManualDrive(0, 0)}
                    className={`w-14 h-12 rounded-xl font-bold border transition-all active:scale-95 shadow-sm flex items-center justify-center ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    ◀ A
                  </button>
                  <button
                    onMouseDown={() => onManualDrive(-0.8, 0)}
                    onMouseUp={() => onManualDrive(0, 0)}
                    onTouchStart={() => onManualDrive(-0.8, 0)}
                    onTouchEnd={() => onManualDrive(0, 0)}
                    className={`w-14 h-12 rounded-xl font-bold border transition-all active:scale-95 shadow-sm flex items-center justify-center ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    ▼ S
                  </button>
                  <button
                    onMouseDown={() => onManualDrive(0.5, 1.0)}
                    onMouseUp={() => onManualDrive(0, 0)}
                    onTouchStart={() => onManualDrive(0.5, 1.0)}
                    onTouchEnd={() => onManualDrive(0, 0)}
                    className={`w-14 h-12 rounded-xl font-bold border transition-all active:scale-95 shadow-sm flex items-center justify-center ${
                      isDark ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    ▶ D
                  </button>
                </div>
              </div>

              {/* Emergency Stop Button */}
              <div className="mt-3">
                {isEstop ? (
                  <button
                    onClick={onResetEstop}
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl transition-all shadow-md active:scale-95 text-center"
                  >
                    ARM SAFETY INTERLOCK (RESET E-STOP)
                  </button>
                ) : (
                  <button
                    onClick={onEmergencyStop}
                    className="w-full py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-xl transition-all shadow-lg active:scale-95 text-center flex items-center justify-center space-x-1.5 animate-pulse"
                  >
                    <ShieldAlert className="w-4 h-4" />
                    <span>EMERGENCY STOP (SPACE)</span>
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
