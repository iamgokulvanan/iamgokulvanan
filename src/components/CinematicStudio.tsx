import React, { useState, useRef } from 'react';
import { 
  Film, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Sparkles, 
  Sliders, 
  Instagram, 
  ExternalLink,
  Layers,
  Wand2,
  Video,
  X
} from 'lucide-react';
import { contactDetails } from '../data/generalData';

export const CinematicStudio: React.FC = () => {
  // Before-After Slider State
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  // Showreel Modal State
  const [showreelOpen, setShowreelOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const videoCategories = [
    { name: 'Wedding Invitation Videos', desc: 'Emotional narrative pacing, cultural motifs & custom title motion' },
    { name: 'Instagram Reels & Shorts', desc: 'Engineered for viral retention with high-impact 3-second visual hooks' },
    { name: 'Cinematic Travel Films', desc: 'Natural sound design, dynamic speed-ramps & atmospheric grading' },
    { name: 'Commercial Brand Promos', desc: 'Snappy product highlights, kinetic typography & sound transitions' },
    { name: 'Motion Graphics & VFX', desc: 'After Effects title reveals, HUD overlays & custom 2D/3D elements' },
    { name: 'DaVinci Resolve Color Grading', desc: 'Teal & orange separation, film emulation LUTs & balanced skin tones' },
  ];

  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleSliderMove(e.touches[0].clientX);
  };

  return (
    <section id="studio" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest font-semibold mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>Creative Production · Minion Visuals</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            CREATING BEYOND THE FRAME.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            Visual storytelling, cinematic editing and creative digital production that commands attention.
          </p>
        </div>

        {/* Featured Showreel Banner with Interactive Play Trigger */}
        <div className="relative rounded-3xl overflow-hidden border border-brand-border bg-brand-surface shadow-2xl mb-16">
          
          {/* Cinematic Background Canvas Mockup */}
          <div className="relative h-72 sm:h-96 w-full bg-gradient-to-br from-[#0c1017] via-[#111827] to-[#08090C] flex items-center justify-center overflow-hidden">
            
            {/* Ambient lighting */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-10" />
            <div className="absolute w-96 h-96 rounded-full bg-amber-500/15 blur-3xl" />
            <div className="absolute w-80 h-80 rounded-full bg-sky-500/15 blur-3xl -bottom-10 -right-10" />

            {/* Cinematic Title Art */}
            <div className="text-center z-20 px-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2">
                Minion Visuals Official Studio Showreel
              </span>
              <h3 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                CINEMATIC REEL & MOTION WORKS
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto mt-2">
                Speed Ramping · DaVinci Resolve Grade · Foley Audio · Kinetic Typography
              </p>

              {/* Play Button Trigger */}
              <button
                onClick={() => setShowreelOpen(true)}
                className="mt-6 inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs sm:text-sm shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all transform hover:scale-105"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>Watch Studio Showreel</span>
              </button>
            </div>

            {/* Video overlay badge */}
            <div className="absolute bottom-4 left-6 z-20 flex items-center gap-3 text-xs font-mono text-brand-muted">
              <span className="flex items-center gap-1.5 text-white">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                4K UHD 60FPS
              </span>
              <span>·</span>
              <span>DaVinci Resolve 19 Color Science</span>
            </div>

            <div className="absolute bottom-4 right-6 z-20">
              <a
                href={contactDetails.instagramStudio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>@minion.visuals</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Before vs After Color Grading Draggable Comparison */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-surface/90 border border-brand-border shadow-2xl mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <Sliders className="w-3.5 h-3.5" />
                <span>Interactive Post-Production Demo</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Before & After: DaVinci Color Grading
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted mt-1">
                Drag the center divider to compare Flat LOG Footage with Hollywood Teal & Orange Color Grade.
              </p>
            </div>
            <span className="text-xs font-mono text-brand-dim">
              Drag Slider ↔
            </span>
          </div>

          {/* Draggable Visual Canvas */}
          <div
            ref={sliderContainerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-brand-border shadow-xl"
          >
            {/* AFTER: Graded Cinematic Footage (Background) */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/90 via-slate-900 to-amber-900/90 flex items-center justify-center">
              <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-amber-500/30">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  [AFTER] Final DaVinci Resolve Grade
                </span>
                <h4 className="font-display text-lg sm:text-2xl font-extrabold text-white">
                  Cinematic Teal & Orange Contrast
                </h4>
                <p className="text-xs text-amber-200/80 mt-1">
                  Rec.709 Transformation · Film Grain · S-Curve Contrast · Golden Hour Warmth
                </p>
              </div>
            </div>

            {/* BEFORE: Flat Raw LOG Footage (Clipped Overlay) */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-zinc-700 via-stone-600 to-zinc-600 flex items-center justify-center overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20">
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest block mb-1">
                  [BEFORE] Flat Camera LOG Footage
                </span>
                <h4 className="font-display text-lg sm:text-2xl font-extrabold text-slate-300">
                  Unprocessed Low-Contrast Sensor Data
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Flat Gamma · Desaturated Chrominance · Wide Dynamic Range Raw Sensor
                </p>
              </div>
            </div>

            {/* Slider Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.7)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-xs shadow-xl">
                ↔
              </div>
            </div>

            {/* Position Badges */}
            <div className="absolute bottom-3 left-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-slate-300 border border-white/20 pointer-events-none">
              RAW LOG ({Math.round(sliderPosition)}%)
            </div>
            <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-amber-400 border border-amber-500/30 pointer-events-none">
              GRADED ({100 - Math.round(sliderPosition)}%)
            </div>
          </div>
        </div>

        {/* Video Production Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoCategories.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border hover:border-amber-500/40 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-amber-400 mb-4">
                  <Film className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.name}</h4>
                <p className="text-xs text-brand-muted leading-relaxed">{item.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-border/40 flex items-center justify-between text-xs font-mono text-brand-dim">
                <span>Minion Visuals</span>
                <span className="text-amber-400">Available →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Software Stack Footer */}
        <div className="mt-12 p-6 rounded-2xl bg-brand-card border border-brand-border flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-dim">
              Post-Production Suite:
            </span>
            <div className="flex flex-wrap gap-2">
              {['DaVinci Resolve Studio', 'Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Photoshop'].map((sw) => (
                <span key={sw} className="px-3 py-1 rounded-lg bg-brand-surface border border-brand-border text-xs text-slate-200">
                  {sw}
                </span>
              ))}
            </div>
          </div>

          <a
            href={contactDetails.instagramStudio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 font-mono"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Minion Visuals on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Full-Screen Showreel Modal Player */}
      {showreelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-4xl rounded-3xl bg-brand-surface border border-brand-border overflow-hidden shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-brand-card border-b border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Film className="w-4 h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-bold text-white font-mono">
                  Minion Visuals — Official 2026 Studio Showreel
                </span>
              </div>
              <button
                onClick={() => setShowreelOpen(false)}
                className="p-1 rounded-lg text-brand-muted hover:text-white hover:bg-brand-surface"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Screen */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950 via-slate-900 to-amber-950 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 mb-4 animate-pulse">
                  {isPlaying ? <Play className="w-7 h-7 fill-amber-400 ml-1" /> : <Pause className="w-7 h-7" />}
                </div>
                <h4 className="font-display text-xl sm:text-3xl font-extrabold text-white">
                  MINION VISUALS CINEMATIC SHOWREEL
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-2">
                  Featuring Wedding Invitation Concepts, Commercial Reels, Speed-Ramped Travel Cuts, and Kinetic Motion Graphics.
                </p>
                <a
                  href={contactDetails.instagramStudio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-4 py-2 rounded-xl bg-brand-card border border-amber-500/40 text-amber-400 hover:bg-brand-surface text-xs font-mono font-semibold flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Watch Reels Live on @minion.visuals</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Player Controls Bar */}
            <div className="p-4 bg-brand-card border-t border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-brand-surface text-white hover:text-amber-400 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-lg bg-brand-surface text-white hover:text-amber-400 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-xs font-mono text-brand-dim">01:45 / 02:30</span>
              </div>

              <div className="text-xs font-mono text-brand-dim">
                1080p 60fps · Stereo Foley
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
