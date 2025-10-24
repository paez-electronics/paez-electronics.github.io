/**
 * idiomas-marcas.js
 * Lógica para la funcionalidad de cambio de idioma (ES/EN) para la página Marcas
 */

// 1. Definición de textos traducibles
const translations = {
    // TÍTULO DE LA PÁGINA
    marcas_titulo_pagina: { es: 'Nuestras Marcas | Paez Electronics', en: 'Our Brands | Paez Electronics' },
    
    // ENCABEZADO Y NAVEGACIÓN
    // CLAVE ELIMINADA: home_nav_marcas
    marcas_nav: { es: 'Marcas', en: 'Brands' },
    contacto_nav: { es: 'Contacto', en: 'Contact' },
    cotizar_nav_header: { es: 'Cotizar', en: 'Get Quote' }, 

    // PORTADA
    portada_titulo: { es: 'Componentes de \nCalidad Certificada', en: 'Certified Quality \nComponents' },
    portada_subtitulo: { es: 'Trabajamos solo con marcas líderes globales, sinónimo de fiabilidad y rendimiento industrial.', en: 'We work only with leading global brands, synonymous with industrial reliability and performance.' },
    portada_cta: { es: 'Ver Catálogo Completo', en: 'View Full Catalog' },

    // SECCIÓN MARCAS (Títulos)
    marcas_lista_titulo: { es: 'Catálogo de Marcas Aliadas', en: 'Allied Brands Catalog' },
    marcas_lista_subtitulo: { es: 'Componentes seleccionados por su alta calidad y reconocimiento internacional en el sector.', en: 'Components selected for their high quality and international recognition in the sector.' },
    
    // DESCRIPCIONES DE MARCAS
    chint_desc: { es: 'Líder mundial en la fabricación de equipos de bajo voltaje, media y alta tensión, y soluciones de energía solar. Sinónimo de innovación y seguridad eléctrica.', en: 'Global leader in the manufacture of low, medium, and high voltage equipment, and solar energy solutions. Synonymous with innovation and electrical safety.' },
    ebchq_desc: { es: 'Especialistas en la protección de sistemas eléctricos y automatización. Sus productos ofrecen fiabilidad y precisión para entornos industriales exigentes.', en: 'Specialists in the protection of electrical systems and automation. Their products offer reliability and precision for demanding industrial environments.' },
    autonics_desc: { es: 'Proporciona soluciones integrales de automatización que incluyen sensores, controladores de temperatura y medidores de alto rendimiento para el control de procesos.', en: 'Provides comprehensive automation solutions including high-performance sensors, temperature controllers, and meters for process control.' },
    onka_desc: { es: 'Fábrica de terminales de conexión, bornes y accesorios para tableros eléctricos. Calidad enfocada en la organización y seguridad del cableado industrial.', en: 'Manufacturer of connection terminals, busbars, and accessories for electrical panels. Quality focused on organization and safety of industrial wiring.' },
    ls_desc: { es: 'Ofrece una amplia gama de soluciones eléctricas y de automatización, desde PLCs y variadores de frecuencia hasta equipos de distribución de energía.', en: 'Offers a wide range of electrical and automation solutions, from PLCs and frequency inverters to power distribution equipment.' },
    andeli_desc: { es: 'Fabricante de componentes eléctricos y equipos de distribución, destacando en interruptores, contactores y relés para aplicaciones de control industrial.', en: 'Manufacturer of electrical components and distribution equipment, excelling in switches, contactors, and relays for industrial control applications.' },
    exceline_desc: { es: 'Conocidos por sus protectores de voltaje y dispositivos de monitoreo, brindando protección esencial para equipos sensibles en ambientes industriales y comerciales.', en: 'Known for their voltage protectors and monitoring devices, providing essential protection for sensitive equipment in industrial and commercial environments.' },
    schneider_desc: { es: 'Líder global en la transformación digital de la gestión de la energía y la automatización. Sus soluciones optimizan la eficiencia y sostenibilidad industrial.', en: 'Global leader in the digital transformation of energy management and automation. Their solutions optimize industrial efficiency and sustainability.' },
    totalquality_desc: { es: 'Firma especializada en herramientas y accesorios que cumplen con los más altos estándares de calidad, necesarios para el mantenimiento y montaje de sistemas de control.', en: 'Firm specialized in tools and accessories that meet the highest quality standards, necessary for the maintenance and assembly of control systems.' },

    // PIE DE PÁGINA
    pie_info_titulo: { es: 'Paez Electronics LLC', en: 'Paez Electronics LLC' },
    pie_info_texto: { es: 'Especialistas en soluciones de Automatización Industrial y Control de Procesos.', en: 'Specialists in Industrial Automation and Process Control solutions.' },
    pie_enlaces_titulo: { es: 'Enlaces Rápidos', en: 'Quick Links' },
    pie_enlaces_marcas: { es: 'Marcas', en: 'Brands' },
    pie_enlaces_contacto: { es: 'Contacto', en: 'Contact' },
    pie_enlaces_cotizar: { es: 'Cotizar', en: 'Get Quote' },
    pie_social_titulo: { es: 'Síguenos', en: 'Follow Us' },
    pie_copyright: { es: '© 2025 Paez Electronics LLC. Todos los derechos reservados.', en: '© 2025 Paez Electronics LLC. All rights reserved.' },
};

// ** Importante: Reutilizamos la lógica del archivo anterior para la inicialización **

const setLanguage = (lang) => {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
             // Reemplaza \n (salto de línea) si lo encuentras en la traducción
            el.textContent = translations[key][lang].replace('\\n', '\n');
            // Si el elemento es un título (h1, h2) y contiene \n, ajusta su estilo 
            if (el.tagName === 'H1' && el.textContent.includes('\n')) {
                 el.style.whiteSpace = 'pre-line'; // Permite el salto de línea en el HTML
            }
        }
    });

    document.documentElement.lang = lang;
    
    // Actualizar el título de la página (usando la clave en el DOM)
    const title = document.querySelector('title');
    const titleKey = title ? title.getAttribute('data-key') : null;
    if (titleKey && translations[titleKey] && translations[titleKey][lang]) {
         document.title = translations[titleKey][lang];
    }
    
    document.querySelectorAll('.lang-btn').forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    localStorage.setItem('lang', lang);
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica para clonar el selector de idioma en el menú móvil
    const navIdiomasItem = document.querySelector('.nav-idiomas-item-movil');
    if (navIdiomasItem) {
        // Asegúrate de usar el selector de idioma de la página de Marcas (o el que se usa en Index.html)
        const selectorEnHeader = document.querySelector('.encabezado-principal .selector-idioma');
        if (selectorEnHeader) {
            const langSelectorClone = selectorEnHeader.cloneNode(true);
            langSelectorClone.querySelector('#btn-es')?.removeAttribute('id');
            langSelectorClone.querySelector('#btn-en')?.removeAttribute('id');
            navIdiomasItem.appendChild(langSelectorClone);
        }
        
        // ** Ocultar el item del menú móvil si es ESCRITORIO **
        if (window.innerWidth > 900) {
            navIdiomasItem.style.display = 'none'; 
        }
    }
    
    // Inicializar la preferencia guardada o usar Español ('es') por defecto
    const storedLang = localStorage.getItem('lang') || 'es';
    setLanguage(storedLang); 

    // Event Listeners para los botones de idioma (en ambos selectores, original y clonado)
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const newLang = e.target.getAttribute('data-lang');
            if (newLang) {
                setLanguage(newLang);
            }
        });
    });

    // Ajuste de Responsive para el selector de idioma
    window.addEventListener('resize', () => {
        if (navIdiomasItem) {
            if (window.innerWidth > 900) {
                navIdiomasItem.style.display = 'none';
            } else {
                navIdiomasItem.style.display = 'block'; 
            }
        }
    });
});