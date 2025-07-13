import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-8 lg:px-32">
      <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="flex flex-col-reverse gap-2 md:flex-row md:gap-0 justify-between items-center">
          <p className="text-gray-400 text-sm md:order-2">
            © 2025 JosanglDev. {t('footer.rights')}.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0 md:order-1">
            {t('footer.madeWith')} ❤️ {t('footer.by')} React, TypeScript y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 