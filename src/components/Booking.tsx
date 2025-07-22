import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Play, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Booking: React.FC = () => {
  const { t, language } = useLanguage();

  const handleWhatsAppBooking = () => {
    const message = language === 'ar' 
      ? 'مرحباً! أريد حجز موعد لتعريب الكيبورد. متى يمكنني الحضور؟'
      : 'Hello! I want to book an appointment for keyboard localization. When can I come?';
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=201091054529&text=${encodedMessage}`, '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+201091054529', '_self');
  };

  return (
    <section id="booking" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
            {language === 'ar' ? 'احجز موعدك' : 'Book Your Appointment'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-montserrat">
            {language === 'ar' ? 'تواصل معنا عبر الواتساب أو الهاتف لحجز موعدك' : 'Contact us via WhatsApp or phone to book your appointment'}
          </p>
          
          {/* Video Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-6 border border-gray-300 dark:border-primary-500/30">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
                {language === 'ar' ? 'شاهد عملية التعريب بالليزر' : 'Watch Our Laser Engraving Process'}
              </h3>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/0BY9hfNvGo8?si=Yg20s8kpfltki7nT&start=98"
                  title="Laser Engraving Process"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                ></iframe>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-4 font-montserrat">
                {language === 'ar' ? 'شاهد كيف نقوم بتعريب الكيبوردات بدقة واحترافية عالية' : 'See how we perform keyboard localization with precision and professionalism'}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Section */}
              <div className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
                    {language === 'ar' ? 'احجز موعدك الآن' : 'Book Your Appointment Now'}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 font-montserrat">
                    {language === 'ar' 
                      ? 'تواصل معنا مباشرة لحجز موعدك وسنرد عليك فوراً'
                      : 'Contact us directly to book your appointment and we\'ll respond immediately'
                    }
                  </p>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsAppBooking}
                    className="w-full glow-button bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
                  >
                    <MessageCircle className="w-6 h-6" />
                    {language === 'ar' ? 'احجز عبر الواتساب' : 'Book via WhatsApp'}
                  </button>

                  <button
                    onClick={handlePhoneCall}
                    className="w-full glow-button bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
                  >
                    <Phone className="w-6 h-6" />
                    {language === 'ar' ? 'اتصل الآن: 01091054529' : 'Call Now: 01091054529'}
                  </button>
                </div>

                {/* Quick Info */}
                <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-300 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 font-montserrat">
                    {language === 'ar' ? 'معلومات سريعة' : 'Quick Info'}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary-400" />
                      <span className="text-gray-700 dark:text-gray-300 font-montserrat">
                        {language === 'ar' ? 'مدة التعريب: 10 دقائق فقط' : 'Localization time: Only 10 minutes'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300 font-montserrat">
                        {language === 'ar' ? 'تسليم فوري - لا نحتفظ بجهازك' : 'Instant delivery - we don\'t keep your device'}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300 font-montserrat">
                        {language === 'ar' ? 'القاهرة - وسط البلد' : 'Cairo - Downtown'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-6 font-montserrat">
                  {language === 'ar' ? 'ليه تختار شركة الفنان؟' : 'Why Choose El Fannan Company?'}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <span className="text-lg">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 font-montserrat">
                        {language === 'ar' ? 'شغل احترافي على أصوله' : 'Professional Work Done Right'}
                      </h4>
                      <p className="text-white/80 font-montserrat">
                        {language === 'ar' ? 'بنحفر الكيبورد بالليزر بدقّة كأنها من المصنع، من غير ما نأذي الجهاز ولا نخلي عليه أثر.' : 'We engrave keyboards with laser precision as if from the factory, without damaging the device or leaving any trace.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <span className="text-lg">🛡️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 font-montserrat">
                        {language === 'ar' ? 'تعريب مضمون وآمن' : 'Guaranteed Safe Localization'}
                      </h4>
                      <p className="text-white/80 font-montserrat">
                        {language === 'ar' ? 'بنشتغل بأحدث تقنيات الليزر اللي بتضمن لك حفر نظيف، ثابت، زيرو مخاطرة' : 'We work with the latest laser technologies that guarantee clean, stable engraving with zero risk'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <span className="text-lg">⚡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 font-montserrat">
                        {language === 'ar' ? 'التسليم وانت واقف' : 'Delivery While You Wait'}
                      </h4>
                      <p className="text-white/80 font-montserrat">
                        {language === 'ar' ? 'في خلال 10 دقايق بالكثير، بتستلم جهازك متعرب وجاهز على الاستخدام، من غير ما نطلب تسيبه معانا.' : 'Within 10 minutes at most, you receive your device localized and ready to use, without us asking you to leave it with us.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <span className="text-lg">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 font-montserrat">
                        {language === 'ar' ? 'فاهمين انت محتاج إيه' : 'We Understand What You Need'}
                      </h4>
                      <p className="text-white/80 font-montserrat">
                        {language === 'ar' ? 'سواء لاب توب جديد، كيبورد ميكانيكال، أو جهازك الشخصي — بنشتغل حسب نوعه وبنراعي كل تفصيلة فيه.' : 'Whether new laptop, mechanical keyboard, or your personal device — we work according to its type and consider every detail in it.'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                      <span className="text-lg">💎</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 font-montserrat">
                        {language === 'ar' ? 'راحة بالك أهم من أي حاجة' : 'Your Peace of Mind is Most Important'}
                      </h4>
                      <p className="text-white/80 font-montserrat">
                        {language === 'ar' ? 'لو في أي ملاحظة، احنا بنظبطها فورًا — إحنا مش بنقدم خدمة، إحنا بنقدم راحة بال.' : 'If there are any concerns, we fix them immediately — we don\'t just provide service, we provide peace of mind.'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-2xl">
                  <h4 className="font-semibold mb-4 font-montserrat">
                    {language === 'ar' ? 'قبل زيارتك' : 'Before Your Visit'}
                  </h4>
                  <div className="space-y-2 text-white/80 font-montserrat">
                    <p>📱 {language === 'ar' ? 'ابعت صورة جهازك على الواتساب' : 'Send your device photo on WhatsApp'}</p>
                    <p>💬 {language === 'ar' ? 'استشارة مجانية ليك وهنساعدك' : 'Free consultation and we\'ll help you'}</p>
                    <p>📍 {language === 'ar' ? 'القاهرة - وسط البلد - 49 شارع نوبار - سيتي مول - الدور الأرضي' : 'Cairo - Downtown - 49 Nubar Street - City Mall - Ground Floor'}</p>
                    <p>📞 {language === 'ar' ? 'الهاتف: 01091054529' : 'Phone: 01091054529'}</p>
                    <p>⏰ {language === 'ar' ? 'يومياً من الساعة 12 ظهراً الى 9 مساءً' : 'Daily from 12:00 PM to 9:00 PM'}</p>
                    <p className="text-primary-300 font-semibold">🎯 {language === 'ar' ? 'لو عايز الجودة والأمان مستنينك في الفنان' : 'If you want quality and safety, we\'re waiting for you at El Fannan'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;