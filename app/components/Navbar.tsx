'use client';

import { useMemo, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = useMemo(
    () => [
      { label: 'Overview', id: 'home' },
      { label: 'Metrics', id: 'snapshot' },
      { label: 'Case Studies', id: 'case-studies' },
      { label: 'Services', id: 'what-i-do' },
      { label: 'Highlights', id: 'selected-career-highlights' },
      { label: 'Experience', id: 'experience-overview' },
      { label: 'Skills', id: 'skills-certifications' },
      { label: 'Contact', id: 'contact' },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      
      const viewportCenter = window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const targetOffset =
        elementHeight >= viewportHeight
          ? elementTop - 80
          : elementTop - (viewportHeight / 2 - elementHeight / 2);

      window.scrollTo({
        top: Math.max(0, targetOffset),
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#050607]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="text-xs font-semibold tracking-[0.3em] text-slate-400 uppercase">
          Haris Ibrahim
        </span>
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition ${
                activeSection === item.id
                  ? 'bg-white text-slate-900'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left rounded-full px-4 py-2 text-xs font-semibold ${
                activeSection === item.id
                  ? 'bg-white text-slate-900'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

