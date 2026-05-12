import React, { useState, useEffect } from 'react';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show loader for 2 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for exit animation to finish
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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gray-950 transition-transform duration-700 ease-in-out ${
        isExiting ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="relative">
        {/* Animated Name */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden mb-4">
            <h1 
              className={`text-6xl md:text-8xl font-black text-white tracking-tighter transition-all duration-1000 transform ${
                isExiting ? 'translate-y-[-100%]' : 'translate-y-0'
              }`}
              style={{ transitionDelay: '0.1s' }}
            >
              4<span className="text-indigo-600">min</span>
            </h1>
          </div>
          
          {/* Progress Line */}
          <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden relative">
            <div 
              className={`absolute inset-0 bg-indigo-600 transition-all duration-[2000ms] ease-out ${
                isExiting ? 'w-full' : 'w-0'
              }`}
              style={{ width: isExiting ? '100%' : '100%' }}
            />
          </div>
          
          <p className="mt-4 text-indigo-400/60 text-[10px] uppercase tracking-[0.3em] font-bold animate-pulse">
            Loading Excellence
          </p>
        </div>

        {/* Decorative corner blobs for preloader */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>
    </div>
  );
};

export default Preloader;
