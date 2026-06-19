
import React, { useRef, useEffect, useCallback } from 'react';
import { Gamepad2, CheckSquare, Wallet, Aperture, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  t: any;
}

interface ProjectItem {
  key: string;
  title: string;
  category: string;
  description: string;
  link: string;
  image: string;
  status: string;
  tags: string[];
}

const Projects: React.FC<ProjectsProps> = ({ t }) => {
  const pt = t.projects || {};

  const projects: ProjectItem[] = [
    {
      key: 'games',
      title: pt.games?.title || 'Game Collection',
      category: t.cat?.games || 'Games',
      description: pt.games?.desc || 'A growing collection of fun and addictive browser games published on itch.io.',
      link: 'https://4m-sy.itch.io/',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80',
      status: 'Live',
      tags: ['HTML5', 'Canvas', 'JavaScript'],
    },
    {
      key: 'todo',
      title: pt.todo?.title || 'Todo Application',
      category: t.cat?.todo || 'Todo App',
      description: pt.todo?.desc || 'A simple and efficient todo application to manage your daily tasks.',
      link: 'https://todooapp.rf.gd/',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&auto=format&fit=crop&q=80',
      status: 'Live',
      tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
    },
    {
      key: 'transfer',
      title: pt.transfer?.title || 'Money Transfer Tracking',
      category: t.cat?.transfer || 'Transfer System',
      description: pt.transfer?.desc || 'A comprehensive system to track and manage money transfers securely.',
      link: 'https://hawalee.great-site.net/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
      status: pt.transfer?.status || 'Live',
      tags: ['HTML', 'CSS', 'PHP', 'MySQLi'],
    },
    {
      key: 'galary',
      title: pt.galary?.title || 'Galary',
      category: t.cat?.galary || 'Galary',
      description: pt.galary?.desc || 'Add tag and description, search by tag, simple and efficient galary application.',
      link: 'https://fardony.netlify.app/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRS4OetYVR9LtRewwq9AzW1BVgv-caor7VXw&s',
      status: pt.galary?.status || 'Live',
      tags: ['HTML', 'CSS', 'Gemini', 'React'],
    },
    {
      key: 'seyhomer',
      title: pt.seyhomer?.title || 'Şeyh Ömer Camii',
      category: t.cat?.seyhomer || 'Mosque Website',
      description: pt.seyhomer?.desc || 'A modern, multilingual website for the historical Şeyh Ömer Mosque in Gaziantep.',
      link: 'https://seyhomer.rf.gd/',
      image: '/projects/seyhomer.png',
      status: 'Live',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const offsetRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const pausedRef = useRef<boolean>(false);
  const snapRef = useRef<{ from: number; to: number; start: number; duration: number } | null>(null);
  const SPEED = 35;
  const SNAP_DURATION = 400;

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (snapRef.current) {
        const elapsed = timestamp - snapRef.current.start;
        const progress = Math.min(elapsed / snapRef.current.duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        offsetRef.current = snapRef.current.from + (snapRef.current.to - snapRef.current.from) * ease;
        if (progress >= 1) {
          offsetRef.current = snapRef.current.to;
          snapRef.current = null;
          lastTimeRef.current = timestamp;
          pausedRef.current = false;
        }
      } else if (!pausedRef.current) {
        if (!lastTimeRef.current) lastTimeRef.current = timestamp;
        const delta = timestamp - lastTimeRef.current;
        lastTimeRef.current = timestamp;
        offsetRef.current += (delta * SPEED) / 1000;
      }

      const track = trackRef.current;
      if (track) {
        const halfWidth = track.scrollWidth / 2;
        if (offsetRef.current >= halfWidth) {
          offsetRef.current -= halfWidth;
        } else if (offsetRef.current < 0) {
          offsetRef.current += halfWidth;
        }
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  const scrollByStep = useCallback((direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;

    const cardWidth = (track.firstElementChild as HTMLElement).offsetWidth;
    const gap = 24;
    const step = cardWidth + gap;
    const halfWidth = track.scrollWidth / 2;

    let target = offsetRef.current + (direction === 'right' ? step : -step);
    if (target >= halfWidth) target -= halfWidth;
    if (target < 0) target += halfWidth;

    pausedRef.current = true;
    snapRef.current = { from: offsetRef.current, to: target, start: performance.now(), duration: SNAP_DURATION };
  }, []);

  const dragRef = useRef<{ startX: number; startOffset: number } | null>(null);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragRef.current = { startX: e.clientX, startOffset: offsetRef.current };
    pausedRef.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const delta = e.clientX - dragRef.current.startX;
    const track = trackRef.current;
    if (!track) return;
    const halfWidth = track.scrollWidth / 2;
    let target = dragRef.current.startOffset - delta;
    if (target >= halfWidth) target -= halfWidth;
    if (target < 0) target += halfWidth;
    offsetRef.current = target;
  }, []);

  const handlePointerUp = useCallback(() => {
    dragRef.current = null;
    lastTimeRef.current = 0;
    pausedRef.current = false;
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 leading-none">
          {t.title}
        </h2>
        <div className="w-24 h-2.5 bg-indigo-600 rounded-full mx-auto mb-6" />
        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-w-xl mx-auto">
          {t.desc}
        </p>
      </div>

      <div className="relative group/scroll">
        <button
          onClick={() => scrollByStep('left')}
          onMouseEnter={() => { pausedRef.current = true; }}
          onTouchStart={() => { pausedRef.current = true; }}
          className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 opacity-100 md:opacity-0 md:group-hover/scroll:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-gray-800 active:scale-90 backdrop-blur-sm"
          aria-label="Previous projects"
        >
          <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        <button
          onClick={() => scrollByStep('right')}
          onMouseEnter={() => { pausedRef.current = true; }}
          onTouchStart={() => { pausedRef.current = true; }}
          className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 opacity-100 md:opacity-0 md:group-hover/scroll:opacity-100 transition-opacity duration-300 hover:bg-white dark:hover:bg-gray-800 active:scale-90 backdrop-blur-sm"
          aria-label="Next projects"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div
          className="overflow-hidden touch-pan-y"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; lastTimeRef.current = 0; }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ touchAction: 'pan-y pinch-zoom' }}
        >
        <div
          ref={trackRef}
          className="flex gap-6 will-change-transform"
          style={{ transform: 'translateX(0px)' }}
        >
          {[...projects, ...projects].map((project, index) => (
            <a
              key={`${project.key}-${index}`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.key}/600/400`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{project.title}</h3>
                  <span className="text-white/70 text-xs font-medium">{project.category}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
