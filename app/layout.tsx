import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { restaurant } from "@/lib/data/restaurant";
import { ReservationProvider } from "@/components/reservation/ReservationProvider";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://emberhouse-demo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ember House | Wood-Fired Steakhouse in Batley",
    template: "%s | Ember House",
  },
  description:
    "Ember House is a fictional wood-fired steakhouse concept in Batley, West Yorkshire, serving dry-aged British beef and seasonal dishes cooked over flame.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ember House | Wood-Fired Steakhouse in Batley",
    description:
      "A fictional wood-fired steakhouse concept in Batley, West Yorkshire, serving dry-aged British beef and seasonal dishes cooked over flame.",
    url: siteUrl,
    siteName: "Ember House",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ember House | Wood-Fired Steakhouse in Batley",
    description:
      "A fictional wood-fired steakhouse concept in Batley, West Yorkshire, serving dry-aged British beef and seasonal dishes cooked over flame.",
  },
  // Favicon comes from app/icon.svg + app/favicon.ico via Next's built-in
  // file convention — no manual `icons` entry needed here.
};

export const viewport: Viewport = {
  themeColor: restaurant.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${instrumentSerif.variable} ${manrope.variable}`}>
      <body className="bg-near-black font-sans text-cream antialiased selection:bg-brass/30 selection:text-cream">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ReservationProvider>{children}</ReservationProvider>
      </body>
    </html>
  );
}
