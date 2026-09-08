import React from 'react';
import { RECRUITER_SNAPSHOT } from '../data/portfolioData';
import { ShieldCheck } from 'lucide-react';

export const RecruiterSnapshot: React.FC = () => {
  return (
    <section id="snapshot" className="py-12 bg-[#080809] relative border-b border-[#1A1A1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-3 border-b border-[#1A1A1B]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-[#3B82F6] uppercase tracking-[0.2em] font-bold">
              01 // RECRUITER EVALUATION
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Verified Candidate Credentials
            </span>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero Fabricated Data • 100% Repository-Backed</span>
          </div>
        </div>

        {/* 4-Card High-Density Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {RECRUITER_SNAPSHOT.map((item, idx) => {
            const badgeColors = [
              'text-emerald-400',
              'text-blue-400',
              'text-orange-400',
              'text-purple-400'
            ];

            return (
              <div
                key={idx}
                className="p-4 rounded-sm bg-[#0C0C0D] border border-[#1A1A1B] hover:border-[#1F2937] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                      {item.category}
                    </span>
                    <span className={`bg-[#111827] border border-[#1F2937] px-2 py-0.5 rounded-sm text-[11px] font-bold font-mono ${badgeColors[idx % 4]}`}>
                      {item.value}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    {item.detail}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#1A1A1B] text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Verified Metric
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
