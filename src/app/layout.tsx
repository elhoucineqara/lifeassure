import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LifeAssure | Premium Protection for Your Legacy",
  description: "Experience the next level of life insurance with LifeAssure. Bespoke coverage designed to protect what matters most.",
  keywords: ["life insurance", "protection", "legacy", "premium insurance", "bespoke coverage"],
  authors: [{ name: "LifeAssure" }],
  openGraph: {
    title: "LifeAssure | Premium Protection for Your Legacy",
    description: "Experience the next level of life insurance with LifeAssure. Bespoke coverage designed to protect what matters most.",
    url: "https://lifeassure.vercel.app/",
    siteName: "LifeAssure",
    images: [
      {
        url: "/lifeassure_social_share.png",
        width: 1200,
        height: 630,
        alt: "LifeAssure - Premium Protection for Your Legacy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeAssure | Premium Protection for Your Legacy",
    description: "Experience the next level of life insurance with LifeAssure. Bespoke coverage designed to protect what matters most.",
    images: ["/lifeassure_social_share.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-adsense-account": "ca-pub-7245366364935377",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7245366364935377"
          crossorigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-ivory text-navy-900 selection:bg-gold-500/30`}
      >
        <Header />
        <div className="relative min-h-screen overflow-x-hidden">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
