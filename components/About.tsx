import React from 'react';
import { User, Laptop, Code2, Terminal } from 'lucide-react';
import { Language } from '../translations';

interface AboutProps {
  t: any;
  lang: Language;
}

const About: React.FC<AboutProps> = ({ t, lang }) => {
  const stats = [
    { label: t.stats.status, value: t.active },
    { label: t.stats.count, value: '15+' },
    { label: t.stats.coffee, value: '3+' },
    { label: t.stats.goals, value: t.unlimited },
  ];

  const icons = [
    <Terminal className="w-5 h-5" />,
    <Laptop className="w-5 h-5" />,
    <Code2 className="w-5 h-5" />,
    <User className="w-5 h-5" />
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-20">
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-[420px]">
            <div className="relative z-10 premium-card overflow-hidden aspect-[3/4] sm:aspect-[4/5]">
              <img
                src="/image/my.jpg"
                alt="4min — Web Developer"
                loading="lazy"
                width={420}
                height={560}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#09090B]/90 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-xl tracking-tight">4min</p>
                    <p className="text-[#A1A1AA] text-xs font-bold uppercase tracking-widest">
                      {t.badgeTitle} · {t.badgeSubtitle}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#7C3AED]/10 text-[#8B5CF6] text-xs font-bold rounded-full border border-[#7C3AED]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                    {t.active}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full lg:w-1/2 ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'} order-1 lg:order-2`}>
          <div className="section-label mb-6 inline-flex">
            <span className="dot" />
            <span>{t.title}</span>
          </div>
          <h2 className="heading-lg mb-8">{t.title}</h2>
          
          <p className="text-lg text-[#A1A1AA] mb-12 leading-relaxed italic border-l-2 border-[#7C3AED] pl-6 rtl:border-l-0 rtl:border-r-2 rtl:pr-6">
            {t.quote}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {t.items.map((item: any, idx: number) => (
              <div key={idx} className="premium-card p-6 group">
                <div className={`flex items-center space-x-3 ${lang === 'ar' ? 'space-x-reverse' : ''} mb-3`}>
                  <div className="w-10 h-10 rounded-lg bg-[#121217] border border-[#23232D] flex items-center justify-center text-white group-hover:text-[#7C3AED] transition-colors">
                    {icons[idx]}
                  </div>
                  <h4 className="font-bold text-white">{item.t}</h4>
                </div>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 border-t border-[#23232D]">
            {stats.map((stat, idx) => (
              <div key={idx} className="premium-card p-5 text-center hover:scale-[1.02] transition-transform">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-[10px] text-[#71717A] font-bold uppercase tracking-widest leading-tight mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
