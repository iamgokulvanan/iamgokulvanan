import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Sparkles, Heart } from 'lucide-react';

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const interests = [
  { icon: '🎬', label: 'Cinematography', desc: 'Visual storytelling through lens and light' },
  { icon: '🎵', label: 'Music & Audio', desc: 'Cinematic scores and sound design' },
  { icon: '💻', label: 'Tech Exploration', desc: 'AI, dev tools, modern frameworks' },
  { icon: '🎮', label: 'Gaming & UX', desc: 'Interactive worlds and HUD design' },
  { icon: '📐', label: 'UI/UX Design', desc: 'Figma systems and interface architecture' },
  { icon: '✍️', label: 'Creative Writing', desc: 'Scripts, story beats, narratives' },
];

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <FadeUp className="mb-4">
          <span className="font-mono text-xs tracking-[0.4em] text-sky-400/70 uppercase">
            01 — ABOUT ME
          </span>
        </FadeUp>

        <FadeUp delay={0.1} className="mb-16">
          <h2 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight">
            THE PERSON
            <br />
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)'
            }}>
              BEHIND THE PIXELS.
            </span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Profile */}
          <FadeUp delay={0.15} className="lg:col-span-4">
            <div className="relative">
              {/* Photo container */}
              <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[3/4] rounded-2xl overflow-hidden border border-white/8"
                style={{ background: 'linear-gradient(145deg, rgba(56,189,248,0.08), rgba(129,140,248,0.05))' }}>
                <img
                  src="/assets/profile.jpg"
                  alt="Gokul Vanan — IAMGOKULVANAN"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />

                {/* Info card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md border border-white/10 bg-black/40">
                  <p className="font-display font-bold text-white text-lg">Gokul Vanan</p>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                    <MapPin className="w-3 h-3 text-sky-400" />
                    <span>Tamil Nadu, India</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                    <GraduationCap className="w-3 h-3 text-violet-400" />
                    <span>B.Tech IT · HICET · 2024–28</span>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl border border-sky-500/20 bg-sky-500/5 backdrop-blur-sm flex items-center justify-center"
              >
                <Sparkles className="w-8 h-8 text-sky-400/60" />
              </motion.div>
            </div>
          </FadeUp>

          {/* Right: Story */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <FadeUp delay={0.2}>
              <div className="space-y-5 text-slate-400 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm{' '}
                  <span className="text-white font-semibold">Gokul Vanan</span>, a technology enthusiast
                  and creative individual passionate about exploring the intersection of{' '}
                  <span className="text-sky-300">technology</span> and{' '}
                  <span className="text-violet-300">visual storytelling</span>.
                </p>
                <p>
                  I enjoy creating digital experiences through web development, UI/UX design, graphic
                  design, video editing, and emerging technologies.
                </p>
                <p>
                  I believe creativity and technology together can transform ordinary ideas into{' '}
                  <span className="text-white font-medium">extraordinary experiences</span>.
                </p>
                <p>
                  I'm continuously learning, experimenting, and improving my skills to build meaningful
                  digital experiences.
                </p>
              </div>
            </FadeUp>

            {/* Education card */}
            <FadeUp delay={0.25}>
              <div className="p-5 rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 shrink-0">
                    <GraduationCap className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 tracking-widest mb-1">EDUCATION</p>
                    <h3 className="font-display font-bold text-white text-lg">
                      B.Tech Information Technology
                    </h3>
                    <p className="text-slate-400 text-sm mt-0.5">
                      Hindusthan College of Engineering and Technology
                    </p>
                    <p className="text-xs font-mono text-sky-400/70 mt-1">
                      Coimbatore, Tamil Nadu · 2024–2028 · Currently Pursuing
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {['Cloud Computing (IIT)', 'MongoDB AI', 'Web Dev Internship', 'Full-Stack'].map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-sky-500/10 border border-sky-500/20 text-sky-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Interests */}
            <FadeUp delay={0.3}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <span className="text-xs font-mono text-slate-500 tracking-widest uppercase">Interests & Passions</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {interests.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
                      className="p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-sky-500/20 hover:bg-sky-500/5 transition-all group cursor-default"
                    >
                      <span className="text-xl block mb-1.5">{item.icon}</span>
                      <p className="text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};
