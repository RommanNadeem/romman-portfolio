'use client';

import { useEffect, useRef, useState } from 'react';

interface PrincipleCard {
  title: string;
  subline: string;
}

const principles: PrincipleCard[] = [
  { title: 'Build fast', subline: 'Ship weekly, learn daily' },
  { title: 'Validate truth', subline: 'Watch real sessions, read the data' },
  { title: 'Make it human', subline: 'Warm tone, clear choices' },
  { title: 'Talk to users', subline: 'Early and often' },
  { title: 'Taste + intuition', subline: 'Then verify with numbers' },
  { title: 'AI that compounds', subline: 'Use where it creates flywheels' },
];

export default function WorkingStyle() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    // If reduced motion, show all cards immediately
    if (mediaQuery.matches) {
      setVisibleCards(new Set(principles.map((_, index) => index)));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="style" className="mb-20 scroll-mt-20">
      <div className="flex items-center gap-4 mb-12">
        <div className="relative w-14 h-14 flex items-center justify-center flex-shrink-0">
          <div className="absolute w-14 h-14 rounded-full border-4 border-purple-600/30"></div>
          <div className="absolute w-9 h-9 rounded-full border-[3px] border-purple-500/50"></div>
          <div className="absolute w-3.5 h-3.5 rounded-full bg-purple-600"></div>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          Signature Working Style
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((principle, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className={`
              bg-white rounded-2xl p-6 border border-gray-200
              transition-all duration-200
              hover:shadow-lg hover:-translate-y-1
              ${visibleCards.has(index) || prefersReducedMotion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            style={{
              transitionDelay: prefersReducedMotion ? '0ms' : `${index * 50}ms`,
            }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {principle.title}
            </h3>
            <p className="text-gray-600 text-base">
              {principle.subline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

