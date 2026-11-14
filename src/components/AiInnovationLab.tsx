import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  Database, 
  Bot, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight,
  Terminal,
  Zap
} from 'lucide-react';

export const AiInnovationLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agents' | 'rag' | 'prompt'>('agents');

  const aiPillars = [
    {
      id: 'agents',
      title: 'Autonomous AI Agents',
      badge: 'MongoDB Credly Verified',
      icon: Bot,
      color: '#38BDF8',
      headline: 'Tool Calling & Stateful Reasoning Loops',
      description: 'Engineering agent architectures where LLMs iteratively assess goals, select and execute structured tools, maintain conversational memory, and synthesize outputs with verified accuracy.',
      keyConcepts: [
        'Agentic tool calling with JSON Schema validation',
        'Dynamic scratchpad memory & conversation state persistence',
        'Deterministic error handling & fallback strategies',
        'Document-backed operational stores in MongoDB Atlas'
      ]
    },
    {
      id: 'rag',
      title: 'Retrieval-Augmented Generation (RAG)',
      badge: 'Atlas Vector Search',
      icon: Database,
      color: '#34D399',
      headline: 'Grounding LLMs in High-Dimensional Knowledge',
      description: 'Constructing robust RAG pipelines that prevent hallucinations by semantically chunking enterprise documents, generating dense vector embeddings, and performing cosine / kNN similarity queries in real-time.',
      keyConcepts: [
        'Semantic document chunking & overlap strategy',
        'High-dimensional vector indexing in MongoDB Atlas',
        'Cosine & kNN similarity hybrid search scoring',
        'Strict context injection guardrails for hallucination prevention'
      ]
    },
    {
      id: 'prompt',
      title: 'Prompt Engineering & Guardrails',
      badge: 'System Architecture',
      icon: Cpu,
      color: '#A78BFA',
      headline: 'Precision Few-Shot & Chain-of-Thought Workflows',
      description: 'Designing deterministic prompt templates that enforce strict schemas, role calibration, tone modulation, and safety guardrails across complex natural language tasks.',
      keyConcepts: [
        'Structured JSON schema enforcement for downstream parsers',
        'Few-shot demonstration framing for complex reasoning',
        'Chain-of-thought (CoT) prompting for step-by-step logic',
        'Safety guardrails, toxicity filtering & prompt injection defense'
      ]
    }
  ];

  const currentPillar = aiPillars.find((p) => p.id === activeTab) || aiPillars[0];
  const PillarIcon = currentPillar.icon;

  const samplePromptPlayground = {
    input: "User query: 'What are the emergency first-aid triage steps for acute heat exhaustion?'",
    systemPrompt: `You are Medio Assist AI. Your directives:
1. Always prioritize life safety.
2. If red-flag symptoms (confusion, loss of consciousness, cessation of sweating) exist, command immediate emergency services (911/108/112).
3. Ground instructions strictly in verified medical first-aid protocols from the RAG knowledge repository.
4. Output in structured JSON with emergencyFlags and actionable steps.`,
    retrievedContext: "Vector Search match (score 0.94): [Medical Protocol HE-04: Move to shade, loosen clothing, sip cool water, apply cool damp cloths. Escalate if mental status alters.]",
    structuredOutput: `{
  "triageLevel": "Urgent - Non-Critical",
  "emergencyEscalation": false,
  "actionableSteps": [
    "Move patient immediately to a cool, shaded environment",
    "Loosen restrictive clothing and fan skin gently",
    "Encourage slow sips of cool water or electrolyte solution",
    "Apply damp, cool compresses to neck, groin, and underarms"
  ],
  "warning": "If confusion, vomiting, or fainting occurs, call emergency services immediately."
}`
  };

  return (
    <section id="ai" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Intelligent Systems & Applied AI
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            EXPLORING THE FUTURE WITH AI.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            Grounding large language models with vector databases, autonomous tool-calling loops, and prompt safety guardrails.
          </p>
        </div>

        {/* Tab Buttons for 3 Core AI Focus Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {aiPillars.map((pillar) => {
            const isActive = activeTab === pillar.id;
            const Icon = pillar.icon;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id as any)}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 ${
                  isActive
                    ? 'bg-brand-surface border-brand-accent shadow-cyan-soft'
                    : 'bg-brand-surface/40 border-brand-border hover:border-brand-borderLight text-brand-muted hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div 
                    className="p-2.5 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center"
                    style={{ color: pillar.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card border border-brand-border text-brand-dim">
                    {pillar.badge}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-brand-muted mt-1">{pillar.headline}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-surface/80 border border-brand-border shadow-2xl mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Conceptual Details */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-accent">
                <PillarIcon className="w-4 h-4" />
                <span>Specialized AI Discipline</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {currentPillar.headline}
              </h3>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                {currentPillar.description}
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-dim block">
                  Core Implementation Patterns:
                </span>
                {currentPillar.keyConcepts.map((concept, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: currentPillar.color }}
                    />
                    <span>{concept}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <a
                  href="#certificates"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-accent hover:underline font-mono"
                >
                  <span>View verified MongoDB AI credentials</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Prompt Simulation Console */}
            <div className="lg:col-span-6 rounded-2xl bg-brand-card border border-brand-border p-6 flex flex-col gap-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-brand-border pb-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-brand-accent" />
                  <span className="text-xs font-mono font-bold text-white">AI Architecture Simulator (RAG & Triage)</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Guardrails Active
                </span>
              </div>

              {/* Step 1: Input Query */}
              <div className="p-3 rounded-xl bg-brand-surface border border-brand-border/70 text-xs font-mono">
                <span className="text-brand-dim block text-[10px] mb-1">01. User Query:</span>
                <p className="text-slate-200">{samplePromptPlayground.input}</p>
              </div>

              {/* Step 2: RAG Vector Search Context */}
              <div className="p-3 rounded-xl bg-brand-surface border border-brand-border/70 text-xs font-mono">
                <span className="text-emerald-400 block text-[10px] mb-1">02. MongoDB Atlas Vector Search Context:</span>
                <p className="text-slate-300 text-[11px] leading-relaxed">{samplePromptPlayground.retrievedContext}</p>
              </div>

              {/* Step 3: Structured JSON Output */}
              <div className="p-3 rounded-xl bg-brand-bg border border-brand-border/80 text-xs font-mono">
                <span className="text-brand-accent block text-[10px] mb-1">03. Deterministic JSON Response:</span>
                <pre className="text-slate-300 text-[11px] overflow-x-auto leading-relaxed">
                  <code>{samplePromptPlayground.structuredOutput}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
