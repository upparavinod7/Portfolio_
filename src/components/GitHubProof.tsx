import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  Code2, 
  FolderGit2, 
  CheckCircle,
  Terminal,
  Cpu
} from 'lucide-react';

export const GitHubProof: React.FC = () => {
  const verifiedRepos = [
    {
      name: 'CodeLook',
      desc: 'Polyglot code execution platform in isolated Docker containers with Monaco Editor and FastAPI.',
      language: 'FastAPI / React / Docker',
      langColor: 'bg-emerald-400',
      type: 'Developer Tools & Systems',
      url: 'https://github.com/upparavinod7/CodeLook'
    },
    {
      name: 'CareerOS-AI',
      desc: 'AI-powered career intelligence platform with job tracking, skill gap analysis, and resume parsing.',
      language: 'TypeScript / React / Node.js',
      langColor: 'bg-blue-400',
      type: 'Full-Stack AI SaaS',
      url: 'https://github.com/upparavinod7'
    },
    {
      name: '3D-MRI-Reconstruction',
      desc: 'Volumetric medical imaging pipeline transforming 2D DICOM series into 3D meshes with PyVista.',
      language: 'Python / Computer Vision',
      langColor: 'bg-purple-400',
      type: 'Medical Imaging & CV',
      url: 'https://github.com/upparavinod7'
    },
    {
      name: 'Smart-Music-Player',
      desc: 'Emotion-aware music recommendation engine combining real-time OpenCV webcam frames and CNN classification.',
      language: 'Python / TensorFlow / Java',
      langColor: 'bg-amber-400',
      type: 'Computer Vision & Deep Learning',
      url: 'https://github.com/upparavinod7'
    },
    {
      name: 'Wanderlust',
      desc: 'Full-stack accommodation booking platform with user authentication, listings, and review management.',
      language: 'JavaScript / Node.js / Express',
      langColor: 'bg-yellow-400',
      type: 'Full-Stack Web App',
      url: 'https://github.com/upparavinod7'
    },
    {
      name: 'Vehicle-Price-Prediction',
      desc: 'End-to-end regression modeling pipeline estimating vehicle valuations with Flask REST API.',
      language: 'Python / Scikit-learn',
      langColor: 'bg-cyan-400',
      type: 'Applied Machine Learning',
      url: 'https://github.com/upparavinod7'
    }
  ];

  const languageBreakdown = [
    { name: 'Python', percentage: '38%', color: 'bg-blue-500', desc: 'AI/ML, Computer Vision, FastAPI, Flask' },
    { name: 'JavaScript / TypeScript', percentage: '34%', color: 'bg-amber-400', desc: 'React, Node.js, Express, UI Systems' },
    { name: 'Java', percentage: '12%', color: 'bg-rose-500', desc: 'OOP, Data Structures, Audio Integrations' },
    { name: 'C++', percentage: '8%', color: 'bg-indigo-500', desc: 'Algorithms & Computational Logic' },
    { name: 'HTML / CSS / SQL', percentage: '8%', color: 'bg-emerald-400', desc: 'Semantic UI & Database Queries' }
  ];

  return (
    <section id="github" className="py-16 bg-[#080809] relative border-b border-[#1A1A1B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#0C0C0D] border border-[#1A1A1B] text-[10px] font-mono text-[#3B82F6] mb-3 uppercase tracking-widest font-bold">
              <Github className="w-3.5 h-3.5" />
              <span>06 // VERIFIED CODEBASE ACTIVITY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              GitHub Repositories & Engineering Proof
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1.5 leading-relaxed">
              Public codebases showcasing multi-language implementations, containerization, and full-stack software development.
            </p>
          </div>

          <a
            id="github-profile-cta"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0C0C0D] hover:bg-[#161617] text-white border border-[#1A1A1B] hover:border-[#3B82F6]/50 text-xs font-mono uppercase tracking-wider transition-colors shrink-0"
          >
            <Github className="w-4 h-4 text-[#3B82F6]" />
            <span>github.com/upparavinod7</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
          
          {/* Left: Language Distribution & Engineering Profile */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Profile Overview Card */}
            <div className="p-4 rounded-sm bg-[#0C0C0D] border border-[#1A1A1B] space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#161617] border border-[#1A1A1B] flex items-center justify-center text-[#3B82F6]">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-mono">
                    @upparavinod7
                  </h3>
                  <p className="text-xs text-slate-400">
                    AI/ML & Full Stack Developer
                  </p>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[#1A1A1B] text-xs font-mono text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-[#1A1A1B]">
                  <span className="text-slate-500 text-[11px] uppercase">Focus:</span>
                  <span className="text-[#3B82F6]">AI/ML + Full Stack</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#1A1A1B]">
                  <span className="text-slate-500 text-[11px] uppercase">Academics:</span>
                  <span className="text-emerald-400 font-bold">9.45 / 10 CGPA</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-500 text-[11px] uppercase">Sandboxes:</span>
                  <span className="text-orange-400">Dockerized Monaco</span>
                </div>
              </div>
            </div>

            {/* Language Distribution */}
            <div className="p-4 rounded-sm bg-[#0C0C0D] border border-[#1A1A1B] space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                  Language Distribution
                </h4>
                <span className="text-[10px] font-mono text-slate-500">By Codebase</span>
              </div>

              {/* Progress bar */}
              <div className="h-2 w-full bg-[#161617] rounded-sm overflow-hidden flex gap-0.5 border border-[#1A1A1B]">
                {languageBreakdown.map((item, idx) => (
                  <div
                    key={idx}
                    style={{ width: item.percentage }}
                    className={`h-full ${item.color}`}
                    title={`${item.name} (${item.percentage})`}
                  />
                ))}
              </div>

              {/* Legend */}
              <div className="space-y-1.5 pt-1">
                {languageBreakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-sm ${item.color}`} />
                      <span className="text-slate-300 text-[11px]">{item.name}</span>
                    </div>
                    <span className="text-slate-400 text-[11px]">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Key Verified Repositories Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {verifiedRepos.map((repo, idx) => (
                <a
                  key={idx}
                  id={`github-repo-card-${idx}`}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-sm bg-[#0C0C0D] border border-[#1A1A1B] hover:border-slate-700 hover:bg-[#111113] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="w-4 h-4 text-[#3B82F6]" />
                        <span className="font-mono text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                          {repo.name}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mt-1 line-clamp-2">
                      {repo.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[#1A1A1B] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full ${repo.langColor}`} />
                      <span>{repo.language}</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                      {repo.type}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
