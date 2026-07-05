
import React, { useState, useEffect, Suspense, lazy } from 'react';
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

const FallingLight = lazy(() => import('./components/FallingLight'));

const App: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lang, setLang] = useState<Language>('tr');

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLang = (l: Language) => setLang(l);

  return (
    <div 
      className="relative min-h-screen flex flex-col overflow-x-hidden bg-deep text-white transition-colors duration-300"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <Preloader lang={lang} />
      <CustomCursor />

      <Navbar 
        lang={lang} 
        toggleLang={toggleLang} 
        t={t.nav} 
        scrollProgress={scrollProgress}
      />
      
      <main className="flex-grow">
        {/* FallingLight covers Hero → Skills → Timeline */}
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 90%)',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent 90%)'
          }}>
            <Suspense fallback={null}>
              <FallingLight />
            </Suspense>
          </div>

          <section id="home" className="relative scroll-mt-32">
            <div className="absolute inset-0 bg-deep/40 pointer-events-none" />
            <div className="relative z-10">
              <Reveal>
                <Hero t={t.hero} cvT={t.cv} lang={lang} />
              </Reveal>
            </div>
          </section>

          <section id="skills" className="relative py-28 md:py-36 scroll-mt-24">
            <div className="absolute inset-0 bg-deep/60 pointer-events-none" />
            <div className="relative z-10">
              <Reveal>
                <Skills t={t.skills} />
              </Reveal>
            </div>
          </section>

          <section id="timeline" className="relative py-28 md:py-36 scroll-mt-24">
            <div className="absolute inset-0 bg-surface/70 pointer-events-none" />
            <div className="relative z-10">
              <Reveal>
                <Timeline t={t.timeline} />
              </Reveal>
            </div>
          </section>
        </div>

        <section id="services" className="py-28 md:py-36 scroll-mt-24 bg-surface">
          <Reveal>
            <Services t={t.services} />
          </Reveal>
        </section>
        
        <section id="projects" className="py-28 md:py-36 scroll-mt-24 bg-deep">
          <Reveal>
            <Projects t={t.projects} />
          </Reveal>
        </section>
        
        <section id="about" className="py-28 md:py-36 scroll-mt-24 bg-surface">
          <Reveal>
            <About t={t.about} lang={lang} />
          </Reveal>
        </section>
        
        <section id="contact" className="py-28 md:py-36 scroll-mt-24 bg-deep">
          <Reveal>
            <Contact t={t.contact} />
          </Reveal>
        </section>
      </main>

      <Footer t={t.footer} lang={lang} />

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 ${lang === 'ar' ? 'right-8' : 'left-8'} z-40 p-3 bg-accent text-white rounded-full shadow-lg transition-all duration-300 hover:bg-accent-light active:scale-95 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <GeminiAssistant lang={lang} t={t.ai} />
    </div>
  );
};

export default App;
