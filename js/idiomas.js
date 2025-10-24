const translations = {
    inicio_nav: { es: 'Inicio', en: 'Home' },
    marcas_nav: { es: 'Marcas', en: 'Brands' },
    contacto_nav: { es: 'Contacto', en: 'Contact' },
    cotizar_nav_header: { es: 'Cotizar', en: 'Get Quote' }, 

    portada_titulo: { es: 'Lideres en Control Industrial y Soluciones', en: 'Leaders in Industrial Control and Solutions' },
    portada_subtitulo: { es: 'Paez Electronics LLC: Transformando procesos con tecnología de automatización de vanguardia.', en: 'Paez Electronics LLC: Transforming processes with cutting-edge automation technology.' },
    portada_cta: { es: 'Empieza a Optimizar Hoy', en: 'Start Optimizing Today' },

    marcas_titulo: { es: 'Trabajamos con las Marcas Líderes Globales', en: 'We Work with Global Leading Brands' },
    marcas_subtitulo: { es: 'Solo integramos componentes de alta calidad y reconocimiento internacional.', en: 'We only integrate high-quality, internationally recognized components.' },
    marcas_ver_mas: { es: 'Ver mas', en: 'See More' },
    
    cta_titulo: { es: '¿Listo para Automatizar tu Negocio?', en: 'Ready to Automate Your Business?' },
    cta_subtitulo: { es: 'Describe tu proyecto o necesidad específica para recibir una propuesta personalizada y sin compromiso.', en: 'Describe your specific project or need to receive a personalized, no-obligation proposal.' },
    cta_btn: { es: 'Solicitar Cotización Detallada', en: 'Request Detailed Quote' },

    testimonios_titulo: { es: 'Lo que Dicen Nuestros Clientes', en: 'What Our Clients Say' },
    
    testimonio_1_cita: { es: '"La migración del sistema SCADA fue impecable. Paez Electronics demostró un conocimiento técnico superior y cumplió con los plazos."', en: '"The SCADA system migration was flawless. Paez Electronics demonstrated superior technical knowledge and met all deadlines."' },
    testimonio_1_nombre: { es: 'Ing. Luis R.', en: 'Eng. Luis R.' },
    testimonio_1_cargo: { es: 'Director de Operaciones, Planta Petroquímica', en: 'Operations Director, Petrochemical Plant' },

    testimonio_2_cita: { es: '"Mejoraron la eficiencia de nuestra línea de empaque en un 20% gracias a la implementación robótica. Excelente soporte post-venta."', en: '"They improved the efficiency of our packaging line by 20% thanks to robotic implementation. Excellent post-sales support."' },
    testimonio_2_nombre: { es: 'Ana M.', en: 'Ana M.' },
    testimonio_2_cargo: { es: 'Gerente de Producción, Sector Alimentos', en: 'Production Manager, Food Sector' },

    testimonio_3_cita: { es: '"El suministro de equipos de control siempre es rápido y confiable. Son nuestro proveedor de confianza desde hace años."', en: '"The supply of control equipment is always fast and reliable. They have been our trusted supplier for years."' },
    testimonio_3_nombre: { es: 'Javier S.', en: 'Javier S.' },
    testimonio_3_cargo: { es: 'Jefe de Compras, Fabricación de Maquinaria', en: 'Purchasing Manager, Machinery Manufacturing' },


    pie_info_titulo: { es: 'Paez Electronics LLC', en: 'Paez Electronics LLC' },
    pie_info_texto: { es: 'Especialistas en soluciones de Automatización Industrial y Control de Procesos.', en: 'Specialists in Industrial Automation and Process Control solutions.' },
    pie_enlaces_titulo: { es: 'Enlaces Rápidos', en: 'Quick Links' },
    pie_enlaces_marcas: { es: 'Marcas', en: 'Brands' },
    pie_enlaces_contacto: { es: 'Contacto', en: 'Contact' },
    pie_enlaces_cotizar: { es: 'Cotizar', en: 'Get Quote' },
    pie_social_titulo: { es: 'Síguenos', en: 'Follow Us' },
    pie_copyright: { es: '© 2025 Paez Electronics LLC. Todos los derechos reservados.', en: '© 2025 Paez Electronics LLC. All rights reserved.' },
};

const setLanguage = (lang) => {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
            el.textContent = translations[key][lang];
        }
    });

    document.documentElement.lang = lang;
    
    if (lang === 'es') {
        document.title = 'Paez Electronics LLC | Automatización y Control Industrial';
    } else {
        document.title = 'Paez Electronics LLC | Industrial Automation and Control';
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
    
    const storedLang = localStorage.getItem('lang') || 'es';
    setLanguage(storedLang); 

    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const newLang = e.target.getAttribute('data-lang');
            if (newLang) {
                setLanguage(newLang);
            }
        });
    });
});