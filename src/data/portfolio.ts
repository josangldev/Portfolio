import type { PersonalInfo, Project, Skill, Experience } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Jose Antonio García López",
  title: "Desarrollador front-end",
  description: "",
  avatar: "public/avatar.jpg",
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
      es: "Japón Interactivo",
      en: "Interactive Japan"
    },
    description: {
      es: "Web dedicada a los festivales tradicionales y la gastronomía japonesa, ofreciendo una experiencia cultural inmersiva con información detallada y diseño atractivo.",
      en: "Website dedicated to traditional festivals and Japanese gastronomy, offering an immersive cultural experience with detailed information and attractive design."
    },
    image: "/src/assets/japan-home.webp",
    images: [
      "/src/assets/japan-home.webp",
      "/src/assets/japan-about.webp",
      "/src/assets/japan-events.webp",
      "/src/assets/japan-comidas.webp"
    ],
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/josangldev/japon-interactivo",
    featured: false
  },
  {
    id: "2",
    title: {
      es: "Pokédex Kanto",
      en: "Kanto Pokédex"
    },
    description: {
      es: "Aplicación interactiva que incluye una Pokédex completa con estadísticas detalladas, trivial de Pokémon y música de fondo para una experiencia inmersiva.",
      en: "Interactive application that includes a complete Pokédex with detailed statistics, Pokémon trivia and background music for an immersive experience."
    },
    image: "/src/assets/pokemon-home.webp",
    images: [
      "/src/assets/pokemon-home.webp",
      "/src/assets/pokemon-pokedex.webp",
      "/src/assets/pokemon-about.webp",
      "/src/assets/pokemon-trivial.webp"
    ],
    technologies: ["HTML", "Sass", "JavaScript"],
    githubUrl: "https://github.com/josangldev/pokedex-kanto",
    featured: false
  },
  {
    id: "3",
    title: {
      es: "Dashboard",
      en: "Dashboard"
    },
    description: {
      es: "Proyecto para añadir tareas diarias o semanales y visualizarlas con gráficos (Recharts, date-fns). Incluye modo claro y oscuro, y traducción completa al inglés.",
      en: "Project to add daily or weekly tasks and visualize them with charts (Recharts, date-fns). Includes light and dark mode, and full English translation."
    },
    image: "/src/assets/Dashboard-home.webp",
    images: [
      "/src/assets/Dashboard-home.webp"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/josangldev/finance-dashboard",
    featured: true
  },
  {
    id: "4",
    title: {
      es: "eShop",
      en: "eShop"
    },
    description: {
      es: "Tienda online desarrollada con React y TypeScript. Utiliza Context API para el manejo global del carrito y ESLint con TypeScript ESLint para mantener la calidad del código. Incluye filtros y barra de búsqueda, simulación de carrito de compra e inicio de sesión de usuario.",
      en: "Online store built with React and TypeScript. Uses Context API for global cart management and ESLint with TypeScript ESLint to ensure code quality. Features search filters, search bar, simulated shopping cart, and user login."
    },
    image: "/src/assets/eshop-home.webp",
    images: [
      "/src/assets/eshop-home.webp"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/josangldev/eshop",
    featured: true
  },
  {
    id: "5",
    title: {
      es: "Portfolio Personal",
      en: "Personal Portfolio"
    },
    description: {
      es: "Portfolio profesional desarrollado con React, TypeScript y Tailwind CSS. Incluye diseño responsive, modo oscuro, animaciones suaves y una experiencia de usuario moderna.",
      en: "Professional portfolio developed with React, TypeScript and Tailwind CSS. Includes responsive design, dark mode, smooth animations and a modern user experience."
    },
    image: "/src/assets/portfolio-home.webp",
    images: [
      "/src/assets/portfolio-home.webp",
      "/src/assets/portfolio-skills.webp"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/josangldev/portfolio",
    featured: false
  }
];

export const skills: Skill[] = [
  { name: "HTML5", level: 85, category: "frontend", icon: "html" },
  { name: "CSS3", level: 80, category: "frontend", icon: "css" },
  { name: "Sass", level: 75, category: "frontend", icon: "sass" },
  { name: "Tailwind CSS", level: 80, category: "frontend", icon: "tailwind" },
  { name: "JavaScript", level: 85, category: "frontend", icon: "javascript" },
  { name: "TypeScript", level: 70, category: "frontend", icon: "typescript" },
  { name: "React", level: 75, category: "frontend", icon: "react" },
  { name: "Git", level: 70, category: "other", icon: "git" },
  { name: "Figma", level: 65, category: "other", icon: "figma" },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "Conquer Blocks",
    position: "Estudiante de Desarrollo Web",
    description: "Formación intensiva en desarrollo web frontend, aprendiendo las mejores prácticas y tecnologías modernas del sector. Desarrollo de proyectos prácticos y colaboración en equipo.",
    startDate: "2023-01",
    current: true,
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git"]
  }
]; 