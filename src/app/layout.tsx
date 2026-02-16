import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { AppProvider } from "@/context/AppContext";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://ittehadbinrahim.me";
const defaultTitle = "Ittehad Bin Rahim - Full Stack Developer";
const defaultDescription =
  "Portfolio of Ittehad Bin Rahim, a Full Stack Developer specializing in Laravel, PHP, React, and modern web technologies. Building scalable, performant web applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Ittehad Bin Rahim",
  },
  description: defaultDescription,
  keywords: [
    "Ittehad Bin Rahim",
    "Full Stack Developer",
    "Web Developer",
    "PHP Developer",
    "Laravel Developer",
    "React Developer",
    "MySQL",
    "HTML",
    "CSS",
    "Bootstrap",
    "Portfolio",
  ],
  authors: [{ name: "Ittehad Bin Rahim", url: siteUrl }],
  creator: "Ittehad Bin Rahim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ittehad Bin Rahim",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ittehad Bin Rahim - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Paste the code Google Search Console gives you (HTML tag method):
    // google: "your-google-verification-code",
    // Bing: uncomment and add when you verify in Bing Webmaster Tools
    // other: { "msvalidate.01": "your-bing-code" },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ittehad Bin Rahim",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  description: defaultDescription,
  knowsAbout: [
    "Laravel",
    "PHP",
    "React",
    "Vue.js",
    "MySQL",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
  ],
  sameAs: [
    "https://github.com/ittehad2001",
    "https://www.linkedin.com/in/ittehad-bin-rahim",
    "https://twitter.com/ittehadbinrahim",
  ].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Suspense fallback={null}>
          <AppProvider>{children}</AppProvider>
        </Suspense>
      </body>
    </html>
  );
}
