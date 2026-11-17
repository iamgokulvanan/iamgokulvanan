import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Film, ExternalLink, Play, Star } from 'lucide-react';

const studioWorks = [
  { title: 'Wedding Cinematic Invitation', category: 'Cinematic', color: '#FB923C' },
  { title: 'Travel Film — South India', category: 'Travel Film', color: '#F59E0B' },
  { title: 'Instagram Promotional Reel', category: 'Social Media', color: '#EF4444' },
  { title: 'Motion Typography Title', category: 'Motion Graphics', color: '#8B5CF6' },
  { title: 'Color Graded Short Film', category: 'Color Grade', color: '#06B6D4' },
  { title: 'Event Promo Video', category: 'Promo', color: '#10B981' },
];

export const MinionVisualsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="minion-visuals" className="relative py-28 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(251,146,60,0.06) 0%, transparent 60%)' }} />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 0, transparent 100%)',
            backgroundSize: '80px 100%',
          }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-mono text-xs tracking-[0.4em] text-orange-400/70 uppercase block mb-4"
          >
            05 — CREATIVE STUDIO
          </motion.span>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              {/* Studio logo */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-orange-500/30"
                  style={{ background: 'linear-gradient(135deg, rgba(251,146,60,0.2), rgba(251,146,60,0.05))' }}>
                  <Film className="w-7 h-7 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl text-white tracking-wider">
                    MINION VISUALS
                  </h3>
                  <p className="text-xs font-mono text-orange-400/60 tracking-widest">
                    @minion.visuals
                  </p>
                </div>
              </div>

              <h2 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight">
                CINEMATIC
                <br />
                <span className="text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #FB923C 0%, #F59E0B 60%, #EF4444 100%)'
                }}>
                  CREATIVE STUDIO.
                </span>
              </h2>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              href="https://www.instagram.com/minion.visuals/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3.5 rounded-xl border border-orange-500/30 text-orange-300 hover:bg-orange-500/10 transition-all duration-200 group w-fit"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-mono text-sm font-semibold tracking-wider">@minion.visuals</span>
              <ExternalLink className="w-4 h-4 opacity-50" />
            </motion.a>
          </div>
        </div>

        {/* Studio description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14"
        >
          <div className="lg:col-span-2 p-6 rounded-2xl border border-orange-500/15 bg-orange-500/[0.03]">
            <p className="text-slate-300 leading-relaxed text-base mb-4">
              <strong className="text-white">Minion Visuals</strong> is my cinematic creative studio — producing
              wedding invitations, travel films, promotional reels, and dynamic motion graphics that
              tell stories through light, color, and rhythm.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Every frame is intentional. Every cut is felt. The studio brings together Hollywood-style
              color grading with kinetic motion design and immersive sound design for content that
              genuinely moves people.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: '🎬', label: 'Cinematic Editing', desc: 'Hollywood-quality cuts' },
              { icon: '🎨', label: 'Color Grading', desc: 'Teal & Orange, Film Stocks' },
              { icon: '✨', label: 'Motion Graphics', desc: 'Kinetic typography & FX' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Work grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {studioWorks.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="group relative rounded-xl overflow-hidden border border-white/5 cursor-pointer hover:border-orange-500/25 transition-all duration-300"
            >
              {/* Visual placeholder */}
              <div className="aspect-video relative"
                style={{ background: `linear-gradient(135deg, ${work.color}20, rgba(8,10,15,0.9))` }}>
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(ellipse at 30% 30%, ${work.color}40, transparent 60%)`,
                  }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center backdrop-blur-sm"
                    style={{ borderColor: work.color, background: `${work.color}20` }}>
                    <Play className="w-5 h-5 ml-0.5" style={{ color: work.color }} />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border text-white/70"
                    style={{ borderColor: `${work.color}30`, background: `${work.color}15` }}>
                    {work.category}
                  </span>
                  <Star className="w-3 h-3" style={{ color: work.color }} />
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm font-semibold text-white group-hover:text-orange-200 transition-colors">
                  {work.title}
                </p>
                <p className="text-[10px] font-mono text-slate-500 mt-0.5">MINION VISUALS</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.instagram.com/minion.visuals/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-black font-display font-bold tracking-wider text-sm transition-all duration-300 shadow-[0_0_40px_rgba(251,146,60,0.2)] hover:shadow-[0_0_60px_rgba(251,146,60,0.35)]"
            style={{ background: 'linear-gradient(135deg, #FB923C, #F59E0B)' }}
          >
            <Instagram className="w-5 h-5" />
            EXPLORE MINION VISUALS ON INSTAGRAM
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
