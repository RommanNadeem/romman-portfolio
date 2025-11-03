import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  title: "AI Product Manager Portfolio | Romman Nadeem",
  description: "AI product manager and builder. Case studies on Aura Health conversion lifts, AI agents, and voice companions. Book a call.",
  icons: {
    icon: '/icon.svg',
  },
  metadataBase: new URL('https://romman-portfolio.vercel.app'),
  openGraph: {
    title: "AI Product Manager Portfolio | Romman Nadeem",
    description: "AI product manager and builder. Case studies on Aura Health conversion lifts, AI agents, and voice companions.",
    url: 'https://romman-portfolio.vercel.app',
    siteName: 'Romman Nadeem Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Product Manager Portfolio | Romman Nadeem",
    description: "AI product manager and builder. Case studies on Aura Health conversion lifts, AI agents, and voice companions.",
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
              "name": "Muhammad Romman Nadeem",
              "jobTitle": "AI Product Manager",
              "url": "https://romman-portfolio.vercel.app/",
              "email": "mailto:romman818@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/muhammadromman"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased" style={{ background: 'transparent' }}>
        <Script
          id="cal-com-embed"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", "30min", {origin:"https://app.cal.com"});
              Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
            `,
          }}
        />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

