document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.navegacion-principal');
    const navLinks = navMenu.querySelectorAll('a'); 
    
    const toggleMenu = () => {
        navMenu.classList.toggle('menu-activo');
        menuToggle.classList.toggle('menu-activo');
    };

    menuToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu); 
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            navMenu.classList.remove('menu-activo');
            menuToggle.classList.remove('menu-activo');
        }
    });
});