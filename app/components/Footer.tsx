'use client';

import { profileName } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050607] mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Connect
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">
              Let’s discuss your next growth chapter.
            </h2>
            <p className="text-sm text-slate-300 max-w-lg">
              Available for strategic marketing leadership, advisory work, and fractional CMO engagements.
            </p>
          </div>
          <a
            href="mailto:harisibrahim1@yahoo.com?subject=Let’s work together&body=Hi Haris,%0D%0A%0D%0AI came across your portfolio and would love to discuss..."
            className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-2.5 text-sm font-semibold hover:bg-slate-200 transition"
          >
            Book a call
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {profileName}. Crafted with care in Lahore.
          </p>
        </div>
      </div>
    </footer>
  );
}

