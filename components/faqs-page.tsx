import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { platformLabels, platformLinks } from "@/lib/links";
import { ArrowRightIcon } from "lucide-react";

export function FaqsSection() {
  return (
    <section className="mx-auto max-w-5xl py-24 md:py-28" id="faq">
      <div className="mx-4 grid grid-cols-1 border md:mx-0 md:grid-cols-2 md:border-x">
        <div
          className="space-y-4 px-4 pt-12 pb-10 md:border-r md:pl-10"
          data-animate="heading"
        >
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            Vos questions, nos réponses
          </h2>
          <p className="text-muted-foreground">
            Gratuité, fonctionnement des cartes, adhésion des enseignes : tout ce
            qu&apos;il faut savoir avant de se lancer.
          </p>
        </div>
        <div className="place-content-center" data-animate="block">
          {/* Première question ouverte par défaut (cahier de contenu, § 5.9). */}
          <Accordion
            className="rounded-none border-x-0"
            defaultValue={["item-1"]}
          >
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
        {/*
          Le § 4 place « Commencer gratuitement » dans la FAQ, au même titre
          que la navigation, l'accroche et la rubrique membres : c'est le
          dernier endroit où lever une objection avant de convertir.
        */}
        <div className="flex flex-col items-center justify-center gap-4 border-t px-4 py-8 md:col-span-2 md:flex-row md:justify-between md:px-10">
          <p className="text-center text-muted-foreground md:text-left">
            Une autre question ?{" "}
            <Link
              className="font-medium text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
              href="/#contact"
            >
              Écrivez-nous
            </Link>
          </p>
          <Button
            data-outbound="register"
            nativeButton={false}
            render={<a href={platformLinks.register} />}
            size="lg"
          >
            {platformLabels.register}
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  );
}

const questions = [
  {
    id: "item-1",
    title: "Mada Privilèges, c'est payant ?",
    content:
      "Non. La création de compte et l'usage des cartes sont gratuits pour les membres, sans abonnement ni engagement. Ce sont les enseignes qui souscrivent au service pour animer leur programme.",
  },
  {
    // La question la plus posée : le cahier demande qu'elle soit traitée
    // explicitement, le site ne devant jamais suggérer un cumul commun.
    id: "item-2",
    title: "Mes points sont-ils valables chez tous les commerçants ?",
    content:
      "Non, et c'est important : chaque enseigne gère son propre programme. Les points ou tampons obtenus chez un commerçant s'utilisent chez lui uniquement. Ce que Mada Privilèges vous apporte, c'est de retrouver toutes vos cartes au même endroit, au lieu d'en perdre la moitié.",
  },
  {
    id: "item-3",
    title: "Faut-il installer une application ?",
    content:
      "Non. La plateforme fonctionne dans votre navigateur, sur téléphone comme sur ordinateur. Vous pouvez l'ajouter à votre écran d'accueil pour y accéder comme à une application, et vos cartes restent consultables même sans connexion.",
  },
  {
    id: "item-4",
    title: "Comment ajouter la carte d'un commerçant ?",
    content:
      "En scannant le QR code affiché dans son établissement. La carte s'ajoute automatiquement à votre portefeuille, sans saisie.",
  },
  {
    id: "item-5",
    title: "Je suis commerçant : comment rejoindre le réseau ?",
    content:
      "Vous créez votre espace partenaire en ligne, vous configurez votre programme — mécanique, seuil, récompense — puis vous affichez votre QR code au comptoir. Aucune intégration technique n'est nécessaire. Notre équipe peut vous accompagner à la mise en place.",
  },
  {
    id: "item-6",
    title: "Le service est-il disponible en dehors d'Antananarivo ?",
    content:
      "Oui. Toute enseigne peut créer son programme, où qu'elle se trouve à Madagascar, et ses clients y accèdent immédiatement. Le réseau est simplement plus dense dans la capitale à ce stade.",
  },
  {
    id: "item-7",
    title: "Que deviennent mes données personnelles ?",
    content:
      "Elles servent uniquement à gérer votre compte et vos cartes. Elles ne sont ni revendues ni cédées à des tiers. Le détail figure dans notre politique de confidentialité.",
  },
];
