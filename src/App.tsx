import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CinematicIntro } from './components/CinematicIntro';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ShowreelSection } from './components/ShowreelSection';
import { MinionVisualsSection } from './components/MinionVisualsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertificatesSection } from './components/EducationCertificatesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export function App() {
  const [showIntro, setShowIntro] = useState(() => {
    // If user already saw it in this tab session, skip directly
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('intro_seen') !== 'true';
    }
    return true;
  });

  const [terminalOpen, setTerminalOpen] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    try {
      sessionStorage.setItem('intro_seen', 'true');
    } catch {
      // ignore in restricted env
    }
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent/25 selection:text-white font-sans">
      {/* Cinematic Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <CinematicIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Custom desktop cursor */}
      <CustomCursor />

      {/* Ambient background particles */}
      <ParticleBackground />

      {/* Global Navigation */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main page content — always rendered & pre-hydrated */}
      <main className="relative z-10">
        {/* 1. Hero with interactive 3D WebGL sculpture */}
        <Hero />

        {/* 2. About section */}
        <AboutSection />

        {/* 3. Expertise — Four Creative Worlds */}
        <ExpertiseSection />

        {/* 4. Selected Projects Showcase */}
        <ProjectsSection />

        {/* 5. Cinematic Showreel & Color Grading */}
        <ShowreelSection />

        {/* 6. Minion Visuals Creative Studio */}
        <MinionVisualsSection />

        {/* 7. Skills & Tools */}
        <SkillsSection />

        {/* 8. Education & Certificates */}
        <EducationCertificatesSection />

        {/* 9. Contact */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive CLI Terminal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
