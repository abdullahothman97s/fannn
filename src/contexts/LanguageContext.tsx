import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    home: 'Home',
    services: 'Services',
    gallery: 'Gallery',
    portfolio: 'Portfolio',
    booking: 'Booking',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Professional Keyboard Laser Engraving',
    heroSubtitle: 'Professional keyboard laser engraving for all languages and laser engraving services for advertising and promotion',
    keyboardSpecialist: 'Keyboard Engraving Specialists',
    contactUs: 'Is Laser Dangerous or Not?',
    viewOurWork: 'See Our Previous Work',
    professionalWork: 'Professional Work',
    guaranteedSafety: 'Guaranteed Safety',
    fastDelivery: 'Fast Delivery',
    precisionWork: 'Precision Work',
    
    // Services
    servicesTitle: 'Our Keyboard Services',
    servicesSubtitle: 'Professional laser engraving and restoration services for all keyboard types',
    laptopTitle: 'Laptop Keyboard Engraving',
    laptopDesc: 'Professional laser engraving for laptop keyboards with Arabic and English layouts',
    keyboardTitle: 'PC Keyboard Customization',
    keyboardTitle: 'PC Keyboard Localization',
    keyboardDesc: 'Professional Arabic localization for PC keyboards with competitive pricing',
    medalTitle: 'Medals & Promotional Items',
    medalDesc: 'Corporate branding and custom engraving for promotional materials and awards',
    repairTitle: 'Keyboard Repair & Restoration',
    repairTitle: 'Professional Laptop Repair',
    repairDesc: 'We repair all types of laptop problems with high quality and competitive prices in the Egyptian market',
    
    // Service Features
    arabicLayoutWindows: 'Regular Arabic Windows devices',
    arabicDiacriticsWindows: 'Arabic with diacritics Windows devices',
    macDevices: 'Mac devices',
    customWork: 'Arabic with diacritics and custom work',
    arabicRegular: 'Regular Arabic',
    arabicDiacritics: 'Arabic with diacritics',
    rgbCompatible: 'RGB Compatible',
    corporateBranding: 'Corporate Branding',
    customDesigns: 'Custom Designs',
    bulkOrders: 'Bulk Orders',
    damageRepair: 'Damage Repair',
    restoration: 'Screen replacement and repair',
    qualityGuarantee: 'Motherboard and hardware repair',
    
    // CTA
    readyToTransform: 'Ready to Localize Your Keyboard?',
    freeConsultation: 'Do you want to know exactly how much it costs?',
    contactNow: 'Talk to us and we will help you',
    knowPrices: 'Know Prices',
    
    // Gallery
    galleryTitle: 'Before & After Gallery',
    beforeAfter: 'Before & After',
    
    // Portfolio
    portfolioTitle: 'Our Work & Social Media',
    recentWork: 'Recent Work',
    followUs: 'Follow Us on TikTok',
    
    // Customer Stories
    storiesTitle: 'Customers Who Tried Localization Before You',
    storiesSubtitle: 'And Saw The Results Themselves',
    
    // Booking
    bookingTitle: 'Book Your Appointment',
    bookingSubtitle: 'Schedule your visit to our store for keyboard engraving',
    fullName: 'Full Name',
    phone: 'Phone Number',
    email: 'Email',
    service: 'Service Type',
    date: 'Preferred Date',
    time: 'Preferred Time',
    notes: 'Additional Notes',
    bookNow: 'Book Now',
    
    // WhatsApp
    chatNow: 'Chat with us now!',
    
    // Footer
    aboutUs: 'About Us',
    quickLinks: 'Quick Links',
    contactInfo: 'Contact Info',
    followSocial: 'Follow Us',
    allRights: 'All rights reserved',
    
    // Contact
    address: 'Address',
    phoneNumber: 'Phone',
    emailAddress: 'Email',
    workingHours: 'Working Hours',
    
    // Common
    learnMore: 'Learn More',
    viewAll: 'View All',
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
  },
  ar: {
    // Header
    home: 'الرئيسية',
    services: 'الخدمات',
    gallery: 'المعرض',
    portfolio: 'أعمالنا',
    booking: 'احجز موعد',
    contact: 'اتصل بنا',
    
    // Hero
    heroTitle: 'تعريب الكيبورد بالليزر بإحترافية',
    heroSubtitle: 'تعريب الكيبورد بالليزر بإحترافية لجميع اللغات وخدمات حفر الليزر والدعايه والاعلان',
    keyboardSpecialist: 'متخصصون في تعريب الكيبوردات',
    contactUs: 'هل الليزر خطر ولا لا ؟',
    viewOurWork: 'شوف سابقة اعمالنا',
    professionalWork: 'شغل احترافي',
    guaranteedSafety: 'أمان مضمون',
    fastDelivery: 'تسليم سريع',
    precisionWork: 'دقة في العمل',
    
    // Services
    servicesTitle: 'خدمات تعريب الكيبوردات',
    servicesSubtitle: 'خدمات تعريب الكيبورد والميداليات بالليزر بإحترافية واصلاح اللابتوبات',
    laptopTitle: 'تعريب كيبوردات اللابتوب',
    laptopDesc: 'تعريب احترافي بالليزر لكيبوردات اللابتوب بالتخطيطات العربية والإنجليزية',
    keyboardTitle: 'تخصيص كيبوردات الكمبيوتر',
    keyboardTitle: 'تعريب كيبوردات الكمبيوتر',
    keyboardDesc: 'تعريب احترافي للكيبوردات العادية بأسعار تنافسية',
    medalTitle: 'الميداليات والمواد الترويجية',
    medalDesc: 'العلامات التجارية للشركات وحفر الليزر المخصص للمواد الترويجية والجوائز',
    repairTitle: 'إصلاح وترميم الكيبوردات',
    repairTitle: 'إصلاح اللابتوب بإحترافية',
    repairDesc: 'نقوم بإصلاح جميع أنواع مشاكل اللابتوب بجودة عالية وأسعار تنافسية في السوق المصري',
    
    // Service Features
    arabicLayoutWindows: 'عربي العادي أجهزة ويندوز',
    arabicDiacriticsWindows: 'عربي بالتشكيل أجهزة ويندوز',
    macDevices: 'أجهزة ماك',
    customWork: 'عربي بالتشكيل وشغل مخصوص',
    arabicRegular: 'عربي العادي',
    arabicDiacritics: 'عربي بالتشكيل',
    rgbCompatible: 'متوافق مع RGB',
    corporateBranding: 'العلامة التجارية للشركات',
    customDesigns: 'تصاميم مخصصة',
    bulkOrders: 'طلبات بالجملة',
    damageRepair: 'إصلاح الأضرار',
    restoration: 'استبدال وإصلاح الشاشات',
    qualityGuarantee: 'إصلاح المازربورد والهاردوير',
    
    // CTA
    readyToTransform: 'مستعد لتعريب الكيبورد بتاعك ؟',
    freeConsultation: 'هل عاوز تعرف التكلفة بالظبط كام ؟',
    contactNow: 'كلمنا وهنساعدك',
    knowPrices: 'اعرف الأسعار',
    
    // Gallery
    galleryTitle: 'معرض قبل وبعد',
    beforeAfter: 'قبل وبعد',
    
    // Portfolio
    portfolioTitle: 'أعمالنا ووسائل التواصل الاجتماعي',
    recentWork: 'أعمال حديثة',
    followUs: 'تابعنا على تيك توك',
    
    // Customer Stories
    storiesTitle: 'عملاء جربوا التعريب قبلك',
    storiesSubtitle: 'وشافوا النتيجة بنفسهم',
    
    // Booking
    bookingTitle: 'احجز موعدك',
    bookingSubtitle: 'حدد موعد زيارتك لمتجرنا لتعريب الكيبورد',
    fullName: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    service: 'نوع الخدمة',
    date: 'التاريخ المفضل',
    time: 'الوقت المفضل',
    notes: 'ملاحظات إضافية',
    bookNow: 'احجز الآن',
    
    // WhatsApp
    chatNow: 'تحدث معنا الآن!',
    
    // Footer
    aboutUs: 'من نحن',
    quickLinks: 'روابط سريعة',
    contactInfo: 'معلومات الاتصال',
    followSocial: 'تابعنا',
    allRights: 'جميع الحقوق محفوظة',
    
    // Contact
    address: 'العنوان',
    phoneNumber: 'الهاتف',
    emailAddress: 'البريد الإلكتروني',
    workingHours: 'ساعات العمل',
    
    // Common
    learnMore: 'اعرف المزيد',
    viewAll: 'شاهد الكل',
    close: 'إغلاق',
    prev: 'السابق',
    next: 'التالي',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};