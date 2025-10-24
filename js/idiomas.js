/**
 * idiomas.js
 * Lógica para la funcionalidad de cambio de idioma (ES/EN)
 */

// 1. Definición de textos traducibles
const translations = {
    // Clave: { es: 'Texto en Español', en: 'Texto en Inglés' }
    
    // ENCABEZADO Y NAVEGACIÓN
    marcas_nav: { es: 'Marcas', en: 'Brands' },
    contacto_nav: { es: 'Contacto', en: 'Contact' },
    cotizar_nav_header: { es: 'Cotizar', en: 'Get Quote' }, 

    // PORTADA
    portada_titulo: { es: 'Lideres en Control Industrial y Soluciones', en: 'Leaders in Industrial Control and Solutions' },
    portada_subtitulo: { es: 'Paez Electronics LLC: Transformando procesos con tecnología de automatización de vanguardia.', en: 'Paez Electronics LLC: Transforming processes with cutting-edge automation technology.' },
    portada_cta: { es: 'Empieza a Optimizar Hoy', en: 'Start Optimizing Today' },

    // SECCIÓN MARCAS
    marcas_titulo: { es: 'Trabajamos con las Marcas Líderes Globales', en: 'We Work with Global Leading Brands' },
    marcas_subtitulo: { es: 'Solo integramos componentes de alta calidad y reconocimiento internacional.', en: 'We only integrate high-quality, internationally recognized components.' },
    marcas_ver_mas: { es: 'Ver mas', en: 'See More' },
    
    // SECCIÓN CTA
    cta_titulo: { es: '¿Listo para Automatizar tu Negocio?', en: 'Ready to Automate Your Business?' },
    cta_subtitulo: { es: 'Describe tu proyecto o necesidad específica para recibir una propuesta personalizada y sin compromiso.', en: 'Describe your specific project or need to receive a personalized, no-obligation proposal.' },
    cta_btn: { es: 'Solicitar Cotización Detallada', en: 'Request Detailed Quote' },

    // SECCIÓN TESTIMONIOS 
    testimonios_titulo: { es: 'Lo que Dicen Nuestros Clientes', en: 'What Our Clients Say' },
    
    // Testimonio 1
    testimonio_1_cita: { es: '"La migración del sistema SCADA fue impecable. Paez Electronics demostró un conocimiento técnico superior y cumplió con los plazos."', en: '"The SCADA system migration was flawless. Paez Electronics demonstrated superior technical knowledge and met all deadlines."' },
    testimonio_1_nombre: { es: 'Ing. Luis R.', en: 'Eng. Luis R.' },
    testimonio_1_cargo: { es: 'Director de Operaciones, Planta Petroquímica', en: 'Operations Director, Petrochemical Plant' },

    // Testimonio 2
    testimonio_2_cita: { es: '"Mejoraron la eficiencia de nuestra línea de empaque en un 20% gracias a la implementación robótica. Excelente soporte post-venta."', en: '"They improved the efficiency of our packaging line by 20% thanks to robotic implementation. Excellent post-sales support."' },
    testimonio_2_nombre: { es: 'Ana M.', en: 'Ana M.' },
    testimonio_2_cargo: { es: 'Gerente de Producción, Sector Alimentos', en: 'Production Manager, Food Sector' },

    // Testimonio 3
    testimonio_3_cita: { es: '"El suministro de equipos de control siempre es rápido y confiable. Son nuestro proveedor de confianza desde hace años."', en: '"The supply of control equipment is always fast and reliable. They have been our trusted supplier for years."' },
    testimonio_3_nombre: { es: 'Javier S.', en: 'Javier S.' },
    testimonio_3_cargo: { es: 'Jefe de Compras, Fabricación de Maquinaria', en: 'Purchasing Manager, Machinery Manufacturing' },


    // PIE DE PÁGINA
    pie_info_titulo: { es: 'Paez Electronics LLC', en: 'Paez Electronics LLC' },
    pie_info_texto: { es: 'Especialistas en soluciones de Automatización Industrial y Control de Procesos.', en: 'Specialists in Industrial Automation and Process Control solutions.' },
    pie_enlaces_titulo: { es: 'Enlaces Rápidos', en: 'Quick Links' },
    pie_enlaces_marcas: { es: 'Marcas', en: 'Brands' },
    pie_enlaces_contacto: { es: 'Contacto', en: 'Contact' },
    pie_enlaces_cotizar: { es: 'Cotizar', en: 'Get Quote' },
    pie_social_titulo: { es: 'Síguenos', en: 'Follow Us' },
    pie_copyright: { es: '© 2025 Paez Electronics. Todos los derechos reservados.', en: '© 2025 Paez Electronics. All rights reserved.' },
};

// 2. Función principal de traducción
const setLanguage = (lang) => {
    // 1. Traducir elementos con data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
            el.textContent = translations[key][lang];
        }
    });

    // 2. Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;
    
    // 3. Actualizar el título de la página
    if (lang === 'es') {
        document.title = 'Paez Electronics | Automatización y Control Industrial';
    } else {
        document.title = 'Paez Electronics | Industrial Automation and Control';
    }

    // 4. Actualizar botones activos (se aplica a todos los selectores de idioma en el DOM)
    document.querySelectorAll('.lang-btn').forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    localStorage.setItem('lang', lang);
};


// 3. Inicialización y Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    
    // a. Clonar el selector de idioma en el menú móvil
    const navIdiomasItem = document.querySelector('.nav-idiomas-item-movil');
    
    if (navIdiomasItem) {
        const originalSelector = document.querySelector('.selector-idioma');
        if (originalSelector) {
            const langSelectorClone = originalSelector.cloneNode(true);
            langSelectorClone.querySelector('#btn-es')?.removeAttribute('id');
            langSelectorClone.querySelector('#btn-en')?.removeAttribute('id');
            
            navIdiomasItem.appendChild(langSelectorClone);
        }
    }
    
    // b. Inicializar la preferencia guardada o usar Español ('es') por defecto
    const storedLang = localStorage.getItem('lang') || 'es';
    setLanguage(storedLang); 

    // c. Event Listeners para los botones (usando el DOMContentLoaded para asegurar que todos los botones existen)
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const newLang = e.target.getAttribute('data-lang');
            if (newLang) {
                setLanguage(newLang);
            }
        });
    });
});