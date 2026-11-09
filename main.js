(function () {
    'use strict';
    var targets = document.querySelectorAll('.int, .tech, .interest .row, .m, .me .portfolio');
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) { en.target.classList.add('show'); io.unobserve(en.target); }
            });
        }, { threshold: 0.12 });
        targets.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
    }

})();
