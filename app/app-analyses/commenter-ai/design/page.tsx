import Link from 'next/link';

export const metadata = {
  title: 'Commenter AI - Design Analysis | Romman Portfolio',
  description: 'Comprehensive design and UX analysis of Commenter AI website.',
};

export default function DesignAnalysisPage() {
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
            Design Analysis
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Comprehensive visual design and UX analysis of the Commenter AI website.
          </p>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* Overall Design Impression */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            1. Overall Design Impression
          </h2>
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r p-6">
            <p className="text-gray-700 leading-relaxed text-lg">
              The website feels functional but outdated — <strong>visually cluttered, inconsistent, and conversion-inefficient</strong>. It communicates enthusiasm but not trust. It looks more like a browser extension landing page than a modern SaaS product.
            </p>
          </div>
        </section>

        {/* Visual Design & Brand Trust */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            A. Visual Design & Brand Trust
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Problem</th>
                  <th className="text-left p-4 font-bold text-gray-900">Why It Matters</th>
                  <th className="text-left p-4 font-bold text-gray-900">Recommended Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Inconsistent fonts, spacing, and shadows</strong></td>
                  <td className="p-4 text-gray-700">Makes it look like a patchwork of templates. Reduces brand credibility.</td>
                  <td className="p-4 text-gray-700">Define a design system (typography scale, spacing units, component library). Use consistent H1–H4 hierarchy.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Overuse of blue gradients</strong></td>
                  <td className="p-4 text-gray-700">Creates visual fatigue and flattens hierarchy. All CTAs and backgrounds compete for attention.</td>
                  <td className="p-4 text-gray-700">Keep blue for background, introduce contrast CTAs (teal, amber, or gradient blue). Use white/neutral sections to break monotony.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Blurry logos (Google News, FOX, MarketWatch)</strong></td>
                  <td className="p-4 text-gray-700">Damages authenticity; low-res logos make users doubt legitimacy.</td>
                  <td className="p-4 text-gray-700">Replace with high-resolution, monochrome brand logos. Use "Featured in" badge pattern for credibility.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Stock-style illustrations and icons</strong></td>
                  <td className="p-4 text-gray-700">Feel generic and don't reflect product tone.</td>
                  <td className="p-4 text-gray-700">Replace with branded illustrations showing actual comment flows or dashboards.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Outdated gradients & rounded blocks</strong></td>
                  <td className="p-4 text-gray-700">Feels early-2020 and doesn't reflect an AI SaaS aesthetic.</td>
                  <td className="p-4 text-gray-700">Use modern flat design with subtle depth, cleaner shadows, and uniform card radii.</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700"><strong>Red CTA buttons clash with blue</strong></td>
                  <td className="p-4 text-gray-700">The color combination feels harsh; red implies warnings.</td>
                  <td className="p-4 text-gray-700">Replace with teal (#00B5AD) or warm yellow (#FFB800). Test hover animation for engagement.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Information Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            B. Information Architecture
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Problem</th>
                  <th className="text-left p-4 font-bold text-gray-900">Why It Matters</th>
                  <th className="text-left p-4 font-bold text-gray-900">Recommended Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Homepage tries to do everything</strong></td>
                  <td className="p-4 text-gray-700">Overwhelms new users; no clear flow from awareness → interest → conversion.</td>
                  <td className="p-4 text-gray-700">Rebuild homepage flow: Hero → Social Proof → Demo → Features → Pricing → FAQ → CTA. Keep one focused story per scroll segment.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Repetitive content (testimonials repeated)</strong></td>
                  <td className="p-4 text-gray-700">Creates fatigue and feels like filler content.</td>
                  <td className="p-4 text-gray-700">Merge all testimonials into one section with a rotating carousel.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>About page adds no value</strong></td>
                  <td className="p-4 text-gray-700">Users seeking product info don't need founder letters; it distracts from conversion.</td>
                  <td className="p-4 text-gray-700">Remove "About" page; integrate story and team snippet into homepage footer.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Multiple "Results" sections across pages</strong></td>
                  <td className="p-4 text-gray-700">Fragmented validation weakens overall proof.</td>
                  <td className="p-4 text-gray-700">Combine analytics screenshots, charts, and DMs into a single "Proof" page.</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700"><strong>Pricing buried too deep</strong></td>
                  <td className="p-4 text-gray-700">High-intent users shouldn't scroll multiple screens to find pricing.</td>
                  <td className="p-4 text-gray-700">Add pricing link in hero and top navigation with CTA "Start Free Trial".</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Homepage UX */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            C. Homepage UX
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-gray-900">Problem</th>
                  <th className="text-left p-4 font-bold text-gray-900">Why It Matters</th>
                  <th className="text-left p-4 font-bold text-gray-900">Recommended Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Hero lacks interactivity</strong></td>
                  <td className="p-4 text-gray-700">Claims "save time" but shows no real demo — users can't <em>see</em> the value.</td>
                  <td className="p-4 text-gray-700">Add an interactive demo (generate a sample LinkedIn comment instantly).</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Too many competing headlines</strong></td>
                  <td className="p-4 text-gray-700">Visitors lose focus; every section feels like a new sales pitch.</td>
                  <td className="p-4 text-gray-700">Reduce copy to one clear message per scroll section.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>CTA not visible after scrolling</strong></td>
                  <td className="p-4 text-gray-700">Once users scroll, the main CTA disappears; no persistent "Start Free Trial."</td>
                  <td className="p-4 text-gray-700">Add sticky CTA bar or floating "Try Free" button.</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 text-gray-700"><strong>Low visual trust</strong></td>
                  <td className="p-4 text-gray-700">No real faces, only icons and logos.</td>
                  <td className="p-4 text-gray-700">Add customer faces, LinkedIn screenshots, or video testimonials.</td>
                </tr>
                <tr>
                  <td className="p-4 text-gray-700"><strong>Overuse of marketing clichés</strong></td>
                  <td className="p-4 text-gray-700">Feels unoriginal and sales-heavy.</td>
                  <td className="p-4 text-gray-700">Reframe copy to tangible results ("Write 15 comments in 5 minutes. Get 2x engagement.").</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Registration Flow */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            D. Registration Flow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Requires CAPTCHA</h3>
              <p className="text-gray-700 mb-3">
                Friction during signup increases drop-off, especially on mobile.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Add Google and Apple one-click sign-in. Simplify to email + password only.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">UI lacks delight</h3>
              <p className="text-gray-700 mb-3">
                For an AI product, the form looks basic.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Use microcopy like "Let's personalize your commenting style" with subtle visuals.
              </p>
            </div>
          </div>
        </section>

        {/* Content Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            E. Content Strategy
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Walls of text in feature sections</h3>
              <p className="text-gray-700 mb-2">
                Hard to scan, especially on mobile; users skip reading.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Break into short visual stories: icon + 1 line benefit + 1 supporting sentence.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Inconsistent tone (formal vs. playful)</h3>
              <p className="text-gray-700 mb-2">
                Feels like multiple authors; weakens brand personality.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Pick a single tone — friendly-professional, like Grammarly.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">No headline hierarchy</h3>
              <p className="text-gray-700 mb-2">
                Every line screams importance; nothing guides the eye.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Use "inverted pyramid" — strong headline → benefit → proof → CTA.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Founder letter too long</h3>
              <p className="text-gray-700 mb-2">
                Users rarely read long blocks; the story loses impact.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Replace with a 3-line "Why we built Commenter.ai" quote in hero/footer.
              </p>
            </div>
          </div>
        </section>

        {/* Conversion & Psychology */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            F. Conversion & Psychology
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">No visual "Aha!" moment</h3>
              <p className="text-gray-700 mb-2">
                Users never see what success looks like — only text claims.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Show real "Before / After" comment examples right in the hero section.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Repetitive CTAs dilute urgency</h3>
              <p className="text-gray-700 mb-2">
                When every section says "Start Free Trial", users tune out.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Use contextual CTAs — e.g., "See Comment Examples", "Try Demo", "View Plans".
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Weak social proof</h3>
              <p className="text-gray-700 mb-2">
                Testimonials look copy-pasted; lack human authenticity.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Use verified LinkedIn screenshots or profile snapshots with faces and company names.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Red CTAs break trust</h3>
              <p className="text-gray-700 mb-2">
                Feels aggressive, not aspirational.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Switch to teal or yellow; A/B test for CTR improvement.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">No pricing transparency in top nav</h3>
              <p className="text-gray-700 mb-2">
                Users who scroll for pricing lose patience.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Add a persistent pricing button in top navigation.
              </p>
            </div>
          </div>
        </section>

        {/* Responsiveness & Accessibility */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            G. Responsiveness & Accessibility
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Mobile layout feels compressed</h3>
              <p className="text-gray-700 mb-2">
                LinkedIn users often browse on mobile; poor layout = high bounce.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Rebuild with mobile-first grid. Use readable line height and single-column sections.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Low color contrast (blue on blue)</h3>
              <p className="text-gray-700 mb-2">
                Text legibility suffers.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Follow WCAG contrast ratio {'>'}4.5. Lighten text backgrounds or darken text.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Small tap areas on buttons/accordions</h3>
              <p className="text-gray-700 mb-2">
                Frustrates mobile users.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Increase touch targets to 48×48px minimum.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">No dark-mode readiness</h3>
              <p className="text-gray-700 mb-2">
                Breaks immersion for LinkedIn users used to dark mode.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Introduce optional dark/light theme.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Page */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            H. Pricing Page
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Visually dense comparison chart</h3>
              <p className="text-gray-700 mb-2">
                Users don't immediately see key value differences.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Highlight one "recommended" plan with background accent and clear badge.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Too much small text in bullet lists</h3>
              <p className="text-gray-700 mb-2">
                Feels like fine print.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Group features by value themes ("Smart automation," "Personalization," "Engagement tracking").
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">No visual anchor (savings highlight)</h3>
              <p className="text-gray-700 mb-2">
                "Up to 30% off" is text-only.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Add clear tag visual ("Save $97/year") under toggle.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">No testimonial near pricing</h3>
              <p className="text-gray-700 mb-2">
                No reassurance near transaction decision.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Add a 2-line testimonial carousel right under the pricing plans.
              </p>
            </div>
          </div>
        </section>

        {/* Results & Proof Page */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            I. Results & Proof Page
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Charts look low-resolution</h3>
              <p className="text-gray-700 mb-2">
                Users question authenticity of "before/after" metrics.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Recreate charts with clean visuals, labeled axes, and annotations.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">DM screenshots inconsistent in style</h3>
              <p className="text-gray-700 mb-2">
                Mix of cropped shapes and fuzzy edges.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Standardize testimonial cards; use verified LinkedIn profile icons.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3">Too long, no CTA in between</h3>
              <p className="text-gray-700 mb-2">
                Users scroll through results but have no action prompt.
              </p>
              <p className="text-gray-700 text-sm italic">
                <strong>Fix:</strong> Insert CTA banner after first success story ("Want results like this?").
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex justify-between">
          <Link 
            href="/app-analyses/commenter-ai/ga"
            className="text-blue-600 hover:underline font-medium"
          >
            ← GA Analysis
          </Link>
          <Link 
            href="/app-analyses/commenter-ai"
            className="text-blue-600 hover:underline font-medium"
          >
            Back to Commenter AI →
          </Link>
        </div>
      </div>
    </main>
  );
}

