document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.navegacion-principal');
    // Seleccionamos todos los enlaces *dentro* del nav para que cierren el menú
    const navLinks = navMenu.querySelectorAll('a'); 
    
    const toggleMenu = () => {
        navMenu.classList.toggle('menu-activo');
        menuToggle.classList.toggle('menu-activo');
    };

    // 1. Abre/Cierra el menú al hacer clic en el botón hamburguesa
    menuToggle.addEventListener('click', toggleMenu);

    // 2. Cierra el menú cuando se hace clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', toggleMenu); 
    });

    // 3. Cierra el menú si se redimensiona la ventana a tamaño de escritorio
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            navMenu.classList.remove('menu-activo');
            menuToggle.classList.remove('menu-activo');
        }
    });
});