import asyncio
import json
import logging
from typing import Set
from fastapi import WebSocket, WebSocketDisconnect
from robot_gateway.ros_bridge.ros_bridge import ros_bridge

logger = logging.getLogger("robot_gateway.websocket")

class ConnectionManager:
    def __init__(self):
        self.active_connections: Set[WebSocket] = set()
        self.broadcast_task: asyncio.Task = None

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.add(websocket)
        logger.info(f"GCS client connected. Total clients: {len(self.active_connections)}")

    def disconnect(self, websocket: WebSocket):
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
            logger.info(f"GCS client disconnected. Remaining clients: {len(self.active_connections)}")

    async def broadcast_telemetry(self):
        """Streams live telemetry at 25 Hz (every 40ms)"""
        while True:
            try:
                if self.active_connections:
                    telemetry_obj = ros_bridge.get_latest_telemetry()
                    payload = json.dumps(telemetry_obj.model_dump())
                    disconnected = []
                    for connection in self.active_connections:
                        try:
                            await connection.send_text(payload)
                        except Exception:
                            disconnected.append(connection)
                    for dead in disconnected:
                        self.disconnect(dead)
            except Exception as e:
                logger.error(f"Error in telemetry broadcast: {e}")
            await asyncio.sleep(0.04)

    def start_broadcasting(self):
        if self.broadcast_task is None or self.broadcast_task.done():
            self.broadcast_task = asyncio.create_task(self.broadcast_telemetry())

manager = ConnectionManager()

