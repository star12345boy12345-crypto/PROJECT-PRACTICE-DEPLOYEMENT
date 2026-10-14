import React, { createContext, useContext, useState, useEffect } from 'react';
import en from '../i18n/en.json';
import or from '../i18n/or.json';

const LanguageContext = createContext();

export const translations = { en, or };

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('vidyora_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('vidyora_lang', lang);
    if (lang === 'or') {
      document.body.classList.add('font-odia');
    } else {
      document.body.classList.remove('font-odia');
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'or' : 'en'));
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang] || translations.en;
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English
        let fallback = translations.en;
        for (const fbKey of keys) {
          if (fallback && fallback[fbKey] !== undefined) {
            fallback = fallback[fbKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
