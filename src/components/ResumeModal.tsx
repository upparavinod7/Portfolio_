import React, { useEffect, useState } from "react";
import {
  PERSONAL_INFO,
  EXPERIENCES,
  EDUCATION_DATA,
  LEADERSHIP_DATA,
  MINIMAL_SKILLS,
  FLAGSHIP_PROJECTS,
} from "../data/portfolioData";
import { downloadResumeText, downloadResumePdf } from "../utils/resumeDownload";
import { X, Download, Printer, Copy, Check } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    const resumeEl = document.getElementById("ats-resume-printable");
    if (resumeEl) {
      navigator.clipboard.writeText(resumeEl.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fade-in"
    >
      <div
        id="resume-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0e0e11] border border-zinc-800 w-full max-w-4xl max-h-[90vh] rounded-lg flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Top Control Bar */}
        <div className="bg-[#09090b] border-b border-zinc-800 px-6 py-3.5 flex items-center justify-between shrink-0">
          <div>
            <span className="font-semibold text-sm text-zinc-100">
              Resume — {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-mono text-zinc-400 ml-2">
              ATS Standard Format
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              id="resume-modal-copy-btn"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>

            <button
              id="resume-modal-download-pdf-btn"
              onClick={downloadResumePdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-100 hover:bg-white text-zinc-900 font-semibold transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (PDF)</span>
            </button>

            <button
              id="resume-modal-download-btn"
              onClick={downloadResumeText}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.txt)</span>
            </button>

            <button
              id="resume-modal-print-btn"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable ATS Resume View */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0c0c0e] text-zinc-300 text-sm font-sans selection:bg-blue-600/30">
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6 text-center space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-medium text-zinc-400">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-zinc-400 font-mono pt-1">
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                GitHub
              </a>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold border-b border-zinc-800 pb-1">
              Education
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-zinc-200">
                  Joy University
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  2023 – 2027
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                B.Tech Computer Science and Engineering — Artificial
                Intelligence &amp; Machine Learning
              </p>
              <p className="text-xs font-mono text-emerald-400">
                Cumulative GPA: 9.45 / 10.0
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
              <div className="text-zinc-400">
                <span className="text-zinc-300 font-medium">
                  Narayana Junior College:
                </span>{" "}
                Intermediate (MPC) • 96.1%
              </div>
              <div className="text-zinc-400">
                <span className="text-zinc-300 font-medium">
                  Narayana School:
                </span>{" "}
                SSC • GPA: 10 / 10
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold border-b border-zinc-800 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              {MINIMAL_SKILLS.map((grp) => (
                <div
                  key={grp.category}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-1"
                >
                  <span className="sm:col-span-3 font-mono font-medium text-zinc-400">
                    {grp.category}:
                  </span>
                  <span className="sm:col-span-9 text-zinc-300">
                    {grp.skills.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold border-b border-zinc-800 pb-1">
              Work Experience
            </h2>
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-zinc-200">
                    {exp.company} —{" "}
                    <span className="text-blue-400 font-normal">
                      {exp.role}
                    </span>
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-zinc-400">
                  {exp.highlights.map((hl, hIdx) => (
                    <li key={hIdx}>{hl}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold border-b border-zinc-800 pb-1">
              Selected Projects
            </h2>
            {FLAGSHIP_PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-semibold text-zinc-200">
                    {proj.title}{" "}
                    <span className="text-xs font-mono text-zinc-400 font-normal">
                      ({proj.primaryTech.join(", ")})
                    </span>
                  </span>
                </div>
                <p className="text-xs text-zinc-400">{proj.tagline}</p>
                <ul className="list-disc list-inside text-xs text-zinc-400 space-y-0.5">
                  {proj.features.slice(0, 2).map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold border-b border-zinc-800 pb-1">
              Leadership Experience
            </h2>
            <div className="text-xs text-zinc-400 space-y-1">
              <div className="flex justify-between items-baseline">
                <span className="font-semibold text-zinc-200">
                  Vice Chairperson —{" "}
                  <span className="text-blue-400 font-normal">
                    ACM Student Chapter, Joy University
                  </span>
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  April 2025 – May 2026
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-zinc-400">
                <li>
                  Organized and coordinated Ideathons, Hackathons, Technical
                  Quizzes, Coding Events, and technical programs in
                  collaboration with student teams and faculty.
                </li>
                <li>
                  Managed participant coordination, registrations, event
                  logistics, and on-ground execution while leading student
                  engagement in technical activities.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
