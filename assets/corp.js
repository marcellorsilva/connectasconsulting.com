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
