"use client";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { Logo } from "@/components/logo";
import { platformLabels, platformLinks } from "@/lib/links";
import Link from "next/link";

/** Liens du centre de la barre (cahier de contenu, § 3). */
export const navLinks = [
  {
    label: "Le programme",
    href: "/#programme",
  },
  {
    label: "Membres",
    href: "/#membres",
  },
  {
    label: "Enseignes",
    href: "/#enseignes",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-5xl border-b bg-background/80 text-foreground backdrop-blur-sm transition-all duration-300 ease-out",
        scrolled
          ? "border-border bg-background/95 shadow supports-backdrop-filter:bg-background/60 md:top-2 md:max-w-4xl md:rounded-md md:border"
          : "border-border/70",
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between gap-2 px-4 transition-all duration-300 ease-out md:h-12",
          {
            "md:px-2": scrolled,
          },
        )}
      >
        {/*
          Bloc-marque horizontal de la charte : la baseline y est calée sur la
          base du « M » et large d'un « M » et demi. Ces rapports sont portés
          par le tracé lui-même, d'où un seul SVG plutôt qu'une icône suivie
          de texte — qui ne pouvait pas respecter l'alignement.
        */}
        <Link
          className="flex h-fit w-max shrink-0 items-center rounded-md p-1.5"
          href="/#accueil"
        >
          <Logo className="h-7" orientation="horizontal" />
        </Link>

        <div className={cn("hidden items-center gap-1.5 lg:flex")}>
          <div className="flex items-center">
            {navLinks.map((link) => (
              <Button
                key={link.label}
                size="sm"
                variant="ghost"
                render={<Link href={link.href} />}
                nativeButton={false}
              >
                {link.label}
              </Button>
            ))}
          </div>
          {/*
            Les deux boutons quittent le site vitrine pour la plateforme
            (§ 4). Même onglet : le visiteur part y accomplir une action.
          */}
                                                                                                                                                                                                                                          {/* § 3 : « Se connecter » en secondaire, « Commencer gratuitement »
              en principal — les deux styles sont fixes, la hiérarchie entre
              les deux actions ne dépend pas du défilement. */}
          <Button
            data-outbound="login"
            nativeButton={false}
            render={<a href={platformLinks.login} />}
            size="sm"
            variant="secondary"
          >
            {platformLabels.login}
          </Button>
          <Button
            data-outbound="register"
            nativeButton={false}
            render={<a href={platformLinks.register} />}
            size="sm"
            variant="default"
          >
            {platformLabels.register}
          </Button>
        </div>

        {/*
          § 3 : sur mobile, « Commencer gratuitement » reste visible en
          permanence — y compris sur les petits écrans, où il était masqué.
          Libellé raccourci sous 400 px pour qu'il tienne à côté du logo.
        */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            data-outbound="register"
            nativeButton={false}
            render={<a href={platformLinks.register} />}
            size="sm"
            variant="default"
          >
            <span className="hidden min-[400px]:inline">
              {platformLabels.register}
            </span>
            <span className="min-[400px]:hidden">Commencer</span>
          </Button>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
