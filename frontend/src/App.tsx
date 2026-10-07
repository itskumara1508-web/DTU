import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { CameraMode, EventLogEntry, OperatingMode, TelemetryMessage, UITheme } from './types/telemetry';
import { NavigationEngine } from './simulator/NavigationEngine';
import { ThreeCanvas } from './simulator/ThreeCanvas';
import { TopStatusBar } from './components/TopStatusBar';
import { MissionControls } from './components/MissionControls';
import { TelemetryPanel } from './telemetry/TelemetryPanel';
import { GroundControlMap2D } from './navigation/GroundControlMap2D';
import { TerminalEventLog } from './components/TerminalEventLog';
import { MissionCompleteModal } from './components/MissionCompleteModal';
import { HardwarePage } from './components/HardwarePage';
import { RosGraphPage } from './components/RosGraphPage';
import { soundEngine } from './sounds/soundEngine';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Radio, Terminal, Compass, Layers, ShieldCheck } from 'lucide-react';

export const App: React.FC = () => {
  // Navigation Engine instance (Client-side simulation)
  const navEngine = useMemo(() => new NavigationEngine(), []);

  // UI States
  const [theme, setTheme] = useState<UITheme>('LIGHT');
  const [operatingMode, setOperatingMode] = useState<OperatingMode>('SIMULATION');
  const [cameraMode, setCameraMode] = useState<CameraMode>('FOLLOW');
  const [activeNavTab, setActiveNavTab] = useState<'MISSION_CONTROL' | 'HARDWARE' | 'ROS_NODES'>('MISSION_CONTROL');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Synchronize documentElement theme class
  useEffect(() => {
    if (theme === 'DARK') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Floating Docks Open/Collapsed States (Empowers Full 3D Screen Experience)
  const [isLeftDockOpen, setIsLeftDockOpen] = useState<boolean>(true);
  const [isRightDockOpen, setIsRightDockOpen] = useState<boolean>(true);
  const [isBottomDockOpen, setIsBottomDockOpen] = useState<boolean>(true);

  // Hardware Gateway State
  const [isGatewayConnected, setIsGatewayConnected] = useState<boolean>(false);
  const websocketRef = useRef<WebSocket | null>(null);

  // Live Telemetry state (rendered in UI at ~30Hz)
  const [telemetry, setTelemetry] = useState<TelemetryMessage>(() => navEngine.getTelemetryMessage());

  // Terminal Event Logs
  const [logs, setLogs] = useState<EventLogEntry[]>([
    {
      id: 'log-0',
      timestamp: new Date().toLocaleTimeString(),
      level: 'INFO',
      message: 'CTRL FIRST Autonomous Ground Control Station v3.0 online. Standby for mission parameters.'
    }
  ]);

  const addLogMessage = useCallback((msg: string, level: EventLogEntry['level'] = 'INFO') => {
    setLogs((prev) => [
      ...prev.slice(-150),
      {
        id: `log-${Date.now()}-${Math.random()}`,
        timestamp: new Date().toLocaleTimeString(),
        level,
        message: msg
      }
    ]);
  }, []);

  // Wire up navEngine log and mission complete callbacks
  useEffect(() => {
    navEngine.onLogMessage = (msg, level) => {
      addLogMessage(msg, level);
    };
    navEngine.onMissionComplete = () => {
      setIsModalOpen(true);
    };
  }, [navEngine, addLogMessage]);

  // Telemetry sync loop
  useEffect(() => {
    let animId: number;
    const updateLoop = () => {
      if (operatingMode === 'SIMULATION') {
        setTelemetry(navEngine.getTelemetryMessage());
      }
      animId = requestAnimationFrame(updateLoop);
    };
    animId = requestAnimationFrame(updateLoop);
    return () => cancelAnimationFrame(animId);
  }, [operatingMode, navEngine]);

  // WebSocket Connection for REAL HARDWARE MODE
  const connectToGateway = useCallback(() => {
    if (websocketRef.current) {
      websocketRef.current.close();
      websocketRef.current = null;
    }

    try {
      const ws = new WebSocket('ws://127.0.0.1:8000/ws/telemetry');
      websocketRef.current = ws;

      ws.onopen = () => {
        setIsGatewayConnected(true);
        addLogMessage('GATEWAY: Connected to CTRL FIRST Robotics Gateway at ws://127.0.0.1:8000', 'SUCCESS');
      };

      ws.onmessage = (event) => {
        try {
          const incomingData = JSON.parse(event.data) as TelemetryMessage;
          if (operatingMode === 'REAL_HARDWARE') {
            setTelemetry(incomingData);
          }
        } catch {
          // parse error
        }
      };

      ws.onerror = () => {
        setIsGatewayConnected(false);
      };

      ws.onclose = () => {
        setIsGatewayConnected(false);
      };
    } catch {
      setIsGatewayConnected(false);
    }
  }, [operatingMode, addLogMessage]);

  useEffect(() => {
    if (operatingMode === 'REAL_HARDWARE') {
      connectToGateway();
    } else {
      if (websocketRef.current) {
        websocketRef.current.close();
        websocketRef.current = null;
      }
      setIsGatewayConnected(false);
    }

    return () => {
      if (websocketRef.current) {
        websocketRef.current.close();
      }
    };
  }, [operatingMode, connectToGateway]);

  // User gesture listener to unlock Web Audio API
  const handleUserInteraction = () => {
    soundEngine.registerInteraction();
  };

  const handleToggleSound = () => {
    soundEngine.registerInteraction();
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundEngine.enableSound(next);
  };

  const handleToggleTheme = () => {
    soundEngine.registerInteraction();
    setTheme(prev => (prev === 'LIGHT' ? 'DARK' : 'LIGHT'));
  };

  // ONE-CLICK FULL DEMO TRIGGER
  const handleStartFullDemo = () => {
    soundEngine.registerInteraction();
    setActiveNavTab('MISSION_CONTROL');
    navEngine.resetSimulation();
    addLogMessage('ONE-CLICK DEMO TRIGGERED: Launching comprehensive CTRL FIRST autonomous mission...', 'SUCCESS');
    setTimeout(() => {
      navEngine.startAutonomousMission();
    }, 400);
  };

  const handleResetMission = () => {
    soundEngine.registerInteraction();
    navEngine.resetSimulation();
    setIsModalOpen(false);
  };

  const handleManualDrive = (forward: number, turn: number) => {
    soundEngine.registerInteraction();
    if (operatingMode === 'SIMULATION') {
      navEngine.manualDrive(forward, turn);
    } else if (operatingMode === 'REAL_HARDWARE' && isGatewayConnected) {
      fetch('http://127.0.0.1:8000/cmd/velocity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ linear_x: forward * 1.5, angular_z: turn * 1.0 })
      }).catch(() => {});
    }
  };

  const handleEmergencyStop = () => {
    soundEngine.registerInteraction();
    if (operatingMode === 'SIMULATION') {
      navEngine.triggerEmergencyStop();
    } else if (operatingMode === 'REAL_HARDWARE') {
      fetch('http://127.0.0.1:8000/cmd/stop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: 'GCS_UI_ESTOP', emergency: true })
      }).catch(() => {});
    }
  };

  const handleResetEstop = () => {
    soundEngine.registerInteraction();
    if (operatingMode === 'SIMULATION') {
      navEngine.resetEmergencyStop();
    } else if (operatingMode === 'REAL_HARDWARE') {
      fetch('http://127.0.0.1:8000/safety/reset', { method: 'POST' }).catch(() => {});
    }
  };

  const handleToggleTrafficLight = () => {
    soundEngine.registerInteraction();
    navEngine.toggleTrafficLight();
  };

  const isDark = theme === 'DARK';

  return (
    <div
      onClick={handleUserInteraction}
      className={`w-screen h-screen flex flex-col overflow-hidden select-none font-mono transition-colors duration-200 ${
        isDark ? 'bg-[#090d16] text-slate-100' : 'bg-[#f1f5f9] text-slate-800'
      }`}
    >
      {/* 1. TOP COMMAND BAR */}
      <TopStatusBar
        mode={operatingMode}
        onModeChange={(m) => {
          soundEngine.registerInteraction();
          setOperatingMode(m);
        }}
        telemetry={telemetry}
        isConnected={operatingMode === 'REAL_HARDWARE' ? isGatewayConnected : true}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onStartFullDemo={handleStartFullDemo}
        onResetMission={handleResetMission}
        onToggleTrafficLight={handleToggleTrafficLight}
        activeNavTab={activeNavTab}
        onNavTabChange={(tab) => {
          soundEngine.registerInteraction();
          setActiveNavTab(tab);
        }}
      />

      {/* 2. MAIN WORKSPACE */}
      <main className="flex-1 overflow-hidden relative">
        {activeNavTab === 'MISSION_CONTROL' && (
          <div className="w-full h-full relative overflow-hidden">
            {/* FULL-BLEED 3D SIMULATOR VIEWPORT */}
            <div className="absolute inset-0 w-full h-full z-0">
              <ThreeCanvas
                navEngine={navEngine}
                cameraMode={cameraMode}
                theme={theme}
                onCameraModeChange={(m) => {
                  soundEngine.registerInteraction();
                  setCameraMode(m);
                }}
                onCanvasClick={handleUserInteraction}
              />
            </div>

            {/* FLOATING LEFT DOCK: Mission Controls & Manual Teleop */}
            <div
              className={`absolute top-3 left-3 bottom-3 w-80 z-20 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl border flex flex-col ${
                isLeftDockOpen ? 'translate-x-0 opacity-100' : '-translate-x-[calc(100%+16px)] opacity-0 pointer-events-none'
              } ${
                isDark ? 'bg-slate-950/85 border-slate-800/80' : 'bg-white/95 border-slate-200/90'
              }`}
            >
              <MissionControls
                telemetry={telemetry}
                cameraMode={cameraMode}
                theme={theme}
                onCameraModeChange={(m) => {
                  soundEngine.registerInteraction();
                  setCameraMode(m);
                }}
                onManualDrive={handleManualDrive}
                onEmergencyStop={handleEmergencyStop}
                onResetEstop={handleResetEstop}
                onStartAutonomous={() => {
                  soundEngine.registerInteraction();
                  navEngine.startAutonomousMission();
                }}
                onResetMission={handleResetMission}
                onToggleTrafficLight={handleToggleTrafficLight}
              />
            </div>

            {/* LEFT DOCK TOGGLE BUTTON */}
            <button
              onClick={() => setIsLeftDockOpen(!isLeftDockOpen)}
              className={`absolute top-4 z-30 p-2 rounded-r-xl border border-l-0 shadow-lg transition-all ${
                isLeftDockOpen ? 'left-[324px]' : 'left-0'
              } ${
                isDark ? 'bg-slate-900/90 text-slate-300 border-slate-700/80 hover:bg-slate-800' : 'bg-white/95 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
              title={isLeftDockOpen ? 'Collapse Mission Controls' : 'Expand Mission Controls'}
            >
              {isLeftDockOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {/* FLOATING RIGHT DOCK: Live Telemetry, LiDAR, AI CV, Gyro */}
            <div
              className={`absolute top-3 right-3 bottom-3 w-84 xl:w-96 z-20 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl border flex flex-col ${
                isRightDockOpen ? 'translate-x-0 opacity-100' : 'translate-x-[calc(100%+16px)] opacity-0 pointer-events-none'
              } ${
                isDark ? 'bg-slate-950/85 border-slate-800/80' : 'bg-white/95 border-slate-200/90'
              }`}
            >
              <TelemetryPanel telemetry={telemetry} theme={theme} />
            </div>

            {/* RIGHT DOCK TOGGLE BUTTON */}
            <button
              onClick={() => setIsRightDockOpen(!isRightDockOpen)}
              className={`absolute top-4 z-30 p-2 rounded-l-xl border border-r-0 shadow-lg transition-all ${
                isRightDockOpen ? 'right-[340px] xl:right-[388px]' : 'right-0'
              } ${
                isDark ? 'bg-slate-900/90 text-slate-300 border-slate-700/80 hover:bg-slate-800' : 'bg-white/95 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
              title={isRightDockOpen ? 'Collapse Telemetry Panel' : 'Expand Telemetry Panel'}
            >
              {isRightDockOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>

            {/* FLOATING BOTTOM DOCK: 2D Radar Map & Real-time Event Log */}
            <div
              className={`absolute bottom-3 z-10 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl border flex flex-col ${
                isBottomDockOpen ? 'translate-y-0 opacity-100' : 'translate-y-[calc(100%+16px)] opacity-0 pointer-events-none'
              } ${
                isLeftDockOpen ? 'left-[344px]' : 'left-3'
              } ${
                isRightDockOpen ? 'right-[360px] xl:right-[408px]' : 'right-3'
              } h-48 ${
                isDark ? 'bg-slate-950/90 border-slate-800/80' : 'bg-white/95 border-slate-200/90'
              }`}
            >
              {/* Drawer header bar */}
              <div className={`h-7 px-3 flex items-center justify-between border-b text-[10px] font-bold ${
                isDark ? 'bg-slate-900/90 border-slate-800 text-slate-400' : 'bg-slate-100/90 border-slate-200 text-slate-600'
              }`}>
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <Compass className="w-3 h-3 text-blue-500" />
                    <span>2D TACTICAL RADAR MAP</span>
                  </span>
                  <span className="opacity-30">|</span>
                  <span className="flex items-center space-x-1">
                    <Terminal className="w-3 h-3 text-emerald-500" />
                    <span>ONBOARD EVENT STREAM</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsBottomDockOpen(false)}
                  className="hover:text-rose-500 transition-colors p-0.5 rounded"
                  title="Minimize Bottom Flight Deck"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Dock Content (50/50 Split) */}
              <div className="flex-1 flex p-2 gap-2 overflow-hidden">
                <div className="w-1/2 h-full rounded-xl overflow-hidden border border-slate-200/50 shadow-inner">
                  <GroundControlMap2D telemetry={telemetry} theme={theme} />
                </div>
                <div className="w-1/2 h-full rounded-xl overflow-hidden border border-slate-200/50 shadow-inner">
                  <TerminalEventLog
                    logs={logs}
                    theme={theme}
                    onClearLogs={() => setLogs([])}
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM DOCK EXPAND BUTTON (when minimized) */}
            {!isBottomDockOpen && (
              <button
                onClick={() => setIsBottomDockOpen(true)}
                className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 rounded-full border shadow-xl flex items-center space-x-1.5 text-xs font-bold transition-all hover:scale-105 active:scale-95 ${
                  isDark
                    ? 'bg-slate-900/95 text-slate-200 border-slate-700/80 hover:bg-slate-800'
                    : 'bg-white/95 text-slate-800 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <ChevronUp className="w-3.5 h-3.5 text-blue-500" />
                <span>EXPAND FLIGHT DECK & RADAR MAP</span>
              </button>
            )}
          </div>
        )}

        {activeNavTab === 'HARDWARE' && (
          <div className="w-full h-full overflow-y-auto p-4 md:p-6">
            <HardwarePage
              mode={operatingMode}
              telemetry={telemetry}
              isConnected={isGatewayConnected}
              theme={theme}
              onRetryConnection={connectToGateway}
            />
          </div>
        )}

        {activeNavTab === 'ROS_NODES' && (
          <div className="w-full h-full overflow-y-auto p-4 md:p-6">
            <RosGraphPage theme={theme} />
          </div>
        )}
      </main>

      {/* 3. MISSION COMPLETE MODAL */}
      <MissionCompleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRestart={handleStartFullDemo}
      />
    </div>
  );
};
