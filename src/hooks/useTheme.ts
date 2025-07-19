import { useState, useEffect } from 'react';

// Hook para gestionar el tema oscuro/claro de la aplicación
export const useTheme = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Detecta la preferencia del sistema y la guarda en localStorage
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const savedPreference = localStorage.getItem('darkMode');
    const shouldBeDark = savedPreference !== null 
      ? savedPreference === 'true' 
      : systemPrefersDark;
    
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setIsLoaded(true);
  }, []);

  // Alterna entre modo oscuro y claro
  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { isDark, isLoaded, toggleTheme };
}; 