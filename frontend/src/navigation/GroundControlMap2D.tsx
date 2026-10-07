import React, { useEffect, useRef } from 'react';
import { TelemetryMessage, UITheme } from '../types/telemetry';

interface GroundControlMap2DProps {
  telemetry: TelemetryMessage;
  theme?: UITheme;
}

export const GroundControlMap2D: React.FC<GroundControlMap2DProps> = ({ telemetry, theme = 'DARK' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDark = theme === 'DARK';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dynamically match container dimensions to avoid distortion
    const container = canvas.parentElement;
    if (container) {
      const rect = container.getBoundingClientRect();
      if (rect.width > 10 && rect.height > 10) {
        const targetW = Math.floor(rect.width);
        const targetH = Math.floor(rect.height);
        if (canvas.width !== targetW || canvas.height !== targetH) {
          canvas.width = targetW;
          canvas.height = targetH;
        }
      }
    }

    const width = canvas.width;
    const height = canvas.height;

    // Coordinate transform:
    const marginX = 25;
    const marginY = 15;
    const scaleX = (width - marginX * 2) / 66.0;
    const scaleY = (height - marginY * 2) / 10.0;
    const centerY = height / 2;

    const worldToCanvas = (wx: number, wz: number): [number, number] => {
      const cx = marginX + wx * scaleX;
      const cy = centerY + wz * scaleY;
      return [cx, cy];
    };

    // 1. Radar Background
    ctx.fillStyle = isDark ? '#080d16' : '#f8fafc';
    ctx.fillRect(0, 0, width, height);

    // Radar coordinate grid lines
    ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.12)' : '#e2e8f0';
    ctx.lineWidth = 1;
    for (let x = 0; x <= 65; x += 5) {
      const [cx] = worldToCanvas(x, 0);
      ctx.beginPath();
      ctx.moveTo(cx, marginY);
      ctx.lineTo(cx, height - marginY);
      ctx.stroke();

      // Label meters
      ctx.fillStyle = isDark ? '#64748b' : '#94a3b8';
      ctx.font = '9px monospace';
      ctx.fillText(`${x}m`, cx - 6, height - 3);
    }

    // 2. Track Boundaries
    const [startX, topY] = worldToCanvas(0, -1.8);
    const [endX, botY] = worldToCanvas(64, 1.8);

    // Track surface
    ctx.fillStyle = isDark ? '#111827' : '#e2e8f0';
    ctx.fillRect(startX, topY, endX - startX, botY - topY);

    // Curbs
    ctx.strokeStyle = isDark ? '#0284c7' : '#64748b';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(startX, topY);
    ctx.lineTo(endX, topY);
    ctx.moveTo(startX, botY);
    ctx.lineTo(endX, botY);
    ctx.stroke();

    // Center dashed line
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = isDark ? '#38bdf8' : '#f59e0b';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(startX, centerY);
    ctx.lineTo(endX, centerY);
    ctx.stroke();
    ctx.setLineDash([]);

    // 3. Special Zones
    // Obstacle zone (x=13 to 16)
    const [obX] = worldToCanvas(14.0, 0);
    ctx.fillStyle = isDark ? 'rgba(244, 63, 94, 0.25)' : 'rgba(244, 63, 94, 0.15)';
    ctx.beginPath();
    ctx.arc(obX, centerY, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ef4444';
    ctx.font = '8px monospace';
    ctx.fillText('OBSTACLES', obX - 22, centerY - 18);

    // Stop Bar at x = 23.5m
    const [stopX] = worldToCanvas(23.5, 0);
    ctx.fillStyle = telemetry.vision.traffic_light_state === 'RED' ? '#ef4444' : '#10b981';
    ctx.fillRect(stopX - 2, topY, 4, botY - topY);
    ctx.fillStyle = isDark ? '#f8fafc' : '#334155';
    ctx.fillText('STOP BAR', stopX - 18, topY - 4);

    // 20-Degree Ramp (x=30 to 42)
    const [rampStartX] = worldToCanvas(30.0, 0);
    const [rampEndX] = worldToCanvas(42.0, 0);
    ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.2)' : 'rgba(37, 99, 235, 0.12)';
    ctx.fillRect(rampStartX, topY, rampEndX - rampStartX, botY - topY);
    ctx.strokeStyle = isDark ? '#0ea5e9' : '#2563eb';
    ctx.strokeRect(rampStartX, topY, rampEndX - rampStartX, botY - topY);
    ctx.fillStyle = isDark ? '#38bdf8' : '#2563eb';
    ctx.font = 'bold 8px monospace';
    ctx.fillText('20° RAMP INCLINE/DECLINE', rampStartX + 4, centerY - 14);

    // Target Gallery (x=50.0)
    const [tgtX, tgtY] = worldToCanvas(50.0, 2.8);
    ctx.fillStyle = telemetry.vision.face_matched ? '#10b981' : '#9333ea';
    ctx.beginPath();
    ctx.arc(tgtX, tgtY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillText('TARGET C', tgtX - 16, tgtY + 12);

    // 4. Live UGV Position & Heading Ray
    const [ugvX, ugvY] = worldToCanvas(telemetry.position.x, telemetry.position.y);
    const headRad = -(telemetry.position.heading * Math.PI) / 180;

    // Heading beam
    ctx.strokeStyle = isDark ? '#38bdf8' : '#2563eb';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ugvX, ugvY);
    ctx.lineTo(ugvX + Math.cos(headRad) * 22, ugvY + Math.sin(headRad) * 22);
    ctx.stroke();

    // Vehicle body dot
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(ugvX, ugvY, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Pulse ring around vehicle
    ctx.strokeStyle = isDark ? 'rgba(16, 185, 129, 0.5)' : 'rgba(16, 185, 129, 0.35)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(ugvX, ugvY, 11, 0, Math.PI * 2);
    ctx.stroke();

    // Coordinates tag
    ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
    ctx.font = 'bold 9px monospace';
    ctx.fillText(`UGV (${telemetry.position.x.toFixed(1)}m, ${telemetry.speed.toFixed(1)}km/h)`, ugvX + 12, ugvY - 6);
  }, [telemetry, isDark]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
