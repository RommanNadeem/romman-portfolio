'use client';

import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import {
  certifications,
  contactInfo,
  education,
  experience,
  honors,
  projects,
  profileName,
  profileTitle,
  summaryParagraphs,
} from '../data/profile';

export const metadata = {
  title: 'Resume - Haris Ibrahim',
  description: 'Experience, education, and certifications overview.',
};

const sectionLabel =
  'text-xs font-semibold uppercase tracking-[0.25em] text-slate-500';
const sectionTitle =
  'text-lg sm:text-xl font-semibold text-slate-50 tracking-tight';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <header className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              Resume
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
              {profileName}
            </h1>
            <p className="mt-3 text-lg text-slate-400">{profileTitle}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {contactInfo.map((info) => {
                const Icon =
                  info.label === 'Email'
                    ? Mail
                    : info.label === 'Address'
                      ? MapPin
                      : Phone;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.label === 'Address' ? '_blank' : undefined}
                    rel={
                      info.label === 'Address' ? 'noopener noreferrer' : undefined
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    <Icon className="w-3.5 h-3.5 text-slate-400" />
                    {info.value}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
              <p className={sectionLabel}>Summary</p>
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                {summaryParagraphs.map((paragraph) => (
                  <p key={`summary-${paragraph}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-slate-200">Location</p>
              <p>Lahore, Pakistan</p>
              <p className="font-semibold text-slate-200 pt-2">Status</p>
              <p>Open to consulting & fractional CMO roles</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-300 space-y-2">
              <p className="font-semibold text-slate-200">Focus Areas</p>
              <p>
                B2B demand generation, industrial automation, telecom growth,
                software commercialization.
              </p>
            </div>
          </div>
        </header>

        <section className="mt-16 space-y-6">
          <div>
            <p className={sectionLabel}>Experience</p>
            <h2 className={sectionTitle}>Leadership & Impact</h2>
          </div>
          <div className="space-y-6">
            {experience.map((role) => (
              <div
                key={`${role.company}-${role.role}-${role.period}`}
                className="rounded-2xl border border-slate-900 bg-slate-950/60 p-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      {role.period}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {role.company}
                    </h3>
                    <p className="text-sm text-sky-400 font-semibold">
                      {role.role}
                    </p>
                  </div>
                  {role.location && (
                    <p className="text-xs text-slate-400">{role.location}</p>
                  )}
                </div>
                {role.summary && (
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {role.summary}
                  </p>
                )}
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {role.highlights.map((point) => (
                    <li key={`${role.company}-${point}`} className="flex gap-2">
                      <span className="mt-2 h-px w-4 bg-slate-600" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div>
            <p className={sectionLabel}>Education</p>
            <h2 className={sectionTitle}>Academic Background</h2>
          </div>
          <div className="space-y-4">
            {education.map((school) => (
              <div
                key={school.institution}
                className="rounded-2xl border border-slate-900 bg-slate-950/60 p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                      {school.period}
                    </p>
                    <p className="text-base font-semibold text-white">
                      {school.institution}
                    </p>
                    <p className="text-sm text-sky-400 font-semibold">
                      {school.degree}
                    </p>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 sm:mt-0">
                    {school.location}
                  </p>
                </div>
                <ul className="mt-3 text-sm text-slate-300 space-y-1.5">
                  {school.details.map((detail) => (
                    <li key={`${school.institution}-${detail}`} className="flex gap-2">
                      <span className="mt-2 h-px w-4 bg-slate-600" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <div>
            <p className={sectionLabel}>Projects</p>
            <h2 className={sectionTitle}>Select Initiatives</h2>
          </div>
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-2xl border border-slate-900 bg-slate-950/60 p-5"
              >
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <p className="text-base font-semibold text-white">
                    {project.name}
                  </p>
                  <p>{project.timeframe}</p>
                </div>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                <ul className="mt-3 text-sm text-slate-300 space-y-1.5">
                  {project.highlights.map((highlight) => (
                    <li key={`${project.name}-${highlight}`} className="flex gap-2">
                      <span className="mt-2 h-px w-4 bg-slate-600" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-5">
            <p className={sectionLabel}>Certifications</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {certifications.map((cert) => (
                <li key={`cert-${cert}`} className="flex gap-2">
                  <span className="mt-2 h-px w-4 bg-slate-600" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-900 bg-slate-950/60 p-5">
            <p className={sectionLabel}>Honors & Awards</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {honors.map((honor) => (
                <li key={`honor-${honor}`} className="flex gap-2">
                  <span className="mt-2 h-px w-4 bg-slate-600" />
                  <span>{honor}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="mt-16 border-t border-slate-900/70 pt-6 text-xs text-slate-500 text-center">
          Updated for {profileName}. Use browser print for PDF export.
        </footer>
      </div>
    </main>
  );
}

