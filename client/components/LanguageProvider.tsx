import React, { useState, useEffect, ReactNode } from 'react';
import { 
  LanguageContext, 
  TRANSLATIONS, 
  DEFAULT_LANGUAGE, 
  SUPPORTED_LANGUAGES,
  getNestedTranslation,
  type LanguageContextType 
} from '@/lib/i18n';

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(DEFAULT_LANGUAGE);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('coachconnect-language');
    if (savedLanguage && SUPPORTED_LANGUAGES.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  const setLanguage = (lang: string) => {
    if (SUPPORTED_LANGUAGES.some(language => language.code === lang)) {
      setCurrentLanguage(lang);
      localStorage.setItem('coachconnect-language', lang);
      
      // Update document language attribute
      document.documentElement.lang = lang;
    }
  };

  // Translation function
  const t = (key: string): string => {
    const translations = TRANSLATIONS[currentLanguage as keyof typeof TRANSLATIONS];
    return getNestedTranslation(translations, key) || key;
  };

  const contextValue: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    languages: SUPPORTED_LANGUAGES
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};