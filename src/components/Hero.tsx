import React from 'react';
import { ArrowRight, Play, Keyboard, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Gaming Keyboard Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary-500 rounded-lg animate-pulse"></div>
        <div className="absolute top-32 right-20 w-12 h-12 border-2 border-primary-400 rounded-lg animate-pulse delay-500"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 border-2 border-primary-600 rounded-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-16 w-14 h-14 border-2 border-primary-500 rounded-lg animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary-500 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-primary-600 rounded-full animate-pulse delay-1200"></div>
      </div>

      {/* RGB Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-red-500/10 rounded-full filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary-600/15 rounded-full filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight font-montserrat">
              <span className="gradient-text">
                {t('heroTitle')}
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
              <Keyboard className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400" />
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400" />
              <span className="text-base sm:text-lg md:text-xl text-gray-300 font-montserrat">
                {t('keyboardSpecialist')}
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-montserrat px-4">
            {t('heroSubtitle')}
          </p>

          {/* Quality and Safety Message */}
          <p className="text-xl sm:text-2xl md:text-3xl text-primary-400 mb-8 font-bold font-montserrat px-4">
            {language === 'ar' ? 'لو عايز الجودة والأمان .. مستنيينك في الفنان' : 'If you want quality and safety .. we\'re waiting for you at El Fannan'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <button
              onClick={() => scrollToSection('booking')}
              className="group glow-button bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
            >
              {t('contactUs')}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.open('https://www.tiktok.com/@fannanforlaser', '_blank')}
              className="group glow-button bg-gray-800/80 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-700/80 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-600 font-montserrat"
            >
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('viewOurWork')}
            </button>
          </div>

          {/* Featured Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-8 px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-2 font-montserrat">✨</div>
              <div className="text-xs sm:text-sm text-gray-400 font-montserrat">{t('professionalWork')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-2 font-montserrat">🛡️</div>
              <div className="text-xs sm:text-sm text-gray-400 font-montserrat">{t('guaranteedSafety')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-2 font-montserrat">⚡</div>
              <div className="text-xs sm:text-sm text-gray-400 font-montserrat">{t('fastDelivery')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-2 font-montserrat">🎯</div>
              <div className="text-xs sm:text-sm text-gray-400 font-montserrat">{t('precisionWork')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Keyboard Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Keyboard className="absolute top-20 left-10 w-6 h-6 sm:w-8 sm:h-8 text-primary-400/30 animate-pulse" />
        <Keyboard className="absolute top-40 right-20 w-4 h-4 sm:w-6 sm:h-6 text-primary-300/20 animate-pulse delay-500" />
        <Keyboard className="absolute bottom-32 left-20 w-8 h-8 sm:w-10 sm:h-10 text-primary-500/25 animate-pulse delay-1000" />
        <Keyboard className="absolute bottom-20 right-10 w-5 h-5 sm:w-7 sm:h-7 text-primary-400/30 animate-pulse delay-1500" />
      </div>
    </section>
  );
};

export default Hero;