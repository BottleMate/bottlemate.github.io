// BottleMate interactive 3D: the smart base, built procedurally to match the product renders.
// Hero: scroll plays a sip (alert → lift → +180 ml → nice sip), pointer tilts, drag spins.
// Base section: the parts explode apart as you scroll, with labels.
import * as THREE from 'three';
import { RoomEnvironment } from '../vendor/jsm/environments/RoomEnvironment.js';
import { EffectComposer } from '../vendor/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from '../vendor/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from '../vendor/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from '../vendor/jsm/postprocessing/OutputPass.js';
import { OLED_DATA } from './oled-data.js';
const { frame: ringFrame } = window.BottleMateRing;

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const DBG = new URLSearchParams(location.search);
const LOW = DBG.has('low') || matchMedia('(max-width: 760px)').matches || (navigator.hardwareConcurrency || 8) <= 4;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

// ---------- colours (linear-ish 0..1) ----------
const C = {
  aqua: [0.36, 0.78, 1.0], blue: [0.16, 0.45, 0.96], deep: [0.10, 0.25, 1.0],
  gold: [1.0, 0.68, 0.22], violet: [0.56, 0.46, 1.0],
};
const add = (o, c, k) => { o[0] += c[0] * k; o[1] += c[1] * k; o[2] += c[2] * k; };

// ---------- textures ----------
function radialTexture(stops, size = 256) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([o, col]) => gr.addColorStop(o, col));
  g.fillStyle = gr; g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

const loader = new THREE.TextureLoader();
const OLED = {};
function oled(name) {
  if (!OLED[name]) {
    const t = loader.load(OLED_DATA[name] || `assets/img/oled/${name}.webp`);
    t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
    OLED[name] = t;
  }
  return OLED[name];
}

// The light ring is a 1-px-high strip redrawn every frame.
class RingStrip {
  constructor(w = 512) {
    this.w = w;
    this.c = document.createElement('canvas'); this.c.width = w; this.c.height = 1;
    this.ctx = this.c.getContext('2d');
    this.img = this.ctx.createImageData(w, 1);
    this.tex = new THREE.CanvasTexture(this.c);
    this.tex.colorSpace = THREE.SRGBColorSpace;
    this.tex.wrapS = THREE.RepeatWrapping;
    this.tex.magFilter = THREE.LinearFilter;
    this.out = [0, 0, 0];
  }
  // Light patterns come from the firmware port (ring.js). w = { patternName: weight }, t in seconds.
  leds(t, w) {
    const out = Array.from({ length: 12 }, () => [0, 0, 0]);
    for (const [name, k] of Object.entries(w)) {
      if (!(k > 0.001)) continue;
      const fb = ringFrame(name, t * 1000);
      for (let i = 0; i < 12; i++) { out[i][0] += fb[i][0] * k; out[i][1] += fb[i][1] * k; out[i][2] += fb[i][2] * k; }
    }
    return out;
  }
  // u = 0 is the front panel; LED 0 sits just right of it, LED 11 just left (mirrored halves).
  colour(u, L) {
    const o = this.out;
    const x = u * 12 - 0.5, f = x - Math.floor(x);
    const i0 = ((Math.floor(x) % 12) + 12) % 12, i1 = (i0 + 1) % 12;
    const seg = 0.75 + 0.25 * Math.cos(f * Math.PI * 2) ** 2;
    for (let c = 0; c < 3; c++) o[c] = (L[i0][c] * (1 - f) + L[i1][c] * f) * seg * 1.7;
    return o;
  }
  draw(t, w) {
    const d = this.img.data, L = this.leds(t, w);
    this.last = L;
    for (let i = 0; i < this.w; i++) {
      const c = this.colour(i / this.w, L);
      d[i * 4] = clamp(c[0]) * 255; d[i * 4 + 1] = clamp(c[1]) * 255; d[i * 4 + 2] = clamp(c[2]) * 255; d[i * 4 + 3] = 255;
    }
    this.ctx.putImageData(this.img, 0, 0);
    this.tex.needsUpdate = true;
  }
}

// ---------- the base ----------
function knurledCylinder(r, h, ridges = 22) {
  const g = new THREE.CylinderGeometry(r, r, h, ridges * 4, 1);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i), y = p.getY(i);
    const rr = Math.hypot(x, z);
    if (rr < r * 0.5 || Math.abs(Math.abs(y) - h / 2) < 1e-4 && rr < r * 0.99) continue;
    const a = Math.atan2(z, x);
    const k = 1 - 0.045 * (Math.cos(a * ridges) > 0.2 ? 1 : 0);
    p.setX(i, x * k); p.setZ(i, z * k);
  }
  g.computeVertexNormals();
  return g;
}

function buildBase({ internals = false, clear = false } = {}) {
  const root = new THREE.Group();
  const parts = {};
  const shell = new THREE.MeshPhysicalMaterial({ color: 0x0b0f17, roughness: 0.3, metalness: 0.25, clearcoat: 1, clearcoatRoughness: 0.16 });
  const panel = new THREE.MeshPhysicalMaterial({ color: 0x0d121b, roughness: 0.2, metalness: 0.3, clearcoat: 1, clearcoatRoughness: 0.08 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x05070b, roughness: 0.65, metalness: 0.2 });
  const plateM = new THREE.MeshStandardMaterial({ color: 0x7a8494, roughness: 0.55, metalness: 0.55, envMapIntensity: 0.28 });
  const alu = new THREE.MeshStandardMaterial({ color: 0xc9d0d9, roughness: 0.35, metalness: 0.9 });

  // Bottom shell
  const bottom = new THREE.Group();
  const lower = new THREE.Mesh(new THREE.CylinderGeometry(1, 0.965, 0.16, 128), shell); lower.position.y = 0.08;
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.93, 0.93, 0.014, 96), dark); foot.position.y = 0.007;
  bottom.add(lower, foot);

  // Light ring (diffuser band + LEDs)
  const ringG = new THREE.Group();
  const strip = new RingStrip();
  const bandM = new THREE.MeshBasicMaterial({ map: strip.tex, toneMapped: false });
  bandM.color.setScalar(2.3);
  const band = new THREE.Mesh(new THREE.CylinderGeometry(1.003, 1.003, 0.044, 192, 1, true), bandM);
  band.position.y = 0.182;
  ringG.add(band);
  const leds = [];
  if (internals) {
    const carrier = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.012, 8, 96), dark);
    carrier.rotation.x = Math.PI / 2; carrier.position.y = 0.182; ringG.add(carrier);
    for (let i = 0; i < 12; i++) {
      const m = new THREE.MeshBasicMaterial({ toneMapped: false });
      const led = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.035), m);
      const a = ((i + 0.5) / 12) * Math.PI * 2;   // same order as the firmware LEDs
      led.position.set(Math.sin(a) * 0.95, 0.182, Math.cos(a) * 0.95);
      led.rotation.y = a; led.userData.u = i / 12;
      ringG.add(led); leds.push(led);
    }
  }

  // Upper shell with the flat front panel and OLED
  const upper = new THREE.Group();
  const up = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 0.186, 128), shell); up.position.y = 0.297;
  const lip = new THREE.Mesh(new THREE.TorusGeometry(0.965, 0.036, 24, 192), shell);
  lip.rotation.x = Math.PI / 2; lip.position.y = 0.39;
  const facet = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.39, 0.14), panel); facet.position.set(0, 0.205, 0.936);
  const bezel = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.21), dark); bezel.position.set(0, 0.215, 1.0065);
  const oledM = new THREE.MeshBasicMaterial({ map: oled('home'), toneMapped: false });
  oledM.color.setScalar(1.5);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.17), oledM); screen.position.set(0, 0.215, 1.0075);
  if (internals) { // exploded: keep the panel within the upper shell so layers don't overlap
    facet.scale.y = 0.2 / 0.39; facet.position.y = 0.305;
    bezel.scale.set(0.85, 0.85, 1); bezel.position.y = 0.3;
    screen.scale.set(0.85, 0.85, 1); screen.position.y = 0.3;
  }
  upper.add(up, lip, facet, bezel, screen);

  // Top plate
  const plate = new THREE.Group();
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.925, 0.925, 0.03, 128), plateM); disc.position.y = 0.39;
  const seam = new THREE.Mesh(new THREE.TorusGeometry(0.928, 0.005, 6, 128), dark); seam.rotation.x = Math.PI / 2; seam.position.y = 0.405;
  plate.add(disc, seam);

  // Knob
  const knob = new THREE.Group();
  const knobM = new THREE.MeshPhysicalMaterial({ color: 0x0c0d10, roughness: 0.34, metalness: 0.7, clearcoat: 0.5 });
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.128, 0.128, 0.016, 48), alu); collar.position.y = 0.413;
  const body = new THREE.Mesh(knurledCylinder(0.115, 0.15), knobM); body.position.y = 0.496;
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.104, 0.104, 0.006, 48), new THREE.MeshPhysicalMaterial({ color: 0x1a1d24, roughness: 0.25, metalness: 0.8 }));
  cap.position.y = 0.572;
  knob.add(collar, body, cap);
  knob.position.set(0, 0, 0.66);   // centred behind the OLED display (the screen is at x = 0)

  const order = [];
  if (internals) {
    const cell = new THREE.Group();
    const bar = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.07, 0.14), alu); bar.position.y = 0.1;
    const gauge = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.012, 0.08), new THREE.MeshStandardMaterial({ color: 0xe8e2c8, roughness: 0.6 })); gauge.position.y = 0.14;
    cell.add(bar, gauge);

    const pcb = new THREE.Group();
    const board = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 0.82, 0.016, 96), new THREE.MeshStandardMaterial({ color: 0x163a8f, roughness: 0.5, metalness: 0.25 }));
    board.position.y = 0.16;
    const chip = (w, h, d, x, z, col, met = 0.2) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshStandardMaterial({ color: col, roughness: 0.4, metalness: met }));
      m.position.set(x, 0.168 + h / 2, z); pcb.add(m);
    };
    chip(0.2, 0.03, 0.26, 0.18, -0.12, 0xc7cdd6, 0.9);   // ESP32-C3 module
    chip(0.09, 0.02, 0.09, -0.2, -0.2, 0x111318);        // HX711
    chip(0.08, 0.1, 0.05, -0.38, 0.25, 0x2b8cff);        // DHT11
    chip(0.11, 0.035, 0.07, 0, -0.74, 0xbfc6cf, 0.9);    // USB-C
    chip(0.07, 0.015, 0.05, 0.42, 0.3, 0x111318);
    chip(0.05, 0.012, 0.05, 0.3, 0.45, 0x111318);
    for (let i = 0; i < 6; i++) chip(0.5, 0.002, 0.008, 0.05, 0.05 + i * 0.05, 0xd8a640, 0.9); // traces
    pcb.add(board);
    order.push(['bottom', bottom], ['cell', cell], ['pcb', pcb], ['ring', ringG], ['upper', upper], ['plate', plate], ['knob', knob]);
  } else {
    order.push(['bottom', bottom], ['ring', ringG], ['upper', upper], ['plate', plate], ['knob', knob]);
  }
  order.forEach(([k, g]) => { parts[k] = g; root.add(g); });

  // Floor: soft blue glow + contact shadow
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(6, 6), new THREE.MeshBasicMaterial({
    map: radialTexture([[0, 'rgba(70,150,255,.55)'], [0.25, 'rgba(60,110,255,.18)'], [1, 'rgba(0,0,0,0)']]),
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  glow.rotation.x = -Math.PI / 2; glow.position.y = 0.001;
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(2.9, 2.9), new THREE.MeshBasicMaterial({
    map: radialTexture([[0, 'rgba(0,0,0,.9)'], [0.6, 'rgba(0,0,0,.55)'], [1, 'rgba(0,0,0,0)']]),
    transparent: true, depthWrite: false,
  }));
  shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.002;
  glow.visible = !clear;           // additive glow only reads on a dark stage
  if (clear) { shadow.material.opacity = 0.38; shadow.scale.setScalar(0.88); bandM.color.setScalar(4.2); }
  root.add(glow, shadow);

  root.traverse((o) => {
    const m = o.material;
    if (m && m.isMeshStandardMaterial && m.envMapIntensity === 1) m.envMapIntensity = 0.6;
  });
  return { root, parts, order, strip, leds, oledM, glow };
}

function buildBottle() {
  const g = new THREE.Group();
  const prof = [[0, 0], [0.29, 0], [0.33, 0.025], [0.345, 0.08], [0.345, 0.92], [0.335, 1.0], [0.25, 1.1], [0.16, 1.16], [0.15, 1.24]]
    .map(([x, y]) => new THREE.Vector2(x, y));
  // Plain transparency (no transmission): transmission + bloom produced invalid pixels on some GPUs.
  const glassM = new THREE.MeshPhysicalMaterial({ color: 0xdcefff, roughness: 0.04, metalness: 0, transparent: true, opacity: 0.13, clearcoat: 1, clearcoatRoughness: 0.05, side: THREE.DoubleSide, depthWrite: false, envMapIntensity: 0.9 });
  const glass = new THREE.Mesh(new THREE.LatheGeometry(prof, 72), glassM);
  glass.renderOrder = 2;
  const waterM = new THREE.MeshPhysicalMaterial({ color: 0x1f7bff, emissive: 0x0b47c4, emissiveIntensity: 0.6, roughness: 0.12, clearcoat: 1, transparent: true, opacity: 0.8, depthWrite: false, envMapIntensity: 0.7 });
  const water = new THREE.Mesh(new THREE.CylinderGeometry(0.325, 0.31, 1, 64), waterM);
  const capM = new THREE.MeshPhysicalMaterial({ color: 0x2f7cf0, roughness: 0.35, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.2 });
  const cap = new THREE.Mesh(knurledCylinder(0.165, 0.13, 30), capM); cap.position.y = 1.3;
  g.add(water, glass, cap);
  const setLevel = (l) => { water.scale.y = l; water.position.y = 0.025 + l / 2; };
  setLevel(0.72);
  return { group: g, setLevel };
}

// ---------- renderer ----------
// bg = null renders on a transparent canvas (the device floats on the page, no bloom);
// a colour renders an opaque "night stage" with bloom so the light ring glows.
function setup(canvas, bg) {
  const clear = bg === null;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !LOW, alpha: clear, premultipliedAlpha: true,
    powerPreference: 'high-performance', preserveDrawingBuffer: DBG.has('snap') });
  renderer.setPixelRatio(Math.min(devicePixelRatio, LOW ? 1.5 : 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = clear ? 1.12 : 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  if (clear) renderer.setClearColor(0x000000, 0);
  const scene = new THREE.Scene();
  if (!clear) scene.background = new THREE.Color(bg);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);

  const key = new THREE.DirectionalLight(0xffffff, clear ? 2.2 : 1.6); key.position.set(-3, 4, 3);
  const rim = new THREE.DirectionalLight(0x5cc2ff, 3); rim.position.set(2.5, 2, -4);
  const fill = new THREE.DirectionalLight(clear ? 0xdde9ff : 0x8b7cff, clear ? 1.2 : 0.9); fill.position.set(4, 1, 2);
  const follow = new THREE.PointLight(0x7fd4ff, 5, 5, 1.6); follow.position.set(0, 1.4, 2);
  scene.add(key, rim, fill, follow);

  let composer = null, bloom = null;
  if (!clear) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.75, 0.5, 0.95);
    if (!DBG.has('nobloom')) composer.addPass(bloom);
    composer.addPass(new OutputPass());
  }
  const resize = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    if (composer) { composer.setSize(w, h); bloom.resolution.set(w * (LOW ? 0.5 : 0.75), h * (LOW ? 0.5 : 0.75)); }
    camera.aspect = w / h; camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(canvas);
  resize();
  const render = (dt) => (composer ? composer.render(dt) : renderer.render(scene, camera));
  if (DBG.has('snap')) (window.__bmSnap ||= []).push(() => canvas.toDataURL('image/png'));
  return { renderer, scene, camera, composer: { render }, follow };
}

// Runs fn(dt, t) every frame while el is on screen.
function loop(el, fn) {
  let on = false, raf = 0, last = performance.now(), t = 0;
  const tick = (now) => {
    if (now - last >= (LOW ? 31 : 15)) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      t += dt;
      fn(dt, t);
    }
    raf = requestAnimationFrame(tick);
  };
  const sync = () => {
    if (!on || document.hidden) {
      cancelAnimationFrame(raf);
      raf = 0;
    } else if (!raf) {
      last = performance.now();
      raf = requestAnimationFrame(tick);
    }
  };
  new IntersectionObserver(([e]) => { on = e.isIntersecting; sync(); }).observe(el);
  document.addEventListener('visibilitychange', sync);
}

// Pointer (-1..1 in the element) + horizontal drag to spin.
function pointerInput(el, canvas) {
  const s = { x: 0, y: 0, drag: 0, vel: 0, down: false, lx: 0 };
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    s.x = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
    s.y = clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);
    if (s.down) { const dx = e.clientX - s.lx; s.lx = e.clientX; s.vel = dx * 0.006; s.drag += s.vel; }
  });
  el.addEventListener('pointerleave', () => { s.x = 0; s.y = 0; });
  canvas.addEventListener('pointerdown', (e) => { s.down = true; s.lx = e.clientX; canvas.setPointerCapture(e.pointerId); canvas.classList.add('grabbing'); });
  const up = () => { s.down = false; canvas.classList.remove('grabbing'); };
  canvas.addEventListener('pointerup', up);
  canvas.addEventListener('pointercancel', up);
  return s;
}

// ---------- hero ----------
export function initHero() {
  const vis = document.getElementById('hero-stage');
  const canvas = document.getElementById('hero3d');
  const hero = document.querySelector('.hero.pin') || vis;
  if (!vis || !canvas) return;
  const { scene, camera, composer, follow } = setup(canvas, null);
  const base = buildBase({ clear: true });
  const bottle = buildBottle();
  scene.add(base.root);
  base.root.add(bottle.group);
  const BX = 0.16, BZ = -0.1, TOP = 0.405;
  bottle.group.position.set(BX, TOP, BZ);
  ['home', 'home_alert', 'lift', 'sip', 'sip_card'].forEach(oled);

  const ptr = pointerInput(vis, canvas);
  const cur = { yaw: -0.5, pitch: 0.36, lift: 0, level: 0.72, px: 0, py: 0 };
  let step = -1;
  const wide = matchMedia('(min-width: 981px) and (min-height: 680px)');
  const sticky = () => wide.matches;

  const progress = () => {
    if (sticky()) {
      const r = hero.getBoundingClientRect();
      return clamp(-r.top / Math.max(1, r.height - innerHeight));
    }
    const v = vis.getBoundingClientRect(); // phones: play as the model crosses the screen
    return clamp((innerHeight * 0.72 - v.top) / (innerHeight * 0.62));
  };

  loop(vis, (dt, t) => {
    const p = progress();
    const k = 1 - Math.exp(-dt * 5);

    // story
    const s = p < 0.14 ? 0 : p < 0.34 ? 1 : p < 0.56 ? 2 : p < 0.78 ? 3 : 4;
    if (s !== step) {
      step = s;
      base.oledM.map = oled(['home', 'home_alert', 'lift', 'sip', 'sip_card'][s]);
      vis.dataset.step = String(s);
    }
    const lift = smooth(0.34, 0.44, p) * (1 - smooth(0.5, 0.6, p));
    const level = lerp(0.72, 0.54, smooth(0.42, 0.54, p));
    cur.lift += (lift - cur.lift) * k * 1.6;
    cur.level += (level - cur.level) * k;
    bottle.setLevel(cur.level);
    const L = cur.lift;
    bottle.group.position.set(BX + L * 0.2, TOP + L * 0.42 + Math.sin(t * 2) * 0.006 * L, BZ + L * 0.12);
    bottle.group.rotation.set(L * 0.1, 0, -L * 0.32);

    const w = {
      ambient: 1 - smooth(0.1, 0.16, p) + smooth(0.76, 0.82, p),
      alert: smooth(0.12, 0.16, p) * (1 - smooth(0.32, 0.36, p)),
      lift: smooth(0.32, 0.36, p) * (1 - smooth(0.54, 0.58, p)),
      sip: smooth(0.54, 0.58, p) * (1 - smooth(0.76, 0.8, p)),
    };
    base.strip.draw(t, w);

    // camera: scroll orbit + pointer tilt + drag spin
    ptr.drag += ptr.vel; ptr.vel *= ptr.down ? 0.5 : 0.94;
    cur.px += (ptr.x - cur.px) * k; cur.py += (ptr.y - cur.py) * k;
    const yaw = lerp(-0.55, 0.6, p) + cur.px * 0.38 + ptr.drag + (reduce ? 0 : Math.sin(t * 0.35) * 0.05);
    const pitch = lerp(0.36, 0.27, p) - cur.py * 0.12;
    cur.yaw += (yaw - cur.yaw) * k; cur.pitch += (pitch - cur.pitch) * k;
    const narrow = camera.aspect < 0.9;
    const dist = (narrow ? 6.2 : 5.5) - p * 0.3 + L * 0.35;
    const ty = 0.66 + L * 0.22;
    camera.position.set(
      dist * Math.cos(cur.pitch) * Math.sin(cur.yaw),
      ty + dist * Math.sin(cur.pitch),
      dist * Math.cos(cur.pitch) * Math.cos(cur.yaw),
    );
    camera.lookAt(0, ty, 0);
    follow.position.set(cur.px * 2.4 + Math.sin(cur.yaw) * 2, 1.3 - cur.py * 0.6, Math.cos(cur.yaw) * 2.2);

    composer.render(dt);
  });
  vis.classList.add('ready');
}

// ---------- exploded view ----------
export function initExploded() {
  const wrap = document.getElementById('base-stage');
  const canvas = document.getElementById('base3d');
  if (!wrap || !canvas) return;
  const { scene, camera, composer, follow } = setup(canvas, null);
  const base = buildBase({ internals: true, clear: true });
  scene.add(base.root);
  base.oledM.map = oled('home');
  const labels = [...wrap.querySelectorAll('.part-label')].map((el) => ({ el, part: base.parts[el.dataset.part], side: el.dataset.side === 'l' ? -1 : 1 }));
  const ptr = pointerInput(wrap, canvas);
  const cur = { e: 0, yaw: 0.5, px: 0, py: 0 };
  const v = new THREE.Vector3(), right = new THREE.Vector3();
  const STEP = 0.36;

  loop(wrap, (dt, t) => {
    const r = wrap.getBoundingClientRect();
    const raw = clamp((innerHeight - r.top) / (innerHeight + r.height));
    const e = smooth(0.18, 0.55, raw);
    const k = 1 - Math.exp(-dt * 5);
    cur.e += (e - cur.e) * k;
    base.order.forEach(([, g], i) => { g.position.y = cur.e * i * STEP; });

    base.strip.draw(t, { ambient: 1 - cur.e, boot: cur.e });
    base.leds.forEach((led, i) => {
      const L = base.strip.last[i];   // LED i of the firmware frame
      led.material.color.setRGB(L[0] * 3.5, L[1] * 3.5, L[2] * 3.5);
    });

    ptr.drag += ptr.vel; ptr.vel *= ptr.down ? 0.5 : 0.94;
    cur.px += (ptr.x - cur.px) * k; cur.py += (ptr.y - cur.py) * k;
    const yawT = 0.5 + (reduce ? 0 : t * 0.12) + cur.px * 0.35 + ptr.drag;
    cur.yaw += (yawT - cur.yaw) * k;
    const pitch = 0.32 - cur.py * 0.1;
    const ty = 0.25 + cur.e * 1.05;
    const narrow = camera.aspect < 0.9;
    const dist = (narrow ? 7.6 : 5.6) + cur.e * (narrow ? 3.2 : 2.6);
    camera.position.set(dist * Math.cos(pitch) * Math.sin(cur.yaw), ty + dist * Math.sin(pitch), dist * Math.cos(pitch) * Math.cos(cur.yaw));
    camera.lookAt(0, ty, 0);
    follow.position.set(Math.sin(cur.yaw) * 2.2, 2.5, Math.cos(cur.yaw) * 2.2);
    camera.updateMatrixWorld();

    // labels follow their part
    right.setFromMatrixColumn(camera.matrixWorld, 0);
    const W = canvas.clientWidth, H = canvas.clientHeight;
    const show = smooth(0.45, 0.8, cur.e);
    labels.forEach(({ el, part, side }) => {
      v.set(0, part.position.y + 0.2, 0).addScaledVector(right, side * 1.02);
      v.project(camera);
      const lw = el.offsetWidth || 120;
      let x = ((v.x + 1) / 2) * W;
      x = side < 0 ? Math.max(x, lw + 4) : Math.min(x, W - lw - 4);
      el.style.transform = `translate(${x}px, ${((1 - v.y) / 2) * H}px)`;
      el.style.opacity = String(show);
    });

    composer.render(dt);
  });
  wrap.classList.add('ready');
}

// ---------- light ring showcase ----------
// The real base on a dark stage, its ring playing one firmware pattern; the floor glow takes the ring's colour.
// Returns the same controls as the 2D RingView: set(id), setPlaying(bool), playing.
export function initRing(canvas, { compact = false } = {}) {
  const stage = canvas.parentElement;
  // Light stage: transparent canvas; the CSS glow behind the base takes the ring's colour.
  const { scene, camera, composer, follow } = setup(canvas, null);
  const base = buildBase({ clear: true });
  scene.add(base.root);
  base.oledM.map = oled('home');
  const ptr = pointerInput(stage, canvas);
  let glowTick = 0;
  const api = { fx: 'boot', t0: 0, clock: 0, playing: !reduce, ctx: true };
  api.set = (id) => { api.fx = id; api.t0 = api.clock; if (id === 'alert') base.oledM.map = oled('home_alert'); else if (id === 'sip') base.oledM.map = oled('sip'); else if (id === 'lift') base.oledM.map = oled('lift'); else base.oledM.map = oled('home'); };
  api.setPlaying = (on) => { api.playing = on; };
  const cur = { yaw: 0.35, px: 0, py: 0 };
  const avg = new THREE.Color();
  let spin = 0;
  loop(stage, (dt) => {
    if (api.playing) api.clock += dt;
    const t = api.clock - api.t0;
    base.strip.draw(t, { [api.fx]: 1 });
    // floor glow follows the light
    const L = base.strip.last; let r = 0, g = 0, b = 0;
    for (const l of L) { r += l[0]; g += l[1]; b += l[2]; }
    const m = Math.max(r, g, b, 1e-4);
    avg.setRGB(r / m, g / m, b / m);
    if ((glowTick += dt) > 0.05) {   // ~20 updates/s is plenty for a soft glow
      glowTick = 0;
      stage.style.setProperty('--ring-rgb', `${Math.round(avg.r * 255)}, ${Math.round(avg.g * 255)}, ${Math.round(avg.b * 255)}`);
      stage.style.setProperty('--ring-k', Math.min(1, m / 3).toFixed(3));
    }
    const k = 1 - Math.exp(-dt * 4);
    ptr.drag += ptr.vel; ptr.vel *= ptr.down ? 0.5 : 0.94;
    if (api.playing && !reduce) spin += dt * 0.12;
    cur.px += (ptr.x - cur.px) * k; cur.py += (ptr.y - cur.py) * k;
    const yaw = 0.35 + Math.sin(spin) * 0.55 + cur.px * 0.3 + ptr.drag;
    cur.yaw += (yaw - cur.yaw) * k;
    const pitch = 0.2 - cur.py * 0.08;
    const dist = compact ? 3.5 : 3.9;
    const ty = 0.22;
    camera.position.set(dist * Math.cos(pitch) * Math.sin(cur.yaw), ty + dist * Math.sin(pitch), dist * Math.cos(pitch) * Math.cos(cur.yaw));
    camera.lookAt(0, ty, 0);
    follow.position.set(Math.sin(cur.yaw) * 2.4, 1.6, Math.cos(cur.yaw) * 2.4);
    composer.render(dt);
  });
  stage.classList.add('ready', 'ring-ready');
  return api;
}
