import Link from 'next/link';

export const metadata = {
  title: 'Noom Weight Loss - Product Analysis | Romman Portfolio',
  description: 'In-depth product experience analysis of Noom, a psychology-driven weight loss and wellness app.',
};

export default function NoomAnalysisPage() {
  return (
    <main className="min-h-screen">
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
            Noom — Weight Loss
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A psychology-driven weight loss and wellness app that combines behavioral science, gamification, and community accountability.
          </p>
        </div>

        {/* PDF Embed */}
        <div className="mb-12">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Full Analysis PDF</h2>
              <a 
                href="/NoomAnalysis.pdf" 
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
              src="/NoomAnalysis.pdf" 
              className="w-full h-[800px]"
              title="Noom Analysis PDF"
            />
          </div>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* Overview */}
        <section className="mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Noom</strong> is a psychology-driven weight loss and wellness app that combines <strong>behavioral science, gamification, and community accountability</strong>. Unlike quick-fix diet apps, it positions itself as a <strong>long-term lifestyle solution</strong>, rooted in education, data, and personal coaching.
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
                Friction as Commitment
              </h3>
              <p className="text-gray-700">
                Noom's 81-step onboarding is intentionally lengthy, filtering out low-intent users. The investment of time creates psychological commitment before users even touch the product.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Compliance + Safety Layer
              </h3>
              <p className="text-gray-700">
                By screening for eating disorders, Noom establishes medical credibility and aligns with clinical SOPs — building trust early.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Personalized Pathways
              </h3>
              <p className="text-gray-700">
                Gender, current weight, and target weight are captured to design unique journeys. Highlighting gender-specific progress patterns gives the sense that Noom "knows people like me."
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Dynamic Question Design
              </h3>
              <p className="text-gray-700">
                Onboarding questions vary in style and visuals, avoiding form fatigue. This design makes setup feel interactive rather than bureaucratic.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Trust Through Data
              </h3>
              <p className="text-gray-700">
                Social proof, graphs, and "Did you know?" stats frame the journey as evidence-backed. This positions Noom as scientifically credible rather than motivational fluff.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Early Gamification & Social Hooks
              </h3>
              <p className="text-gray-700">
                Users earn Noom Coins for small wins and are encouraged to nominate accountability buddies. If no friends join, they're paired with another Noomer, reinforcing the community.
              </p>
            </div>
          </div>
        </section>

        {/* Activation */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            2. Activation
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Commitment Trigger – Logging Current Weight
              </h3>
              <p className="text-gray-700">
                Asking users to enter their current weight immediately makes the experience feel personal and binding, creating a psychological "starting point" moment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Immediate Value – Unlocking Personalized Recipes
              </h3>
              <p className="text-gray-700">
                Once setup is complete, Noom delivers practical, high-value content (custom food recommendations) that shows users tangible benefits beyond weight tracking.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Motivational Reinforcement – Progress Graphs
              </h3>
              <p className="text-gray-700">
                Graphical weight-loss trackers visually display progress, reinforcing habits and keeping motivation alive even during plateaus.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Social Accountability – Buddy System & Invites
              </h3>
              <p className="text-gray-700">
                Users are nudged to invite a friend, family member, or partner to join. If they don't, Noom pairs them with another user, ensuring accountability and a shared journey.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Early Rewards – Gamified Coins & Checklists
              </h3>
              <p className="text-gray-700">
                Completion of onboarding tasks and first goals unlocks Noom Coins, giving users a sense of early accomplishment and making progress feel rewarding from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Retention */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            3. Retention
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Gamified Ecosystem
              </h3>
              <p className="text-gray-700">
                Coins, checklists, and step-tracking (via the separate <em>Noom Vibe</em> app) sustain ongoing micro-rewards.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Community Accountability
              </h3>
              <p className="text-gray-700">
                Buddy features, team-ups, and periodic friend-invite nudges weave social fabric around the user's journey.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Motivation Through Visualization
              </h3>
              <p className="text-gray-700">
                Continuous progress graphs keep results front and center, combating drop-off when progress slows.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Daily Rituals
              </h3>
              <p className="text-gray-700">
                Educational modules, recipe ideas, and checklists convert weight loss into a structured daily practice.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Psychological Anchoring
              </h3>
              <p className="text-gray-700">
                Personalized data (like gender-framed goals) reinforces that Noom is "for people like me," deepening trust and loyalty.
              </p>
            </div>
          </div>
        </section>

        {/* Conversion */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            4. Conversion
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                High-Intent Sign-Up
              </h3>
              <p className="text-gray-700">
                Users must register upfront, signaling commitment before value is delivered.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Verification as Filter
              </h3>
              <p className="text-gray-700">
                Email/identity checks ensure high-quality leads — reducing trial abuse and churn.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Long-Term Framing
              </h3>
              <p className="text-gray-700">
                Noom only offers an annual plan, framed as a "12-Month Plan," subtly anchoring expectations that weight loss is a year-long effort.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Free Trial as Gateway
              </h3>
              <p className="text-gray-700">
                A 7-day trial offers just enough runway for users to build trust and see value before payment.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Social-Driven Upsell
              </h3>
              <p className="text-gray-700">
                Offering free weeks for inviting friends creates dual momentum: new users + deeper commitment for the inviter.
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
                <strong>Friction Builds Commitment, Not Churn</strong> → Noom flips the common wisdom that onboarding must be "fast." By demanding 81 steps upfront, it screens out casual browsers and leaves only <em>serious, high-intent users</em>. The time investment itself becomes a sunk-cost anchor that increases follow-through.
              </li>
              <li>
                <strong>Clinical Credibility as a Growth Lever</strong> → Screening for eating disorders isn't just compliance; it positions Noom as the <em>responsible, medically trusted</em> alternative to fad diets. In a category full of gimmicks, credibility becomes differentiation.
              </li>
              <li>
                <strong>Personalization Feels Like Science, Not Marketing</strong> → Gender-based insights, custom weight goals, and progress graphs aren't framed as "features" but as <em>data-driven truths</em>. This transforms personalization into authority, making users trust the app's pathway more than their own intuition.
              </li>
              <li>
                <strong>Gamification + Accountability = Dual Retention Engine</strong> → Coins create <em>micro-dopamine hits</em> while buddies create <em>macro-social pressure</em>. Together, these two levers sustain both habit-building and long-term commitment.
              </li>
              <li>
                <strong>Conversion Anchored in Psychology, Not Pricing</strong> → By only offering an annual plan (reframed as "12 months"), Noom aligns the business model with the <em>mental model of weight loss</em>. Users don't feel "sold to", they feel they're signing up for a proven journey that naturally takes a year.
              </li>
              <li>
                <strong>Ecosystem Strategy Extends Engagement Beyond Core App</strong> → With <em>Noom Vibe</em> for step-tracking, users live in Noom's orbit even outside the main app. This lowers churn by embedding the brand into everyday routines.
              </li>
              <li>
                <strong>Social Proof Isn't Just Marketing Copy</strong> → Graphs, statistics, and "Did you know?" trivia are strategically woven into onboarding to turn <em>abstract value</em> into <em>quantified evidence</em>. This gives skeptical users reasons to trust and commit.
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

