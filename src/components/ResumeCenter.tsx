import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Code2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { contactDetails } from '../data/generalData';

export const ResumeCenter: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38BDF8', '#818CF8', '#34D399']
    });
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);

    // Open/download certificate/resume or prompt email
    window.open('mailto:iamgokulvanan@gmail.com?subject=Resume%20Request%20-%20IAMGOKULVANAN', '_blank');
  };

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border mb-3">
            Credentials & Portfolio Summary
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            RESUME & CREDENTIAL CENTER.
          </h2>
          <p className="text-base text-brand-muted max-w-2xl mt-4">
            A comprehensive overview of academic milestones, verified skills, and technical achievements.
          </p>
        </div>

        {/* Resume Preview Sheet Container */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-brand-surface/90 border border-brand-border shadow-2xl relative overflow-hidden">
          
          {/* Ambient lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-accent/10 blur-[100px] pointer-events-none" />

          {/* Header of Resume Card */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-brand-border/80 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                Curriculum Vitae
              </span>
              <h3 className="font-display text-3xl font-extrabold text-white mt-1">
                GOKUL VANAN
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted font-mono mt-1">
                Technology Enthusiast · Full-Stack Developer · UI/UX Designer · AI Explorer
              </p>
              <p className="text-xs text-brand-dim font-mono mt-0.5">
                Coimbatore, Tamil Nadu, India · {contactDetails.email}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownload}
                className="px-5 py-3 rounded-xl bg-brand-accent hover:bg-sky-300 text-brand-bg font-semibold text-xs transition-all shadow-cyan-soft hover:shadow-cyan-glow flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>{downloadSuccess ? 'Requested via Email!' : 'Request Official Resume (PDF)'}</span>
              </button>

              <a
                href="#certificates"
                className="px-4 py-3 rounded-xl bg-brand-card hover:bg-brand-surface border border-brand-border text-white text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <Award className="w-4 h-4 text-brand-accent" />
                <span>16 Verified Badges</span>
              </a>
            </div>
          </div>

          {/* Resume Summary Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-brand-border/80">
            
            {/* 1. Education Summary */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-accent font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>
              <h4 className="text-sm font-bold text-white">B.Tech Information Technology</h4>
              <p className="text-xs text-brand-muted">Hindusthan College of Engineering and Technology, Coimbatore</p>
              <p className="text-[11px] font-mono text-brand-dim">2024 – 2028 · Currently Pursuing</p>
            </div>

            {/* 2. Top Skills Summary */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-accent font-bold">
                <Code2 className="w-4 h-4" />
                <span>CORE STACK</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['React', 'TypeScript', 'Node.js', 'MongoDB Atlas', 'Python', 'Tailwind CSS', 'Figma', 'DaVinci Resolve'].map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md bg-brand-card text-[11px] font-mono text-slate-200 border border-brand-border">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* 3. Key Credentials */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-accent font-bold">
                <Award className="w-4 h-4" />
                <span>KEY CREDENTIALS</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>NPTEL Cloud Computing (Elite 71% - IIT KGP)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>5 MongoDB AI, RAG & Vector Search Badges</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Learn Flu Web Dev Internship (AICTE Approved)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Infosys Python Foundation & Concurrency</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Footer note */}
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-brand-muted gap-4">
            <p className="font-mono">
              Verified portfolio documentation updated for November 2026.
            </p>
            <a
              href="mailto:iamgokulvanan@gmail.com"
              className="text-brand-accent hover:underline font-mono"
            >
              iamgokulvanan@gmail.com
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
