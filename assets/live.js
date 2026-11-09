/* Live dashboards: real screenshots whose figures, statuses and notifications
   change after simulated clicks. Data lives in #live-data (assets/live-scenes.json). */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W = 1672, fits = [];
  var COL = { green: ['#DCFCE7', '#15803D'], blue: ['#DBEAFE', '#1D4ED8'], purple: ['#EDE9FE', '#5B21B6'], yellow: ['#FEF3C7', '#B45309'], red: ['#FEE2E2', '#B91C1C'] };
  var U = function (n) { return 'calc(var(--u)*' + n + ')'; };

  function parse(s) { var m = String(s).match(/^([^\d]*?)([\d,]+(?:\.\d+)?)(.*)$/); if (!m) return null; return { pre: m[1], num: parseFloat(m[2].replace(/,/g, '')), dec: (m[2].split('.')[1] || '').length, comma: m[2].indexOf(',') > -1, suf: m[3] }; }
  function fmt(p, v) { var t = v.toFixed(p.dec); if (p.comma) { var a = t.split('.'); a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); t = a.join('.'); } return p.pre + t + p.suf; }
  function tween(el, from, to, ms) {
    var a = parse(from), b = parse(to);
    if (!a || !b || a.pre !== b.pre || a.suf !== b.suf || reduce) { el.textContent = to; return; }
    var t0 = performance.now();
    (function step(now) { var k = Math.min(1, (now - t0) / ms), e = 1 - Math.pow(1 - k, 3); el.textContent = fmt(b, a.num + (b.num - a.num) * e); if (k < 1) requestAnimationFrame(step); else el.textContent = to; })(t0);
  }
  function el(layer, cls, x, y, w, h, rot) {
    var d = document.createElement('span'); d.className = cls;
    d.style.left = U(x); d.style.top = U(y); if (w) d.style.width = U(w); if (h) d.style.height = U(h);
    if (rot) d.style.transform = 'rotate(' + rot + 'deg)';
    layer.appendChild(d); return d;
  }

  function Scene(root, sc) {
    var layer = document.createElement('div'); layer.className = 'lv-layer'; layer.setAttribute('aria-hidden', 'true'); root.appendChild(layer);
    var E = {};
    function textEl(p, always) {
      var d = el(layer, 'lv-p' + (always ? ' on' : ''), p.x - 2, p.y - 3, null, p.h + 6, sc.rot);
      d.style.minWidth = U(p.w + 4); d.style.fontWeight = p.wt; d.style.color = p.fg; d.style.setProperty('--bg', p.bg);
      var base = (p.h / (/\$/.test(p.v) ? 0.86 : 0.76));
      d.style.fontSize = U(base.toFixed(1)); d.dataset.fs = d.style.fontSize; d.textContent = p.v;
      fits.push(function () {
        var u = layer.getBoundingClientRect().width / W; if (!u) return;
        d.style.fontSize = d.dataset.fs; var fs = parseFloat(getComputedStyle(d).fontSize);
        var pr = document.createElement('span'); pr.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;font-family:inherit;font-size:' + fs + 'px;font-weight:' + p.wt; pr.textContent = p.v; layer.appendChild(pr);
        var mw = pr.getBoundingClientRect().width; layer.removeChild(pr);
        if (mw > 0) d.style.fontSize = (fs * Math.max(.6, Math.min(1.15, (p.w * u) / mw))) + 'px';
      });
      return d;
    }
    Object.keys(sc.static || {}).forEach(function (k) { textEl(sc.static[k], true); });
    Object.keys(sc.els).forEach(function (k) {
      var p = sc.els[k], o = { p: p, cur: p.v };
      if (p.t === 'T') o.d = textEl(p);
      if (p.t === 'P') { o.d = el(layer, 'lv-pill', p.x, p.y, p.w, p.h, sc.rot); o.d.style.setProperty('--page', p.page); o.d.textContent = p.v.split('|')[0]; }
      if (p.t === 'B') { o.d = el(layer, 'lv-bar', p.x, p.y, p.w, p.h, sc.rot); o.d.style.background = p.track; o.f = document.createElement('i'); o.f.style.background = p.fill; o.f.style.width = (p.v * 100) + '%'; o.d.appendChild(o.f); }
      E[k] = o;
    });
    var cur = el(layer, 'lv-cur', W * .62, 900);
    cur.innerHTML = '<svg viewBox="0 0 24 24"><path d="M5 3l14 8-6.2 1.6L16 20l-2.6 1.2-3.2-7.4L5 18z" fill="#fff" stroke="#0F172A" stroke-width="1.4" stroke-linejoin="round"/></svg>';
    var toast = el(layer, 'lv-toast', 0, 0); var ban = el(layer, 'lv-ban', 0, 0);
    ban.innerHTML = '<i></i><span><b></b><small></small></span>';

    function setv(k, v, anim) {
      var o = E[k]; if (!o) return; var p = o.p;
      if (p.t === 'T') { var changed = v !== p.v; if (changed) o.d.classList.add('on'); if (anim) { o.d.classList.add('hit'); setTimeout(function () { o.d.classList.remove('hit'); }, 1100); tween(o.d, o.cur, v, 900); } else o.d.textContent = v; if (!changed) setTimeout(function () { o.d.classList.remove('on'); }, anim ? 950 : 0); }
      if (p.t === 'P') { var parts = String(v).split('|'), c = COL[parts[1]] || COL.blue; o.d.textContent = parts[0]; o.d.style.background = c[0]; o.d.style.color = c[1]; o.d.classList.toggle('on', v !== p.v); if (anim) { o.d.classList.add('pop'); setTimeout(function () { o.d.classList.remove('pop'); }, 500); } }
      if (p.t === 'B') { o.d.classList.add('on'); o.f.style.width = (v * 100) + '%'; if (v === p.v) setTimeout(function () { o.d.classList.remove('on'); }, 950); }
      o.cur = v;
    }
    function reset(anim) { Object.keys(E).forEach(function (k) { if (E[k].cur !== E[k].p.v) setv(k, E[k].p.v, anim); }); toast.classList.remove('on'); ban.classList.remove('on'); }
    function move(x, y) { cur.style.left = U(x); cur.style.top = U(y); }
    function act(i, done) {
      var a = sc.actions[i]; if (!a) return;
      cur.classList.add('on'); move(a.at[0], a.at[1]);
      setTimeout(function () {
        cur.classList.add('click'); setTimeout(function () { cur.classList.remove('click'); }, 400);
        var keys = Object.keys(a.set); keys.forEach(function (k, j) { setTimeout(function () { setv(k, a.set[k], true); }, 120 + j * 60); });
        if (a.toast) { toast.textContent = a.toast; toast.style.left = U(Math.min(a.at[0] - 30, W - 330)); toast.style.top = U(a.at[1] + 22); toast.classList.add('on'); setTimeout(function () { toast.classList.remove('on'); }, 2400); }
        if (a.banner) { var b = a.banner; ban.style.left = U(b.x); ban.style.top = U(b.y); ban.style.width = U(b.w); ban.querySelector('b').textContent = b.t; ban.querySelector('small').textContent = b.b; ban.classList.add('on'); setTimeout(function () { ban.classList.remove('on'); }, 2800); }
        setTimeout(function () { move(a.at[0] + 120, a.at[1] + 160); }, 1300);
        if (done) setTimeout(done, 1500);
      }, reduce ? 0 : 950);
    }
    function apply(i) { var a = sc.actions[i]; if (a) Object.keys(a.set).forEach(function (k) { setv(k, a.set[k], false); }); }
    function park() { cur.classList.remove('on'); }
    return { act: act, apply: apply, reset: reset, park: park, n: sc.actions.length };
  }

  function init(data) {
    var scenes = {};
    document.querySelectorAll('.live[data-scene]').forEach(function (root) { var sc = data[root.getAttribute('data-scene')]; if (sc) root._s = Scene(root, sc); });
    requestAnimationFrame(function () { fits.forEach(function (f) { f(); }); });

    /* loop mode: hero and any standalone .live[data-loop] */
    document.querySelectorAll('.live[data-loop]').forEach(function (root) {
      var s = root._s; if (!s) return;
      var i = 0, timer = null, vis = false, paused = reduce, btn = root.parentNode.querySelector('.lv-pause');
      function tick() { clearTimeout(timer); if (paused || !vis) return; timer = setTimeout(function () { if (i >= s.n) { s.reset(true); i = 0; tick(); return; } s.act(i++, tick); }, 2200); }
      if (btn) { if (reduce) btn.hidden = true; btn.addEventListener('click', function () { paused = !paused; btn.setAttribute('aria-pressed', paused); btn.querySelector('span').textContent = paused ? 'Play' : 'Pause'; tick(); }); }
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; tick(); }, { threshold: .3 }).observe(root); else { vis = true; tick(); }
    });

    /* step mode: the connected-flow section */
    var flow = document.querySelector('[data-liveflow]');
    if (flow) {
      var steps = flow.querySelectorAll('.fs'), panes = flow.querySelectorAll('.fv'), idx = 0, timer = null, vis = false, stopped = reduce;
      var pause = document.querySelector('.fl-pause');
      function show(i, user) {
        idx = i;
        steps.forEach(function (b, j) { b.classList.toggle('on', j === i); b.setAttribute('aria-pressed', j === i); });
        var st = steps[i], sid = st.getAttribute('data-scene'), ai = +st.getAttribute('data-act');
        panes.forEach(function (p) { var on = p.getAttribute('data-scene') === sid; p.classList.toggle('on', on); });
        var live = flow.querySelector('.fv.on .live'); if (!live || !live._s) return;
        requestAnimationFrame(function () { fits.forEach(function (f) { f(); }); });
        live._s.reset(false);
        var pre = (st.getAttribute('data-pre') || '').split(',').filter(Boolean).map(Number);
        pre.forEach(function (k) { live._s.apply(k); });
        setTimeout(function () { live._s.act(ai); }, pre.length ? 300 : 200);
      }
      function next() { clearTimeout(timer); if (stopped || !vis) return; timer = setTimeout(function () { show((idx + 1) % steps.length); next(); }, 5200); }
      function setPaused(p) { stopped = p; if (pause) { pause.setAttribute('aria-pressed', p); pause.querySelector('span').textContent = p ? 'Play' : 'Pause'; } if (p) clearTimeout(timer); else next(); }
      steps.forEach(function (b, i) { b.addEventListener('click', function () { setPaused(true); show(i, true); }); });
      if (pause) { if (reduce) pause.hidden = true; pause.addEventListener('click', function () { setPaused(!stopped); }); }
      if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { var was = vis; vis = es[0].isIntersecting; if (vis && !was) { show(idx); next(); } else if (!vis) clearTimeout(timer); }, { threshold: .3 }).observe(flow);
    }
    var rz; window.addEventListener('resize', function () { clearTimeout(rz); rz = setTimeout(function () { fits.forEach(function (f) { f(); }); }, 150); });
  }
  var src = document.getElementById('live-data');
  if (src) { try { init(JSON.parse(src.textContent)); } catch (e) { if (window.console) console.error(e); } }
})();
