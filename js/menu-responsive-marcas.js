document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar los elementos clave
    const menuToggle = document.querySelector('.menu-toggle'); // El botón hamburguesa
    const navPrincipal = document.querySelector('.navegacion-principal'); // El contenedor del menú
    const body = document.body; // El cuerpo del documento

    // 2. Función para alternar el estado del menú
    const toggleMenu = () => {
        // Alterna la clase 'menu-activo' en el botón toggle (para animación X)
        menuToggle.classList.toggle('menu-activo');
        
        // Alterna la clase 'menu-activo' en el contenedor de navegación (para mostrar/ocultar)
        navPrincipal.classList.toggle('menu-activo');
        
        // Alterna la clase 'no-scroll' en el body para bloquear el desplazamiento del fondo
        body.classList.toggle('no-scroll');
    };

    // 3. Escuchar el evento click en el botón hamburguesa
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }
    
    // 4. Cierre del menú al hacer clic en un enlace (solo en móvil)
    // Seleccionamos todos los enlaces dentro de la navegación principal
    const navLinks = navPrincipal ? navPrincipal.querySelectorAll('a') : [];
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Comprobamos si el menú está activo antes de cerrarlo
            if (navPrincipal.classList.contains('menu-activo')) {
                // Cerramos el menú y desbloqueamos el scroll del body
                menuToggle.classList.remove('menu-activo');
                navPrincipal.classList.remove('menu-activo');
                body.classList.remove('no-scroll');
            }
        });
    });
});