import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  PenTool, 
  Code, 
  Film, 
  Rocket, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { workflowStages, WorkflowStage } from '../data/generalData';

export const CreativeWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const iconsMap: Record<string, React.ElementType> = {
    Search,
    Compass,
    PenTool,
    Code,
    Film,
    Rocket
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Execution Lifecycle
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            FROM IDEA TO EXECUTION.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            A disciplined 6-stage engineering and creative pipeline that ensures precision, reliability, and emotional resonance.
          </p>
        </div>

        {/* 6 Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowStages.map((stage, idx) => {
            const IconComponent = iconsMap[stage.iconName] || Sparkles;
            const isHovered = activeStep === idx;
            return (
              <div
                key={stage.step}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden group ${
                  isHovered
                    ? 'bg-brand-surface border-brand-accent shadow-cyan-soft -translate-y-1'
                    : 'bg-brand-surface/60 border-brand-border'
                }`}
              >
                {/* Background Step Number Watermark */}
                <span className="absolute -right-2 -bottom-4 text-7xl font-display font-black text-white/5 pointer-events-none select-none">
                  {stage.step}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-accent group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-brand-accent px-2.5 py-1 rounded-md bg-brand-card border border-brand-border">
                      STAGE {stage.step}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {stage.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-dim mb-3">
                    {stage.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-border/40 flex items-center justify-between text-xs font-mono text-brand-accent">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Rigorous Review</span>
                  </span>
                  <span>0{idx + 1} of 06</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
