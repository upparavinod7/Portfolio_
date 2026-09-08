import React from 'react';
import { MINIMAL_SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Section Heading */}
          <div className="md:col-span-4">
            <h2
              id="skills-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100"
            >
              Skills
            </h2>
            <p className="text-sm text-zinc-500 mt-2 font-mono">
              Core technologies &amp; engineering tooling
            </p>
          </div>

          {/* Clean Text-Based Categorized Skills */}
          <div className="md:col-span-8 space-y-8">
            {MINIMAL_SKILLS.map((group) => (
              <div key={group.category} id={`skills-group-${group.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                <h3 className="text-sm font-semibold text-zinc-200 mb-3 font-mono">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                    >
                      {skill}
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
