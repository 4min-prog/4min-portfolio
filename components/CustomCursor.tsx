import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const outlinePos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    const onMouseMove = (e: MouseEvent) => {
      if (!mediaQuery.matches) return;
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [role="button"], .hover-target')) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [role="button"], .hover-target')) {
        setIsHovering(false);
      }
    };

    const animate = () => {
      const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
      
      outlinePos.current.x = lerp(outlinePos.current.x, mousePos.current.x, 0.15);
      outlinePos.current.y = lerp(outlinePos.current.y, mousePos.current.y, 0.15);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${outlinePos.current.x}px, ${outlinePos.current.y}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isHovering, isVisible]);

  if (typeof window === 'undefined' || isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div
        ref={outlineRef}
        className={`fixed top-0 left-0 w-8 h-8 border border-accent/30 rounded-full pointer-events-none z-[9998] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${isHovering ? 'bg-accent/5 border-accent/50' : ''}`}
        style={{ transition: 'opacity 0.3s ease, background-color 0.3s ease, border-color 0.3s ease' }}
      />
    </>
  );
};

export default CustomCursor;
