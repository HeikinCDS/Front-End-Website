(function faqAccordion() {
    const list = document.getElementById('faqList');
    list.addEventListener('click', function (e) {
        const btn = e.target.closest('.faq-question');
        if (!btn) return;
        const item = btn.parentElement;
        const expanded = item.getAttribute('aria-expanded') === 'true';
        list.querySelectorAll('.faq-item').forEach(function (it) {
            it.setAttribute('aria-expanded', 'false');
            const b = it.querySelector('.faq-question');
            if (b) b.setAttribute('aria-expanded', 'false');
        });
        item.setAttribute('aria-expanded', String(!expanded));
        btn.setAttribute('aria-expanded', String(!expanded));
    });
    list.querySelectorAll('.faq-question').forEach(function (q) {
        q.addEventListener('keydown', function (ev) {
            if (ev.key === 'Enter' || ev.key === ' ') {
                ev.preventDefault();
                q.click();
            }
        });
    });
})();