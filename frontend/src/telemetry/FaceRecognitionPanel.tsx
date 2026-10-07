import React from 'react';
import { TelemetryMessage } from '../types/telemetry';
import { CheckCircle2, Crosshair, Eye, ShieldAlert, Target, Zap } from 'lucide-react';

interface FaceRecognitionPanelProps {
  telemetry: TelemetryMessage;
}

export const FaceRecognitionPanel: React.FC<FaceRecognitionPanelProps> = ({ telemetry }) => {
  const candidates = [
    { id: 'TARGET_A', name: 'Subject 01 (Non-Target)', similarity: 24.2, isMatch: false, color: 'bg-slate-200 text-slate-800' },
    { id: 'TARGET_B', name: 'Subject 02 (Non-Target)', similarity: 41.5, isMatch: false, color: 'bg-slate-200 text-slate-800' },
    { id: 'TARGET_C_MATCH', name: 'Target Alpha (Suspect Profile)', similarity: 96.7, isMatch: true, color: 'bg-rose-100 text-rose-800 border border-rose-300' },
    { id: 'TARGET_D', name: 'Subject 04 (Non-Target)', similarity: 18.9, isMatch: false, color: 'bg-slate-200 text-slate-800' },
  ];

  const hasSign = Boolean(telemetry.vision.detected_sign);
  const trafficLight = telemetry.vision.traffic_light_state;

  return (
    <div className="space-y-3">
      {/* 1. Computer Vision Object & Sign Detection */}
      <div className="bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center space-x-1.5 font-bold text-blue-700">
            <Eye className="w-3.5 h-3.5" />
            <span>AI PERCEPTION FEED (YOLO-V9)</span>
          </div>
          <span className="text-[10px] text-slate-500 font-semibold">30 FPS (TENSORRT)</span>
        </div>

        {/* Simulated Vision Camera Frame */}
        <div className="relative w-full h-32 bg-slate-900 rounded-lg mt-2 border border-slate-300 overflow-hidden flex items-center justify-center shadow-inner">
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />

          {/* Traffic sign detection box */}
          {hasSign ? (
            <div className="absolute top-3 left-4 border-2 border-amber-400 bg-amber-500/30 px-2 py-1 rounded text-[10px] shadow">
              <div className="font-bold text-amber-200">SIGN: {telemetry.vision.detected_sign}</div>
              <div className="text-white text-[9px]">CONF: {telemetry.vision.sign_confidence}%</div>
            </div>
          ) : (
            <div className="text-[10px] text-slate-400 font-mono tracking-wider">CAMERA FEED • SCANNING ROADWAY</div>
          )}

          {/* Traffic light detection box */}
          {trafficLight && (
            <div className="absolute top-3 right-4 border-2 border-blue-400 bg-slate-950/90 px-2.5 py-1 rounded-md text-[10px] shadow">
              <div className="font-bold flex items-center space-x-1.5 text-white">
                <span>SIGNAL:</span>
                <span className={
                  trafficLight === 'RED'
                    ? 'text-rose-400 font-bold animate-pulse'
                    : trafficLight === 'YELLOW'
                    ? 'text-amber-400 font-bold'
                    : 'text-emerald-400 font-bold'
                }>
                  {trafficLight}
                </span>
              </div>
            </div>
          )}

          {/* Face matching box */}
          {telemetry.vision.face_matched && (
            <div className="absolute inset-x-6 bottom-3 border-2 border-emerald-400 bg-emerald-950/80 p-2 rounded-lg flex items-center justify-between shadow">
              <div className="flex items-center space-x-1.5 text-emerald-300 font-bold text-[11px]">
                <Target className="w-3.5 h-3.5 animate-spin" />
                <span>TARGET ALPHA LOCKED (96.7%)</span>
              </div>
              <span className="text-[9px] bg-emerald-800 text-white px-1.5 py-0.5 rounded font-mono">
                COS_SIM: 0.967
              </span>
            </div>
          )}
        </div>
      </div>

      {/* 2. Face Target Gallery Identification */}
      <div className="bg-slate-50 rounded-lg border border-slate-200 p-2.5 shadow-sm">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div className="flex items-center space-x-1.5 font-bold text-purple-700">
            <Target className="w-3.5 h-3.5" />
            <span>FACE TARGET GALLERY</span>
          </div>
          <span className="text-[10px] text-slate-500 font-semibold">512-D EMBEDDINGS</span>
        </div>

        <div className="mt-2 space-y-1.5">
          {candidates.map((cand) => {
            const isTargetActive = telemetry.vision.face_matched && cand.isMatch;
            return (
              <div
                key={cand.id}
                className={`flex items-center justify-between p-2 rounded-md transition-colors ${
                  isTargetActive
                    ? 'bg-emerald-50 border border-emerald-400 shadow-sm'
                    : 'bg-white border border-slate-200'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <div className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold ${cand.color}`}>
                    {cand.id.split('_')[1]}
                  </div>
                  <div>
                    <div className={`text-[11px] font-bold ${isTargetActive ? 'text-emerald-900' : 'text-slate-800'}`}>
                      {cand.name}
                    </div>
                    <div className="text-[9px] text-slate-500">SIMILARITY: {cand.similarity}%</div>
                  </div>
                </div>

                {isTargetActive ? (
                  <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>MATCHED</span>
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400 font-semibold">REJECTED</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Simulated 532nm Laser Target Indication */}
      <div className={`rounded-lg border p-2.5 transition-all shadow-sm ${
        telemetry.mission.laser_active
          ? 'bg-emerald-50 border-emerald-500 shadow-md'
          : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
          <div className="flex items-center space-x-1.5 font-bold text-emerald-800">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>532nm LASER INDICATION SYSTEM</span>
          </div>
          <span className="text-[10px] text-slate-500 font-semibold">PAN-TILT GIMBAL</span>
        </div>

        <div className="mt-2 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-slate-600 font-medium">INDICATION DURATION:</span>
            <span className="font-mono font-bold text-emerald-800">
              {telemetry.mission.laser_timer.toFixed(2)} s / 2.00 s
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full transition-all duration-75"
              style={{ width: `${Math.min(100, (telemetry.mission.laser_timer / 2.0) * 100)}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] pt-1">
            <span className="text-slate-600">GIMBAL LOCK:</span>
            <span className={telemetry.vision.target_aligned ? 'text-emerald-700 font-bold' : 'text-slate-500'}>
              {telemetry.vision.target_aligned ? 'ALIGNED (AZ: 14.5°, EL: 4.2°)' : 'STANDBY'}
            </span>
          </div>

          <div className="text-[9px] text-amber-800 bg-amber-50 p-2 rounded border border-amber-200">
            ⚠️ NOTICE: Visual simulation only. Physical laser uses isolated hardware safety relay.
          </div>
        </div>
      </div>
    </div>
  );
};
