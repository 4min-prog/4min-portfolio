import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, GraduationCap } from 'lucide-react';
import { Language } from '../translations';
import ParticleBackground from './ParticleBackground';

interface HeroProps {
  t: any;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = t.roles[roleIndex];
      
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);

        if (charIndex === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % t.roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, t.roles]);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-56 md:pb-48 overflow-hidden transition-colors flex items-center justify-center min-h-[70vh]">
      <ParticleBackground />
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/8 dark:bg-purple-600/8 rounded-full blur-3xl animate-blob animation-delay-2000" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/8 dark:bg-blue-600/8 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-600/5 rounded-full blur-[120px]" />
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse px-5 py-2.5 rounded-full bg-indigo-600/10 dark:bg-indigo-500/10 border border-indigo-600/20 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-[0.2em] mb-10 shadow-sm backdrop-blur-sm">
            <GraduationCap className="w-4 h-4" />
            <span>{t.student}</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 dark:text-white leading-[1.1] mb-10 tracking-tighter">
            {t.title} <br />
            <span className="inline-block mt-2 min-h-[1.2em] md:min-h-[1.1em] overflow-visible">
              <span className="text-indigo-600 dark:text-indigo-400 drop-shadow-sm">
                {displayText}
              </span>
              <span className="inline-block w-[22px] h-[6px] bg-indigo-600 dark:bg-indigo-400 ml-1.5 rtl:mr-1.5 rtl:ml-0 translate-y-[-1px] animate-pulse"></span>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium opacity-80">
            {t.desc}
          </p>
          
          {/* Actions - Activated with JS Smooth Scroll */}
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="inline-flex items-center px-10 py-4 rounded-2xl bg-indigo-600 text-white font-black shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 hover:shadow-indigo-600/40 transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer"
            >
              {t.explore} <ArrowRight className={`ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180 w-6 h-6`} />
            </button>
            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="inline-flex items-center px-10 py-4 rounded-2xl border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-black hover:bg-gray-50 dark:hover:bg-gray-900 transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer"
            >
              {t.touch}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
