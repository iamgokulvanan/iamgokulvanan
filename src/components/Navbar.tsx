import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { gsap } from 'gsap';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SHOWREEL', href: '#showreel' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
];

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [progressWidth, setProgressWidth] = useState(0);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 60);
      setProgressWidth(docH > 0 ? (scrollY / docH) * 100 : 0);

      // Active section detection
      const sections = NAV_ITEMS.map((n) => n.href.replace('#', ''));
      let current = 'home';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) current = id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic logo effect
  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
      gsap.to(el, { x: dx, y: dy, duration: 0.4, ease: 'power2.out' });
    };
    const handleLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' });
    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[200] transition-all duration-100"
        style={{ width: `${progressWidth}%`, background: 'linear-gradient(90deg, #38BDF8, #818CF8)' }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-[#080A0F]/80 border-b border-white/5 shadow-lg shadow-black/50'
            : 'bg-transparent'
        }`}
        style={{ marginTop: '2px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              ref={logoRef}
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-2 group select-none"
              aria-label="IAMGOKULVANAN Home"
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-black text-sm text-brand-bg"
                style={{ background: 'linear-gradient(135deg, #38BDF8, #818CF8)' }}>
                GV
              </div>
              <span className="font-display font-bold text-sm tracking-widest text-white opacity-80 group-hover:opacity-100 transition-opacity hidden sm:block">
                IAMGOKULVANAN
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" role="navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className={`relative px-3 py-1.5 text-[11px] font-mono tracking-widest font-semibold transition-colors duration-200 ${
                      isActive ? 'text-sky-300' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-sky-400"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  title="Open Developer Terminal"
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/8 bg-white/5 text-slate-400 hover:text-sky-300 hover:border-sky-500/30 transition-all text-xs font-mono"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span className="hidden md:block">CLI</span>
                </button>
              )}

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="hidden sm:flex items-center px-4 py-1.5 rounded-lg text-xs font-mono font-semibold text-brand-bg transition-all"
                style={{ background: 'linear-gradient(135deg, #38BDF8, #818CF8)' }}
              >
                HIRE ME
              </a>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg border border-white/8 text-slate-400 hover:text-white transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden backdrop-blur-xl bg-[#080A0F]/95 border-t border-white/5"
            >
              <nav className="px-4 py-4 flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className={`px-4 py-3 rounded-lg text-sm font-mono tracking-widest transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-sky-300 bg-sky-500/10'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="pt-2 border-t border-white/5 mt-2">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                    className="block w-full text-center px-4 py-3 rounded-lg text-sm font-mono font-semibold text-brand-bg"
                    style={{ background: 'linear-gradient(135deg, #38BDF8, #818CF8)' }}
                  >
                    LET'S CONNECT
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
