import React from 'react';
import { Github, Linkedin, Instagram, Film, ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { contactDetails } from '../data/generalData';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Showreel', href: '#showreel' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-sky-500/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-black text-sm text-brand-bg"
                style={{ background: 'linear-gradient(135deg, #38BDF8, #818CF8)' }}>
                GV
              </div>
              <div>
                <p className="font-display font-black text-white tracking-wider text-sm">IAMGOKULVANAN</p>
                <p className="text-xs font-mono text-sky-400/60">Technology × Creativity × Cinema</p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Building digital experiences through technology, design, and cinematic storytelling.
            </p>
            <a href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-1.5 text-xs font-mono text-sky-400/60 hover:text-sky-300 transition-colors mt-3">
              <Mail className="w-3 h-3" />
              {contactDetails.email}
            </a>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-4">Navigation</p>
            <div className="grid grid-cols-2 gap-1.5">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href}
                  onClick={(e) => { e.preventDefault(); document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-sm text-slate-500 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Studio & socials */}
          <div>
            <p className="text-xs font-mono text-slate-500 tracking-widest uppercase mb-4">Connect</p>
            <div className="space-y-3">
              <a href={contactDetails.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-white transition-colors">
                <Github className="w-4 h-4" /> github.com/iamgokulvanan
              </a>
              <a href={contactDetails.linkedinUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-sky-300 transition-colors">
                <Linkedin className="w-4 h-4" /> linkedin.com/in/iamgokulvanan
              </a>
              <a href={contactDetails.instagramPersonal} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-pink-300 transition-colors">
                <Instagram className="w-4 h-4" /> @iamgokulvanan
              </a>
              <a href={contactDetails.instagramStudio} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-orange-300 transition-colors">
                <Film className="w-4 h-4" /> @minion.visuals
              </a>
              <a href={contactDetails.freelancerUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-emerald-300 transition-colors">
                <ExternalLink className="w-4 h-4" /> freelancer.in/u/iamgokulvanan
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-slate-600">
            © {new Date().getFullYear()} IAMGOKULVANAN — Gokul Vanan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-700">B.Tech IT · HICET 2024–28 · Tamil Nadu, India</span>
            <button onClick={scrollToTop}
              className="p-2 rounded-xl border border-white/8 text-slate-500 hover:text-white hover:border-white/20 transition-all"
              aria-label="Back to top">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
