document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('#burger');  // Your button!
    const navMenu = document.querySelector('nav ul');  // Common nav selector
    
    if (burger && navMenu) {
        burger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }
});
