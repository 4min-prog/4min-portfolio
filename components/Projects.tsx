import React, { useRef, useEffect, useCallback } from 'react';
import { Gamepad2, CheckSquare, Wallet, Aperture, Building2, ChevronLeft, ChevronRight, Globe } from 'lucide-react';

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
      status: 'Live',
      tags: ['HTML', 'CSS', 'PHP', 'MySQLi'],
    },
    {
      key: 'galary',
      title: pt.galary?.title || 'Galary',
      category: t.cat?.galary || 'Galary',
      description: pt.galary?.desc || 'Add tag and description, search by tag, simple and efficient galary application.',
      link: 'https://fardony.netlify.app/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRS4OetYVR9LtRewwq9AzW1BVgv-caor7VXw&s',
      status: 'Live',
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
    {
      key: 'restaurant',
      title: pt.restaurant?.title || 'Adanalı Siirt Restaurant',
      category: t.cat?.restaurant || 'Restaurant Website',
      description: pt.restaurant?.desc || 'A modern restaurant website showcasing delicious Adana and Siirt cuisine with an elegant design.',
      link: 'https://adanali-siirt-restaurant.onrender.com/',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80',
      status: 'Live',
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      key: 'fnd',
      title: pt.fnd?.title || 'FND Yazılım',
      category: t.cat?.fnd || 'FND Software',
      description: pt.fnd?.desc || 'A modern web design and SEO services website built with React.',
      link: 'https://fndyazilim.netlify.app/',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&auto=format&fit=crop&q=80',
      status: 'Live',
      tags: ['React', 'CSS', 'JavaScript', 'SEO'],
    },
    {
      key: 'smile4you',
      title: pt.smile4you?.title || 'Smile 4 You',
      category: t.cat?.smile4you || 'Dental Clinic',
      description: pt.smile4you?.desc || 'A premium dental clinic website offering implants, whitening, orthodontics and more with a modern, elegant design.',
      link: 'https://4smile.vercel.app/',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80',
      status: 'Live',
      tags: ['React', 'CSS', 'JavaScript', 'Vite'],
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

  const dragRef = useRef<{ startX: number; startOffset: number; dragged: boolean } | null>(null);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    dragRef.current = { startX: e.clientX, startOffset: offsetRef.current, dragged: false };
    pausedRef.current = true;
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current) return;
    const delta = e.clientX - dragRef.current.startX;
    if (Math.abs(delta) > 5) {
      dragRef.current.dragged = true;
    }
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

  const handleCardClick = useCallback((e: React.MouseEvent) => {
    if (dragRef.current?.dragged) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  return (
    <div dir="ltr" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <div className="section-label mb-6 inline-flex">
          <span className="dot" />
          <span>{t.title}</span>
        </div>
        <h2 className="heading-lg mb-6">{t.title}</h2>
        <p className="text-lg text-secondary leading-relaxed max-w-xl mx-auto">
          {t.desc}
        </p>
      </div>

      <div className="relative group/scroll">
        <button
          onClick={() => scrollByStep('left')}
          onMouseEnter={() => { pausedRef.current = true; }}
          onTouchStart={() => { pausedRef.current = true; }}
          className="absolute left-1 md:left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-surface border border-border text-secondary opacity-100 md:opacity-0 md:group-hover/scroll:opacity-100 transition-all duration-300 hover:border-accent hover:text-white backdrop-blur-sm"
          aria-label="Previous projects"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button
          onClick={() => scrollByStep('right')}
          onMouseEnter={() => { pausedRef.current = true; }}
          onTouchStart={() => { pausedRef.current = true; }}
          className="absolute right-1 md:right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-surface border border-border text-secondary opacity-100 md:opacity-0 md:group-hover/scroll:opacity-100 transition-all duration-300 hover:border-accent hover:text-white backdrop-blur-sm"
          aria-label="Next projects"
        >
          <ChevronRight className="w-5 h-5 md:w-5 md:h-5" />
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
              onClick={handleCardClick}
              className="group flex-shrink-0 w-[260px] sm:w-[280px] md:w-[300px] premium-card overflow-hidden"
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.key}/600/400`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-[#09090B]/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-deep/60 backdrop-blur-md text-white border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="text-white font-bold text-sm sm:text-base leading-tight">{project.title}</h3>
                  <span className="text-secondary text-xs font-medium">{project.category}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-secondary text-xs sm:text-sm line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-surface text-muted border border-border">
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
