import React, { useState } from 'react';
import { ExternalLink, Github, Gamepad2, CheckSquare, Wallet, Aperture, Building2 } from 'lucide-react';
import Reveal from './Reveal';

interface ProjectsProps {
  t: any;
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Access nested project translations safely
  const pt = t.projects || {};

  const categories = [
    {
      key: 'games',
      label: t.cat?.games || 'Games',
      icon: <Gamepad2 className="w-5 h-5" />,
      color: 'purple',
      project: {
        title: pt.games?.title || 'Game Collection',
        category: t.cat?.games || 'Game Development',
        description: pt.games?.desc || 'A growing collection of fun and addictive browser games published on itch.io.',
        link: 'https://4m-sy.itch.io/',
        github: 'https://github.com/4min-19',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&auto=format&fit=crop&q=80',
        status: 'Live',
        tags: ['HTML5', 'Canvas', 'JavaScript'],
      }
    },
    {
      key: 'todo',
      label: t.cat?.todo || 'Todo App',
      icon: <CheckSquare className="w-5 h-5" />,
      color: 'blue',
      project: {
        title: pt.todo?.title || 'Todo Application',
        category: t.cat?.todo || 'Web App',
        description: pt.todo?.desc || 'A simple and efficient todo application to manage your daily tasks.',
        link: 'http://todoapp.ct.ws/',
        github: 'https://github.com/4min-19',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&auto=format&fit=crop&q=80',
        status: 'Live',
        tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
      }
    },
    {
      key: 'transfer',
      label: t.cat?.transfer || 'Transfer System',
      icon: <Wallet className="w-5 h-5" />,
      color: 'emerald',
      project: {
        title: pt.transfer?.title || 'Money Transfer Tracking',
        category: t.cat?.transfer || 'Web Application',
        description: pt.transfer?.desc || 'A comprehensive system to track and manage money transfers securely.',
        link: 'http://hawalee.great-site.net/',
        github: '#',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
        status: pt.transfer?.status || 'Live',
        tags: ['HTML', 'CSS', 'PHP', 'MySqli']
      }
    },
    {
      key: 'galary',
      label: t.cat?.galary || 'Galary',
      icon: <Aperture className="w-5 h-5" />,
      color: 'blue',
      project: {
        title: pt.galary?.title || 'Galary',
        category: t.cat?.galary || 'Web Application',
        description: pt.galary?.desc || 'Add tag and description, search by tag, simple and efficient galary application.',
        link: 'https://fardony.netlify.app/',
        github: '#',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRS4OetYVR9LtRewwq9AzW1BVgv-caor7VXw&s',
        status: pt.galary?.status || 'Live',
        tags: ['HTML', 'CSS', 'Gemini', 'LocalStorage', 'React']
      }
    },
    {
      key: 'seyhomer',
      label: t.cat?.seyhomer || 'Mosque Website',
      icon: <Building2 className="w-5 h-5" />,
      color: 'amber',
      project: {
        title: pt.seyhomer?.title || 'Şeyh Ömer Camii',
        category: t.cat?.seyhomer || 'Web Application',
        description: pt.seyhomer?.desc || 'A modern, multilingual website for the historical Şeyh Ömer Mosque in Gaziantep.',
        link: 'https://seyhomer.rf.gd/',
        github: '#',
        image: '/projects/seyhomer.png',
        status: 'Live',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP']
      }
    }
  ];

  const colorMap: Record<string, { tab: string; activeBg: string; badge: string; badgeText: string; btn: string; glow: string; tag: string; dot: string }> = {
    blue:    { tab: 'text-blue-500 border-blue-500',    activeBg: 'bg-blue-500/5',  badge: 'bg-blue-500/15', badgeText: 'text-blue-400', btn: 'bg-blue-600 hover:bg-blue-500',     glow: 'shadow-blue-500/10',    tag: 'bg-blue-500/10 text-blue-400 border-blue-500/25',    dot: 'bg-blue-400' },
    purple:  { tab: 'text-purple-500 border-purple-500', activeBg: 'bg-purple-500/5', badge: 'bg-purple-500/15', badgeText: 'text-purple-400', btn: 'bg-purple-600 hover:bg-purple-500', glow: 'shadow-purple-500/10',  tag: 'bg-purple-500/10 text-purple-400 border-purple-500/25', dot: 'bg-purple-400' },
    emerald: { tab: 'text-emerald-500 border-emerald-500', activeBg: 'bg-emerald-500/5', badge: 'bg-emerald-500/15', badgeText: 'text-emerald-400', btn: 'bg-emerald-600 hover:bg-emerald-500', glow: 'shadow-emerald-500/10', tag: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25', dot: 'bg-emerald-400' },
    amber:   { tab: 'text-amber-500 border-amber-500',   activeBg: 'bg-amber-500/5',   badge: 'bg-amber-500/15',   badgeText: 'text-amber-400',   btn: 'bg-amber-600 hover:bg-amber-500',     glow: 'shadow-amber-500/10',   tag: 'bg-amber-500/10 text-amber-400 border-amber-500/25',   dot: 'bg-amber-400' },
  };

  const active = categories[activeTab];
  const colors = colorMap[active.color];
  const project = active.project;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <Reveal>
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-none">
            {t.title}
          </h2>
          <div className="w-24 h-2.5 bg-indigo-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl mx-auto">
            {t.desc}
          </p>
        </div>
      </Reveal>

      {/* Tab Switcher */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {categories.map((cat, i) => {
          const c = colorMap[cat.color];
          const isActive = activeTab === i;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-2xl font-bold text-sm transition-all duration-200 border-2 ${
                isActive
                  ? `${c.tab} ${c.activeBg} bg-white dark:bg-gray-900 shadow-md`
                  : 'border-transparent text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Project Card */}
      <Reveal>
        <div
          key={active.key}
          className={`bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-xl ${colors.glow} border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row lg:h-80 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl`}
        >
        {/* Image */}
        <div className="relative overflow-hidden lg:w-[45%] h-64 lg:h-full">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${active.key}/900/600`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-gray-950/60" />
          {/* Live Badge */}
          <div className="absolute top-5 left-5">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${colors.badge} ${colors.badgeText}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`} />
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-[55%] p-8 lg:p-10 flex flex-col justify-center">
          <span className={`inline-block text-[11px] font-black uppercase tracking-widest mb-3 ${colors.badgeText}`}>
            {project.category}
          </span>
          <h3 className="text-2xl lg:text-3xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-7 text-sm lg:text-base">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className={`px-3 py-1 text-xs font-bold rounded-full border ${colors.tag}`}>
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-grow inline-flex items-center justify-center px-6 py-3 text-white rounded-xl text-sm font-bold transition-all shadow-lg active:scale-95 ${colors.btn}`}
            >
              {t.demo || 'Live Demo'} <ExternalLink className="ml-2 w-4 h-4" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all active:scale-95"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>


      </Reveal>
    </div>
  );
};

export default Projects;
