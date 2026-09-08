import React from 'react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Github, ExternalLink, ArrowUpRight, Cpu, Layers, Terminal, Activity, BrainCircuit } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projects" className="py-24 border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2
            id="featured-projects-heading"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100"
          >
            Selected Projects
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed">
            Featured engineering systems spanning polyglot containerized sandboxes, AI career platforms, medical volume reconstruction, and real-time computer vision.
          </p>
        </div>

        {/* Large Alternating Project Rows */}
        <div className="space-y-24">
          {FLAGSHIP_PROJECTS.map((project, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Project Info Column */}
                <div
                  className={`lg:col-span-7 space-y-4 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-blue-400">
                      Project 0{idx + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-zinc-400">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-base text-zinc-300 leading-relaxed font-normal">
                    {project.tagline}
                  </p>

                  {/* 2-4 Important Technical Points */}
                  <div className="py-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                      Key Technical Architecture
                    </span>
                    <ul className="space-y-1.5 text-sm text-zinc-400 list-disc list-inside marker:text-zinc-600">
                      {project.features.slice(0, 4).map((feat, fIdx) => (
                        <li key={fIdx} className="leading-relaxed">
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.primaryTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4">
                    {project.githubUrl && (
                      <a
                        id={`github-link-${project.id}`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-100 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                      </a>
                    )}

                    <button
                      id={`inspect-btn-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
                    >
                      <span>Architecture Breakdown</span>
                      <span className="font-mono text-xs">→</span>
                    </button>
                  </div>
                </div>

                {/* Visual Preview / Architecture Mock Column */}
                <div
                  className={`lg:col-span-5 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="rounded-lg bg-zinc-900/60 border border-zinc-800 p-5 space-y-4 shadow-sm hover:border-zinc-700 transition-colors">
                    {/* Visual header */}
                    <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                        <span className="text-xs font-mono text-zinc-400 ml-2">
                          {project.id === 'ai-podcast' ? 'audio://piper-ollama-mix' :
                           project.id === '3d-brain-generation' ? 'dicom://marching-cubes-mesh' :
                           project.id === 'codelook' ? 'sandbox://docker-exec' :
                           project.id === 'careeros-ai' ? 'saas://analytics-engine' :
                           'cv://webcam-emotion-stream'}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase">
                        Verified
                      </span>
                    </div>

                    {/* Specific Project Mock Visuals */}
                    {project.id === 'ai-podcast' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-zinc-400 bg-zinc-950 p-2 rounded border border-zinc-800">
                          <span className="text-purple-400">Ollama: qwen2.5:3b</span>
                          <span className="text-emerald-400">Piper TTS: Online</span>
                        </div>
                        <div className="p-3 bg-zinc-950 rounded border border-zinc-800 space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Host Track:</span>
                            <span className="text-emerald-400">MediaRecorder (WebM)</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Scripted Cue #03:</span>
                            <span className="text-zinc-200">&quot;How do you handle latency?&quot;</span>
                          </div>
                          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden flex gap-0.5">
                            <div className="bg-emerald-500 h-full w-[45%]" />
                            <div className="bg-purple-500 h-full w-[30%]" />
                            <div className="bg-zinc-700 h-full w-[25%]" />
                          </div>
                        </div>
                        <div className="p-2.5 bg-zinc-950/80 rounded border border-zinc-800/60 text-zinc-400 text-[11px] flex items-center justify-between">
                          <span className="text-purple-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            FFmpeg Mix: Dual Track Sync
                          </span>
                          <span className="text-zinc-500">Output: WAV / MP3</span>
                        </div>
                      </div>
                    )}

                    {project.id === '3d-brain-generation' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-zinc-400 bg-zinc-950 p-2 rounded border border-zinc-800">
                          <span className="text-cyan-400">3D Otsu + Connected Comp</span>
                          <span className="text-zinc-400">Taubin Smoothing</span>
                        </div>
                        <div className="p-3 bg-zinc-950 rounded border border-zinc-800 space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Input Series:</span>
                            <span className="text-zinc-200">256 Axial MRI DICOM Scans</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Voxel Resampling:</span>
                            <span className="text-zinc-200">1.0mm Isotropic Normalization</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Cortical Surface:</span>
                            <span className="text-cyan-400">Marching Cubes &gt; 52,400 Vertices</span>
                          </div>
                        </div>
                        <div className="p-2 bg-zinc-950 rounded border border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                          <span className="text-emerald-400">Orthogonal Slice Viewer</span>
                          <span className="text-zinc-500">FastAPI &amp; PyTorch</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'codelook' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-zinc-400 bg-zinc-950 p-2 rounded border border-zinc-800">
                          <span className="text-emerald-400">Language: Python 3.11</span>
                          <span className="text-zinc-500">Limits: 128MB / 5s</span>
                        </div>
                        <div className="p-3 bg-zinc-950 rounded border border-zinc-800 text-zinc-300 space-y-1">
                          <p className="text-zinc-500"># Isolated container dispatch</p>
                          <p className="text-blue-400">def <span className="text-zinc-100">solve_problem</span>(arr):</p>
                          <p className="pl-4 text-zinc-300">return sorted([x**2 for x in arr])</p>
                        </div>
                        <div className="p-2.5 bg-zinc-950/80 rounded border border-zinc-800/60 text-zinc-400 text-[11px] flex items-center justify-between">
                          <span className="text-emerald-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Container runtime: 182ms
                          </span>
                          <span className="text-zinc-500">Exit code: 0</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'careeros-ai' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-zinc-400 bg-zinc-950 p-2 rounded border border-zinc-800">
                          <span className="text-blue-400">Skill-Gap Engine</span>
                          <span className="text-emerald-400">Score: 92%</span>
                        </div>
                        <div className="space-y-2 p-3 bg-zinc-950 rounded border border-zinc-800">
                          <div className="flex justify-between text-zinc-400 text-[11px]">
                            <span>Backend APIs (Node/Express)</span>
                            <span className="text-zinc-200">100% Match</span>
                          </div>
                          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-blue-500 h-full w-full" />
                          </div>
                          <div className="flex justify-between text-zinc-400 text-[11px] pt-1">
                            <span>Relational DB &amp; Aggregations</span>
                            <span className="text-zinc-200">95% Match</span>
                          </div>
                          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full w-[95%]" />
                          </div>
                        </div>
                        <div className="p-2 bg-zinc-950 rounded border border-zinc-800 text-[11px] text-zinc-400 flex justify-between">
                          <span>JWT Session: Active</span>
                          <span className="text-zinc-500">REST Status: 200 OK</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'smart-music-player' && (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-zinc-400 bg-zinc-950 p-2 rounded border border-zinc-800">
                          <span className="text-amber-400">OpenCV Face Pipeline</span>
                          <span className="text-emerald-400">30 FPS Stream</span>
                        </div>
                        <div className="p-3 bg-zinc-950 rounded border border-zinc-800 space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Facial Landmarks:</span>
                            <span className="text-zinc-200">68 Points Detected</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>CNN Affect Inference:</span>
                            <span className="text-amber-300">Energetic / Focus (94%)</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-zinc-400">
                            <span>Curated Track:</span>
                            <span className="text-blue-400">Upbeat Instrumental</span>
                          </div>
                        </div>
                        <div className="p-2 bg-zinc-950 rounded border border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                          <span className="text-emerald-400">Audio Bridge: Synchronized</span>
                          <span className="text-zinc-500">TensorFlow CNN</span>
                        </div>
                      </div>
                    )}

                    {/* Architecture Step summary */}
                    <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                      <span>Architecture:</span>
                      <span className="font-mono text-zinc-400">
                        {project.architecture.steps.map(s => s.label).join(' → ')}
                      </span>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
