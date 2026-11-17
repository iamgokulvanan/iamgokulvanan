import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ChevronRight, Code2, Film, Palette, Cpu } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const categoryIcons: Record<string, React.ReactNode> = {
  development: <Code2 className="w-3.5 h-3.5" />,
  video: <Film className="w-3.5 h-3.5" />,
  uiux: <Palette className="w-3.5 h-3.5" />,
  ai: <Cpu className="w-3.5 h-3.5" />,
};

const categoryColors: Record<string, { accent: string; glow: string; badge: string }> = {
  development: { accent: '#38BDF8', glow: 'rgba(56,189,248,0.12)', badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20' },
  uiux: { accent: '#818CF8', glow: 'rgba(129,140,248,0.12)', badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
  ai: { accent: '#34D399', glow: 'rgba(52,211,153,0.12)', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
  video: { accent: '#FB923C', glow: 'rgba(251,146,60,0.12)', badge: 'bg-orange-500/10 text-orange-300 border-orange-500/20' },
  graphic: { accent: '#F472B6', glow: 'rgba(244,114,182,0.12)', badge: 'bg-pink-500/10 text-pink-300 border-pink-500/20' },
};

const filters = ['ALL', 'DEVELOPMENT', 'UI/UX', 'AI', 'VIDEO'];
const filterMap: Record<string, string | null> = {
  ALL: null,
  DEVELOPMENT: 'development',
  'UI/UX': 'uiux',
  AI: 'ai',
  VIDEO: 'video',
};

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const filterValue = filterMap[activeFilter];
  const filtered = filterValue
    ? projectsData.filter((p) => p.category === filterValue)
    : projectsData;

  const selectedProject = projectsData.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-bg to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sky-500/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className="mb-14">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-mono text-xs tracking-[0.4em] text-sky-400/70 uppercase block mb-4"
          >
            03 — PROJECTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-4xl sm:text-6xl xl:text-7xl text-white leading-[0.9] tracking-tight"
          >
            SELECTED
            <br />
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)'
            }}>
              WORKS.
            </span>
          </motion.h2>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider border transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-sky-500 border-sky-500 text-brand-bg'
                  : 'border-white/8 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const colors = categoryColors[project.category] || categoryColors.development;
              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onClick={() => setSelectedId(project.id)}
                  className="relative group cursor-pointer rounded-2xl border border-white/5 bg-white/[0.02] hover:border-opacity-100 overflow-hidden transition-all duration-500"
                  style={{
                    ['--hover-border' as string]: `${colors.accent}30`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${colors.accent}25`;
                    e.currentTarget.style.background = `radial-gradient(ellipse at 0% 0%, ${colors.glow}, rgba(8,10,15,0))`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                  }}
                >
                  {/* Visual cover */}
                  <div
                    className="h-44 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${colors.accent}20, ${colors.accent}08, rgba(8,10,15,0.9))`,
                    }}
                  >
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, ${colors.accent}10 0, ${colors.accent}10 1px, transparent 0, transparent 50%)`,
                        backgroundSize: '12px 12px',
                      }}
                    />

                    {/* Category icon */}
                    <div className="absolute top-4 left-4">
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border ${colors.badge}`}>
                        {categoryIcons[project.category]}
                        {project.categoryLabel}
                      </div>
                    </div>

                    {/* Status */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                        project.status === 'Completed'
                          ? 'bg-emerald-500/15 border-emerald-500/25 text-emerald-300'
                          : 'bg-amber-500/15 border-amber-500/25 text-amber-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Large number watermark */}
                    <div
                      className="absolute bottom-2 right-4 font-display font-black text-6xl opacity-10 select-none"
                      style={{ color: colors.accent }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-sky-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mb-3">{project.tagline}</p>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-500">
                          {t}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-white transition-colors"
                            aria-label="GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-sky-300 transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      <button
                        className="flex items-center gap-1 text-xs font-mono transition-colors"
                        style={{ color: colors.accent }}
                      >
                        VIEW DETAILS
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[200]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 32 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-4 sm:inset-8 lg:inset-16 z-[201] overflow-y-auto"
            >
              <div className="min-h-full rounded-2xl border border-white/10 bg-[#080A0F]/98 backdrop-blur-xl p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border mb-3 ${
                      categoryColors[selectedProject.category]?.badge || ''
                    }`}>
                      {categoryIcons[selectedProject.category]}
                      {selectedProject.categoryLabel}
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
                      {selectedProject.title}
                    </h2>
                    <p className="text-slate-400 text-sm mt-1 font-mono">{selectedProject.tagline}</p>
                  </div>
                  <button
                    onClick={() => setSelectedId(null)}
                    className="p-2 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-colors shrink-0 ml-4"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 tracking-widest mb-2 uppercase">Overview</h4>
                      <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 tracking-widest mb-2 uppercase">The Problem</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{selectedProject.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 tracking-widest mb-2 uppercase">The Solution</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">{selectedProject.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 tracking-widest mb-2 uppercase">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.keyFeatures.map((f, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: categoryColors[selectedProject.category]?.accent }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
                      <p className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-widest">Details</p>
                      <div className="space-y-2.5 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-500">Role</span>
                          <span className="text-white text-right text-xs">{selectedProject.role}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500">Status</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            selectedProject.status === 'Completed'
                              ? 'bg-emerald-500/15 text-emerald-300'
                              : 'bg-amber-500/15 text-amber-300'
                          }`}>{selectedProject.status}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
                      <p className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-widest">Technologies</p>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies.map((t) => (
                          <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
                      <p className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-widest">Outcome</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{selectedProject.outcome}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                      {selectedProject.githubUrl && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 text-sm font-mono text-slate-300 hover:text-white hover:border-white/20 transition-all">
                          <Github className="w-4 h-4" /> View on GitHub
                        </a>
                      )}
                      {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-mono text-brand-bg font-semibold transition-all"
                          style={{ background: 'linear-gradient(135deg, #38BDF8, #818CF8)' }}>
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
