import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, Upload, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import EmailService from '../utils/emailService';

const Booking: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    keyboardImage: null as File | null,
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM',
    '8:00 PM', '9:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Schedule reminder email 8 hours before appointment
    const emailService = EmailService.getInstance();
    emailService.scheduleReminderEmail({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      notes: formData.notes
    });
    
    setIsSubmitted(true);
    console.log('Booking submitted:', formData);
    console.log('Reminder email scheduled for 8 hours before appointment');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        keyboardImage: e.target.files[0]
      });
    }
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-green-50 dark:bg-green-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-12 border border-green-500/30">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
                {language === 'ar' ? 'تم تأكيد الحجز!' : 'Booking Confirmed!'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-montserrat">
                {language === 'ar' ? 'شكراً لك على الحجز. سنتواصل معك قريباً لتأكيد موعدك.' : 'Thank you for your booking. We\'ll contact you soon to confirm your appointment.'}
              </p>
              <div className="bg-blue-900/20 rounded-2xl p-6 mb-8 border border-blue-500/30">
                <p className="text-blue-300 font-montserrat">
                  {language === 'ar' ? 'تم تسجيل طلبك والموعد. عشان تتأكد ان الكيبورد بتاعك بيدعم التعريب ولا لا تقدر تتواصل معانا عالواتساب احتياطي عشان لو خدمة العملاء مشغولين. هنبعتلك رسالة تذكيرية على الإيميل قبل الموعد بـ 8 ساعات.' : 'Your request and appointment have been registered. To make sure your keyboard supports localization, you can contact us on WhatsApp as a backup in case customer service is busy. We will send you a reminder email 8 hours before your appointment.'}
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 mb-8 border border-gray-300 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 font-montserrat">
                  {language === 'ar' ? 'تفاصيل الحجز:' : 'Booking Details:'}
                </h3>
                <div className="space-y-2 text-left font-montserrat">
                  <p className="text-gray-700 dark:text-gray-300"><strong>{language === 'ar' ? 'الاسم:' : 'Name:'}</strong> {formData.fullName}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>{language === 'ar' ? 'التاريخ:' : 'Date:'}</strong> {formData.date}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>{language === 'ar' ? 'الوقت:' : 'Time:'}</strong> {formData.time}</p>
                  <p className="text-gray-700 dark:text-gray-300"><strong>{language === 'ar' ? 'الهاتف:' : 'Phone:'}</strong> {formData.phone}</p>
                </div>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="glow-button bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
              >
                {language === 'ar' ? 'احجز موعد آخر' : 'Book Another Appointment'}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
            {language === 'ar' ? 'احجز موعدك' : 'Book Your Appointment'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-montserrat">
            {language === 'ar' ? 'حدد موعد زيارتك لفرع الفنان' : 'Schedule your visit to El Fannan branch'}
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
              {/* Form Section */}
              <div className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-montserrat">
                      <User className="w-4 h-4 inline mr-2" />
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors font-montserrat"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-montserrat">
                        <Phone className="w-4 h-4 inline mr-2" />
                        {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors font-montserrat"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-montserrat">
                        <Mail className="w-4 h-4 inline mr-2" />
                        {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors font-montserrat"
                      />
                    </div>
                  </div>

                  {/* Keyboard Image Upload */}
                  <div>
                    <label htmlFor="keyboardImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-montserrat">
                      <Upload className="w-4 h-4 inline mr-2" />
                      {language === 'ar' ? 'صورة الكيبورد' : 'Keyboard Image'}
                    </label>
                    <input
                      type="file"
                      id="keyboardImage"
                      name="keyboardImage"
                      onChange={handleFileChange}
                      accept="image/*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors font-montserrat file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-600 file:text-white hover:file:bg-primary-700"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-montserrat">
                      {language === 'ar' ? 'ارفع صورة واضحة للكيبورد للحصول على تقييم دقيق' : 'Upload a clear image of your keyboard for accurate assessment'}
                    </p>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-montserrat">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        {language === 'ar' ? 'التاريخ المفضل' : 'Preferred Date'}
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors font-montserrat"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-montserrat">
                        <Clock className="w-4 h-4 inline mr-2" />
                        {language === 'ar' ? 'الوقت المفضل' : 'Preferred Time'}
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors font-montserrat"
                      >
                        <option value="">{language === 'ar' ? 'اختر الوقت' : 'Select time'}</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-montserrat">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      {language === 'ar' ? 'طلبك أو ملاحظاتك' : 'Your Request or Notes'}
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors font-montserrat"
                      placeholder={language === 'ar' ? 'أخبرنا عن مشروعك...' : 'Tell us about your project...'}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full glow-button bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
                  >
                    {t('bookNow')}
                  </button>
                </form>
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
                    <p>📍 {language === 'ar' ? 'القاهرة - وسط البلد - سيتي مول شارع محمد محمود' : 'Cairo - Downtown - City Mall Mohamed Mahmoud Street'}</p>
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