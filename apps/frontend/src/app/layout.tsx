import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "animate.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KUA Initiative",
  description:
    "KUA Initiative is dedicated to empowering refugees and host communities through education, livelihood programs, GBV awareness, and environmental sustainability projects in Kalobeyei, Turkana County.",
  icons: {
    icon: "/images/logo.jpeg",
  },
  openGraph: {
    title: "KUA Initiative",
    description:
      "KUA Initiative is dedicated to empowering refugees and host communities through education, livelihood programs, GBV awareness, and environmental sustainability projects in Kalobeyei, Turkana County.",
    siteName: "KUA Initiative",
    images: [
      {
        url: "/images/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "KUA Initiative",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KUA Initiative",
    description:
      "KUA Initiative supports refugees and host communities in Kalobeyei through education, business training, and advocacy programs.",
    images: ["/images/kua-og-image.jpg"],
    creator: "@kua_initiative",
  },
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}