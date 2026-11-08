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
