import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="py-12 bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
        
        {/* Left: Name & Title */}
        <div className="text-center sm:text-left space-y-0.5">
          <p className="font-medium text-zinc-300">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-xs text-zinc-400">
            {PERSONAL_INFO.title}
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-5 text-xs text-zinc-400">
          <a
            id="footer-github"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <span className="text-zinc-700">•</span>
          <a
            id="footer-linkedin"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-zinc-700">•</span>
          <a
            id="footer-email"
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-zinc-200 transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs text-zinc-400 font-mono">
          &copy; 2026 {PERSONAL_INFO.name}
        </div>

      </div>
    </footer>
  );
};
