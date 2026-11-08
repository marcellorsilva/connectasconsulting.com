(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  function countUp(el) {
    var to = parseFloat(el.getAttribute('data-count')), dec = +(el.getAttribute('data-dec') || 0);
    var pre = el.getAttribute('data-pre') || '', suf = el.getAttribute('data-suf') || '', sep = el.getAttribute('data-sep');
    function fmt(v) { var s = v.toFixed(dec); if (sep) s = s.replace(/\B(?=(\d{3})+(?!\d))/g, ','); return pre + s + suf; }
    if (reduce) { el.textContent = fmt(to); return; }
    var t0 = performance.now(), dur = 1300;
    (function step(t) { var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); el.textContent = fmt(to * e); if (k < 1) requestAnimationFrame(step); })(t0);
  }

  $$('[data-gdash]').forEach(function (d) {
    var navs = $$('.gd-navs .gd-nav', d), views = $$('.gd-view', d), idx = 0, user = false, timer = null, seen = false;
    $$('.gd-table', d).forEach(function (t) { $$('li', t).forEach(function (li, k) { li.style.setProperty('--k', k); }); });
    $$('.mbars li', d).forEach(function (li, k) { li.style.setProperty('--i', k); });
    function show(k) {
      idx = k;
      navs.forEach(function (n, j) { n.classList.toggle('on', j === k); n.setAttribute('aria-pressed', j === k ? 'true' : 'false'); });
      var key = navs[k].getAttribute('data-v');
      views.forEach(function (v) {
        var on = v.getAttribute('data-v') === key; v.classList.toggle('on', on);
        if (on) $$('[data-count]', v).forEach(countUp);
      });
    }
    navs.forEach(function (n, k) { n.addEventListener('click', function () { user = true; show(k); }); });
    function auto() { clearInterval(timer); if (reduce) return; timer = setInterval(function () { if (!user && document.visibilityState === 'visible') show((idx + 1) % navs.length); }, 4200); }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) { if (!seen) { seen = true; show(0); $$('.gd-right [data-count]', d).forEach(countUp); } auto(); }
        else clearInterval(timer);
      }, { threshold: .3 }).observe(d);
    } else show(0);
  });
})();
