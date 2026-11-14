import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Sparkles, 
  Film, 
  Layers, 
  ArrowRight, 
  CheckCircle2,
  Terminal,
  Cpu,
  MonitorPlay,
  Figma
} from 'lucide-react';

interface Pillar {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tools: string[];
  capabilities: string[];
  targetSection: string;
  accentColor: string;
  icon: React.ElementType;
}

export const FiveIdentities: React.FC = () => {
  const pillars: Pillar[] = [
    {
      id: 'tech',
      number: '01',
      title: 'Technology & Software Development',
      category: 'Engineering & Code',
      tagline: 'Transforming ideas into resilient digital architectures.',
      description: 'Building full-stack web applications, clean frontend interfaces, responsive components, and scalable backend REST APIs using modern TypeScript, React, Node.js, and MongoDB.',
      tools: ['React', 'TypeScript', 'Node.js', 'Python', 'C', 'MongoDB', 'REST APIs', 'Git'],
      capabilities: [
        'Single Page Application (SPA) architecture',
        'State management & clean reusable components',
        'Asynchronous data fetching & API integration',
        'Database indexing & document modeling in MongoDB'
      ],
      targetSection: '#tech',
      accentColor: '#38BDF8',
      icon: Code2
    },
    {
      id: 'uiux',
      number: '02',
      title: 'UI/UX & Product Design',
      category: 'Human-Centered Design',
      tagline: 'Designing intuitive interfaces with aesthetic balance.',
      description: 'Crafting user-centered experiences from low-fidelity wireframing to high-fidelity clickable prototypes in Figma, maintaining rigorous design tokens and accessibility guidelines.',
      tools: ['Figma', 'Design Systems', 'Wireframing', 'Interactive Prototyping', 'Responsive UI'],
      capabilities: [
        'User journey mapping & information architecture',
        'Atomic design systems with modular components',
        'Thumb-friendly mobile app & dashboard layouts',
        'Micro-interactions & visual hierarchy refinement'
      ],
      targetSection: '#uiux',
      accentColor: '#A78BFA',
      icon: Palette
    },
    {
      id: 'ai',
      number: '03',
      title: 'Artificial Intelligence & Innovation',
      category: 'Intelligent Systems',
      tagline: 'Pioneering RAG architectures and autonomous agent loops.',
      description: 'Exploring practical AI workflows, prompt engineering, Retrieval-Augmented Generation (RAG) with vector search indexes in MongoDB Atlas, and autonomous agent tool-calling patterns.',
      tools: ['Prompt Engineering', 'RAG Concepts', 'Vector Search', 'AI Agents', 'MongoDB Atlas'],
      capabilities: [
        'Semantic document chunking & contextual embeddings',
        'Prompt engineering with few-shot & chain-of-thought paradigms',
        'Autonomous AI agent reasoning loops & tool calling',
        'Enterprise AI resilience frameworks & safe fallbacks'
      ],
      targetSection: '#ai',
      accentColor: '#34D399',
      icon: Sparkles
    },
    {
      id: 'video',
      number: '04',
      title: 'Cinematic Video Editing & Motion',
      category: 'Creative Production (Minion Visuals)',
      tagline: 'Evoking emotion through dynamic rhythm and Hollywood grading.',
      description: 'Producing high-impact video reels, wedding cinematic invitations, travel edits, and motion graphics with DaVinci Resolve color grading and After Effects kinetic typography.',
      tools: ['DaVinci Resolve', 'Adobe Premiere Pro', 'After Effects', 'Foley Sound Design', 'Photoshop'],
      capabilities: [
        'Hollywood teal & orange and filmic color grading',
        'Beat-synced cuts & dynamic speed ramping',
        'Kinetic typography & title reveals',
        'High-retention 3-second hook editing for social media'
      ],
      targetSection: '#studio',
      accentColor: '#F97316',
      icon: Film
    },
    {
      id: 'graphic',
      number: '05',
      title: 'Graphic Design & Visual Storytelling',
      category: 'Visual Branding',
      tagline: 'Forging memorable identities and high-converting visuals.',
      description: 'Designing high-CTR YouTube thumbnails, poster compositions, brand logos, and marketing creatives using Adobe Photoshop with attention to composition and typography.',
      tools: ['Adobe Photoshop', 'Brand Identity', 'Thumbnail Design', 'Typography', 'Visual Composition'],
      capabilities: [
        'High-CTR YouTube thumbnail composition & facial expressions',
        'Minimalist brand logo design & visual collateral',
        'Cinematic event posters & digital art manipulation',
        'Multi-platform social media marketing creatives'
      ],
      targetSection: '#studio',
      accentColor: '#EC4899',
      icon: Layers
    }
  ];

  const [activeTab, setActiveTab] = useState<string>('tech');
  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];
  const IconComponent = currentPillar.icon;

  return (
    <section id="pillars" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Core Multidisciplinary Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Five Pillars of IAMGOKULVANAN
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            A cohesive convergence of technology, human-centric design, artificial intelligence, cinema, and graphic storytelling.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {pillars.map((pillar) => {
            const isActive = activeTab === pillar.id;
            const PillIcon = pillar.icon;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-brand-card text-white border-brand-accent shadow-cyan-soft'
                    : 'bg-brand-surface/60 text-brand-muted border-brand-border hover:border-brand-borderLight hover:text-white'
                }`}
              >
                <PillIcon
                  className="w-4 h-4 transition-colors"
                  style={{ color: isActive ? pillar.accentColor : undefined }}
                />
                <span>{pillar.title.split('&')[0].trim()}</span>
                <span className="text-[10px] font-mono opacity-60">#{pillar.number}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-surface/80 border border-brand-border shadow-2xl relative overflow-hidden">
          {/* Subtle glow background */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20"
            style={{ backgroundColor: currentPillar.accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Pillar Meta & Description */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-brand-dim">
                  PILLAR {currentPillar.number}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-brand-card border border-brand-border font-mono text-brand-accent">
                  {currentPillar.category}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                  {currentPillar.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-300 font-light italic mt-2">
                  "{currentPillar.tagline}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                {currentPillar.description}
              </p>

              {/* Capabilities checklist */}
              <div className="flex flex-col gap-2.5 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-dim">
                  Key Capabilities:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentPillar.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: currentPillar.accentColor }}
                      />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={currentPillar.targetSection}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold hover:underline"
                  style={{ color: currentPillar.accentColor }}
                >
                  <span>Explore {currentPillar.title} deep dive</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Tools & Visual Showcase Column */}
            <div className="lg:col-span-5 flex flex-col gap-6 p-6 rounded-2xl bg-brand-card border border-brand-border">
              <div className="flex items-center gap-3 border-b border-brand-border/60 pb-4">
                <div 
                  className="p-3 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center"
                  style={{ color: currentPillar.accentColor }}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Tooling Ecosystem</h4>
                  <p className="text-xs text-brand-dim font-mono">Specialized software & stack</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentPillar.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-lg bg-brand-surface border border-brand-border text-xs font-medium text-slate-300 hover:border-brand-accent/40 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-brand-surface/60 border border-brand-border/60 text-xs text-brand-muted leading-relaxed">
                <p className="font-semibold text-slate-200 mb-1">Brand Integration:</p>
                Each pillar does not exist in a silo—they enhance one another. Code powers interactive design; design refines AI UX; cinematic editing elevates product storytelling.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
