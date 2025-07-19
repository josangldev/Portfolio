import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiTailwindcss, SiSass, SiJavascript, SiTypescript, SiReact, SiGit, SiFigma } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const techIcons = [
  { icon: SiHtml5, name: 'HTML5' },
  { icon: SiCss3, name: 'CSS3' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiSass, name: 'Sass' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiReact, name: 'React' },
  { icon: SiGit, name: 'Git' },
  { icon: SiFigma, name: 'Figma' },
];

// Componente principal de la sección de habilidades
const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container-main">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('skills.title')}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {techIcons.filter(({ name }) => name !== 'Git' && name !== 'Figma').map(({ icon: Icon, name }, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.25, rotate: 8, boxShadow: '0 6px 24px rgba(99,102,241,0.18)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 18, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="flex-col-center cursor-pointer shadow-sm"
              >
                <Icon className="w-10 h-10 mb-2 transition-transform duration-200" />
                <span className="text-xs-gray">{name}</span>
              </motion.div>
            ))}
          </div>
          <h3 className="section-title mt-32">{t('skills.tools')}</h3>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[{ icon: SiGit, name: 'Git' }, { icon: SiFigma, name: 'Figma' }].map(({ icon: Icon, name }, idx) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30, scale: 0.7 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.25, rotate: 8, boxShadow: '0 6px 24px rgba(99,102,241,0.18)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 18, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="flex-col-center cursor-pointer shadow-sm"
              >
                <Icon className="w-10 h-10 mb-2 transition-transform duration-200" />
                <span className="text-xs-gray">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 