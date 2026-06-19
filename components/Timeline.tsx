
import React, { useEffect, useRef, useState } from 'react';
import { Code2, Gamepad2, Wrench, Rocket, Star, Award, GraduationCap } from 'lucide-react';

interface TimelineProps {
  t: any;
}

const timelineItems = [
  {
    year: '2023',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'indigo',
    key: 'edu'
  },
  {
    year: '2024',
    icon: <Code2 className="w-5 h-5" />,
    color: 'blue',
    key: 'web'
  },
  {
    year: '2024',
    icon: <Gamepad2 className="w-5 h-5" />,
    color: 'purple',
    key: 'game'
  },
  {
    year: '2025',
    icon: <Wrench className="w-5 h-5" />,
    color: 'emerald',
    key: 'tools'
  },
  {
    year: '2026',
    icon: <GraduationCap className="w-5 h-5" />,
    color: 'indigo',
    key: 'grad'
  },
  {
    year: '2026',
    icon: <Rocket className="w-5 h-5" />,
    color: 'orange',
    key: 'future'
  }
];

const colorMap: Record<string, { dot: string; icon: string; border: string; badge: string; shadow: string }> = {
  indigo:  { 
    dot: 'bg-indigo-500',  
    icon: 'bg-indigo-500/15 text-indigo-500',  
    border: 'border-indigo-500/30',  
    badge: 'bg-indigo-500/10 text-indigo-400',
    shadow: 'shadow-indigo-500/20'
  },
  blue:    { 
    dot: 'bg-blue-500',    
    icon: 'bg-blue-500/15 text-blue-500',      
    border: 'border-blue-500/30',    
    badge: 'bg-blue-500/10 text-blue-400',
    shadow: 'shadow-blue-500/20'
  },
  purple:  { 
    dot: 'bg-purple-500',  
    icon: 'bg-purple-500/15 text-purple-500',  
    border: 'border-purple-500/30',  
    badge: 'bg-purple-500/10 text-purple-400',
    shadow: 'shadow-purple-500/20'
  },
  emerald: { 
    dot: 'bg-emerald-500', 
    icon: 'bg-emerald-500/15 text-emerald-500', 
    border: 'border-emerald-500/30', 
    badge: 'bg-emerald-500/10 text-emerald-400',
    shadow: 'shadow-emerald-500/20'
  },
  orange:  { 
    dot: 'bg-orange-500',  
    icon: 'bg-orange-500/15 text-orange-500',  
    border: 'border-orange-500/30',  
    badge: 'bg-orange-500/10 text-orange-400',
    shadow: 'shadow-orange-500/20'
  },
};

const Timeline: React.FC<TimelineProps> = ({ t }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items: { title: string; desc: string }[] = t.items || [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header with improved styling */}
      <div className="text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 bg-indigo-500/10 blur-[100px] pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-widest mb-6 border border-indigo-500/20">
          <Star className="w-3 h-3 fill-current" />
          <span>Professional Growth</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-none tracking-tighter">
          {t.title}
        </h2>
        <div className="w-24 h-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-auto mb-8" />
        <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto opacity-75">
          {t.desc}
        </p>
      </div>

      {/* Timeline Container */}
      <div ref={ref} className="relative mt-8">
        {/* Fancy Vertical Line with Gradient */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-orange-500 md:-translate-x-px opacity-20" />

        <div className="space-y-16 md:space-y-24">
          {timelineItems.map((item, idx) => {
            const c = colorMap[item.color];
            const data = items[idx] || { title: '', desc: '' };
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative flex items-center md:items-start group transition-all duration-1000 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Desktop Left Content */}
                <div className={`hidden md:flex md:w-1/2 ${isLeft ? 'justify-end pr-16 text-right' : 'order-last justify-start pl-16 text-left'}`}>
                  {isLeft && (
                    <div className="max-w-md group-hover:scale-[1.02] transition-transform duration-500">
                      <span className={`inline-block text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-xl mb-4 ${c.badge} border border-white/5 dark:border-white/5`}>
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-indigo-400 transition-colors">
                        {data.title}
                      </h3>
                      <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                        {data.desc}
                      </p>
                    </div>
                  )}
                  {!isLeft && <div className="invisible" />}
                </div>

                {/* Animated Central Node (Icon) */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:mt-1">
                  <div className={`w-14 h-14 rounded-[1.25rem] ${c.icon} flex items-center justify-center shadow-xl ${c.shadow} border-2 border-white dark:border-gray-950 ring-4 ring-transparent group-hover:ring-indigo-500/20 transition-all duration-500 group-hover:rotate-12`}>
                    {item.icon}
                  </div>
                  {/* Pulse effect for the latest item */}
                  {idx === timelineItems.length - 1 && (
                    <div className="absolute inset-0 rounded-[1.25rem] bg-orange-500 animate-ping opacity-20 -z-10" />
                  )}
                </div>

                {/* Desktop Right Content */}
                <div className={`hidden md:flex md:w-1/2 ${!isLeft ? 'justify-start pl-16 text-left' : 'order-first justify-end pr-16 text-right'}`}>
                  {!isLeft && (
                    <div className="max-w-md group-hover:scale-[1.02] transition-transform duration-500">
                      <span className={`inline-block text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-xl mb-4 ${c.badge} border border-white/5 dark:border-white/5`}>
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 tracking-tight leading-tight group-hover:text-indigo-400 transition-colors">
                        {data.title}
                      </h3>
                      <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                        {data.desc}
                      </p>
                    </div>
                  )}
                </div>

                {/* Mobile Content (Standard stack) */}
                <div className="md:hidden flex-grow pl-6">
                  <div className={`p-6 bg-white dark:bg-gray-800/40 backdrop-blur-md rounded-[2rem] border ${c.border} shadow-lg shadow-black/5`}>
                    <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-lg mb-3 ${c.badge}`}>
                      {item.year}
                    </span>
                    <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2 leading-tight">
                      {data.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
