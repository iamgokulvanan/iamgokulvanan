import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Cpu, 
  Film,
  BadgeCheck
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Project, ProjectCategory } from '../types/portfolio';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Works' },
    { id: 'development', label: 'Development' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'ai', label: 'AI & Innovation' },
    { id: 'video', label: 'Video Studio' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Portfolio Showcase
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            SELECTED WORKS.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            Curated initiatives spanning web applications, AI triage prototypes, creator tools, and cinematic reels.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                activeFilter === filter.id
                  ? 'bg-brand-card text-brand-accent border-brand-accent shadow-cyan-soft'
                  : 'bg-brand-surface text-brand-muted border-brand-border hover:border-brand-borderLight hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-3xl bg-brand-surface/80 border border-brand-border hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Card Banner */}
              <div className="p-6 border-b border-brand-border/60 bg-gradient-to-br from-brand-card to-brand-surface relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-brand-accent font-semibold">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {project.status}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-brand-muted font-light mt-1 line-clamp-2">
                  "{project.tagline}"
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-6">
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-brand-card border border-brand-border text-[11px] font-mono text-brand-dim"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-brand-card text-[11px] font-mono text-brand-dim">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="pt-4 border-t border-brand-border/50 flex items-center justify-between text-xs font-semibold text-brand-accent">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-3xl rounded-3xl bg-brand-surface border border-brand-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-5 bg-brand-card border-b border-brand-border flex items-center justify-between sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-brand-accent px-2.5 py-1 rounded bg-brand-surface border border-brand-border">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-xs font-mono text-brand-dim">
                  Status: {selectedProject.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-brand-muted hover:text-white hover:bg-brand-surface transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              
              {/* Title & Tagline */}
              <div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm sm:text-base text-brand-accent font-light mt-1">
                  "{selectedProject.tagline}"
                </p>
                <p className="text-xs font-mono text-brand-dim mt-2">
                  Role: {selectedProject.role}
                </p>
              </div>

              {/* 1. Project Overview */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-brand-dim">
                  01. Project Overview
                </h4>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* 2. Problem Statement */}
              <div className="p-5 rounded-2xl bg-brand-card border border-rose-500/20 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-rose-400 font-bold">
                  02. Problem Being Addressed
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* 3. The Engineered Solution */}
              <div className="p-5 rounded-2xl bg-brand-card border border-emerald-500/20 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  03. The Engineered Solution
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>

              {/* 4. Key Architectural Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-brand-dim">
                  04. Key Functional Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.keyFeatures.map((feat, i) => (
                    <div key={i} className="p-3 rounded-xl bg-brand-card border border-brand-border flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Technologies Used */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-widest text-brand-dim">
                  05. Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-brand-card border border-brand-border text-xs font-mono text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 6. Outcome & Future Roadmap */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-brand-dim">
                  06. Project Outcome
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {selectedProject.outcome}
                </p>
              </div>

            </div>

            {/* Modal Actions Footer */}
            <div className="px-6 sm:px-8 py-4 bg-brand-card border-t border-brand-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-brand-accent hover:bg-sky-300 text-brand-bg text-xs font-semibold flex items-center gap-2 transition-all shadow-cyan-soft"
                  >
                    <span>Visit Live Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-mono text-brand-muted hover:text-white"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
