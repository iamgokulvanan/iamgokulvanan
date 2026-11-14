import React from 'react';
import { 
  User, 
  Target, 
  Lightbulb, 
  Compass, 
  CheckCircle, 
  MapPin, 
  GraduationCap, 
  Sparkles,
  Award
} from 'lucide-react';
import { contactDetails } from '../data/generalData';

export const AboutSection: React.FC = () => {
  const cards = [
    {
      title: 'Personal Profile',
      icon: User,
      color: '#38BDF8',
      content: 'I am Gokul Vanan, based in Tamil Nadu, India. A persistent learner pursuing B.Tech in Information Technology with a strong appetite for engineering, multimedia production, and autonomous digital systems.'
    },
    {
      title: 'Professional Interests',
      icon: Target,
      color: '#818CF8',
      content: 'Spanning Full-Stack Web Development (React, Node.js, MongoDB), UI/UX wireframing & prototyping in Figma, AI Agent architectures, and high-retention video post-production.'
    },
    {
      title: 'Creative Mindset',
      icon: Lightbulb,
      color: '#F472B6',
      content: 'I believe code without design lacks emotion, and design without code remains static. Blending both with cinematic pacing creates memorable digital products that resonate.'
    },
    {
      title: 'Career Objective',
      icon: Compass,
      color: '#34D399',
      content: 'To build a successful career in the IT industry while continuously developing my technical, creative and problem-solving skills, contributing to impact-driven software and creative initiatives.'
    }
  ];

  const interestsList = [
    'Technology & Innovation',
    'Web Application Development',
    'Creative Problem-Solving',
    'UI/UX & Digital Product Design',
    'Video Editing & Filmmaking',
    'Artificial Intelligence & RAG',
    'Continuous Learning & Skill Mastery'
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Identity & Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GET TO KNOW ME.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            Curiosity-driven technologist building at the intersection of engineering logic and creative expression.
          </p>
        </div>

        {/* Top Story Block with Portrait */}
        <div className="p-8 sm:p-12 rounded-3xl bg-brand-surface/70 border border-brand-border shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Portrait Thumbnail */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-brand-border relative shadow-cyan-soft">
                <img
                  src="/assets/profile.jpg"
                  alt="Gokul Vanan portrait"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-lg bg-brand-surface/90 backdrop-blur-md border border-brand-border text-center">
                  <span className="text-[11px] font-mono font-semibold text-brand-accent">
                    Coimbatore, Tamil Nadu, India
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 text-xs font-mono text-brand-muted">
                <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                <span>HICET Coimbatore · B.Tech IT '28</span>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-8 flex flex-col gap-5">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                "Hello, I'm Gokul Vanan."
              </h3>
              
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                I'm passionate about technology, digital creativity and continuous learning. I enjoy exploring different areas of the digital world, from developing web applications and designing user interfaces to experimenting with AI tools and creating cinematic videos.
              </p>

              <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
                Whether structuring MongoDB Atlas vector search pipelines, polishing responsive React layouts, or dialing in the color grade of a timeline in DaVinci Resolve, I treat every project as an opportunity to build experiences that are both functionally robust and visually captivating.
              </p>

              {/* Interests Tags */}
              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-dim block mb-3">
                  Core Fields of Interest:
                </span>
                <div className="flex flex-wrap gap-2">
                  {interestsList.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 rounded-full bg-brand-card border border-brand-border text-xs font-medium text-brand-text flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3 h-3 text-brand-accent" />
                      <span>{interest}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => {
            const CardIcon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 sm:p-8 rounded-2xl bg-brand-surface/70 border border-brand-border hover:border-brand-accent/40 transition-all shadow-lg flex flex-col gap-4 group"
              >
                <div className="flex items-center justify-between">
                  <div 
                    className="p-3 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center group-hover:scale-105 transition-transform"
                    style={{ color: card.color }}
                  >
                    <CardIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-brand-dim">
                    IAMGOKULVANAN
                  </span>
                </div>

                <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                  {card.title}
                </h4>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {card.content}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
