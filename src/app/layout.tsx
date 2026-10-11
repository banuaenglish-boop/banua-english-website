import type { Metadata } from "next";
import { Inter, Poppins, Outfit } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";
import PreviewBanner from "@/components/PreviewBanner";
import SiteJsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Kursus Bahasa Inggris, TOEFL & IELTS Banjarmasin`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  keywords: [
    "kursus IELTS Banjarmasin",
    "kursus TOEFL Banjarmasin",
    "kursus bahasa Inggris Banjarmasin",
    "IELTS preparation",
    "TOEFL preparation",
    "English Banua",
    "beasiswa LPDP",
    "les bahasa Inggris Kalimantan Selatan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Kursus Bahasa Inggris, TOEFL & IELTS Banjarmasin`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Kursus IELTS & TOEFL Banjarmasin`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${poppins.variable} ${outfit.variable} font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteJsonLd />
        {children}
        <PreviewBanner />
        <SanityLive />
      </body>
    </html>
  );
}
