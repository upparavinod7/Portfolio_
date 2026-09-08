import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectCatalog } from './components/ProjectCatalog';
import { SkillsSection } from './components/SkillsSection';
import { EducationLeadership } from './components/EducationLeadership';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 antialiased selection:bg-zinc-800 selection:text-zinc-100">
      {/* 1. Minimal Sticky Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Structure */}
      <main id="main-content">
        {/* 2. Hero & Quick Intro Facts */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
        />

        {/* 3. About Me */}
        <AboutSection />

        {/* 4. Experience Timeline */}
        <ExperienceSection />

        {/* 5. Selected Projects (Large Alternating Layout) */}
        <FeaturedProjects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 6. More Projects (Compact Rows List) */}
        <ProjectCatalog />

        {/* 7. Skills (Clean Text-Based Grouping) */}
        <SkillsSection />

        {/* 8. Education & Leadership */}
        <EducationLeadership />

        {/* 9. Resume CTA & Download */}
        <ResumeSection
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 10. Contact */}
        <ContactSection />
      </main>

      {/* 11. Minimal Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
