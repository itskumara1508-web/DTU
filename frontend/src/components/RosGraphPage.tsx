import React, { useState } from 'react';
import { ArrowRight, Bot, Cpu, Network, Radio, Server, Shield, Zap, Activity } from 'lucide-react';
import { UITheme } from '../types/telemetry';

interface RosGraphPageProps {
  theme?: UITheme;
}

export const RosGraphPage: React.FC<RosGraphPageProps> = ({ theme = 'DARK' }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>('mission_manager_node');
  const isDark = theme === 'DARK';

  const nodes = [
    {
      id: 'mission_manager_node',
      name: 'mission_manager_node',
      group: 'Decision Making (Onboard)',
      publishes: ['/raman/mission_state', '/raman/events'],
      subscribes: ['/raman/perception/detections', '/localization/pose', '/safety/status'],
      freq: '20 Hz',
      desc: 'Master state machine coordinating waypoint progression, 20° ramp, traffic light stop, and laser indication.',
    },
    {
      id: 'planner_node',
      name: 'planner_node',
      group: 'Navigation & Control',
      publishes: ['/nav/cmd_vel', '/nav/planned_path', '/nav/trajectory'],
      subscribes: ['/localization/pose', '/costmap/local', '/raman/mission_state'],
      freq: '50 Hz',
      desc: 'Global A* waypoint sequencing + Local Pure Pursuit steering with lookahead distance.',
    },
    {
      id: 'obstacle_avoidance_node',
      name: 'obstacle_avoidance_node',
      group: 'Navigation & Control',
      publishes: ['/costmap/local', '/obstacle/warning'],
      subscribes: ['/scan', '/camera/depth'],
      freq: '25 Hz',
      desc: 'Dynamic vector field repulsor creating safe corridor around traffic cones, barrels, and debris.',
    },
    {
      id: 'perception_node',
      name: 'perception_node',
      group: 'Vision & Perception',
      publishes: ['/raman/perception/detections', '/raman/face_matches', '/traffic_light/status'],
      subscribes: ['/camera/image_raw'],
      freq: '30 Hz',
      desc: 'TensorRT YOLO-v9 for road signs and 512-dim facial embedding cosine matcher for candidate gallery.',
    },
    {
      id: 'localization_node',
      name: 'localization_node',
      group: 'Sensor Fusion',
      publishes: ['/localization/pose', '/localization/odometry'],
      subscribes: ['/gps/fix', '/imu/data', '/encoder/ticks'],
      freq: '100 Hz',
      desc: 'Extended Kalman Filter (robot_localization EKF) fusing RTK GNSS, 9-DOF IMU, and wheel odometry.',
    },
    {
      id: 'laser_target_node',
      name: 'laser_target_node',
      group: 'Actuation & Targeting',
      publishes: ['/target/laser_status'],
      subscribes: ['/raman/face_matches', '/raman/mission_state'],
      freq: '10 Hz',
      desc: 'Pan-tilt servo kinematics + hardwired 2.0-second safety timer watchdog for target marking.',
    },
    {
      id: 'motor_controller_node',
      name: 'motor_controller_node',
      group: 'Hardware Interface',
      publishes: ['/encoder/ticks', '/motor/status'],
      subscribes: ['/nav/cmd_vel', '/safety/estop_cmd'],
      freq: '50 Hz',
      desc: 'Jetson UART/CAN communication bridge to STM32 microcontroller executing 1kHz closed-loop PID.',
    },
    {
      id: 'safety_node',
      name: 'safety_node',
      group: 'Safety Architecture',
      publishes: ['/safety/status', '/safety/estop_cmd'],
      subscribes: ['/estop/hardware_pin', '/heartbeat/watchdog'],
      freq: '100 Hz',
      desc: 'Hardware watchdog supervisor monitoring LoRa wireless link, physical bumper, and software health.',
    },
    {
      id: 'telemetry_node',
      name: 'telemetry_node',
      group: 'Communications',
      publishes: ['/telemetry/gcs_packet'],
      subscribes: ['/raman/mission_state', '/localization/pose', '/nav/cmd_vel', '/safety/status'],
      freq: '30 Hz',
      desc: 'Compresses and serializes vehicle state for transmission across local WebSocket gateway.',
    },
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Overview Banner */}
      <div className={`p-6 rounded-2xl border shadow-xl ${
        isDark ? 'bg-slate-900/80 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400">
            <Network className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-wider">ROS 2 COMPUTATIONAL GRAPH TOPOLOGY</h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Micro-ROS & DDS node orchestration running on NVIDIA Jetson Linux (Ubuntu 22.04 LTS / ROS 2 Humble).
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Node Selector List */}
        <div className="space-y-2 lg:col-span-1">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            ACTIVE ONBOARD NODES (9)
          </div>
          {nodes.map((node) => {
            const isSelected = selectedNode === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all shadow-sm ${
                  isSelected
                    ? isDark
                      ? 'bg-blue-950/60 border-cyan-500/80 shadow-md scale-101'
                      : 'bg-blue-50 border-blue-500 shadow-sm'
                    : isDark
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono font-bold text-xs ${isSelected ? 'text-cyan-400' : isDark ? 'text-white' : 'text-slate-900'}`}>
                    {node.name}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold border ${
                    isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {node.freq}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">{node.group}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Node Details Card */}
        {activeNodeData && (
          <div className={`lg:col-span-2 p-6 rounded-2xl border shadow-xl flex flex-col justify-between ${
            isDark ? 'bg-slate-900/80 border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700/40">
                <div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">{activeNodeData.group}</span>
                  <h2 className={`text-lg font-black font-mono ${isDark ? 'text-cyan-400' : 'text-blue-700'}`}>{activeNodeData.name}</h2>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500">LOOP RATE</span>
                  <div className={`text-sm font-bold font-mono ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>{activeNodeData.freq}</div>
                </div>
              </div>

              <p className={`mt-4 text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {activeNodeData.desc}
              </p>

              {/* Publishes / Subscribes Topics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {/* Published Topics */}
                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 mb-2.5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                    <Activity className="w-3.5 h-3.5" />
                    <span>PUBLISHED TOPICS ({activeNodeData.publishes.length})</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    {activeNodeData.publishes.map((t) => (
                      <div key={t} className={`p-1.5 rounded border ${
                        isDark ? 'bg-emerald-950/40 border-emerald-900/60 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      }`}>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subscribed Topics */}
                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`text-xs font-bold uppercase tracking-wide flex items-center space-x-1.5 mb-2.5 ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                    <Radio className="w-3.5 h-3.5" />
                    <span>SUBSCRIBED TOPICS ({activeNodeData.subscribes.length})</span>
                  </div>
                  <div className="space-y-1.5 font-mono text-xs">
                    {activeNodeData.subscribes.map((t) => (
                      <div key={t} className={`p-1.5 rounded border ${
                        isDark ? 'bg-blue-950/40 border-blue-900/60 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-800'
                      }`}>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-700/40 text-[11px] text-slate-400 flex items-center justify-between">
              <span>QoS PROFILE: <strong>SENSOR_DATA (BEST_EFFORT / VOLATILE)</strong></span>
              <span className="text-emerald-400 font-bold">● NODE HEARTBEAT ACTIVE</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
