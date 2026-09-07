import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FullWidthDivider } from "@/components/full-width-divider";
import { Logo } from "@/components/logo";
import { HeroReveal } from "@/components/motion/hero-reveal";
import { ArrowRightIcon } from "lucide-react";

const stats = [
  {
    value: "01",
    label: "compte unique pour tous vos achats, tous vos commerces",
  },
  {
    value: "07",
    label: "secteurs réunis dans un même programme",
  },
  {
    value: "2027",
    label: "quatre villes connectées au réseau",
  },
];

export function HeroSection() {
  return (
    <section
      className="surface-invert relative overflow-hidden bg-foreground text-background"
      id="accueil"
    >
      {/* Arrière-plan : grille + halo + filets verticaux */}
      <div aria-hidden="true" className="absolute inset-0 -z-1">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_35%,transparent_78%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(55%_45%_at_50%_8%,rgba(255,255,255,0.08),transparent_70%)]" />
        <div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-background/20 to-transparent" />
        <div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-background/20 to-transparent" />
      </div>

      <HeroReveal />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pt-24 pb-20 text-center md:px-4 md:pt-32">
        <a
          className={cn(
            "group mx-auto flex w-fit items-center gap-3 rounded-sm border border-background/20 bg-background/5 p-1 backdrop-blur-sm",
            "transition-all duration-300 ease-out hover:border-background/40 hover:bg-background/10",
          )}
          data-hero="badge"
          href="#programme"
        >
          <span className="flex items-center gap-1.5 rounded-xs bg-background/90 px-2 py-1 font-mono text-[10px] font-semibold tracking-widest text-foreground uppercase">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-foreground opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
            </span>
            En ligne
          </span>
          <span className="text-xs text-background/80">
            Lancement à Antananarivo
          </span>
          <span className="block h-4 border-l border-background/20" />
          <div className="pr-1">
            <ArrowRightIcon className="size-3 -translate-x-0.5 text-background/70 transition-transform duration-150 ease-out group-hover:translate-x-0.5" />
          </div>
        </a>

        <h1
          className="mt-8 max-w-3xl text-balance text-4xl leading-[1.06] font-light tracking-tight text-background md:text-6xl lg:text-7xl"
          data-hero="title"
        >
          Chaque client qui revient{" "}
          <em className="italic">vaut de l&apos;or.</em>
        </h1>

        <p
          className="mt-6 max-w-xl text-balance text-sm leading-relaxed text-background/75 sm:text-base md:text-lg"
          data-hero="lede"
        >
          Mada Privileges est la première plateforme nationale de fidélité
          multi-partenaires de Madagascar. Un seul compte, tous vos commerces
          préférés, des privilèges partout.
        </p>

        <div
          className="mt-10 flex w-fit flex-wrap items-center justify-center gap-3"
          data-hero="actions"
        >
          <Button
            size="lg"
            variant="secondary"
            render={<a href="#partenaire" />}
            nativeButton={false}
          >
            Devenir partenaire
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
          <a
            className="inline-flex h-10 items-center gap-1.5 rounded-md border border-background/25 px-4 text-sm font-medium text-background transition-colors hover:border-background/50 hover:bg-background/10"
            href="#programme"
          >
            Découvrir le programme
          </a>
        </div>

        {/* Carte de fidélité */}
        <div
          className="relative mb-12 mt-24 w-full max-w-md sm:mb-16"
          data-hero="card"
        >
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-1 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/10 blur-[90px]"
          />
          <div className="relative -rotate-2 rounded-2xl bg-linear-to-br from-background/40 from-5% via-background/15 to-transparent p-px shadow-2xl shadow-black/40 transition-transform duration-700 ease-out hover:rotate-0 hover:scale-[1.01]">
            <div className="rounded-[calc(1rem-1px)] bg-foreground p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <div className="text-left">
                  {/*
                    Le bleu de l'icône tombe à 1,1:1 sur ce fond : illisible.
                    Le ton vient de `.surface-invert` (or + écru ici, navy +
                    ardoise quand la section s'éclaircit en thème sombre).
                  */}
                  <Logo className="h-9" orientation="horizontal" />
                  <p className="mt-2 font-mono text-[10px] tracking-[0.3em] text-background/50 uppercase">
                    Loyalty Network
                  </p>
                </div>
                <span className="rounded-full border border-background/30 bg-background/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-widest text-background uppercase">
                  Membre
                </span>
              </div>

              <div className="mt-10 hidden h-px bg-background/15 sm:block" />

              <div className="mt-10 flex items-end justify-between">
                <div className="text-left">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-background/45 uppercase">
                    Porteur du programme
                  </p>
                  <p className="mt-2 text-xl font-semibold tracking-wide text-background sm:text-2xl">
                    Harison Rakoto
                  </p>
                  <p className="mt-3 font-mono text-[11px] tracking-[0.22em] text-background/60">
                    N° 26 0549 &middot; NIV. OR
                  </p>
                </div>
                <div
                  aria-hidden="true"
                  className="hidden h-9 w-24 rounded-sm bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.9)_0_2px,transparent_2px_4px,rgba(255,255,255,0.9)_4px_7px,transparent_7px_9px,rgba(255,255,255,0.9)_9px_10px,transparent_10px_13px)] opacity-80 sm:block"
                />
              </div>
            </div>
          </div>

          {/* Pastilles */}
          <div className="absolute -top-6 -right-3 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-left shadow-lg backdrop-blur-sm sm:-right-8">
            <p className="text-[10px] text-background/60">Privilège débloqué</p>
            <p className="text-xs font-semibold text-background">
              2ᵉ café offert
            </p>
          </div>
          <div className="absolute -bottom-6 -left-3 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-left shadow-lg backdrop-blur-sm sm:-left-8">
            <p className="text-[10px] text-background/60">Cette semaine</p>
            <p className="text-xs font-semibold text-background">
              +250 points cumulés
            </p>
          </div>
        </div>

        {/* Chiffres-clés */}
        <div className="grid w-full max-w-3xl grid-cols-1 gap-8 border-t border-background/15 pt-10 sm:grid-cols-3 sm:gap-6">
          {stats.map((stat) => (
            <div data-hero="stat" key={stat.value}>
              <p className="text-4xl font-semibold tracking-tight text-background italic">
                {stat.value}
              </p>
              {/*
                `mx-auto` est indispensable ici : `max-w-[22ch]` fait du
                libellé une boîte plus étroite que sa cellule de grille, et
                une boîte en bloc se cale à gauche. Le chiffre, lui, est
                centré sur toute la largeur de la cellule — sans ça les deux
                ne partagent pas le même axe.
              */}
              <p className="mx-auto mt-2 max-w-[22ch] text-sm leading-relaxed text-background/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <FullWidthDivider position="bottom" />
    </section>
  );
}
