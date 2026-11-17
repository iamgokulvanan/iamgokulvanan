import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Film, ArrowDown, ExternalLink } from 'lucide-react';
import { contactDetails } from '../data/generalData';
import { HeroScene3D } from './HeroScene3D';
import { gsap } from 'gsap';

// Magnetic button hook
const useMagneticEffect = (strength = 0.3) => {
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      gsap.to(el, { x: dx, y: dy, duration: 0.3, ease: 'power2.out' });
    };
    const handleLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' });
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);
  return ref;
};

const roles = [
  'Technology Enthusiast',
  'Creative Designer',
  'Video Editor',
  'Digital Explorer',
];

export const Hero: React.FC = () => {
  const [roleIdx, setRoleIdx] = React.useState(0);
  const [displayRole, setDisplayRole] = React.useState(roles[0]);
  const [isFading, setIsFading] = React.useState(false);

  const exploreRef = useMagneticEffect(0.25);
  const connectRef = useMagneticEffect(0.25);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setRoleIdx((prev) => {
          const next = (prev + 1) % roles.length;
          setDisplayRole(roles[next]);
          return next;
        });
        setIsFading(false);
      }, 350);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* 3D Scene — right half */}
      <div className="absolute inset-0 lg:left-[46%] pointer-events-none">
        <HeroScene3D />
      </div>

      {/* Gradient overlay to blend 3D into page */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-mono tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities &amp; Creative Collabs
            </span>
          </motion.div>

          {/* Hello text */}
          <motion.p
            variants={itemVariants}
            className="text-sky-400 font-mono text-sm sm:text-base tracking-[0.3em] uppercase mb-2"
          >
            HELLO, I'M
          </motion.p>

          {/* Main name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black text-5xl sm:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-white mb-4"
          >
            GOKUL
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, #38BDF8 0%, #818CF8 60%, #38BDF8 100%)',
                backgroundSize: '200% auto',
              }}
            >
              VANAN.
            </span>
          </motion.h1>

          {/* Animated role */}
          <motion.div variants={itemVariants} className="mb-6 h-8 flex items-center">
            <span
              className={`font-mono text-sm sm:text-base text-sky-300/80 tracking-widest transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}
            >
              {displayRole}
            </span>
          </motion.div>

          {/* Supporting text */}
          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-10"
          >
            I transform ideas into digital experiences through{' '}
            <span className="text-sky-300">technology</span>,{' '}
            <span className="text-violet-300">design</span>, and{' '}
            <span className="text-amber-300">cinematic storytelling</span>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
            <a
              ref={exploreRef}
              href="#projects"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-brand-bg font-semibold text-sm transition-all duration-200 shadow-[0_0_30px_rgba(56,189,248,0.25)] hover:shadow-[0_0_40px_rgba(56,189,248,0.4)]"
            >
              EXPLORE MY WORK
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              ref={connectRef}
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-sky-500/40 text-sky-300 hover:bg-sky-500/10 font-semibold text-sm transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              LET'S CONNECT
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-500 tracking-widest mr-1">FIND ME:</span>
            {[
              { href: contactDetails.githubUrl, icon: <Github className="w-4 h-4" />, label: 'GitHub' },
              { href: contactDetails.linkedinUrl, icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
              { href: contactDetails.instagramPersonal, icon: <Instagram className="w-4 h-4" />, label: 'Instagram' },
              { href: contactDetails.instagramStudio, icon: <Film className="w-4 h-4 text-amber-400" />, label: 'Minion Visuals' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl border border-white/8 bg-white/5 text-slate-400 hover:text-sky-300 hover:border-sky-500/40 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-sky-500/60" />
        </motion.div>
        <span className="text-[10px] font-mono tracking-widest text-slate-600 uppercase">Scroll</span>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { val: '16+', label: 'Certifications', sub: 'IIT / MongoDB / Infosys' },
            { val: '5', label: 'Creative Disciplines', sub: 'Tech · Design · AI · Video' },
            { val: '2024–28', label: 'B.Tech IT', sub: 'HICET Coimbatore' },
            { val: '∞', label: 'Curiosity', sub: 'Always Exploring' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl font-display font-black text-white">{s.val}</span>
              <span className="text-xs text-slate-400 font-medium mt-0.5">{s.label}</span>
              <span className="text-[10px] text-slate-600 font-mono">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
