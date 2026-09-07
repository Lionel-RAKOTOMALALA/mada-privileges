"use client";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { Logo } from "@/components/logo";

export const navLinks = [
  {
    label: "Le programme",
    href: "#programme",
  },
  {
    label: "Secteurs",
    href: "#secteurs",
  },
  {
    label: "Fonctionnement",
    href: "#fonctionnement",
  },
  {
    label: "FAQ",
    href: "#faq",
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
          "flex h-14 w-full items-center justify-between px-4 transition-all duration-300 ease-out md:h-12",
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
        <a
          className="flex h-fit w-max items-center rounded-md p-1.5"
          href="#accueil"
        >
          <Logo className="h-7" orientation="horizontal" />
        </a>

        <div className={cn("hidden items-center gap-1.5 md:flex")}>
          <div className="flex items-center">
            {navLinks.map((link) => (
              <Button
                key={link.label}
                size="sm"
                variant="ghost"
                render={<a href={link.href} />}
                nativeButton={false}
              >
                {link.label}
              </Button>
            ))}
          </div>
          <Button size="sm" variant={scrolled ? "default" : "secondary"}>
            Devenir partenaire
          </Button>
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
