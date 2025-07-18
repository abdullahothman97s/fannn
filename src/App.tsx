import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import CustomerStories from './components/CustomerStories';
import Booking from './components/Booking';
import WhatsAppChat from './components/WhatsAppChat';
import GoogleMaps from './components/GoogleMaps';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-3ا0">
          <Header />
          <main>
            <Hero />
            <Services />
            <Gallery />
            <CustomerStories />
            <Booking />
            <GoogleMaps />
          </main>
          <Footer />
          <WhatsAppChat />
          
          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-20 right-4 z-40 glow-button bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
          )}
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;