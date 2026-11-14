import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Server, 
  Layout, 
  Wrench, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';

interface TechItem {
  name: string;
  category: string;
  description: string;
  tag: string;
  color: string;
}

interface TechnologySectionProps {
  onOpenTerminal: () => void;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ onOpenTerminal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  const technologies: TechItem[] = [
    // Languages
    { name: 'C Language', category: 'languages', description: 'Systems programming, memory management & pointer logic', tag: 'Core CS', color: '#60A5FA' },
    { name: 'Python', category: 'languages', description: 'OOP, data processing, multiprocessing & AI automation', tag: 'Infosys Certified', color: '#FCD34D' },
    { name: 'Java', category: 'languages', description: 'Strong object-oriented architecture and robust data structures', tag: 'Object-Oriented', color: '#F87171' },
    { name: 'JavaScript (ES6+)', category: 'languages', description: 'Modern asynchronous web scripting, closures & promises', tag: 'Web Engine', color: '#FBBF24' },
    { name: 'TypeScript', category: 'languages', description: 'Type-safe scalable application development with strict types', tag: 'Type-Safe', color: '#38BDF8' },

    // Frontend
    { name: 'React', category: 'frontend', description: 'Component-driven reactive user interfaces & state hooks', tag: 'SPA Framework', color: '#38BDF8' },
    { name: 'HTML5 & Semantic Web', category: 'frontend', description: 'Accessible markup, SEO metadata & structural web standards', tag: 'Web Standard', color: '#FB923C' },
    { name: 'CSS3 & Modern Layouts', category: 'frontend', description: 'Flexbox, CSS Grid, custom properties & keyframe animations', tag: 'Styling', color: '#818CF8' },
    { name: 'Tailwind CSS', category: 'frontend', description: 'Utility-first styling, design token systems & responsive grids', tag: 'Design Tokens', color: '#38BDF8' },
    { name: 'Responsive Web Design', category: 'frontend', description: 'Fluid typography, media queries & cross-device ergonomics', tag: 'UX Practice', color: '#34D399' },

    // Backend
    { name: 'Node.js', category: 'backend', description: 'Asynchronous event-driven JavaScript server runtime', tag: 'Runtime', color: '#4ADE80' },
    { name: 'REST APIs', category: 'backend', description: 'Stateless HTTP routing, JSON schemas & standardized error payloads', tag: 'Integration', color: '#A78BFA' },
    { name: 'Backend Architecture', category: 'backend', description: 'Layered service patterns, controller logic & modular structure', tag: 'System Design', color: '#94A3B8' },
    { name: 'Auth & Security Concepts', category: 'backend', description: 'JWT tokens, salted hashing, CORS & rate-limiting hygiene', tag: 'Security', color: '#F472B6' },

    // Databases
    { name: 'MongoDB', category: 'database', description: 'NoSQL document modeling, indexing & aggregation pipelines', tag: 'MongoDB Certified', color: '#4ADE80' },
    { name: 'MongoDB Atlas Vector Search', category: 'database', description: 'Embeddings storage, cosine similarity & AI knowledge retrieval', tag: 'Credly Badge', color: '#34D399' },
    { name: 'SQL', category: 'database', description: 'Relational table modeling, queries, inner/outer joins & normalization', tag: 'Relational DB', color: '#60A5FA' },

    // Tools
    { name: 'Visual Studio Code', category: 'tools', description: 'Primary IDE configured with linting, formatting & snippets', tag: 'Editor', color: '#38BDF8' },
    { name: 'Git & GitHub', category: 'tools', description: 'Distributed version control, branching, PRs & commit history', tag: 'Version Control', color: '#FB923C' },
    { name: 'Postman', category: 'tools', description: 'API contract testing, environment variables & payload simulation', tag: 'API Testing', color: '#FB923C' },
    { name: 'Vite', category: 'tools', description: 'Lightning-fast ES module development server & roll-up bundler', tag: 'Build Tool', color: '#A78BFA' },
  ];

  const filteredTech = activeCategory === 'all'
    ? technologies
    : technologies.filter((t) => t.category === activeCategory);

  const sampleCode = `// IAMGOKULVANAN Developer Stack
import { AutonomousAgent, VectorSearch } from '@mongodb/ai';
import { createServer } from 'node:http';

export async function initializeExperience() {
  const profile = {
    brand: 'IAMGOKULVANAN',
    status: 'Tech Meets Creativity',
    stack: ['React', 'TypeScript', 'Node.js', 'MongoDB Atlas'],
    motto: 'Transforming ideas into functional digital products'
  };

  console.log(\`[SYSTEM]: Loaded \${profile.brand} digital identity\`);
  return profile;
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Engineering & Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            BUILDING WITH TECHNOLOGY.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            Exploring technologies and transforming ideas into functional digital products.
          </p>
        </div>

        {/* Code Environment Visual Showcase */}
        <div className="p-6 sm:p-8 rounded-3xl bg-brand-surface/90 border border-brand-border shadow-2xl mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Code Editor Mockup */}
            <div className="lg:col-span-7 rounded-2xl bg-brand-card border border-brand-border overflow-hidden shadow-xl">
              
              {/* Editor Tab Bar */}
              <div className="px-4 py-2.5 bg-brand-bg/90 border-b border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-brand-muted ml-2">
                    iamgokulvanan.config.ts
                  </span>
                </div>
                <button
                  onClick={copyCode}
                  className="p-1 rounded text-brand-muted hover:text-brand-accent transition-colors flex items-center gap-1 text-[11px] font-mono"
                  title="Copy snippet"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed bg-[#0A0D13]">
                <pre>
                  <code>{sampleCode}</code>
                </pre>
              </div>

              {/* Status footer */}
              <div className="px-4 py-1.5 bg-brand-bg/80 border-t border-brand-border text-[10px] font-mono text-brand-dim flex items-center justify-between">
                <span>TypeScript · UTF-8 · Prettier</span>
                <span className="text-emerald-400">● Live Environment</span>
              </div>
            </div>

            {/* Right: Technical Focus Narrative & Terminal Trigger */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-card border border-brand-border w-fit text-xs font-mono text-brand-accent">
                <Code2 className="w-3.5 h-3.5" />
                <span>Hands-On Engineering</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                Pragmatic, Modern Full-Stack Workflows
              </h3>

              <p className="text-sm text-brand-muted leading-relaxed">
                Rather than memorizing abstract syntax, I focus on building practical systems: structuring relational and document schemas, writing clean TypeScript components, and integrating RESTful APIs.
              </p>

              <div className="p-4 rounded-xl bg-brand-card border border-brand-border flex items-start gap-3">
                <div className="p-2 rounded-lg bg-brand-surface text-brand-accent shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">Interactive Developer Terminal</h4>
                  <p className="text-xs text-brand-muted mt-0.5">
                    Explore my tech skills, certifications, and architecture details via real command-line prompts.
                  </p>
                  <button
                    onClick={onOpenTerminal}
                    className="mt-3 px-3 py-1.5 rounded-lg bg-brand-accent/15 hover:bg-brand-accent/25 text-brand-accent text-xs font-mono font-semibold border border-brand-accent/30 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Launch Terminal ($)</span>
                    <span className="text-xs">→</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                activeCategory === cat.id
                  ? 'bg-brand-card text-brand-accent border-brand-accent shadow-cyan-soft'
                  : 'bg-brand-surface text-brand-muted border-brand-border hover:border-brand-borderLight hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="p-5 rounded-2xl bg-brand-surface/70 border border-brand-border hover:border-brand-accent/40 transition-all duration-200 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card border border-brand-border text-brand-dim"
                  >
                    {tech.tag}
                  </span>
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-brand-accent transition-colors">
                  {tech.name}
                </h4>

                <p className="text-xs text-brand-muted mt-2 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-brand-border/40 flex items-center justify-between text-[11px] font-mono text-brand-dim">
                <span>Verified Tool</span>
                <span className="text-brand-accent group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
