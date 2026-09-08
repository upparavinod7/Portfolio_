import React from 'react';
import { GROWTH_JOURNEY } from '../data/portfolioData';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

export const EngineeringGrowthTimeline: React.FC = () => {
  return (
    <section className="py-16 bg-[#080809] relative border-b border-[#1A1A1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#0C0C0D] border border-[#1A1A1B] text-[10px] font-mono text-[#3B82F6] mb-3 uppercase tracking-widest font-bold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>08 // DEVELOPMENT PROGRESSION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Evolution
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-1.5 leading-relaxed">
            Continuous trajectory from frontend fundamentals to full-stack systems, machine learning pipelines, and developer tooling.
          </p>
        </div>

        {/* Timeline Horizontal Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {GROWTH_JOURNEY.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-sm bg-[#0C0C0D] border border-[#1A1A1B] hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-sm border border-emerald-500/20 uppercase tracking-wider">
                    PHASE {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    Milestone
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white font-mono">
                  {item.era}
                </h3>

                <p className="text-xs font-mono text-[#3B82F6] mt-0.5">
                  {item.focus}
                </p>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#1A1A1B] flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production applied</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
