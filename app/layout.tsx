import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  title: "Haris Ibrahim | Strategic Marketing & Growth Leader",
  description:
    "Portfolio and resume for Haris Ibrahim, a Lahore-based marketing leader with deep experience in industrial automation, telecom, and data-driven growth.",
  icons: {
    icon: '/icon.svg',
  },
  metadataBase: new URL('https://haris-portfolio.vercel.app'),
  openGraph: {
    title: "Haris Ibrahim | Strategic Marketing & Growth Leader",
    description:
      "Explore Haris Ibrahim's marketing leadership experience across Tensai Technologies, Avanceon, INTECH, Jazz, and BAT Pakistan.",
    url: 'https://haris-portfolio.vercel.app',
    siteName: 'Haris Ibrahim Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Haris Ibrahim | Strategic Marketing & Growth Leader",
    description:
      "Strategic CMO-level operator focused on branding, digital growth, and industrial marketing transformation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="clarity-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u0h9p4f2x6");
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Haris Ibrahim",
              "jobTitle": "Chief Marketing Officer",
              "url": "https://haris-portfolio.vercel.app/",
              "email": "mailto:harisibrahim1@yahoo.com",
              "telephone": "+92-300-8817098",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "245/A New Chauburji Park, Multan Road",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "addressCountry": "Pakistan"
              }
            })
          }}
        />
      </head>
      <body className="antialiased" style={{ background: 'transparent' }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

