import * as THREE from 'three';

export interface UGVVisualState {
  x: number;
  y: number;
  z: number;
  heading: number; // degrees
  pitch: number;   // degrees
  roll: number;    // degrees
  speed: number;   // m/s
  steeringAngle: number; // degrees
  laserActive: boolean;
  laserTargetPos?: [number, number, number];
}

export class UGVModel {
  public group: THREE.Group;
  private chassis: THREE.Mesh;
  private wheels: THREE.Mesh[] = [];
  private frontWheelPivots: THREE.Group[] = [];
  private lidarRotor: THREE.Group;
  private laserBeam: THREE.Line;
  private laserGlowMesh: THREE.Mesh;
  private cameraFovFrustum: THREE.LineSegments;
  private wheelRadius = 0.22; // meters

  constructor() {
    this.group = new THREE.Group();
    this.initUGVMeshes();
  }

  private initUGVMeshes() {
    // 1. Chassis Body (Rugged Military Matte Armor)
    const chassisGeo = new THREE.BoxGeometry(1.4, 0.35, 0.85);
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b, // Dark tactical slate
      roughness: 0.4,
      metalness: 0.8,
    });
    this.chassis = new THREE.Mesh(chassisGeo, chassisMat);
    this.chassis.position.y = 0.35;
    this.chassis.castShadow = true;
    this.chassis.receiveShadow = true;
    this.group.add(this.chassis);

    // Front Bumper / Bull Bar
    const bumperGeo = new THREE.BoxGeometry(0.12, 0.2, 0.95);
    const bumperMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.9 });
    const bumper = new THREE.Mesh(bumperGeo, bumperMat);
    bumper.position.set(0.72, 0.32, 0);
    bumper.castShadow = true;
    this.group.add(bumper);

    // Roll cage tubing
    const tubeMat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.3, metalness: 0.5 }); // Accent emerald
    const cageLeft = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.04, 0.04), tubeMat);
    cageLeft.position.set(0, 0.56, 0.38);
    const cageRight = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.04, 0.04), tubeMat);
    cageRight.position.set(0, 0.56, -0.38);
    this.group.add(cageLeft, cageRight);

    // 2. Secured Payload Compartment (DTU Spec: 30x30x30 cm, 5 kg)
    const payloadGeo = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const payloadMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b, // Amber payload container
      roughness: 0.3,
      metalness: 0.4,
    });
    const payload = new THREE.Mesh(payloadGeo, payloadMat);
    payload.position.set(-0.25, 0.48, 0);
    payload.castShadow = true;
    this.group.add(payload);

    // Payload hazard stripes label
    const labelGeo = new THREE.BoxGeometry(0.31, 0.08, 0.31);
    const labelMat = new THREE.MeshBasicMaterial({ color: 0x111827 });
    const payloadStripe = new THREE.Mesh(labelGeo, labelMat);
    payloadStripe.position.set(-0.25, 0.48, 0);
    this.group.add(payloadStripe);

    // 3. 6 Rugged Wheels with All-Terrain Treads
    const wheelGeo = new THREE.CylinderGeometry(this.wheelRadius, this.wheelRadius, 0.16, 24);
    wheelGeo.rotateX(Math.PI / 2);
    const wheelMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // Deep rubber black
      roughness: 0.8,
      metalness: 0.2,
    });
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x475569, // Titanium wheel hub
      roughness: 0.3,
      metalness: 0.9,
    });

    const wheelPositions: [number, number, number][] = [
      [0.5, 0.22, 0.52],   // Front Right
      [0.5, 0.22, -0.52],  // Front Left
      [0.0, 0.22, 0.52],   // Middle Right
      [0.0, 0.22, -0.52],  // Middle Left
      [-0.5, 0.22, 0.52],  // Rear Right
      [-0.5, 0.22, -0.52], // Rear Left
    ];

    wheelPositions.forEach((pos, idx) => {
      const isFront = idx < 2;
      const wheelHub = new THREE.Mesh(wheelGeo, wheelMat);
      wheelHub.castShadow = true;
      wheelHub.receiveShadow = true;

      // Inner hubcap
      const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.17, 12), rimMat);
      rim.rotateX(Math.PI / 2);
      wheelHub.add(rim);

      if (isFront) {
        const pivot = new THREE.Group();
        pivot.position.set(pos[0], pos[1], pos[2]);
        wheelHub.position.set(0, 0, 0);
        pivot.add(wheelHub);
        this.frontWheelPivots.push(pivot);
        this.group.add(pivot);
      } else {
        wheelHub.position.set(pos[0], pos[1], pos[2]);
        this.group.add(wheelHub);
      }
      this.wheels.push(wheelHub);
    });

    // 4. LiDAR Puck (360° Scanning Mast)
    const lidarMast = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 0.2, 16),
      new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.8 })
    );
    lidarMast.position.set(0.15, 0.62, 0);
    this.group.add(lidarMast);

    this.lidarRotor = new THREE.Group();
    this.lidarRotor.position.set(0.15, 0.74, 0);
    const puck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 0.09, 24),
      new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.2, metalness: 0.9 }) // Cyan anodized
    );
    puck.castShadow = true;
    this.lidarRotor.add(puck);
    this.group.add(this.lidarRotor);

    // 5. Front Camera Module & FOV Frustum
    const cameraBody = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.08, 0.14),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8 })
    );
    cameraBody.position.set(0.68, 0.48, 0);
    // Dual camera lenses
    const lens1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.02, 16), new THREE.MeshBasicMaterial({ color: 0x38bdf8 }));
    lens1.rotateZ(Math.PI / 2);
    lens1.position.set(0.045, 0, 0.035);
    const lens2 = lens1.clone();
    lens2.position.set(0.045, 0, -0.035);
    cameraBody.add(lens1, lens2);
    this.group.add(cameraBody);

    // Camera FOV wireframe cone
    const fovGeo = new THREE.BufferGeometry();
    const fovVerts = new Float32Array([
      0, 0, 0,  2.5, 0.8, 1.2,
      0, 0, 0,  2.5, -0.8, 1.2,
      0, 0, 0,  2.5, -0.8, -1.2,
      0, 0, 0,  2.5, 0.8, -1.2,
      2.5, 0.8, 1.2,   2.5, -0.8, 1.2,
      2.5, -0.8, 1.2,  2.5, -0.8, -1.2,
      2.5, -0.8, -1.2, 2.5, 0.8, -1.2,
      2.5, 0.8, -1.2,  2.5, 0.8, 1.2,
    ]);
    fovGeo.setAttribute('position', new THREE.BufferAttribute(fovVerts, 3));
    this.cameraFovFrustum = new THREE.LineSegments(
      fovGeo,
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 })
    );
    this.cameraFovFrustum.position.set(0.68, 0.48, 0);
    this.group.add(this.cameraFovFrustum);

    // 6. Dual RTK GNSS Antenna Masts
    const rtkMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.2 });
    const ant1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.06, 16), rtkMat);
    ant1.position.set(-0.55, 0.68, 0.28);
    const ant2 = ant1.clone();
    ant2.position.set(-0.55, 0.68, -0.28);
    this.group.add(ant1, ant2);

    // 7. Mechanical Emergency Stop Button (Mushroom Head)
    const estopBase = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.04, 16), new THREE.MeshStandardMaterial({ color: 0xfacc15 }));
    estopBase.position.set(-0.05, 0.54, 0.28);
    const estopHead = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.03, 0.03, 16), new THREE.MeshStandardMaterial({ color: 0xef4444, roughness: 0.3 }));
    estopHead.position.set(-0.05, 0.57, 0.28);
    this.group.add(estopBase, estopHead);

    // 8. Pan-Tilt Gimbal with 532nm Green Laser Diode
    const gimbalBase = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.08, 16), new THREE.MeshStandardMaterial({ color: 0x475569 }));
    gimbalBase.position.set(0.42, 0.56, 0);
    const laserDiode = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.05, 0.05), new THREE.MeshStandardMaterial({ color: 0x15803d }));
    laserDiode.position.set(0.46, 0.61, 0);
    this.group.add(gimbalBase, laserDiode);

    // 9. Simulated 532nm Laser Beam line
    const laserGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0.52, 0.61, 0),
      new THREE.Vector3(12.0, 0.61, 0)
    ]);
    const laserMat = new THREE.LineBasicMaterial({
      color: 0x22c55e, // Emerald green laser
      linewidth: 3,
      transparent: true,
      opacity: 0.9
    });
    this.laserBeam = new THREE.Line(laserGeo, laserMat);
    this.laserBeam.visible = false;
    this.group.add(this.laserBeam);

    // Laser impact glow dot
    this.laserGlowMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.08, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0x4ade80, transparent: true, opacity: 0.85 })
    );
    this.laserGlowMesh.visible = false;
    this.group.add(this.laserGlowMesh);
  }

  public update(state: UGVVisualState, dt: number) {
    // 1. Position and Orientation
    this.group.position.set(state.x, state.y, state.z);
    
    // Heading in radians (Z-up vs Y-up conversion)
    const headingRad = -THREE.MathUtils.degToRad(state.heading);
    this.group.rotation.y = headingRad;
    
    // Incline Pitch on ramp
    this.group.rotation.z = THREE.MathUtils.degToRad(state.pitch);
    this.group.rotation.x = THREE.MathUtils.degToRad(state.roll);

    // 2. Wheels rotation proportional to velocity
    const rotationDelta = (state.speed / this.wheelRadius) * dt;
    this.wheels.forEach(wheel => {
      wheel.rotation.z -= rotationDelta;
    });

    // 3. Front Wheels Steering Pivots
    const steerRad = -THREE.MathUtils.degToRad(state.steeringAngle);
    this.frontWheelPivots.forEach(pivot => {
      pivot.rotation.y = steerRad;
    });

    // 4. Spin LiDAR puck (10 Hz = 600 RPM)
    this.lidarRotor.rotation.y += 15.0 * dt;

    // 5. Laser Beam targeting simulation
    if (state.laserActive && state.laserTargetPos) {
      this.laserBeam.visible = true;
      this.laserGlowMesh.visible = true;
      
      const localOrigin = new THREE.Vector3(0.52, 0.61, 0);
      const worldTarget = new THREE.Vector3(...state.laserTargetPos);
      const localTarget = this.group.worldToLocal(worldTarget.clone());
      
      const positions = new Float32Array([
        localOrigin.x, localOrigin.y, localOrigin.z,
        localTarget.x, localTarget.y, localTarget.z
      ]);
      this.laserBeam.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      this.laserBeam.geometry.attributes.position.needsUpdate = true;
      
      this.laserGlowMesh.position.copy(localTarget);
    } else {
      this.laserBeam.visible = false;
      this.laserGlowMesh.visible = false;
    }
  }
}

