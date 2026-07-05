
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Reveal from './components/Reveal';
import Preloader from './components/Preloader';
import GeminiAssistant from './components/GeminiAssistant';
import { ArrowUp } from 'lucide-react';
import { Language, translations } from './translations';

const App: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      if (['tr', 'en', 'ar'].includes(browserLang)) {
        return browserLang as Language;
      }
    }
    return 'tr';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const totalScrollable = scrollHeight - clientHeight;
      
      // Reach 100% roughly 250px before the absolute bottom
      const progress = Math.min((scrollTop / (totalScrollable - 250)) * 100, 100);
      
      setScrollProgress(progress);
      setShowScrollTop(scrollTop > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLang = (l: Language) => setLang(l);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div 
      className="relative min-h-screen flex flex-col overflow-x-hidden bg-[#09090B] text-white transition-colors duration-300"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <Preloader />
      <CustomCursor />
      <Navbar 
        lang={lang} 
        toggleLang={toggleLang} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        t={t.nav} 
        scrollProgress={scrollProgress}
      />
      
      <main className="flex-grow">
        <section id="home" className="scroll-mt-32">
          <Reveal>
            <Hero t={t.hero} lang={lang} />
          </Reveal>
        </section>

        <section id="skills" className="py-28 md:py-36 scroll-mt-24 bg-[#09090B]">
          <Reveal>
            <Skills t={t.skills} />
          </Reveal>
        </section>

        <section id="timeline" className="py-28 md:py-36 scroll-mt-24 bg-[#121217]">
          <Reveal>
            <Timeline t={t.timeline} />
          </Reveal>
        </section>
        
        <section id="services" className="py-28 md:py-36 scroll-mt-24 bg-[#121217]">
          <Reveal>
            <Services t={t.services} />
          </Reveal>
        </section>
        
        <section id="projects" className="py-28 md:py-36 scroll-mt-24 bg-[#09090B]">
          <Reveal>
            <Projects t={t.projects} />
          </Reveal>
        </section>
        
        <section id="about" className="py-28 md:py-36 scroll-mt-24 bg-[#121217]">
          <Reveal>
            <About t={t.about} lang={lang} />
          </Reveal>
        </section>
        
        <section id="contact" className="py-28 md:py-36 scroll-mt-24 bg-[#09090B]">
          <Reveal>
            <Contact t={t.contact} />
          </Reveal>
        </section>
      </main>

      <Footer t={t.footer} lang={lang} />

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 ${lang === 'ar' ? 'right-8' : 'left-8'} z-40 p-3 bg-indigo-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-indigo-700 active:scale-95 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <GeminiAssistant lang={lang} t={t.ai} isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
