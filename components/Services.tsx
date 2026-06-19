
import React from 'react';
import { Code, Layout, Search, Zap } from 'lucide-react';
import Reveal from './Reveal';

interface ServicesProps {
  t: any;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const services = [
    { title: t.web.t, description: t.web.d, icon: <Code className="w-10 h-10 text-indigo-600" />, color: 'bg-indigo-50 dark:bg-indigo-900/20' },
    { title: t.ui.t, description: t.ui.d, icon: <Layout className="w-10 h-10 text-pink-600" />, color: 'bg-pink-50 dark:bg-pink-900/20' },
    { title: t.seo.t, description: t.seo.d, icon: <Search className="w-10 h-10 text-amber-600" />, color: 'bg-amber-50 dark:bg-amber-900/20' },
    { title: t.performance.t, description: t.performance.d, icon: <Zap className="w-10 h-10 text-emerald-600" />, color: 'bg-emerald-50 dark:bg-emerald-900/20' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h2>
        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div 
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full"
            >
            <div className={`inline-flex items-center justify-center p-4 rounded-xl mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Services;
