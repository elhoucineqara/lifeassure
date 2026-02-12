import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LifeAssure | Premium Protection for Your Legacy",
  description: "Experience the next level of life insurance with LifeAssure. Bespoke coverage designed to protect what matters most.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
