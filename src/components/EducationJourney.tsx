import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { educationData } from '../data/generalData';

export const EducationJourney: React.FC = () => {
  const milestones = [
    {
      period: '2024 – 2028',
      title: 'B.Tech in Information Technology',
      organization: 'Hindusthan College of Engineering and Technology (HICET)',
      location: 'Coimbatore, Tamil Nadu, India',
      category: 'Academic Foundation',
      badge: 'Currently Pursuing',
      description: 'Strengthening core computer science pillars: data structures, object-oriented systems, database architecture, and network security while maintaining academic consistency.',
      skills: ['Algorithms', 'C & Java', 'Data Structures', 'Database Management', 'Computer Networks']
    },
    {
      period: 'Jan – Apr 2026',
      title: 'Cloud Computing (12-Week Elite Certification - 71%)',
      organization: 'NPTEL & IIT Kharagpur (Govt. of India)',
      location: 'Ministry of Education Initiative',
      category: 'Cloud Engineering',
      badge: 'Elite Grade',
      description: 'Completed rigorous 12-week curriculum validated by IIT Kharagpur professors. Achieved perfect 25/25 in all weekly assignments with deep mastery in virtualization, SLA metrics, and distributed systems.',
      skills: ['Virtualization', 'Distributed Systems', 'Cloud Security', 'Containerization', 'SLA Engineering']
    },
    {
      period: 'Nov 2025 – Jan 2026',
      title: 'Web Development Internship (2 Months)',
      organization: 'Learn Flu (AICTE & MSME Approved)',
      location: 'Remote Industry Experience',
      category: 'Professional Experience',
      badge: 'Internship Completed',
      description: 'Hands-on practical development of interactive client-side features, component architecture, state synchronization, and accessible responsive layouts.',
      skills: ['React', 'JavaScript ES6+', 'HTML5/CSS3', 'REST Integration', 'Team Collaboration']
    },
    {
      period: 'Jul 2026',
      title: 'MongoDB AI & Vector Search Specialization (5 Badges)',
      organization: 'MongoDB & Credly',
      location: 'Verified Digital Credentials',
      category: 'AI Specialization',
      badge: '5 Credly Badges',
      description: 'Earned verified badges in Building AI Agents, RAG Applications, Atlas Vector Search, Resilient AI Strategy, and Core MongoDB Document Modeling.',
      skills: ['AI Agents', 'Atlas Vector Search', 'RAG Pipelines', 'Document Modeling', 'kNN Similarity']
    },
    {
      period: 'Aug 2025 – Jun 2026',
      title: 'Infosys Springboard & TCS Professional Certifications',
      organization: 'Infosys Wingspan & TCS iON',
      location: 'Corporate Training Programs',
      category: 'Corporate Foundations',
      badge: 'Verified Certificates',
      description: 'Certified in Python Foundation, Python Concurrency (Multiprocessing), and TCS iON Email Etiquette & Professional Business Writing.',
      skills: ['Python OOP', 'Multiprocessing', 'Business Communication', 'Corporate Etiquette']
    }
  ];

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Academics & Continuous Growth
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            MY LEARNING JOURNEY.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            A continuous progression of academic rigor, industry internships, and verified credentials.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-accent via-indigo-500 to-brand-border -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12`}
                >
                  {/* Center Node Indicator */}
                  <div className="hidden sm:flex absolute left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-card border-2 border-brand-accent items-center justify-center z-10 shadow-cyan-soft">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-ping" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-32px)] p-6 sm:p-8 rounded-3xl bg-brand-surface/80 border border-brand-border hover:border-brand-accent/40 transition-all shadow-xl">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-brand-accent font-bold flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-brand-card border border-brand-border text-emerald-400">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>

                    <p className="text-xs font-mono text-brand-dim mb-3">
                      {item.organization} · {item.location}
                    </p>

                    <p className="text-xs text-brand-muted leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-border/50">
                      {item.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded bg-brand-card text-[10px] font-mono text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
