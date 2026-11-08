(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* ---------- Light streaks on dark heroes and CTA bands ---------- */
  $$('canvas.streaks').forEach(function (cv) {
    var ctx = cv.getContext('2d'); if (!ctx) return;
    var w, h, dpr = Math.min(window.devicePixelRatio || 1, 2), lines = [], t0 = performance.now();
    function size() {
      var r = cv.getBoundingClientRect(); w = r.width; h = r.height;
      cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function make() {
      lines = [];
      var n = Math.round(Math.max(14, Math.min(34, w / 40)));
      for (var i = 0; i < n; i++) {
        lines.push({ y: h * (0.15 + Math.random() * 0.95), amp: 30 + Math.random() * 110, k: 0.0012 + Math.random() * 0.0018, ph: Math.random() * 6.28, sp: 0.00012 + Math.random() * 0.00025, a: 0.05 + Math.random() * 0.16, lw: 0.6 + Math.random() * 1.4, tilt: -0.28 - Math.random() * 0.22 });
      }
    }
    function draw(now) {
      var t = now - t0; ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for (var i = 0; i < lines.length; i++) {
        var L = lines[i];
        var g = ctx.createLinearGradient(0, 0, w, 0);
        g.addColorStop(0, 'rgba(120,165,240,0)');
        g.addColorStop(0.45, 'rgba(140,180,250,' + L.a + ')');
        g.addColorStop(0.8, 'rgba(190,215,255,' + (L.a * 1.4) + ')');
        g.addColorStop(1, 'rgba(120,165,240,0)');
        ctx.strokeStyle = g; ctx.lineWidth = L.lw; ctx.beginPath();
        for (var x = -20; x <= w + 20; x += 14) {
          var y = L.y + x * L.tilt + Math.sin(x * L.k + L.ph + t * L.sp) * L.amp;
          if (x === -20) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalCompositeOperation = 'source-over';
      if (!reduce && running) raf = requestAnimationFrame(draw);
    }
    var running = false, raf = 0;
    function start() { if (running) return; running = true; raf = requestAnimationFrame(draw); }
    function stop() { running = false; cancelAnimationFrame(raf); }
    size(); make(); draw(performance.now());
    window.addEventListener('resize', function () { size(); make(); draw(performance.now()); });
    if (!reduce && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { es[0].isIntersecting ? start() : stop(); }).observe(cv);
    }
  });


  /* ---------- Scroll motion ---------- */
  (function () {
    var groups = [
      ['.head', 'rv'], ['.problem', 'rv'], ['.sol', 'rv'], ['.project', 'rv'], ['.ind-chip', 'rv-zoom'], ['.ind', 'rv'],
      ['.row-copy', 'rv-left'], ['.row-visual', 'rv-right'], ['.step', 'rv'], ['.case-media', 'rv-zoom'], ['.csr > div', 'rv'],
      ['.cols3 > div', 'rv'], ['.checks li', 'rv'], ['.flowline > div', 'rv'], ['.duo > div', 'rv'], ['.form-card', 'rv-right'],
      ['.hub', 'rv-zoom'], ['.cx-tabs', 'rv-left'], ['.cx-panel', 'rv-right'], ['.persp-visual', 'rv-zoom'], ['.persp-copy', 'rv-left'],
      ['.panel', 'rv-zoom'], ['.statement', 'rv'], ['.partner-band > div', 'rv'], ['.position > *', 'rv'], ['.split > div', 'rv'],
      ['.related', 'rv'], ['.faq details', 'rv'], ['.table-wrap', 'rv'], ['.caps span', 'rv'], ['.assess-mini > div', 'rv-left']
    ];
    var els = [];
    groups.forEach(function (g) {
      $$(g[0]).forEach(function (el) {
        if (el.closest('.hero') || el.classList.contains('rv') || el.classList.contains('rv-left') || el.classList.contains('rv-right') || el.classList.contains('rv-zoom')) return;
        var sib = el.parentNode ? Array.prototype.indexOf.call(el.parentNode.children, el) : 0;
        el.classList.add(g[1]); el.style.setProperty('--d', Math.min(sib, 6) * 90 + 'ms'); els.push(el);
      });
    });
    $$('.sec h2, .cta h2').forEach(function (h) {
      if (h.closest('.hero')) return;
      var words = h.textContent.trim().split(/\s+/);
      if (words.length > 16) return;
      h.innerHTML = words.map(function (w, i) { return '<span class="w"><span style="--i:' + i + '">' + w.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</span></span>'; }).join(' ');
      h.classList.add('split-words'); els.push(h);
    });
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (e) { io.observe(e); });
    setTimeout(function () { els.forEach(function (e) { var r = e.getBoundingClientRect(); if (r.top < innerHeight) e.classList.add('in'); }); }, 2500);
  })();

  /* ---------- Hero screens cycle ---------- */
  $$('.screen.cycle').forEach(function (s) {
    var imgs = $$('img', s); if (imgs.length < 2 || reduce) return;
    var i = 0, ms = +s.getAttribute('data-cycle') || 4000, off = +s.getAttribute('data-offset') || 0;
    setTimeout(function () { setInterval(function () { imgs[i].classList.remove('on'); i = (i + 1) % imgs.length; imgs[i].classList.add('on'); }, ms); }, off);
  });

  /* ---------- Hero laptop tilts with scroll ---------- */
  var lapEl = $('.stage .laptop');
  if (lapEl && !reduce) {
    var tick = false;
    lapEl.addEventListener('animationend', function () { lapEl.style.animation = 'none'; lapEl.style.transform = 'translateX(-50%)'; });
    window.addEventListener('scroll', function () {
      if (tick) return; tick = true;
      requestAnimationFrame(function () { var y = Math.min(scrollY, 600); lapEl.style.transform = 'translateX(-50%) perspective(1600px) rotateX(' + (y / 60) + 'deg) translateY(' + (-y / 10) + 'px)'; tick = false; });
    }, { passive: true });
  }

  /* ---------- Header: dropdowns and mobile menu ---------- */
  $$('.dd').forEach(function (dd) {
    var btn = $('button', dd);
    function close() { dd.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !dd.classList.contains('open');
      $$('.dd.open').forEach(function (o) { o.classList.remove('open'); $('button', o).setAttribute('aria-expanded', 'false'); });
      if (open) { dd.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
    });
    dd.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(); btn.focus(); } });
    dd.addEventListener('focusout', function (e) { if (!dd.contains(e.relatedTarget)) close(); });
  });
  document.addEventListener('click', function () { $$('.dd.open').forEach(function (o) { o.classList.remove('open'); $('button', o).setAttribute('aria-expanded', 'false'); }); });
  var mb = $('.menu-btn'), mn = $('.mnav');
  if (mb && mn) {
    mb.addEventListener('click', function () {
      var open = !mn.classList.contains('open');
      mn.classList.toggle('open', open); mb.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  /* ---------- Ecosystem hub ---------- */
  var hub = $('.hub');
  if (hub) {
    var note = $('.hub-note'), nodes = $$('.node', hub), def = note ? note.innerHTML : '';
    function pick(n) {
      nodes.forEach(function (m) { m.classList.toggle('on', m === n); });
      $$('.wire', hub).forEach(function (wr) { wr.classList.toggle('hot', n && wr.getAttribute('data-k') === n.getAttribute('data-k')); });
      if (note) note.innerHTML = n ? '<b>' + n.getAttribute('data-title') + '</b> ' + n.getAttribute('data-text') : def;
    }
    nodes.forEach(function (n) {
      n.addEventListener('mouseenter', function () { pick(n); });
      n.addEventListener('focus', function () { pick(n); });
      n.addEventListener('click', function () { pick(n); });
      n.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(n); } });
    });
    hub.addEventListener('mouseleave', function () { pick(null); });
  }

  /* ---------- Connected workflow demo ---------- */
  var cx = $('.cx');
  if (cx) {
    var ctabs = $$('.cx-tab', cx), timers = [];
    function play(panel) {
      timers.forEach(clearTimeout); timers = [];
      var items = $$('.chain li', panel);
      items.forEach(function (li) { li.classList.remove('done'); });
      items.forEach(function (li, i) {
        if (reduce) { li.classList.add('done'); return; }
        timers.push(setTimeout(function () { li.classList.add('done'); }, 350 + i * 650));
      });
    }
    function showTab(i, focus) {
      ctabs.forEach(function (t, j) {
        var on = i === j;
        t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1;
        var p = document.getElementById(t.getAttribute('aria-controls')); p.hidden = !on; if (on) play(p);
      });
      if (focus) ctabs[i].focus();
    }
    ctabs.forEach(function (t, i) {
      t.addEventListener('click', function () { showTab(i); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (i + 1) % ctabs.length;
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (i - 1 + ctabs.length) % ctabs.length;
        if (n !== null) { e.preventDefault(); showTab(n, true); }
      });
    });
    $$('.cx-replay', cx).forEach(function (b) { b.addEventListener('click', function () { play(b.closest('.cx-panel')); }); });
    var started = false;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { if (es[0].isIntersecting && !started) { started = true; showTab(0); } }, { threshold: 0.35 }).observe(cx);
    } else { showTab(0); }
  }

  /* ---------- Perspectives ---------- */
  var ps = $('.persp');
  if (ps) {
    var ptabs = $$('.persp-tab', ps), img = $('.persp-visual img', ps), pt = $('.persp-copy h3', ps), pd = $('.persp-copy p.pd', ps);
    function setP(i, focus) {
      var t = ptabs[i];
      ptabs.forEach(function (x, j) { x.setAttribute('aria-selected', i === j ? 'true' : 'false'); x.tabIndex = i === j ? 0 : -1; });
      img.classList.add('swap');
      setTimeout(function () {
        img.src = t.getAttribute('data-img'); img.alt = t.getAttribute('data-alt');
        pt.textContent = t.getAttribute('data-title'); pd.textContent = t.getAttribute('data-text');
        img.classList.remove('swap');
      }, reduce ? 0 : 200);
      if (focus) t.focus();
    }
    var pauto = !reduce, pidx = 0, ptimer = null;
    ptabs.forEach(function (t) { var b = document.createElement('span'); b.className = 'bar'; t.appendChild(b); });
    function prun(i) { ptabs.forEach(function (x, j) { var b = $('.bar', x); b.classList.remove('run'); void b.offsetWidth; if (j === i && pauto) b.classList.add('run'); }); }
    function pnext() { if (!pauto) return; clearTimeout(ptimer); ptimer = setTimeout(function () { pidx = (pidx + 1) % ptabs.length; setP(pidx); prun(pidx); pnext(); }, 4500); }
    if ('IntersectionObserver' in window && pauto) new IntersectionObserver(function (es) { if (es[0].isIntersecting) { prun(pidx); pnext(); } else clearTimeout(ptimer); }, { threshold: .4 }).observe(ps);
    ptabs.forEach(function (t, i) {
      t.addEventListener('click', function () { pauto = false; clearTimeout(ptimer); prun(-1); pidx = i; setP(i); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowRight') n = (i + 1) % ptabs.length;
        if (e.key === 'ArrowLeft') n = (i - 1 + ptabs.length) % ptabs.length;
        if (n !== null) { e.preventDefault(); setP(n, true); }
      });
      var pre = new Image(); pre.src = t.getAttribute('data-img');
    });
  }

  /* ---------- Assessment: home teaser hands answers to the contact page ---------- */
  var mini = $('#assess-mini');
  if (mini) {
    mini.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = new URLSearchParams(new FormData(mini)).toString();
      window.location.href = mini.getAttribute('action') + (q ? '?' + q : '') + '#assessment';
    });
  }

  /* ---------- Assessment form on the contact page ---------- */
  var form = $('#assessment-form');
  if (form) {
    var params = new URLSearchParams(window.location.search);
    ['size', 'industry', 'challenge'].forEach(function (k) {
      var v = params.get(k); if (!v) return;
      $$('[name="' + k + '"]', form).forEach(function (el) {
        if (el.type === 'radio' || el.type === 'checkbox') { if (el.value === v) el.checked = true; }
        else el.value = v;
      });
    });
    var msg = $('.form-msg', form);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = form.elements, missing = [];
      if (!form.querySelector('[name="size"]:checked')) missing.push('company size');
      if (!f.industry.value) missing.push('industry');
      if (!form.querySelector('[name="challenge"]:checked')) missing.push('biggest challenge');
      if (!f.name.value.trim()) missing.push('your name');
      if (!f.company.value.trim()) missing.push('company');
      if (!f.email.value.trim() || !f.email.checkValidity()) missing.push('a valid email');
      if (missing.length) {
        msg.hidden = false; msg.className = 'form-msg err';
        msg.textContent = 'Add ' + missing.join(', ') + ' so we can prepare for the call.';
        return;
      }
      var val = function (n) { var c = form.querySelector('[name="' + n + '"]:checked'); return c ? c.value : ''; };
      var body = [
        'Business Systems Assessment request', '',
        'Name: ' + f.name.value, 'Company: ' + f.company.value, 'Email: ' + f.email.value, 'Phone: ' + (f.phone.value || '-'),
        'Company size: ' + val('size'), 'Industry: ' + f.industry.value, 'Biggest challenge: ' + val('challenge'),
        'Also needs brand strategy or creative design: ' + (val('creative') || 'Not answered'), '',
        'More about the business:', f.details.value || '-'
      ].join('\n');
      window.location.href = 'mailto:info@connectasconsulting.com?subject=' + encodeURIComponent('Business Systems Assessment · ' + f.company.value) + '&body=' + encodeURIComponent(body);
      msg.hidden = false; msg.className = 'form-msg ok';
      msg.textContent = 'Your email app opened with your answers. Press send and we will reply within one business day. If it did not open, write to info@connectasconsulting.com.';
    });
  }

  /* ---------- Referral partner form ---------- */
  var pf = $('#partner-form');
  if (pf) {
    pf.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = pf.elements, m = $('.form-msg', pf);
      if (!f.name.value.trim() || !f.email.value.trim() || !f.email.checkValidity()) {
        m.hidden = false; m.className = 'form-msg err'; m.textContent = 'Add your name and a valid email.'; return;
      }
      var body = ['Referral partner interest', '', 'Name: ' + f.name.value, 'Company: ' + f.company.value, 'Email: ' + f.email.value, 'Type: ' + f.type.value, '', f.details.value].join('\n');
      window.location.href = 'mailto:info@connectasconsulting.com?subject=' + encodeURIComponent('Referral partner · ' + (f.company.value || f.name.value)) + '&body=' + encodeURIComponent(body);
      m.hidden = false; m.className = 'form-msg ok'; m.textContent = 'Your email app opened with your details. Press send and we will be in touch.';
    });
  }

  var yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();
})();
