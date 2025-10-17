import type { Metadata } from "next";
import "./globals.css";
import { Cinzel, Pirata_One, Schibsted_Grotesk } from "next/font/google";

import Footer from "./components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pirata",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
});

export const metadata: Metadata = {
  title: "Pierro MMA - Staten Island Martial Arts Training",
  description:
    "Professional MMA, Brazilian Jiu-Jitsu, Kickboxing, Boxing and personal fitness training in Staten Island. Expert martial arts instruction with coach Johnny Pierro. Call (646) 923-2215.",
  keywords:
    "MMA training Staten Island, Brazilian Jiu-Jitsu, kickboxing classes, boxing training, personal fitness trainer, Staten Island brazilian jiu jitsu mma",
  authors: [{ name: "Pierro MMA" }, { name: "Macstudio Nexus" }],
  creator: "Pierro MMA",
  publisher: "Macstudio Nexus",
  robots: "index, follow",
  openGraph: {
    title: "Pierro MMA - Staten Island Martial Arts Training",
    description:
      "Professional MMA, BJJ, Kickboxing & Boxing training. Personal fitness coaching available. Call (646) 923-2215 for expert instruction.",
    type: "website",
    locale: "en_US",
    url: "https://pierromma.com",
    images: [
      {
        url: "https://pierromma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pierro MMA - Staten Island Martial Arts Training",
      },
    ],
    siteName: "Pierro MMA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierro MMA - Staten Island Martial Arts Training",
    description:
      "Expert MMA, BJJ, Kickboxing & Boxing instruction. Personal training available.",
    images: ["https://pierromma.com/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/Logo.png" },
      { url: "/Logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/Logo.png" },
      { url: "/Logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  metadataBase: new URL("https://pierromma.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": "https://pierromma.com",
    name: "Pierro MMA",
    alternateName: "Pierro Mixed Martial Arts",
    description:
      "Professional MMA, Brazilian Jiu-Jitsu, Kickboxing, Boxing and personal fitness training in Staten Island with coach Johnny Pierro.",
    url: "https://pierromma.com",
    logo: "https://pierromma.com/Logo.png",
    image: "https://pierromma.com/og-image.png",
    telephone: "(646) 923-2215",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Staten Island",
      addressRegion: "NY",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: "US",
    },
    sameAs: [],
    priceRange: "$$",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mixed Martial Arts Training",
          description: "Professional MMA training and instruction - Staten Island",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Brazilian Jiu-Jitsu",
          description: "BJJ classes for all skill levels - Staten Island",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kickboxing Classes",
          description: "Kickboxing training and classes - Staten Island",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Boxing Training",
          description: "Professional boxing instruction - Staten Island",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Fitness Training",
          description: "One-on-one personal training sessions - Staten Island",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`bg-no-repeat bg-contain bg-bottom-right bg-white-transparent ${cinzel.variable} ${pirataOne.variable} ${schibstedGrotesk.variable}`}
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
