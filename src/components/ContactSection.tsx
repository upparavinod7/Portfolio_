import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, Github, ArrowUpRight, Copy, Check, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email && !formState.message) return;

    const subject = formState.subject || `Inquiry from ${formState.name || 'Recruiter'}`;
    const body = `Hi Uppara,\n\n${formState.message}\n\nBest regards,\n${formState.name} (${formState.email})`;
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 border-b border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="md:col-span-6 space-y-6">
            <div>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100"
              >
                Let&apos;s connect.
              </h2>
              <p className="text-base text-zinc-400 mt-3 leading-relaxed font-normal">
                I&apos;m open to opportunities in AI/ML, full-stack development and software engineering.
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-zinc-400" />
                  <div>
                    <span className="text-xs font-mono text-zinc-500 block">Email</span>
                    <a
                      id="contact-email-link"
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-medium text-zinc-200 hover:text-white transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  id="contact-copy-email-btn"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  className="p-1.5 text-zinc-400 hover:text-zinc-200 transition-colors rounded cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                id="contact-linkedin-link"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                  <div>
                    <span className="text-xs font-mono text-zinc-500 block">LinkedIn</span>
                    <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                      linkedin.com/in/uppara-vinod
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                id="contact-github-link"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                  <div>
                    <span className="text-xs font-mono text-zinc-500 block">GitHub</span>
                    <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                      github.com/upparavinod7
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="md:col-span-6 bg-zinc-900/30 border border-zinc-800 rounded-lg p-6 space-y-4">
            <h3 className="text-base font-semibold text-zinc-200">
              Send a Direct Message
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
              Compose a note below to initiate an email directly through your default mail client.
            </p>

            <form onSubmit={handleSendMessage} className="space-y-3 pt-1">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 mb-1">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Recruiter or Engineering Manager"
                  className="w-full px-3 py-2 rounded bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 font-sans"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 mb-1">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="your.email@company.com"
                  className="w-full px-3 py-2 rounded bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 font-sans"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-400 mb-1">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  placeholder="Full Stack / AI ML Role Discussion"
                  className="w-full px-3 py-2 rounded bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 font-sans"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hi Uppara, I came across your portfolio and would like to discuss..."
                  className="w-full px-3 py-2 rounded bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 font-sans resize-none"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-white transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send via Email Client</span>
              </button>

              {sent && (
                <p className="text-xs text-center text-emerald-400 font-mono pt-1">
                  Email client triggered with your draft.
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
