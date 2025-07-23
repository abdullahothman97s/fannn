import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CustomerStories: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentStory, setCurrentStory] = useState(0);

  // Generate 212 stories
  const generateStories = () => {
    const baseStories = [
    {
      id: 1,
      customerName: 'أحمد حسن',
      problem: 'كيبورد اللابتوب تالف من تعريب غير احترافي',
      solution: 'ترميم كامل للكيبورد مع تخطيط عربي متميز',
      testimonial: 'كنت فاكر إن اللابتوب خلاص مش هيرجع زي الأول، بس الفنان مش بس أصلحه، ده خلاه أحسن من الجديد!',
      rating: 5,
      date: 'منذ شهرين'
    },
    {
      id: 2,
      customerName: 'سارة محمد',
      problem: 'كيبورد الألعاب بحروف باهتة ورموز خاطئة',
      solution: 'تخطيط ألعاب مخصص مع تعريب متوافق مع RGB',
      testimonial: 'بعد تجربة سيئة في مكان تاني، الفنان رجع ثقتي في الشغل الاحترافي.',
      rating: 5,
      date: 'منذ شهر'
    },
    {
      id: 3,
      customerName: 'عمر عبدالله',
      problem: 'ميداليات الشركة بنقش خاطئ من مورد آخر',
      solution: 'إعادة نقش كاملة مع العلامة التجارية الصحيحة',
      testimonial: 'الفنان أنقذ حفل الشركة بإصلاح 50 ميدالية في يومين بس. خدمة لا تصدق!',
      rating: 5,
      date: 'منذ 3 أسابيع'
    },
    {
      id: 4,
      customerName: 'فاطمة علي',
      problem: 'كيبورد ماك بوك بتعريب مشوه',
      solution: 'تعريب احترافي بتقنية الليزر المتطورة',
      testimonial: 'الماك بوك بقى شكله رائع والتعريب واضح ومتقن.',
      rating: 5,
      date: 'منذ أسبوعين'
    },
    {
      id: 5,
      customerName: 'محمد خالد',
      problem: 'كيبورد ميكانيكي بأزرار تالفة',
      solution: 'إصلاح وتعريب كامل مع ضمان الجودة',
      testimonial: 'شغل متقن وسعر معقول، والكيبورد رجع أحسن من الأول.',
      rating: 5,
      date: 'منذ 10 أيام'
    },
    {
      id: 6,
      customerName: 'نورا أحمد',
      problem: 'لابتوب HP بكيبورد محروق من الليزر',
      solution: 'استبدال وتعريب احترافي بضمان سنة',
      testimonial: 'كنت خايفة إن اللابتوب مش هيتصلح، بس الفنان عمل معجزة.',
      rating: 5,
      date: 'منذ أسبوع'
    },
    {
      id: 7,
      customerName: 'يوسف مصطفى',
      problem: 'كيبورد ألعاب بإضاءة RGB معطلة',
      solution: 'إصلاح الإضاءة مع تعريب متوافق',
      testimonial: 'الكيبورد بقى يضوي بألوان رائعة والتعريب واضح جداً.',
      rating: 5,
      date: 'منذ 5 أيام'
    },
    {
      id: 8,
      customerName: 'ريم سعد',
      problem: 'كيبورد لابتوب ديل بحروف مقلوبة',
      solution: 'تصحيح التعريب وإعادة التخطيط',
      testimonial: 'أخيراً لقيت حد يفهم في التعريب الصح، شكراً الفنان.',
      rating: 5,
      date: 'منذ 3 أيام'
    },
    {
      id: 9,
      customerName: 'كريم حسام',
      problem: 'كيبورد مكتبي بأزرار مفقودة',
      solution: 'استبدال الأزرار مع تعريب كامل',
      testimonial: 'الكيبورد بقى كأنه جديد، والسعر كان مناسب جداً.',
      rating: 5,
      date: 'منذ يومين'
    },
    {
      id: 10,
      customerName: 'هبة محمود',
      problem: 'لابتوب لينوفو بتعريب غير مقروء',
      solution: 'تعريب احترافي بخط واضح ومتقن',
      testimonial: 'الحروف العربية بقت واضحة وجميلة، شغل فنان حقيقي.',
      rating: 5,
      date: 'منذ يوم'
    }
    ];

    // Generate 212 stories by repeating and modifying base stories
    const stories = [];
    const names = ['أحمد', 'محمد', 'سارة', 'فاطمة', 'عمر', 'نورا', 'يوسف', 'ريم', 'كريم', 'هبة', 'طارق', 'منى', 'حسام', 'دينا', 'وليد', 'إيمان', 'عبدالرحمن', 'شيماء', 'أمير', 'رانيا'];
    const lastNames = ['حسن', 'محمد', 'علي', 'أحمد', 'خالد', 'مصطفى', 'سعد', 'حسام', 'محمود', 'عادل', 'فؤاد', 'رشاد', 'صلاح', 'جمال', 'سمير', 'أشرف', 'فتحي', 'طارق'];
    const devices = ['لابتوب HP', 'كيبورد ميكانيكي', 'ماك بوك', 'لابتوب ديل', 'كيبورد ألعاب', 'لابتوب لينوفو', 'كيبورد مكتبي', 'لابتوب أسوس', 'ماك بوك اير', 'لابتوب توشيبا'];
    const problems = ['بتعريب مشوه', 'بحروف باهتة', 'بأزرار تالفة', 'بإضاءة معطلة', 'بحروف مقلوبة', 'محروق من الليزر', 'بتخطيط خاطئ', 'غير مقروء', 'بأزرار مفقودة', 'معطل'];
    const solutions = ['تعريب احترافي بالليزر', 'إصلاح وتعريب كامل', 'استبدال مع تعريب أصلي', 'تصحيح التعريب', 'إعادة تخطيط مخصص', 'ترميم كامل', 'تجديد بتقنية ليزر', 'إصلاح شامل', 'استبدال الأزرار', 'إعادة تعريب كاملة'];
    const testimonials = [
      'شغل متقن وسعر معقول، والكيبورد رجع أحسن من الأول.',
      'الحروف العربية بقت واضحة وجميلة، شغل فنان حقيقي.',
      'كنت خايف إن الجهاز مش هيتصلح، بس الفنان عمل معجزة.',
      'أخيراً لقيت حد يفهم في التعريب الصح، شكراً الفنان.',
      'الكيبورد بقى مثالي والتعريب واضح جداً.',
      'بعد تجربة سيئة في مكان تاني، الفنان رجع ثقتي في الشغل الاحترافي.',
      'الجهاز بقى كأنه جديد من الشركة، شغل احترافي جداً.',
      'الحروف بقت واضحة ومضيئة، والشغل نظيف جداً.',
      'الجهاز رجع أحسن من الأول، والسعر كان عادل.',
      'الكيبورد شغال زي الفل والتعريب متقن جداً.'
    ];
    const dates = ['منذ شهرين', 'منذ شهر', 'منذ 3 أسابيع', 'منذ أسبوعين', 'منذ 10 أيام', 'منذ أسبوع', 'منذ 5 أيام', 'منذ 3 أيام', 'منذ يومين', 'منذ يوم', 'منذ 4 ساعات', 'منذ ساعتين', 'منذ ساعة', 'منذ 30 دقيقة', 'منذ 15 دقيقة', 'منذ 10 دقائق', 'منذ 5 دقائق', 'منذ دقيقتين', 'منذ دقيقة', 'الآن'];

    for (let i = 1; i <= 212; i++) {
      const nameIndex = (i - 1) % names.length;
      const lastNameIndex = (i - 1) % lastNames.length;
      const deviceIndex = (i - 1) % devices.length;
      const problemIndex = (i - 1) % problems.length;
      const solutionIndex = (i - 1) % solutions.length;
      const testimonialIndex = (i - 1) % testimonials.length;
      const dateIndex = (i - 1) % dates.length;

      stories.push({
        id: i,
        customerName: `${names[nameIndex]} ${lastNames[lastNameIndex]}`,
        problem: `${devices[deviceIndex]} ${problems[problemIndex]}`,
        solution: solutions[solutionIndex],
        testimonial: testimonials[testimonialIndex],
        rating: 5,
        date: dates[dateIndex]
      });
    }

    return stories;
  };

  const stories = generateStories();

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStoryData = stories[currentStory];

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat`}>
            {t('storiesTitle')}
          </h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-montserrat`}>
            {t('storiesSubtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Story Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-primary-500/20">
            <div className="p-8">
              {/* Story Content */}
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold text-gray-900 dark:text-white font-montserrat`}>
                        {currentStoryData.customerName}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(currentStoryData.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                    <h4 className={`font-semibold text-red-600 dark:text-red-400 mb-2 font-montserrat`}>
                      المشكلة:
                    </h4>
                    <p className={`text-red-700 dark:text-red-300 font-montserrat`}>
                      {currentStoryData.problem}
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <h4 className={`font-semibold text-green-600 dark:text-green-400 mb-2 font-montserrat`}>
                      الحل:
                    </h4>
                    <p className={`text-green-700 dark:text-green-300 font-montserrat`}>
                      {currentStoryData.solution}
                    </p>
                  </div>

                  <blockquote className={`text-lg italic text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-inner border border-gray-200 dark:border-gray-700 font-montserrat`}>
                    "{currentStoryData.testimonial}"
                  </blockquote>

                  {/* Story Navigation */}
                  <div className="flex items-center justify-between mt-6">
                    <button
                      onClick={prevStory}
                      className={`flex items-center gap-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors shadow-md border border-gray-300 dark:border-gray-600 font-montserrat`}
                    >
                      <ChevronLeft className="w-5 h-5" />
                      السابق
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <span className={`text-sm text-gray-600 dark:text-gray-400 font-montserrat`}>
                        {currentStory + 1} من {stories.length}
                      </span>
                    </div>
                    
                    <button
                      onClick={nextStory}
                      className={`flex items-center gap-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg transition-colors shadow-md border border-gray-300 dark:border-gray-600 font-montserrat`}
                    >
                      التالي
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className={`text-2xl font-bold mb-4 font-montserrat`}>
                جربت تعريب في مكان تاني ومش راضي عن النتيجة؟
              </h3>
              <p className={`text-lg mb-6 opacity-90 font-montserrat`}>
                احنا متخصصين في إصلاح اللي غيرنا مقدرش يعمله. خلينا نرجع جهازك لأحسن من الأول.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('booking');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="glow-button cta-pulse urgent-cta bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
              >
                شوف التعريب بيتعمل ازاي عشان تطمن
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;