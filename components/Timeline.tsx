import React, { useEffect, useRef, useState } from 'react';
import { Code2, Gamepad2, Wrench, Rocket, Star, Award, GraduationCap } from 'lucide-react';

interface TimelineProps {
  t: any;
}

const timelineItems = [
  { year: '2023', icon: <GraduationCap className="w-5 h-5" />, key: 'edu' },
  { year: '2024', icon: <Code2 className="w-5 h-5" />, key: 'web' },
  { year: '2024', icon: <Gamepad2 className="w-5 h-5" />, key: 'game' },
  { year: '2025', icon: <Wrench className="w-5 h-5" />, key: 'tools' },
  { year: '2026', icon: <GraduationCap className="w-5 h-5" />, key: 'grad' },
  { year: '2026', icon: <Rocket className="w-5 h-5" />, key: 'future' }
];

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
      <div className="text-center mb-24 relative">
        <div className="section-label mb-6 inline-flex">
          <span className="dot" />
          <span>Professional Growth</span>
        </div>
        <h2 className="heading-lg mb-6">{t.title}</h2>
        <p className="text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div ref={ref} className="relative mt-8">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#23232D] md:-translate-x-px" />

        <div className="space-y-16 md:space-y-24">
          {timelineItems.map((item, idx) => {
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
                <div className={`hidden md:flex md:w-1/2 ${isLeft ? 'justify-end pr-16 text-right' : 'order-last justify-start pl-16 text-left'}`}>
                  {isLeft && (
                    <div className="max-w-md group-hover:scale-[1.02] transition-transform duration-500">
                      <span className="inline-block text-[11px] font-bold tracking-widest px-3 py-1 rounded-lg mb-4 bg-[#121217] text-[#A1A1AA] border border-[#23232D]">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight">
                        {data.title}
                      </h3>
                      <p className="text-base text-[#71717A] leading-relaxed">
                        {data.desc}
                      </p>
                    </div>
                  )}
                  {!isLeft && <div className="invisible" />}
                </div>

                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:mt-1">
                  <div className="w-12 h-12 rounded-xl bg-[#121217] border border-[#23232D] flex items-center justify-center text-[#A1A1AA] group-hover:text-[#7C3AED] group-hover:border-[#7C3AED] transition-all duration-500">
                    {item.icon}
                  </div>
                  {idx === timelineItems.length - 1 && (
                    <div className="absolute inset-0 rounded-xl bg-[#7C3AED] animate-ping opacity-10 -z-10" />
                  )}
                </div>

                <div className={`hidden md:flex md:w-1/2 ${!isLeft ? 'justify-start pl-16 text-left' : 'order-first justify-end pr-16 text-right'}`}>
                  {!isLeft && (
                    <div className="max-w-md group-hover:scale-[1.02] transition-transform duration-500">
                      <span className="inline-block text-[11px] font-bold tracking-widest px-3 py-1 rounded-lg mb-4 bg-[#121217] text-[#A1A1AA] border border-[#23232D]">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-4 tracking-tight leading-tight">
                        {data.title}
                      </h3>
                      <p className="text-base text-[#71717A] leading-relaxed">
                        {data.desc}
                      </p>
                    </div>
                  )}
                </div>

                <div className="md:hidden flex-grow pl-6">
                  <div className="premium-card p-6">
                    <span className="inline-block text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-lg mb-3 bg-[#121217] text-[#A1A1AA] border border-[#23232D]">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {data.title}
                    </h3>
                    <p className="text-sm text-[#71717A] leading-relaxed">
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
