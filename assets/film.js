/* Hero product film: a coded Connectas dashboard with a moving camera,
   build-in, count-ups, a live "connected business" orbit, clicks, a form and a zoom-out. */
(function () {
  var root = document.querySelector('[data-film]'); if (!root) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var cam = root.querySelector('.fm-cam'), world = root.querySelector('.fm-world'), cur = root.querySelector('.fm-cur');
  var VW = 1440, VH = 860, base = 1, gen = 0, vis = false, paused = reduce;
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
  var $ = function (s) { return world.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(world.querySelectorAll(s)); };

  function fit() { var w = root.clientWidth, h = root.clientHeight; base = Math.min(w / VW, h / VH); }
  function shot(x, y, w, h, opts) {
    opts = opts || {};
    var W = root.clientWidth, H = root.clientHeight, s = Math.min(W / w, H / h) * (opts.pad || .9);
    var tx = W / 2 - (x + w / 2) * s, ty = H / 2 - (y + h / 2) * s;
    cam.style.transitionDuration = (opts.ms || 1400) + 'ms';
    cam.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + s + ')' + (opts.tilt ? ' perspective(1600px) rotateX(' + opts.tilt + 'deg)' : '');
  }
  function full(opts) { opts = opts || {}; shot(0, 0, VW, VH, { pad: opts.pad || .94, ms: opts.ms, tilt: opts.tilt }); }
  function el(k) { return world.querySelector('[data-f="' + k + '"]'); }
  function center(e) { var x = 0, y = 0, n = e; while (n && n !== world) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; } return [x + e.offsetWidth / 2, y + e.offsetHeight / 2]; }
  async function click(k) {
    var e = typeof k === 'string' ? el(k) : k; if (!e) return; var p = center(e);
    cur.style.left = p[0] + 'px'; cur.style.top = p[1] + 'px'; cur.classList.add('on');
    await wait(800); cur.classList.add('click'); e.classList.add('fm-press'); await wait(180); cur.classList.remove('click'); e.classList.remove('fm-press');
  }
  function count(k, to, ms) {
    var e = el(k); if (!e) return; var m = String(to).match(/^([^\d]*)([\d,.]+)(.*)$/), a = parseFloat((e.textContent.match(/[\d,.]+/) || ['0'])[0].replace(/,/g, '')) || 0;
    if (!m) { e.textContent = to; return; } var b = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length, t0 = performance.now(); ms = ms || 1100;
    (function f(now) { var k2 = Math.min(1, (now - t0) / ms), v = a + (b - a) * (1 - Math.pow(1 - k2, 3)); e.textContent = m[1] + v.toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + m[3]; if (k2 < 1) requestAnimationFrame(f); })(t0);
  }
  async function type(k, text) { var e = el(k); if (!e) return; e.textContent = ''; e.classList.add('typing'); for (var i = 0; i < text.length; i++) { e.textContent += text[i]; await wait(38); } e.classList.remove('typing'); }
  function tab(i) { var t = $$('.fm-tabs span'), ind = $('.fm-tabs i'); t.forEach(function (s, j) { s.classList.toggle('on', j === i); }); ind.style.left = t[i].offsetLeft + 'px'; ind.style.width = t[i].offsetWidth + 'px'; }
  function reset() {
    world.className = 'fm-world'; cur.classList.remove('on');
    $$('.fm-b').forEach(function (b) { b.classList.remove('in'); });
    el('jobs').textContent = '0'; el('wait').textContent = '3'; el('rev').textContent = '$0'; el('cash').textContent = '$0';
    $$('.fm-wl li').forEach(function (l) { l.classList.remove('done', 'gone'); var a = l.querySelector('.fm-ap'); if (a) a.textContent = 'Approve'; });
    $$('.fm-node').forEach(function (n) { n.classList.remove('on'); });
    el('modal').classList.remove('on'); el('f1').textContent = ''; el('f2').textContent = ''; el('f3').textContent = '';
    el('newrow').classList.remove('on'); el('toast').classList.remove('on'); tab(0);
  }

  async function run(my) {
    var ok = function () { return my === gen && vis && !paused; };
    reset(); full({ ms: 1, tilt: 18, pad: .8 }); await wait(60);
    world.classList.add('blank'); full({ ms: 1600, pad: .94 }); await wait(900); if (!ok()) return;
    /* 1 build-in */
    world.classList.add('build'); $$('.fm-b').forEach(function (b, i) { setTimeout(function () { b.classList.add('in'); }, i * 110); }); await wait(1300); if (!ok()) return;
    count('rev', '$184,250', 1400); count('cash', '$612,400', 1400);
    /* 2 zoom on the briefing card */
    shot(40, 150, 820, 470, { ms: 1500 }); await wait(900); count('jobs', '41', 1300); await wait(1500); if (!ok()) return;
    /* 3 orbit: departments connect */
    world.classList.add('orbit'); shot(330, 160, 560, 440, { ms: 1400 }); await wait(1300);
    for (var n = 0; n < 6 && ok(); n++) { $$('.fm-node')[n].classList.add('on'); await wait(330); }
    await wait(1100); if (!ok()) return;
    /* 4 waiting for you: approve */
    shot(880, 150, 520, 470, { ms: 1400 }); await wait(1400);
    await click('ap0'); el('ap0').textContent = 'Approved'; el('ap0').closest('li').classList.add('done'); count('wait', '2', 500);
    await wait(600); el('ap0').closest('li').classList.add('gone'); await wait(700);
    await click('ap1'); el('ap1').textContent = 'Approved'; el('ap1').closest('li').classList.add('done'); count('wait', '1', 500); await wait(1000); if (!ok()) return;
    /* 5 charts */
    shot(40, 600, 900, 250, { ms: 1400 }); await wait(1000); world.classList.add('grow'); count('rev', '$196,880', 1200); await wait(1900); if (!ok()) return;
    /* 6 new work order: form */
    full({ ms: 1200 }); await wait(900); await click('new'); el('modal').classList.add('on'); await wait(500);
    shot(470, 170, 500, 520, { ms: 1300 }); await wait(1200);
    await type('f1', 'Kitchen remodel · Hill residence'); await wait(250); await type('f2', 'Crew B'); await wait(250); await type('f3', 'Thu, Oct 24 · 8:00 AM'); await wait(500);
    await click('save'); el('modal').classList.remove('on'); await wait(300); if (!ok()) return;
    /* 7 result + team tab */
    shot(880, 150, 520, 470, { ms: 1200 }); await wait(900); el('newrow').classList.add('on'); el('toast').classList.add('on'); count('jobs', '42', 600); await wait(1600);
    full({ ms: 1300 }); await wait(1000); await click('t2'); tab(2); await wait(900); await click('t0'); tab(0); await wait(800); if (!ok()) return;
    /* 8 pull back */
    cur.classList.remove('on'); full({ ms: 2000, tilt: 12, pad: .82 }); await wait(2600);
  }
  async function loop() { var my = ++gen; while (my === gen && vis && !paused) { await run(my); } }
  var btn = root.parentNode.querySelector('.fm-pause');
  if (btn) { if (reduce) btn.hidden = true; btn.addEventListener('click', function () { paused = !paused; btn.setAttribute('aria-pressed', paused); btn.querySelector('span').textContent = paused ? 'Play' : 'Pause'; if (!paused) loop(); else gen++; }); }
  function still() { reset(); world.classList.add('build', 'orbit', 'grow'); $$('.fm-b').forEach(function (b) { b.classList.add('in'); }); $$('.fm-node').forEach(function (n) { n.classList.add('on'); }); el('jobs').textContent = '41'; el('rev').textContent = '$196,880'; el('cash').textContent = '$612,400'; full({ ms: 1 }); }
  fit(); if (reduce) still(); else full({ ms: 1 });
  if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis && !paused) loop(); else if (!vis) gen++; }, { threshold: .2 }).observe(root); else { vis = true; loop(); }
  window.addEventListener('resize', function () { fit(); });
})();
