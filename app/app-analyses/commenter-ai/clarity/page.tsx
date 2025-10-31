import Link from 'next/link';

export const metadata = {
  title: 'Commenter AI - Clarity Analysis | Romman Portfolio',
  description: 'Microsoft Clarity behavioral analysis of Commenter AI user interactions and drop-off patterns.',
};

export default function ClarityAnalysisPage() {
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
            Clarity Analysis
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Microsoft Clarity behavioral analysis of how real users interact with the Commenter AI website.
          </p>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            1. Overview
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              This report summarizes findings from Microsoft Clarity, covering how real users interact with the Commenter AI website. It focuses on session patterns, engagement levels, drop-off points, and technical or design issues that affect conversions.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Users generally spend around <strong>2 minutes actively engaging</strong>, but most leave before reaching the core product experience.
            </p>
          </div>
        </section>

        {/* Key User Behavior Insights */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            2. Key User Behavior Insights
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Metric</th>
                  <th className="text-left p-4 font-bold text-gray-900">Value</th>
                  <th className="text-left p-4 font-bold text-gray-900">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Total Sessions</td>
                  <td className="p-4 font-semibold text-gray-900">2,357</td>
                  <td className="p-4 text-gray-700">Full recorded traffic for the period</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Bot Sessions</td>
                  <td className="p-4 font-semibold text-gray-900">2,108</td>
                  <td className="p-4 text-gray-700">About 47% of total traffic was low-quality or automated</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Pages per Session</td>
                  <td className="p-4 font-semibold text-gray-900">2.8</td>
                  <td className="p-4 text-gray-700">Users visit a couple of pages but don't explore deeply</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700">Active Time</td>
                  <td className="p-4 font-semibold text-gray-900">2.1 minutes</td>
                  <td className="p-4 text-gray-700">Users engage briefly, then leave or get stuck</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6">
            <p className="text-gray-700">
              <strong>Insight:</strong> The data shows strong top-of-funnel visibility but low progression through the site. Most users never experience the product's main feature before exiting.
            </p>
          </div>
        </section>

        {/* Intent and Engagement Levels */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            3. Intent and Engagement Levels
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Engagement Type</th>
                  <th className="text-left p-4 font-bold text-gray-900">Share</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Low Intent (45%)</strong></td>
                  <td className="p-4 text-gray-700">Users browse briefly and exit. Most don't interact with the CTA or registration form.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Medium Intent (37%)</strong></td>
                  <td className="p-4 text-gray-700">Users explore features and pricing but remain unsure what to do next.</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700"><strong>High Intent (18%)</strong></td>
                  <td className="p-4 text-gray-700">Users navigate to pages like "Custom" or "Posts," which are closer to activation.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6">
            <p className="text-gray-700">
              <strong>Insight:</strong> The majority of sessions fall under low or medium intent, meaning users are curious but not yet convinced or guided effectively.
            </p>
          </div>
        </section>

        {/* Conversion Funnel */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            4. Conversion Funnel
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
            <p className="text-gray-700 mb-4 font-mono text-lg">
              Homepage (100%) → Register (13%) → Custom (37%) → Posts (29%)
            </p>
            <p className="text-gray-700 font-semibold text-red-600">
              Only about <strong>1.4% of all sessions</strong> result in a meaningful conversion.
            </p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r p-6">
            <p className="text-gray-700">
              The largest drop occurs between the <strong>homepage and the registration page</strong>, indicating unclear messaging or low motivation to sign up.
            </p>
          </div>
        </section>

        {/* Friction and Interaction Patterns */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            5. Friction and Interaction Patterns
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Behavior</th>
                  <th className="text-left p-4 font-bold text-gray-900">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Dead Clicks (15%)</strong></td>
                  <td className="p-4 text-gray-700">Users click non-interactive elements or slow buttons. This often happens on the registration and pricing pages.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Quick Backs (10%)</strong></td>
                  <td className="p-4 text-gray-700">Users hit back quickly, usually because the page didn't load fast enough or content didn't match their expectation.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Rage Clicks (1%)</strong></td>
                  <td className="p-4 text-gray-700">Users repeatedly click upgrade or subscribe buttons that don't respond immediately.</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700"><strong>Excessive Scrolls (0%)</strong></td>
                  <td className="p-4 text-gray-700">Most pages are short, so users either find what they need quickly or leave early.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6">
            <p className="text-gray-700">
              <strong>Insight:</strong> These behaviors show that friction is mostly technical or design-related, not due to confusion about what the product does.
            </p>
          </div>
        </section>

        {/* Top Traffic Sources and Regions */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            6. Top Traffic Sources and Regions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Sources</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Google Search:</strong> 1,071 sessions</li>
                <li><strong>Unipile:</strong> 133 sessions</li>
                <li><strong>ChatGPT:</strong> 23 sessions</li>
                <li><strong>LinkedIn:</strong> 19 sessions</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Top Regions</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>India:</strong> 28.8%</li>
                <li><strong>United States:</strong> 16.7%</li>
                <li><strong>Pakistan:</strong> 5.8%</li>
                <li><strong>Netherlands:</strong> 5.4%</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Traffic Channels</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>Organic Search:</strong> 47%</li>
              <li><strong>Direct:</strong> 11%</li>
              <li><strong>Referral:</strong> 10%</li>
              <li><strong>AI or external tools:</strong> 1%</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6 mt-6">
            <p className="text-gray-700">
              Organic search drives the majority of visits, while direct and referral traffic shows higher intent. The homepage needs to better convert search traffic that lands cold from Google.
            </p>
          </div>
        </section>

        {/* Site Performance */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            7. Site Performance
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Metric</th>
                  <th className="text-left p-4 font-bold text-gray-900">Result</th>
                  <th className="text-left p-4 font-bold text-gray-900">Industry Benchmarks</th>
                  <th className="text-left p-4 font-bold text-gray-900">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">LCP (Largest Contentful Paint)</td>
                  <td className="p-4 font-semibold text-red-600">8.5 s</td>
                  <td className="p-4 text-gray-700">≤ 2.5 s</td>
                  <td className="p-4 text-gray-700">Slow initial load causes early exits.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">INP (Interaction Delay)</td>
                  <td className="p-4 font-semibold text-yellow-600">310 ms</td>
                  <td className="p-4 text-gray-700">≤ 200 ms</td>
                  <td className="p-4 text-gray-700">Buttons feel unresponsive.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">CLS (Layout Shift)</td>
                  <td className="p-4 font-semibold text-red-600">0.69</td>
                  <td className="p-4 text-gray-700">≤ 0.1</td>
                  <td className="p-4 text-gray-700">Page elements shift during load, especially on mobile.</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700">Performance Score</td>
                  <td className="p-4 font-semibold text-red-600">52/100</td>
                  <td className="p-4 text-gray-700">≥ 85 / 100</td>
                  <td className="p-4 text-gray-700">Below the acceptable range for web apps.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r p-6">
            <p className="text-gray-700">
              <strong>Insight:</strong> The site's performance issues are among the biggest contributors to poor engagement and drop-offs.
            </p>
          </div>
        </section>

        {/* Insights from User Recordings */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            8. Insights from User Recordings
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1. Early Paywall
              </h3>
              <p className="text-gray-700 mb-3">
                Many users try exploring "Posts" or "Custom" but get prompted to upgrade before they can experience the product. This causes early exits.
              </p>
              <p className="text-gray-700 italic">
                <strong>Recommendation:</strong> Allow one premium action for free or provide an interactive preview.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                2. Long Instructions
              </h3>
              <p className="text-gray-700 mb-3">
                Some pages, especially onboarding, contain long paragraphs explaining how to use the product. Users scroll past without reading.
              </p>
              <p className="text-gray-700 italic">
                <strong>Recommendation:</strong> Replace with short, guided steps or an interactive checklist.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                3. Broken or Slow Buttons
              </h3>
              <p className="text-gray-700 mb-3">
                "Upgrade" and "Subscribe" buttons often take a second or two to respond, leading to repeated clicks.
              </p>
              <p className="text-gray-700 italic">
                <strong>Recommendation:</strong> Fix delays and show visual feedback when users click.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                4. Form and CAPTCHA Friction
              </h3>
              <p className="text-gray-700 mb-3">
                Some users drop off after facing reCAPTCHA or multiple required fields during sign-up.
              </p>
              <p className="text-gray-700 italic">
                <strong>Recommendation:</strong> Add Google or Apple sign-in to simplify access.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                5. Slow Load and Video Embeds
              </h3>
              <p className="text-gray-700 mb-3">
                Tutorial videos and heavy assets slow the site down.
              </p>
              <p className="text-gray-700 italic">
                <strong>Recommendation:</strong> Compress assets and lazy-load non-essential elements.
              </p>
            </div>
          </div>
        </section>

        {/* Conversion and Retention Patterns */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            9. Conversion and Retention Patterns
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <ul className="space-y-3 text-gray-700">
              <li>Most conversions come from users who revisit the site, especially those who explored "Custom" or "Posts."</li>
              <li>New users who encounter the paywall early rarely return.</li>
              <li>Returning users tend to spend more time, showing that value realization happens only after multiple sessions.</li>
            </ul>
            <p className="mt-4 text-gray-700 italic">
              This pattern suggests that the trial experience should be extended or restructured to let users reach value faster.
            </p>
          </div>
        </section>

        {/* Key Recommendations */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            10. Key Recommendations
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Focus Area</th>
                  <th className="text-left p-4 font-bold text-gray-900">Recommendation</th>
                  <th className="text-left p-4 font-bold text-gray-900">Expected Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Homepage Flow</td>
                  <td className="p-4 text-gray-700">Combine "Features," "Pricing," and "Results" into one page with a clear story and CTA.</td>
                  <td className="p-4 text-gray-700">Higher homepage-to-register transition.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Signup Simplicity</td>
                  <td className="p-4 text-gray-700">Enable Google and Apple login options.</td>
                  <td className="p-4 text-gray-700">Faster sign-up and fewer form drop-offs.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Performance</td>
                  <td className="p-4 text-gray-700">Compress videos and images, defer scripts.</td>
                  <td className="p-4 text-gray-700">Shorter load time and lower bounce rate.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Paywall Placement</td>
                  <td className="p-4 text-gray-700">Let users complete one action before seeing the upgrade screen.</td>
                  <td className="p-4 text-gray-700">More users reach the "aha" moment.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700">Trust Signals</td>
                  <td className="p-4 text-gray-700">Add OAuth and security badges near sign-up fields.</td>
                  <td className="p-4 text-gray-700">Higher trust and sign-up intent.</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700">Mobile Optimization</td>
                  <td className="p-4 text-gray-700">Fix layout shifts and ensure visible CTAs on small screens.</td>
                  <td className="p-4 text-gray-700">Better conversion for mobile traffic.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            11. Summary
          </h2>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r p-6">
            <p className="text-gray-700 leading-relaxed">
              Clarity data shows that most visitors leave early because they either face technical delays or don't see immediate value. Users want to test the product quickly and understand what it can do before being asked to pay.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If the homepage experience, performance, and paywall timing are improved, Commenter AI could significantly increase both user activation and upgrade rates within a short period.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex justify-between">
          <Link 
            href="/app-analyses/commenter-ai"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to Commenter AI Analysis
          </Link>
          <div className="flex gap-4">
            <Link 
              href="/app-analyses/commenter-ai/ga"
              className="text-blue-600 hover:underline font-medium"
            >
              GA Analysis →
            </Link>
            <Link 
              href="/app-analyses/commenter-ai/design"
              className="text-blue-600 hover:underline font-medium"
            >
              Design Analysis →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

