document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links-mobile');
    
    if (!burger || !navLinks) return;
    
    // Handle scroll background change
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 20) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Toggle mobile menu on burger click
    burger.addEventListener('click', function(e) {
        e.stopPropagation();
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});
