(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  var mouse = { x: -9999, y: -9999 };
  window.addEventListener('pointermove', function (e) { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

  function visibleLoop(el, draw) {
    var on = false, raf = 0;
    function frame(t) { draw(t); if (on) raf = requestAnimationFrame(frame); }
    function start() { if (on || reduce) return; on = true; raf = requestAnimationFrame(frame); }
    function stop() { on = false; cancelAnimationFrame(raf); }
    draw(performance.now());
    if (reduce) return;
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { es[0].isIntersecting ? start() : stop(); }).observe(el); else start();
  }
  function fit(cv) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2), r = cv.getBoundingClientRect();
    cv.width = Math.max(1, r.width * dpr); cv.height = Math.max(1, r.height * dpr);
    var ctx = cv.getContext('2d'); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: r.width, h: r.height };
  }

  /* ---------- Hero title: characters blur in ---------- */
  $$('.fx-title span').forEach(function (sp, li) {
    var txt = sp.textContent, c = li * 14, html = '';
    for (var i = 0; i < txt.length; i++) html += txt[i] === ' ' ? ' ' : '<i class="ch" style="--c:' + (c + i) + ';font-style:normal">' + txt[i] + '</i>';
    sp.innerHTML = html; sp.setAttribute('aria-label', txt);
  });

  /* ---------- Flickering grid ---------- */
  $$('canvas.fx-grid').forEach(function (cv) {
    var S, cells = [], size = 56, last = 0;
    function resize() { S = fit(cv); }
    resize(); window.addEventListener('resize', resize);
    visibleLoop(cv, function (t) {
      var ctx = S.ctx, w = S.w, h = S.h; ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(255,255,255,.055)'; ctx.lineWidth = 1; ctx.beginPath();
      for (var x = 0.5; x < w; x += size) { ctx.moveTo(x, 0); ctx.lineTo(x, h); }
      for (var y = 0.5; y < h; y += size) { ctx.moveTo(0, y); ctx.lineTo(w, y); }
      ctx.stroke();
      if (t - last > 140) { last = t; cells.push({ x: Math.floor(Math.random() * w / size), y: Math.floor(Math.random() * h / size), a: 0, v: 1 }); }
      var r = cv.getBoundingClientRect(), mx = Math.floor((mouse.x - r.left) / size), my = Math.floor((mouse.y - r.top) / size);
      if (mx >= 0 && my >= 0 && mouse.x - r.left < w && mouse.y - r.top < h && Math.random() < .5) cells.push({ x: mx, y: my, a: .5, v: -1, m: 1 });
      cells = cells.filter(function (c) {
        c.a += c.v * (c.m ? .02 : .006); if (c.a >= .6) c.v = -1;
        if (c.a <= 0) return false;
        ctx.fillStyle = c.m ? 'rgba(120,150,255,' + (c.a * .12) + ')' : 'rgba(255,255,255,' + (c.a * .09) + ')';
        ctx.fillRect(c.x * size + 1, c.y * size + 1, size - 1, size - 1); return true;
      });
    });
  });

  /* ---------- Particle morph engine ---------- */
  var SYM = [[70,3,240,288],[240,288,380,288],[380,288,307,410],[307,410,105,410],[105,410,105,60],[105,60,307,60],[307,60,380,185],[380,185,240,185],[240,185,70,470],[105,60,5,236],[5,236,105,410]];
  function R(a) { return (Math.random() * 2 - 1) * a; }
  var SHAPES = {
    sphere: function (n) { var p = [], g = Math.PI * (3 - Math.sqrt(5)); for (var i = 0; i < n; i++) { var y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), th = g * i, k = i % 7 ? 1 : .55 + Math.random() * .4; p.push([Math.cos(th) * r * k, y * k, Math.sin(th) * r * k]); } return p; },
    symbol: function (n) { var p = [], L = SYM.map(function (s) { return Math.hypot(s[2] - s[0], s[3] - s[1]); }), T = L.reduce(function (a, b) { return a + b; }, 0); for (var i = 0; i < n; i++) { var d = Math.random() * T, j = 0; while (d > L[j]) { d -= L[j]; j++; } var s = SYM[j], f = d / L[j]; p.push([((s[0] + (s[2] - s[0]) * f) - 192) / 230 + R(.025), ((s[1] + (s[3] - s[1]) * f) - 236) / 230 + R(.025), R(.12)]); } return p; },
    grid: function (n) { var p = []; for (var i = 0; i < n; i++) { var a = [R(.75), R(.75), R(.75)], ax = Math.floor(Math.random() * 3); a[ax] = Math.random() < .5 ? -.75 : .75; if (Math.random() < .5) { var bx = (ax + 1) % 3; a[bx] = Math.round(a[bx] / .25) * .25; } p.push(a); } return p; },
    network: function (n) { var nodes = [], p = []; for (var k = 0; k < 16; k++) { var th = Math.random() * 6.28, ph = Math.acos(R(1)), rr = .45 + Math.random() * .55; nodes.push([Math.sin(ph) * Math.cos(th) * rr, Math.cos(ph) * rr, Math.sin(ph) * Math.sin(th) * rr]); } for (var i = 0; i < n; i++) { var a = nodes[i % 16]; if (i % 3) { p.push([a[0] + R(.06), a[1] + R(.06), a[2] + R(.06)]); } else { var b = nodes[(i * 7 + 3) % 16], f = Math.random(); p.push([a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f]); } } return p; },
    phone: function (n) { var p = [], W = .52, H = 1, rr = .12; for (var i = 0; i < n; i++) { var z = R(.05); if (i % 3 === 0) { p.push([R(W - .08), R(H - .1), z]); continue; } var t = Math.random() * 4, x, y; if (t < 1) { x = -W + 2 * W * t; y = -H; } else if (t < 2) { x = W; y = -H + 2 * H * (t - 1); } else if (t < 3) { x = W - 2 * W * (t - 2); y = H; } else { x = -W; y = H - 2 * H * (t - 3); } p.push([x * (1 - rr * .2) + R(.01), y + R(.01), z]); } return p; },
    helix: function (n) { var p = []; for (var i = 0; i < n; i++) { var u = R(1), a = u * 7, s = i % 2 ? Math.PI : 0, r = .42; if (i % 9 === 0) { var f = R(1); p.push([Math.cos(a) * r * f, u * 1.1, Math.sin(a) * r * f]); } else p.push([Math.cos(a + s) * r + R(.04), u * 1.1 + R(.02), Math.sin(a + s) * r + R(.04)]); } return p; },
    shield: function (n) { var p = []; function sh(u) { var y = -1 + 2 * u; var hw = y < 0 ? .75 : .75 * Math.sqrt(Math.max(0, 1 - y * y)) ; return hw; } for (var i = 0; i < n; i++) { var u = Math.random(), y = -.95 + 1.9 * u, hw = sh(u); var edge = i % 2 === 0; var x = edge ? (Math.random() < .5 ? -hw : hw) : R(hw); if (i % 11 === 0) { x = R(.75); y = -.95; } p.push([x * .95 + R(.012), y, R(edge ? .04 : .12)]); } return p; }
  };
  function engine(cv) {
    var mobile = window.innerWidth < 760, N = mobile ? 900 : 1700;
    var S = fit(cv), cache = {}, cur = [], tgt, rot = 0, push = [];
    function shape(name) { return cache[name] || (cache[name] = SHAPES[name] ? SHAPES[name](N) : SHAPES.sphere(N)); }
    var start = shape('sphere');
    for (var i = 0; i < N; i++) { var s = start[i]; cur.push([s[0] * 2.4 + R(.8), s[1] * 2.4 + R(.8), s[2] * 2.4]); push.push([0, 0]); }
    tgt = shape((cv.getAttribute('data-shapes') || 'sphere').split(',')[0]);
    window.addEventListener('resize', function () { S = fit(cv); });
    var api = { set: function (name) { tgt = shape(name); } };
    var useMouse = cv.getAttribute('data-mouse') === '1';
    visibleLoop(cv, function (t) {
      var ctx = S.ctx, w = S.w, h = S.h; ctx.clearRect(0, 0, w, h);
      rot += .0035;
      var cy = Math.cos(rot), sy = Math.sin(rot), cx = Math.cos(.25), sx = Math.sin(.25);
      var sc = Math.min(w, h) * (cv.closest('.fxhero') ? .3 : .34), ox = w / 2, oy = h / 2;
      if (cv.closest('.fxhero')) oy = h * .46;
      var r = cv.getBoundingClientRect(), mx = mouse.x - r.left, my = mouse.y - r.top;
      ctx.globalCompositeOperation = 'lighter';
      for (var i = 0; i < N; i++) {
        var c = cur[i], g = tgt[i], k = reduce ? 1 : .055;
        c[0] += (g[0] - c[0]) * k; c[1] += (g[1] - c[1]) * k; c[2] += (g[2] - c[2]) * k;
        var x = c[0] * cy + c[2] * sy, z = -c[0] * sy + c[2] * cy, y = c[1] * cx - z * sx; z = c[1] * sx + z * cx;
        var per = 2.6 / (2.6 + z), px = ox + x * sc * per, py = oy + y * sc * per;
        var pp = push[i];
        if (useMouse || true) { var dx = px - mx, dy = py - my, d2 = dx * dx + dy * dy; if (d2 < 9000) { var f = (1 - d2 / 9000) * 3.2, d = Math.sqrt(d2) || 1; pp[0] += dx / d * f; pp[1] += dy / d * f; } }
        pp[0] *= .9; pp[1] *= .9; px += pp[0]; py += pp[1];
        var a = Math.max(.12, Math.min(1, .75 - z * .45)), sz = per * (i % 13 ? 1.5 : 2.6);
        ctx.fillStyle = i % 5 ? 'rgba(210,220,255,' + a * .9 + ')' : 'rgba(130,160,255,' + a + ')';
        ctx.fillRect(px, py, sz, sz);
      }
      ctx.globalCompositeOperation = 'source-over';
    });
    return api;
  }
  $$('canvas.fx-particles').forEach(function (cv) {
    var api = engine(cv), list = (cv.getAttribute('data-shapes') || '').split(',').filter(Boolean);
    if (cv.getAttribute('data-bind') === 'svc') {
      var cards = $$('.svc'), idx = 0, hover = false, timer = null;
      function pick(k) { idx = k; cards.forEach(function (c, j) { c.classList.toggle('on', j === k); }); api.set(cards[k].getAttribute('data-shape')); }
      cards.forEach(function (c, j) {
        c.addEventListener('mouseenter', function () { hover = true; pick(j); });
        c.addEventListener('focus', function () { hover = true; pick(j); });
        c.addEventListener('mouseleave', function () { hover = false; });
      });
      if (!reduce) timer = setInterval(function () { if (!hover && document.visibilityState === 'visible') pick((idx + 1) % cards.length); }, 3200);
      pick(0);
    } else if (list.length > 1 && !reduce) {
      var k = 0; setTimeout(function () { setInterval(function () { k = (k + 1) % list.length; api.set(list[k]); }, 4200); api.set(list[1]); k = 1; }, 2200);
    }
  });

  /* ---------- Light ribbons ---------- */
  $$('canvas.fx-ribbons').forEach(function (cv) {
    var S = fit(cv); window.addEventListener('resize', function () { S = fit(cv); });
    var R = [{ c: '111,227,255', a: .9, off: 0, sp: .00035, amp: .18, dir: 1 }, { c: '91,140,255', a: .8, off: 2, sp: .0003, amp: .22, dir: -1 }, { c: '139,107,255', a: .55, off: 4, sp: .00026, amp: .26, dir: 1 }, { c: '111,227,255', a: .45, off: 1, sp: .0004, amp: .14, dir: -1 }];
    visibleLoop(cv, function (t) {
      var ctx = S.ctx, w = S.w, h = S.h; ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      R.forEach(function (r) {
        for (var pass = 0; pass < 3; pass++) {
          ctx.beginPath();
          for (var x = -40; x <= w + 40; x += 12) {
            var u = x / w, base = r.dir > 0 ? .25 + u * .55 : .8 - u * .55;
            var y = h * (base + Math.sin(u * 5 + t * r.sp * 3 + r.off) * r.amp * (.4 + u * .6) + pass * .004);
            x === -40 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.strokeStyle = 'rgba(' + r.c + ',' + (pass ? r.a * .25 : r.a * .55) + ')';
          ctx.lineWidth = pass === 0 ? 1.4 : pass === 1 ? 7 : 22;
          ctx.shadowColor = 'rgba(' + r.c + ',.9)'; ctx.shadowBlur = pass === 0 ? 12 : 0;
          ctx.stroke();
        }
      });
      ctx.shadowBlur = 0; ctx.globalCompositeOperation = 'source-over';
    });
  });

  /* ---------- Cursor, spotlight, magnetic buttons ---------- */
  if (fine && !reduce) {
    var cur = $('.cursor'), ring = $('.cursor-ring');
    if (cur && ring) {
      document.documentElement.classList.add('has-cursor');
      var rx = 0, ry = 0;
      (function loop() {
        cur.style.transform = 'translate(' + mouse.x + 'px,' + mouse.y + 'px)';
        rx += (mouse.x - rx) * .18; ry += (mouse.y - ry) * .18;
        ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
        requestAnimationFrame(loop);
      })();
      var HOT = 'a, button, [role="button"], .svc, .crow, .ind-chip, .project, label, summary, select';
      document.addEventListener('pointerover', function (e) { ring.classList.toggle('hot', !!(e.target.closest && e.target.closest(HOT))); });
      document.addEventListener('pointerdown', function () { ring.classList.add('down'); });
      document.addEventListener('pointerup', function () { ring.classList.remove('down'); });
      document.addEventListener('pointerleave', function () { document.documentElement.classList.remove('has-cursor'); });
      document.addEventListener('pointerenter', function () { document.documentElement.classList.add('has-cursor'); });
    }
    $$('.svc, .project, .cx-panel, .form-card, .ind, .ind-chip, .panel, .duo > div, .crow').forEach(function (el) { el.classList.add('spot'); });
    document.addEventListener('pointermove', function (e) {
      var s = e.target.closest && e.target.closest('.spot'); if (!s) return;
      var r = s.getBoundingClientRect(); s.style.setProperty('--mx', (e.clientX - r.left) + 'px'); s.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
    $$('.btn').forEach(function (b) {
      b.addEventListener('pointermove', function (e) { var r = b.getBoundingClientRect(); b.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * .18 + 'px,' + (e.clientY - r.top - r.height / 2) * .28 + 'px)'; });
      b.addEventListener('pointerleave', function () { b.style.transform = ''; });
    });
  }

  /* ---------- Case list hover preview ---------- */
  var pv = $('.case-preview');
  if (pv && fine) {
    var pimg = $('img', pv), px = 0, py = 0, tx = 0, ty = 0, active = false;
    $$('.crow').forEach(function (row) {
      row.addEventListener('mouseenter', function () { pimg.src = row.getAttribute('data-img'); pv.classList.add('on'); active = true; });
      row.addEventListener('mouseleave', function () { pv.classList.remove('on'); active = false; });
    });
    (function loop() { tx = mouse.x + 30; ty = mouse.y - 140; px += (tx - px) * .14; py += (ty - py) * .14; if (active || pv.classList.contains('on')) pv.style.left = px + 'px', pv.style.top = py + 'px'; requestAnimationFrame(loop); })();
  }

  /* ---------- Footer clock (Florida) ---------- */
  var fc = $('#fclock'), fa = $('#fampm');
  if (fc) {
    var fmt;
    try { fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }); } catch (e) { fmt = null; }
    function tick() {
      if (!fmt) return; var parts = fmt.formatToParts(new Date()), o = {};
      parts.forEach(function (p) { o[p.type] = p.value; });
      fc.textContent = o.hour + ':' + o.minute + ':' + o.second; fa.textContent = (o.dayPeriod || '').toUpperCase() + ' ET';
    }
    tick(); setInterval(tick, 1000);
  }
})();
