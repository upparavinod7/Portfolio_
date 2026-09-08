import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, Github, Linkedin } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', action: onOpenResume },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, href?: string, action?: () => void) => {
    setMobileMenuOpen(false);
    if (action) {
      e.preventDefault();
      action();
      return;
    }
    if (href) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        const navOffset = 70;
        const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Candidate Name */}
        <a
          id="nav-brand"
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-zinc-100 font-semibold text-base tracking-tight hover:text-white transition-colors"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Right: Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <nav className="flex items-center gap-6">
            {navLinks.map((item) => (
              <button
                key={item.label}
                id={`nav-link-${item.label.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.href, item.action)}
                className="hover:text-zinc-100 transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="h-4 w-px bg-zinc-800" />

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              id="nav-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-zinc-400 hover:text-zinc-100 transition-colors p-1"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="nav-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-zinc-400 hover:text-zinc-100 transition-colors p-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 text-zinc-400 hover:text-zinc-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#09090b] border-b border-zinc-800 px-6 py-4 space-y-3"
        >
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={(e) => handleNavClick(e, item.href, item.action)}
              className="block w-full text-left text-sm text-zinc-300 hover:text-white py-1.5 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex items-center gap-4 text-xs text-zinc-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-100 py-1"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-100 py-1"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
