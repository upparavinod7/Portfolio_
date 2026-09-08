import React from 'react';
import { Eye, Download } from 'lucide-react';
import { downloadResumeText } from '../utils/resumeDownload';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column */}
          <div className="md:col-span-8 space-y-3">
            <h2
              id="resume-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100"
            >
              Resume
            </h2>
            <p className="text-base text-zinc-400 font-normal leading-relaxed">
              View my complete experience, education and technical background formatted for engineering teams and recruiters.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
            <button
              id="resume-view-btn"
              onClick={onOpenResume}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-zinc-100 text-zinc-900 font-medium text-sm hover:bg-white transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>View Resume</span>
            </button>

            <button
              id="resume-download-btn"
              onClick={downloadResumeText}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md border border-zinc-800 text-zinc-200 font-medium text-sm hover:border-zinc-700 hover:text-white transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4 text-zinc-400" />
              <span>Download Resume</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
