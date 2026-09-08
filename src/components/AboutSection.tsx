import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Section Heading */}
          <div className="md:col-span-4">
            <h2
              id="about-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100"
            >
              About Me
            </h2>
            <p className="text-sm text-zinc-500 mt-2 font-mono">
              Engineering profile &amp; technical focus
            </p>
          </div>

          {/* Narrative Content */}
          <div className="md:col-span-8 space-y-5 text-zinc-400 text-base leading-relaxed font-normal">
            <p>
              I am a Computer Science undergraduate specializing in <strong className="text-zinc-200 font-medium">Artificial Intelligence &amp; Machine Learning</strong> at Joy University (CGPA 9.45/10). My work centers on the intersection of scalable full-stack engineering and practical machine learning systems.
            </p>

            <p>
              On the full-stack side, I build responsive, production-ready web applications using <strong className="text-zinc-200 font-medium">React, TypeScript, Node.js, and Express</strong>, backed by relational and NoSQL databases including <strong className="text-zinc-200 font-medium">PostgreSQL and MongoDB</strong>. I focus on clean API boundaries, secure authentication, and resilient data storage.
            </p>

            <p>
              On the machine learning side, I develop predictive, generative, and computer vision applications using <strong className="text-zinc-200 font-medium">Python, PyTorch, Scikit-learn, TensorFlow, and OpenCV</strong>. My projects include local-first AI recording studios (AI Podcast Studio), research-grade 3D brain MRI reconstruction pipelines, containerized polyglot execution sandboxes (CodeLook), and real-time computer vision engines.
            </p>

            <p>
              I prioritize maintainable codebases, containerized microservices, and software that solves real functional requirements rather than surface-level demonstrations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
