(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  /* Jittered display type, Swerve style */
  Array.prototype.forEach.call(document.querySelectorAll('[data-jitter]'), function (h) {
    var text = h.textContent.trim(), seed = 7;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    h.setAttribute('aria-label', text);
    h.innerHTML = text.split(' ').map(function (w) {
      return '<span class="jw" aria-hidden="true">' + w.split('').map(function (c) {
        var y = (rnd() - .5) * .22, r = (rnd() - .5) * 5;
        return '<span class="j" style="--jy:' + y.toFixed(3) + 'em;--jr:' + r.toFixed(2) + 'deg">' + c + '</span>';
      }).join('') + '</span>';
    }).join(' ');
    if (fine && !reduce) {
      h.addEventListener('mouseenter', function () { h.classList.add('settle'); });
      h.addEventListener('mouseleave', function () { h.classList.remove('settle'); });
    }
  });
  /* Frosted hexagon drifts with the mouse */
  var hex = document.querySelector('.sw-hex'), hero = document.querySelector('.swhero');
  if (hex && hero && fine && !reduce) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      hex.style.transform = 'translate(' + (x * -60) + 'px,' + (y * -40) + 'px) rotate(' + (x * 12) + 'deg)';
    });
  }
  var v = document.querySelector('.swhero-video');
  if (v && reduce) { v.removeAttribute('autoplay'); v.pause(); }
  /* Contact page: carry the pill text into the form */
  var q = new URLSearchParams(location.search).get('q'), d = document.getElementById('c-details');
  if (q && d && !d.value) d.value = q;
})();
