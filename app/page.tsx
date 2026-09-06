import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { LogosSection } from "@/components/logos-section";
import { FeatureSection } from "@/components/feature-section";
import { HowItWorks } from "@/components/how-it-works";
import { Integrations } from "@/components/integrations";
import { Deployment } from "@/components/deployment";
import { CtaSection } from "@/components/cta-section";
import { FaqsSection } from "@/components/faqs-page";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <main className="flex-1">
        <Header />
        <HeroSection />
        <LogosSection />
        <FeatureSection />
        <HowItWorks />
        <Integrations />
        <Deployment />
        <CtaSection />
        <FaqsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
