import React from 'react';
import { Camera, Headphones, Laptop, Gamepad2, Sparkles } from 'lucide-react';
import { personalInterests } from '../data/generalData';

export const BeyondTheScreen: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Camera,
    Headphones,
    Laptop,
    Gamepad2
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Passions & Personal Dimensions
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            BEYOND THE SCREEN.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            The artistic and personal curiosities that feed into my technical thinking and creative storytelling.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInterests.map((interest) => {
            const Icon = iconMap[interest.icon] || Sparkles;
            return (
              <div
                key={interest.title}
                className="p-6 rounded-2xl bg-brand-surface/60 border border-brand-border hover:border-brand-accent/40 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-card border border-brand-border text-brand-dim">
                      {interest.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {interest.title}
                  </h3>

                  <p className="text-xs text-brand-muted leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-brand-border/40 text-[11px] font-mono text-brand-dim">
                  Continuous Curiosity
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
