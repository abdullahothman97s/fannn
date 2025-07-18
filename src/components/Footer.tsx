import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/33.png" 
                alt="El Fannan Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold">الفنان</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed font-montserrat">
              Premium laser engraving services for laptops, keyboards, medals, and promotional items. 
              Transforming your ideas into reality with precision and quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-montserrat">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors font-montserrat"
                >
                  {t('home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors font-montserrat"
                >
                  {t('services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-white transition-colors font-montserrat"
                >
                  {t('gallery')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="text-gray-300 hover:text-white transition-colors font-montserrat"
                >
                  {t('booking')}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-montserrat">{t('services')}</h3>
            <ul className="space-y-3 text-gray-300 font-montserrat">
              <li>{language === 'ar' ? 'تعريب كيبوردات اللابتوب' : 'Laptop Keyboard Engraving'}</li>
              <li>{language === 'ar' ? 'تخصيص كيبوردات الكمبيوتر' : 'PC Keyboard Customization'}</li>
              <li>{language === 'ar' ? 'نقش الميداليات والكؤوس' : 'Medal & Trophy Engraving'}</li>
              <li>{language === 'ar' ? 'المواد الترويجية' : 'Promotional Items'}</li>
              <li>{language === 'ar' ? 'الإصلاح والترميم' : 'Repair & Restoration'}</li>
              <li>{language === 'ar' ? 'المشاريع المخصصة' : 'Custom Projects'}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-montserrat">{t('contactInfo')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-montserrat">{language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</p>
                  <p className="text-sm text-gray-400 font-montserrat">{language === 'ar' ? 'بالقرب من وسط البلد' : 'Near downtown area'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:01091054529" className="text-gray-300 hover:text-white transition-colors font-montserrat">
                  01091054529
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href="mailto:info@elfannan.com" className="text-gray-300 hover:text-white transition-colors font-montserrat">
                  info@elfannan.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 font-montserrat">{language === 'ar' ? 'يومياً من الساعة 12 ظهراً الى 9 مساءً' : 'Daily from 12:00 PM to 9:00 PM'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-montserrat">
            © 2024 El Fannan. {t('allRights')}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-montserrat">
              {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-montserrat">
              {language === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors font-montserrat">
              {language === 'ar' ? 'الدعم' : 'Support'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;