import Hero from "@/components/marketing/Hero";
import Solutions from "@/components/marketing/Solutions";
import SocialProof from "@/components/marketing/SocialProof";
import TrustMetrics from "@/components/marketing/TrustMetrics";
import Process from "@/components/marketing/Process";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import Testimonials from "@/components/marketing/Testimonials";
import FAQ from "@/components/marketing/FAQ";
import CTA from "@/components/marketing/CTA";
import LatestInsights from "@/components/marketing/LatestInsights";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory selection:bg-gold-500/30">
      <Hero />
      <SocialProof />
      <Solutions />
      <Process />
      <FeatureGrid />
      <Testimonials />
      <TrustMetrics />
      <LatestInsights />
      <FAQ />
      <CTA />
    </main>
  );
}
