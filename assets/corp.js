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
  /* Showroom: iMac screens cycle + mouse parallax */
  $$('.sr-cycle').forEach(function (c) { var im = $$('img', c), i = 0; if (im.length < 2 || reduce) return; setInterval(function () { im[i].classList.remove('on'); i = (i + 1) % im.length; im[i].classList.add('on'); }, 3400); });
  var st = document.querySelector('[data-parallax]');
  if (st && !reduce && window.matchMedia('(hover: hover)').matches) {
    var layers = $$('[data-depth]', st);
    st.parentNode.addEventListener('pointermove', function (e) { var r = st.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      layers.forEach(function (l) { var d = +l.getAttribute('data-depth'), base = l.classList.contains('sr-imac') ? 'translateX(-50%) ' : ''; l.style.transform = base + 'translate(' + (-x * d) + 'px,' + (-y * d) + 'px)'; }); });
  }
  /* Departments tabs: autoplay with progress */
  $$('[data-tabs]').forEach(function (g) {
    var tabs = $$('.dt', g), views = $$('.dv', g), idx = 0, timer = null, user = false, vis = false;
    function show(i) { idx = i; tabs.forEach(function (t, j) { t.classList.toggle('on', j === i); var b = t.querySelector('.dt-bar'); b.classList.remove('run'); void b.offsetWidth; if (j === i && !user && !reduce) b.classList.add('run'); }); views.forEach(function (v, j) { v.classList.toggle('on', j === i); }); }
    function next() { clearTimeout(timer); if (user || reduce || !vis) return; timer = setTimeout(function () { show((idx + 1) % tabs.length); next(); }, 5500); }
    tabs.forEach(function (t, i) { t.addEventListener('click', function () { user = true; clearTimeout(timer); show(i); }); });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) { show(idx); next(); } else clearTimeout(timer); }, { threshold: .35 }).observe(g);
  });
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
