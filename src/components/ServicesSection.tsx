import React from 'react';
import { 
  Globe, 
  Layout, 
  Video, 
  Zap, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';
import { servicesData, Service } from '../data/generalData';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  const iconMap: Record<string, React.ElementType> = {
    Globe,
    Layout,
    Video,
    Zap,
    Cpu,
    Sparkles
  };

  const handleDiscuss = (serviceTitle: string) => {
    onSelectServiceForContact(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Collaboration & Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            LET'S CREATE SOMETHING MEANINGFUL.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            Available for software engineering contracts, interactive frontend builds, UI/UX design systems, and cinematic post-production.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <div
                key={service.id}
                className="p-8 rounded-3xl bg-brand-surface/70 border border-brand-border hover:border-brand-accent/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-accent group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-brand-card border border-brand-border text-brand-dim">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/40">
                  <button
                    onClick={() => handleDiscuss(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-card hover:bg-brand-accent hover:text-brand-bg border border-brand-border hover:border-brand-accent text-xs font-semibold text-white transition-all flex items-center justify-center gap-2"
                  >
                    <span>Discuss Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
