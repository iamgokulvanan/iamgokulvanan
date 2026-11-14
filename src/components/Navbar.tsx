import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Terminal, Sparkles, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // Scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Active section calculation
      const sections = ['home', 'about', 'pillars', 'tech', 'uiux', 'ai', 'studio', 'projects', 'certificates', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: '5 Pillars', href: '#pillars', id: 'pillars' },
    { label: 'Technology', href: '#tech', id: 'tech' },
    { label: 'UI/UX', href: '#uiux', id: 'uiux' },
    { label: 'AI Lab', href: '#ai', id: 'ai' },
    { label: 'Studio', href: '#studio', id: 'studio' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certificates', href: '#certificates', id: 'certificates' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-brand-accent via-indigo-400 to-cyan-300 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-bg/85 backdrop-blur-md border-b border-brand-border/70 py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="IAMGOKULVANAN Home"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-center font-display font-extrabold text-brand-accent tracking-tighter group-hover:border-brand-accent/60 group-hover:shadow-cyan-soft transition-all">
              GV
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-wider text-white group-hover:text-brand-accent transition-colors">
                IAMGOKULVANAN
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-dim">
                Tech Meets Creativity
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-brand-surface/70 border border-brand-border/80 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-brand-card shadow-sm border border-brand-border'
                      : 'text-brand-muted hover:text-white hover:bg-brand-card/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-brand-accent rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-brand-muted hover:text-brand-accent bg-brand-surface/70 border border-brand-border hover:border-brand-accent/40 transition-all"
                title="Open Interactive Terminal"
              >
                <Terminal className="w-3.5 h-3.5 text-brand-accent" />
                <span className="hidden md:inline">CLI</span>
              </button>
            )}

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-brand-bg bg-brand-accent hover:bg-sky-300 transition-all shadow-cyan-soft hover:shadow-cyan-glow"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="p-2 rounded-lg bg-brand-surface border border-brand-border text-brand-accent"
                aria-label="Open Terminal"
              >
                <Terminal className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-brand-surface border border-brand-border text-brand-muted hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-brand-bg/95 backdrop-blur-xl sm:hidden pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto">
          <div className="flex flex-col gap-2">
            <p className="text-[11px] uppercase font-mono tracking-widest text-brand-dim mb-2">
              Navigation Menu
            </p>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2.5 px-4 rounded-xl text-base font-medium flex items-center justify-between border ${
                  activeSection === link.id
                    ? 'bg-brand-card text-brand-accent border-brand-accent/40'
                    : 'text-brand-text/90 border-transparent hover:bg-brand-surface'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-brand-dim font-mono">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-brand-border/80 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-brand-accent text-brand-bg font-semibold text-sm shadow-cyan-soft"
            >
              Get in Touch
            </a>
            <p className="text-center text-xs text-brand-dim">
              IAMGOKULVANAN © 2026 · Tech Meets Creativity
            </p>
          </div>
        </div>
      )}
    </>
  );
};
