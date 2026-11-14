import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FiveIdentities } from './components/FiveIdentities';
import { AboutSection } from './components/AboutSection';
import { TechnologySection } from './components/TechnologySection';
import { UiUxSection } from './components/UiUxSection';
import { AiInnovationLab } from './components/AiInnovationLab';
import { CinematicStudio } from './components/CinematicStudio';
import { GraphicDesignGallery } from './components/GraphicDesignGallery';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationJourney } from './components/EducationJourney';
import { CertificatesSection } from './components/CertificatesSection';
import { CreativeWorkflow } from './components/CreativeWorkflow';
import { ServicesSection } from './components/ServicesSection';
import { BeyondTheScreen } from './components/BeyondTheScreen';
import { ResumeCenter } from './components/ResumeCenter';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text selection:bg-brand-accent/25 selection:text-white font-sans">
      {/* Cinematic Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Particle Grid & Sky-Blue Ambient Lighting */}
      <ParticleBackground />

      {/* Global Navigation Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Immersive Hero Section */}
        <Hero />

        {/* 2. The Five Pillars: Multidisciplinary Identities */}
        <FiveIdentities />

        {/* 3. About Me: Story, Mindset & Philosophy */}
        <AboutSection />

        {/* 4. Technology & Development (Languages, Frontend, Backend, Databases, Tools) */}
        <TechnologySection onOpenTerminal={() => setTerminalOpen(true)} />

        {/* 5. UI/UX Product Design (Figma, Systems, Ergonomics, Case Study Framework) */}
        <UiUxSection />

        {/* 6. AI & Innovation Lab (Agents, RAG, Atlas Vector Search, Prompt Engineering) */}
        <AiInnovationLab />

        {/* 7. Cinematic Creative Studio (Minion Visuals, Showreel, Before/After Grading Slider) */}
        <CinematicStudio />

        {/* 8. Graphic Design & Visual Identities (Thumbnails, Posters, Branding) */}
        <GraphicDesignGallery />

        {/* 9. Selected Works & Projects Showcase with Deep Case Studies */}
        <ProjectsSection />

        {/* 10. Education & Continuous Academic Journey (B.Tech IT HICET) */}
        <EducationJourney />

        {/* 11. Verified Certificates & Credentials (16 Real Certificates with Lightbox) */}
        <CertificatesSection />

        {/* 12. Creative Workflow: 01 Discover to 06 Deliver */}
        <CreativeWorkflow />

        {/* 13. Services & Collaboration Opportunities */}
        <ServicesSection onSelectServiceForContact={handleSelectService} />

        {/* 14. Beyond The Screen (Personal Dimensions & Passions) */}
        <BeyondTheScreen />

        {/* 15. Resume & Credential Center */}
        <ResumeCenter />

        {/* 16. Contact & Direct Communication with Form & Feedback */}
        <ContactSection prefilledCategory={selectedServiceForContact} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Interactive Developer CLI Terminal Modal */}
      <InteractiveTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
