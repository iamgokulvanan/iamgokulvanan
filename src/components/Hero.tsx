import React, { useState, useEffect } from 'react';
import { 
  ArrowDown, 
  ExternalLink, 
  Download, 
  Sparkles, 
  Code2, 
  Palette, 
  Cpu, 
  Film, 
  Layers, 
  Github, 
  Linkedin, 
  Instagram, 
  MessageSquare,
  ShieldCheck,
  Award
} from 'lucide-react';
import { contactDetails } from '../data/generalData';

export const Hero: React.FC = () => {
  const roles = [
    'BUILDING DIGITAL EXPERIENCES.',
    'DESIGNING CREATIVE INTERFACES.',
    'EXPLORING ARTIFICIAL INTELLIGENCE.',
    'CREATING CINEMATIC VISUAL STORIES.',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headlines & Brand Presentation */}
        <div className="lg:col-span-7 flex flex-col gap-6 z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-border text-xs w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-brand-muted font-mono">Available for Opportunities & Creative Collabs</span>
          </div>

          {/* Brand Tagline */}
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-brand-accent uppercase font-semibold">
              TECH MEETS CREATIVITY
            </span>
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              IAMGOKULVANAN
            </h1>
            <p className="text-xl sm:text-2xl font-light text-slate-300 tracking-wide mt-1">
              "Where Technology Meets Creativity."
            </p>
          </div>

          {/* Dynamic Role Carousel */}
          <div className="h-9 sm:h-11 flex items-center">
            <div className="px-3.5 py-1.5 rounded-lg bg-brand-card/90 border border-brand-border/90 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
              <p className="text-xs sm:text-sm font-mono font-bold tracking-wider text-brand-accent transition-all duration-300">
                {roles[currentRoleIndex]}
              </p>
            </div>
          </div>

          {/* Core Description */}
          <p className="text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed">
            I explore technology, design digital experiences and transform creative ideas into meaningful visual stories. A multidisciplinary technologist navigating Full-Stack Web Development, UI/UX Architecture, AI Workflows, and Cinematic Video Production.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-sky-300 text-brand-bg font-semibold text-sm transition-all shadow-cyan-soft hover:shadow-cyan-glow flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#resume"
              className="px-6 py-3.5 rounded-xl bg-brand-surface hover:bg-brand-card border border-brand-border hover:border-brand-accent/40 text-brand-text font-medium text-sm transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-brand-accent" />
              <span>Resume Center</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-brand-surface/60 border border-transparent hover:border-brand-border text-brand-muted hover:text-white font-medium text-sm transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Verified Quick Social Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-brand-border/60">
            <span className="text-xs font-mono text-brand-dim uppercase tracking-wider mr-2">
              Profiles:
            </span>
            <a
              href={contactDetails.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 text-brand-muted hover:text-brand-accent transition-all"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={contactDetails.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 text-brand-muted hover:text-brand-accent transition-all"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={contactDetails.instagramPersonal}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 text-brand-muted hover:text-brand-accent transition-all"
              aria-label="Instagram"
              title="Personal Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={contactDetails.instagramStudio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 text-brand-muted hover:text-brand-accent transition-all"
              aria-label="Minion Visuals Studio"
              title="Minion Visuals Studio"
            >
              <Film className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href={contactDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-accent/50 text-brand-muted hover:text-brand-accent transition-all"
              aria-label="WhatsApp"
              title="WhatsApp Contact"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Authentic Portrait with Floating Discipline Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Subtle Ambient Glow Behind Photo */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-accent/15 blur-3xl pointer-events-none" />

          {/* Portrait Container */}
          <div className="relative w-64 sm:w-80 aspect-square rounded-3xl p-1.5 bg-gradient-to-br from-brand-accent/40 via-brand-border to-brand-surface border border-brand-border shadow-2xl">
            <div className="w-full h-full rounded-[22px] overflow-hidden bg-brand-card relative">
              <img
                src="/assets/profile.jpg"
                alt="Gokul Vanan - IAMGOKULVANAN"
                className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[0.98]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-transparent to-transparent opacity-60" />
              
              {/* Bottom Card Label */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-brand-surface/90 backdrop-blur-md border border-brand-border/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">Gokul Vanan</h4>
                  <p className="text-[10px] font-mono text-brand-muted">B.Tech IT · HICET '28</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-brand-accent font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>

            {/* Floating Discipline Orbit Badges */}
            <div className="absolute -top-4 -left-6 px-3.5 py-2 rounded-xl bg-brand-surface/90 backdrop-blur-md border border-brand-border shadow-lg flex items-center gap-2 animate-float">
              <Code2 className="w-4 h-4 text-brand-accent" />
              <span className="text-xs font-semibold text-white">Full-Stack Tech</span>
            </div>

            <div className="absolute top-1/3 -right-8 px-3.5 py-2 rounded-xl bg-brand-surface/90 backdrop-blur-md border border-brand-border shadow-lg flex items-center gap-2 animate-float [animation-delay:1.5s]">
              <Film className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-semibold text-white">Cinematic Video</span>
            </div>

            <div className="absolute -bottom-5 -left-4 px-3.5 py-2 rounded-xl bg-brand-surface/90 backdrop-blur-md border border-brand-border shadow-lg flex items-center gap-2 animate-float [animation-delay:3s]">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-semibold text-white">AI & RAG Apps</span>
            </div>
          </div>
        </div>

      </div>

      {/* Verified Verified Stats Banner */}
      <div className="max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-brand-border/60 grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">16</span>
          <span className="text-xs text-brand-muted font-medium mt-0.5">Verified Certifications</span>
          <span className="text-[10px] text-brand-dim font-mono">IIT / MongoDB / Infosys</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-brand-accent">5</span>
          <span className="text-xs text-brand-muted font-medium mt-0.5">Creative Disciplines</span>
          <span className="text-[10px] text-brand-dim font-mono">Tech, UI/UX, AI, Video, Design</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">2024–28</span>
          <span className="text-xs text-brand-muted font-medium mt-0.5">B.Tech IT Candidate</span>
          <span className="text-[10px] text-brand-dim font-mono">HICET Coimbatore</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">100%</span>
          <span className="text-xs text-brand-muted font-medium mt-0.5">Hands-On Curiosity</span>
          <span className="text-[10px] text-brand-dim font-mono">Continuous Innovation</span>
        </div>
      </div>
    </section>
  );
};
