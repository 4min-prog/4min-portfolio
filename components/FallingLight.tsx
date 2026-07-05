import { useEffect, useRef } from 'react';

const FallingLight = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const parentRef = useRef<Element | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    parentRef.current = canvas.parentElement;

    let rafId: number;
    let streaks: Streak[] = [];

    const COLORS = ['rgba(255,255,255,', 'rgba(124,58,237,', 'rgba(161,161,170,'];

    class Streak {
      x: number;
      y: number;
      len: number;
      speed: number;
      width: number;
      alpha: number;
      color: string;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = -Math.random() * h * 1.5;
        this.len = 40 + Math.random() * 120;
        this.speed = 0.8 + Math.random() * 2.5;
        this.width = 1 + Math.random() * 2;
        this.alpha = 0.2 + Math.random() * 0.5;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      }

      update(h: number) {
        this.y += this.speed;
        if (this.y > h + this.len) {
          this.y = -this.len;
          this.x = Math.random() * (canvas?.width || 1920);
          this.speed = 0.8 + Math.random() * 2.5;
          this.alpha = 0.2 + Math.random() * 0.5;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const grad = ctx.createLinearGradient(0, this.y - this.len, 0, this.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.2, this.color + this.alpha * 0.3 + ')');
        grad.addColorStop(0.5, this.color + this.alpha * 0.6 + ')');
        grad.addColorStop(1, this.color + this.alpha + ')');
        ctx.fillStyle = grad;
        ctx.fillRect(this.x, this.y - this.len, this.width, this.len);
      }
    }

    const init = (w: number, h: number) => {
      streaks = [];
      const count = Math.floor((w * h) / 25000);
      for (let i = 0; i < count; i++) {
        const s = new Streak(w, h);
        s.y = Math.random() * h;
        streaks.push(s);
      }
    };

    const resize = () => {
      const parent = parentRef.current;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);
      if (w === 0 || h === 0) return;
      canvas!.width = w;
      canvas!.height = h;
      init(w, h);
    };

    resize();
    window.addEventListener('resize', resize);

    const ro = new ResizeObserver(resize);
    if (parentRef.current) ro.observe(parentRef.current);

    let isVisible = false;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    }, { threshold: 0 });
    observer.observe(canvas);

    const draw = () => {
      rafId = requestAnimationFrame(draw);
      if (!isVisible) return;
      const w = canvas!.width;
      const h = canvas!.height;
      ctx!.clearRect(0, 0, w, h);
      for (const s of streaks) {
        s.update(h);
        s.draw(ctx!);
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      ro.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default FallingLight;
