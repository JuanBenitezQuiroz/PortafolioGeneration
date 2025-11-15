// =============== Theme Toggle ===============
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// =============== Language Toggle ===============
const translations = {
    es: {
        nav: {
            home: 'Home',
            about: 'Sobre',
            skills: 'Habilidades',
            projects: 'Proyectos',
            contact: 'Contacto'
        },
        hero: {
            greeting: 'Hola, Yo soy',
            description: 'Full Stack Developer enfocado en código limpio, interfaces intuitivas y arquitecturas backend escalables.',
            contact: 'Mantengámonos en Contacto',
            projects: 'Mira mis proyectos',
            scroll: 'Desplázate'
        },
        about: {
            title: 'Sobre mí',
            subtitle: 'Mi Introducción',
            description1: 'Soy un desarrollador Full Stack apasionado, con experiencia en la creación de aplicaciones web modernas. Me especializo en ofrecer experiencias de usuario fluidas, manteniendo al mismo tiempo sistemas backend robustos y escalables.',
            description2: 'Con un buen ojo para el diseño y un profundo entendimiento de la arquitectura de software, transformo ideas en aplicaciones listas para producción que marcan la diferencia.',
            experience: 'Años Experiencia',
            projects: 'Proyectos Completados',
            clients: 'Clientes Satisfechos'
        },
        skills: {
            title: 'Habilidades',
            subtitle: 'Mis Experiencias Técnicas'
        },
        projects: {
            title: 'Proyectos',
            subtitle: 'Trabajos Recientes',
            viewProject: 'Ver Proyecto →',
            project1: {
                title: 'Plataforma de E-Commerce',
                description: 'Una plataforma de comercio electrónico totalmente equipada, con integración de pagos, gestión de inventario y analíticas en tiempo real.'
            },
            project2: {
                title: 'Sistema de Gestión de Tareas',
                description: 'Herramienta colaborativa de gestión de tareas con actualizaciones en tiempo real, colaboración en equipo y filtrado avanzado.'
            },
            project3: {
                title: 'Plataforma de Social Media',
                description: 'Una plataforma social moderna que incluye publicaciones, historias, mensajería y algoritmos de recomendación de contenido.'
            }
        },
        contact: {
            title: 'Contáctame',
            subtitle: 'Mantengámonos en Contacto',
            location: 'Ubicación',
            phone: 'Teléfono',
            form: {
                name: 'Tu Nombre',
                email: 'Tu Correo',
                subject: 'Sujeto',
                message: 'Tu Mensaje',
                submit: 'Envía el Mensaje'
            }
        },
        footer: {
            copyright: '© 2025 JMBQ. Todos los derechos reservados.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hi, I\'m',
            description: 'Full Stack Developer focused on clean code, intuitive interfaces and scalable backend architectures.',
            contact: 'Get In Touch',
            projects: 'View Projects',
            scroll: 'Scroll Down'
        },
        about: {
            title: 'About Me',
            subtitle: 'My Introduction',
            description1: 'I\'m a passionate Full Stack Developer with expertise in building modern web applications. I specialize in creating seamless user experiences while maintaining robust and scalable backend systems.',
            description2: 'With a keen eye for design and a deep understanding of software architecture, I transform ideas into production-ready applications that make a difference.',
            experience: 'Years Experience',
            projects: 'Projects Completed',
            clients: 'Happy Clients'
        },
        skills: {
            title: 'Skills',
            subtitle: 'My Technical Expertise'
        },
        projects: {
            title: 'Projects',
            subtitle: 'Recent Work',
            viewProject: 'View Project →',
            project1: {
                title: 'E-Commerce Platform',
                description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time analytics.'
            },
            project2: {
                title: 'Task Management System',
                description: 'Collaborative task management tool with real-time updates, team collaboration, and advanced filtering.'
            },
            project3: {
                title: 'Social Media Platform',
                description: 'A modern social platform featuring posts, stories, messaging, and content recommendation algorithms.'
            }
        },
        contact: {
            title: 'Contact Me',
            subtitle: 'Get In Touch',
            location: 'Location',
            phone: 'Phone',
            form: {
                name: 'Your Name',
                email: 'Your Email',
                subject: 'Subject',
                message: 'Your Message',
                submit: 'Send Message'
            }
        },
        footer: {
            copyright: '© 2025 JMBQ. All rights reserved.'
        }
    }
};

const langToggle = document.getElementById('lang-toggle');
const langText = document.querySelector('.lang-text');

// Check for saved language preference or default to Spanish
const currentLang = localStorage.getItem('language') || 'es';
langText.textContent = currentLang === 'es' ? 'EN' : 'ES';
htmlElement.setAttribute('lang', currentLang);

// Function to update all text content based on language
function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        // Navigate through nested object
        for (const k of keys) {
            translation = translation[k];
        }
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            translation = translation[k];
        }
        
        if (translation) {
            element.placeholder = translation;
        }
    });
}

// Initialize language on page load
updateLanguage(currentLang);

// Language toggle event listener
langToggle.addEventListener('click', () => {
    const currentLanguage = htmlElement.getAttribute('lang');
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    
    htmlElement.setAttribute('lang', newLanguage);
    localStorage.setItem('language', newLanguage);
    langText.textContent = newLanguage === 'es' ? 'EN' : 'ES';
    
    updateLanguage(newLanguage);
});

// =============== Mobile Menu Toggle ===============
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on nav links
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove('active');
    });
});

// =============== Active Link on Scroll ===============
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link?.classList.add('active-link');
        } else {
            link?.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

// =============== Header Shadow on Scroll ===============
const header = document.getElementById('header');

function scrollHeader() {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// =============== Smooth Scroll for Anchor Links ===============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =============== Contact Form Handler ===============
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// =============== Scroll Reveal Animation ===============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const elementsToAnimate = document.querySelectorAll(
    '.about__box, .skills__card, .project__card, .contact__card'
);

elementsToAnimate.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// =============== Dynamic Year in Footer ===============
const footerCopy = document.querySelector('.footer__copy');
if (footerCopy) {
    footerCopy.innerHTML = footerCopy.innerHTML.replace('2024', new Date().getFullYear());
}

// =============== Prevent Form Resubmission on Refresh ===============
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

console.log('%c👨‍💻 Portfolio Website Loaded Successfully!', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
