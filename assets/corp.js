(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  /* MacBook: cross-fade between real screens */
  $$('.cmac').forEach(function (m) {
    var imgs = $$('img', m), i = 0, ms = +m.getAttribute('data-swap') || 3600, timer = null;
    if (imgs.length < 2 || reduce) return;
    function go() { timer = setInterval(function () { imgs[i].classList.remove('on'); i = (i + 1) % imgs.length; imgs[i].classList.add('on'); }, ms); }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { clearInterval(timer); if (es[0].isIntersecting) go(); }).observe(m); else go();
  });
  /* Stepped demos (flow + departments): manual selection, keyboard, pause, autoplay that stops after interaction */
  function stepper(root, opts) {
    var btns = $$(opts.btn, root), views = $$(opts.view, root), idx = 0, timer = null, stopped = reduce, vis = false;
    var pause = opts.pause;
    function show(i, focus) {
      idx = i;
      btns.forEach(function (b, j) { var on = j === i; b.classList.toggle('on', on); if (opts.tabs) { b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; } else b.setAttribute('aria-pressed', on);
        var bar = b.querySelector('.dt-bar'); if (bar) { bar.classList.remove('run'); void bar.offsetWidth; if (on && !stopped) bar.classList.add('run'); } });
      views.forEach(function (v, j) { var on = j === i; v.classList.toggle('on', on); if (opts.tabs) v.hidden = !on; });
      if (focus) btns[i].focus();
      setTimeout(function () { window.dispatchEvent(new Event('connectas:show')); }, 30);
      if (opts.onShow) opts.onShow(i);
    }
    function setPaused(p) { stopped = p; if (pause) { pause.setAttribute('aria-pressed', p); pause.querySelector('span').textContent = p ? 'Play' : 'Pause'; pause.classList.toggle('is-paused', p); } if (p) clearTimeout(timer); else next(); show(idx); }
    function next() { clearTimeout(timer); if (stopped || !vis) return; timer = setTimeout(function () { show((idx + 1) % btns.length); next(); }, opts.ms || 5000); }
    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { setPaused(true); show(i); });
      b.addEventListener('keydown', function (e) {
        var k = e.key, n = null, horiz = opts.tabs;
        if (k === 'ArrowDown' || k === 'ArrowRight') n = (i + 1) % btns.length;
        if (k === 'ArrowUp' || k === 'ArrowLeft') n = (i - 1 + btns.length) % btns.length;
        if (k === 'Home') n = 0; if (k === 'End') n = btns.length - 1;
        if (n !== null && opts.tabs) { e.preventDefault(); setPaused(true); show(n, true); }
      });
    });
    if (pause) { if (reduce) { pause.hidden = true; } pause.addEventListener('click', function () { setPaused(!stopped); }); }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) next(); else clearTimeout(timer); }, { threshold: .3 }).observe(root);
    show(0);
  }
  var flowEl = document.querySelector('[data-flow]');
  if (flowEl) stepper(flowEl, { btn: '.fs', view: '.fv', pause: document.querySelector('.fl-pause'), ms: 4200 });
  var tabsEl = document.querySelector('[data-tabs]');
  if (tabsEl) stepper(tabsEl, { btn: '.dt', view: '.dv', tabs: true, pause: document.querySelector('.dp-pause'), ms: 5500 });

  /* Screen viewer (lightbox) */
  var zooms = $$('.dv-zoom');
  if (zooms.length) {
    var dlg = document.createElement('dialog'); dlg.className = 'lbox'; dlg.setAttribute('aria-label', 'Screen preview');
    dlg.innerHTML = '<div class="lbox-in"><button type="button" class="lbox-x" aria-label="Close">&times;</button><img alt=""><p></p></div>';
    document.body.appendChild(dlg);
    var limg = dlg.querySelector('img'), lcap = dlg.querySelector('p'), opener = null;
    zooms.forEach(function (z) { z.addEventListener('click', function () { opener = z; limg.src = z.getAttribute('data-src'); limg.alt = z.getAttribute('data-cap'); lcap.textContent = z.getAttribute('data-cap'); if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', ''); dlg.querySelector('.lbox-x').focus(); }); });
    function close() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
    dlg.querySelector('.lbox-x').addEventListener('click', close);
    dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
    dlg.addEventListener('close', function () { if (opener) opener.focus(); });
  }
  /* Case bands: reveal devices */
  if ('IntersectionObserver' in window) { var co = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); co.unobserve(e.target); } }); }, { threshold: .25 }); $$('.case-band').forEach(function (b) { co.observe(b); }); } else $$('.case-band').forEach(function (b) { b.classList.add('in'); });
  /* Hero photo: gentle parallax */
  var hi = document.querySelector('.chero-img');
  if (hi && !reduce) window.addEventListener('scroll', function () { var y = Math.min(scrollY, 700); hi.style.transform = 'translateY(' + (y * .18) + 'px)'; }, { passive: true });
  /* Reveal everything marked for motion */
  var rv = $$('.rv, .rv-left, .rv-right, .rv-zoom');
  if ('IntersectionObserver' in window && !reduce) {
    var ro = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } }); }, { threshold: .12, rootMargin: '0px 0px -5% 0px' });
    rv.forEach(function (el) { ro.observe(el); });
    setTimeout(function () { rv.forEach(function (el) { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in'); }); }, 2500);
  } else rv.forEach(function (el) { el.classList.add('in'); });
  /* Footer clock (Florida) */
  var fc = document.getElementById('fclock'), fa = document.getElementById('fampm');
  if (fc) { var fmt; try { fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }); } catch (e) {}
    var tick = function () { if (!fmt) return; var o = {}; fmt.formatToParts(new Date()).forEach(function (p) { o[p.type] = p.value; }); fc.textContent = o.hour + ':' + o.minute + ':' + o.second; fa.textContent = (o.dayPeriod || '').toUpperCase() + ' ET'; };
    tick(); setInterval(tick, 1000); }
  /* Icon line-draw on cards */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .3 });
    $$('.cf-ic').forEach(function (el) { io.observe(el); });
    $$('.cplat-stack, .cstep').forEach(function (el) { io.observe(el); });
  } else $$('.cf-ic, .cplat-stack, .cstep').forEach(function (el) { el.classList.add('in'); });
  /* Card tilt toward the mouse */
  if (!reduce && window.matchMedia('(hover: hover)').matches) {
    $$('.cwork, .csol, .cpost').forEach(function (c) {
      c.addEventListener('pointermove', function (e) { var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; c.style.transform = 'translateY(-6px) perspective(900px) rotateX(' + (-y * 4) + 'deg) rotateY(' + (x * 5) + 'deg)'; });
      c.addEventListener('pointerleave', function () { c.style.transform = ''; });
    });
  }
})();

/* Back to top button */
(function () {
  var b = document.querySelector('.totop'); if (!b) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function t() { b.classList.toggle('on', window.scrollY > window.innerHeight * 0.8); }
  window.addEventListener('scroll', t, { passive: true }); t();
  b.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); var h = document.querySelector('main, h1'); if (h && h.focus) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); } });
})();

/* v40: "Today" spreadsheets: each department keeps editing its own file and the totals never match */
(function () {
  var vis = document.querySelector('.tr-side.before .tr-vis'); if (!vis) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cards = [].slice.call(vis.querySelectorAll('.xls')); if (cards.length < 3) return;
  cards.forEach(function (c) { var i = c.querySelector('i'); i.innerHTML = '<span>' + i.textContent + '</span>'; });
  var alert = document.createElement('span'); alert.className = 'xls-alert'; vis.appendChild(alert);
  var q = document.createElement('span'); q.className = 'xls-q'; vis.appendChild(q);
  var STATES = [
    [['Sales_report_FINAL.xlsx', '$412,300', '58'], ['Ops_numbers_v3.xlsx', '$398,750', '61'], ['Finance_update (2).xlsx', '$405,900', '—']],
    [['Sales_report_FINAL_v2.xlsx', '$415,120', '59'], ['Ops_numbers_v4.xlsx', '$401,200', '61'], ['Finance_update (3).xlsx', '$405,900', '57']],
    [['Sales_report_FINAL_v2.xlsx', '$418,640', '60'], ['Ops_numbers_v5.xlsx', '$396,980', '63'], ['Finance_update (4).xlsx', '$409,350', '57']]
  ];
  var QS = ['Which number is right?', 'Did ops update theirs?', 'Who has the latest file?'];
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  function num(s) { return parseFloat(String(s).replace(/[^\d.]/g, '')); }
  function tween(el, to) {
    var a = num(el.textContent), b = num(to);
    if (isNaN(a) || isNaN(b) || reduce) { el.textContent = to; return; }
    var pre = /^\$/.test(to) ? '$' : '', t0 = performance.now();
    (function f(t) { var k = Math.min(1, (t - t0) / 900), v = Math.round(a + (b - a) * (1 - Math.pow(1 - k, 3))); el.textContent = pre + v.toLocaleString('en-US'); if (k < 1) requestAnimationFrame(f); else el.textContent = to; })(t0);
  }
  function set(ci, st, anim) {
    var c = cards[ci], name = c.querySelector('i span'), b = c.querySelectorAll('b');
    if (name.textContent !== st[0]) { if (anim) { name.classList.add('swap'); setTimeout(function () { name.textContent = st[0]; name.classList.remove('swap'); }, 200); } else name.textContent = st[0]; }
    [1, 2].forEach(function (k) { var e = b[k - 1]; if (e.textContent !== st[k]) { e.classList.add('chg'); anim ? tween(e, st[k]) : (e.textContent = st[k]); setTimeout(function () { e.classList.remove('chg'); }, 1300); } });
  }
  var gen = 0, on = false;
  async function run(my) {
    var ok = function () { return my === gen && on; };
    STATES[0].forEach(function (s, i) { set(i, s, false); });
    cards.forEach(function (c) { c.querySelectorAll('b').forEach(function (b) { b.classList.remove('bad'); }); });
    alert.classList.remove('on'); q.classList.remove('on');
    await wait(900);
    for (var r = 1; r < STATES.length && ok(); r++) {
      for (var i = 0; i < 3 && ok(); i++) {
        if (STATES[r][i].join() === STATES[r - 1][i].join()) continue;
        cards[i].classList.add('edit'); await wait(450); set(i, STATES[r][i], true); await wait(1300); cards[i].classList.remove('edit'); await wait(250);
      }
      if (!ok()) return;
      q.textContent = QS[r % QS.length]; q.classList.add('on'); await wait(1700); q.classList.remove('on'); await wait(300);
    }
    if (!ok()) return;
    cards.forEach(function (c, i) { setTimeout(function () { c.querySelector('b').classList.add('bad'); }, i * 220); });
    await wait(500); alert.textContent = '3 reports · 3 different totals'; alert.classList.add('on');
    q.textContent = QS[0]; await wait(500); q.classList.add('on');
    await wait(3200);
  }
  async function loop() { var my = ++gen; while (my === gen && on) await run(my); }
  if (reduce) return;
  vis.classList.add('alive');
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { var was = on; on = es[0].isIntersecting; if (on && !was) loop(); else if (!on) gen++; }, { threshold: .35 }).observe(vis);
})();
