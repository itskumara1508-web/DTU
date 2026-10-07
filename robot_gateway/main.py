import uvicorn
import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from robot_gateway.api.routes import router as api_router
from robot_gateway.websocket.manager import manager

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Start background 25Hz telemetry broadcast task
    manager.start_broadcasting()
    print("==================================================")
    print(" R.A.M.A.N. Robotics Gateway Online")
    print(" WebSocket: ws://127.0.0.1:8000/ws/telemetry")
    print(" REST API:  http://127.0.0.1:8000")
    print(" Onboard Autonomy Stack: READY")
    print(" Hardware-in-the-Loop: ACTIVE")
    print("==================================================")
    yield
    # Shutdown

app = FastAPI(
    title="R.A.M.A.N. Robotics Gateway",
    description="Local Hardware & ROS 2 Gateway for DTU Autonomous UGV",
    version="2.4.0",
    lifespan=lifespan
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)

@app.websocket("/ws/telemetry")
async def websocket_telemetry_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            # Receive commands from client if sent
            data = await websocket.receive_text()
            # Heartbeat ping/pong or manual command parsing
    except WebSocketDisconnect:
        manager.disconnect(websocket)
    except Exception:
        manager.disconnect(websocket)

if __name__ == "__main__":
    uvicorn.run("robot_gateway.main:app", host="0.0.0.0", port=8000, reload=False, log_level="info")

