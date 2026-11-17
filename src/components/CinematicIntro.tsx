import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Respect reduced motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      onComplete();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particles setup
    const NUM = 120;
    const colors = ['#38BDF8', '#818CF8', '#E0F2FE', '#0EA5E9'];
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.7 + 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const startTime = Date.now();
    const DURATION = 3000; // 3 seconds total

    const draw = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const currentProgress = Math.min(100, (elapsed / DURATION) * 100);
      setProgress(currentProgress);

      ctx.clearRect(0, 0, w, h);

      // Deep cinematic background
      ctx.fillStyle = '#080A0F';
      ctx.fillRect(0, 0, w, h);

      // Radial glow
      const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w * 0.6);
      grad.addColorStop(0, 'rgba(56,189,248,0.18)');
      grad.addColorStop(0.5, 'rgba(129,140,248,0.08)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw floating particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();
      });

      if (elapsed < DURATION) {
        animFrameRef.current = requestAnimationFrame(draw);
      } else {
        onComplete();
      }
    };

    draw();

    // Keydown or click listener to immediately dismiss
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
      onClick={onComplete}
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#080A0F] cursor-pointer select-none flex flex-col justify-between p-6 sm:p-12"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Top bar info */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-500">
        <span className="flex items-center gap-2 text-sky-400">
          <Sparkles className="w-3.5 h-3.5" />
          IAMGOKULVANAN // EXPERIMENTAL 3D
        </span>
        <span className="hidden sm:inline">TAMIL NADU, INDIA · 2024–2028</span>
      </div>

      {/* Center Cinematic Title */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.4em] text-sky-400 uppercase block mb-3">
            PORTFOLIO 2.0
          </span>
          <h1
            className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-[0.06em] text-transparent bg-clip-text leading-tight"
            style={{
              backgroundImage:
                'linear-gradient(135deg, #FFFFFF 0%, #38BDF8 40%, #818CF8 75%, #FFFFFF 100%)',
            }}
          >
            IAMGOKULVANAN
          </h1>
          <div
            className="h-[2px] w-48 sm:w-80 mx-auto mt-4"
            style={{
              background: 'linear-gradient(90deg, transparent, #38BDF8, #818CF8, transparent)',
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-mono text-xs sm:text-sm tracking-[0.35em] text-slate-300 uppercase max-w-lg mb-8"
        >
          WHERE TECHNOLOGY MEETS CREATIVITY.
        </motion.p>

        {/* Enter Portfolio Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          onClick={(e) => {
            e.stopPropagation();
            onComplete();
          }}
          className="group relative flex items-center gap-3 px-8 py-4 rounded-xl font-display font-bold text-sm tracking-widest text-brand-bg uppercase overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.4)] hover:shadow-[0_0_60px_rgba(56,189,248,0.6)] transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #38BDF8, #818CF8)',
          }}
        >
          <span>ENTER PORTFOLIO</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Bottom Loading Progress & Skip */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="h-1 w-36 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sky-400 to-violet-400 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span>{Math.round(progress)}%</span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onComplete();
          }}
          className="text-sky-400/80 hover:text-white transition-colors tracking-widest uppercase text-xs flex items-center gap-1"
        >
          <span>PRESS ANY KEY OR CLICK ANYWHERE TO SKIP</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
};
