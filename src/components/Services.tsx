import React from 'react';
import { Laptop, Keyboard, Award, ArrowRight, Zap, Settings, Wrench, DollarSign } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Laptop,
      title: t('laptopTitle'),
      description: t('laptopDesc'),
      color: 'primary',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: [t('arabicLayoutWindows'), t('arabicDiacriticsWindows'), t('macDevices'), t('customWork')]
    },
    {
      icon: Keyboard,
      title: t('keyboardTitle'),
      description: t('keyboardDesc'),
      color: 'secondary',
      image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: [t('arabicRegular'), t('arabicDiacritics'), t('rgbCompatible')]
    },
    {
      icon: Award,
      title: t('medalTitle'),
      description: t('medalDesc'),
      color: 'accent',
      image: 'https://images.pexels.com/photos/1652209/pexels-photo-1652209.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: [t('corporateBranding'), t('customDesigns'), t('bulkOrders')]
    },
    {
      icon: Wrench,
      title: t('repairTitle'),
      description: t('repairDesc'),
      color: 'warning',
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500',
      features: [t('damageRepair'), t('restoration'), t('qualityGuarantee')]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-500/20',
          text: 'text-primary-400',
          border: 'border-primary-500/30',
          hover: 'hover:bg-primary-500/30'
        };
      case 'secondary':
        return {
          bg: 'bg-blue-500/20',
          text: 'text-blue-400',
          border: 'border-blue-500/30',
          hover: 'hover:bg-blue-500/30'
        };
      case 'accent':
        return {
          bg: 'bg-yellow-500/20',
          text: 'text-yellow-400',
          border: 'border-yellow-500/30',
          hover: 'hover:bg-yellow-500/30'
        };
      case 'warning':
        return {
          bg: 'bg-green-500/20',
          text: 'text-green-400',
          border: 'border-green-500/30',
          hover: 'hover:bg-green-500/30'
        };
      default:
        return {
          bg: 'bg-gray-500/20',
          text: 'text-gray-400',
          border: 'border-gray-500/30',
          hover: 'hover:bg-gray-500/30'
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-primary-400" />
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-montserrat`}>
              {t('servicesTitle')}
            </h2>
          </div>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-montserrat`}>
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 hover:border-primary-500/50"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-gray-900 via-gray-900/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 p-3 rounded-full ${colorClasses.bg} backdrop-blur-sm`}>
                    <IconComponent className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-3 font-montserrat`}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-montserrat`}>
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={`text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 font-montserrat`}>
                        <DollarSign className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=201091054529&text=مرحباً!%20أريد%20معرفة%20المزيد%20عن%20خدمات%20تعريب%20الكيبورد%20بالليزر.', '_blank')}
                    className={`group/btn flex items-center gap-2 ${colorClasses.text} font-medium hover:gap-3 transition-all duration-300 font-montserrat`}
                  >
                    {t('knowPrices')}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className={`text-2xl font-bold mb-4 font-montserrat`}>
                {t('readyToTransform')}
              </h3>
              <p className={`text-lg mb-6 opacity-90 font-montserrat`}>
                {t('freeConsultation')}
              </p>
              <button 
                onClick={() => window.open('https://api.whatsapp.com/send?phone=201091054529&text=مرحباً!%20أريد%20معرفة%20المزيد%20عن%20خدمات%20تعريب%20الكيبورد%20بالليزر.', '_blank')}
                className="glow-button bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
              >
                {t('contactNow')}
              </button>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-700/20"></div>
            <Settings className="absolute top-4 right-4 w-16 h-16 text-white/10" />
            <Keyboard className="absolute bottom-4 left-4 w-20 h-20 text-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;