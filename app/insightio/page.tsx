import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Insightio - AI User Research Synthesis | Romman Portfolio',
  description: 'AI-powered user research synthesis platform that compresses weeks of manual synthesis into same-day insight cycles.',
};

export default function InsightioPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Insightio - AI User Research Synthesis",
    "description": "AI-powered user research synthesis platform that compresses weeks of manual synthesis into same-day insight cycles.",
    "author": {
      "@type": "Person",
      "name": "Muhammad Romman Nadeem"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString(),
    "image": "https://romman-portfolio.vercel.app/icon.svg",
    "keywords": "AI, user research, product analytics, UX research, data synthesis, product management"
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
            Insightio
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-6">
            AI user-research synthesis for product teams
          </p>
          <a 
            href="https://insightio.webflow.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Visit Insightio → https://insightio.webflow.io/
          </a>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* The Problem */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            The Problem
          </h2>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Feedback is scattered across reviews, interviews, surveys, support, and success notes—slow to synthesize, hard to trust, easy to miss patterns.</li>
            </ul>
          </div>
        </section>

        {/* What We Built */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            What We Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multimodal Ingestion</h3>
              <p className="text-gray-700">
                Text (CSV/Docs), <strong>audio</strong>, and <strong>video</strong> into a single workspace.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transcription on AWS</h3>
              <p className="text-gray-700">
                Audio/video routed to <strong>AWS Transcribe</strong>; artifacts stored in <strong>Amazon S3</strong> and referenced in-app.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Normalization Pipeline</h3>
              <p className="text-gray-700">
                De-duplication, language detection, PII scrubbing, speaker attribution for interviews.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Thematic Clustering</h3>
              <p className="text-gray-700">
                Vector index + topic modeling to surface recurring themes, sentiments, intents, JTBD.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insight Cards</h3>
              <p className="text-gray-700">
                Summaries with source links, timestamps, and confidence for <strong>traceability</strong> from insight → sentence → source.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">NLQ Search</h3>
              <p className="text-gray-700">
                Ask natural questions (e.g., "Top onboarding blockers for new users?") and get evidence-backed answers.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prioritization</h3>
              <p className="text-gray-700">
                ICE/RICE fields to rank pain points and opportunities.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Handoffs</h3>
              <p className="text-gray-700">
                One-click exports to PRD/Slack/Notion.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 md:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Semantic Chat</h3>
              <p className="text-gray-700">
                One of the best chats to be created back then, helping users expand on insights and problem spaces.
              </p>
            </div>
          </div>
        </section>

        {/* System/Infra Highlights */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            System/Infra Highlights
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Web app</strong> frontend connected to a backend orchestrator.</li>
              <li><strong>Parallel API orchestration</strong> for ingestion, transcription, embedding, and clustering to cut end-to-end latency.</li>
              <li><strong>S3</strong> as the single source of truth for raw files + transcripts; metadata stored alongside embeddings for fast retrieval.</li>
            </ul>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>Upload/import text, audio, or video → store in <strong>S3</strong>.</li>
              <li>For A/V: run <strong>AWS Transcribe</strong> → attach transcripts + timestamps.</li>
              <li>Clean & normalize → embed → cluster themes & sentiments using AI.</li>
              <li>Generate <strong>Insight Cards</strong> with direct links back to sources.</li>
            </ol>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Outcomes
          </h2>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Compressed <strong>weeks of manual synthesis into same-day insight cycles</strong>.</li>
              <li><strong>Higher signal, lower bias</strong> via consistent clustering and evidence-backed summaries.</li>
              <li>A <strong>shared, traceable source of truth</strong> across PM, Design, and CS.</li>
            </ul>
          </div>
        </section>

        {/* Process Videos */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Process
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Minimum Viable Test
              </h3>
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <a 
                  href="https://www.loom.com/share/8577ef5f28ca455f9da8481577eef307?sid=bcb1c55e-b3ea-417c-a733-24a33f00564a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium text-lg"
                >
                  Watch on Loom →
                </a>
              </div>
              <p className="text-sm text-gray-600">
                <a 
                  href="https://www.loom.com/share/8577ef5f28ca455f9da8481577eef307?sid=bcb1c55e-b3ea-417c-a733-24a33f00564a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.loom.com/share/8577ef5f28ca455f9da8481577eef307?sid=bcb1c55e-b3ea-417c-a733-24a33f00564a
                </a>
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                MVP (Woohoo!)
              </h3>
              <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <a 
                  href="https://www.loom.com/share/885978d8b6f04d42b702fe85b80a4d4c?sid=daa01572-6316-4599-8200-fa421268d806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium text-lg"
                >
                  Watch on Loom →
                </a>
              </div>
              <p className="text-sm text-gray-600">
                <a 
                  href="https://www.loom.com/share/885978d8b6f04d42b702fe85b80a4d4c?sid=daa01572-6316-4599-8200-fa421268d806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://www.loom.com/share/885978d8b6f04d42b702fe85b80a4d4c?sid=daa01572-6316-4599-8200-fa421268d806
                </a>
              </p>
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

