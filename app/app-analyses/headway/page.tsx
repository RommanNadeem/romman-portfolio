import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: 'Headway Book Summaries - Product Analysis | Romman Portfolio',
  description: 'In-depth product experience analysis of Headway, a book summary app for quick learning and personal growth.',
};

export default function HeadwayAnalysisPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Headway Book Summaries - Product Analysis",
    "description": "In-depth product experience analysis of Headway, a book summary app for quick learning and personal growth.",
    "author": {
      "@type": "Person",
      "name": "Muhammad Romman Nadeem"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString(),
    "image": "https://romman-portfolio.vercel.app/icon.svg",
    "keywords": "headway, book summaries, product analysis, app analysis, UX design, retention, gamification"
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
            href="/app-analyses"
            className="text-blue-600 hover:underline mb-4 inline-block"
          >
            ← Back to App Analyses
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Headway — Book Summaries
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A book summary app that helps users learn key ideas from bestselling titles in just a few minutes a day. It positions itself as a tool for personal growth, motivation, and quick learning.
          </p>
        </div>

        {/* PDF Embed */}
        <div className="mb-12">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Full Analysis PDF</h2>
              <a 
                href="/Headway.pdf" 
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
            <iframe 
              src="/Headway.pdf#toolbar=0&navpanes=0&scrollbar=0" 
              className="w-full h-[600px]"
              title="Headway Analysis PDF"
            />
          </div>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              <strong>Headway</strong> is a book summary app that helps users learn key ideas from bestselling titles in just a few minutes a day. It positions itself as a tool for <strong>personal growth, motivation, and quick learning</strong>.
            </p>
          </div>
        </section>

        {/* Onboarding */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            1. Onboarding
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quick First Commitment
              </h3>
              <p className="text-gray-700">
                Onboarding starts with an age question grouped into ranges. This reduces friction, nudges users into an easy first decision, and gives Headway a broad demographic context for personalization.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Low-Effort Framing
              </h3>
              <p className="text-gray-700">
                The "3-minute quiz" sets a clear expectation that signup is fast and lightweight. This framing lowers barriers and increases the likelihood of onboarding completion.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Social Proof and Trust
              </h3>
              <p className="text-gray-700">
                A bold headline highlighting "30+ million users" alongside logos from Forbes and TechCrunch establishes early credibility. This combination reassures users and reduces hesitation to proceed.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Curiosity and Relatability
              </h3>
              <p className="text-gray-700">
                A wide range of topics invites exploration and sparks curiosity. Allowing users to choose creates early ownership and sets up personalized in-app pathways.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Motivational Reinforcement
              </h3>
              <p className="text-gray-700">
                Headway places informational and motivational messages after nearly every response. By validating answers across both positive and negative spectrums, it builds empathy and keeps users moving forward.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Aspirational Alignment
              </h3>
              <p className="text-gray-700">
                The use of famous personalities like Steve Jobs, Richard Branson, and Jeff Bezos taps into role-model psychology. Asking "Who inspires you most?" connects the product to user aspirations and ambition.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Perceived Personalization
              </h3>
              <p className="text-gray-700">
                Even though book titles are hardcoded, presenting them with yes/no options makes the app feel tailored. This illusion of adaptation strengthens users' belief that Headway understands their taste.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Micro-Engagement During Waits
              </h3>
              <p className="text-gray-700">
                Additional yes/no questions appear on loading screens, turning idle time into meaningful interaction. This reinforces the feeling of being understood and maintains momentum through onboarding.
              </p>
            </div>
          </div>
        </section>

        {/* Conversion */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            2. Conversion
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Urgency Cues
              </h3>
              <p className="text-gray-700">
                A countdown timer paired with a <strong>51% discount offer</strong> creates a strong sense of urgency and exclusivity, pushing users to act before the deal expires.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Anchoring Tactics
              </h3>
              <p className="text-gray-700">
                The 3-month plan is highlighted as the default, subtly guiding users toward the mid-tier option.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Payment Plan Variety
              </h3>
              <p className="text-gray-700">
                Offering three options — 1 month, 3 months, and 12 months — caters to users with different levels of intent and commitment. Shorter plans appeal to low-risk trial users, while longer ones target high-intent subscribers looking for value.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Price Reframing
              </h3>
              <p className="text-gray-700">
                Showing a daily breakdown positions the subscription as a small, self-improvement investment, reducing price sensitivity.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Trust Signals
              </h3>
              <p className="text-gray-700">
                Payment provider logos and a "Pay safe & secure" message reduce perceived risk at checkout.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Post-Trial Discounts
              </h3>
              <p className="text-gray-700">
                Headway offers targeted in-app discounts after a user's free trial or subscription has ended. This win-back tactic captures fence-sitters who showed intent but didn't convert, increasing the chances of delayed conversion.
              </p>
            </div>
          </div>
        </section>

        {/* Activation */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            3. Activation
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fast Path to Value
              </h3>
              <p className="text-gray-700">
                The "under 3 minutes" framing and step-by-step commitments reduce cognitive load and quickly guide users to first-session value.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Curiosity Loops
              </h3>
              <p className="text-gray-700">
                Wide topic variety ensures users discover something personally meaningful, fueling early engagement.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Continuous Momentum
              </h3>
              <p className="text-gray-700">
                The combination of small decisions, motivational nudges, and micro-interactions sustains flow and minimizes drop-offs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Clean Entry Point
              </h3>
              <p className="text-gray-700">
                Headway's homescreen immediately surfaces <strong>For You recommendations</strong>, along with lists of related and trending topics. This lowers friction by giving users clear starting points and encourages them to begin listening right away.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Core Value Prompt
              </h3>
              <p className="text-gray-700">
                A <strong>"First Step for Today"</strong> banner guides users directly into the core value proposition of learning in under 3 minutes, ensuring they experience product payoff as early as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Retention */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            4. Retention
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Daily Habit Loops
              </h3>
              <p className="text-gray-700">
                Headway reinforces consistent engagement through daily reminders and motivational push notifications. These cues nudge users back into the app, strengthening habit formation around bite-sized learning.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Streaks and Progress Tracking
              </h3>
              <p className="text-gray-700">
                Visual streak counters and progress milestones celebrate consistency. By rewarding small wins, Headway taps into gamification psychology to keep users motivated over time.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Personalized Continuity
              </h3>
              <p className="text-gray-700">
                The "For You" feed evolves with new topics and recommendations based on past activity, making the experience feel fresh and continuously relevant. This adaptive flow reduces the risk of fatigue.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Celebrating Completion
              </h3>
              <p className="text-gray-700">
                Finishing a summary triggers positive reinforcement with motivational copy and celebratory visuals. These micro-rewards give users a sense of accomplishment and drive them to repeat the behavior.
              </p>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Key Takeaways
          </h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r p-6">
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Frictionless First Step Wins</strong> → A simple, low-stakes opener (like age ranges or yes/no prompts) lowers defenses. The faster the "first yes," the smoother the journey ahead.
              </li>
              <li>
                <strong>Set Expectations, Then Overdeliver</strong> → Framing onboarding as "3 minutes" makes it feel easy; surprising users with value before that time cements trust.
              </li>
              <li>
                <strong>Credibility Front-Loads Confidence</strong> → Millions of users + big-name logos neutralize early doubt. Trust earned in the first 10 seconds carries through the funnel.
              </li>
              <li>
                <strong>Curiosity Fuels Progress</strong> → Topic variety, inspirational figures, and aspirational prompts pull users forward. Exploration beats explanation.
              </li>
              <li>
                <strong>Micro-Interactions Create Flow</strong> → Small choices and affirmations keep momentum alive. Forms end journeys; micro-commitments extend them.
              </li>
              <li>
                <strong>Perceived Personalization is Enough</strong> → Even lightweight tailoring feels magical. Users don't need perfect relevance — they need to <em>believe</em> the app understands them.
              </li>
              <li>
                <strong>Idle Time is a Growth Lever</strong> → Turning wait states into yes/no questions or affirmations converts dead air into micro-engagements. Every second can build a connection.
              </li>
              <li>
                <strong>Urgency Converts Hesitation</strong> → Countdown timers and limited offers reframe indecision as risk of missing out. Scarcity isn't pushy when value feels real.
              </li>
              <li>
                <strong>Price as a Daily Habit, Not a Bill</strong> → Breaking plans into cents-per-day makes learning feel like a coffee-sized investment. Reframing cost reframes intent.
              </li>
              <li>
                <strong>Core Value Must Be Instant</strong> → "First step for today" and fast access to "For You" content ensure the user tastes the payoff immediately. Delayed value is an abandoned value.
              </li>
              <li>
                <strong>Retention Lives in Rituals</strong> → Streaks, daily nudges, and completions celebrated transform usage into routine. Habit is the product moat.
              </li>
              <li>
                <strong>Adaptation Prevents Fatigue</strong> → Evolving recommendations and fresh prompts keep users surprised. Static feeds feel stale; adaptive flows feel alive.
              </li>
              <li>
                <strong>Identity Outlasts Incentives</strong> → Users don't stick around for discounts or streaks — they stay when the product reinforces who they want to become.
              </li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex justify-between">
          <Link 
            href="/app-analyses"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to App Analyses
          </Link>
          <Link 
            href="/"
            className="text-blue-600 hover:underline font-medium"
          >
            Back to Portfolio →
          </Link>
        </div>
      </div>
    </main>
  );
}

