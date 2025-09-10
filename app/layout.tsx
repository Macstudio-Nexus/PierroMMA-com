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
  title:
    "Pierro MMA - Mixed Martial Arts Training | Staten Island Personal Training",
  description:
    "Professional MMA, Brazilian Jiu-Jitsu, Kickboxing, Boxing and personal fitness training in NYC. Expert martial arts instruction with coach Johnny Pierro. Call (646) 923-2215.",
  keywords:
    "MMA training Staten Island, Brazilian Jiu-Jitsu, kickboxing classes, boxing training, personal fitness trainer, martial arts instruction",
  authors: [{ name: "Pierro MMA" }, { name: "Macstudio Nexus" }],
  creator: "Pierro MMA",
  publisher: "Macstudio Nexus",
  robots: "index, follow",
  openGraph: {
    title: "Pierro MMA - Mixed Martial Arts Training in Staten Island",
    description:
      "Professional MMA, BJJ, Kickboxing & Boxing training. Personal fitness coaching available. Call (646) 923-2215 for expert instruction.",
    type: "website",
    locale: "en_US",
    siteName: "Pierro MMA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pierro MMA - Mixed Martial Arts Training NYC",
    description:
      "Expert MMA, BJJ, Kickboxing & Boxing instruction. Personal training available.",
  },
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`bg-no-repeat bg-contain bg-bottom-right bg-white-transparent ${cinzel.variable} ${pirataOne.variable} ${schibstedGrotesk.variable}`}
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
