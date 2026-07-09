import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../translations';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  lang: Language;
  toggleLang: (l: Language) => void;
  t: any;
  scrollProgress: number;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang, t, scrollProgress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
      
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        const sections = ['home', 'skills', 'timeline', 'services', 'projects', 'about', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= -100 && rect.top <= 200) {
              setActiveId(section);
              break;
            }
          }
        }
      }, 100) as unknown as number;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  const navLinks = [
    { name: t.home, id: 'home' },
    { name: t.skills, id: 'skills' },
    { name: t.timeline, id: 'timeline' },
    { name: t.services, id: 'services' },
    { name: t.projects, id: 'projects' },
    { name: t.about, id: 'about' },
    { name: t.contact, id: 'contact', url: 'https://4MINlink.vercel.app/' },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex justify-center">
        <div className={`
          hidden md:flex items-center px-4 py-2 rounded-full border transition-all duration-500 pointer-events-auto
          ${scrolled 
            ? 'bg-deep/90 backdrop-blur-xl border-border shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
            : 'bg-deep/60 backdrop-blur-md border-border/60 shadow-lg'
          }
        `}>
          <div className="flex items-center me-4 ps-1">
            <button 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center group cursor-pointer"
            >
              <span className="font-bold tracking-tighter text-xl text-white">
                4MIN
              </span>
            </button>
          </div>

          <div className="h-6 w-[1px] mx-4 bg-[#23232D]" />

          <div className="flex items-center space-x-1 rtl:space-x-reverse relative">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => scrollToSection(e, link.id)}
                onMouseEnter={() => setHoveredId(link.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer
                  ${activeId === link.id 
                    ? 'text-white' 
                    : 'text-muted hover:text-secondary'
                  }
                `}
              >
                <span className="relative z-10">{link.name}</span>
                {hoveredId === link.id && !(activeId === link.id) && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/5 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
                {activeId === link.id && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(124, 58, 237, 0.05))',
                      border: '1px solid rgba(124, 58, 237, 0.2)'
                    }}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="h-6 w-[1px] mx-4 bg-[#23232D]" />

          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="flex items-center rounded-full p-1 border border-border bg-surface">
              {(['en', 'tr', 'ar'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => toggleLang(l)}
                  className={`
                    px-2 py-1 text-[10px] font-bold rounded-full uppercase transition-all cursor-pointer
                    ${lang === l 
                      ? 'bg-accent text-white' 
                      : 'text-muted hover:text-secondary'
                    }
                  `}
                >
                  {l}
                </button>
              ))}
            </div>

          </div>
        </div>

        <div className={`
          md:hidden flex items-center justify-between w-full px-4 py-2 rounded-full border transition-all duration-300 pointer-events-auto
          ${scrolled 
            ? 'bg-deep/95 backdrop-blur-sm border-border shadow-xl' 
            : 'bg-deep/80 backdrop-blur-sm border-border/60 shadow-lg'
          }
        `}>
          <div className="flex items-center ps-2">
            <span className="font-bold text-lg tracking-tighter text-white">4MIN</span>
          </div>

          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-surface text-white border border-border"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden fixed inset-4 z-[60] bg-deep backdrop-blur-xl rounded-[2rem] border border-border shadow-[0_32px_64px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-border">
              <div className="flex items-center">
                <span className="font-bold text-white text-2xl tracking-tighter">4MIN</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-border text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 px-6 py-8 overflow-y-auto space-y-2 flex flex-col">
              {navLinks.filter(link => link.id !== 'contact').map((link) => (
                <button
                  key={link.id}
                onClick={(e) => link.url ? window.open(link.url, '_blank', 'noopener,noreferrer') : scrollToSection(e, link.id)}
                  className={`w-full text-start py-4 text-3xl font-bold transition-colors ${
                    activeId === link.id ? 'text-white' : 'text-muted hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              <div className="mt-auto pt-6">
                <a
                  href="https://4MINlink.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-6 rounded-[1.5rem] text-white text-2xl font-bold border border-border bg-surface hover:border-accent transition-all active:scale-95 text-center"
                >
                  {t.contact}
                </a>
              </div>
            </div>

            <div className="p-8 border-t border-border flex flex-col items-start space-y-4">
              <span className="text-xs font-bold text-muted uppercase tracking-widest px-1">{t.language}</span>
              <div className="flex bg-surface rounded-full p-1.5 border border-border">
                {(['en', 'tr', 'ar'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => toggleLang(l)}
                    className={`
                      px-4 py-2 text-xs font-bold rounded-full uppercase transition-all whitespace-nowrap
                      ${lang === l ? 'bg-accent text-white' : 'text-muted'}
                    `}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-0 left-0 right-0 h-[1px] bg-[#23232D]">
        <motion.div 
          className="h-full bg-accent"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
