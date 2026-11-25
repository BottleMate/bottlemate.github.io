// Light ring descriptions and simulator controls.
(() => {
  const FX = [
    { id: 'boot', c: 'var(--led-aqua)', k: 'Start-up', n: 'Aqua sweep', m: 'BottleMate is waking up. Aqua fills both sides from the front to the back like water, glows for a moment, then fades.', w: 'Power on', p: 'Fill · glow · fade', s: 'None' },
    { id: 'alert', c: 'var(--led-pink)', k: 'Reminder', n: 'Pink tide', m: "It's time to drink. The ring breathes pink like a slow tide while the screen shows Drink now. Press the knob for \"On it\" (quiet for 5 min), or just drink.", w: 'Reminder due', p: 'Slow breathing swell', s: 'Two soft chimes' },
    { id: 'lift', c: 'var(--led-aqua)', k: 'Bottle lifted', n: 'Faint aqua', m: 'The bottle is off the base, so the countdown pauses and the scale waits to measure.', w: 'Bottle lifted', p: 'Soft steady glow', s: 'None' },
    { id: 'sip', c: 'var(--led-aqua)', k: 'Sip logged', n: 'Aqua ripple + fill', m: 'A sip was counted. A ripple spreads up from the front, then the ring fills to show your new progress for today.', w: 'Bottle back, ≥ 25 ml lighter', p: 'Ripple, then level', s: 'Rising two-tone beep' },
    { id: 'ret', c: 'var(--led-aqua)', k: 'Bottle back', n: 'Aqua breath', m: 'The bottle is back on the base: one soft aqua breath while it settles.', w: 'Bottle put back', p: 'Single breath', s: 'None' },
    { id: 'refill', c: 'var(--led-deep)', k: 'Refill', n: 'Blue → aqua fill', m: 'You refilled the bottle. Both sides fill step by step from deep blue to aqua with a gentle shimmer.', w: 'Back ≥ 30 g heavier', p: 'Rising fill, shimmer', s: 'Single low tone' },
    { id: 'goal', c: 'var(--led-gold)', k: 'Goal reached', n: 'Gold twinkle', m: "You've had enough for today. A calm warm-gold twinkle with one soft white highlight rising.", w: 'Daily goal met', p: 'Twinkle + highlight', s: 'Celebration on screen' },
    { id: 'ambient', c: 'var(--led-aqua)', k: 'Progress glow', n: 'Water level', m: "Optional: today's progress as a dim level rising up both sides, with the next step breathing gently.", w: 'Setting: progress glow', p: 'Dim level', s: 'None' },
    { id: 'pair', c: 'var(--led-green)', k: 'Pairing mode', n: 'Green comet', m: 'Ready to pair with your phone for 60 seconds. Green comets rise up both sides over a faint green glow.', w: 'Hold the knob 3 s', p: 'Rising comets', s: 'Tiny tick' },
    { id: 'connect', c: 'var(--led-green)', k: 'Phone connected', n: 'Green flash', m: 'Your phone has connected. Green heads rise up both sides, then the whole ring flashes green once.', w: 'App connects', p: 'Rise + flash', s: 'None' },
    { id: 'cal', c: 'var(--led-orange)', k: 'Calibrating', n: 'Orange breath / comet', m: 'Calibration in progress. A slow orange breath while it waits for you, a rising comet while it measures.', w: 'Calibration wizard', p: 'Breath, then comet', s: 'Two rising tones when saved' },
    { id: 'find', c: 'var(--led-white)', k: 'Find my base', n: 'Warm-white pulse', m: 'Someone pressed Find my base in the app. The ring pulses warm white so you can spot it.', w: 'From the app', p: 'Fast pulse', s: 'Beeps' },
    { id: 'error', c: 'var(--led-red)', k: 'Problem', n: 'Red breath', m: 'The scale is not answering. Check nothing is touching the platform, then restart the base. If it stays, contact support.', w: 'Scale fault', p: 'Slow red breath', s: 'None' },
    { id: 'demo', c: 'var(--led-purple)', k: 'Demo mode', n: 'Purple comet, gold head', m: 'Demo mode was switched on: short timings for presenting the base. A gold head leads a purple tail up both sides.', w: 'Demo mode on', p: 'Comet', s: 'None' },
  ];

  const byId = (id) => document.getElementById(id);
  const list = byId('fx-list');
  const picker = byId('fx-picker');
  const canvas = byId('ring-big');
  const play = byId('fx-play');
  const replay = byId('fx-replay');
  let view = null;   // 3D base when WebGL is available, else the 2D ring
  let selected;

  list.innerHTML = FX.map((effect) => `
    <button class="fx" type="button" aria-pressed="false" data-fx="${effect.id}" style="--c:${effect.c}">
      <span class="dot" aria-hidden="true"></span><span><b>${effect.k}</b><span>${effect.n}</span></span><span class="when">${effect.w}</span>
    </button>`).join('');
  for (const effect of FX) picker.append(new Option(effect.k, effect.id));
  const buttons = [...list.querySelectorAll('button')];

  const select = (id) => {
    selected = FX.find((effect) => effect.id === id);
    picker.value = id;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.fx === id)));
    byId('fx-kicker').textContent = selected.k;
    byId('fx-name').textContent = selected.n;
    byId('fx-meaning').textContent = selected.m;
    byId('fx-when').textContent = selected.w;
    byId('fx-pattern').textContent = selected.p;
    byId('fx-sound').textContent = selected.s;
    canvas.setAttribute('aria-label', `Light ring animation: ${selected.k}, ${selected.n}`);
    view?.set(id);
  };
  const showPreview = () => {
    const stage = canvas.parentElement;
    const bounds = stage.getBoundingClientRect();
    const headerBottom = document.querySelector('.site-header').getBoundingClientRect().bottom;
    if (bounds.top < headerBottom || bounds.bottom > innerHeight) {
      stage.scrollIntoView({ block: 'start', behavior: 'instant' });
    }
  };
  buttons.forEach((button) => button.addEventListener('click', () => {
    select(button.dataset.fx);
    showPreview();
  }));
  picker.addEventListener('change', () => select(picker.value));
  list.hidden = false;
  picker.closest('label').hidden = false;
  select('boot');

  const controls = () => {
    if (!view?.ctx) return;
    const setPlaying = (playing) => {
      view.setPlaying(playing);
      play.textContent = playing ? 'Pause animation' : 'Play animation';
    };
    setPlaying(view.playing);
    play.hidden = false;
    replay.hidden = false;
    play.addEventListener('click', () => setPlaying(!view.playing));
    replay.addEventListener('click', () => {
      setPlaying(true);
      view.set(selected.id);
      showPreview();
    });
  };

  const use = (v) => { view = v; view.set(selected?.id || 'boot'); controls(); };
  if (document.documentElement.classList.contains('has3d')) {
    import('./base3d.js').then((m) => use(m.initRing(canvas))).catch((err) => {
      console.warn('3D ring unavailable', err);
      if (window.BottleMateRing) use(new window.BottleMateRing.RingView(canvas));
    });
  } else if (window.BottleMateRing) use(new window.BottleMateRing.RingView(canvas));
})();
