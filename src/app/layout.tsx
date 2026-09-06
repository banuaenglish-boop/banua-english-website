import type { Metadata } from "next";
import { Inter, Poppins, Outfit } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/lib/live";
import PreviewBanner from "@/components/PreviewBanner";

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
  title: "English Banua | Kursus Bahasa Inggris, TOEFL & IELTS Banjarmasin",
  description:
    "Persiapan IELTS, TOEFL, dan studi ke luar negeri bersama tutor Awardee S1 & S2 dari dalam dan luar negeri. Tersedia kelas online dan offline di Banjarmasin, Kalimantan Selatan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${outfit.variable} font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <PreviewBanner />
        <SanityLive />
      </body>
    </html>
  );
}

