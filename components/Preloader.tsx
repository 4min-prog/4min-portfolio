import React, { useState, useEffect } from 'react';
import { translations, Language } from '../translations';

interface PreloaderProps {
  lang: Language;
}

const Preloader: React.FC<PreloaderProps> = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const t = translations[lang]?.preloader?.loading || 'Loading Excellence';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
      }, 800);
      return () => clearTimeout(exitTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-deep transition-transform duration-700 ease-in-out ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="relative">
        <div className="flex flex-col items-center">
          <div className="overflow-hidden mb-4">
            <h1 
              className={`text-6xl md:text-8xl font-bold text-white tracking-tighter transition-all duration-1000 transform ${
                isExiting ? 'translate-y-[-100%]' : 'translate-y-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              4<span className="text-accent">min</span>
            </h1>
          </div>
          
          <div className="w-32 h-[2px] bg-[#23232D] rounded-full overflow-hidden relative">
            <div 
              className={`absolute inset-0 bg-accent transition-all duration-[2000ms] ease-out`}
              style={{ width: isExiting ? '100%' : '100%' }}
            />
          </div>
          
          <p className="mt-4 text-accent/40 text-[10px] uppercase tracking-[0.3em] font-bold animate-pulse">
            {t}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
