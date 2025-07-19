import { motion } from 'framer-motion';
import { Calendar, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Componente principal de la sección sobre mí
const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Code, label: t('about.stats.projects'), value: '5' },
    { icon: Calendar, label: t('about.stats.years'), value: '2+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-main">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('about.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.whoAmI')}
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
              <p>
                {t('about.description3')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex-col-center gap-6 items-end pr-8"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(99,102,241,0.18)' }}
                transition={{ duration: 0.15 }}
                viewport={{ once: true }}
                className="card text-center cursor-pointer w-72 h-64 flex flex-col justify-center items-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs-gray">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 