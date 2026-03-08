document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('#burger');
    const navLinks = document.querySelector('.nav-links');  // ← YOUR MENU!
    
    if (burger && navLinks) {
        burger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
        });
        
        // Close when clicking CTA or outside
        document.querySelector('.nav-cta')?.addEventListener('click', function() {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    }
});
