import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsSection() {
  return (
    <section className="mx-auto max-w-5xl py-24 md:py-28" id="faq">
      <div className="mx-4 grid grid-cols-1 border md:mx-0 md:grid-cols-2 md:border-x">
        <div className="space-y-4 px-4 pt-12 pb-10 md:border-r md:pl-10">
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Vos questions, nos réponses
          </h2>
          <p className="text-muted-foreground">
            Programme, adhésion, villes couvertes : tout ce qu&apos;il faut
            savoir avant de se lancer.
          </p>
        </div>
        <div className="place-content-center">
          <Accordion className="rounded-none border-x-0">
            {questions.map((item) => (
              <AccordionItem className="px-4" key={item.id} value={item.id}>
                <AccordionTrigger className="py-4 font-medium hover:no-underline focus-visible:ring-ring">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="flex h-14 items-center justify-center border-t md:col-span-2">
          <p className="text-muted-foreground">
            Une autre question ?{" "}
            <a className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground" href="#contact">
              Écrivez-nous
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

const questions = [
  {
    id: "item-1",
    title: "Comment fonctionne Mada Privileges ?",
    content:
      "Un programme unique de fidélité multi-partenaires. En tant que membre, vous cumulez des points chez toutes les enseignes du réseau et les échangez contre des privilèges. En tant qu'enseigne, vous gagnez en visibilité et fidélisez vos clients.",
  },
  {
    id: "item-2",
    title: "Combien coûte l'adhésion ?",
    content:
      "L'inscription est gratuite et sans engagement pour les membres. Pour les enseignes, les conditions sont simples : contactez-nous, nous étudions votre dossier sous 72 heures et vous accompagnons pas à pas lors de l'installation.",
  },
  {
    id: "item-3",
    title: "Comment les points sont-ils cumulés ?",
    content:
      "À chaque passage en caisse, présentez votre QR code (via l'application ou un SMS/USSD) : le commerçant valide en deux secondes et vos points sont crédités immédiatement. Zéro friction, zéro carte à plastiquer.",
  },
  {
    id: "item-4",
    title: "Comment mon enseigne est-elle référencée ?",
    content:
      "Une fois adhérente, vous publiez votre fiche et vos offres. Votre enseigne apparaît alors dans les recherches géolocalisées de tous les membres, près de chez eux comme à l'autre bout de la ville.",
  },
  {
    id: "item-5",
    title: "Quelles villes sont couvertes ?",
    content:
      "Le programme démarre à Antananarivo et s'étend à Toamasina, Mahajanga et Antsirabe en 2027. Chaque enseigne rejoint le réseau là où elle opère.",
  },
  {
    id: "item-6",
    title: "Qui porte la plateforme ?",
    content:
      "Mada Privileges est conçu et opéré par EDS Group, cabinet de transformation digitale basé à Antananarivo, reconnu en cybersécurité et organisateur du salon national CIRT-MDG.",
  },
  {
    id: "item-7",
    title: "Comment commencer ?",
    content:
      "Membres : inscrivez-vous gratuitement en moins de deux minutes. Enseignes : candidatez comme partenaire — notre équipe vous recontacte sous 72 heures.",
  },
];