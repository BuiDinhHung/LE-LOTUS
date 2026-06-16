import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/layout/PageLoader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Le Lotus – Restaurant Vietnamien | Fribourg, Suisse",
  description:
    "Restaurant vietnamien authentique à Fribourg. Cuisine fait maison avec des produits frais. Pho, vermicelles, plats du jour. Sur place, à emporter & traiteur. Boulevard de Pérolles 81.",
  keywords: [
    "restaurant vietnamien",
    "Fribourg",
    "Le Lotus",
    "Pho",
    "cuisine asiatique",
    "traiteur",
    "à emporter",
    "take away",
    "restaurant",
    "Suisse",
  ],
  authors: [{ name: "Le Lotus" }],
  creator: "Le Lotus",
  openGraph: {
    title: "Le Lotus – Spécialités Vietnamiennes | Fribourg",
    description:
      "Restaurant vietnamien authentique à Fribourg. Cuisine fait maison, produits frais. Sur place, à emporter & traiteur.",
    type: "website",
    locale: "fr_CH",
    siteName: "Le Lotus",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Le Lotus",
  description:
    "Restaurant vietnamien authentique à Fribourg – cuisine fait maison, produits frais",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Boulevard de Pérolles 81",
    addressLocality: "Fribourg",
    postalCode: "1700",
    addressCountry: "CH",
  },
  telephone: ["+41264223571", "+41791707969"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "11:00",
      closes: "14:00",
    },
  ],
  servesCuisine: "Vietnamese",
  hasMap: "https://maps.app.goo.gl/GUH5LfAkEWomG5Ei9",
  sameAs: [
    "https://www.facebook.com/p/Le-Lotus-take-away-100057256187554/",
    "https://www.instagram.com/lelotustakeaway/",
  ],
  priceRange: "Fr 18 – Fr 22",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-dark font-sans antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
