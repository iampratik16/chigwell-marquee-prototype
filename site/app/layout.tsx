import type { Metadata, Viewport } from "next";
import { gambetta, switzer } from "./fonts";
import { SITE } from "@/lib/site";
import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import Grain from "@/components/effects/Grain";
import Cursor from "@/components/effects/Cursor";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}, Luxury Marquee Venue, Essex`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "marquee venue Essex",
    "wedding venue Essex",
    "Chigwell Hall",
    "Asian wedding venue",
    "corporate event venue",
    "luxury marquee hire",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: `${SITE.name}, A grand setting for remarkable occasions`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#16130f",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${gambetta.variable} ${switzer.variable}`}>
      <body className="bg-bone text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-bone"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Grain />
          <Cursor />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
