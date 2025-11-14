'use client';

import type { ComponentType } from 'react';
import Navbar from './components/Navbar';
import {
  BarChart3,
  CheckCircle2,
  Compass,
  Dot,
  Layers,
  LandPlot,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Rocket,
  Sparkles,
  Tag,
  Target,
  Users,
  Workflow,
} from 'lucide-react';
import { contentBlocks, contactInfo, heroContent, profileHeadline } from './data/profile';
import { slugify } from '../lib/utils';

const featureIcons: Record<string, ComponentType<{ className?: string }>> = {
  demand: Target,
  product: Megaphone,
  strategy: Compass,
  sales: Workflow,
  analytics: BarChart3,
  leadership: Users,
  founder: Rocket,
  marketing_head: Megaphone,
  global_role: GlobeIcon,
  software: Layers,
  pricing: Tag,
  operations: LandPlot,
  case_intech_demand: Rocket,
  case_software: Layers,
  case_jazz: Megaphone,
};

function GlobeIcon(props: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></svg>;
}

export default function Home() {
  const emailContact = contactInfo.find((item) => item.label === 'Email');
  const mobileContact = contactInfo.find((item) => item.label === 'Mobile');
  const linkedInLink = heroContent.links.find((link) =>
    link.label.toLowerCase().includes('linkedin')
  );

  const heroContacts = [
    emailContact && { ...emailContact, Icon: Mail },
    mobileContact && { ...mobileContact, Icon: Phone },
    linkedInLink && {
      label: 'LinkedIn',
      value: linkedInLink.url.replace('https://', ''),
      href: linkedInLink.url,
      Icon: Linkedin,
    },
  ].filter(Boolean) as { label: string; value: string; href: string; Icon: ComponentType<{ className?: string }> }[];

  const orderedBlocks = [
    { type: 'callout' as const, id: 'about', content: contentBlocks.find((block) => block.type === 'callout') },
    { type: 'metrics' as const, id: 'snapshot', content: contentBlocks.find((block) => block.type === 'metrics') },
    { type: 'feature_grid' as const, id: 'case-studies', content: contentBlocks.find((block) => block.title === 'Case Studies') },
    { type: 'feature_grid' as const, id: 'what-i-do', content: contentBlocks.find((block) => block.title === 'What I Do') },
    { type: 'bullets' as const, id: 'selected-career-highlights', content: contentBlocks.find((block) => block.title === 'Selected Career Highlights') },
    { type: 'feature_grid' as const, id: 'experience-overview', content: contentBlocks.find((block) => block.title === 'Experience Overview') },
  ];

  return (
    <main className="min-h-screen bg-[#050607] text-slate-100">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-16">
        <section
          id="home"
          className="scroll-mt-28 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-10 shadow-[0_20px_120px_rgba(0,0,0,0.45)] space-y-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-6 max-w-3xl">
                    <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  {heroContent.meta.dates}
                </p>
                <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                  Hi, I'm {heroContent.title}
                </h1>
                <p className="text-xl text-slate-400 font-medium">
                  {heroContent.subtitle}
                </p>
              </div>
              <p className="text-base text-slate-300 leading-relaxed">
                {profileHeadline}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {heroContent.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center rounded-full bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold hover:bg-slate-200 transition">
                Book a call
              </button>
            </div>
            <div className="space-y-3 text-sm text-slate-400">
              {heroContacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                  rel={
                    contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined
                  }
                  className="inline-flex items-center gap-3 text-slate-200 hover:text-white"
                >
                  <contact.Icon className="w-4 h-4" />
                  <span>{contact.value}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {orderedBlocks.map((orderedBlock, index) => {
          const block = orderedBlock.content;
          if (!block) return null;

          const sectionId = orderedBlock.id || `section-${index}`;

          if (orderedBlock.id === 'about' && block.type === 'callout') {
            return (
              <section
                key={sectionId}
                id={sectionId}
                className="scroll-mt-28 border-t border-white/10 pt-10"
              >
                <div className="rounded-3xl border border-sky-500/20 bg-sky-500/10 p-6 sm:p-8 max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                    {block.title || 'About'}
                  </p>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-100">
                    {block.body}
                  </p>
                </div>
              </section>
            );
          }

          if (orderedBlock.id === 'snapshot' && block.type === 'metrics') {
            return (
              <section key={sectionId} id={sectionId} className="scroll-mt-28 border-t border-white/10 pt-10 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Snapshot
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {block.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col gap-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition"
                      title={item.tooltip}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        {item.value}
                        {item.suffix && (
                          <span className="text-base text-slate-400 ml-1">
                            {item.suffix}
                          </span>
                        )}
                      </p>
                      {item.tooltip && (
                        <p className="mt-1 text-xs text-slate-500 leading-snug">
                          {item.tooltip}
                        </p>
                      )}
              </div>
                  ))}
                </div>
        </section>
            );
          }

          if (orderedBlock.id === 'case-studies' && block.type === 'feature_grid') {
            return (
              <section key={sectionId} id={sectionId} className="scroll-mt-28 border-t border-white/10 pt-10 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      Proof of impact
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">
                      Case Studies
                    </h2>
            </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col gap-3 hover:-translate-y-1 hover:border-white/40 transition shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white text-slate-900 uppercase">
                            {item.iconKey || 'Case'}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wide">
                            Case Study
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-slate-200 border border-white/20 rounded-full px-2 py-0.5">
                          Outcome
                        </span>
              </div>
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                  </h3>
                      <div className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                        <p>
                          <span className="font-semibold text-white">Problem:</span>{' '}
                          {item.body.split('Problem:')[1]?.split('Approach:')[0]?.trim() || item.body}
                        </p>
                        <p>
                          <span className="font-semibold text-white">Approach:</span>{' '}
                          {item.body.split('Approach:')[1]?.split('Outcome:')[0]?.trim() || 'Focused demand design & exec alignment'}
                        </p>
                        <p>
                          <span className="font-semibold text-white">Outcome:</span>{' '}
                          {item.body.split('Outcome:')[1]?.trim() || 'Growth unlocked across acquisition + retention'}
                        </p>
              </div>
            </div>
                  ))}
                </div>
              </section>
            );
          }

          if (orderedBlock.id === 'what-i-do' && block.type === 'feature_grid') {
            const IconComponent = ({ iconKey }: { iconKey?: string }) => {
              const Icon = iconKey ? featureIcons[iconKey] : undefined;
              if (!Icon) {
                return (
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[11px] font-semibold text-slate-200">
                    {iconKey?.slice(0, 2).toUpperCase() || '•'}
                  </span>
                );
              }
              return (
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900">
                  <Icon className="w-4 h-4" />
                </span>
              );
            };

            return (
              <section key={sectionId} id={sectionId} className="scroll-mt-28 border-t border-white/10 pt-10 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Services
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    What I Do
                  </h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-2 hover:border-white/30 hover:-translate-y-0.5 transition shadow-[0_15px_50px_rgba(0,0,0,0.4)]"
                    >
                      <IconComponent iconKey={item.iconKey} />
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.body}
                      </p>
              </div>
                  ))}
          </div>
        </section>
            );
          }

          if (orderedBlock.id === 'selected-career-highlights' && block.type === 'bullets') {
            return (
              <section key={sectionId} id={sectionId} className="scroll-mt-28 border-t border-white/10 pt-10 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Track record
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    Selected Career Highlights
            </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {block.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200 text-[10px] font-semibold">
                        ✓
                      </span>
                      <p className="text-sm text-slate-200 leading-relaxed">
                        {item}
                </p>
              </div>
                  ))}
                </div>
              </section>
            );
          }

          if (orderedBlock.id === 'experience-overview' && block.type === 'feature_grid') {
            return (
              <section key={sectionId} id={sectionId} className="scroll-mt-28 border-t border-white/10 pt-10 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    Context
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold text-white">
                    Experience Overview
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {block.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                    >
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.body}
                </p>
              </div>
                  ))}
          </div>
        </section>
            );
          }

          if (block.type === 'bullets') {
            const isChecks = block.style === 'checks';
            return (
              <section key={sectionId} id={sectionId} className="scroll-mt-28 border-t border-white/10 pt-10 space-y-4">
                {block.title && (
                  <h2 className="text-lg font-semibold text-white">
                    {block.title}
            </h2>
                )}
                <ul className="space-y-3 text-slate-300">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      {isChecks ? (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold leading-none mt-0.5">
                          ✓
                        </span>
                      ) : block.style === 'dashes' ? (
                        <span className="mt-2 inline-block h-px w-4 bg-slate-500" />
                      ) : (
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-slate-500" />
                      )}
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          }

          return null;
        })}

        <section id="skills-certifications" className="scroll-mt-28 border-t border-white/10 pt-10">
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 grid gap-6 md:grid-cols-2 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                Skills & Tools
              </p>
              <ul className="mt-4 space-y-3 text-slate-200">
                {contentBlocks
                  .filter((block) => block.title === 'Skills and Tools')
                  .flatMap((block) => (block.type === 'bullets' ? block.items : []))
                  .map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-slate-900 text-[9px]">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed text-slate-100">
                        {item}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
                Certifications
              </p>
              <ul className="mt-4 space-y-3 text-slate-200">
                {contentBlocks
                  .filter((block) => block.title === 'Certifications')
                  .flatMap((block) => (block.type === 'bullets' ? block.items : []))
                  .map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-slate-900 text-[9px]">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed text-slate-100">
                        {item}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 border-t border-white/10 pt-10 space-y-8">
          <div className="rounded-3xl bg-gradient-to-r from-white/15 via-white/5 to-white/15 text-white p-6 md:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <div className="space-y-2 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                Contact & Availability
              </p>
              <p className="text-lg font-semibold">
                Open to executive marketing leadership roles, advisory engagements, and strategic consulting.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:harisibrahim1@yahoo.com?subject=Let’s work together&body=Hi Haris,%0D%0A%0D%0AI came across your portfolio and would love to discuss..."
                className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition"
              >
                Get in touch
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center rounded-full border border-white/50 text-white px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
              >
                View case studies
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between shadow-[0_15px_60px_rgba(0,0,0,0.45)]">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Let’s discuss your next growth chapter
              </h3>
              <p className="text-sm text-slate-300">
                Fast paths for founders and exec teams needing senior marketing firepower.
              </p>
            </div>
            <a
              href="mailto:harisibrahim1@yahoo.com?subject=Fractional%20CMO%20engagement"
              className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-200"
            >
              Book a call
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

