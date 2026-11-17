import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause, Maximize2, Film, Camera, Sliders } from 'lucide-react';

// Before/After slider
const GradingSlider: React.FC = () => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePos = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const p = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
    setPos(p);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden select-none cursor-ew-resize border border-white/8"
      onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
      onMouseMove={(e) => { if (dragging.current) updatePos(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
      onTouchMove={(e) => { if (dragging.current) updatePos(e.touches[0].clientX); }}
      onTouchEnd={() => { dragging.current = false; }}
    >
      {/* After (right side - graded) */}
      <div className="absolute inset-0 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #1a0a00, #4a1a00, #2d1500, #0a0a1a)' }}>
        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-2 border-orange-400/40 bg-orange-400/10 flex items-center justify-center mx-auto mb-2">
            <Film className="w-7 h-7 text-orange-400" />
          </div>
          <p className="text-xs font-mono text-orange-300/70">AFTER — Teal &amp; Orange Grade</p>
          <p className="text-[10px] text-slate-500 mt-1">Cinematic color profile</p>
        </div>
      </div>

      {/* Before (left side - raw) */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #2a2a2a, #3a3a3a, #1a1a1a, #252525)' }} />
        <div className="relative text-center">
          <div className="w-16 h-16 rounded-full border-2 border-slate-400/40 bg-slate-400/10 flex items-center justify-center mx-auto mb-2">
            <Camera className="w-7 h-7 text-slate-400" />
          </div>
          <p className="text-xs font-mono text-slate-300/70">BEFORE — Raw Footage</p>
          <p className="text-[10px] text-slate-500 mt-1">Flat, desaturated original</p>
        </div>
      </div>

      {/* Divider */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.5)] z-10"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
          <Sliders className="w-4 h-4 text-black" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 text-[10px] font-mono text-white/60 z-20">RAW</div>
      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-orange-300/80 z-20">GRADED</div>
    </div>
  );
};

const videoCategories = ['ALL', 'CINEMATIC', 'REELS', 'COLOR GRADE', 'MOTION'];

const videoItems = [
  { id: 1, title: 'Cinematic Reel 2024', category: 'CINEMATIC', duration: '1:24', tools: ['DaVinci Resolve', 'Premiere Pro'] },
  { id: 2, title: 'Wedding Invitation Film', category: 'CINEMATIC', duration: '2:10', tools: ['After Effects', 'Premiere Pro'] },
  { id: 3, title: 'Instagram Reels Bundle', category: 'REELS', duration: '0:30', tools: ['Premiere Pro', 'After Effects'] },
  { id: 4, title: 'Teal & Orange Grade Demo', category: 'COLOR GRADE', duration: '0:45', tools: ['DaVinci Resolve'] },
  { id: 5, title: 'Kinetic Typography Motion', category: 'MOTION', duration: '0:30', tools: ['After Effects'] },
  { id: 6, title: 'Travel Film — Tamil Nadu', category: 'CINEMATIC', duration: '3:15', tools: ['Premiere Pro', 'DaVinci Resolve'] },
];

export const ShowreelSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [catFilter, setCatFilter] = useState('ALL');
  const [playing, setPlaying] = useState(false);

  const filtered = catFilter === 'ALL' ? videoItems : videoItems.filter((v) => v.category === catFilter);

  return (
    <section id="showreel" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(251,146,60,0.04)_0%,_transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-mono text-xs tracking-[0.4em] text-orange-400/70 uppercase block mb-4"
          >
            04 — SHOWREEL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight"
          >
            FRAMES.
            <br />
            FEELINGS.
            <br />
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(135deg, #FB923C 0%, #F59E0B 100%)'
            }}>
              STORIES.
            </span>
          </motion.h2>
        </div>

        {/* Main video player */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-10"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/8 bg-black/60 group">
            {/* Video placeholder — replace src with real video URL */}
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #0a0500, #1a0a00, #0a0010)' }}>
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(251,146,60,0.1) 0, rgba(251,146,60,0.1) 1px, transparent 0, transparent 50%)',
                  backgroundSize: '24px 24px',
                }} />

              {/* Play button */}
              <button
                onClick={() => setPlaying(!playing)}
                className="relative z-10 w-20 h-20 rounded-full border-2 border-orange-400/60 bg-orange-400/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(251,146,60,0.2)]"
                aria-label={playing ? 'Pause' : 'Play showreel'}
              >
                {playing ? (
                  <Pause className="w-8 h-8 text-orange-300" />
                ) : (
                  <Play className="w-8 h-8 text-orange-300 ml-1" />
                )}
              </button>

              <p className="absolute bottom-6 left-6 text-xs font-mono text-slate-500">
                SHOWREEL 2024 — MINION VISUALS × IAMGOKULVANAN
              </p>
              <p className="absolute bottom-6 right-6 text-xs font-mono text-slate-600">
                Add your video URL to <code className="text-orange-400/70">ShowreelSection.tsx</code>
              </p>
            </div>

            {/* Full screen button */}
            <button className="absolute top-4 right-4 p-2 rounded-lg bg-black/40 border border-white/10 text-slate-400 hover:text-white transition-colors z-20">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {videoCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCatFilter(c)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider border transition-all duration-200 ${
                catFilter === c
                  ? 'bg-orange-500 border-orange-500 text-black'
                  : 'border-white/8 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Video gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {filtered.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="group relative rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-orange-500/25 transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1a0800, #2d1200, #0a0004)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Film className="w-10 h-10 text-orange-400/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-white/60 bg-black/50 px-1.5 py-0.5 rounded">
                  {v.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-orange-500/80 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-white">{v.title}</p>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[10px] font-mono text-orange-400/60">{v.category}</span>
                  <div className="flex gap-1">
                    {v.tools.map((t) => (
                      <span key={t} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-500">{t.split(' ')[0]}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Color grading slider */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <div className="mb-5 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-orange-400" />
            <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">
              Drag to Compare — Before &amp; After Color Grading
            </span>
          </div>
          <GradingSlider />
        </motion.div>
      </div>
    </section>
  );
};
