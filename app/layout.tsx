import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Gabarito, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/motion/smooth-scroll";

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

export const metadata: Metadata = {
  title: "Mada Privileges — La fidélité, partout à Madagascar",
  description:
    "La première plateforme nationale de fidélité multi-partenaires de Madagascar. Un seul compte, tous vos commerces préférés, des privilèges partout.",
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
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
