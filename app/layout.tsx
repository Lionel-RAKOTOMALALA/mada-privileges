import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Gabarito, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { OutboundTracking } from "@/components/motion/outbound-tracking";
import { SITE_URL } from "@/lib/links";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

/**
 * Typo de la baseline du logotype selon la charte (« Typo baseline Gabarito »,
 * Extra Bold pour MADA / Regular pour PRIVILÈGES). Reprise ici pour les titres
 * afin que le site et la plateforme partagent la même voix typographique.
 * Le logotype lui-même reste vectorisé — il ne dépend pas du chargement.
 */
const gabarito = Gabarito({
  subsets: ["latin", "latin-ext"],
  variable: "--font-gabarito",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Métadonnées du cahier de contenu, § 5.1 — reprises mot pour mot.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mada Privilèges — vos cartes de fidélité, dans votre téléphone",
  description:
    "Créez votre compte gratuitement, scannez le QR code de vos commerçants et retrouvez toutes vos cartes de fidélité au même endroit. À Madagascar.",
  /*
   * § 5.1 — langue « fr, version alternative : en ». Seul le français existe :
   * le cahier ne fournit aucun texte anglais. Aucun `hreflang` n'est donc
   * déclaré — en annoncer un vers une page inexistante desservirait le
   * référencement. À ajouter en même temps que la version anglaise, avec le
   * sélecteur FR/EN de la barre de navigation (§ 3).
   */
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Mada Privilèges",
    title: "Mada Privilèges — vos cartes de fidélité, dans votre téléphone",
    description:
      "Créez votre compte gratuitement, scannez le QR code de vos commerçants et retrouvez toutes vos cartes de fidélité au même endroit. À Madagascar.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        gabarito.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <OutboundTracking />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
