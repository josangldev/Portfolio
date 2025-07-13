import React, { useState, type FC } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolio';
import { SiHtml5, SiCss3, SiTailwindcss, SiSass, SiJavascript, SiTypescript, SiReact, SiGit, SiFigma, SiFramer } from 'react-icons/si';
import { FiGlobe } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import type { Project } from '../types';

const techIconMap: Record<string, React.ReactElement> = {
  HTML: <SiHtml5 className="w-6 h-6" title="HTML5" />,
  'HTML5': <SiHtml5 className="w-6 h-6" title="HTML5" />,
  CSS: <SiCss3 className="w-6 h-6" title="CSS3" />,
  'CSS3': <SiCss3 className="w-6 h-6" title="CSS3" />,
  'Tailwind CSS': <SiTailwindcss className="w-6 h-6" title="Tailwind CSS" />,
  Tailwind: <SiTailwindcss className="w-6 h-6" title="Tailwind CSS" />,
  Sass: <SiSass className="w-6 h-6" title="Sass" />,
  JavaScript: <SiJavascript className="w-6 h-6" title="JavaScript" />,
  TypeScript: <SiTypescript className="w-6 h-6" title="TypeScript" />,
  React: <SiReact className="w-6 h-6" title="React" />,
  Git: <SiGit className="w-6 h-6" title="Git" />,
  Figma: <SiFigma className="w-6 h-6" title="Figma" />,
  'Framer Motion': <SiFramer className="w-6 h-6" title="Framer Motion" />,
  Framer: <SiFramer className="w-6 h-6" title="Framer Motion" />,
  'FramerMotion': <SiFramer className="w-6 h-6" title="Framer Motion" />,
};

interface ProjectCardProps {
  project: Project;
  currentLanguage: 'es' | 'en';
  t: (key: string) => string;
}

const ProjectCard: FC<ProjectCardProps> = function ProjectCard({ project, currentLanguage, t }) {
  const hasGallery = project.images && project.images.length > 1;
  const [mainImage, setMainImage] = useState<string>(
    hasGallery ? project.images![0] : project.image
  );
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(99,102,241,0.18)' }}
      transition={{ duration: 0.15 }}
      viewport={{ once: true }}
      className="card group cursor-pointer relative"
    >
      <div className="flex items-center justify-center mb-6 w-full">
        <button
          type="button"
          className="bg-white/70 dark:bg-gray-900/70 rounded-full p-1 shadow hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors mr-2"
          onClick={() => {
            if (project.images && project.images.length > 1) {
              const idx = project.images.indexOf(mainImage);
              const prevIdx = (idx - 1 + project.images.length) % project.images.length;
              setMainImage(project.images[prevIdx]);
            }
          }}
          aria-label="Imagen anterior"
          disabled={!(project.images && project.images.length > 1)}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="relative mb-0 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 w-full aspect-[800/384] flex items-center justify-center max-w-[90%]">
          <img
            src={mainImage}
            alt={project.title[currentLanguage]}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <button
          type="button"
          className="bg-white/70 dark:bg-gray-900/70 rounded-full p-1 shadow hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors ml-2"
          onClick={() => {
            if (project.images && project.images.length > 1) {
              const idx = project.images.indexOf(mainImage);
              const nextIdx = (idx + 1) % project.images.length;
              setMainImage(project.images[nextIdx]);
            }
          }}
          aria-label="Imagen siguiente"
          disabled={!(project.images && project.images.length > 1)}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      {project.featured && (
        <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
          <Star className="w-3 h-3 mr-1" />
          {t('projects.featuredBadge')}
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
          {project.title[currentLanguage]}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description[currentLanguage]}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 6).map((tech: string, idx: number) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 30, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.25, rotate: 8, boxShadow: '0 6px 24px rgba(99,102,241,0.18)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 18, delay: idx * 0.07 }}
              viewport={{ once: true }}
              className="flex items-center justify-center w-8 h-8 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full cursor-pointer shadow-sm"
            >
              {techIconMap[tech] ?? tech}
            </motion.span>
          ))}
          {project.technologies.length > 6 && (
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 flex items-center justify-center text-sm"
          >
            <Github className="w-5 h-5 mr-2" />
            {t('projects.viewCode')}
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 flex items-center justify-center text-sm"
            >
              <FiGlobe className="w-5 h-5 mr-2" />
              {t('projects.viewOnline')}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language as 'es' | 'en';
  
  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured)
    : projects;

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('projects.title')}</h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'all'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t('projects.all')}
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                filter === 'featured'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t('projects.featured')}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              currentLanguage={currentLanguage}
              t={t}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center"
          >
            <Github className="w-5 h-5 mr-2" />
            {t('projects.viewMore')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 