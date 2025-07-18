import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const GoogleMaps: React.FC = () => {
  const { t, language } = useLanguage();

  const mapUrl = 'https://maps.app.goo.gl/swfx392HFSacHBWGA';

  const handleDirections = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
            {t('findUs')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-montserrat">
            {language === 'ar' ? 'تعال زورنا في موقعنا في وسط القاهرة' : 'Visit us at our location in downtown Cairo'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="aspect-video relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d31.235!3d30.045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQyLjAiTiAzMcKwMTQnMDYuMCJF!5e0!3m2!1sen!2seg!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-6">
                <button
                  onClick={handleDirections}
                  className="w-full glow-button bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
                >
                  <Navigation className="w-5 h-5" />
                  {language === 'ar' ? 'احصل على الاتجاهات' : 'Get Directions'}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-montserrat">
                {t('contactInfo')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500/20 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 font-montserrat">
                      {t('address')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-montserrat">
                      {language === 'ar' ? 'القاهرة - وسط البلد - سيتي مول شارع محمد محمود' : 'Cairo - Downtown - City Mall Mohamed Mahmoud Street'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 rounded-full p-3">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 font-montserrat">
                      {t('phoneNumber')}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-montserrat">
                      01091054529
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/20 rounded-full p-3">
                    <Clock className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 font-montserrat">
                      {t('workingHours')}
                    </h4>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1 font-montserrat">
                      <p>{language === 'ar' ? 'يومياً من الساعة 12 ظهراً الى 9 مساءً' : 'Daily from 12:00 PM to 9:00 PM'}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-xl border border-primary-500/30">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 font-montserrat">
                  {language === 'ar' ? 'قبل زيارتك' : 'Before You Visit'}
                </h4>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm font-montserrat">
                  <li>• {language === 'ar' ? 'ابعت صورة الكيبورد عشان تتأكد انه ينفع يتعرب ولا لا' : 'Send keyboard photo to check if it can be localized'}</li>
                </ul>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <a
                  href="tel:+201091054529"
                  className="glow-button bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors text-sm text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat w-full"
                >
                  {language === 'ar' ? 'اتصل الآن' : 'Call Now'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleMaps;