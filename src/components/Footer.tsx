import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Film, MessageSquare, Heart } from 'lucide-react';
import { contactDetails } from '../data/generalData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-brand-border/60 bg-brand-surface/40 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-brand-border/60">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center font-display font-extrabold text-brand-accent tracking-tighter">
                GV
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white tracking-wider">
                  IAMGOKULVANAN
                </h4>
                <p className="text-[10px] font-mono uppercase tracking-widest text-brand-dim">
                  Tech Meets Creativity
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-brand-muted max-w-sm leading-relaxed">
              Global personal brand platform of Gokul Vanan. Engineering digital systems, designing thoughtful interfaces, and producing cinematic visual stories.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={contactDetails.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border text-brand-muted hover:text-brand-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={contactDetails.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border text-brand-muted hover:text-brand-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={contactDetails.instagramPersonal}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border text-brand-muted hover:text-brand-accent transition-colors"
                aria-label="Personal Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={contactDetails.instagramStudio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-card border border-brand-border text-brand-muted hover:text-amber-400 transition-colors"
                aria-label="Minion Visuals Studio"
              >
                <Film className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold">
              Platform Architecture
            </span>
            <ul className="space-y-2 text-xs text-brand-muted">
              <li><a href="#about" className="hover:text-brand-accent transition-colors">01. About Gokul Vanan</a></li>
              <li><a href="#pillars" className="hover:text-brand-accent transition-colors">02. The 5 Core Pillars</a></li>
              <li><a href="#tech" className="hover:text-brand-accent transition-colors">03. Technology & Dev Stack</a></li>
              <li><a href="#uiux" className="hover:text-brand-accent transition-colors">04. UI/UX Product Design</a></li>
              <li><a href="#ai" className="hover:text-brand-accent transition-colors">05. AI & Innovation Lab</a></li>
              <li><a href="#studio" className="hover:text-brand-accent transition-colors">06. Cinematic Video Studio</a></li>
            </ul>
          </div>

          {/* Additional Links & Actions */}
          <div className="md:col-span-4 flex flex-col justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold block mb-3">
                Selected Works & Verification
              </span>
              <ul className="space-y-2 text-xs text-brand-muted">
                <li><a href="#projects" className="hover:text-brand-accent transition-colors">Projects & Case Studies</a></li>
                <li><a href="#certificates" className="hover:text-brand-accent transition-colors">16 Verified Certificates</a></li>
                <li><a href="#services" className="hover:text-brand-accent transition-colors">Services & Collaboration</a></li>
                <li><a href="#resume" className="hover:text-brand-accent transition-colors">Resume & Credential Summary</a></li>
              </ul>
            </div>

            <button
              onClick={scrollToTop}
              className="w-fit px-4 py-2 rounded-xl bg-brand-card border border-brand-border hover:border-brand-accent/50 text-xs font-mono text-brand-accent flex items-center gap-2 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top (Scroll)</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Authenticity Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-brand-dim gap-4">
          <p className="font-mono">
            © 2026 Gokul Vanan (IAMGOKULVANAN) · Coimbatore, Tamil Nadu, India.
          </p>
          <p className="flex items-center gap-1 font-mono text-[11px]">
            <span>Engineered with React 18, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
