import Link from 'next/link';


export const metadata = {
  title: 'App Analyses - Product Experience Reviews | Romman Portfolio',
  description: 'In-depth product experience analyses and app reviews by Romman.',
};

export default function AppAnalysesPage() {
  return (
    <main className="min-h-screen">
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
            App Analyses
          </h1>
          <p className="text-xl text-gray-600">
            In-depth product experience analyses of B2C apps
          </p>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* B2C Apps Section */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            B2C Apps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Link 
                href="/app-analyses/tolan"
                className="text-blue-600 hover:underline font-medium text-lg block mb-2"
              >
                Tolan — AI Companion →
              </Link>
              <p className="text-gray-600 text-sm mb-3">
                AI companion app designed as a playful "alien best friend" with emotional support, creativity, and well-being features
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Link 
                href="/app-analyses/noom"
                className="text-blue-600 hover:underline font-medium text-lg block mb-2"
              >
                Noom — Weight Loss →
              </Link>
              <p className="text-gray-600 text-sm mb-3">
                Psychology-driven weight loss app combining behavioral science, gamification, and community accountability
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Link 
                href="/app-analyses/headway"
                className="text-blue-600 hover:underline font-medium text-lg block mb-2"
              >
                Headway — Book Summaries →
              </Link>
              <p className="text-gray-600 text-sm mb-3">
                Book summary app for learning key ideas from bestselling titles in minutes a day
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <Link 
                href="/app-analyses/commenter-ai"
                className="text-blue-600 hover:underline font-medium text-lg block mb-2"
              >
                Commenter AI — AI LinkedIn Comment →
              </Link>
              <p className="text-gray-600 text-sm mb-3">
                Comprehensive analysis combining GA data, Clarity recordings, and design evaluation
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

