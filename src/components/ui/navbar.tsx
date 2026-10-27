import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeLang } from '@/contexts/ThemeLangContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, lang, setLang, t } = useThemeLang();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ${scrolled ? 'top-2 md:top-4' : ''}`}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 rounded-full bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-blue-900/10">
        {/* Left: Logo */}
        <div className="flex items-center pl-2 md:pl-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-inner shadow-blue-400/20">
            <span className="text-white font-bold text-sm tracking-tighter">MA</span>
          </div>
        </div>

        {/* Right: Links + Controls + CTA */}
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#hakkimda" className="relative hover:text-blue-400 transition-colors group">
              {t.nav.about}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a href="#hizmetler" className="relative hover:text-blue-400 transition-colors group">
              {t.nav.services}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a href="#blog" className="relative hover:text-blue-400 transition-colors group">
              {t.nav.blog}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a href="#iletisim" className="relative hover:text-blue-400 transition-colors group">
              {t.nav.contact}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          </div>

          <div className="flex items-center gap-2 border-l border-slate-700 pl-4 md:pl-6">
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center gap-1 p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors uppercase text-xs font-bold">
                <Globe size={18} />
                <span>{lang}</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-24 rounded-xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button onClick={() => setLang('tr')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-800 ${lang === 'tr' ? 'text-blue-400 font-bold' : 'text-slate-300'}`}>TR</button>
                <button onClick={() => setLang('en')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-800 ${lang === 'en' ? 'text-blue-400 font-bold' : 'text-slate-300'}`}>EN</button>
                <button onClick={() => setLang('de')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-800 ${lang === 'de' ? 'text-blue-400 font-bold' : 'text-slate-300'}`}>DE</button>
              </div>
            </div>
          </div>

          <a href="#iletisim" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
            {t.nav.contactBtn}
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full mt-2 p-4 rounded-3xl bg-slate-900/95 border border-slate-800 backdrop-blur-2xl flex flex-col gap-2 shadow-2xl overflow-hidden"
          >
            <a href="#hakkimda" className="text-slate-300 hover:text-blue-400 text-base font-medium transition-colors px-6 py-4 rounded-xl hover:bg-slate-800" onClick={() => setIsOpen(false)}>{t.nav.about}</a>
            <a href="#hizmetler" className="text-slate-300 hover:text-blue-400 text-base font-medium transition-colors px-6 py-4 rounded-xl hover:bg-slate-800" onClick={() => setIsOpen(false)}>{t.nav.services}</a>
            <a href="#blog" className="text-slate-300 hover:text-blue-400 text-base font-medium transition-colors px-6 py-4 rounded-xl hover:bg-slate-800" onClick={() => setIsOpen(false)}>{t.nav.blog}</a>
            <a href="#iletisim" className="text-slate-300 hover:text-blue-400 text-base font-medium transition-colors px-6 py-4 rounded-xl hover:bg-slate-800" onClick={() => setIsOpen(false)}>{t.nav.contact}</a>
            <a 
              href="#iletisim"
              className="mt-2 mx-2 px-6 py-4 rounded-xl bg-blue-600 text-white text-base font-semibold hover:bg-blue-500 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.contactBtn}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
