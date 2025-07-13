import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 sm:pt-28 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 z-0">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px] z-0"></div>
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={personalInfo.avatar}
                alt="JosanglDev"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 break-words">
            {' '}
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 break-words">
            <Typewriter words={[t('hero.subtitle')]} loop={0} cursor cursorStyle="|" typeSpeed={80} deleteSpeed={50} delaySpeed={1500} />
          </h2>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(99,102,241,0.15)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('projects')}
              className="btn-primary text-lg px-8 py-3 transition-transform duration-200"
            >
              {t('hero.viewProjects')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(99,102,241,0.10)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-lg px-8 py-3 transition-transform duration-200"
            >
              {t('hero.contact')}
            </motion.button>
            <a
              href="/cv.pdf"
              download
              className="btn-primary text-lg px-8 py-3 transition-transform duration-200 flex items-center justify-center"
              style={{ textDecoration: 'none' }}
            >
              {t('hero.downloadCV') || (t('i18n.language') === 'en' ? 'Download CV' : 'Descargar CV')}
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex-center space-x-6 mb-12"
          >
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-btn"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="icon-btn"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex-center -mt-6"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm hover:bg-white/30 dark:hover:bg-gray-800/30 transition-colors duration-200"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 