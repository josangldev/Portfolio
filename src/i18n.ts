import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      'nav.home': 'Inicio',
      'nav.about': 'Sobre mí',
      'nav.projects': 'Proyectos',
      'nav.skills': 'Habilidades',
      'nav.contact': 'Contacto',
      
      'hero.title': 'José Antonio García López',
      'hero.subtitle': 'Desarrollador front-end',
      'hero.description': 'Apasionado desarrollador frontend que transforma ideas en experiencias digitales únicas. Especializado en React, TypeScript y diseño moderno. Siempre en busca de nuevos desafíos y oportunidades para crear soluciones innovadoras.',
      'hero.viewProjects': 'Ver Proyectos',
      'hero.contact': 'Contactar',
      'hero.downloadCV': 'Descargar CV',
      
      'about.title': 'Sobre Mí',
      'about.whoAmI': '¿Quién soy?',
      'about.description1': 'Soy desarrollador frontend y disfruto construir cosas desde cero, ver cómo una idea toma forma en la pantalla. Me apasiona el mundo web, trabajar con tecnologías modernas y seguir creciendo día a día en este camino que tanto me entusiasma. Me considero una persona comunicativa, que trabaja bien en equipo y afronta los problemas como oportunidades para aprender y mejorar constantemente.',
      'about.description2': 'Estoy en constante aprendizaje y he adquirido conocimientos en Conquer Blocks, donde he desarrollado proyectos prácticos y he mejorado mis habilidades técnicas y de trabajo en equipo.',
      'about.description3': 'Aprendizaje continuo a través de múltiples fuentes especializadas del sector, incluyendo canales de YouTube de reconocidos referentes como Midudev y MoureDev, así como desafíos técnicos como el 30 Days of JavaScript Challenge en GitHub. Complemento esta formación con el contenido oficial de FreeCodeCamp, estudio guiado por documentación oficial, y el uso de herramientas de inteligencia artificial como CursorAI y similares, aplicadas tanto como soporte de aprendizaje como para la optimización de procesos, productividad personal y refactorización de código.',
      'about.stats.projects': 'Proyectos Completados',
      'about.stats.years': 'Años de Estudio',
      'about.stats.technologies': 'Tecnologías Dominadas',
      
      'projects.title': 'Proyectos',
      'projects.all': 'Todos',
      'projects.featured': 'Destacados',
      'projects.viewCode': 'Ver código',
      'projects.viewOnline': 'Ver online',
      'projects.viewMore': 'Ver más en GitHub',
      'projects.featuredBadge': 'Destacado',
      
      'skills.title': 'Habilidades',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      'skills.tools': 'Herramientas',
      
      'contact.title': 'Contacto',
      'contact.description': '¿Tienes un proyecto en mente? ¡Hablemos!',
      'contact.name': 'Nombre',
      'contact.email': 'Email',
      'contact.message': 'Mensaje',
      'contact.send': 'Enviar Mensaje',
      'contact.placeholder.name': 'Tu nombre',
      'contact.placeholder.email': 'tu@email.com',
      'contact.placeholder.message': 'Tu mensaje...',
      'contact.info.title': 'Información de Contacto',
      'contact.form.title': 'Enviar Mensaje',
      'contact.availability.title': 'Disponibilidad:',
      'contact.availability.job': 'Activo en búsqueda de empleo',
      'contact.availability.frontend': 'Proyectos frontend',
      'contact.availability.collaborations': 'Colaboraciones',
      'contact.availability.webs': 'Desarrollo de webs',
      
      'footer.rights': 'Todos los derechos reservados',
      'footer.madeWith': 'Hecho con',
      'footer.by': 'por',
      
      'language.es': 'Español',
      'language.en': 'English',
    }
  },
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      
      'hero.title': 'José Antonio García López',
      'hero.subtitle': 'Front-end Developer',
      'hero.description': 'Passionate frontend developer who transforms ideas into unique digital experiences. Specialized in React, TypeScript and modern design. Always looking for new challenges and opportunities to create innovative solutions.',
      'hero.viewProjects': 'View Projects',
      'hero.contact': 'Contact',
      'hero.downloadCV': 'Download CV',
      
      'about.title': 'About Me',
      'about.whoAmI': 'Who am I?',
      'about.description1': 'I am a frontend developer and I enjoy building things from scratch, seeing how an idea takes shape on screen. I am passionate about the web world, working with modern technologies and continuing to grow day by day on this path that excites me so much. I consider myself a communicative person, who works well in a team and faces problems as opportunities to learn and constantly improve.',
      'about.description2': 'I am constantly learning and have acquired knowledge at Conquer Blocks, where I have developed practical projects and improved my technical and teamwork skills.',
      'about.description3': 'Continuous learning through multiple specialized sources in the sector, including YouTube channels of renowned references such as Midudev and MoureDev, as well as technical challenges like the 30 Days of JavaScript Challenge on GitHub. I complement this training with official FreeCodeCamp content, guided study through official documentation, and the use of artificial intelligence tools such as CursorAI and similar, applied both as learning support and for process optimization, personal productivity, and code refactoring.',
      'about.stats.projects': 'Completed Projects',
      'about.stats.years': 'Years of Study',
      'about.stats.technologies': 'Mastered Technologies',
      
      'projects.title': 'Projects',
      'projects.all': 'All',
      'projects.featured': 'Featured',
      'projects.viewCode': 'View Code',
      'projects.viewOnline': 'View Online',
      'projects.viewMore': 'View More on GitHub',
      'projects.featuredBadge': 'Featured',
      
      'skills.title': 'Skills',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',
      'skills.tools': 'Tools',
      
      'contact.title': 'Contact',
      'contact.description': 'Have a project in mind? Let\'s talk!',
      'contact.name': 'Name',
      'contact.email': 'Email',
      'contact.message': 'Message',
      'contact.send': 'Send Message',
      'contact.placeholder.name': 'Your name',
      'contact.placeholder.email': 'your@email.com',
      'contact.placeholder.message': 'Your message...',
      'contact.info.title': 'Contact Information',
      'contact.form.title': 'Send Message',
      'contact.availability.title': 'Availability:',
      'contact.availability.job': 'Actively seeking employment',
      'contact.availability.frontend': 'Frontend projects',
      'contact.availability.collaborations': 'Collaborations',
      'contact.availability.webs': 'Web development',
      
      'footer.rights': 'All rights reserved',
      'footer.madeWith': 'Made with',
      'footer.by': 'by',
      
      'language.es': 'Español',
      'language.en': 'English',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 