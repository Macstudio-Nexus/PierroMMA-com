import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MMA Training Services - Pierro MMA Staten Island",
  description:
    "Expert martial arts training services including MMA, Brazilian Jiu-Jitsu, Kickboxing, Boxing, and personalized fitness training. Professional instruction in Staten Island with Coach Johnny Pierro. Call (646) 923-2215.",
  keywords:
    "MMA training, Brazilian Jiu-Jitsu classes, BJJ Staten Island, kickboxing training, boxing lessons, personal training, martial arts services, Staten Island gym",
  authors: [{ name: "Pierro MMA" }, { name: "Macstudio Nexus" }],
  creator: "Pierro MMA",
  publisher: "Macstudio Nexus",
  robots: "index, follow",
  openGraph: {
    title: "MMA Training Services - Pierro MMA Staten Island",
    description:
      "Expert MMA, BJJ, Kickboxing, Boxing & Personal Training services. Professional martial arts instruction in Staten Island. Call (646) 923-2215.",
    type: "website",
    locale: "en_US",
    url: "https://pierromma.com/services",
    images: [
      {
        url: "https://pierromma.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pierro MMA Training Services - Staten Island",
      },
    ],
    siteName: "Pierro MMA",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMA Training Services - Pierro MMA Staten Island",
    description:
      "Expert MMA, BJJ, Kickboxing, Boxing & Personal Training. Professional instruction in Staten Island.",
    images: ["https://pierromma.com/og-image.png"],
  },
  metadataBase: new URL("https://pierromma.com"),
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pierro MMA Training Services",
    description:
      "Professional martial arts and fitness training services offered at Pierro MMA in Staten Island",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Mixed Martial Arts Training",
          description:
            "Comprehensive MMA training combining striking, grappling, and ground fighting techniques for all skill levels.",
          provider: {
            "@type": "SportsActivityLocation",
            name: "Pierro MMA",
            telephone: "(646) 923-2215",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Brazilian Jiu-Jitsu",
          description:
            "BJJ classes focusing on ground fighting, submissions, and self-defense for beginners to advanced practitioners.",
          provider: {
            "@type": "SportsActivityLocation",
            name: "Pierro MMA",
            telephone: "(646) 923-2215",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Kickboxing Classes",
          description:
            "High-intensity kickboxing training combining punches, kicks, and conditioning for fitness and combat skills.",
          provider: {
            "@type": "SportsActivityLocation",
            name: "Pierro MMA",
            telephone: "(646) 923-2215",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Boxing Training",
          description:
            "Professional boxing instruction covering footwork, combinations, defense, and ring strategy.",
          provider: {
            "@type": "SportsActivityLocation",
            name: "Pierro MMA",
            telephone: "(646) 923-2215",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Personal Fitness Training",
          description:
            "Customized one-on-one fitness training sessions designed to meet individual goals and fitness levels.",
          provider: {
            "@type": "SportsActivityLocation",
            name: "Pierro MMA",
            telephone: "(646) 923-2215",
          },
        },
      },
    ],
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
