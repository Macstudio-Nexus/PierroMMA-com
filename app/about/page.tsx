import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pierro MMA - Coach Johnny Pierro Staten Island",
  description:
    "Learn about Coach Johnny Pierro and Pierro MMA. Experienced martial arts instructor offering professional MMA, BJJ, Kickboxing, and Boxing training in Staten Island. Dedicated to helping students achieve their fitness and combat sports goals.",
  keywords:
    "Johnny Pierro, MMA coach Staten Island, martial arts instructor, BJJ coach, boxing trainer, kickboxing instructor, Staten Island martial arts, about Pierro MMA",
  authors: [{ name: "Pierro MMA" }, { name: "Macstudio Nexus" }],
  creator: "Pierro MMA",
  publisher: "Macstudio Nexus",
  robots: "index, follow",
  openGraph: {
    title: "About Pierro MMA - Coach Johnny Pierro Staten Island",
    description:
      "Meet Coach Johnny Pierro. Professional MMA, BJJ, Kickboxing & Boxing instruction in Staten Island. Experienced trainer dedicated to student success.",
    type: "website",
    locale: "en_US",
    url: "https://pierromma.com/about",
    images: [
      {
        url: "https://pierromma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Pierro MMA and Coach Johnny Pierro",
      },
    ],
    siteName: "Pierro MMA",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Pierro MMA - Coach Johnny Pierro Staten Island",
    description:
      "Professional martial arts instruction with Coach Johnny Pierro. Expert MMA, BJJ, Kickboxing & Boxing training.",
    images: ["https://pierromma.com/og-image.png"],
  },
  metadataBase: new URL("https://pierromma.com"),
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Pierro MMA",
    description:
      "Information about Pierro MMA and Coach Johnny Pierro, offering professional martial arts training in Staten Island",
    mainEntity: {
      "@type": "Person",
      name: "Johnny Pierro",
      jobTitle: "MMA Coach and Martial Arts Instructor",
      worksFor: {
        "@type": "SportsActivityLocation",
        name: "Pierro MMA",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Staten Island",
          addressRegion: "NY",
          addressCountry: "US",
        },
        telephone: "(646) 923-2215",
      },
      knowsAbout: [
        "Mixed Martial Arts",
        "Brazilian Jiu-Jitsu",
        "Kickboxing",
        "Boxing",
        "Personal Training",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Page content goes here */}
    </>
  );
}
