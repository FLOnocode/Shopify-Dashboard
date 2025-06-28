
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Vérifier le localStorage au chargement
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    // Par défaut, utiliser le thème sombre
    return true;
  });

  useEffect(() => {
    // Appliquer le thème au document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Sauvegarder dans le localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleTheme };
};
