import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import "./legal.css";

const GA_ID = "G-D9S2Z5KWHR";

const siteUrl = "https://diyinvestingcourse.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DIY Investing Course | A Free, Complete Investing Course",
    template: "%s | DIY Investing Course"
  },
  description: "Learn how to invest for yourself with a free, beginner-friendly 27-lesson course. Understand stocks, bonds, funds, portfolios, risk, taxes, and more—no account required.",
  applicationName: "DIY Investing Course",
  creator: "DIY Investing Course",
  publisher: "DIY Investing Course",
  category: "education",
  keywords: [
    "DIY investing course", "how to invest for beginners", "self-directed investing",
    "investing education", "stock market basics", "index funds explained",
    "portfolio diversification", "investing without an advisor", "financial education"
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "DIY Investing Course",
    title: "Know what you own. Know why. | DIY Investing Course",
    description: "A complete, free, self-paced investing course: 27 lessons from money foundations to building a portfolio you understand.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "DIY Investing Course — Know what you own. Know why." }]
  },
  twitter: {
    card: "summary_large_image",
    title: "DIY Investing Course — Learn to invest for yourself",
    description: "27 free, beginner-friendly lessons. No account, email, or stock picks required.",
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
