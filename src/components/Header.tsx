import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-primary-500/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/33.png" 
              alt="El Fannan Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'} px-4`}
            >
              {t('home')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'} px-4`}
            >
              {t('services')}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={`text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'} px-4`}
            >
              {t('gallery')}
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className={`text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'} px-4`}
            >
              {t('booking')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'} px-4`}
            >
              {t('contact')}
            </button>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {theme === 'light' ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-primary-400" />}
            </button>

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors flex items-center space-x-1"
            >
              <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'}`}>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-left py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'}`}
              >
                {t('home')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-left py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'}`}
              >
                {t('services')}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`text-left py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'}`}
              >
                {t('gallery')}
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className={`text-left py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'}`}
              >
                {t('booking')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`text-left py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors ${language === 'ar' ? 'font-tajwal' : 'font-montserrat'}`}
              >
                {t('contact')}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;