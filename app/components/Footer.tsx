'use client';

import { profileName } from '../data/profile';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-50 via-blue-100/80 to-indigo-50 mt-20 border-t border-blue-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-500 mb-3">
              Connect
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Let's discuss your next growth chapter.
            </h2>
          </div>
          <div className="flex flex-col gap-4 min-w-[260px] text-sm text-gray-600">
            <p>
              Available for strategic marketing leadership, advisory work, and
              fractional CMO engagements.
            </p>
            <a
              href="mailto:harisibrahim1@yahoo.com?subject=Let’s work together&body=Hi Haris,%0D%0A%0D%0AI came across your portfolio and would love to discuss..."
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="border-t border-blue-200 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} {profileName}. Crafted with care in Lahore.
          </p>
        </div>
      </div>
    </footer>
  );
}

