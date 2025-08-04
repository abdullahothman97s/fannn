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

  // 🔁 صور مخصصة لكل موديل
  const imageMap = {
    laptops: [
      { model: 'MacBook Pro', before: 'https://example.com/macbook-before.jpg', after: 'https://example.com/macbook-after.jpg' },
      { model: 'HP Pavilion', before: 'https://example.com/hp-before.jpg', after: 'https://example.com/hp-after.jpg' },
      // أضف باقي الموديلات...
    ],
    keyboards: [
      { model: 'Mechanical RGB', before: 'https://example.com/mech-before.jpg', after: 'https://example.com/mech-after.jpg' },
      { model: 'Corsair K95', before: 'https://example.com/k95-before.jpg', after: 'https://example.com/k95-after.jpg' },
      // أضف باقي الموديلات...
    ],
    medals: [
      { model: 'Sports Medals', before: 'https://example.com/sports-before.jpg', after: 'https://example.com/sports-after.jpg' },
      { model: 'Corporate Awards', before: 'https://example.com/corp-before.jpg', after: 'https://example.com/corp-after.jpg' },
      // أضف باقي الأنواع...
    ]
  };

  const laptopModels = imageMap.laptops.map(item => item.model);
  const keyboardModels = imageMap.keyboards.map(item => item.model);
  const medalTypes = imageMap.medals.map(item => item.model);

  // ✅ توليد العناصر مع ربط الصور
  const generateGalleryItems = () => {
    const items = [];

    for (let i = 0; i < 120; i++) {
      let category, model, title, description, before, after;

      if (i < 40) {
        category = 'laptops';
        model = laptopModels[i % laptopModels.length];
        const match = imageMap.laptops.find(m => m.model === model);
        before = match?.before || '';
        after = match?.after || '';
        title = language === 'ar' ? `تعريب ${model}` : `${model} Arabic Keys`;
        description = language === 'ar' ? 'تخطيط كيبورد عربي مخصص' : 'Custom Arabic keyboard layout';

      } else if (i < 80) {
        category = 'keyboards';
        model = keyboardModels[(i - 40) % keyboardModels.length];
        const match = imageMap.keyboards.find(m => m.model === model);
        before = match?.before || '';
        after = match?.after || '';
        title = language === 'ar' ? `تخصيص ${model}` : `${model} Custom`;
        description = language === 'ar' ? 'كيبورد ألعاب مع رموز مخصصة' : 'Gaming keyboard with custom symbols';

      } else {
        category = 'medals';
        model = medalTypes[(i - 80) % medalTypes.length];
        const match = imageMap.medals.find(m => m.model === model);
        before = match?.before || '';
        after = match?.after || '';
        title = language === 'ar' ? `${model} مخصص` : `Custom ${model}`;
        description = language === 'ar' ? 'ميداليات منقوشة للإنجازات' : 'Engraved achievement medals';
      }

      items.push({
        id: i + 1,
        category,
        before,
        after,
        title,
        description
      });
    }

    return items;
  };

  const galleryItems = generateGalleryItems();

  const filteredItems = useMemo(() => {
    let filtered = selectedCategory === 'all' ? galleryItems : galleryItems.filter(item => item.category === selectedCategory);
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

  // ✅ باقي الكود نفس ما عندك (الـ JSX الخاص بالعرض)
  // احتفظ بكل ما كتبته، لأن الباقي عرض فقط، والتغيير المهم كان في الجزء الخاص بتوليد البيانات `generateGalleryItems`

  return (
    // الكود JSX نفسه بدون تغيير...
    <></> // ← استبدله بالواجهة اللي كتبتها أنت
  );
};

export default Gallery;
