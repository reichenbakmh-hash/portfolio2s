import type { Metadata } from "next";
import { Playfair_Display, Nunito, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair"
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stephie-portfolio.vercel.app"),
  title: "Stéphie Ramangalahy — Administration & relation clients",
  description:
    "Portfolio de Ramangalahy Ainanirina Stéphie, étudiante en Master Administration à Madagascar. Tourisme, relation clients, rédaction web.",
  openGraph: {
    title: "Stéphie Ramangalahy — Administration & relation clients",
    description:
      "Portfolio de Ramangalahy Ainanirina Stéphie, étudiante en Master Administration à Madagascar.",
    url: "https://stephie-portfolio.vercel.app",
    siteName: "Stéphie Ramangalahy",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/profile-square.jpg",
        width: 900,
        height: 900,
        alt: "Portrait de Stéphie Ramangalahy"
      }
    ]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${nunito.variable} ${cormorant.variable} font-body bg-cream text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
