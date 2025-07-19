import { useTranslation } from 'react-i18next';

// Hook para gestionar el idioma de la aplicación
export const useLanguage = () => {
  const { i18n } = useTranslation();

  // Cambia el idioma de la aplicación
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return {
    currentLanguage,
    changeLanguage,
    isSpanish: currentLanguage === 'es',
    isEnglish: currentLanguage === 'en',
  };
}; 