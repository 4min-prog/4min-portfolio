import React from 'react';
import { Code, Layout, Search, Zap } from 'lucide-react';
import Reveal from './Reveal';

interface ServicesProps {
  t: any;
}

const Services: React.FC<ServicesProps> = ({ t }) => {
  const services = [
    { title: t.web.t, description: t.web.d, icon: <Code className="w-8 h-8" /> },
    { title: t.ui.t, description: t.ui.d, icon: <Layout className="w-8 h-8" /> },
    { title: t.seo.t, description: t.seo.d, icon: <Search className="w-8 h-8" /> },
    { title: t.performance.t, description: t.performance.d, icon: <Zap className="w-8 h-8" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="section-label mb-6 inline-flex">
          <span className="dot" />
          <span>Services</span>
        </div>
        <h2 className="heading-lg mb-6">{t.title}</h2>
        <p className="text-lg text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Reveal key={index} delay={index * 0.1}>
            <div className="premium-card p-8 h-full group">
              <div className="w-14 h-14 rounded-xl bg-[#121217] border border-[#23232D] flex items-center justify-center mb-6 text-white group-hover:text-[#7C3AED] transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
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
