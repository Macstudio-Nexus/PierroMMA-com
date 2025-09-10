import type { Metadata } from "next";
import "./globals.css";
import { Cinzel, Pirata_One, Schibsted_Grotesk } from 'next/font/google';

import Footer from "./components/Footer";

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel'
});

const pirataOne = Pirata_One({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pirata'
});

const schibstedGrotesk = Schibsted_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-schibsted'
});

export const metadata: Metadata = {
  title: "Pierro Mixed Martial Arts - Home",
  description:
    "Homepage of Pierro MMA, personal training and martial arts instruction.",
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
