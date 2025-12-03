import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Pierro MMA - Staten Island Martial Arts | (646) 923-2215",
  description:
    "Contact Pierro MMA for MMA, Brazilian Jiu-Jitsu, Kickboxing, Boxing, and personal training in Staten Island. Call (646) 923-2215 or reach out to schedule your first session with Coach Johnny Pierro.",
  keywords:
    "contact Pierro MMA, Staten Island MMA gym contact, martial arts training inquiry, BJJ classes contact, boxing training Staten Island, call (646) 923-2215",
  authors: [{ name: "Pierro MMA" }, { name: "Macstudio Nexus" }],
  creator: "Pierro MMA",
  publisher: "Macstudio Nexus",
  robots: "index, follow",
  openGraph: {
    title: "Contact Pierro MMA - Staten Island | (646) 923-2215",
    description:
      "Get in touch with Pierro MMA for expert martial arts training. Call (646) 923-2215 to schedule MMA, BJJ, Kickboxing, or Boxing classes in Staten Island.",
    type: "website",
    locale: "en_US",
    url: "https://pierromma.com/contact",
    images: [
      {
        url: "https://pierromma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Pierro MMA - Staten Island Martial Arts",
      },
    ],
    siteName: "Pierro MMA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Pierro MMA - Staten Island | (646) 923-2215",
    description:
      "Reach out for expert MMA, BJJ, Kickboxing & Boxing training. Call (646) 923-2215 to get started.",
    images: ["https://pierromma.com/og-image.png"],
  },
  metadataBase: new URL("https://pierromma.com"),
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Pierro MMA",
    description:
      "Contact information for Pierro MMA martial arts training in Staten Island",
    mainEntity: {
      "@type": "SportsActivityLocation",
      name: "Pierro MMA",
      telephone: "(646) 923-2215",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Staten Island",
        addressRegion: "NY",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "(646) 923-2215",
        contactType: "Customer Service",
        areaServed: "US",
        availableLanguage: "English",
      },
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
