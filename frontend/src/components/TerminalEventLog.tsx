import React, { useEffect, useRef, useState } from 'react';
import { EventLogEntry, UITheme } from '../types/telemetry';
import { Download, Terminal, Trash2 } from 'lucide-react';

interface TerminalEventLogProps {
  logs: EventLogEntry[];
  theme?: UITheme;
  onClearLogs: () => void;
}

export const TerminalEventLog: React.FC<TerminalEventLogProps> = ({ logs, theme = 'DARK', onClearLogs }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [filter, setFilter] = useState<'ALL' | 'WARN_DANGER'>('ALL');
  const isDark = theme === 'DARK';

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const filteredLogs = logs.filter((l) => {
    if (filter === 'WARN_DANGER') return l.level === 'WARN' || l.level === 'DANGER';
    return true;
  });

  const exportLogs = () => {
    const text = logs.map((l) => `[${l.timestamp}] [${l.level}] ${l.message}`).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ctrl_first_telemetry_logs_${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`w-full h-full flex flex-col rounded-xl p-2.5 text-xs select-none transition-colors ${
      isDark ? 'bg-slate-950/95 text-slate-200' : 'bg-white text-slate-800'
    }`}>
      {/* Header bar */}
      <div className={`flex items-center justify-between pb-2 border-b ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="flex items-center space-x-2">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span className="font-bold uppercase tracking-wider text-[11px]">
            TELEMETRY EVENT STREAM
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border ${
            isDark ? 'bg-slate-900 text-cyan-400 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-300'
          }`}>
            {logs.length}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Filter */}
          <div className={`flex rounded-lg p-0.5 text-[10px] font-bold border ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setFilter('ALL')}
              className={`px-2 py-0.5 rounded transition-all ${
                filter === 'ALL'
                  ? isDark
                    ? 'bg-slate-800 text-cyan-400 shadow-sm'
                    : 'bg-white text-blue-700 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setFilter('WARN_DANGER')}
              className={`px-2 py-0.5 rounded transition-all ${
                filter === 'WARN_DANGER'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ALERTS
            </button>
          </div>

          <button
            onClick={exportLogs}
            className={`p-1 rounded-lg border transition-colors ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
            title="Export Telemetry Log"
          >
            <Download className="w-3 h-3" />
          </button>

          <button
            onClick={onClearLogs}
            className={`p-1 rounded-lg border transition-colors ${
              isDark ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-rose-400' : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-rose-600'
            }`}
            title="Clear Event Log"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Log Feed */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-1 font-mono text-[11px] mt-2 pr-1"
      >
        {filteredLogs.map((log) => {
          let badgeColor = isDark ? 'text-slate-400 bg-slate-900' : 'text-slate-600 bg-slate-100';
          let textColor = isDark ? 'text-slate-200' : 'text-slate-800';

          if (log.level === 'WARN') {
            badgeColor = 'text-amber-400 bg-amber-950/60 border border-amber-800/80';
            textColor = 'text-amber-300';
          } else if (log.level === 'DANGER') {
            badgeColor = 'text-rose-400 bg-rose-950/60 border border-rose-800/80';
            textColor = 'text-rose-300';
          } else if (log.level === 'SUCCESS') {
            badgeColor = 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/80';
            textColor = 'text-emerald-300';
          }

          return (
            <div key={log.id} className="flex items-start space-x-2 leading-tight py-0.5">
              <span className="text-slate-500 shrink-0 text-[10px] select-none">
                [{log.timestamp}]
              </span>
              <span className={`px-1 py-0.2 rounded text-[9px] font-bold shrink-0 select-none ${badgeColor}`}>
                {log.level}
              </span>
              <span className={`${textColor} break-all flex-1`}>{log.message}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
