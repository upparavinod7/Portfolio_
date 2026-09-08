import React, { useState } from 'react';
import { OTHER_PROJECTS_LIST } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const ProjectCatalog: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'AI / ML', 'Full Stack', 'Computer Vision'];

  const filteredProjects = OTHER_PROJECTS_LIST.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI / ML') return project.category === 'AI / ML';
    if (activeFilter === 'Full Stack') return project.category === 'Full Stack';
    if (activeFilter === 'Computer Vision') return project.tech.some(t => t.toLowerCase().includes('vision') || t.toLowerCase().includes('opencv'));
    return true;
  });

  return (
    <section id="more-projects" className="py-20 border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header & Minimal Filter */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2
              id="more-projects-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100"
            >
              More Projects
            </h2>
            <p className="text-sm text-zinc-500 mt-1 font-mono">
              Secondary applications, machine learning tools &amp; web platforms
            </p>
          </div>

          {/* Simple Minimal Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                id={`filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-zinc-100 text-zinc-900 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/60 border border-zinc-800/60'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Rows List */}
        <div className="divide-y divide-zinc-800/60 border-y border-zinc-800/60">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`more-project-${project.id}`}
              className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-zinc-900/30 px-3 -mx-3 rounded transition-colors"
            >
              {/* Project Details */}
              <div className="space-y-1 md:max-w-2xl">
                <div className="flex items-center gap-3">
                  <h3 className="text-base font-semibold text-zinc-200">
                    {project.name}
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack & Link */}
              <div className="flex flex-wrap md:flex-nowrap items-center gap-4 justify-between md:justify-end shrink-0">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  id={`more-project-link-${project.id}`}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors shrink-0"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
