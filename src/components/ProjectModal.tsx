import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="project-modal-container"
        className="bg-[#09090b] border border-zinc-800 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#09090b]/95 backdrop-blur-md border-b border-zinc-800 px-6 py-4 flex items-center justify-between z-20">
          <div>
            <h3 className="text-lg font-bold text-zinc-100">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-zinc-400">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded bg-zinc-900/50 border border-zinc-800/80 space-y-1.5">
              <span className="text-xs font-mono text-red-400 font-semibold">Problem</span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded bg-zinc-900/50 border border-zinc-800/80 space-y-1.5">
              <span className="text-xs font-mono text-emerald-400 font-semibold">Solution</span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Architecture Pipeline
            </h4>
            <div className="p-4 rounded bg-zinc-900/40 border border-zinc-800/80 space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {project.architecture.steps.map((step, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-200">
                      {step.label}
                    </span>
                    {sIdx < project.architecture.steps.length - 1 && (
                      <span className="text-zinc-600">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                {project.architecture.summary}
              </p>
            </div>
          </div>

          {/* Key Implementation Points */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Technical Points
            </h4>
            <ul className="space-y-2 text-sm text-zinc-300 list-disc list-inside marker:text-zinc-600">
              {project.features.map((feat, fIdx) => (
                <li key={fIdx} className="leading-relaxed">
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Full Tech Stack */}
          <div className="space-y-2 pt-2 border-t border-zinc-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.allTech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
