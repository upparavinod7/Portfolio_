import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Section Heading */}
          <div className="md:col-span-4">
            <h2
              id="experience-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100"
            >
              Experience
            </h2>
            <p className="text-sm text-zinc-500 mt-2 font-mono">
              Professional history &amp; internships
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="md:col-span-8 space-y-12 relative before:absolute before:inset-0 before:left-2.5 before:w-px before:bg-zinc-800">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} id={`experience-item-${idx}`} className="relative pl-8 space-y-3">
                {/* Timeline Dot */}
                <span className="absolute left-1.5 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-zinc-900 border-2 border-blue-500 ring-4 ring-[#09090b]" />

                {/* Role, Company, Period */}
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-blue-400 font-medium mt-0.5">
                    {exp.role}
                  </p>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Key Bullet Points */}
                <ul className="space-y-1.5 text-sm text-zinc-300 font-normal list-disc list-inside marker:text-zinc-600">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
