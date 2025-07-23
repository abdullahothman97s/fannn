import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppChat: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = 'https://api.whatsapp.com/send?phone=201091054529&text=مرحباً!%20أريد%20معرفة%20المزيد%20عن%20خدمات%20تعريب%20الكيبورد%20بالليزر.';

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 cta-pulse urgent-cta"
        >
          <MessageCircle className="w-6 h-6 float-animation" />
        </button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 w-80 max-w-[calc(100vw-3rem)]">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold font-montserrat">الفنان</h3>
                <p className="text-sm text-green-100 font-montserrat">
                  {language === 'ar' ? 'نرد عادة فوراً' : 'Typically replies instantly'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="p-4 space-y-4">
            <div className="bg-gray-800 rounded-2xl p-3 max-w-[80%] border border-gray-700">
              <p className="text-sm text-gray-300 font-montserrat">
                {language === 'ar' 
                  ? 'مرحباً! 👋 أهلاً بك في الفنان. كيف يمكننا مساعدتك في تعريب الكيبورد اليوم؟'
                  : 'Hello! 👋 Welcome to El Fannan. How can we help you with your keyboard localization needs today?'
                }
              </p>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left bg-green-900/20 hover:bg-green-900/40 rounded-lg p-3 transition-colors border border-green-500/30"
              >
                <span className="text-sm text-green-300 font-montserrat">
                  💻 {language === 'ar' ? 'تعريب كيبورد اللابتوب' : 'Laptop keyboard engraving'}
                </span>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left bg-green-900/20 hover:bg-green-900/40 rounded-lg p-3 transition-colors border border-green-500/30"
              >
                <span className="text-sm text-green-300 font-montserrat">
                  ⌨️ {language === 'ar' ? 'تخصيص كيبورد الكمبيوتر' : 'PC keyboard customization'}
                </span>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left bg-green-900/20 hover:bg-green-900/40 rounded-lg p-3 transition-colors border border-green-500/30"
              >
                <span className="text-sm text-green-300 font-montserrat">
                  🏆 {language === 'ar' ? 'الميداليات والمواد الترويجية' : 'Medals & promotional items'}
                </span>
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full text-left bg-green-900/20 hover:bg-green-900/40 rounded-lg p-3 transition-colors border border-green-500/30"
              >
                <span className="text-sm text-green-300 font-montserrat">
                  🔧 {language === 'ar' ? 'الإصلاح والترميم' : 'Repair & restoration'}
                </span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <button
              onClick={handleWhatsAppClick}
              className="w-full glow-button cta-pulse bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 font-montserrat"
            >
              <MessageCircle className="w-4 h-4 wiggle-animation" />
              {t('chatNow')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppChat;