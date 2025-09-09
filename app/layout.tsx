import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="bg-gradient-to-b from-primary to-secondary">
      <body>{children}</body>
    </html>
  );
}
