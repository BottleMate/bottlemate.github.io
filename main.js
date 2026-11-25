(() => {
  const SUPPORT_EMAIL = 'bottlemate.info@gmail.com';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* Nav: solid background once scrolled, mobile menu */
  const nav = $('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const menuBtn = $('.menu-btn');
  const links = $('#nav-links');
  const setMenu = (open) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    links.classList.toggle('open', open);
    nav.classList.toggle('menu-open', open);
  };
  menuBtn.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  links.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
  });

  /* Reveal on scroll */
  const items = $$('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('in'));
  }

  /* App screen tabs (WAI-ARIA tabs pattern) */
  const tabs = $$('.tabs [role="tab"]');
  const panel = $('#screen');
  const shot = $('#screen-img');
  // warm the cache so switching is instant
  tabs.forEach((t) => { const i = new Image(); i.src = `assets/img/${t.dataset.img}.webp`; });
  const select = (tab, focus) => {
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    if (focus) tab.focus();
    const src = `assets/img/${tab.dataset.img}.webp`;
    if (shot.getAttribute('src') === src) return;
    shot.classList.add('swap');
    setTimeout(() => {
      shot.src = src;
      shot.alt = tab.dataset.alt;
      shot.classList.remove('swap');
    }, 180);
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => select(t));
    t.addEventListener('keydown', (e) => {
      let n = null;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (i + 1) % tabs.length;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') n = 0;
      if (e.key === 'End') n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); select(tabs[n], true); }
    });
  });

  /* Copy email */
  const copyBtn = $('#copy-email');
  const copied = $('.copied');
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      copied.textContent = 'Copied to clipboard';
    } catch {
      copied.textContent = SUPPORT_EMAIL;
    }
    setTimeout(() => { copied.textContent = ''; }, 2500);
  });

  /* Contact form: builds an email to support (no server needed) */
  const form = $('#contact');
  const err = $('#form-error');
  let via = 'mail';
  $$('button[type="submit"]', form).forEach((b) => b.addEventListener('click', () => { via = b.dataset.via; }));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(form));
    const missing = [];
    const name = $('#f-name'), email = $('#f-email'), msg = $('#f-msg');
    [name, email, msg].forEach((el) => el.removeAttribute('aria-invalid'));
    if (!f.name.trim()) missing.push(name);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) missing.push(email);
    if (!f.message.trim()) missing.push(msg);
    if (missing.length) {
      missing.forEach((el) => el.setAttribute('aria-invalid', 'true'));
      err.textContent = missing.includes(email) && f.email.trim()
        ? 'Please check your email address.'
        : 'Please fill in your name, email and message.';
      missing[0].focus();
      return;
    }
    err.textContent = '';
    const subject = `[BottleMate] ${f.topic}${f.serial.trim() ? ` · S/N ${f.serial.trim()}` : ''}`;
    const body = [
      f.message.trim(),
      '',
      '---',
      `Name: ${f.name.trim()}`,
      `Reply to: ${f.email.trim()}`,
      `Topic: ${f.topic}`,
      f.serial.trim() ? `Serial number: ${f.serial.trim()}` : null,
    ].filter((l) => l !== null).join('\n');
    const enc = encodeURIComponent;
    const url = via === 'gmail'
      ? `https://mail.google.com/mail/?view=cm&fs=1&to=${enc(SUPPORT_EMAIL)}&su=${enc(subject)}&body=${enc(body)}`
      : `mailto:${SUPPORT_EMAIL}?subject=${enc(subject)}&body=${enc(body)}`;
    if (via === 'gmail') window.open(url, '_blank', 'noopener');
    else window.location.href = url;
  });

  $('#year').textContent = new Date().getFullYear();

  /* Pointer effects: 3D tilt on cards, a soft light following the cursor on dark sections */
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (finePointer && !calm) {
    $$('.promise, .doc, .app .phone, .science, .pair li').forEach((el) => {
      el.setAttribute('data-tilt', '');
      const max = el.classList.contains('phone') ? 10 : el.classList.contains('science') ? 3 : 7;
      let raf = 0;
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.classList.add('tilting');
          el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg) translateZ(0)`;
          el.style.setProperty('--gx', `${x * 100}%`);
          el.style.setProperty('--gy', `${y * 100}%`);
        });
      });
      el.addEventListener('pointerleave', () => {
        cancelAnimationFrame(raf);
        el.classList.remove('tilting');
        el.style.transform = '';
      });
    });
    $$('.dark').forEach((sec) => {
      sec.addEventListener('pointermove', (e) => {
        const r = sec.getBoundingClientRect();
        sec.style.setProperty('--mx', `${e.clientX - r.left}px`);
        sec.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    });
  }
})();
