/**
 * Web Audio API Sound Engine for R.A.M.A.N. GCS.
 * Generates robotic, military-grade telemetry sound effects natively in the browser.
 * Respects browser autoplay policy by awaiting user interaction.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;
  private userInteracted: boolean = false;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public enableSound(enable: boolean) {
    this.enabled = enable;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public registerInteraction() {
    this.userInteracted = true;
    this.initContext();
  }

  // Play tone helper
  private playTone(freq: number, type: OscillatorType, duration: number, gainVal: number = 0.15, delay: number = 0) {
    if (!this.enabled || !this.userInteracted) return;
    this.initContext();
    if (!this.ctx) return;

    const startTime = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(gainVal, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  // 1. SYSTEM START: Sci-Fi ascending boot chime
  public playSystemStart() {
    this.playTone(440, 'sine', 0.12, 0.2, 0.0);
    this.playTone(660, 'sine', 0.14, 0.25, 0.1);
    this.playTone(880, 'sine', 0.25, 0.3, 0.22);
  }

  // 2. AUTONOMOUS MODE: Dual confirmation chirp
  public playAutonomousMode() {
    this.playTone(523.25, 'triangle', 0.1, 0.2, 0.0);  // C5
    this.playTone(783.99, 'triangle', 0.2, 0.25, 0.08); // G5
  }

  // 3. OBSTACLE WARNING: Urgent dual-tone pulsing beep
  public playObstacleWarning() {
    this.playTone(880, 'sawtooth', 0.08, 0.15, 0.0);
    this.playTone(700, 'sawtooth', 0.1, 0.18, 0.1);
  }

  // 4. TRAFFIC LIGHT: Attention alert chime
  public playTrafficLight() {
    this.playTone(587.33, 'sine', 0.15, 0.2, 0.0);
    this.playTone(440.00, 'sine', 0.2, 0.2, 0.15);
  }

  // 5. TARGET FOUND: High-pitch radar target acquisition beep
  public playTargetFound() {
    this.playTone(1046.5, 'sine', 0.08, 0.2, 0.0);
    this.playTone(1318.5, 'sine', 0.08, 0.22, 0.08);
    this.playTone(1567.98, 'triangle', 0.25, 0.25, 0.16);
  }

  // 6. LASER CONFIRMATION: Pulsing high-energy hum (simulating 532nm laser activation)
  public playLaserConfirmation() {
    if (!this.enabled || !this.userInteracted) return;
    this.initContext();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.5);
    osc.frequency.setValueAtTime(440, now + 1.8);
    osc.frequency.exponentialRampToValueAtTime(110, now + 2.0);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.1);
    gain.gain.setValueAtTime(0.12, now + 1.8);
    gain.gain.linearRampToValueAtTime(0.001, now + 2.0);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 2.05);
  }

  // 7. MISSION COMPLETE: Victorious fanfare chords
  public playMissionComplete() {
    const chords = [523.25, 659.25, 783.99, 1046.5]; // C major
    chords.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.5, 0.18, idx * 0.12);
    });
    this.playTone(1046.5, 'sine', 0.8, 0.25, 0.6);
  }

  // 8. EMERGENCY STOP: Urgent harsh alarm klaxon
  public playEmergencyStop() {
    for (let i = 0; i < 3; i++) {
      this.playTone(950, 'sawtooth', 0.12, 0.25, i * 0.18);
      this.playTone(450, 'sawtooth', 0.1, 0.25, i * 0.18 + 0.08);
    }
  }
}

export const soundEngine = new SoundEngine();

