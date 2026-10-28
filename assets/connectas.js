(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Reveal on scroll */
  var targets = document.querySelectorAll('.rv, .stage, .steps');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add('in'); });
  }
  /* Safety net: never leave content hidden */
  setTimeout(function () { targets.forEach(function (t) { t.classList.add('in'); }); }, 4000);

  /* Hero video */
  var vid = document.querySelector('.hero-media video');
  if (vid) {
    if (reduce) { vid.removeAttribute('autoplay'); vid.pause(); }
    else { var p = vid.play && vid.play(); if (p && p.catch) p.catch(function () {}); }
  }

  /* Rotating lead notification in hero */
  var leads = [
    ['Instagram DM', 'Maria Ortiz · kitchen remodel'],
    ['Website form', 'Reed Co. · annual service plan'],
    ['Google search', 'Harbor Dental · new office'],
    ['WhatsApp', 'Daniel Brooks · quote request']
  ];
  var txt = document.querySelector('.fc-lead .txt');
  if (txt && !reduce) {
    var li = 0;
    setInterval(function () {
      li = (li + 1) % leads.length;
      txt.classList.add('swap');
      setTimeout(function () {
        txt.querySelector('small').textContent = 'New lead · ' + leads[li][0];
        txt.querySelector('b').textContent = leads[li][1];
        txt.classList.remove('swap');
      }, 400);
    }, 3200);
  }

  /* Platform tabs with autoplay */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  if (tabs.length) {
    var DUR = 6000, timer = null, auto = !reduce, visible = false, idx = 0;
    function select(i, focus) {
      idx = i;
      tabs.forEach(function (t, j) {
        var on = j === i;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
        var pr = t.querySelector('.prog');
        if (pr) { pr.classList.remove('run'); void pr.offsetWidth; if (on && auto && visible) pr.classList.add('run'); }
      });
      if (focus) tabs[i].focus();
      var list = tabs[i].parentNode;
      if (list.scrollWidth > list.clientWidth) list.scrollTo({ left: tabs[i].offsetLeft - 20, behavior: reduce ? 'auto' : 'smooth' });
      schedule();
    }
    function schedule() {
      clearTimeout(timer);
      if (auto && visible) timer = setTimeout(function () { select((idx + 1) % tabs.length); }, DUR);
    }
    function stopAuto() {
      auto = false; clearTimeout(timer);
      tabs.forEach(function (t) { var pr = t.querySelector('.prog'); if (pr) pr.classList.remove('run'); });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { stopAuto(); select(i); });
      t.addEventListener('keydown', function (e) {
        var n = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = (i + 1) % tabs.length;
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length;
        if (n !== null) { e.preventDefault(); stopAuto(); select(n, true); }
      });
    });
    document.querySelectorAll('[data-go]').forEach(function (a) {
      a.addEventListener('click', function () {
        var k = tabs.map(function (t) { return t.id; }).indexOf('t-' + a.getAttribute('data-go'));
        if (k > -1) { stopAuto(); select(k); }
      });
    });
    var eco = document.getElementById('platform');
    if ('IntersectionObserver' in window && eco) {
      new IntersectionObserver(function (es) {
        visible = es[0].isIntersecting;
        if (visible) select(idx); else clearTimeout(timer);
      }, { threshold: 0.3 }).observe(eco);
    }
  }

  /* Contact form: opens the visitor's e-mail app with the message filled in */
  var form = document.getElementById('lead-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = document.getElementById('form-note');
      if (!form.checkValidity()) {
        note.className = 'note full';
        note.textContent = 'Please add your first name and a valid work email.';
        return;
      }
      var f = form.elements;
      var body = 'Name: ' + f.first.value + ' ' + f.last.value + '\nEmail: ' + f.email.value + '\nCompany: ' + f.company.value + '\nTeam size: ' + f.size.value + '\n\n' + f.message.value;
      var href = 'mailto:' + form.getAttribute('data-to') + '?subject=' + encodeURIComponent('Discovery call request · ' + (f.company.value || f.first.value)) + '&body=' + encodeURIComponent(body);
      window.location.href = href;
      note.className = 'ok full';
      note.textContent = 'Your email app should open with your message. Press send and we will reply within two business days. If nothing opened, write to info@connectasconsulting.com.';
    });
  }

  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();
})();
