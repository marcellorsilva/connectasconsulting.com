/* Connectas live app engine: coded screens inside real device frames.
   Desktop (iMac), tablet and phone screens built in HTML, with scripted clicks/taps,
   count-ups, growing charts, status changes and notifications. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var wait = function (ms) { return new Promise(function (r) { setTimeout(r, reduce ? Math.min(ms, 60) : ms); }); };
  var SIZE = { desktop: [1280, 800], tablet: [1024, 720], phone: [390, 833] };
  var ICON = {
    home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>', users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c1.9.8 3.1 2.6 3.5 5.2"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>', cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    dollar: '<path d="M12 3v18M16.5 7.5c-.8-1.3-2.4-2-4.5-2-2.7 0-4.5 1.3-4.5 3.2 0 4.6 9 2.4 9 6.9 0 2-1.8 3.4-4.5 3.4-2.2 0-3.9-.8-4.7-2.3"/>', chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20a2 2 0 0 0 4 0"/>', search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>', boat: '<path d="M3 16l2 4h14l2-4zM12 3v13M12 4l6 9h-6"/>',
    key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l2 2"/>', wrench: '<path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 0-2-2z"/>', camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-3h5L16 7"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', chev: '<path d="M9 6l6 6-6 6"/>', box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>'
  };
  var ic = function (n, c) { return '<svg class="' + (c || 'i') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICON[n] || '') + '</svg>'; };
  var PILL = { green: 'g', blue: 'b', purple: 'p', yellow: 'y', red: 'r', gray: 'n' };

  /* ---------------- number helpers ---------------- */
  function parse(s) { var m = String(s).match(/^([^\d-]*?)(-?[\d,]+(?:\.\d+)?)(.*)$/); if (!m) return null; return { pre: m[1], num: parseFloat(m[2].replace(/,/g, '')), dec: (m[2].split('.')[1] || '').length, comma: m[2].indexOf(',') > -1 || Math.abs(parseFloat(m[2].replace(/,/g, ''))) >= 10000, suf: m[3] }; }
  function fmt(p, v) { var t = v.toFixed(p.dec); if (p.comma) { var a = t.split('.'); a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); t = a.join('.'); } return p.pre + t + p.suf; }
  function count(el, to, ms, from) {
    var a = parse(from != null ? from : el.textContent), b = parse(to);
    if (!a || !b || reduce) { el.textContent = to; return; }
    var t0 = performance.now(); ms = ms || 900;
    (function f(now) { var k = Math.min(1, (now - t0) / ms), e = 1 - Math.pow(1 - k, 3); el.textContent = fmt(b, a.num + (b.num - a.num) * e); if (k < 1) requestAnimationFrame(f); else el.textContent = to; })(t0);
  }

  /* ---------------- component renderers ---------------- */
  function kpis(list) {
    return '<div class="ak-row">' + list.map(function (k, i) {
      var sp = k.spark ? '<svg class="ak-sp" viewBox="0 0 100 30" preserveAspectRatio="none"><path d="' + spark(k.spark) + '"/></svg>' : '';
      return '<div class="ak" data-a style="--i:' + i + '"><span class="ak-l">' + (k.icon ? ic(k.icon, 'ak-ic') : '') + k.l + '</span><b class="ak-v" data-k="' + (k.k || '') + '" data-n="' + k.v + '">' + k.v + '</b>' + (k.d ? '<span class="ak-d ' + (k.dn ? 'dn' : '') + '" data-k="' + (k.k || '') + 'd">' + k.d + '</span>' : '') + sp + '</div>';
    }).join('') + '</div>';
  }
  function spark(v) { var mx = Math.max.apply(0, v), mn = Math.min.apply(0, v); return v.map(function (y, i) { return (i ? 'L' : 'M') + (i * 100 / (v.length - 1)).toFixed(1) + ' ' + (27 - (y - mn) / ((mx - mn) || 1) * 24).toFixed(1); }).join(''); }
  function bars(c) {
    var mx = Math.max.apply(0, c.v.concat(c.v2 || []));
    return '<div class="ac" data-a style="--i:' + (c.i || 0) + '"><div class="ac-h"><b>' + c.t + '</b>' + (c.r ? '<span class="ac-r">' + c.r + '</span>' : '') + '</div><div class="abars" data-k="' + (c.k || '') + '">' + c.v.map(function (v, i) {
      return '<span class="abar"><i style="--h:' + (v / mx * 100).toFixed(1) + '%;--j:' + i + '"' + (i === c.v.length - 1 ? ' data-last' : '') + '></i>' + (c.v2 ? '<i class="b2" style="--h:' + (c.v2[i] / mx * 100).toFixed(1) + '%;--j:' + i + '"></i>' : '') + '<em>' + c.l[i] + '</em></span>';
    }).join('') + '</div></div>';
  }
  function line(c) {
    var w = 600, h = 170, mx = Math.max.apply(0, c.v) * 1.1, pts = c.v.map(function (y, i) { return [i * w / (c.v.length - 1), h - y / mx * h]; });
    var d = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join('');
    return '<div class="ac" data-a style="--i:' + (c.i || 0) + '"><div class="ac-h"><b>' + c.t + '</b><span class="ac-r" data-k="' + (c.k || '') + 'r">' + (c.r || '') + '</span></div><svg class="aline" viewBox="0 0 ' + w + ' ' + (h + 4) + '" preserveAspectRatio="none" data-k="' + (c.k || '') + '"><path class="fill" d="' + d + 'L' + w + ' ' + h + 'L0 ' + h + 'Z"/><path class="ln" d="' + d + '" pathLength="1"/><circle r="5" cx="' + pts[pts.length - 1][0] + '" cy="' + pts[pts.length - 1][1] + '"/></svg><div class="ax">' + c.l.map(function (l) { return '<span>' + l + '</span>'; }).join('') + '</div></div>';
  }
  function donut(c) {
    var tot = c.v.reduce(function (a, b) { return a + b; }, 0), acc = 0, cols = ['var(--ac)', '#60A5FA', '#A78BFA', '#FBBF24', '#34D399'];
    return '<div class="ac" data-a style="--i:' + (c.i || 0) + '"><div class="ac-h"><b>' + c.t + '</b></div><div class="adon"><svg viewBox="0 0 42 42">' + c.v.map(function (v, i) { var s = '<circle cx="21" cy="21" r="15.9" fill="none" stroke="' + cols[i] + '" stroke-width="6" stroke-dasharray="' + (v / tot * 100).toFixed(1) + ' ' + (100 - v / tot * 100).toFixed(1) + '" stroke-dashoffset="' + (25 - acc).toFixed(1) + '" style="--j:' + i + ';--da:' + (v / tot * 100).toFixed(1) + ' ' + (100 - v / tot * 100).toFixed(1) + '"/>'; acc += v / tot * 100; return s; }).join('') + '</svg><b data-k="' + (c.k || '') + '" data-n="' + c.center + '">' + c.center + '</b></div><ul class="aleg">' + c.l.map(function (l, i) { return '<li><i style="background:' + cols[i] + '"></i>' + l + '<span>' + Math.round(c.v[i] / tot * 100) + '%</span></li>'; }).join('') + '</ul></div>';
  }
  function rows(c) {
    return '<div class="ac" data-a style="--i:' + (c.i || 0) + '"><div class="ac-h"><b>' + c.t + '</b><span class="ac-r">View all</span></div><ul class="arows" data-k="' + (c.k || '') + '">' + c.rows.map(row).join('') + '</ul></div>';
  }
  function row(r) { return '<li data-k="' + (r.k || '') + '"><span class="av">' + (r.av || r.a.split(' ').map(function (w) { return w[0]; }).slice(0, 2).join('')) + '</span><span class="rt"><b>' + r.a + '</b><small>' + r.b + '</small></span>' + (r.v ? '<span class="rv">' + r.v + '</span>' : '') + (r.p ? '<span class="pill ' + PILL[r.c || 'blue'] + '" data-k="' + (r.k || '') + 'p">' + r.p + '</span>' : '') + '</li>'; }
  function needs(c) {
    return '<div class="ac" data-a style="--i:' + (c.i || 0) + '"><div class="ac-h"><b>' + c.t + '</b><span class="ac-badge" data-k="needc" data-n="' + c.items.length + '">' + c.items.length + '</span></div><ul class="aneed">' + c.items.map(function (it) { return '<li data-k="' + it.k + '"><span class="rt"><b>' + it.a + '</b><small>' + it.b + '</small></span><span class="abtn" data-k="' + it.k + 'b">' + (it.btn || 'Approve') + '</span></li>'; }).join('') + '</ul></div>';
  }
  function kanban(c) {
    return '<div class="akan" data-a style="--i:' + (c.i || 0) + '">' + c.cols.map(function (col, ci) {
      return '<div class="akc" data-k="col' + ci + '"><div class="akc-h"><i style="background:' + (col.c || 'var(--ac)') + '"></i>' + col.t + '<span data-k="col' + ci + 'n">' + col.cards.length + '</span></div>' + col.cards.map(function (cd) { return card(cd); }).join('') + '</div>';
    }).join('') + '</div>';
  }
  function card(cd) { return '<div class="akd" data-k="' + (cd.k || '') + '"><b>' + cd.a + '</b><small>' + cd.b + '</small>' + (cd.v ? '<em>' + cd.v + '</em>' : '') + (cd.pr != null ? '<span class="prg"><i style="width:' + cd.pr + '%"></i></span>' : '') + '</div>'; }
  function cal(c) {
    var days = c.days || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    return '<div class="ac" data-a style="--i:' + (c.i || 0) + '"><div class="ac-h"><b>' + c.t + '</b><span class="ac-r">' + (c.r || 'This week') + '</span></div><div class="acal" style="--n:' + days.length + '" data-k="' + (c.k || 'cal') + '"><span></span>' + days.map(function (d) { return '<span class="dh">' + d + '</span>'; }).join('') + c.rows.map(function (r, ri) {
      return '<span class="rl">' + r.l + '</span><span class="rr" style="grid-column:2/span ' + days.length + '" data-k="r' + ri + '">' + r.b.map(function (b) { return blk(b); }).join('') + '</span>';
    }).join('') + '</div></div>';
  }
  function blk(b) { return '<i class="blk ' + (b.c || '') + '" data-k="' + (b.k || '') + '" style="--s:' + b.s + ';--w:' + b.w + '">' + b.t + '</i>'; }
  function check(c) {
    return '<div class="ac" data-a style="--i:' + (c.i || 0) + '"><div class="ac-h"><b>' + c.t + '</b><span class="ac-r" data-k="chkp" data-n="' + c.p + '">' + c.p + '</span></div><span class="prg big"><i data-k="chkbar" style="width:' + parseInt(c.p) + '%"></i></span><ul class="achk">' + c.items.map(function (it, i) { return '<li data-k="ck' + i + '" class="' + (it.d ? 'done' : '') + '"><span class="cb">' + ic('check') + '</span>' + it.t + (it.ph ? '<span class="ph">' + ic('camera') + '</span>' : '') + '</li>'; }).join('') + '</ul></div>';
  }

  /* ---------------- shells ---------------- */
  function desktop(app, v) {
    var nav = app.nav.map(function (n, i) { return '<li class="' + (i === v.nav ? 'on' : '') + '">' + ic(n[1]) + n[0] + (n[2] ? '<em>' + n[2] + '</em>' : '') + '</li>'; }).join('');
    var tabs = v.tabs ? '<div class="atabs"><i class="atab-ind"></i>' + v.tabs.map(function (t, i) { return '<span data-k="tab' + i + '" class="' + (i === (v.tab || 0) ? 'on' : '') + '">' + t + '</span>'; }).join('') + '</div>' : '';
    return '<div class="ad"><aside><div class="ad-brand"><span class="ad-logo" style="background:var(--ac)">' + app.brand[0] + '</span>' + app.brand + '</div><ul>' + nav + '</ul></aside><main><header><span class="ad-search">' + ic('search') + 'Search</span><span class="ad-right">' + ic('bell', 'i bell') + '<span class="av me">' + app.me + '</span></span></header><div class="ad-title"><div><small>' + (v.kicker || '') + '</small><h3>' + v.title + '</h3></div>' + tabs + (v.cta ? '<span class="abtn dark" data-k="cta">' + ic('plus') + v.cta + '</span>' : '') + '</div><div class="ad-body ' + (v.layout || '') + '">' + v.body + '</div></main></div>';
  }
  function tablet(app, v) {
    return '<div class="at"><header><span class="ad-logo" style="background:var(--ac)">' + app.brand[0] + '</span><b>' + v.title + '</b><span class="ad-right">' + ic('bell', 'i bell') + '<span class="av me">' + (v.me || app.me) + '</span></span></header><div class="at-body ' + (v.layout || '') + '">' + v.body + '</div></div>';
  }
  function phone(app, v) {
    return '<div class="ap"><div class="ap-status"><b>9:41</b><span></span></div><div class="ap-head"><small>' + (v.kicker || app.brand) + '</small><h4>' + v.title + '</h4></div><div class="ap-body">' + v.body + '</div><nav class="ap-tab">' + ['home', 'cal', 'bell', 'users'].map(function (n, i) { return '<span class="' + (i === 0 ? 'on' : '') + '">' + ic(n) + '</span>'; }).join('') + '</nav></div>';
  }
  function pcard(c) { return '<div class="pc" data-a style="--i:' + (c.i || 0) + '" data-k="' + (c.k || '') + '">' + (c.icon ? '<span class="pc-ic">' + ic(c.icon) + '</span>' : '') + '<span class="rt"><b>' + c.a + '</b><small data-k="' + (c.k || '') + 's">' + c.b + '</small></span>' + (c.btn ? '<span class="abtn" data-k="' + (c.k || '') + 'b">' + c.btn + '</span>' : ic('chev', 'i cv')) + '</div>'; }
  function pprog(c) { return '<div class="pc col" data-a style="--i:' + (c.i || 0) + '"><span class="rt"><b>' + c.a + '</b><small>' + c.b + '</small></span><span class="pp-row"><span class="prg"><i data-k="pbar" style="width:' + c.p + '%"></i></span><b data-k="ppct" data-n="' + c.p + '%">' + c.p + '%</b></span></div>'; }
  function ptl(c) { return '<ul class="ptl" data-a style="--i:' + (c.i || 0) + '">' + c.items.map(function (t, i) { return '<li data-k="tl' + i + '" class="' + (i < c.done ? 'done' : i === c.done ? 'now' : '') + '"><span></span>' + t + '</li>'; }).join('') + '</ul>'; }

  var R = { kpis: kpis, bars: bars, line: line, donut: donut, rows: rows, needs: needs, kanban: kanban, cal: cal, check: check, pcard: pcard, pprog: pprog, ptl: ptl };
  function build(parts) { return parts.map(function (p) { return R[p[0]](p[1]); }).join(''); }

  /* ---------------- device instance ---------------- */
  function Device(host, app, kind) {
    var scr = host.querySelector('.scr'), W = SIZE[kind][0], H = +(host.getAttribute('data-h') || SIZE[kind][1]);
    var vp = document.createElement('div'); vp.className = 'avp ' + kind; vp.style.width = W + 'px'; vp.style.height = H + 'px'; vp.style.setProperty('--ac', app.accent); scr.appendChild(vp);
    var ptr = document.createElement('i'); ptr.className = kind === 'desktop' ? 'apt cur' : 'apt tap'; if (kind === 'desktop') ptr.innerHTML = '<svg viewBox="0 0 24 24"><path d="M5 3l14 8-6.2 1.6L16 20l-2.6 1.2-3.2-7.4L5 18z" fill="#fff" stroke="#0F172A" stroke-width="1.4" stroke-linejoin="round"/></svg>';
    var notif = document.createElement('div'); notif.className = 'anotif'; notif.innerHTML = '<span class="ad-logo" style="background:' + app.accent + '">' + app.brand[0] + '</span><span class="rt"><b></b><small></small></span>';
    var toast = document.createElement('div'); toast.className = 'atoast';
    var cur = -1, views = app[kind];
    function mount(i, instant) {
      cur = i; var v = views[i], html = kind === 'desktop' ? desktop(app, v) : kind === 'tablet' ? tablet(app, v) : phone(app, v);
      vp.innerHTML = html; vp.appendChild(ptr); vp.appendChild(notif); vp.appendChild(toast);
      var ind = vp.querySelector('.atab-ind'), on = vp.querySelector('.atabs .on'); if (ind && on) { ind.style.left = on.offsetLeft + 'px'; ind.style.width = on.offsetWidth + 'px'; }
      $$('[data-n]', vp).forEach(function (n) { var t = n.getAttribute('data-n'); var p = parse(t); if (p && !instant) { n.textContent = fmt(p, 0); count(n, t, 1100, fmt(p, 0)); } });
      if (instant || reduce) vp.classList.add('in'); else { vp.classList.remove('in'); void vp.offsetWidth; requestAnimationFrame(function () { vp.classList.add('in'); }); }
    }
    function fit() {
      var b = scr.getBoundingClientRect(); if (!b.width) return;
      if (host.classList.contains('dimac')) { vp.style.transform = imacMatrix(host, W, H); }
      else { var s = Math.min(b.width / W, b.height / H); vp.style.transform = 'scale(' + s + ')'; }
    }
    function q(k) { return vp.querySelector('[data-k="' + k + '"]'); }
    function point(k) { var e = typeof k === 'string' ? q(k) : k; if (!e) return null; return [e.offsetLeft + e.offsetWidth / 2 + offX(e), e.offsetTop + e.offsetHeight / 2 + offY(e)]; }
    function offX(e) { var x = 0; e = e.offsetParent; while (e && e !== vp) { x += e.offsetLeft; e = e.offsetParent; } return x; }
    function offY(e) { var y = 0; e = e.offsetParent; while (e && e !== vp) { y += e.offsetTop; e = e.offsetParent; } return y; }
    var api = {
      kind: kind, mount: mount, fit: fit, q: q,
      press: function (k) { var p = point(k); if (!p) return wait(0); ptr.style.left = p[0] + 'px'; ptr.style.top = p[1] + 'px'; ptr.classList.add('on'); if (kind !== 'desktop') { ptr.classList.remove('go'); void ptr.offsetWidth; ptr.classList.add('go'); } var e = q(k); return wait(kind === 'desktop' ? 750 : 380).then(function () { ptr.classList.add('click'); if (e) { e.classList.add('pressed'); setTimeout(function () { e.classList.remove('pressed'); }, 260); } return wait(220); }).then(function () { ptr.classList.remove('click'); if (kind !== 'desktop') ptr.classList.remove('on'); }); },
      park: function () { ptr.classList.remove('on'); },
      num: function (k, v) { var e = q(k); if (e) { e.classList.add('flash'); setTimeout(function () { e.classList.remove('flash'); }, 900); count(e, v); } },
      text: function (k, v) { var e = q(k); if (e) { e.classList.add('flash'); e.textContent = v; setTimeout(function () { e.classList.remove('flash'); }, 900); } },
      pill: function (k, t, c) { var e = q(k); if (!e) return; e.className = 'pill ' + PILL[c || 'green'] + ' pop'; e.textContent = t; setTimeout(function () { e.classList.remove('pop'); }, 450); },
      btnDone: function (k, t) { var e = q(k); if (!e) return; e.classList.add('done'); e.innerHTML = ic('check') + (t || 'Approved'); },
      remove: function (k) { var e = q(k); if (!e) return; e.style.height = e.offsetHeight + 'px'; e.classList.add('out'); setTimeout(function () { e.style.height = '0px'; e.style.paddingTop = e.style.paddingBottom = '0'; e.style.marginTop = e.style.marginBottom = '0'; }, 200); setTimeout(function () { e.remove(); }, 650); },
      addRow: function (listK, r) { var l = q(listK); if (!l) return; l.insertAdjacentHTML('afterbegin', row(r)); var n = l.firstElementChild; n.classList.add('new'); setTimeout(function () { n.classList.remove('new'); }, 1200); },
      addCard: function (colK, cd) { var c = q(colK); if (!c) return; c.querySelector('.akc-h').insertAdjacentHTML('afterend', card(cd)); var n = c.querySelector('.akd'); n.classList.add('new'); setTimeout(function () { n.classList.remove('new'); }, 1200); var cn = q(colK + 'n'); if (cn) count(cn, String(c.querySelectorAll('.akd').length)); },
      moveCard: function (k, toK) { var c = q(k), to = q(toK); if (!c || !to) return; var from = c.parentNode, ax = c.offsetLeft + offX(c), ay = c.offsetTop + offY(c); to.querySelector('.akc-h').after(c); var bx = c.offsetLeft + offX(c), by = c.offsetTop + offY(c); c.style.transition = 'none'; c.style.transform = 'translate(' + (ax - bx) + 'px,' + (ay - by) + 'px) rotate(-2deg)'; c.style.boxShadow = '0 18px 30px rgba(15,23,42,.2)'; void c.offsetWidth; c.style.transition = 'transform .7s cubic-bezier(.2,.8,.2,1), box-shadow .7s'; c.style.transform = ''; c.style.boxShadow = ''; [from, to].forEach(function (col) { var n = col.querySelector('.akc-h span'); if (n) count(n, String(col.querySelectorAll('.akd').length)); }); },
      addBlock: function (rowK, b) { var r = q(rowK); if (!r) return; r.insertAdjacentHTML('beforeend', blk(b)); var n = r.lastElementChild; n.classList.add('new'); },
      bar: function (k, pct) { var e = q(k); if (e) e.style.width = pct + '%'; },
      grow: function (k, pct) { var e = q(k); if (!e) return; var l = e.querySelector('[data-last]'); if (l) { l.style.setProperty('--h', pct + '%'); l.parentNode.classList.add('hi'); } },
      lineTo: function (k, vals) { var s = q(k); if (!s) return; var w = 600, h = 170, mx = Math.max.apply(0, vals) * 1.1, pts = vals.map(function (y, i) { return [i * w / (vals.length - 1), h - y / mx * h]; }), d = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1); }).join(''); s.querySelector('.ln').setAttribute('d', d); s.querySelector('.fill').setAttribute('d', d + 'L' + w + ' ' + h + 'L0 ' + h + 'Z'); var c = s.querySelector('circle'); c.setAttribute('cx', pts[pts.length - 1][0]); c.setAttribute('cy', pts[pts.length - 1][1]); s.classList.remove('draw'); void s.offsetWidth; s.classList.add('draw'); },
      check: function (i) { var e = q('ck' + i); if (e) e.classList.add('done'); },
      tl: function (i) { var e = q('tl' + i); if (!e) return; e.className = 'done'; var n = q('tl' + (i + 1)); if (n) n.className = 'now'; },
      tab: function (i) { var t = q('tab' + i), ind = vp.querySelector('.atab-ind'); if (!t) return; $$('.atabs span', vp).forEach(function (s) { s.classList.remove('on'); }); t.classList.add('on'); if (ind) { ind.style.left = t.offsetLeft + 'px'; ind.style.width = t.offsetWidth + 'px'; } },
      notify: function (t, b) { notif.querySelector('b').textContent = t; notif.querySelector('small').textContent = b; notif.classList.remove('on'); void notif.offsetWidth; notif.classList.add('on'); setTimeout(function () { notif.classList.remove('on'); }, 3000); },
      toast: function (t) { toast.textContent = t; toast.classList.remove('on'); void toast.offsetWidth; toast.classList.add('on'); setTimeout(function () { toast.classList.remove('on'); }, 2400); },
      view: function (i) { mount(i); return wait(500); }
    };
    return api;
  }

  /* iMac: map the flat screen onto the perspective screen of the photo (homography -> matrix3d) */
  var IMAC_Q = [[226.5, 359.5], [1458, 147], [1435.5, 1016], [162, 1063.5]], IMAC_W = 1640;
  function imacMatrix(host, W, H) {
    var k = host.getBoundingClientRect().width / IMAC_W, q = IMAC_Q.map(function (p) { return [p[0] * k, p[1] * k]; });
    var src = [[0, 0], [W, 0], [W, H], [0, H]], A = [], B = [];
    for (var i = 0; i < 4; i++) { var x = src[i][0], y = src[i][1], X = q[i][0], Y = q[i][1]; A.push([x, y, 1, 0, 0, 0, -X * x, -X * y]); B.push(X); A.push([0, 0, 0, x, y, 1, -Y * x, -Y * y]); B.push(Y); }
    var h = solve(A, B); // a b c d e f g h
    return 'matrix3d(' + [h[0], h[3], 0, h[6], h[1], h[4], 0, h[7], 0, 0, 1, 0, h[2], h[5], 0, 1].map(function (n) { return n.toFixed(10); }).join(',') + ')';
  }
  function solve(A, B) { var n = B.length, M = A.map(function (r, i) { return r.concat([B[i]]); }); for (var c = 0; c < n; c++) { var p = c; for (var r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r; var t = M[c]; M[c] = M[p]; M[p] = t; for (r = 0; r < n; r++) if (r !== c) { var f = M[r][c] / M[c][c]; for (var k = c; k <= n; k++) M[r][k] -= f * M[c][k]; } } return M.map(function (r, i) { return r[n] / r[i]; }); }

  /* ---------------- scenes ---------------- */
  function Scene(root, app) {
    var devs = {};
    $$('[data-dev]', root).forEach(function (h) { var k = h.getAttribute('data-dev'); devs[k] = Device(h, app, k); devs[k].mount(app.start && app.start[k] || 0, true); });
    var steps = $$('[data-step]', root), running = false, paused = reduce, vis = false, gen = 0;
    function fitAll() { Object.keys(devs).forEach(function (k) { devs[k].fit(); }); }
    function mark(i) { steps.forEach(function (s, j) { s.classList.toggle('on', j === i); s.classList.toggle('done', j < i); }); }
    async function loop() {
      if (running) return; running = true; var my = ++gen;
      while (vis && !paused && my === gen) {
        Object.keys(devs).forEach(function (k) { devs[k].mount(app.start && app.start[k] || 0); });
        await wait(1400);
        for (var i = 0; i < app.script.length && vis && !paused && my === gen; i++) {
          mark(i); await app.script[i](devs, wait); await wait(1200);
        }
        Object.keys(devs).forEach(function (k) { devs[k].park(); });
        await wait(1800);
      }
      running = false;
    }
    var btn = root.querySelector('.app-pause');
    if (btn) { if (reduce) btn.hidden = true; btn.addEventListener('click', function () { paused = !paused; btn.setAttribute('aria-pressed', paused); btn.querySelector('span').textContent = paused ? 'Play' : 'Pause'; if (!paused) loop(); else gen++; }); }
    steps.forEach(function (s, i) { s.addEventListener('click', async function () { paused = true; gen++; if (btn) { btn.setAttribute('aria-pressed', 'true'); btn.querySelector('span').textContent = 'Play'; } running = false; Object.keys(devs).forEach(function (k) { devs[k].mount(app.start && app.start[k] || 0, true); }); for (var j = 0; j < i; j++) await app.script[j](devs, function () { return Promise.resolve(); }); mark(i); app.script[i](devs, wait); }); });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) { fitAll(); loop(); } else gen++; }, { threshold: .25 }).observe(root); else { vis = true; loop(); }
    var ro = 'ResizeObserver' in window ? new ResizeObserver(fitAll) : null; if (ro) ro.observe(root); else window.addEventListener('resize', fitAll);
    setTimeout(fitAll, 50); fitAll();
    return { devs: devs };
  }

  window.ConnectasApp = { Scene: Scene, build: build };
  document.addEventListener('DOMContentLoaded', function () {
    var A = window.CONNECTAS_APPS || {};
    $$('[data-app]').forEach(function (root) { var a = A[root.getAttribute('data-app')]; if (a) Scene(root, a); });
  });
})();
