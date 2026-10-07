import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, RotateCcw, ShieldCheck, X } from 'lucide-react';

interface MissionCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRestart: () => void;
}

export const MissionCompleteModal: React.FC<MissionCompleteModalProps> = ({
  isOpen,
  onClose,
  onRestart,
}) => {
  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border-2 border-emerald-500 rounded-2xl shadow-2xl p-6 text-slate-800 font-mono">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-sm">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-xl font-black tracking-wider text-slate-900">CTRL FIRST • MISSION COMPLETE</h2>
            <p className="text-xs text-emerald-700 font-bold">ALL AUTONOMOUS COMPETITION BENCHMARKS PASSED</p>
          </div>
        </div>

        {/* Checklist Results */}
        <div className="my-5 space-y-2 text-xs">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-slate-600 font-medium">TRACK BOUNDARIES:</span>
            <span className="flex items-center space-x-1 font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>PASSED (100% IN-BOUNDS)</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-slate-600 font-medium">OBSTACLES:</span>
            <span className="flex items-center space-x-1 font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>0 COLLISIONS (SAFE SWERVE)</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-slate-600 font-medium">TRAFFIC COMPLIANCE:</span>
            <span className="flex items-center space-x-1 font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>PASSED (RED LIGHT HOLD + RESUME)</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-slate-600 font-medium">20° RAMP:</span>
            <span className="flex items-center space-x-1 font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>PASSED (CLIMB + APEX + DESCENT)</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-slate-600 font-medium">TARGET IDENTIFICATION:</span>
            <span className="flex items-center space-x-1 font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>MATCHED (96.7% COSINE SIMILARITY)</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-slate-600 font-medium">LASER INDICATION:</span>
            <span className="flex items-center space-x-1 font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>2.00 SEC ✓ (TIMED LOCK CONFIRMED)</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-slate-600 font-medium">PAYLOAD STATUS:</span>
            <span className="flex items-center space-x-1 font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SECURED (5.0 KG UNCOMPROMISED)</span>
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
            <span className="text-slate-600 font-medium">HUMAN INTERVENTION:</span>
            <span className="flex items-center space-x-1 font-bold text-blue-700">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>0 (FULLY AUTONOMOUS ONBOARD)</span>
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
          <div className="text-[10px] text-slate-500 font-mono">
            CTRL FIRST: ONE UGV • MULTIPLE ENVIRONMENTS • ONE AUTONOMOUS BRAIN
          </div>
          <button
            onClick={() => {
              onRestart();
              onClose();
            }}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center space-x-1.5 transition-colors text-xs shadow-sm"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RUN AGAIN</span>
          </button>
        </div>
      </div>
    </div>
  );
};
