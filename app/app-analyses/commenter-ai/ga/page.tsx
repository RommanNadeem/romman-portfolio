import Link from 'next/link';

export const metadata = {
  title: 'Commenter AI - GA Analysis | Romman Portfolio',
  description: 'Google Analytics analysis of Commenter AI user journey and conversion funnel.',
};

export default function GAAnalysisPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/app-analyses/commenter-ai"
            className="text-blue-600 hover:underline mb-4 inline-block"
          >
            ← Back to Commenter AI Analysis
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            GA Analysis
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Google Analytics analysis of how users move through the Commenter AI website from landing to sign-up.
          </p>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            1. Summary
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-4 text-gray-700">
            <p>
              This report analyzes how users move through the Commenter AI website using data from Google Analytics. It covers the main user journey from landing on the homepage to completing sign-up and identifies where most people drop off, why that happens, and what to fix.
            </p>
            <p className="font-semibold">
              <strong>Overall, Commenter AI attracts a healthy top-of-funnel audience.</strong>
            </p>
            <p>
              However, only a small fraction of users progress beyond the homepage. The data indicates that users understand what the product does, but they don't see enough reason or incentive to register quickly. Once they reach the registration form, most finish the process, which confirms that the main friction is before the form starts.
            </p>
          </div>
        </section>

        {/* Key Funnel Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            2. Key Funnel Metrics
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Funnel Step</th>
                  <th className="text-left p-4 font-bold text-gray-900">Active Users</th>
                  <th className="text-left p-4 font-bold text-gray-900">Sessions</th>
                  <th className="text-left p-4 font-bold text-gray-900">Conversion Rate</th>
                  <th className="text-left p-4 font-bold text-gray-900">Analysis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Homepage ( / )</td>
                  <td className="p-4 font-semibold text-gray-900">2,876</td>
                  <td className="p-4 font-semibold text-gray-900">3,230</td>
                  <td className="p-4 font-semibold text-green-600">100%</td>
                  <td className="p-4 text-gray-700">This is the main entry point and represents the top of the funnel. Most users start their journey here.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Register Page ( /register )</td>
                  <td className="p-4 font-semibold text-gray-900">252</td>
                  <td className="p-4 font-semibold text-gray-900">258</td>
                  <td className="p-4 font-semibold text-red-600">8.8%</td>
                  <td className="p-4 text-gray-700">Only about nine out of every hundred visitors go from the homepage to the registration page. This drop-off shows that the homepage isn't convincing enough to make people take action.</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700">Completed Sign-ups</td>
                  <td className="p-4 font-semibold text-gray-900">157</td>
                  <td className="p-4 font-semibold text-gray-900">2,038 sign_up events</td>
                  <td className="p-4 font-semibold text-yellow-600">62%</td>
                  <td className="p-4 text-gray-700">Of those who reach the registration page, nearly two-thirds complete the form. This means the flow is generally clear once users decide to sign up.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6">
            <p className="text-gray-700 font-semibold mb-2">Conversion Summary:</p>
            <ul className="space-y-1 text-gray-700">
              <li>Homepage to Register: <strong>8.8%</strong></li>
              <li>Register to Sign-up: <strong>62%</strong></li>
              <li>Overall Funnel Conversion: <strong>roughly 5.4%</strong></li>
            </ul>
            <p className="text-gray-700 mt-3">
              These numbers indicate that the key issue lies in motivating users to initiate the process, rather than in how they complete it.
            </p>
          </div>
        </section>

        {/* Supporting Event Data */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            3. Supporting Event Data
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <p className="text-gray-700 mb-4">
              The event breakdown gives more context to how users interact with the main sign-up elements.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Event</th>
                  <th className="text-left p-4 font-bold text-gray-900">User Count</th>
                  <th className="text-left p-4 font-bold text-gray-900">Insights</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">click_register_redirect</td>
                  <td className="p-4 font-semibold text-gray-900">64</td>
                  <td className="p-4 text-gray-700">This is the event recorded when users click the main "Sign Up" button in the navigation bar or hero section. Only 64 users triggered it, which is significantly lower than the 252 who reached the registration page. This suggests many users are entering the registration page through other routes such as direct links from marketing campaigns, content pieces, or previously shared URLs, instead of using the homepage CTA.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">form_start</td>
                  <td className="p-4 font-semibold text-gray-900">182</td>
                  <td className="p-4 text-gray-700">Out of the 252 users who reached the registration page, 182 started filling the form. This is a 72% start rate, which is relatively healthy.</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700">sign_up</td>
                  <td className="p-4 font-semibold text-gray-900">157</td>
                  <td className="p-4 text-gray-700">157 users completed the form and triggered the sign_up event. This means about 14% started the form but abandoned it midway. The likely reasons are the CAPTCHA verification or too many form fields.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* User Flow Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            4. User Flow Analysis
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-700 font-semibold mb-4">
              Problem Statement: The website follows a typical single-product SaaS flow; however, most visitors do not complete the first step.
            </p>
            <p className="text-gray-700 mb-4">Here's what the behavioral path shows:</p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>The homepage receives most of the traffic and engagement.</li>
              <li>Only a small portion of users move from the homepage to the registration page.</li>
              <li>Once on the registration page, a majority complete the form, showing good usability.</li>
              <li>Very few users return after completing sign-up, suggesting weak retention beyond onboarding.</li>
            </ol>
            <p className="text-gray-700 mt-4 italic">
              This pattern highlights a messaging and motivation issue rather than a technical one.
            </p>
          </div>
        </section>

        {/* Behavioral Insights */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            5. Behavioral Insights
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Observation</th>
                  <th className="text-left p-4 font-bold text-gray-900">Data Reference</th>
                  <th className="text-left p-4 font-bold text-gray-900">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Low transition from homepage to register</td>
                  <td className="p-4 text-gray-700">252 / 2,876 = 8.8%</td>
                  <td className="p-4 text-gray-700">Users are interested but not compelled to act. The homepage needs clearer value proof and stronger CTA placement.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">High completion once users start registering</td>
                  <td className="p-4 text-gray-700">62%</td>
                  <td className="p-4 text-gray-700">The issue is not with the form design but the motivation to start it.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Underused CTA click event</td>
                  <td className="p-4 text-gray-700">64 events</td>
                  <td className="p-4 text-gray-700">The main sign-up button is not attracting enough attention. Users are reaching registration through links shared in newsletters, referral posts, or from Unipile (a referrer seen in both GA and Clarity).</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700">Form abandonment rate (14%)</td>
                  <td className="p-4 text-gray-700">182 vs 157</td>
                  <td className="p-4 text-gray-700">Indicates mild friction; most users still finish the form, but some may leave due to CAPTCHA or slow validation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            6. Performance Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Key Metrics</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Largest Contentful Paint (LCP):</strong> <span className="text-red-600 font-semibold">8.5 seconds</span> (slow)</li>
                <li><strong>Interaction to Next Paint (INP):</strong> <span className="text-yellow-600 font-semibold">310 ms</span> (moderate)</li>
                <li><strong>Cumulative Layout Shift (CLS):</strong> <span className="text-red-600 font-semibold">0.69</span> (poor)</li>
                <li><strong>Overall Performance Score:</strong> <span className="text-red-600 font-semibold">52/100</span></li>
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-500 rounded-r p-6">
              <p className="text-gray-700">
                These figures show that users experience visible delays when loading the homepage or opening the registration page. Long load times affect first impressions and lead to early exits.
              </p>
            </div>
          </div>
        </section>

        {/* Geographic and Source Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            7. Geographic and Source Breakdown
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Top Regions (by sessions):</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>India:</strong> 28.8%</li>
                <li><strong>United States:</strong> 16.7%</li>
                <li><strong>Pakistan:</strong> 5.8%</li>
                <li><strong>Netherlands:</strong> 5.4%</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Top Sources:</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Google Organic:</strong> 1,071 sessions</li>
                <li><strong>Direct:</strong> 250 sessions</li>
                <li><strong>Referrals (Unipile and LinkedIn):</strong> 238 sessions</li>
                <li><strong>ChatGPT and AI-related sources:</strong> 24 sessions</li>
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6">
            <p className="text-gray-700">
              This mix shows strong organic discovery and returning traffic but limited referral diversity. Since most users arrive through search, the homepage needs to communicate the core value immediately. The bounce rate for organic users is higher than for direct traffic, which indicates they don't find what they expected fast enough.
            </p>
          </div>
        </section>

        {/* Main Drop-Off Causes */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            8. Main Drop-Off Causes
          </h2>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r p-6">
            <p className="text-gray-700">
              Based on the funnel analysis and behavioral insights, the primary drop-off points are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li><strong>Homepage → Register (91.2% drop-off):</strong> Users don't see enough value or urgency to register</li>
              <li><strong>Form abandonment (14%):</strong> CAPTCHA and multiple fields create friction</li>
              <li><strong>Performance issues:</strong> Slow load times cause early exits</li>
              <li><strong>Unclear CTAs:</strong> Main sign-up button underused compared to other entry points</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex justify-between">
          <Link 
            href="/app-analyses/commenter-ai/clarity"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Clarity Analysis
          </Link>
          <Link 
            href="/app-analyses/commenter-ai"
            className="text-blue-600 hover:underline font-medium"
          >
            Back to Commenter AI →
          </Link>
          <Link 
            href="/app-analyses/commenter-ai/design"
            className="text-blue-600 hover:underline font-medium"
          >
            Design Analysis →
          </Link>
        </div>
      </div>
    </main>
  );
}

