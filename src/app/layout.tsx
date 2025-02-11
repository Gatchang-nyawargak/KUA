import type { Metadata } from "next";
import { Geist as GeistSans, Geist_Mono as GeistMono } from "next/font/google";
import "./globals.css";
import "animate.css";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.desouthcoltd.com"),
  title: "DE SOUTH CO. LTD",
  description:
    "DE SOUTH CO. LTD is a leading provider of top-notch products and services in procurement, logistics, IT equipment, rental solutions, and more. We empower futures and enrich lives with exceptional service.",
  icons: {
    icon: "/images/logo.png",
  },
  openGraph: {
    title: "DE SOUTH CO. LTD",
    description:
      "DE SOUTH CO. LTD is a leading provider of top-notch products and services in procurement, logistics, IT equipment, rental solutions, and more. We empower futures and enrich lives with exceptional service.",
    url: "https://www.desouthcoltd.com",
    siteName: "DE SOUTH CO. LTD",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DE SOUTH CO. LTD",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DE SOUTH CO. LTD",
    description:
      "DE SOUTH CO. LTD is a leading provider of top-notch products and services in procurement, logistics, IT equipment, rental solutions, and more. We empower futures and enrich lives with exceptional service.",
    images: ["/images/og-image.jpg"],
    creator: "@desouthcoltd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
