import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const SERVICE_ID = 'service_92uq1hw';
const TEMPLATE_ID = 'template_scnzqk4';
const USER_ID = 'SA3hYIWrb-IjPfEh0';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      USER_ID
    ).then(
      () => {
        setSuccess('¡Mensaje enviado correctamente!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      () => {
        setSuccess('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
      }
    ).finally(() => setSending(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {t('contact.info.title')}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h4>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                  <Github className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    GitHub
                  </h4>
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    LinkedIn
                  </h4>
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    Conectar
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Ubicación
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                {t('contact.availability.title')}
              </h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {t('contact.availability.job')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {t('contact.availability.frontend')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {t('contact.availability.collaborations')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {t('contact.availability.webs')}
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {t('contact.form.title')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-full">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder={t('contact.placeholder.name')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder={t('contact.placeholder.email')}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  placeholder={t('contact.placeholder.message')}
                />
              </div>

              {success && (
                <div className={`p-4 rounded-lg ${
                  success.includes('correctamente') 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }`}>
                  {success}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(99,102,241,0.10)' }}
                whileTap={{ scale: 0.97 }}
                className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-transform duration-200"
              >
                {sending ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.send')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 