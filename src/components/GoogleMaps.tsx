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
            {language === 'ar' ? 'زور فرعنا' : 'Find Us'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-montserrat">
            {language === 'ar' ? 'تعال زورنا في فرعنا في وسط القاهرة' : 'Visit us at our branch in downtown Cairo'}
          </p>
        </div>


        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div>
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
                      {language === 'ar' ? 'القاهرة - وسط البلد - 49 شارع نوبار - سيتي مول - الدور الأرضي' : 'Cairo - Downtown - 49 Nubar Street - City Mall - Ground Floor'}
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
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 font-montserrat">
                      {t('workingHours')}
                    </h4>
                    <div className="text-gray-600 dark:text-gray-300 space-y-1 font-montserrat">
                      <p>{language === 'ar' ? 'يومياً من الساعة 12 ظهراً الى 9 مساءً' : 'Daily from 12:00 PM to 9:00 PM'}</p>
                    </div>
                    <a
                      href="https://api.whatsapp.com/send?phone=201091054529&text=مرحباً!%20أريد%20معرفة%20المزيد%20عن%20خدمات%20تعريب%20الكيبورد%20بالليزر."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-button bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors text-sm text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat w-full"
                    >
                      {language === 'ar' ? 'واتساب' : 'WhatsApp'}
                    </a>
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