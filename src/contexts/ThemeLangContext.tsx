'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '@/lib/i18n';
import { translations } from '@/lib/i18n';

type Theme = 'dark' | 'light';

interface ThemeLangContextType {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.tr;
}

const ThemeLangContext = createContext<ThemeLangContextType | undefined>(undefined);

export function ThemeLangProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLangState] = useState<Language>('tr');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDark ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', isDark);
    }

    const savedLang = localStorage.getItem('lang') as Language | null;
    if (savedLang) {
      setLangState(savedLang);
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  const t = translations[lang];

  return (
    <ThemeLangContext.Provider value={{ theme, toggleTheme, lang, setLang, t }}>
      {children}
    </ThemeLangContext.Provider>
  );
}

export function useThemeLang() {
  const context = useContext(ThemeLangContext);
  if (context === undefined) {
    throw new Error('useThemeLang must be used within a ThemeLangProvider');
  }
  return context;
}
