export interface Project {
  id: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  image: string;
  images?: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  technologies: string[];
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar: string;
  location: string;
  contact: Contact;
} 