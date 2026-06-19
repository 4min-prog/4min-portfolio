
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
    <Terminal className="w-6 h-6" />,
    <Laptop className="w-6 h-6" />,
    <Code2 className="w-6 h-6" />,
    <User className="w-6 h-6" />
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-20">
        {/* Left Side: Profile Photo */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
          <div className="relative w-full max-w-[420px]">
            {/* Background blobs */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '2s' }} />

            {/* Photo Card */}
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700 aspect-[3/4] sm:aspect-[4/5]">
              <img
                src="/image/my.jpg"
                alt="4min — Web Developer"
                loading="lazy"
                width={420}
                height={560}
                className="w-full h-full object-cover object-center"
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950/90 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-black text-xl tracking-tight">4min</p>
                    <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
                      {t.badgeTitle} · {t.badgeSubtitle}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {t.active}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={`w-full lg:w-1/2 ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'} order-1 lg:order-2`}>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-none">
            {t.title}
          </h2>
          <div className={`w-32 h-2.5 bg-indigo-600 rounded-full mb-12 ${lang === 'ar' ? 'mr-0' : 'ml-0'}`} />
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed font-medium italic opacity-90 border-l-4 border-indigo-600 dark:border-indigo-400 pl-6 rtl:border-l-0 rtl:border-r-4 rtl:pr-6">
            {t.quote}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {t.items.map((item: any, idx: number) => (
              <div key={idx} className="group p-6 bg-white dark:bg-gray-800/60 rounded-3xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50">
                <div className={`flex items-center space-x-4 ${lang === 'ar' ? 'space-x-reverse' : ''} mb-4`}>
                  <div className="p-3 bg-indigo-100 dark:bg-gray-700 rounded-2xl shadow-sm text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {icons[idx]}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{item.t}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12 border-t border-gray-100 dark:border-gray-800">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-800/40 p-5 rounded-3xl shadow-sm border border-transparent dark:border-gray-700/30 text-center hover:scale-105 transition-transform">
                <p className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-widest leading-tight mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
