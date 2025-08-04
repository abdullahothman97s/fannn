import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [displayCount, setDisplayCount] = useState(8);

  const categories = [
    { id: 'all', name: language === 'ar' ? 'جميع المشاريع' : 'All Projects' },
    { id: 'laptops', name: language === 'ar' ? 'لابتوبات' : 'Laptops' },
    { id: 'keyboards', name: language === 'ar' ? 'كيبوردات' : 'Keyboards' },
    { id: 'medals', name: language === 'ar' ? 'ميداليات ومواد' : 'Medals & Items' }
  ];

  // Generate 120 gallery items
  const generateGalleryItems = () => {
    const items = [];
    const laptopModels = ['MacBook Pro', 'MacBook Air', 'HP Pavilion', 'Dell XPS', 'Lenovo ThinkPad', 'ASUS ZenBook', 'Acer Aspire', 'MSI Gaming', 'Surface Laptop', 'Toshiba Satellite'];
    const keyboardModels = ['Mechanical RGB', 'Gaming Keyboard', 'Wireless Keyboard', 'Corsair K95', 'Razer BlackWidow', 'Logitech G915', 'SteelSeries Apex', 'HyperX Alloy', 'Cooler Master', 'ASUS ROG'];
    const medalTypes = ['Corporate Awards', 'Sports Medals', 'Achievement Trophies', 'Custom Plaques', 'Promotional Items', 'Company Logos', 'Event Medals', 'Recognition Awards', 'Championship Cups', 'Memorial Plaques'];

    const images = [
      'https://i.postimg.cc/1zkJRGD9/image.png',
      'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1652209/pexels-photo-1652209.jpeg?auto=compress&cs=tinysrgb&w=500'
    ];

    for (let i = 1; i <= 120; i++) {
      let category, title, description;
      
      if (i <= 40) {
        category = 'laptops';
        const model = laptopModels[i % laptopModels.length];
        title = language === 'ar' ? `تعريب ${model}` : `${model} Arabic Keys`;
        description = language === 'ar' ? 'تخطيط كيبورد عربي مخصص' : 'Custom Arabic keyboard layout';
      } else if (i <= 80) {
        category = 'keyboards';
        const model = keyboardModels[(i - 41) % keyboardModels.length];
        title = language === 'ar' ? `تخصيص ${model}` : `${model} Custom`;
        description = language === 'ar' ? 'كيبورد ألعاب مع رموز مخصصة' : 'Gaming keyboard with custom symbols';
      } else {
        category = 'medals';
        const type = medalTypes[(i - 81) % medalTypes.length];
        title = language === 'ar' ? `${type} مخصص` : `Custom ${type}`;
        description = language === 'ar' ? 'ميداليات منقوشة للإنجازات' : 'Engraved achievement medals';
      }

      items.push({
        id: i,
        category,
        before: images[Math.floor(Math.random() * images.length)],
        after: images[Math.floor(Math.random() * images.length)],
        title,
        description
      });
    }
    return items;
  };

  const galleryItems = generateGalleryItems();

  const filteredItems = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === selectedCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchTerm, galleryItems]);

  const displayedItems = filteredItems.slice(0, displayCount);

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 30, filteredItems.length));
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % displayedItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? displayedItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-montserrat">
            {language === 'ar' ? 'معرض قبل وبعد' : 'Before & After Gallery'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-montserrat">
            {language === 'ar' ? 'شاهد تحول أعمال تعريب الكيبورد بالليزر' : 'See the transformation of our laser engraving work'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={language === 'ar' ? 'ابحث عن موديل الكيبورد...' : 'Search for keyboard model...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent font-montserrat"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 font-montserrat ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 dark:text-gray-400 font-montserrat">
            {language === 'ar' 
              ? `عرض ${displayedItems.length} من ${filteredItems.length} نتيجة`
              : `Showing ${displayedItems.length} of ${filteredItems.length} results`
            }
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 hover:border-primary-500/50"
            >
              {/* Before/After Images */}
              <div className="relative h-64 overflow-hidden">
                <div className="grid grid-cols-2 h-full">
                  <div className="relative">
                    <img
                      src={item.before}
                      alt={`${item.title} - ${language === 'ar' ? 'قبل' : 'Before'}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium font-montserrat">
                      {language === 'ar' ? 'قبل' : 'Before'}
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={item.after}
                      alt={`${item.title} - ${language === 'ar' ? 'بعد' : 'After'}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium font-montserrat">
                      {language === 'ar' ? 'بعد' : 'After'}
                    </div>
                  </div>
                </div>
                
                {/* Zoom Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(index)}
                    className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300"
                  >
                    <ZoomIn className="w-6 h-6 text-gray-900" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 font-montserrat">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-montserrat">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayCount < filteredItems.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="glow-button cta-bounce bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-montserrat"
            >
              {language === 'ar' ? 'عرض المزيد' : 'Load More'}
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 hover:text-black rounded-full p-3 transition-all duration-300 z-10 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 hover:text-black rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 hover:text-black rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center">
                  <img
                    src={displayedItems[selectedImage].before}
                    alt={`${displayedItems[selectedImage].title} - ${language === 'ar' ? 'قبل' : 'Before'}`}
                    className="max-w-full max-h-96 object-contain rounded-lg"
                  />
                  <p className="text-white mt-2 font-medium font-montserrat">{language === 'ar' ? 'قبل' : 'Before'}</p>
                </div>
                <div className="text-center">
                  <img
                    src={displayedItems[selectedImage].after}
                    alt={`${displayedItems[selectedImage].title} - ${language === 'ar' ? 'بعد' : 'After'}`}
                    className="max-w-full max-h-96 object-contain rounded-lg"
                  />
                  <p className="text-white mt-2 font-medium font-montserrat">{language === 'ar' ? 'بعد' : 'After'}</p>
                </div>
              </div>

              {/* Title */}
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-white mb-2 font-montserrat">
                  {displayedItems[selectedImage].title}
                </h3>
                <p className="text-gray-300 font-montserrat">
                  {displayedItems[selectedImage].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;