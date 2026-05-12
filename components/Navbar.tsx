import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { Language } from '../translations';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  lang: Language;
  toggleLang: (l: Language) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  t: any;
  scrollProgress: number;
}

const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang, isDarkMode, toggleTheme, t, scrollProgress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    let timeoutId: number;
    const handleScroll = () => {
      // Throttle scroll updates to 60fps-ish (16ms) or just ensure it's not too frequent
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
      
      // Debounce section detection to save CPU/Battery on mobile
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
    { name: t.contact, id: 'contact' },
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
        {/* Desktop Navbar Container - Floating Pill */}
        <div className={`
          hidden md:flex items-center px-4 py-2 rounded-full border transition-all duration-500 pointer-events-auto
          ${scrolled 
            ? 'bg-gray-950/90 md:backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : isDarkMode 
              ? 'bg-white/10 md:backdrop-blur-md border-white/5 shadow-lg'
              : 'bg-gray-100/80 md:backdrop-blur-md border-gray-200 shadow-md'
          }
        `}>
          {/* Logo Section */}
          <div className="flex items-center mr-4 pl-1">
            <button 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center group cursor-pointer"
            >
              <span className={`
                font-bold tracking-tighter text-xl transition-colors
                ${(scrolled || isDarkMode) ? 'text-white group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'}
              `}>4min</span>
            </button>
          </div>

          <div className={`h-6 w-[1px] mx-4 transition-colors ${(scrolled || isDarkMode) ? 'bg-white/10' : 'bg-gray-200'}`} />

          <div className="flex items-center space-x-1 relative">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => scrollToSection(e, link.id)}
                onMouseEnter={() => setHoveredId(link.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative px-4 py-2 rounded-full text-sm font-bold transition-colors duration-200 cursor-pointer
                  ${(hoveredId === link.id || activeId === link.id) 
                    ? (link.id === 'home' ? 'text-indigo-400' : 'text-white') 
                    : (scrolled || isDarkMode) ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                <span className="relative z-10">{link.name}</span>
                {hoveredId === link.id && (
                  <motion.div
                    layoutId="navbar-highlight"
                    className="absolute inset-0 bg-indigo-600 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
                {activeId === link.id && hoveredId === null && (
                  <motion.div
                    layoutId="navbar-highlight"
                    className={`absolute inset-0 rounded-full ${link.id === 'home' ? 'bg-indigo-600/20' : (scrolled || isDarkMode) ? 'bg-white/10' : 'bg-gray-950/10'}`}
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className={`h-6 w-[1px] mx-4 transition-colors ${(scrolled || isDarkMode) ? 'bg-white/10' : 'bg-gray-200'}`} />

          <div className="flex items-center space-x-3">
            <div className={`flex items-center rounded-full p-1 border transition-colors ${(scrolled || isDarkMode) ? 'bg-white/5 border-white/5' : 'bg-gray-200/50 border-gray-200'}`}>
              {(['en', 'tr', 'ar'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => toggleLang(l)}
                  className={`
                    px-2 py-1 text-[10px] font-bold rounded-full uppercase transition-all cursor-pointer
                    ${lang === l 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : (scrolled || isDarkMode) ? 'text-gray-500 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                    }
                  `}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className={`
                p-2 rounded-full transition-all cursor-pointer border
                ${(scrolled || isDarkMode) 
                  ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border-white/5' 
                  : 'bg-gray-200/50 text-gray-600 hover:text-gray-900 hover:bg-gray-200 border-gray-200'
                }
              `}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navbar - Small Pill */}
        <div className={`
          md:hidden flex items-center justify-between w-full px-4 py-2 rounded-full border transition-all duration-300 pointer-events-auto
          ${scrolled 
            ? 'bg-gray-950/95 backdrop-blur-sm border-white/10 shadow-xl' 
            : isDarkMode
              ? 'bg-white/20 backdrop-blur-sm border-white/10 shadow-lg'
              : 'bg-gray-100/95 backdrop-blur-sm border-gray-200 shadow-md'
          }
        `}>
          <div className="flex items-center pl-2">
            <span className={`font-bold text-lg tracking-tighter ${(scrolled || isDarkMode) ? 'text-white' : 'text-gray-900'}`}>4min</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${(scrolled || isDarkMode) ? 'bg-white/5 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-all ${(scrolled || isDarkMode) ? 'bg-white/5 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden fixed inset-4 z-[60] bg-gray-950/98 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-[0_32px_64px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="p-6 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center">
                <span className="font-bold text-white text-2xl tracking-tighter">4min</span>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                </div>
                <button
                  onClick={toggleTheme}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white"
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 px-6 py-8 overflow-y-auto space-y-2 flex flex-col">
              {navLinks.filter(link => link.id !== 'contact').map((link) => (
                <button
                  key={link.id}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className="w-full text-left py-4 text-3xl font-bold text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="mt-auto pt-6">
                <button
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="w-full py-6 rounded-[2rem] bg-indigo-600 text-white text-2xl font-bold shadow-lg shadow-indigo-600/20 active:scale-95 transition-all"
                >
                  {t.contact}
                </button>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-8 border-t border-white/5 flex flex-col items-start space-y-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Language</span>
              <div className="flex bg-white/5 rounded-full p-1.5 border border-white/5">
                {(['en', 'tr', 'ar'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => toggleLang(l)}
                    className={`
                      px-4 py-2 text-xs font-bold rounded-full uppercase transition-all whitespace-nowrap
                      ${lang === l ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-400'}
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

      {/* Progress Bar - Floating at the top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5">
        <motion.div 
          className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
