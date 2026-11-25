// BottleMate light ring simulator: a direct port of firmware/v2.0-esp32c3-encoder/src/strip.h
// (12 LEDs, mirrored halves, bottom join = the front panel), drawn as a glowing ring seen from above.
(() => {
  const LEDS = 12, SPAN = 6, START = 0;
  const C = {
    aqua: [0, 0.7, 1], deep: [0, 0.2, 1], softw: [1, 0.82, 0.62], gold: [1, 0.72, 0.05],
    green: [0.05, 1, 0.2], pink: [1, 0, 0.45], orange: [1, 0.25, 0], red: [1, 0.06, 0], purple: [0.65, 0, 1],
  };
  const TWO_PI = Math.PI * 2;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const sm = (x) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };
  const breath = (t, p) => 0.5 - 0.5 * Math.cos(((t % p) / p) * TWO_PI);
  const mix = (a, b, f) => [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];

  let fb = [];
  const clear = () => { fb = Array.from({ length: LEDS }, () => [0, 0, 0]); };
  function add(p, c, k) {
    if (k <= 0 || p < 0 || p >= SPAN) return;
    const ia = (START + p) % LEDS, ib = (((START - 1 - p) % LEDS) + LEDS) % LEDS;
    for (const i of [ia, ib]) { fb[i][0] += c[0] * k; fb[i][1] += c[1] * k; fb[i][2] += c[2] * k; }
  }
  const fillAll = (c, k) => { for (let p = 0; p < SPAN; p++) add(p, c, k); };
  function comet(pos, c, k, tail, decay) {
    for (let j = 0; j <= tail; j++) {
      const p = pos - j, w = k * decay ** j, i0 = Math.floor(p), fr = p - i0;
      add(i0, c, w * (1 - fr)); add(i0 + 1, c, w * fr);
    }
  }
  const lapPos = (t, period, tail) => { const u = t / period; return (u - Math.floor(u)) * (SPAN + tail); };

  // Patterns (t in ms), identical maths to the firmware.
  const today = 0.55, frac0 = 0.42, frac1 = 0.6;
  const FX = {
    boot: { len: 1900, draw(t) {
      const lit = sm(t / 1000) * SPAN;
      const glow = sm((t - 900) / 250) * (1 - sm((t - 1250) / 200));
      const fade = 1 - sm((t - 1300) / 600);
      for (let p = 0; p < SPAN; p++) {
        const body = clamp(lit - p, 0, 1), edge = Math.max(0, 1 - Math.abs(lit - 0.5 - p) * 1.3);
        add(p, C.aqua, fade * (0.32 * body + 0.55 * edge * (1 - glow) + 0.35 * glow));
      }
    } },
    lift: { len: 0, draw(t) { fillAll(C.aqua, 0.16 * sm(t / 600)); } },
    sip: { len: 2800, draw(t) {
      if (t < 900) { const r = (t / 900) * SPAN, k = 1 - (t / 900) * 0.6; for (let p = 0; p < SPAN; p++) add(p, C.aqua, k * (1 - Math.abs(p - r))); }
      if (t > 600) {
        const f = frac0 + (frac1 - frac0) * sm((t - 700) / 900), lit = clamp(f, 0, 1) * SPAN;
        const k = 0.5 * sm((t - 600) / 300) * (1 - sm((t - 2200) / 600));
        for (let p = 0; p < SPAN; p++) add(p, C.aqua, k * clamp(lit - p, 0, 1));
      }
    } },
    ret: { len: 900, draw(t) { fillAll(C.aqua, 0.3 * Math.sin(Math.PI * clamp(t / 900, 0, 1))); } },
    refill: { len: 2600, draw(t) {
      const lit = sm(t / 1300) * SPAN, fade = 1 - sm((t - 1900) / 700);
      for (let p = 0; p < SPAN; p++) {
        const k = clamp(lit - p, 0, 1), shimmer = 0.8 + 0.2 * Math.sin(t / 120 + p * 1.7);
        add(p, mix(C.deep, C.aqua, p / (SPAN - 1)), 0.8 * k * shimmer * fade);
      }
    } },
    alert: { len: 0, draw(t) {
      const b = 0.25 + 0.75 * breath(t, 3200);
      for (let p = 0; p < SPAN; p++) { const w = 0.5 + 0.5 * Math.sin(TWO_PI * (p / SPAN - t / 4000)); add(p, C.pink, b * (0.45 + 0.55 * w)); }
    } },
    goal: { len: 3600, draw(t) {
      const env = sm(t / 500) * (1 - sm((t - 2800) / 800));
      for (let p = 0; p < SPAN; p++) { const tw = 0.5 + 0.5 * Math.sin(t / 170 + p * 2.399); add(p, C.gold, env * (0.25 + 0.55 * tw * tw)); }
      comet(lapPos(t, 1400, 3), C.softw, 0.6 * env, 3, 0.5);
    } },
    ambient: { len: 0, draw(t) {
      const lit = today * SPAN, n = clamp(Math.floor(lit), 0, SPAN);
      for (let p = 0; p < n; p++) add(p, C.aqua, 0.2);
      if (n < SPAN) add(n, C.aqua, Math.max(0.2 * (lit - n), 0.04 + 0.1 * breath(t, 3000)));
    } },
    pair: { len: 0, draw(t) { fillAll(C.green, 0.04); comet(lapPos(t, 1400, 3), C.green, 0.55 + 0.45 * breath(t, 2800), 3, 0.55); } },
    connect: { len: 1300, draw(t) {
      const out = 1 - sm((t - 800) / 500), pos = (t / 800) * (SPAN + 2);
      comet(pos, C.green, out, 2, 0.6);
      fillAll(C.green, 0.45 * Math.sin(Math.PI * clamp((t - 750) / 550, 0, 1)));
    } },
    cal: { len: 0, draw(t) {
      if (Math.floor(t / 3000) % 2) { fillAll(C.orange, 0.06); comet(lapPos(t, 900, 2), C.orange, 0.8, 2, 0.5); }
      else fillAll(C.orange, 0.06 + 0.22 * breath(t, 2400));
    } },
    find: { len: 0, draw(t) { fillAll(C.softw, 0.15 + 0.85 * breath(t, 600)); } },
    error: { len: 0, draw(t) { fillAll(C.red, 0.1 + 0.25 * breath(t, 2500)); } },
    demo: { len: 1500, draw(t) {
      const out = 1 - sm((t - 1000) / 500), pos = lapPos(t, 700, 4);
      comet(pos, C.purple, out, 4, 0.6);
      add(Math.round(pos), C.gold, 0.6 * out);
    } },
  };

  function frame(name, t) {
    clear();
    const fx = FX[name];
    if (!fx) return fb;
    const tt = fx.len ? t % (fx.len + 700) : t; // one-shots replay after a short pause
    if (!fx.len || tt < fx.len) fx.draw(tt);
    return fb;
  }

  // Angle of LED i on screen (radians, canvas y-down). LED 0 / 11 sit either side of the bottom join.
  const angle = (i) => ((90 - 15 - 30 * i) * Math.PI) / 180;
  const ledPoints = Array.from({ length: LEDS }, (_, i) => [Math.cos(angle(i)), Math.sin(angle(i))]);
  const diffuser = Array.from({ length: 48 }, (_, i) => {
    const a = i * TWO_PI / 48;
    const position = ((angle(0) - a + TWO_PI) / TWO_PI * LEDS) % LEDS;
    const first = Math.floor(position);
    return { x: Math.cos(a), y: Math.sin(a), first, next: (first + 1) % LEDS, blend: position - first };
  });
  const previewTime = { boot: 1050, lift: 600, sip: 1550, ret: 450, refill: 1300, alert: 1600, goal: 1000,
    ambient: 0, pair: 650, connect: 1000, cal: 4700, find: 300, error: 1250, demo: 350 };

  // Draws the base from above: dark puck, metal plate, knob, front panel, and the glowing ring.
  class RingView {
    constructor(canvas, { compact = false, effect = 'boot' } = {}) {
      this.c = canvas;
      this.ctx = canvas.getContext('2d');
      if (!this.ctx) return;

      this.compact = compact;
      this.fx = effect;
      this.playing = !matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.elapsed = this.playing ? 0 : previewTime[effect];
      this.raf = 0;
      this.visible = !('IntersectionObserver' in window);
      this.c.parentElement.classList.add('ring-ready');
      this.resize();
      if ('ResizeObserver' in window) new ResizeObserver(() => this.resize()).observe(canvas);
      else addEventListener('resize', () => this.resize());
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
          this.visible = entry.isIntersecting;
          this.updateLoop();
        }).observe(canvas);
      }
      document.addEventListener('visibilitychange', () => this.updateLoop());
      this.updateLoop();
    }
    set(name) {
      if (!this.ctx) return;
      this.fx = name;
      this.elapsed = this.playing ? Math.min(100, previewTime[name]) : previewTime[name];
      this.draw(this.elapsed);
    }
    setPlaying(playing) {
      this.playing = playing;
      this.updateLoop();
    }
    resize() {
      const d = Math.min(devicePixelRatio || 1, 1.5);
      const w = Math.max(1, Math.round(this.c.clientWidth * d));
      const h = Math.max(1, Math.round(this.c.clientHeight * d));
      if (this.c.width !== w || this.c.height !== h) {
        this.c.width = w;
        this.c.height = h;
      }
      this.draw(this.elapsed);
    }
    updateLoop() {
      if (!this.ctx || !this.playing || !this.visible || document.hidden) {
        cancelAnimationFrame(this.raf);
        this.raf = 0;
        return;
      }
      if (this.raf) return;
      let last = performance.now();
      const tick = (now) => {
        if (now - last >= 1000 / 30 - 2) {
          this.elapsed += now - last;
          last = now;
          this.draw(this.elapsed);
        }
        this.raf = requestAnimationFrame(tick);
      };
      this.raf = requestAnimationFrame(tick);
    }
    draw(t) {
      const { ctx, c } = this, W = c.width, H = c.height, cx = W / 2, cy = H / 2;
      const R = Math.min(W, H) * (this.compact ? 0.4 : 0.36);
      const leds = frame(this.fx, t);
      ctx.clearRect(0, 0, W, H);
      // overall light for the room glow
      let tot = [0, 0, 0];
      leds.forEach((l) => { tot[0] += l[0]; tot[1] += l[1]; tot[2] += l[2]; });
      const room = Math.min(1, (tot[0] + tot[1] + tot[2]) / 6);
      const col = (v, k = 1) => `rgba(${Math.min(255, v[0] * 561 * k) | 0},${Math.min(255, v[1] * 561 * k) | 0},${Math.min(255, v[2] * 561 * k) | 0},`;
      if (room > 0.01) {
        const g = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.9);
        const avg = [tot[0] / 12, tot[1] / 12, tot[2] / 12];
        g.addColorStop(0, col(avg, 2) + (0.35 * room) + ')'); g.addColorStop(1, col(avg, 2) + '0)');
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      }
      // puck body
      const body = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.4, R * 0.1, cx, cy, R * 1.08);
      body.addColorStop(0, '#2a3242'); body.addColorStop(0.6, '#111722'); body.addColorStop(1, '#06090f');
      ctx.fillStyle = body; ctx.beginPath(); ctx.arc(cx, cy, R * 1.04, 0, TWO_PI); ctx.fill();
      // diffuser ring: smooth band sampled between LEDs, drawn additively
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      for (const sample of diffuser) {
        const v = mix(leds[sample.first], leds[sample.next], sample.blend);
        const k = Math.max(v[0], v[1], v[2]);
        if (k < 0.003) continue;
        const x = cx + sample.x * R, y = cy + sample.y * R, rr = R * (0.12 + 0.1 * Math.min(1, k * 2));
        const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
        g.addColorStop(0, col(v) + Math.min(1, k * 1.6) * 0.5 + ')'); g.addColorStop(1, col(v) + '0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rr, 0, TWO_PI); ctx.fill();
      }
      // LED hot spots
      for (let i = 0; i < LEDS; i++) {
        const v = leds[i], k = Math.max(v[0], v[1], v[2]);
        if (k < 0.003) continue;
        const [dx, dy] = ledPoints[i], x = cx + dx * R, y = cy + dy * R, rr = R * 0.07;
        const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
        g.addColorStop(0, `rgba(255,255,255,${Math.min(0.9, k * 1.2)})`); g.addColorStop(0.4, col(v) + Math.min(1, k * 2) + ')'); g.addColorStop(1, col(v) + '0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, rr, 0, TWO_PI); ctx.fill();
      }
      ctx.restore();
      // top plate
      const plate = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
      plate.addColorStop(0, '#c9d3e0'); plate.addColorStop(0.5, '#8f9bab'); plate.addColorStop(1, '#6d7889');
      ctx.fillStyle = plate; ctx.beginPath(); ctx.arc(cx, cy, R * 0.86, 0, TWO_PI); ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,.35)'; ctx.lineWidth = R * 0.012; ctx.stroke();
      // light reflected on the plate edge
      if (room > 0.01) {
        ctx.save(); ctx.globalCompositeOperation = 'soft-light';
        const ref = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 0.86);
        const avg = [tot[0] / 12, tot[1] / 12, tot[2] / 12];
        ref.addColorStop(0, col(avg, 2) + '0)'); ref.addColorStop(1, col(avg, 2) + (0.8 * room) + ')');
        ctx.fillStyle = ref; ctx.beginPath(); ctx.arc(cx, cy, R * 0.86, 0, TWO_PI); ctx.fill(); ctx.restore();
      }
      // knob
      const kx = cx - R * 0.42, ky = cy + R * 0.38, kr = R * 0.14;
      ctx.fillStyle = 'rgba(0,0,0,.35)'; ctx.beginPath(); ctx.arc(kx + kr * 0.15, ky + kr * 0.2, kr * 1.05, 0, TWO_PI); ctx.fill();
      const kg = ctx.createRadialGradient(kx - kr * 0.3, ky - kr * 0.3, kr * 0.1, kx, ky, kr);
      kg.addColorStop(0, '#3a404c'); kg.addColorStop(1, '#0b0d12');
      ctx.fillStyle = kg; ctx.beginPath(); ctx.arc(kx, ky, kr, 0, TWO_PI); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.lineWidth = 1;
      for (let i = 0; i < 24; i++) { const a = (i / 24) * TWO_PI; ctx.beginPath(); ctx.moveTo(kx + Math.cos(a) * kr * 0.75, ky + Math.sin(a) * kr * 0.75); ctx.lineTo(kx + Math.cos(a) * kr, ky + Math.sin(a) * kr); ctx.stroke(); }
      // front panel (the OLED sits at the bottom join)
      const pw = R * 0.62, ph = R * 0.16;
      ctx.fillStyle = '#0c1018'; ctx.fillRect(cx - pw / 2, cy + R * 0.96, pw, ph);
      ctx.fillStyle = 'rgba(230,240,255,.85)'; ctx.fillRect(cx - pw * 0.28, cy + R * 0.99, pw * 0.56, ph * 0.5);
      if (!this.compact) {
        ctx.fillStyle = 'rgba(200,220,255,.55)'; ctx.font = `600 ${Math.round(R * 0.07)}px "JetBrains Mono", monospace`; ctx.textAlign = 'center';
        ctx.fillText('FRONT · SCREEN', cx, cy + R * 1.32);
        ctx.fillText('BACK', cx, cy - R * 1.2);
      }
    }
  }

  window.BottleMateRing = { RingView, frame };
})();
