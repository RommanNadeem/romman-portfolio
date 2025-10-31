import Link from 'next/link';

export const metadata = {
  title: 'CreditBook - Payment Acceptance Pilot | Romman Portfolio',
  description: 'Payment acceptance pilot run in Pakistan for MSMEs to accept digital payments through POS machines and QR codes.',
};

export default function CreditBookPage() {
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
            CreditBook
          </h1>
        </div>

        <hr className="border-gray-300 mb-12" />

        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Payment Acceptance Pilot
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-700 leading-relaxed mb-4">
              This report provides an overview of a payments acceptance pilot run in Pakistan by CreditBook in partnership with <strong>MCBI, OPAY, and Bank Alfalah</strong>. The pilot was conducted in <strong>Karachi and Lahore</strong> and aimed to deploy <strong>POS machines and QR Codes</strong> for MSMEs to accept digital payments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The pilot was conducted in order to determine whether payment acceptance was a viable initiative through which CB could better serve as a <strong>full stack ERP for retail businesses</strong>, <strong>increase revenue for these businesses</strong> by providing new digital payment acceptance methods, and enable access to a range of ancillary products, such as <strong>lending and savings</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The following report outlines the methodology, reflection, analysis, and recommendations of the report, supplemented by a discussion on the relevant regulations, as well as potential approaches to scale POS-based payment acceptance in the country.
            </p>
          </div>
        </section>

        {/* Key Partners */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Key Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <h3 className="font-bold text-gray-900 mb-2">MCBI</h3>
              <p className="text-sm text-gray-600">Payment Solutions Partner</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <h3 className="font-bold text-gray-900 mb-2">OPAY</h3>
              <p className="text-sm text-gray-600">Payment Solutions Partner</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <h3 className="font-bold text-gray-900 mb-2">Bank Alfalah</h3>
              <p className="text-sm text-gray-600">Banking Partner</p>
            </div>
          </div>
        </section>

        {/* Pilot Objectives */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Pilot Objectives
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r p-6">
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Determine whether payment acceptance was a viable initiative for CreditBook</li>
              <li>Better serve as a <strong>full stack ERP for retail businesses</strong></li>
              <li><strong>Increase revenue for businesses</strong> by providing new digital payment acceptance methods</li>
              <li>Enable access to a range of <strong>ancillary products</strong>, such as lending and savings</li>
            </ul>
          </div>
        </section>

        {/* Geographic Scope */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Geographic Scope
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Karachi</h3>
              <p className="text-gray-700">
                Pilot deployment of POS machines and QR codes in Karachi MSMEs
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lahore</h3>
              <p className="text-gray-700">
                Pilot deployment of POS machines and QR codes in Lahore MSMEs
              </p>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Payment Methods Deployed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">POS Machines</h3>
              <p className="text-gray-700">
                Point-of-sale machines deployed to MSMEs for accepting digital card payments
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">QR Codes</h3>
              <p className="text-gray-700">
                QR code payment acceptance for mobile-based digital transactions
              </p>
            </div>
          </div>
        </section>

        {/* Report Document */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Project Report
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-4">
              The comprehensive report includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Methodology</li>
              <li>Reflection and analysis</li>
              <li>Recommendations</li>
              <li>Discussion on relevant regulations</li>
              <li>Potential approaches to scale POS-based payment acceptance in Pakistan</li>
            </ul>
            <div className="bg-gray-50 rounded-lg p-4 mt-4">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Payment Acceptance Report</strong>
              </p>
              <p className="text-sm text-gray-600 italic">
                Note: Full report document available upon request
              </p>
            </div>
          </div>
        </section>

        {/* Interviews Section */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Interviews
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-700">
              Comprehensive stakeholder interviews were conducted as part of the pilot research and analysis process.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Process
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-4">
              The pilot process involved extensive research, stakeholder engagement, and iterative refinement of the payment acceptance solution.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Research Phase</h3>
                <p className="text-sm text-gray-600">
                  Deep MSME research to uncover pain points and shape financial solutions
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Pilot Deployment</h3>
                <p className="text-sm text-gray-600">
                  Drove QR & POS pilots with 40+ stakeholders and onboarded 3,000+ merchants
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Analysis & Insights</h3>
                <p className="text-sm text-gray-600">
                  Delivered insights that saved millions in misinvestments
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-1">Product Development</h3>
                <p className="text-sm text-gray-600">
                  Fueled "Bachat Box" pilot with 1,000+ signups based on research findings
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Key Outcomes
          </h2>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r p-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Successfully deployed POS machines and QR codes in Karachi and Lahore</li>
              <li>Onboarded <strong>3,000+ merchants</strong> during the pilot</li>
              <li>Conducted pilots with <strong>40+ stakeholders</strong></li>
              <li>Delivered insights that <strong>saved millions in misinvestments</strong></li>
              <li>Fueled "Bachat Box" pilot with <strong>1,000+ signups</strong></li>
            </ul>
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

