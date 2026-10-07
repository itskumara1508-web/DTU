import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { CameraMode, UITheme } from '../types/telemetry';
import { UGVModel } from './UGVModel';
import { ArenaEnvironment } from './ArenaEnvironment';
import { NavigationEngine } from './NavigationEngine';
import { Camera, Compass, Gauge, Eye, Maximize2, Orbit } from 'lucide-react';

interface ThreeCanvasProps {
  navEngine: NavigationEngine;
  cameraMode: CameraMode;
  theme?: UITheme;
  onCameraModeChange?: (mode: CameraMode) => void;
  onCanvasClick?: () => void;
}

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({
  navEngine,
  cameraMode,
  theme = 'LIGHT',
  onCameraModeChange,
  onCanvasClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const ugvModelRef = useRef<UGVModel | null>(null);
  const arenaRef = useRef<ArenaEnvironment | null>(null);
  const reqAnimIdRef = useRef<number>(0);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());

  // Throttled HUD State (15Hz for smooth UI performance)
  const [hudData, setHudData] = useState({
    speedKmh: 0,
    pitch: 0,
    roll: 0,
    heading: 0,
    x: 0,
    y: 0,
    z: 0,
    laserActive: false,
    laserTimer: 0,
  });

  // Free camera mouse drag state
  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const orbitAngleRef = useRef({ yaw: 0.8, pitch: 0.45, dist: 16 });

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const isDark = theme === 'DARK';

    // 1. Scene Background & Atmospheric Fog
    const scene = new THREE.Scene();
    const bgColor = isDark ? 0x090d16 : 0xe2e8f0;
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, isDark ? 0.01 : 0.008);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 250);
    camera.position.set(-8, 8, 12);
    cameraRef.current = camera;

    // 3. High-Performance Renderer with Soft Shadows
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isDark ? 1.15 : 1.08;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 1.4 : 1.9);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(isDark ? 0xa5f3fc : 0xffffff, isDark ? 2.2 : 2.6);
    sunLight.position.set(35, 55, 30);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 120;
    sunLight.shadow.camera.left = -40;
    sunLight.shadow.camera.right = 40;
    sunLight.shadow.camera.top = 30;
    sunLight.shadow.camera.bottom = -30;
    sunLight.shadow.bias = -0.0004;
    scene.add(sunLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, isDark ? 0x1e293b : 0x94a3b8, 0.8);
    scene.add(hemisphereLight);

    // 5. Arena Environment
    const arena = new ArenaEnvironment();
    scene.add(arena.group);
    arenaRef.current = arena;

    // 6. Detailed 6WD UGV Model
    const ugv = new UGVModel();
    scene.add(ugv.group);
    ugvModelRef.current = ugv;

    // 7. Mouse Orbit Controls for FREE Camera
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - prevMouseRef.current.x;
      const dy = e.clientY - prevMouseRef.current.y;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };

      orbitAngleRef.current.yaw += dx * 0.008;
      orbitAngleRef.current.pitch = Math.max(0.05, Math.min(Math.PI / 2.2, orbitAngleRef.current.pitch + dy * 0.008));
    };
    const onMouseUp = () => {
      isDraggingRef.current = false;
    };
    const onWheel = (e: WheelEvent) => {
      orbitAngleRef.current.dist = Math.max(4, Math.min(50, orbitAngleRef.current.dist + e.deltaY * 0.02));
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: true });

    // 8. Auto-Resize
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 9. 60Hz Physics & Animation Loop
    let lastHudUpdate = 0;
    const animate = () => {
      reqAnimIdRef.current = requestAnimationFrame(animate);
      const dt = Math.min(0.05, clockRef.current.getDelta());

      navEngine.update(dt);

      const now = performance.now();
      if (now - lastHudUpdate > 66) {
        lastHudUpdate = now;
        setHudData({
          speedKmh: navEngine.speedKmh,
          pitch: navEngine.pitch,
          roll: navEngine.roll,
          heading: navEngine.heading,
          x: navEngine.x,
          y: navEngine.y,
          z: navEngine.z,
          laserActive: navEngine.laserActive,
          laserTimer: navEngine.laserTimerSec,
        });
      }

      if (ugvModelRef.current) {
        ugvModelRef.current.update({
          x: navEngine.x,
          y: navEngine.y,
          z: navEngine.z,
          heading: navEngine.heading,
          pitch: navEngine.pitch,
          roll: navEngine.roll,
          speed: navEngine.speedKmh / 3.6,
          steeringAngle: navEngine.steeringAngle,
          laserActive: navEngine.laserActive,
          laserTargetPos: navEngine.laserTargetPos,
        }, dt);
      }

      if (arenaRef.current) {
        arenaRef.current.trafficLightRef.setLightState(navEngine.trafficLightColor);
        arenaRef.current.updateLidarPoints(navEngine.x, navEngine.z);

        const headRad = -navEngine.heading * (Math.PI / 180);
        const trajPoints = [
          new THREE.Vector3(navEngine.x, navEngine.y + 0.1, navEngine.z),
          new THREE.Vector3(navEngine.x + Math.cos(headRad) * 2.0, navEngine.y + 0.1, navEngine.z + Math.sin(headRad) * 2.0),
          new THREE.Vector3(navEngine.x + Math.cos(headRad) * 4.5, navEngine.y + 0.1, navEngine.z + Math.sin(headRad) * 4.5),
        ];
        arenaRef.current.updateLocalTrajectory(trajPoints);
      }

      const targetPos = new THREE.Vector3(navEngine.x, navEngine.y + 0.45, navEngine.z);
      const headingRad = -navEngine.heading * (Math.PI / 180);

      if (cameraMode === 'TOP') {
        camera.position.set(navEngine.x, 28, navEngine.z);
        camera.lookAt(navEngine.x, 0, navEngine.z);
      } else if (cameraMode === 'ISOMETRIC') {
        const offset = new THREE.Vector3(-11, 12, 11);
        camera.position.copy(targetPos).add(offset);
        camera.lookAt(targetPos);
      } else if (cameraMode === 'FOLLOW') {
        const camX = navEngine.x - Math.cos(headingRad) * 5.4;
        const camZ = navEngine.z - Math.sin(headingRad) * 5.4;
        camera.position.set(camX, navEngine.y + 2.5, camZ);
        camera.lookAt(navEngine.x + Math.cos(headingRad) * 4.2, navEngine.y + 0.6, navEngine.z + Math.sin(headingRad) * 4.2);
      } else if (cameraMode === 'FPV') {
        const eyeX = navEngine.x + Math.cos(headingRad) * 0.72;
        const eyeZ = navEngine.z + Math.sin(headingRad) * 0.72;
        camera.position.set(eyeX, navEngine.y + 0.62, eyeZ);
        const lookTarget = new THREE.Vector3(
          navEngine.x + Math.cos(headingRad) * 14.0,
          navEngine.y + 0.45,
          navEngine.z + Math.sin(headingRad) * 14.0
        );
        camera.lookAt(lookTarget);
      } else {
        const orbit = orbitAngleRef.current;
        const camX = navEngine.x + orbit.dist * Math.sin(orbit.yaw) * Math.cos(orbit.pitch);
        const camY = navEngine.y + orbit.dist * Math.sin(orbit.pitch);
        const camZ = navEngine.z + orbit.dist * Math.cos(orbit.yaw) * Math.cos(orbit.pitch);
        camera.position.set(camX, camY, camZ);
        camera.lookAt(targetPos);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqAnimIdRef.current);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [cameraMode, theme]);

  const isDark = theme === 'DARK';

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full cursor-crosshair select-none overflow-hidden"
      onClick={onCanvasClick}
    >
      {/* 1. TOP-LEFT: Viewport Status & Coordinates Badge */}
      <div className={`absolute top-3 left-3 pointer-events-none flex items-center space-x-2 backdrop-blur-md px-3 py-1.5 rounded-xl border shadow-md text-xs ${
        isDark ? 'bg-slate-900/85 text-slate-200 border-slate-700/60' : 'bg-white/95 text-slate-800 border-slate-200'
      }`}>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-bold tracking-wider opacity-70">VIEW:</span>
        <span className="text-blue-500 font-bold">{cameraMode}</span>
        <span className="opacity-30">|</span>
        <span className="font-mono text-[11px]">
          X: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{hudData.x.toFixed(1)}m</strong> Y: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{hudData.y.toFixed(2)}m</strong>
        </span>
      </div>

      {/* 2. TOP-RIGHT: Dynamic Attitude & Heading Indicator */}
      <div className={`absolute top-3 right-3 pointer-events-none backdrop-blur-md px-3 py-1.5 rounded-xl border shadow-md text-xs flex items-center space-x-3 ${
        isDark ? 'bg-slate-900/85 text-slate-200 border-slate-700/60' : 'bg-white/95 text-slate-800 border-slate-200'
      }`}>
        <div className="flex items-center space-x-1.5">
          <Compass className="w-3.5 h-3.5 text-blue-500" />
          <span className="opacity-70 font-bold">HDG:</span>
          <span className="font-bold font-mono">{Math.round(hudData.heading)}°</span>
        </div>

        <div className={`h-4 w-px ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />

        <div className="flex items-center space-x-1.5">
          <Gauge className="w-3.5 h-3.5 text-emerald-500" />
          <span className="opacity-70 font-bold">SPD:</span>
          <span className="font-bold text-emerald-500 font-mono">{hudData.speedKmh.toFixed(1)} km/h</span>
        </div>

        <div className={`h-4 w-px ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />

        <div className="flex items-center space-x-1.5">
          <span className="opacity-70 font-bold">PITCH:</span>
          <span className={`font-bold font-mono px-1.5 py-0.5 rounded text-[10px] ${
            Math.abs(hudData.pitch) > 10 ? 'bg-amber-500/20 text-amber-500 border border-amber-500/40 font-black' : ''
          }`}>
            {hudData.pitch.toFixed(1)}° {Math.abs(hudData.pitch) > 10 ? '(20° RAMP)' : ''}
          </span>
        </div>
      </div>

      {/* 3. CENTER: 532nm Laser Active Banner */}
      {hudData.laserActive && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 pointer-events-none bg-emerald-600 text-white border-2 border-emerald-400 px-6 py-2.5 rounded-2xl shadow-2xl flex items-center space-x-3 animate-pulse z-20">
          <div className="w-3.5 h-3.5 rounded-full bg-white animate-ping" />
          <div>
            <div className="font-black text-sm tracking-wider leading-none">
              532nm TARGETING LASER ACTIVE: {hudData.laserTimer.toFixed(2)}s / 2.00s
            </div>
            <div className="w-full bg-emerald-950/60 h-1.5 rounded-full mt-1.5 overflow-hidden">
              <div
                className="bg-emerald-300 h-full transition-all duration-100"
                style={{ width: `${Math.min(100, (hudData.laserTimer / 2.0) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. FPV Tactical HUD Reticle */}
      {cameraMode === 'FPV' && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="relative w-52 h-40 border border-blue-500/30 rounded-lg flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-sm" />
            <div className="absolute top-0 w-0.5 h-4 bg-blue-500" />
            <div className="absolute bottom-0 w-0.5 h-4 bg-blue-500" />
            <div className="absolute left-0 w-4 h-0.5 bg-blue-500" />
            <div className="absolute right-0 w-4 h-0.5 bg-blue-500" />

            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blue-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blue-500" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blue-500" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blue-500" />

            <div className={`absolute bottom-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
              isDark ? 'bg-slate-900/90 text-blue-400' : 'bg-white/90 text-blue-700'
            }`}>
              COCKPIT FPV • 1080P 30FPS
            </div>
          </div>
        </div>
      )}

      {/* 5. FLOATING CAMERA PERSPECTIVES TOOLBAR */}
      {onCameraModeChange && (
        <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 backdrop-blur-md px-2 py-1.5 rounded-2xl border shadow-xl flex items-center space-x-1.5 z-10 ${
          isDark ? 'bg-slate-900/90 border-slate-700/60' : 'bg-white/95 border-slate-200'
        }`}>
          {[
            { id: 'FOLLOW', label: 'FOLLOW', icon: Camera },
            { id: 'ISOMETRIC', label: 'ISO', icon: Orbit },
            { id: 'TOP', label: 'TOP', icon: Maximize2 },
            { id: 'FPV', label: 'FRONT CAM', icon: Eye },
            { id: 'FREE', label: 'ORBIT', icon: Orbit },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = cameraMode === item.id;
            return (
              <button
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  onCameraModeChange(item.id as CameraMode);
                }}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : isDark
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* 6. FREE Orbit Hint */}
      {cameraMode === 'FREE' && (
        <div className={`absolute bottom-4 left-4 pointer-events-none text-[11px] backdrop-blur px-3 py-1.5 rounded-xl border shadow-sm ${
          isDark ? 'bg-slate-900/85 text-slate-300 border-slate-700/60' : 'bg-white/90 text-slate-600 border-slate-200'
        }`}>
          🖱️ Click & Drag to Orbit | Scroll to Zoom
        </div>
      )}
    </div>
  );
};
