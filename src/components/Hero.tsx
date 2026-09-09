import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { downloadResumePdf } from "../utils/resumeDownload";
import { ArrowDown, Download, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenResume?: () => void;
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("projects");
    if (el) {
      const navOffset = 70;
      const pos = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  const quickFacts = [
    { label: "Academic Standing", value: "9.45 CGPA", sub: "Joy University" },
    {
      label: "Degree Program",
      value: "B.Tech CSE — AI & ML",
      sub: "2023 – 2027",
    },
    { label: "Current Role", value: "AI & ML Intern", sub: "Azentra Global" },
    {
      label: "Past Experience",
      value: "Junior Developer",
      sub: "Hyperready Technologies LLP",
    },
  ];

  return (
    <section
      id="hero"
      className="pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-zinc-800/60"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Main Hero Header */}
        <div className="max-w-3xl">
          <h1
            id="hero-name"
            className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100"
          >
            {PERSONAL_INFO.name}
          </h1>

          <p
            id="hero-title"
            className="text-lg sm:text-xl text-zinc-300 font-medium mt-3"
          >
            {PERSONAL_INFO.title}
          </p>

          <p
            id="hero-description"
            className="text-base sm:text-lg text-zinc-400 mt-5 leading-relaxed font-normal"
          >
            B.Tech CSE student specializing in Artificial Intelligence & Machine
            Learning, building full-stack applications and intelligent software
            using modern web and AI technologies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              id="hero-view-projects-btn"
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-zinc-100 text-zinc-900 font-medium text-sm hover:bg-white transition-colors cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <button
              id="hero-download-resume-btn"
              onClick={downloadResumePdf}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-800 text-zinc-200 font-medium text-sm hover:border-zinc-700 hover:text-white transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Small Text Links */}
          <div className="flex items-center gap-6 mt-8 text-sm text-zinc-400 font-normal">
            <a
              id="hero-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-100 transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <span className="text-zinc-700">•</span>

            <a
              id="hero-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-zinc-100 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            <span className="text-zinc-700">•</span>

            <a
              id="hero-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1 hover:text-zinc-100 transition-colors"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>

            {onOpenContact && (
              <>
                <span className="text-zinc-700">•</span>
                <button
                  id="hero-contact-btn"
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1 hover:text-zinc-100 transition-colors cursor-pointer"
                >
                  <span>Contact</span>
                  <ArrowDown className="w-3.5 h-3.5 text-zinc-500" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Quick Intro & Fact Blocks */}
        <div className="mt-20 pt-10 border-t border-zinc-900">
          <p className="text-sm font-medium text-zinc-400 mb-6">
            Currently building at the intersection of AI/ML and full-stack
            engineering.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="space-y-1">
                <span className="block text-xs text-zinc-500 font-mono">
                  {fact.label}
                </span>
                <p className="text-base font-semibold text-zinc-200">
                  {fact.value}
                </p>
                <span className="block text-xs text-zinc-400">{fact.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
