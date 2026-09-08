import React from 'react';

export const EducationLeadership: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Section Heading */}
          <div className="md:col-span-4">
            <h2
              id="education-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100"
            >
              Education &amp; Leadership
            </h2>
            <p className="text-sm text-zinc-500 mt-2 font-mono">
              Academic credentials &amp; community roles
            </p>
          </div>

          {/* Education & Leadership Details */}
          <div className="md:col-span-8 space-y-10">
            
            {/* Joy University Primary Card */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-zinc-100">
                  Joy University
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  2023 – 2027
                </span>
              </div>
              <p className="text-sm text-blue-400 font-medium">
                B.Tech in Computer Science and Engineering — Artificial Intelligence &amp; Machine Learning
              </p>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <span className="font-mono text-zinc-400">Cumulative GPA:</span>
                <span className="font-semibold text-emerald-400 font-mono">9.45 / 10</span>
              </div>
            </div>

            {/* Previous Education in Smaller Format */}
            <div className="pt-4 border-t border-zinc-900 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                Previous Education
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="p-3 rounded bg-zinc-900/40 border border-zinc-800/80 space-y-0.5">
                  <p className="font-medium text-zinc-200">Narayana Junior College</p>
                  <p className="text-xs text-zinc-400">Intermediate (MPC) • 2021 – 2023</p>
                  <p className="text-xs font-mono text-emerald-400 font-medium pt-1">Score: 96.1%</p>
                </div>
                <div className="p-3 rounded bg-zinc-900/40 border border-zinc-800/80 space-y-0.5">
                  <p className="font-medium text-zinc-200">Narayana School</p>
                  <p className="text-xs text-zinc-400">Secondary School Certificate (SSC) • 2021</p>
                  <p className="text-xs font-mono text-emerald-400 font-medium pt-1">GPA: 10 / 10</p>
                </div>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="pt-4 border-t border-zinc-900 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">
                Leadership
              </span>
              <div className="space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-base font-semibold text-zinc-200">
                    Vice Chairperson — ACM Student Chapter
                  </h4>
                  <span className="text-xs font-mono text-zinc-400">April 2025 – May 2026</span>
                </div>
                <p className="text-xs font-mono text-blue-400">Joy University</p>
                <ul className="space-y-1.5 text-sm text-zinc-400 leading-relaxed font-normal list-disc list-inside marker:text-zinc-600">
                  <li>Organized and coordinated Ideathons, Hackathons, Technical Quizzes, Coding Events, and technical programs in collaboration with student teams and faculty.</li>
                  <li>Managed participant coordination, registrations, event logistics, and on-ground execution while leading student engagement in technical activities.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
