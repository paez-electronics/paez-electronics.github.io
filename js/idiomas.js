const translations = {
    // Claves de Navegación y Footer (ya existían)
    inicio_nav: { es: 'Inicio', en: 'Home' },
    marcas_nav: { es: 'Marcas', en: 'Brands' },
    contacto_nav: { es: 'Contacto', en: 'Contact' },
    cotizar_nav_header: { es: 'Cotizar', en: 'Get Quote' }, 

    // Claves de la Portada de Inicio (ya existían)
    portada_titulo: { es: 'Lideres en Control Industrial y Soluciones', en: 'Leaders in Industrial Control and Solutions' },
    portada_subtitulo: { es: 'Paez Electronics LLC: Transformando procesos con tecnología de automatización de vanguardia.', en: 'Paez Electronics LLC: Transforming processes with cutting-edge automation technology.' },
    portada_cta: { es: 'Empieza a Optimizar Hoy', en: 'Start Optimizing Today' },

    // Claves de la Sección de Marcas en Inicio (ya existían)
    marcas_titulo: { es: 'Trabajamos con las Marcas Líderes Globales', en: 'We Work with Global Leading Brands' },
    marcas_subtitulo: { es: 'Solo integramos componentes de alta calidad y reconocimiento internacional.', en: 'We only integrate high-quality, internationally recognized components.' },
    marcas_ver_mas: { es: 'Ver mas', en: 'See More' },
    
    // Claves de la CTA y Testimonios (ya existían)
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

    // Claves del Footer (ya existían)
    pie_info_titulo: { es: 'Paez Electronics LLC', en: 'Paez Electronics LLC' },
    pie_info_texto: { es: 'Especialistas en soluciones de Automatización Industrial y Control de Procesos.', en: 'Specialists in Industrial Automation and Process Control solutions.' },
    pie_enlaces_titulo: { es: 'Enlaces Rápidos', en: 'Quick Links' },
    pie_enlaces_marcas: { es: 'Marcas', en: 'Brands' },
    pie_enlaces_contacto: { es: 'Contacto', en: 'Contact' },
    pie_enlaces_cotizar: { es: 'Cotizar', en: 'Get Quote' },
    pie_social_titulo: { es: 'Síguenos', en: 'Follow Us' },
    pie_copyright: { es: '© 2025 Paez Electronics LLC. Todos los derechos reservados.', en: '© 2025 Paez Electronics LLC. All rights reserved.' },

    // =========================================================================
    //  NUEVAS CLAVES AÑADIDAS PARA LA PÁGINA 'marcas.html'
    // =========================================================================
    marcas_portada_titulo: { es: 'Componentes de Calidad Certificada', en: 'Certified Quality Components' },
    marcas_portada_subtitulo: { es: 'Trabajamos solo con marcas líderes globales, sinónimo de fiabilidad y rendimiento industrial.', en: 'We only work with global leading brands, synonymous with reliability and industrial performance.' },
    marcas_portada_cta: { es: 'Ver Catálogo Completo', en: 'View Full Catalog' },

    marcas_lista_titulo: { es: 'Catálogo de Marcas Aliadas', en: 'Catalog of Allied Brands' },
    marcas_lista_subtitulo: { es: 'Componentes seleccionados por su alta calidad y reconocimiento internacional en el sector.', en: 'Components selected for their high quality and international recognition in the sector.' },

    // Descripciones de Marcas
    chint_desc: { es: 'Líder mundial en la fabricación de equipos de bajo voltaje, media y alta tensión, y soluciones de energía solar. Sinónimo de innovación y seguridad eléctrica.', en: 'Global leader in the manufacturing of low, medium, and high voltage equipment, and solar energy solutions. Synonymous with innovation and electrical safety.' },
    ebchq_desc: { es: 'Especialistas en la protección de sistemas eléctricos y automatización. Sus productos ofrecen fiabilidad y precisión para entornos industriales exigentes.', en: 'Specialists in electrical system protection and automation. Their products offer reliability and precision for demanding industrial environments.' },
    autonics_desc: { es: 'Proporciona soluciones integrales de automatización que incluyen sensores, controladores de temperatura y medidores de alto rendimiento para el control de procesos.', en: 'Provides comprehensive automation solutions including high-performance sensors, temperature controllers, and meters for process control.' },
    onka_desc: { es: 'Fábrica de terminales de conexión, bornes y accesorios para tableros eléctricos. Calidad enfocada en la organización y seguridad del cableado industrial.', en: 'Manufacturer of connection terminals, clamps, and accessories for electrical panels. Quality focused on industrial wiring organization and safety.' },
    ls_desc: { es: 'Ofrece una amplia gama de soluciones eléctricas y de automatización, desde PLCs y variadores de frecuencia hasta equipos de distribución de energía.', en: 'Offers a wide range of electrical and automation solutions, from PLCs and frequency inverters to power distribution equipment.' },
    andeli_desc: { es: 'Fabricante de componentes eléctricos y equipos de distribución, destacando en interruptores, contactores y relés para aplicaciones de control industrial.', en: 'Manufacturer of electrical components and distribution equipment, specializing in switches, contactors, and relays for industrial control applications.' },
    exceline_desc: { es: 'Conocidos por sus protectores de voltaje y dispositivos de monitoreo, brindando protección esencial para equipos sensibles en ambientes industriales y comerciales.', en: 'Known for their voltage protectors and monitoring devices, providing essential protection for sensitive equipment in industrial and commercial environments.' },
    schneider_desc: { es: 'Líder global en la transformación digital de la gestión de la energía y la automatización. Sus soluciones optimizan la eficiencia y sostenibilidad industrial.', en: 'Global leader in the digital transformation of energy management and automation. Their solutions optimize industrial efficiency and sustainability.' },
    totalquality_desc: { es: 'Firma especializada en herramientas y accesorios que cumplen con los más altos estándares de calidad, necesarios para el mantenimiento y montaje de sistemas de control.', en: 'Firm specializing in tools and accessories that meet the highest quality standards, necessary for the maintenance and assembly of control systems.' },
};

const setLanguage = (lang) => {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[key] && translations[key][lang]) {
            el.textContent = translations[key][lang];
        }
    });

    document.documentElement.lang = lang;
    
    // Se elimina el código que cambia el document.title para mantener el título original.

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
    
    // Se asegura de usar un valor por defecto si no hay preferencia guardada.
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