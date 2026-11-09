/* Live dashboards: a simulated click updates the indicators on a real screenshot */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W = 1672;
  function parse(s) { var m = s.match(/^([^\d]*?)([\d,]+(?:\.\d+)?)(.*)$/); if (!m) return null; return { pre: m[1], num: parseFloat(m[2].replace(/,/g, '')), dec: (m[2].split('.')[1] || '').length, comma: m[2].indexOf(',') > -1, suf: m[3] }; }
  function fmt(p, v) { var t = v.toFixed(p.dec); if (p.comma) { var parts = t.split('.'); parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); t = parts.join('.'); } return p.pre + t + p.suf; }
  function tween(el, from, to, ms) {
    var a = parse(from), b = parse(to);
    if (!a || !b || a.pre !== b.pre || a.suf !== b.suf || reduce) { el.textContent = to; return; }
    var t0 = performance.now();
    (function step(now) { var k = Math.min(1, (now - t0) / ms), e = 1 - Math.pow(1 - k, 3); el.textContent = fmt(b, a.num + (b.num - a.num) * e); if (k < 1) requestAnimationFrame(step); else el.textContent = to; })(t0);
  }
  function patch(layer, p, rot, cls) {
    var d = document.createElement('span'); d.className = 'lv-p ' + (cls || '');
    var big = /\$/.test(p.a) ? 0.84 : 0.80;
    d.style.cssText = 'left:calc(var(--u)*' + (p.x - 3) + ');top:calc(var(--u)*' + (p.y - 3) + ');min-width:calc(var(--u)*' + (p.w + 6) + ');height:calc(var(--u)*' + (p.h + 6) + ');font-size:calc(var(--u)*' + (p.h / big).toFixed(1) + ');font-weight:' + p.wt + ';color:' + p.fg + ';--bg:' + p.bg + ';transform:rotate(' + rot + 'deg)';
    d.textContent = p.a; layer.appendChild(d); d.dataset.fs = d.style.fontSize;
    fits.push(function () { var u = layer.getBoundingClientRect().width / W; if (!u) return; d.style.fontSize = d.dataset.fs || (d.dataset.fs = d.style.fontSize); var fs = parseFloat(getComputedStyle(d).fontSize); var probe = document.createElement('span'); probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;font:inherit;font-size:' + fs + 'px;font-weight:' + p.wt; probe.textContent = p.a; layer.appendChild(probe); var mw = probe.getBoundingClientRect().width; layer.removeChild(probe); if (mw > 0) { var r = (p.w * u) / mw; r = Math.max(.6, Math.min(1.12, r)); d.style.fontSize = (fs * r) + 'px'; } });
    return d;
  }
  var fits = [];
  function build(root, sc) {
    var layer = document.createElement('div'); layer.className = 'lv-layer'; layer.setAttribute('aria-hidden', 'true'); root.appendChild(layer);
    (sc.static || []).forEach(function (p) { patch(layer, p, sc.rot).textContent = p.b; });
    var items = sc.p.map(function (p) { return { p: p, el: patch(layer, p, sc.rot) } });
    var ctrl = { p: sc.ctrl, el: patch(layer, sc.ctrl, sc.rot, 'lv-ctrl') };
    var bars = (sc.bars || []).map(function (b) {
      var t = document.createElement('span'); t.className = 'lv-bar';
      t.style.cssText = 'left:calc(var(--u)*' + b.x + ');top:calc(var(--u)*' + b.y + ');width:calc(var(--u)*' + b.w + ');height:calc(var(--u)*' + b.h + ');background:' + b.track;
      var f = document.createElement('i'); f.style.background = b.fill; f.style.width = (b.a * 100) + '%'; t.appendChild(f); layer.appendChild(t); return { b: b, f: f };
    });
    var cur = document.createElement('span'); cur.className = 'lv-cur';
    cur.innerHTML = '<svg viewBox="0 0 24 24"><path d="M5 3l14 8-6.2 1.6L16 20l-2.6 1.2-3.2-7.4L5 18z" fill="#fff" stroke="#0F172A" stroke-width="1.4" stroke-linejoin="round"/></svg>';
    layer.appendChild(cur);
    var toast = document.createElement('span'); toast.className = 'lv-toast'; toast.textContent = 'Updated just now';
    toast.style.cssText = 'left:calc(var(--u)*' + sc.ctrl.x + ');top:calc(var(--u)*' + (sc.ctrl.y + sc.ctrl.h + 14) + ')';
    layer.appendChild(toast);
    var state = false;
    function place(x, y) { cur.style.left = 'calc(var(--u)*' + x + ')'; cur.style.top = 'calc(var(--u)*' + y + ')'; }
    place(sc.click[0] + 260, sc.click[1] + 380);
    function run(done) {
      state = !state;
      cur.classList.add('on'); place(sc.click[0], sc.click[1]);
      setTimeout(function () {
        cur.classList.add('click'); setTimeout(function () { cur.classList.remove('click'); }, 350);
        ctrl.el.classList.add('hit'); ctrl.el.textContent = state ? ctrl.p.b : ctrl.p.a;
        setTimeout(function () { ctrl.el.classList.remove('hit'); }, 900);
        items.forEach(function (it, i) {
          setTimeout(function () { it.el.classList.add('hit'); tween(it.el, state ? it.p.a : it.p.b, state ? it.p.b : it.p.a, 900); setTimeout(function () { it.el.classList.remove('hit'); }, 1100); }, 220 + i * 70);
        });
        bars.forEach(function (b) { b.f.style.width = ((state ? b.b.b : b.b.a) * 100) + '%'; });
        toast.classList.add('on'); setTimeout(function () { toast.classList.remove('on'); }, 2600);
        setTimeout(function () { place(sc.click[0] + 220, sc.click[1] + 300); cur.classList.remove('on'); }, 1500);
        setTimeout(done || function () {}, 1600);
      }, 900);
    }
    return { run: run };
  }
  function init(data) {
    document.querySelectorAll('.live[data-scene]').forEach(function (root) {
      var sc = data[root.getAttribute('data-scene')]; if (!sc) return;
      var api = build(root, sc); requestAnimationFrame(function () { fits.forEach(function (f) { f(); }); }); var timer = null, vis = false, paused = reduce;
      var btn = root.closest('section').querySelector('.lv-pause');
      function loop() { clearTimeout(timer); if (paused || !vis || root.closest('[hidden]')) return; timer = setTimeout(function () { api.run(loop); }, 2600); }
      root._live = { kick: function () { loop(); } };
      if (btn) { if (reduce) btn.hidden = true; btn.addEventListener('click', function () { paused = !paused; btn.setAttribute('aria-pressed', paused); btn.querySelector('span').textContent = paused ? 'Play' : 'Pause'; loop(); }); }
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; loop(); }, { threshold: .35 }).observe(root); else { vis = true; loop(); }
      if (reduce) { root.addEventListener('click', function () { api.run(); }); }
    });
  }
  var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(function () { fits.forEach(function (f) { f(); }); }, 150); });
  var src = document.getElementById('live-data');
  if (src) { try { init(JSON.parse(src.textContent)); } catch (e) {} }
  /* tabs for the live section */
  var tabs = document.querySelectorAll('.lv-tab');
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { sel(i); });
    t.addEventListener('keydown', function (e) { var n = null; if (e.key === 'ArrowRight') n = (i + 1) % tabs.length; if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length; if (n !== null) { e.preventDefault(); sel(n); tabs[n].focus(); } });
  });
  function sel(i) {
    tabs.forEach(function (t, j) { var on = i === j; t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1; t.classList.toggle('on', on); var pn = document.getElementById(t.getAttribute('aria-controls')); pn.hidden = !on; if (on) { var l = pn.querySelector('.live'); fits.forEach(function (f) { f(); }); if (l && l._live) l._live.kick(); } });
  }
})();
