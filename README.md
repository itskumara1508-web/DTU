# CTRL FIRST • Tactical Autonomous Robotics Ground Control Station & UGV Simulator

> **"ONE UGV. MULTIPLE ENVIRONMENTS. ONE AUTONOMOUS BRAIN."**  
> Developed for the **DTU Autonomous Ground Vehicle Hackathon**.

---

## 1. System Architecture

The platform separates the **Ground Control Station (GCS) visualization layer** from the **Onboard Autonomy Stack**. The vehicle is 100% capable of self-directed autonomous operation without any remote steering or cloud dependencies.

```text
WEB GROUND CONTROL STATION (React + Three.js + TypeScript)
        |
        | Local secure WebSocket / REST connection (ws://localhost:8000)
        ↓
ROBOTICS GATEWAY (FastAPI + WebSocket + HIL Bridge)
        |
        ├── ROS 2 Interface
        ├── Sensor Bridge (LiDAR, Camera, IMU, RTK GPS)
        ├── Telemetry Serializer (25 Hz)
        └── Command Interface (Gated for Manual Mode only)
        |
        ↓
ONBOARD COMPUTE (NVIDIA Jetson Orin / Raspberry Pi equivalent)
        |  [All Autonomy Algorithms Execute Strictly ONBOARD]
        ├── Master Mission State Machine Node
        ├── Global A* & Local Pure Pursuit Planner Node
        ├── Dynamic Obstacle Avoidance Node (Vector Field Repulsor)
        ├── OpenCV / YOLOv9 Perception Node (Signs, Lights, Faces)
        ├── EKF Localization Node (robot_localization)
        └── 532nm Laser Target Alignment Node (2.0s Safety Interlock)
        |
        ↓
MICROCONTROLLER (STM32F4 / ESP32)
        |  [Hardware Abstraction Layer via UART/CAN with CRC16]
        ├── 1 kHz Closed-Loop PID Velocity Controller
        ├── Quadrature Encoder Timer Capture & Odometry
        ├── 100ms Hardware Watchdog Auto-Brake
        └── Hardware E-Stop Interrupt & Contactor Relay Disconnect
        |
        ↓
BRUSHLESS MOTORS (6WD High-Torque Hub Drivers)
```

---

## 2. Directory Structure

```text
DTU/
├── frontend/                     # Web Ground Control Station & 3D Simulator
│   ├── src/
│   │   ├── simulator/            # Three.js 3D UGV Model, Arena & Navigation Engine
│   │   │   ├── UGVModel.ts       # Detailed 3D chassis, 6 wheels, lidar, laser beam
│   │   │   ├── ArenaEnvironment.ts # Ramp, obstacles, signs, traffic lights, gallery
│   │   │   ├── NavigationEngine.ts # Pure Pursuit, terrain pitch solver, state machine
│   │   │   └── ThreeCanvas.tsx   # 60fps WebGL viewport with 5 camera modes
│   │   ├── navigation/
│   │   │   └── GroundControlMap2D.tsx # Real-time 2D radar navigation map
│   │   ├── telemetry/            # Live sensor HUD & diagnostics
│   │   │   ├── TelemetryPanel.tsx
│   │   │   ├── FaceRecognitionPanel.tsx
│   │   │   ├── PerformanceDashboard.tsx
│   │   │   └── RamanRequirementsPanel.tsx
│   │   ├── components/           # UI Control & Management panels
│   │   │   ├── TopStatusBar.tsx
│   │   │   ├── MissionControls.tsx
│   │   │   ├── TerminalEventLog.tsx
│   │   │   ├── MissionCompleteModal.tsx
│   │   │   ├── HardwarePage.tsx  # Dedicated Hardware Connection View
│   │   │   └── RosGraphPage.tsx  # Interactive ROS 2 Node Architecture
│   │   ├── sounds/
│   │   │   └── soundEngine.ts    # Web Audio API synthesizers (8 local tones)
│   │   └── types/telemetry.ts    # Shared data schemas
├── robot_gateway/                # Python FastAPI & WebSocket Gateway
│   ├── api/routes.py             # REST endpoints (/telemetry, /cmd/velocity, etc.)
│   ├── websocket/manager.py      # 25 Hz live telemetry broadcaster
│   ├── telemetry/models.py       # Pydantic data models
│   ├── ros_bridge/ros_bridge.py  # ROS 2 topics & HIL hardware bridge
│   └── main.py                   # Gateway launcher
├── ros_ws/                       # ROS 2 Package Workspace
│   └── src/
│       ├── raman_interfaces/     # Custom ROS 2 msg (MissionState, Telemetry, etc.)
│       └── raman_ugv/            # 15 Autonomy nodes + launch files
├── firmware/                     # Embedded STM32 / ESP32 HAL & Control Code
│   ├── hal_protocol/             # Framed binary packets with CRC16
│   ├── motor_controller/         # Closed-loop velocity PID
│   ├── watchdog/                 # 100ms communication timeout safety
│   └── safety/                   # Hardware interrupt E-Stop contactor trip
└── run_platform.sh               # One-click launcher script
```

---

## 3. Two Operating Modes

1. **SIMULATION MODE**:
   - The entire UGV and arena run client-side inside the browser using mathematical kinematics and state machine solvers.
   - Dynamic obstacle avoidance, 20° ramp pitch adherence, traffic lights, and face gallery laser indication operate in real-time.
2. **REAL UGV MODE**:
   - Connects to the local Robotics Gateway (`ws://127.0.0.1:8000/ws/telemetry`).
   - If the companion computer/gateway is offline, the GCS displays **`HARDWARE CONNECTION UNAVAILABLE`** and **NEVER fakes telemetry**.

---

## 4. DTU Hackathon Requirements & Compliance Matrix

| Requirement | DTU Specification | R.A.M.A.N. Implementation |
| :--- | :--- | :--- |
| **Speed Range** | 2.0 – 10.0 km/h | Dynamic Pure Pursuit speed governor (nominal 4.8 km/h, max 6.5 km/h) |
| **Ramp Incline** | 20° Gradient | Chassis pitches by 20° upon ramp detection; low-gear torque mode |
| **Payload Capacity** | 5.0 kg secure payload | 5.0 kg modular payload mounted in centered chassis bay |
| **Payload Envelope** | 30 × 30 × 30 cm | Verified 300 × 300 × 300 mm sealed compartment with hazard labeling |
| **Wireless E-Stop** | Range ≥ 150 m | 868 MHz LoRa link with 250ms heartbeat timeout fail-safe trip |
| **Target Indication** | ≥ 2.00 seconds laser lock | Pan-tilt gimbal lock with exact 2.00s countdown timer & visual beam |
| **Autonomous Control**| 100% ONBOARD | Zero cloud/remote dependencies; web app is visualization-only |

---

## 5. One-Click Full Demo

In the top status bar, clicking **`START FULL R.A.M.A.N. DEMO`** automatically triggers the full 20-step mission scenario:
1. System boot & node check
2. Sensor calibration & initialization
3. RTK centimeter fix acquisition
4. Onboard autonomous engagement
5. Track boundary alignment
6. Straight corridor traversal
7. Dynamic obstacle detection (2.8m warning)
8. Local path replanning with safe corridor swerve
9. Road sign CV recognition (STOP, SLOW)
10. Red traffic light detection & smooth stop
11. Green traffic light switch & smooth resume
12. Pothole / rough terrain classification
13. 20° Ramp incline traversal with vehicle pitch
14. Ramp apex clearance and descent
15. Face Target Gallery visual search
16. Target Alpha cosine similarity match (96.7%)
17. Pan-tilt gimbal target alignment
18. Simulated 532nm laser beam firing for 2.00 seconds
19. Payload integrity verification
20. Finish gate crossing & **MISSION COMPLETE** certification

---

## 6. How to Run

### Quick Launch (Both Gateway and Web GCS)
```bash
./run_platform.sh
```

### Or Run Components Separately:
**Robotics Gateway:**
```bash
./robot_gateway/venv/bin/python -m robot_gateway.main
# Gateway runs on http://127.0.0.1:8000 and ws://127.0.0.1:8000/ws/telemetry
```

**Web Ground Control Station:**
```bash
cd frontend
npm run dev
# Open http://localhost:3000 in your browser
```

---

## 7. GitHub Deployment & GitHub Pages

This repository is pre-configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the **CTRL FIRST Ground Control Station** directly to **GitHub Pages** on every push to `main`.

### To Push to GitHub:
```bash
# 1. Initialize and commit (if not already done)
git init -b main
git add .
git commit -m "feat: CTRL FIRST autonomous robotics control & simulation platform"

# 2. Add your GitHub remote repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 3. Push to main branch
git push -u origin main
```

### Enable GitHub Pages in your GitHub Repo:
1. Go to your repository on GitHub.
2. Navigate to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow will automatically build the site and provide your live public URL: `https://<your-username>.github.io/<your-repo-name>/`.


