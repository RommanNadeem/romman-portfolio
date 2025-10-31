import Link from 'next/link';
import { Download, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Formal Resume - Muhammad Romman Nadeem | Romman Portfolio',
  description: 'Download or view Muhammad Romman Nadeem\'s formal resume.',
};

export default function ResumePage() {
  const resumeUrl = '/Muhammad-Romman-Nadeem-Resume-pdf.pdf';
  const resumeFileName = 'Muhammad-Romman-Nadeem-Resume-pdf.pdf';

  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                Formal Resume
              </h1>
              <p className="text-gray-600">
                Muhammad Romman Nadeem
              </p>
            </div>
            <a
              href={resumeUrl}
              download={resumeFileName}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-sm hover:shadow-md"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <span className="text-sm text-gray-600 font-medium">{resumeFileName}</span>
            <a
              href={resumeUrl}
              download={resumeFileName}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>
          <div className="w-full" style={{ height: 'calc(100vh - 300px)', minHeight: '600px' }}>
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
              className="w-full h-full border-0"
              title="Muhammad Romman Nadeem Resume"
              style={{ minHeight: '600px' }}
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Having trouble viewing?{' '}
            <a
              href={resumeUrl}
              download={resumeFileName}
              className="text-blue-600 hover:text-blue-700 underline font-medium"
            >
              Download the PDF
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

