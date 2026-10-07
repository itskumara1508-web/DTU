import * as THREE from 'three';

export interface TrafficLightMeshRef {
  setLightState: (color: 'RED' | 'YELLOW' | 'GREEN') => void;
}

export class ArenaEnvironment {
  public group: THREE.Group;
  public trafficLightRef: TrafficLightMeshRef;
  public targetGalleryPositions: [number, number, number][] = [];
  public rampBounds = { startX: 30.0, endX: 42.0, peakX: 36.0, height: 1.6 };

  private plannedPathLine: THREE.Line;
  private localTrajectoryLine: THREE.Line;
  private lidarPointCloud: THREE.Points;

  constructor() {
    this.group = new THREE.Group();
    this.initGroundAndTrack();
    this.initStartFinishZones();
    this.initObstaclesAndDebris();
    this.initPotholes();
    this.initRamp20Deg();
    this.initTrafficLightGantry();
    this.initRoadSigns();
    this.initFaceTargetGallery();
    this.initNavigationPaths();
    this.initLidarPointCloud();
  }

  private initGroundAndTrack() {
    // 1. Light Tactical Ground Plane (Clean light pavement / airfield concrete)
    const groundGeo = new THREE.PlaneGeometry(120, 40);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0, // Clean light slate tarmac
      roughness: 0.8,
      metalness: 0.1,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.set(30, -0.02, 0);
    ground.receiveShadow = true;
    this.group.add(ground);

    // Light crisp grid lines
    const grid = new THREE.GridHelper(100, 50, 0x94a3b8, 0xcbd5e1);
    grid.position.set(30, 0.001, 0);
    this.group.add(grid);

    // 2. High-Contrast Competition Runway Track (65m long, 3.8m wide)
    const trackGeo = new THREE.PlaneGeometry(70, 3.8);
    const trackMat = new THREE.MeshStandardMaterial({
      color: 0x334155, // Clean dark slate runway surface
      roughness: 0.7,
      metalness: 0.2,
    });
    const track = new THREE.Mesh(trackGeo, trackMat);
    track.rotation.x = -Math.PI / 2;
    track.position.set(32, 0.01, 0);
    track.receiveShadow = true;
    this.group.add(track);

    // White Track Boundary Curbs
    const borderMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
    const curbLeft = new THREE.Mesh(new THREE.BoxGeometry(70, 0.08, 0.14), borderMat);
    curbLeft.position.set(32, 0.04, 1.9);
    curbLeft.receiveShadow = true;
    const curbRight = new THREE.Mesh(new THREE.BoxGeometry(70, 0.08, 0.14), borderMat);
    curbRight.position.set(32, 0.04, -1.9);
    curbRight.receiveShadow = true;
    this.group.add(curbLeft, curbRight);

    // Dashed center line (Clean bright yellow runway marking)
    for (let x = 0; x < 65; x += 3.0) {
      const dash = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.12),
        new THREE.MeshBasicMaterial({ color: 0xfacc15 })
      );
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(x, 0.02, 0);
      this.group.add(dash);
    }
  }

  private initStartFinishZones() {
    // START Zone
    const startGeo = new THREE.PlaneGeometry(3.5, 3.4);
    const startMat = new THREE.MeshStandardMaterial({ color: 0x10b981 }); // Vibrant emerald pad
    const startMesh = new THREE.Mesh(startGeo, startMat);
    startMesh.rotation.x = -Math.PI / 2;
    startMesh.position.set(0, 0.02, 0);
    this.group.add(startMesh);

    // Start Gantry Posts
    const gantryMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.8 });
    const post1 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.8), gantryMat);
    post1.position.set(0, 1.4, 2.1);
    const post2 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.8), gantryMat);
    post2.position.set(0, 1.4, -2.1);
    const banner = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.6, 4.2), new THREE.MeshStandardMaterial({ color: 0x059669 }));
    banner.position.set(0, 2.6, 0);
    this.group.add(post1, post2, banner);

    // FINISH Arch at x = 62.0
    const finPost1 = post1.clone();
    finPost1.position.set(62, 1.4, 2.1);
    const finPost2 = post2.clone();
    finPost2.position.set(62, 1.4, -2.1);
    const finBanner = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.6, 4.2), new THREE.MeshStandardMaterial({ color: 0x2563eb }));
    finBanner.position.set(62, 2.6, 0);
    this.group.add(finPost1, finPost2, finBanner);
  }

  private initObstaclesAndDebris() {
    // Dynamic Obstacle zone (cones, barrels, crates around x = 12m to 16m)
    const coneGeo = new THREE.ConeGeometry(0.22, 0.65, 16);
    const coneMat = new THREE.MeshStandardMaterial({ color: 0xe11d48, roughness: 0.3 }); // Red-orange
    const coneBandMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const createCone = (x: number, z: number) => {
      const g = new THREE.Group();
      const body = new THREE.Mesh(coneGeo, coneMat);
      body.position.y = 0.325;
      body.castShadow = true;
      const band = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.12, 16), coneBandMat);
      band.position.y = 0.35;
      g.add(body, band);
      g.position.set(x, 0, z);
      return g;
    };

    this.group.add(createCone(13.2, 0.15));
    this.group.add(createCone(13.8, -0.45));
    this.group.add(createCone(14.5, 0.6));

    // Heavy Industrial Barrels (x = 15m)
    const barrelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.85, 20);
    const barrelMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.4, metalness: 0.7 });
    const barrel1 = new THREE.Mesh(barrelGeo, barrelMat);
    barrel1.position.set(15.2, 0.425, -0.3);
    barrel1.castShadow = true;
    this.group.add(barrel1);

    // Hazard risk indicator zone
    const riskZoneGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.2, 24);
    const riskZoneMat = new THREE.MeshBasicMaterial({ color: 0xf43f5e, transparent: true, opacity: 0.25 });
    const riskZone = new THREE.Mesh(riskZoneGeo, riskZoneMat);
    riskZone.position.set(14.0, 0.1, 0);
    this.group.add(riskZone);
  }

  private initPotholes() {
    // Potholes at x = 20.5m
    const potholeMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.95 });
    const hole1 = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 0.08, 16), potholeMat);
    hole1.position.set(20.2, -0.02, 0.4);
    const hole2 = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.08, 16), potholeMat);
    hole2.position.set(21.4, -0.02, -0.5);
    this.group.add(hole1, hole2);
  }

  private initRamp20Deg() {
    // 20-DEGREE RAMP (DTU specification)
    const rampWidth = 3.2;
    const rampMat = new THREE.MeshStandardMaterial({
      color: 0x475569, // Steel diamond plate
      roughness: 0.5,
      metalness: 0.7,
    });

    const rampGroup = new THREE.Group();

    // Incline Section (20 degrees angle)
    const inclineLen = 4.68;
    const inclineGeo = new THREE.BoxGeometry(inclineLen, 0.15, rampWidth);
    const inclineMesh = new THREE.Mesh(inclineGeo, rampMat);
    inclineMesh.rotation.z = 0.349;
    inclineMesh.position.set(32.2, 0.8, 0);
    inclineMesh.castShadow = true;
    inclineMesh.receiveShadow = true;
    rampGroup.add(inclineMesh);

    // Apex Platform
    const apexGeo = new THREE.BoxGeometry(3.2, 0.15, rampWidth);
    const apexMesh = new THREE.Mesh(apexGeo, rampMat);
    apexMesh.position.set(36.0, 1.6, 0);
    apexMesh.castShadow = true;
    apexMesh.receiveShadow = true;
    rampGroup.add(apexMesh);

    // Decline Section
    const declineMesh = new THREE.Mesh(inclineGeo, rampMat);
    declineMesh.rotation.z = -0.349;
    declineMesh.position.set(39.8, 0.8, 0);
    declineMesh.castShadow = true;
    declineMesh.receiveShadow = true;
    rampGroup.add(declineMesh);

    // Support pillars
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8 });
    for (let px = 33.5; px <= 38.5; px += 2.5) {
      const pilL = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.5, 0.15), pillarMat);
      pilL.position.set(px, 0.75, 1.4);
      const pilR = new THREE.Mesh(new THREE.BoxGeometry(0.15, 1.5, 0.15), pillarMat);
      pilR.position.set(px, 0.75, -1.4);
      rampGroup.add(pilL, pilR);
    }

    this.group.add(rampGroup);
  }

  private initTrafficLightGantry() {
    const gantry = new THREE.Group();
    gantry.position.set(25.0, 0, 0);

    const postMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.7 });
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.2), postMat);
    post.position.set(0, 1.6, 2.2);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 2.6), postMat);
    arm.position.set(0, 3.1, 0.9);
    gantry.add(post, arm);

    const boxGeo = new THREE.BoxGeometry(0.25, 0.8, 0.3);
    const boxMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });
    const box = new THREE.Mesh(boxGeo, boxMat);
    box.position.set(0, 2.8, 0);
    gantry.add(box);

    const redLight = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), new THREE.MeshBasicMaterial({ color: 0xef4444 }));
    redLight.position.set(-0.13, 3.05, 0);
    const yellowLight = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), new THREE.MeshBasicMaterial({ color: 0x78716c }));
    yellowLight.position.set(-0.13, 2.8, 0);
    const greenLight = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), new THREE.MeshBasicMaterial({ color: 0x064e3b }));
    greenLight.position.set(-0.13, 2.55, 0);
    gantry.add(redLight, yellowLight, greenLight);

    this.trafficLightRef = {
      setLightState: (color: 'RED' | 'YELLOW' | 'GREEN') => {
        (redLight.material as THREE.MeshBasicMaterial).color.setHex(color === 'RED' ? 0xff0000 : 0x551111);
        (yellowLight.material as THREE.MeshBasicMaterial).color.setHex(color === 'YELLOW' ? 0xffbb00 : 0x554411);
        (greenLight.material as THREE.MeshBasicMaterial).color.setHex(color === 'GREEN' ? 0x10b981 : 0x064e3b);
      }
    };

    this.group.add(gantry);
  }

  private initRoadSigns() {
    const stopSign = this.createRoadSign('STOP', 0xdc2626);
    stopSign.position.set(7.0, 0, 2.2);

    const slowSign = this.createRoadSign('SLOW', 0xd97706);
    slowSign.position.set(10.5, 0, -2.2);

    const rampSign = this.createRoadSign('RAMP 20°', 0x2563eb);
    rampSign.position.set(28.5, 0, 2.2);

    this.group.add(stopSign, slowSign, rampSign);
  }

  private createRoadSign(label: string, colorHex: number) {
    const g = new THREE.Group();
    const post = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 2.0, 12),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 })
    );
    post.position.y = 1.0;
    post.castShadow = true;
    g.add(post);

    const plate = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.35, 0.04, 8),
      new THREE.MeshStandardMaterial({ color: colorHex, roughness: 0.3 })
    );
    plate.rotation.x = Math.PI / 2;
    plate.rotation.y = Math.PI / 8;
    plate.position.set(0, 1.8, 0);
    plate.castShadow = true;
    g.add(plate);

    return g;
  }

  private initFaceTargetGallery() {
    const targetsGroup = new THREE.Group();
    targetsGroup.position.set(48.0, 0, 0);

    const targetConfigs = [
      { id: 'TARGET_A', name: 'Subject A', x: -2.0, z: 2.8, color: 0x94a3b8, isMatch: false },
      { id: 'TARGET_B', name: 'Subject B', x: 0.0, z: 2.8, color: 0x64748b, isMatch: false },
      { id: 'TARGET_C_MATCH', name: 'Target Alpha', x: 2.0, z: 2.8, color: 0xe11d48, isMatch: true },
      { id: 'TARGET_D', name: 'Subject D', x: 4.0, z: 2.8, color: 0x475569, isMatch: false },
    ];

    targetConfigs.forEach((cfg) => {
      const stand = new THREE.Group();
      stand.position.set(cfg.x, 0, cfg.z);

      const base = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.2, 0.1), new THREE.MeshStandardMaterial({ color: 0x334155 }));
      base.position.y = 0.6;
      stand.add(base);

      const panelGeo = new THREE.PlaneGeometry(0.7, 0.7);
      const panelMat = new THREE.MeshBasicMaterial({ color: cfg.color });
      const panel = new THREE.Mesh(panelGeo, panelMat);
      panel.position.set(0, 1.25, 0.06);
      stand.add(panel);

      const frameGeo = new THREE.BoxGeometry(0.74, 0.74, 0.02);
      const frameMat = new THREE.MeshBasicMaterial({ color: cfg.isMatch ? 0x10b981 : 0x475569 });
      const frame = new THREE.Mesh(frameGeo, frameMat);
      frame.position.set(0, 1.25, 0.05);
      stand.add(frame);

      this.group.add(stand);
      this.targetGalleryPositions.push([48.0 + cfg.x, 1.25, cfg.z]);
    });
  }

  private initNavigationPaths() {
    // Global planned path (Bright Blue dashed corridor)
    const points: THREE.Vector3[] = [
      new THREE.Vector3(0, 0.08, 0),
      new THREE.Vector3(10, 0.08, 0),
      new THREE.Vector3(12.5, 0.08, 0.8),
      new THREE.Vector3(16.0, 0.08, -0.6),
      new THREE.Vector3(25.0, 0.08, 0),
      new THREE.Vector3(32.2, 0.8, 0),
      new THREE.Vector3(36.0, 1.65, 0),
      new THREE.Vector3(39.8, 0.8, 0),
      new THREE.Vector3(48.0, 0.08, 0),
      new THREE.Vector3(62.0, 0.08, 0),
    ];

    const pathGeo = new THREE.BufferGeometry().setFromPoints(points);
    const pathMat = new THREE.LineDashedMaterial({
      color: 0x2563eb, // High-visibility royal blue
      dashSize: 0.8,
      gapSize: 0.4,
      linewidth: 2,
    });
    this.plannedPathLine = new THREE.Line(pathGeo, pathMat);
    this.plannedPathLine.computeLineDistances();
    this.group.add(this.plannedPathLine);

    // Active local trajectory line (Vibrant emerald green)
    const localGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0.1, 0),
      new THREE.Vector3(1, 0.1, 0),
      new THREE.Vector3(2, 0.1, 0),
    ]);
    const localMat = new THREE.LineBasicMaterial({ color: 0x10b981, linewidth: 3 });
    this.localTrajectoryLine = new THREE.Line(localGeo, localMat);
    this.group.add(this.localTrajectoryLine);
  }

  private initLidarPointCloud() {
    const count = 720;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.0 + Math.random() * 8.0;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = 0.35 + (Math.random() - 0.5) * 0.1;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      if (radius < 3.5) {
        colors[i * 3] = 0.9;
        colors[i * 3 + 1] = 0.1;
        colors[i * 3 + 2] = 0.2;
      } else {
        colors[i * 3] = 0.0;
        colors[i * 3 + 1] = 0.7;
        colors[i * 3 + 2] = 0.3;
      }
    }

    const lidarGeo = new THREE.BufferGeometry();
    lidarGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    lidarGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const lidarMat = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    this.lidarPointCloud = new THREE.Points(lidarGeo, lidarMat);
    this.group.add(this.lidarPointCloud);
  }

  public updateLidarPoints(ugvX: number, ugvZ: number) {
    this.lidarPointCloud.position.set(ugvX, 0, ugvZ);
  }

  public updateLocalTrajectory(points: THREE.Vector3[]) {
    if (points.length > 1) {
      this.localTrajectoryLine.geometry.setFromPoints(points);
      this.localTrajectoryLine.geometry.attributes.position.needsUpdate = true;
    }
  }
}
