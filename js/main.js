// Общ скрипт за всички страници
(function () {
  // Мобилно меню
  var nav = document.querySelector('nav');
  var btn = document.querySelector('.menu-btn');
  if (nav && btn) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.textContent = open ? '✕' : '☰';
    });
    nav.querySelectorAll('ul a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = '☰';
      });
    });
  }

  // Елементи, които се анимират при скрол
  var targets = [];
  var sw = document.querySelector('.swatches');
  if (sw) targets.push(sw);
  document.querySelectorAll('.chip').forEach(function (el, i) {
    el.style.setProperty('--d', (i * 0.15) + 's');
    targets.push(el);
  });
  document.querySelectorAll('.card, .steps li, .figure, .details-list details').forEach(function (el) {
    if (el.closest('.swatches')) return;
    // малко закъснение между съседни елементи
    var i = Array.prototype.indexOf.call(el.parentNode.children, el);
    el.style.setProperty('--d', Math.min(i, 5) * 0.08 + 's');
    el.classList.add('reveal');
    targets.push(el);
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function (el) { io.observe(el); });
})();
