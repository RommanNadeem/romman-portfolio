import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'StudioStream AI - Design Automation Platform | Romman Portfolio',
  description: 'AI-powered design automation platform that turns sales calls into design briefs and generates Midjourney-optimized prompts.',
};

export default function StudioStreamPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "StudioStream AI - Design Automation Platform",
    "description": "AI-powered design automation platform that turns sales calls into design briefs and generates Midjourney-optimized prompts.",
    "author": {
      "@type": "Person",
      "name": "Muhammad Romman Nadeem"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString(),
    "image": "https://romman-portfolio.vercel.app/icon.svg",
    "keywords": "AI, design automation, Midjourney, product development, AI agents, voice companions"
  };

  return (
    <main className="min-h-screen">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="text-blue-600 hover:underline mb-4 inline-block"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            StudioStream AI
          </h1>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* Phase 1 - Shipped */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            StudioStream — Phase 1 <span className="text-green-600">(Shipped)</span>
          </h2>

          {/* What We Built */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What We Built
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Requirements Extraction</h4>
                <p className="text-gray-700 text-sm">
                  Turned sales-call notes into a clear requirements set: themes, topics, constraints.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Context-Rich Design Briefs</h4>
                <p className="text-gray-700 text-sm">
                  Auto-researched the web for references and context to produce a <strong>context-rich design brief</strong> for the LLM.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Midjourney Integration</h4>
                <p className="text-gray-700 text-sm">
                  Generated Midjourney-ready prompts using strict design criteria and a consistent format; <strong>prompt count is user-configurable</strong>.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">ImagineAPI Integration</h4>
                <p className="text-gray-700 text-sm">
                  Integrated Midjourney via <strong>ImagineAPI (Discord)</strong> for seamless image generation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 md:col-span-2">
                <h4 className="font-semibold text-gray-900 mb-2">Web Application</h4>
                <p className="text-gray-700 text-sm">
                  A project management flow in the web app, built in <strong>React and Next.js</strong>, backend in <strong>Django</strong>.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 md:col-span-2">
                <h4 className="font-semibold text-gray-900 mb-2">Role-Based Access Control</h4>
                <p className="text-gray-700 text-sm">
                  Role based access control (<strong>Admin, Sales, Design</strong>).
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Ingest call insights → extract themes & requirements.</li>
                <li>Fetch references/context → assemble design brief.</li>
                <li>Produce structured prompts → send to Midjourney through ImagineAPI.</li>
                <li>Return images + references to the project workspace.</li>
              </ol>
            </div>
          </div>

          {/* Outcomes */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Outcomes
            </h3>
            <div className="bg-green-50 border-l-4 border-green-500 rounded-r p-6">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>High-quality, Midjourney-optimized prompts</strong> that consistently hit the brief.</li>
                <li><strong>Backend threading</strong> cut wait times dramatically—now producing <strong>hundreds of design references in minutes</strong>, saving hours for the team.</li>
                <li><strong>Richer, less biased concepts</strong> thanks to context-aware research that broadens perspectives.</li>
              </ul>
            </div>
          </div>

          {/* Video */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <a 
                href="https://www.loom.com/share/31fa8ef7a69947169298d1f26067abfe?sid=2ba112c4-03f3-482c-8481-2f6f70f32faf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium text-lg"
              >
                Watch Phase 1 Demo on Loom →
              </a>
            </div>
            <p className="text-sm text-gray-600">
              <a 
                href="https://www.loom.com/share/31fa8ef7a69947169298d1f26067abfe?sid=2ba112c4-03f3-482c-8481-2f6f70f32faf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://www.loom.com/share/31fa8ef7a69947169298d1f26067abfe?sid=2ba112c4-03f3-482c-8481-2f6f70f32faf
              </a>
            </p>
          </div>
        </section>

        <hr className="border-gray-300 mb-12" />

        {/* Phase 2 - In Progress */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Phase 2 <span className="text-yellow-600">(In-Progress)</span>
          </h2>

          {/* Generative Controls */}
          <div className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Generative Controls (Midjourney/OpenAI)
              </h3>
              <p className="text-gray-700 mb-4 italic">
                <strong>Why:</strong> Designers steer outputs precisely.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>UI for <strong>Chaos</strong>, <strong>Stylize</strong>, <strong>Quality</strong></li>
                  <li>Project-level default parameters</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reference Parameters */}
          <div className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Reference Parameters
              </h3>
              <p className="text-gray-700 mb-4 italic">
                <strong>Why:</strong> Consistent visual direction.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><strong>Color references</strong> (palettes/swatches)</li>
                  <li><strong>Style references</strong> (boards/image sets)</li>
                  <li>Limit for <strong># of images to reference</strong></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Color Management */}
          <div className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Color Management
              </h3>
              <p className="text-gray-700 mb-4 italic">
                <strong>Why:</strong> Garment-aware, non-repetitive palettes.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Default brand/system palette picker</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regeneration Flow */}
          <div className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Regeneration Flow
              </h3>
              <p className="text-gray-700 mb-4 italic">
                <strong>Why:</strong> Quicker iteration within the same project context.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>One-click <strong>Regenerate</strong> with updated prompts/references</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Styles */}
          <div className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Project Styles
              </h3>
              <p className="text-gray-700 mb-4 italic">
                <strong>Why:</strong> Parallel exploration of design directions.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li><strong>Style Collectives</strong> (separate prompts per style)
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Add constraints, and style management on front-end.</li>
                    </ul>
                  </li>
                  <li>Tag/compare runs by style</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Management */}
          <div className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Project Management
              </h3>
              <p className="text-gray-700 mb-4 italic">
                <strong>Why:</strong> Better context, tracking, and collaboration.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Rich project details (brief, deadlines, tags).</li>
                  <li>Ability to handle different collectives under one project.</li>
                  <li>Multiple prompts per project (organized by style/goal)</li>
                  <li>Status, owner, and milestone tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Access Control & Sharing */}
          <div className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Access Control & Sharing
              </h3>
              <p className="text-gray-700 mb-4 italic">
                <strong>Why:</strong> Governance and scoped collaboration.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Roles: <strong>Super Admin, Admin, Design, Sales</strong> (from Admin/Sales)</li>
                  <li>Share projects with role-based view/edit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Frontend UX/Design */}
          <div className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Frontend UX/Design
              </h3>
              <p className="text-gray-700 mb-4 italic">
                <strong>Why:</strong> Faster, clearer flows.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Streamlined generate → regenerate flow</li>
                  <li>Improved image library (search, filters, group by project/style/run)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Backend Reliability & Security */}
          <div className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Backend Reliability & Security
              </h3>
              <p className="text-gray-700 mb-4 italic">
                <strong>Why:</strong> Continuity during outages; stronger trust.
              </p>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Durable storage for image references/metadata (ImagineAPI-independent)</li>
                  <li>Automatic model fallback on failure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <Link 
            href="/"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  );
}

