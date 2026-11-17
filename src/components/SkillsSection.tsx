import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillGroup {
  category: string;
  color: string;
  items: { name: string; icon: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Development',
    color: '#38BDF8',
    items: [
      { name: 'HTML', icon: '🌐' }, { name: 'CSS', icon: '🎨' }, { name: 'JavaScript', icon: '🟨' },
      { name: 'TypeScript', icon: '🔷' }, { name: 'React', icon: '⚛️' }, { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' }, { name: 'Java', icon: '☕' }, { name: 'C', icon: '⚙️' },
      { name: 'MongoDB', icon: '🍃' },
    ],
  },
  {
    category: 'Design',
    color: '#818CF8',
    items: [
      { name: 'Figma', icon: '🎯' }, { name: 'UI/UX', icon: '🖌️' },
      { name: 'Photoshop', icon: '🖼️' }, { name: 'Graphic Design', icon: '✏️' },
      { name: 'Wireframing', icon: '📐' }, { name: 'Prototyping', icon: '🔗' },
    ],
  },
  {
    category: 'Video & Motion',
    color: '#FB923C',
    items: [
      { name: 'After Effects', icon: '🌀' }, { name: 'DaVinci Resolve', icon: '🎬' },
      { name: 'Premiere Pro', icon: '▶️' }, { name: 'Color Grading', icon: '🎨' },
      { name: 'Motion Graphics', icon: '✨' }, { name: 'Reels Editing', icon: '📱' },
    ],
  },
  {
    category: 'AI & Creativity',
    color: '#34D399',
    items: [
      { name: 'AI Tools', icon: '🤖' }, { name: 'Prompt Engineering', icon: '💬' },
      { name: 'Creative Thinking', icon: '💡' }, { name: 'RAG Concepts', icon: '🔍' },
      { name: 'Vector Search', icon: '🗂️' }, { name: 'AI Agents', icon: '🧠' },
    ],
  },
];

const SkillTag: React.FC<{ name: string; icon: string; color: string; delay: number; inView: boolean }> = ({
  name, icon, color, delay, inView,
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2 px-3.5 py-2 rounded-xl border cursor-default transition-all duration-300"
      style={{
        borderColor: hovered ? `${color}40` : 'rgba(255,255,255,0.06)',
        background: hovered ? `${color}10` : 'rgba(255,255,255,0.02)',
        boxShadow: hovered ? `0 0 16px ${color}18` : 'none',
      }}
    >
      <span className="text-base">{icon}</span>
      <span className="text-xs font-mono font-semibold" style={{ color: hovered ? color : '#94a3b8' }}>
        {name}
      </span>
    </motion.div>
  );
};

export const SkillsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-sky-500/4 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full bg-violet-500/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-mono text-xs tracking-[0.4em] text-sky-400/70 uppercase block mb-4"
          >
            06 — SKILLS & TOOLS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight"
          >
            TOOLS OF THE
            <br />
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 50%, #34D399 100%)'
            }}>
              CRAFT.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-sm font-mono mt-3"
          >
            Technologies and tools I work with daily — no percentages, just real skills.
          </motion.p>
        </div>

        {/* Skill groups */}
        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + gi * 0.1, duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-2 h-6 rounded-full"
                  style={{ background: group.color }}
                />
                <span className="font-display font-bold text-sm text-white tracking-wider">
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill, si) => (
                  <SkillTag
                    key={skill.name}
                    name={skill.name}
                    icon={skill.icon}
                    color={group.color}
                    delay={0.15 + gi * 0.1 + si * 0.04}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
