import React, { useState } from 'react';
import { 
  Palette, 
  Smartphone, 
  Monitor, 
  Layers, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Figma,
  Sparkles,
  MousePointerClick
} from 'lucide-react';

export const UiUxSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const designDisciplines = [
    { title: 'User Interface (UI) Design', desc: 'Visual clarity, consistent spacing tokens & balanced contrast.' },
    { title: 'User Experience (UX) Design', desc: 'Frictionless flows, reduced cognitive load & user empathy.' },
    { title: 'Wireframing & Prototyping', desc: 'Low to high-fidelity clickable prototypes mapped in Figma.' },
    { title: 'Design Systems & Tokens', desc: 'Reusable components, typography scales & atomic design rules.' },
    { title: 'Responsive & Mobile First', desc: 'Ergonomic touch targets & adaptive layouts across any viewport.' },
    { title: 'Dashboard & Data UI', desc: 'High-density information hierarchy & actionable visual summaries.' },
  ];

  const caseStudySteps = [
    {
      step: '01',
      title: 'Problem & Discovery',
      detail: 'Identify user pain points, audit competing solutions, and establish functional constraints and behavioral goals.'
    },
    {
      step: '02',
      title: 'Information Architecture',
      detail: 'Define sitemaps, key task user journeys, and structural hierarchy before placing a single visual element.'
    },
    {
      step: '03',
      title: 'Wireframes & Low-Fi',
      detail: 'Iterate rapidly on layout compositions and content flow to validate ergonomic thumb reach and navigation.'
    },
    {
      step: '04',
      title: 'Design System & Tokens',
      detail: 'Standardize typography scale (Outfit/Inter), color palette (#08090C dark + #38BDF8 accent), and atomic components.'
    },
    {
      step: '05',
      title: 'High-Fidelity Interface',
      detail: 'Polish micro-interactions, subtle glassmorphism, responsive states, and design-to-code handoff specifications.'
    }
  ];

  return (
    <section id="uiux" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Product & Interface Design
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            DESIGNING BETTER EXPERIENCES.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            Harmonizing visual restraint, ergonomics, and aesthetic intentionality to create digital products people love to use.
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {designDisciplines.map((d, i) => (
            <div
              key={d.title}
              className="p-6 rounded-2xl bg-brand-surface/70 border border-brand-border hover:border-brand-accent/40 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-accent text-xs font-mono font-bold">
                    0{i + 1}
                  </div>
                  <Sparkles className="w-3.5 h-3.5 text-brand-dim" />
                </div>
                <h4 className="text-base font-bold text-white mb-2">{d.title}</h4>
                <p className="text-xs text-brand-muted leading-relaxed">{d.desc}</p>
              </div>

              <div className="pt-4 mt-3 border-t border-brand-border/40 flex items-center gap-1.5 text-[11px] font-mono text-brand-accent">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Case Study Journey Framework */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-surface/90 border border-brand-border shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Interactive Step Switcher */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-card border border-brand-border w-fit text-xs font-mono text-brand-accent">
                <Palette className="w-3.5 h-3.5" />
                <span>My Product Design Framework</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                From Wireframe to Production Reality
              </h3>

              <p className="text-sm text-brand-muted leading-relaxed">
                Design is not just how it looks—it is how it functions under real user pressure. I approach every interface with a structured 5-stage UX strategy:
              </p>

              {/* Step Buttons */}
              <div className="space-y-2">
                {caseStudySteps.map((step, idx) => (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 ${
                      activeStep === idx
                        ? 'bg-brand-card border-brand-accent shadow-cyan-soft text-white'
                        : 'bg-brand-surface/40 border-brand-border hover:bg-brand-card/60 text-brand-muted'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-brand-accent mt-0.5">
                      {step.step}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold">{step.title}</h4>
                      <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Interactive UI Device Mockup & System Spec */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-brand-card border border-brand-border flex flex-col gap-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-brand-border pb-4">
                <div className="flex items-center gap-2">
                  <Figma className="w-5 h-5 text-purple-400" />
                  <span className="text-xs font-mono font-bold text-white">Design System Blueprint</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-emerald-400">
                  Figma Master Library
                </span>
              </div>

              {/* Mockup Preview Visual */}
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border/80 flex flex-col gap-3 font-mono text-xs">
                <div className="flex items-center justify-between text-brand-dim text-[11px] pb-2 border-b border-brand-border/50">
                  <span>Tokens: Dark Mode Cinematic</span>
                  <span>Contrast Ratio: 14.8:1 (AAA)</span>
                </div>

                <div className="grid grid-cols-3 gap-2 py-2">
                  <div className="p-2.5 rounded-lg bg-[#08090C] border border-[#1E2330] text-center">
                    <span className="text-[10px] text-brand-dim block">Deep Black</span>
                    <span className="text-[10px] text-white font-bold">#08090C</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#111318] border border-[#1E2330] text-center">
                    <span className="text-[10px] text-brand-dim block">Charcoal</span>
                    <span className="text-[10px] text-white font-bold">#111318</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#38BDF8] text-brand-bg text-center">
                    <span className="text-[10px] font-bold block">Sky Blue</span>
                    <span className="text-[10px] font-extrabold">#38BDF8</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-brand-accent" />
                    <span className="text-xs text-white">Mobile Touch Ergonomics</span>
                  </div>
                  <span className="text-[10px] text-brand-dim font-mono">48px Touch Targets</span>
                </div>

                <div className="p-3 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-brand-accent" />
                    <span className="text-xs text-white">Fluid Grid Breakpoints</span>
                  </div>
                  <span className="text-[10px] text-brand-dim font-mono">Mobile / Tablet / 4K</span>
                </div>
              </div>

              <div className="text-xs text-brand-muted leading-relaxed">
                <p>
                  "Every design choice serves clarity. By eliminating decorative fluff and anchoring interfaces around typography hierarchy and subtle lighting, users accomplish tasks effortlessly."
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
