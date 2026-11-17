import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Film, Image, ChevronRight } from 'lucide-react';

interface World {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  glowColor: string;
  skills: string[];
  visualTag: string;
}

const worlds: World[] = [
  {
    id: 'tech',
    num: '01',
    title: 'TECHNOLOGY',
    subtitle: 'Full-Stack Development',
    description: 'Building robust, modern web applications from front to back. From elegant React interfaces to scalable server-side architectures.',
    icon: <Code2 className="w-7 h-7" />,
    accentColor: '#38BDF8',
    glowColor: 'rgba(56,189,248,0.15)',
    skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Java', 'C', 'HTML', 'CSS', 'MongoDB', 'REST APIs', 'AI Tools'],
    visualTag: 'Frontend · Backend · Full Stack',
  },
  {
    id: 'design',
    num: '02',
    title: 'UI/UX DESIGN',
    subtitle: 'Product & Interface Design',
    description: 'Crafting intuitive, beautiful digital interfaces that feel as good as they look. From wireframes to polished design systems.',
    icon: <Palette className="w-7 h-7" />,
    accentColor: '#818CF8',
    glowColor: 'rgba(129,140,248,0.15)',
    skills: ['Figma', 'Wireframing', 'Prototyping', 'UI Design', 'UX Research', 'Design Systems', 'Responsive Design', 'Creative Layouts'],
    visualTag: 'Figma · Systems · UX',
  },
  {
    id: 'video',
    num: '03',
    title: 'CINEMATIC VIDEO',
    subtitle: 'Post-Production & Motion',
    description: 'Transforming raw footage into cinematic stories. Color grading, motion graphics, and visual effects that evoke genuine emotion.',
    icon: <Film className="w-7 h-7" />,
    accentColor: '#FB923C',
    glowColor: 'rgba(251,146,60,0.15)',
    skills: ['Cinematic Editing', 'Color Grading', 'Motion Graphics', 'DaVinci Resolve', 'Adobe After Effects', 'Premiere Pro', 'Reels Editing', 'Visual Storytelling'],
    visualTag: 'DaVinci · After Effects · Premiere',
  },
  {
    id: 'graphic',
    num: '04',
    title: 'GRAPHIC DESIGN',
    subtitle: 'Visual Identity & Branding',
    description: 'Creating powerful visual identities — from posters and logos to social media creatives that command attention.',
    icon: <Image className="w-7 h-7" />,
    accentColor: '#34D399',
    glowColor: 'rgba(52,211,153,0.15)',
    skills: ['Poster Design', 'Logo Design', 'Thumbnail Design', 'Social Media Creatives', 'Visual Identity', 'Adobe Photoshop', 'After Effects', 'Brand Design'],
    visualTag: 'Photoshop · Branding · Identity',
  },
];

const WorldCard: React.FC<{ world: World; index: number }> = ({ world, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-default overflow-hidden rounded-2xl border transition-all duration-500"
      style={{
        borderColor: hovered ? `${world.accentColor}30` : 'rgba(255,255,255,0.05)',
        background: hovered
          ? `radial-gradient(ellipse at 20% 20%, ${world.glowColor}, rgba(8,10,15,0.98))`
          : 'rgba(255,255,255,0.02)',
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${world.accentColor}, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div
              className="p-3 rounded-xl transition-all duration-300"
              style={{
                background: `${world.accentColor}15`,
                border: `1px solid ${world.accentColor}25`,
                color: world.accentColor,
              }}
            >
              {world.icon}
            </div>
            <div>
              <span
                className="font-mono text-xs tracking-widest font-bold"
                style={{ color: world.accentColor }}
              >
                WORLD {world.num}
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white mt-0.5">
                {world.title}
              </h3>
            </div>
          </div>
          <span className="font-mono text-xs text-slate-600 mt-1 hidden sm:block">
            {world.visualTag}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6">{world.description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {world.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200"
              style={{
                background: hovered ? `${world.accentColor}12` : 'rgba(255,255,255,0.04)',
                border: `1px solid ${hovered ? world.accentColor + '30' : 'rgba(255,255,255,0.06)'}`,
                color: hovered ? world.accentColor : '#94a3b8',
              }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div
          className="mt-6 pt-4 border-t flex items-center justify-between transition-colors duration-300"
          style={{ borderColor: `${world.accentColor}15` }}
        >
          <span className="text-xs font-mono text-slate-600">{world.subtitle}</span>
          <div
            className="flex items-center gap-1 text-xs font-mono transition-colors duration-300"
            style={{ color: hovered ? world.accentColor : '#475569' }}
          >
            <span>EXPLORE</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Corner number watermark */}
      <div
        className="absolute bottom-4 right-6 font-display font-black text-7xl sm:text-8xl opacity-5 select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-[0.08]"
        style={{ color: world.accentColor }}
      >
        {world.num}
      </div>
    </motion.div>
  );
};

export const ExpertiseSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="expertise" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sky-500/4 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-violet-500/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs tracking-[0.4em] text-sky-400/70 uppercase block mb-4"
          >
            02 — EXPERTISE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight"
          >
            FOUR CREATIVE
            <br />
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 50%, #34D399 100%)'
            }}>
              WORLDS.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-500 text-base sm:text-lg mt-4 max-w-2xl"
          >
            Four distinct disciplines. One unified creative vision.
          </motion.p>
        </div>

        {/* World cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {worlds.map((world, i) => (
            <WorldCard key={world.id} world={world} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
