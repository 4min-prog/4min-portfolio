
import React, { useEffect, useRef, useState } from 'react';
import { Code2, Monitor, Gamepad2, Layout } from 'lucide-react';

interface SkillsProps {
  t: any;
}

const skillCategories = [
  {
    key: 'web',
    icon: <Layout className="w-7 h-7 text-indigo-500" />,
    color: 'indigo',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 78 },
      { name: 'React', level: 75 },
      { name: 'PHP', level: 65 },
      { name: 'Laravel', level: 60 },
      { name: 'WordPress', level: 65 },
    ]
  },
  {
    key: 'desktop',
    icon: <Monitor className="w-7 h-7 text-blue-500" />,
    color: 'blue',
    skills: [
      { name: 'C#', level: 72 },
      { name: 'WinForms', level: 65 },
      { name: 'SQL / Database', level: 60 },
      { name: 'MySQL', level: 70 },
    ]
  },
  {
    key: 'games',
    icon: <Gamepad2 className="w-7 h-7 text-purple-500" />,
    color: 'purple',
    skills: [
      { name: 'HTML5 Game Dev', level: 80 },
      { name: 'JS Game Engines', level: 70 },
      { name: 'Unity', level: 55 },
    ]
  }
];

const colorBar: Record<string, string> = {
  indigo: 'bg-indigo-500',
  blue:   'bg-blue-500',
  purple: 'bg-purple-500',
};

const colorBg: Record<string, string> = {
  indigo: 'bg-indigo-50 dark:bg-indigo-900/20',
  blue:   'bg-blue-50 dark:bg-blue-900/20',
  purple: 'bg-purple-50 dark:bg-purple-900/20',
};

const colorText: Record<string, string> = {
  indigo: 'text-indigo-600 dark:text-indigo-400',
  blue:   'text-blue-600 dark:text-blue-400',
  purple: 'text-purple-600 dark:text-purple-400',
};

const Skills: React.FC<SkillsProps> = ({ t }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-none">
          {t.title}
        </h2>
        <div className="w-24 h-2.5 bg-indigo-600 mx-auto rounded-full mb-8" />
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className="group relative bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Background accent */}
            <div className={`absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 ${colorBg[cat.color]} rounded-full blur-2xl transition-colors`} />

            {/* Header */}
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className={`p-4 ${colorBg[cat.color]} rounded-2xl group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white">
                {t.categories[cat.key]}
              </h3>
            </div>

            {/* Skills with Progress Bars */}
            <div className="space-y-5 relative z-10">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className={`text-xs font-black ${colorText[cat.color]}`}>
                      {animated ? skill.level : 0}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${colorBar[cat.color]} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: animated ? `${skill.level}%` : '0%',
                        transitionDelay: `${sIdx * 150}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom label */}
            <div className="mt-8 pt-5 border-t border-gray-50 dark:border-gray-700/50">
              <div className={`flex justify-between items-center text-[10px] font-black uppercase tracking-widest ${colorText[cat.color]} opacity-60`}>
                <span>Learning & Growing</span>
                <Code2 className="w-3 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
