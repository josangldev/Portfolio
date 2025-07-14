import type { PersonalInfo, Project } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Jose Antonio García López",
  title: "Desarrollador front-end",
  description: "",
  avatar: "/avatar.jpg",
  location: "España",
  contact: {
    email: "gl.josea90@gmail.com",
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-antonio-garc%C3%ADa-l%C3%B3pez-4ba263347/",
    github: "https://github.com/josangldev",
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: {
      es: "Japón Web",
      en: "Japan Web"
    },
    description: {
      es: "Sitio web informativo sobre festivales tradicionales y gastronomía japonesa, con modo claro/oscuro, diseño responsive y animaciones. Desarrollado con Vite y TailwindCSS.",
      en: "Informative website about traditional Japanese festivals and gastronomy, with dark/light mode, responsive design and animations. Built with Vite and TailwindCSS."
    },
    image: "/japan-home.webp",
    images: [
      "/japan-home.webp",
      "/japan-about.webp",
      "/japan-events.webp",
      "/japan-comidas.webp"
    ],
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/josangldev/japon-web",
    liveUrl: "https://japon-web.vercel.app/",
    featured: false
  },
  {
    id: "2",
    title: {
      es: "Pokemon Kanto",
      en: "Pokemon Kanto"
    },
    description: {
      es: "Pokédex interactiva de la región Kanto con estadísticas base, trivial de Pokémon y música de fondo. Inspirada en la Game Boy, con diseño retro, responsive y funcionalidades avanzadas.",
      en: "Interactive Pokédex of the Kanto region with base stats, Pokémon trivia and background music. Game Boy-inspired, retro design, responsive and advanced features."
    },
    image: "/pokemon-home.webp",
    images: [
      "/pokemon-home.webp",
      "/pokemon-pokedex.webp",
      "/pokemon-about.webp",
      "/pokemon-trivial.webp"
    ],
    technologies: ["HTML", "Sass", "JavaScript"],
    githubUrl: "https://github.com/josangldev/pokemon-kanto",
    liveUrl: "https://pokemon-kanto.vercel.app/",
    featured: false
  },
  {
    id: "3",
    title: {
      es: "Dashboard",
      en: "Dashboard"
    },
    description: {
      es: "Gestor de tareas semanal con gráficos interactivos, modo claro/oscuro, traducción ES/EN y diseño responsive. Desarrollado con React, Vite, TailwindCSS y Recharts.",
      en: "Weekly task manager with interactive charts, light/dark mode, ES/EN translation and responsive design. Built with React, Vite, TailwindCSS and Recharts."
    },
    image: "/Dashboard-home.webp",
    images: [
      "/Dashboard-home.webp"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/josangldev/dashboard",
    liveUrl: "https://dashboard-sage-tau.vercel.app/",
    featured: true
  },
  {
    id: "4",
    title: {
      es: "e-Commerce",
      en: "e-Commerce"
    },
    description: {
      es: "Tienda online moderna y responsive con filtros por precio y tipo de ropa, carrito persistente, modo claro/oscuro y animaciones. Desarrollada con React, TypeScript, Vite y TailwindCSS.",
      en: "Modern and responsive online store with filters by price and clothing type, persistent cart, light/dark mode and animations. Built with React, TypeScript, Vite and TailwindCSS."
    },
    image: "/eshop-home.webp",
    images: [
      "/eshop-home.webp"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/josangldev/ecommerce",
    liveUrl: "https://e-commerce-two-xi-25.vercel.app/",
    featured: true
  },
  {
    id: "5",
    title: {
      es: "Portfolio",
      en: "Portfolio"
    },
    description: {
      es: "Portfolio personal, responsive y optimizado, construido con React, TypeScript y Tailwind CSS. Incluye animaciones, modo oscuro, internacionalización, formulario de contacto funcional y una experiencia de usuario profesional.",
      en: "Personal portfolio, responsive and optimized, built with React, TypeScript and Tailwind CSS. Includes animations, dark mode, internationalization, functional contact form and a professional user experience."
    },
    image: "/portfolio-home.webp",
    images: [
      "/portfolio-home.webp",
      "/portfolio-skills.webp"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/josangldev/portfolio",
    liveUrl: "https://portfolio-ecru-six-42.vercel.app/",
    featured: false
  }
]; 