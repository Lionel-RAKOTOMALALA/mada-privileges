import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { Programme } from "@/components/programme";
import { WhereToUse } from "@/components/where-to-use";
import { Members } from "@/components/members";
import { Partners } from "@/components/partners";
import { CardFormats } from "@/components/card-formats";
import { LogosSection } from "@/components/logos-section";
import { About } from "@/components/about";
import { FaqsSection } from "@/components/faqs-page";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

/*
 * Ordre des rubriques : cahier de contenu, § 3.
 *   1 Accroche · 2 Le programme · 3 Où l'utiliser · 4 Pour les membres
 *   5 Pour les enseignes · 6 Les quatre formats · 7 Secteurs couverts
 *   8 Qui porte la plateforme · 9 FAQ · Contact
 *
 * La rubrique « Déploiement par ville » a été retirée (§ 2 : engagement public
 * prématuré sur un calendrier non maîtrisé).
 */
export default function Page() {
  return (
    <>
      {/* Lie tous les `data-animate` de la page — cf. scroll-reveal.tsx. */}
      <ScrollReveal />
      <main className="flex-1">
        <Header />
        <HeroSection />
        <Programme />
        <WhereToUse />
        <Members />
        <Partners />
        <CardFormats />
        <LogosSection />
        <About />
        <FaqsSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
