#!/bin/bash
# ==============================================================================
# R.A.M.A.N. Autonomous Robotics Platform Launcher
# DTU Hackathon Project - Production Control & Simulation Suite
# ==============================================================================

set -e

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "=============================================================================="
echo "      R.A.M.A.N. AUTONOMOUS ROBOTICS CONTROL & SIMULATION PLATFORM"
echo "        ONE UGV. MULTIPLE ENVIRONMENTS. ONE AUTONOMOUS BRAIN."
echo "=============================================================================="

# 1. Start Python Robotics Gateway in background
echo "[1/2] Starting Robotics Gateway on port 8000..."
./robot_gateway/venv/bin/python -m robot_gateway.main &
GATEWAY_PID=$!

cleanup() {
    echo ""
    echo "Shutting down R.A.M.A.N. services..."
    kill $GATEWAY_PID 2>/dev/null || true
    exit 0
}
trap cleanup SIGINT SIGTERM EXIT

sleep 2

# 2. Start Frontend Vite Development Server
echo "[2/2] Starting Web Ground Control Station on port 3000..."
cd frontend
npm run dev -- --host 0.0.0.0 --port 3000

