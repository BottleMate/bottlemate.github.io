// BottleMate site: shared interactions for every page.
(() => {
  const SUPPORT_EMAIL = 'bottlemate.info@gmail.com';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- nav ---------- */
  const toggle = $('.nav-toggle');
  const links = $('#nav-links');
  const setMenu = (open) => {
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    links.classList.toggle('open', open);
  };
  toggle?.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  links?.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && links?.classList.contains('open')) { setMenu(false); toggle.focus(); } });

  /* ---------- scroll progress ---------- */
  const bar = $('.progress');
  if (bar && !CSS.supports('animation-timeline: scroll()')) {
    let distance = 0;
    let raf = 0;
    const paint = () => {
      raf = 0;
      const progress = distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0;
      bar.style.setProperty('--p', progress);
    };
    const measure = () => {
      distance = document.documentElement.scrollHeight - innerHeight;
      paint();
    };
    addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(paint); }, { passive: true });
    addEventListener('resize', measure);
    addEventListener('load', measure);
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(document.body);
    measure();
  }

  /* ---------- reveal on scroll ---------- */
  const rev = $$('.reveal, .reveal-img');
  if ('IntersectionObserver' in window && !calm) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px 80px 0px' });
    rev.forEach((el) => io.observe(el));
  }

  /* ---------- 3D bundle (classic script: also works when opened from disk) ---------- */
  window.loadBM3D = () => (window.__bm3d ||= new Promise((resolve, reject) => {
    if (window.BM3D) { resolve(window.BM3D); return; }
    const sc = document.createElement('script');
    sc.src = 'assets/js/bm3d.js?v=20261125c';
    sc.onload = () => (window.BM3D ? resolve(window.BM3D) : reject(new Error('3D bundle missing')));
    sc.onerror = reject;
    document.head.append(sc);
  }));

  /* ---------- light-ring teaser: the 3D base cycling through firmware patterns ---------- */
  const mini = $('#ring-mini');
  if (mini) {
    const seq = [
      ['boot', 2600, 'Start-up · aqua sweep', 'var(--led-aqua)'], ['alert', 4800, 'Time to drink · pink tide', 'var(--led-pink)'],
      ['sip', 3400, 'Sip logged · aqua ripple', 'var(--led-aqua)'], ['goal', 4200, 'Goal reached · gold twinkle', 'var(--led-gold)'],
      ['pair', 4200, 'Pairing · green comet', 'var(--led-green)'], ['refill', 3200, 'Refill · blue to aqua', 'var(--led-deep)'],
    ];
    const label = $('#ring-mini-label');
    const cycle = (view) => {
      let i = 0;
      const next = () => {
        const [fx, ms, txt, c] = seq[i++ % seq.length];
        view.set(fx); mini.dataset.fx = fx;
        if (label) { label.querySelector('span').textContent = txt; label.style.setProperty('--c', c); }
        setTimeout(next, ms);
      };
      next();
    };
    const near = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      near.disconnect();
      if (document.documentElement.classList.contains('has3d')) {
        window.loadBM3D().then((m) => cycle(m.initRing(mini, { compact: true })))
          .catch(() => window.BottleMateRing && cycle(new window.BottleMateRing.RingView(mini, { compact: true })));
      } else if (window.BottleMateRing) cycle(new window.BottleMateRing.RingView(mini, { compact: true }));
    }, { rootMargin: '150px' });
    near.observe(mini.parentElement);
  }

  if (document.documentElement.classList.contains('has3d')) {
    let model;
    const startModel = (id) => {
      const stage = document.getElementById(id);
      const hero = id === 'hero-stage';
      if (!stage) return;
      const near = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        near.disconnect();
        const load = () => {
          model ??= window.loadBM3D();
          model.then((views) => hero ? views.initHero() : views.initExploded()).catch((err) => {
            if (hero) document.documentElement.classList.remove('has3d');
            console.warn('3D preview unavailable', err);
          });
        };
        if ('requestIdleCallback' in window) requestIdleCallback(load, { timeout: 700 });
        else setTimeout(load, 0);
      }, { rootMargin: '180px' });
      near.observe(stage);
    };
    startModel('hero-stage');
    startModel('base-stage');
  }

  /* ---------- counters ---------- */
  const counters = $$('[data-count]');
  if (counters.length) {
    const fmt = (v, el) => {
      const dec = +(el.dataset.dec || 0);
      return Number(v).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
    };
    const run = (el) => {
      const to = parseFloat(el.dataset.count);
      if (calm) { el.textContent = fmt(to, el); return; }
      const t0 = performance.now(), dur = 1400;
      const step = (now) => {
        const k = Math.min(1, (now - t0) / dur), e = 1 - (1 - k) ** 3;
        el.textContent = fmt(to * e, el);
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } }), { threshold: 0.5 });
    counters.forEach((el) => io.observe(el));
  }

  /* ---------- liquid glass: light follows the pointer; 3D tilt ---------- */
  if (fine && !calm) {
    $$('.glass[data-tilt]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
        el.classList.add('lit');
      });
      el.addEventListener('pointerleave', () => el.classList.remove('lit'));
    });
    $$('[data-tilt]').forEach((el) => {
      el.classList.add('tilt');
      const max = +(el.dataset.tilt || 6);
      let raf = 0;
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.classList.add('tilting');
          el.style.transform = `perspective(1000px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)`;
        });
      });
      el.addEventListener('pointerleave', () => { cancelAnimationFrame(raf); el.classList.remove('tilting'); el.style.transform = ''; });
    });
  }

  /* ---------- segmented tabs that swap a phone screen ---------- */
  $$('[data-screen-tabs]').forEach((group) => {
    const target = $(group.dataset.screenTabs);
    const tabs = $$('[role="tab"]', group);
    const text = group.dataset.text ? $(group.dataset.text) : null;
    const select = (tab, focus) => {
      tabs.forEach((t) => { const on = t === tab; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; });
      if (focus) tab.focus();
      if (text && tab.dataset.text) text.textContent = tab.dataset.text;
      const cur = $('img', target);
      if (!cur || cur.getAttribute('src') === tab.dataset.src) return;
      cur.src = tab.dataset.src;
      cur.alt = tab.dataset.alt || '';
    };
    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t));
      t.addEventListener('keydown', (e) => {
        const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (k) { e.preventDefault(); select(tabs[(i + k + tabs.length) % tabs.length], true); }
        if (e.key === 'Home') { e.preventDefault(); select(tabs[0], true); }
        if (e.key === 'End') { e.preventDefault(); select(tabs[tabs.length - 1], true); }
      });
    });
  });

  /* ---------- videos ---------- */
  $$('.video-card').forEach((card) => {
    const v = $('video', card), btn = $('.play', card);
    btn?.addEventListener('click', () => {
      card.classList.add('playing');
      v.controls = true;
      if (card.dataset.sound !== undefined) v.muted = false;
      v.play();
    });
    v?.addEventListener('ended', () => { card.classList.remove('playing'); v.controls = false; });
  });

  /* ---------- copy email ---------- */
  $$('[data-copy]').forEach((b) => b.addEventListener('click', async () => {
    const out = b.parentElement.querySelector('.copied');
    try { await navigator.clipboard.writeText(b.dataset.copy); if (out) out.textContent = 'Copied'; }
    catch { if (out) out.textContent = b.dataset.copy; }
    setTimeout(() => { if (out) out.textContent = ''; }, 2200);
  }));

  /* ---------- contact form: builds an email (no server) ---------- */
  const form = $('#contact');
  if (form) {
    const err = $('#form-error');
    let via = 'mail';
    $$('button[type="submit"]', form).forEach((b) => b.addEventListener('click', () => { via = b.dataset.via; }));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(form));
      const name = $('#f-name'), email = $('#f-email'), msg = $('#f-msg');
      [name, email, msg].forEach((el) => el.removeAttribute('aria-invalid'));
      const bad = [];
      if (!f.name.trim()) bad.push(name);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) bad.push(email);
      if (!f.message.trim()) bad.push(msg);
      if (bad.length) {
        bad.forEach((el) => el.setAttribute('aria-invalid', 'true'));
        err.textContent = bad.includes(email) && f.email.trim() ? 'Please check your email address.' : 'Please fill in your name, email and message.';
        bad[0].focus();
        return;
      }
      err.textContent = '';
      const serial = (f.serial || '').trim();
      const subject = `[BottleMate] ${f.topic}${serial ? ` · S/N ${serial}` : ''}`;
      const body = [f.message.trim(), '', '---', `Name: ${f.name.trim()}`, `Reply to: ${f.email.trim()}`, `Topic: ${f.topic}`, serial ? `Serial number: ${serial}` : null].filter((l) => l !== null).join('\n');
      const enc = encodeURIComponent;
      if (via === 'gmail') window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${enc(SUPPORT_EMAIL)}&su=${enc(subject)}&body=${enc(body)}`, '_blank', 'noopener');
      else location.href = `mailto:${SUPPORT_EMAIL}?subject=${enc(subject)}&body=${enc(body)}`;
    });
  }

  /* ---------- background videos: play muted while on screen ---------- */
  const loops = $$('video[data-autoplay]');
  if (loops.length) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting && !calm) { v.muted = true; v.play().catch(() => {}); } else v.pause();
    }), { threshold: 0.15 });
    loops.forEach((v) => { v.muted = true; v.playsInline = true; io.observe(v); });
  }

  /* ---------- Apple-style liquid glass: a soft refraction filter (Chromium) ---------- */
  if (/Chrome\//.test(navigator.userAgent) && !/Firefox/.test(navigator.userAgent)) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText = 'position:absolute;width:0;height:0';
    svg.innerHTML = '<filter id="lg-refract" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.006 0.012" numOctaves="2" seed="7" result="n"/><feGaussianBlur in="n" stdDeviation="2.5" result="b"/><feDisplacementMap in="SourceGraphic" in2="b" scale="38" xChannelSelector="R" yChannelSelector="G"/></filter>';
    document.body.prepend(svg);
    document.documentElement.classList.add('liquid');
  }

  /* ---------- pointer network: particles that link up around the cursor ---------- */
  if (fine && !calm) {
    const c = document.createElement('canvas');
    c.className = 'net';
    c.setAttribute('aria-hidden', 'true');
    document.body.prepend(c);
    const ctx = c.getContext('2d');
    let W = 0, H = 0, dpr = 1, pts = [];
    const mouse = { x: -9999, y: -9999 };
    const size = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth; H = innerHeight;
      c.width = W * dpr; c.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(90, (W * H) / 16000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25 }));
    };
    size();
    addEventListener('resize', size);
    addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    document.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
    const LINK = 130, REACH = 190;
    let raf = 0;
    const draw = () => {
      raf = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
        if (d < REACH && d > 1) { p.vx += (dx / d) * 0.012; p.vy += (dy / d) * 0.012; }
        p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx + (Math.random() - 0.5) * 0.06; p.y += p.vy + (Math.random() - 0.5) * 0.06;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        const md = Math.hypot(mouse.x - a.x, mouse.y - a.y);
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            const near = Math.max(0, 1 - Math.min(md, Math.hypot(mouse.x - b.x, mouse.y - b.y)) / REACH);
            ctx.strokeStyle = `rgba(37,93,194,${((1 - d / LINK) * (0.1 + 0.45 * near)).toFixed(3)})`;
            ctx.lineWidth = 0.6 + near * 0.6;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        if (md < REACH) {
          ctx.strokeStyle = `rgba(0,150,255,${(0.55 * (1 - md / REACH)).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
        const glow = md < REACH ? 1 - md / REACH : 0;
        ctx.fillStyle = `rgba(37,93,194,${(0.28 + 0.6 * glow).toFixed(3)})`;
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.6 + glow * 1.6, 0, Math.PI * 2); ctx.fill();
      }
    };
    const run = () => { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else if (!raf) draw(); };
    document.addEventListener('visibilitychange', run);
    run();
  }

  /* ---------- magnetic buttons ---------- */
  if (fine && !calm) {
    $$('.btn-lg, .btn-primary, .play').forEach((b) => {
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        b.style.translate = `${((e.clientX - r.left) / r.width - 0.5) * 10}px ${((e.clientY - r.top) / r.height - 0.5) * 8}px`;
      });
      b.addEventListener('pointerleave', () => { b.style.translate = ''; });
    });
  }

  /* ---------- headings reveal word by word ---------- */
  if (!calm && 'IntersectionObserver' in window) {
    const heads = $$('h2:not([data-nosplit]), .hero h1');
    heads.forEach((h) => {
      let n = 0;
      const wrap = (node) => {
        [...node.childNodes].forEach((ch) => {
          if (ch.nodeType === 3) {
            const frag = document.createDocumentFragment();
            ch.textContent.split(/(\s+)/).forEach((w) => {
              if (!w) return;
              if (/^\s+$/.test(w)) { frag.append(w); return; }
              const s = document.createElement('span'); s.className = 'w'; s.style.setProperty('--i', n++);
              const inner = document.createElement('span'); inner.textContent = w; s.append(inner); frag.append(s);
            });
            ch.replaceWith(frag);
          } else if (ch.nodeType === 1 && ch.tagName !== 'BR') wrap(ch);
        });
      };
      wrap(h);
      h.classList.add('words');
    });
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('shown'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -10% 0px' });
    heads.forEach((h) => io.observe(h));
  }

  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
