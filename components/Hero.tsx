import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Code2, FileDown } from 'lucide-react';
import { Language } from '../translations';
import ParticleBackground from './ParticleBackground';
import CVModal from './CVModal';

interface HeroProps {
  t: any;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ t, lang }) => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);

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

  const titleWords = t.title.split(' ');
  const lastWord = titleWords.pop();

  return (
    <div className="relative pt-32 pb-20 md:pt-56 md:pb-48 overflow-hidden flex items-center justify-center min-h-[70vh] bg-[#09090B]">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-5xl mx-auto">
          <div className="section-label mb-8 md:mb-10 inline-flex">
            <span className="dot" />
            <span>{t.student}</span>
          </div>
          
          <h1 className="heading-xl mb-6 md:mb-8">
            {titleWords.join(' ')}{' '}
            <span className="text-gradient-accent">{lastWord}</span>
          </h1>
          
          <div className="h-8 md:h-10 mb-8 md:mb-10">
            <span className="text-lg md:text-2xl text-[#A1A1AA] font-medium">
              {displayText}
            </span>
            <span className="inline-block w-[2px] h-5 md:h-7 bg-[#7C3AED] ml-1 align-middle animate-pulse" />
          </div>
          
          <p className="text-base md:text-lg text-[#71717A] max-w-2xl mx-auto leading-relaxed mb-10 md:mb-12">
            {t.desc}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={(e) => scrollToSection(e, 'projects')}
              className="btn-primary"
            >
              {t.explore} <ArrowRight className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setCvModalOpen(true)}
              className="btn-primary"
            >
              <FileDown className="w-5 h-5" /> {t.downloadCV || 'Download CV'}
            </button>

            <button 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="btn-secondary"
            >
              {t.touch}
            </button>
          </div>
        </div>
      </div>
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
};

export default Hero;
