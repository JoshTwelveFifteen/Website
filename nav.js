document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            nav.classList.toggle('scrolled', window.scrollY > 40);
        });
    }
});
