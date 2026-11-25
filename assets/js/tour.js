// BottleMate presentation mode: an automatic tour for a demo display.
// Scrolls every page smoothly, clicks through the features, plays the videos muted,
// moves on to the next page and loops forever.
//   Start: the "Presentation mode" button, or open any page with ?tour
//   Stop:  Esc, or the button.  A visitor's touch, click, scroll or key pauses it;
//          it resumes by itself after 30 s without activity.
(() => {
  const PAGES = ['index.html', 'why.html', 'app.html', 'light-ring.html', 'paperwork.html'];
  const NAMES = { 'index.html': 'Home', 'why.html': 'Why water', 'app.html': 'The app', 'light-ring.html': 'Light ring', 'paperwork.html': 'Manuals' };
  const RESUME_MS = 30000;
  // Speed: chosen in the speed selector and remembered; ?tourspeed=N overrides it (testing).
  const SPEEDS = [1, 1.5, 2, 3, 4];
  const urlSpeed = +new URLSearchParams(location.search).get('tourspeed') || 0;
  const saved = (() => { try { return +localStorage.getItem('bm-tour-speed') || 0; } catch { return 0; } })();
  let SPEED = urlSpeed || (SPEEDS.includes(saved) ? saved : 2);
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const page = PAGES.includes(here) ? here : 'index.html';
  const next = PAGES[(PAGES.indexOf(page) + 1) % PAGES.length];
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  let state = 'off';          // off | running | paused
  let runId = 0;              // bumps whenever a run is cancelled
  let resumeTimer = 0, countdown = 0, wake = null;

  class Stop extends Error {}
  const live = (id) => { if (id !== runId || state !== 'running') throw new Stop(); };

  // ---------- UI: launch button + status pill ----------
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'tour-btn glass';
  btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5 19 12 8 18.5z"/></svg><span>Presentation mode</span>';
  btn.title = 'Automatic tour of every page, for a demo display. Esc stops it.';
  const hud = document.createElement('div');
  hud.className = 'tour-hud glass';
  hud.setAttribute('role', 'status');
  hud.setAttribute('aria-live', 'polite');
  hud.innerHTML = '<i class="tour-dot"></i><span class="tour-text"></span><span class="tour-bar"><b></b></span>';
  const dock = document.createElement('div');
  dock.className = 'tour-dock';
  const speeds = document.createElement('div');
  speeds.className = 'tour-speed glass';
  speeds.setAttribute('role', 'radiogroup');
  speeds.setAttribute('aria-label', 'Presentation speed');
  speeds.innerHTML = '<span aria-hidden="true">Speed</span>' + SPEEDS.map((v) => `<button type="button" role="radio" data-speed="${v}">${v}×</button>`).join('');
  dock.append(speeds, btn);
  document.body.append(dock, hud);
  const paintSpeed = () => $$('[data-speed]', speeds).forEach((b) => {
    const on = +b.dataset.speed === SPEED;
    b.setAttribute('aria-checked', String(on)); b.tabIndex = on ? 0 : -1;
  });
  paintSpeed();
  speeds.addEventListener('click', (e) => {
    const b = e.target.closest('[data-speed]');
    if (!b) return;
    e.stopPropagation();
    SPEED = +b.dataset.speed;                 // takes effect immediately, even mid-tour
    try { localStorage.setItem('bm-tour-speed', String(SPEED)); } catch {}
    paintSpeed();
  });
  speeds.addEventListener('keydown', (e) => {
    const k = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 }[e.key];
    if (!k) return;
    e.preventDefault(); e.stopPropagation();
    const i = Math.min(SPEEDS.length - 1, Math.max(0, SPEEDS.indexOf(SPEED) + k));
    $$('[data-speed]', speeds)[i].click(); $$('[data-speed]', speeds)[i].focus();
  });
  const hudText = $('.tour-text', hud), hudBar = $('.tour-bar b', hud);

  const paint = (text) => {
    document.documentElement.classList.toggle('touring', state !== 'off');
    hud.classList.toggle('paused', state === 'paused');
    btn.querySelector('span').textContent = state === 'off' ? 'Presentation mode' : 'Stop presentation';
    btn.querySelector('svg').innerHTML = state === 'off' ? '<path d="M8 5.5 19 12 8 18.5z"/>' : '<rect x="7" y="7" width="10" height="10" rx="1.5"/>';
    btn.setAttribute('aria-pressed', String(state !== 'off'));
    if (text) hudText.textContent = text;
  };
  const progress = (k) => { hudBar.style.width = `${Math.round(Math.min(1, Math.max(0, k)) * 100)}%`; };

  // ---------- helpers (every one checks that the run is still live) ----------
  const sleep = (ms, id) => new Promise((res, rej) => {
    const t0 = performance.now();
    const tick = () => {
      if (id !== runId || state !== 'running') { rej(new Stop()); return; }
      if (performance.now() - t0 >= ms / SPEED) res(); else setTimeout(tick, 100 / SPEED);
    };
    tick();
  });
  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2);
  const scrollToY = (y, ms, id) => new Promise((res, rej) => {
    const from = scrollY, to = Math.max(0, Math.min(y, document.documentElement.scrollHeight - innerHeight));
    const t0 = performance.now();
    const step = (now) => {
      if (id !== runId || state !== 'running') { rej(new Stop()); return; }
      const k = Math.min(1, (now - t0) / (ms / SPEED));
      window.scrollTo(0, from + (to - from) * ease(k));
      if (k < 1) requestAnimationFrame(step); else res();
    };
    requestAnimationFrame(step);
  });
  const top = (el, offset = 96) => el.getBoundingClientRect().top + scrollY - offset;
  // Scroll so the element's section heading sits under the nav, then hold.
  const go = async (sel, id, { hold = 3000, ms = 1600, offset = 96 } = {}) => {
    const el = typeof sel === 'string' ? $(sel) : sel;
    if (!el) return;
    await scrollToY(top(el, offset), ms, id);
    await sleep(hold, id);
  };
  // Glide slowly through a tall block (e.g. the pinned hero or a grid of cards).
  const sweep = async (sel, id, ms) => {
    const el = $(sel);
    if (!el) return;
    const start = top(el, 0), end = start + Math.max(0, el.offsetHeight - innerHeight * 0.6);
    await scrollToY(start, 1200, id);
    await scrollToY(end, ms, id);
  };
  const clickEach = async (sel, id, each = 2400) => {
    for (const b of $$(sel)) { live(id); b.click(); await sleep(each, id); }
  };
  const glideRail = async (rail, id, ms = 5000) => {
    if (!rail) return;
    ms /= SPEED;
    const max = rail.scrollWidth - rail.clientWidth, t0 = performance.now();
    while (performance.now() - t0 < ms) { live(id); rail.scrollLeft = max * ease((performance.now() - t0) / ms); await new Promise((r) => requestAnimationFrame(r)); }
    await sleep(600, id);
    rail.scrollTo({ left: 0, behavior: 'smooth' });
  };
  const playClip = async (card, id, ms = 9000) => {
    const v = card && $('video', card);
    if (!v) return;
    v.muted = true; card.classList.add('playing');
    try { await v.play(); } catch {}
    try { await sleep(ms, id); } finally { v.pause(); v.currentTime = 0; card.classList.remove('playing'); }
  };
  const openFaq = async (id, count = 3) => {
    const items = $$('.faq details').slice(0, count);
    for (const d of items) { live(id); d.open = true; await sleep(2600, id); d.open = false; }
  };

  // ---------- the script for each page ----------
  const SCRIPTS = {
    'index.html': async (id, step) => {
      step(0, 'Every sip, counted.');
      await scrollToY(0, 800, id); await sleep(2500, id);
      step(1, 'The 3D base takes a sip');
      await sweep('.hero.pin', id, 11000); await sleep(1200, id);
      step(2, 'The problem'); await go('#problem-title', id, { hold: 3500 });
      step(3, 'How it works'); await go('#how-title', id, { hold: 2000 }); await go('#how .steps', id, { hold: 3500, offset: 140 });
      step(4, 'Features'); await go('#feat-title', id, { hold: 4000 });
      step(5, 'Inside the base'); await go('#base', id, { hold: 1000, offset: 60 }); await sweep('#base', id, 6000); await sleep(1500, id);
      step(6, 'The OLED screen'); await go('#screen-title', id, { hold: 800 }); await glideRail($('.rail'), id, 6000);
      step(7, 'The light ring'); await go('#ring-title', id, { hold: 8000 });
      step(8, 'The Android app'); await go('#app-title', id, { hold: 800, offset: 160 }); await clickEach('[data-screen-tabs="#app-screen"] [role="tab"]', id, 2400);
      $('[data-screen-tabs="#app-screen"] [role="tab"]')?.click();
      step(9, 'The science'); await go('#science-title', id, { hold: 4500 });
      step(10, 'Product demo'); await go('#demo-title', id, { hold: 600 }); await playClip($('#demo .video-card'), id, 10000);
      step(11, 'In the box'); await go('#box-title', id, { hold: 2000 }); await go('.inbox-items', id, { hold: 3000, offset: 200 });
      step(12, 'Get the app'); await go('#download', id, { hold: 4000 });
      step(13, 'Support'); await go('#support', id, { hold: 800 }); await openFaq(id, 3);
      step(14, 'Built by Group 05'); await go('#story-title', id, { hold: 3500, offset: 200 });
    },
    'why.html': async (id, step) => {
      step(0, 'Why water matters');
      await scrollToY(0, 800, id); await sleep(5000, id);
      step(1, 'Hydration in numbers'); await go('#numbers-title', id, { hold: 4500, offset: 140 });
      step(2, 'Thirst is a late signal'); await go('#behind-title', id, { hold: 4500 });
      step(3, 'You can\'t improve what you don\'t measure'); await go('#device-title', id, { hold: 6000, offset: 140 });
      step(4, 'The benefits'); await go('#benefits-title', id, { hold: 2000 }); await sweep('#benefits', id, 7000);
      step(5, 'The evidence'); await go('#evidence-title', id, { hold: 2500 }); await sweep('#evidence', id, 10000);
      step(6, 'Every sip adds up'); await go('#adds-title', id, { hold: 5000, offset: 260 });
      step(7, 'Sources'); await go('#refs-title', id, { hold: 3000, offset: 140 });
    },
    'app.html': async (id, step) => {
      step(0, 'BottleMate for Android');
      await scrollToY(0, 800, id); await sleep(4000, id);
      step(1, 'The app tour'); await go('#tour-title', id, { hold: 500 }); await playClip($('#tour .video-card'), id, 16000);
      step(2, 'Ready in five steps'); await go('#setup-title', id, { hold: 2000 }); await go('#setup .steps', id, { hold: 3500, offset: 140 });
      step(3, 'Five tabs along the bottom'); await go('#gui', id, { hold: 800, offset: 120 }); await clickEach('[data-screen-tabs="#gui-screen"] [role="tab"]', id, 3200);
      $('[data-screen-tabs="#gui-screen"] [role="tab"]')?.click();
      step(4, 'Light or dark'); await go('#theme-title', id, { hold: 4000, offset: 200 });
      step(5, 'Every screen');
      await go('#screens-title', id, { hold: 800 });
      for (const t of ['gt-light', 'gt-dark', 'gt-real']) {
        live(id); $(`#${t}`)?.click(); await sleep(900, id);
        await glideRail($(`#gal-${t.slice(3)}`), id, 4500);
      }
      $('#gt-light')?.click();
      step(6, 'Quietly clever'); await go('#smart-title', id, { hold: 4500 });
      step(7, 'Download'); await go('#download', id, { hold: 4500 });
    },
    'light-ring.html': async (id, step) => {
      step(0, 'A light ring that talks');
      await scrollToY(0, 800, id); await sleep(4500, id);
      step(1, 'Every effect');
      await go('#effects', id, { hold: 800, offset: 80 });
      const preview = $('.ring-preview');
      if (preview && preview.getBoundingClientRect().height < innerHeight - 120) await go(preview, id, { hold: 400, offset: 110 });
      for (const fx of ['boot', 'alert', 'lift', 'sip', 'refill', 'goal', 'pair', 'connect', 'cal', 'find', 'error', 'demo']) {
        live(id); $(`.fx[data-fx="${fx}"]`)?.click(); await sleep(fx === 'alert' || fx === 'goal' ? 4600 : 3600, id);
      }
      step(2, 'Calm by design'); await go('#rules-title', id, { hold: 3500 }); await sweep('#rules-title', id, 4000);
    },
    'paperwork.html': async (id, step) => {
      step(0, 'Everything in the box');
      await scrollToY(0, 800, id); await sleep(4500, id);
      step(1, 'In the box'); await go('#box-title', id, { hold: 4500 });
      step(2, 'The user manual'); await go('#manual-title', id, { hold: 2000 }); await sweep('#manual', id, 6000);
      step(3, 'Pocket guide'); await go('#guide-title', id, { hold: 4000, offset: 200 });
      step(4, 'Warranty card'); await go('#warranty-title', id, { hold: 4500 });
    },
  };
  const STEPS = { 'index.html': 15, 'why.html': 8, 'app.html': 8, 'light-ring.html': 3, 'paperwork.html': 5 };

  // ---------- run / pause / stop ----------
  const keepAwake = async () => {
    try { if ('wakeLock' in navigator && !wake) { wake = await navigator.wakeLock.request('screen'); wake.addEventListener('release', () => { wake = null; }); } } catch {}
  };
  const run = async () => {
    const id = ++runId;
    state = 'running';
    document.documentElement.style.scrollBehavior = 'auto';
    keepAwake();
    paint(`${NAMES[page]} · starting`);
    const step = (i, label) => { paint(`${NAMES[page]} · ${label}`); progress(i / STEPS[page]); };
    try {
      await sleep(1200, id);
      await SCRIPTS[page](id, step);
      progress(1);
      paint(`Next: ${NAMES[next]}`);
      await sleep(1500, id);
      location.href = `${next}?tour${urlSpeed ? `&tourspeed=${urlSpeed}` : ''}`;
    } catch (e) {
      if (!(e instanceof Stop)) console.warn('tour step failed', e);
    }
  };
  const stop = () => {
    runId++; state = 'off'; clearTimeout(resumeTimer); clearInterval(countdown);
    document.documentElement.style.scrollBehavior = '';
    wake?.release?.(); wake = null;
    paint();
    if (new URLSearchParams(location.search).has('tour')) history.replaceState(null, '', location.pathname + location.hash);
  };
  const pause = () => {
    if (state === 'off') return;
    runId++; state = 'paused';
    clearTimeout(resumeTimer); clearInterval(countdown);
    let left = RESUME_MS / 1000;
    paint(`Paused · resumes in ${left} s · Esc to stop`);
    countdown = setInterval(() => { left -= 1; if (left > 0) paint(`Paused · resumes in ${left} s · Esc to stop`); }, 1000);
    resumeTimer = setTimeout(() => { clearInterval(countdown); run(); }, RESUME_MS);
  };

  btn.addEventListener('click', (e) => { e.stopPropagation(); if (state === 'off') run(); else stop(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state !== 'off') { stop(); return; }
    if (state !== 'off' && !e.repeat && !dock.contains(e.target)) pause();
  });
  // A visitor taking over pauses the tour (programmatic scrolls and clicks don't trigger these).
  const takeover = (e) => { if (state !== 'off' && !dock.contains(e.target)) pause(); };
  ['pointerdown', 'wheel', 'touchstart'].forEach((t) => addEventListener(t, takeover, { passive: true, capture: true }));
  document.addEventListener('visibilitychange', () => { if (!document.hidden && state === 'running') keepAwake(); });

  if (new URLSearchParams(location.search).has('tour')) addEventListener('load', () => setTimeout(run, 600));
})();
