import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/tentang/AboutHero";
import Timeline from "@/components/tentang/Timeline";
import TeamGrid from "@/components/tentang/TeamGrid";
import Partnerships from "@/components/tentang/Partnerships";
import { sanityFetch } from "@/sanity/lib/live";
import { TEAM_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Tentang Kami | PT. Banua Education Center",
  description:
    "English Banua adalah lembaga kursus bahasa Inggris, TOEFL, dan IELTS di Banjarmasin yang dibimbing tutor Awardee S1 & S2 dari dalam dan luar negeri.",
};

export default async function TentangKamiPage() {
  const { data: team } = await sanityFetch({ query: TEAM_QUERY });

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <AboutHero />
        <Timeline />
        <TeamGrid team={team} />
        <Partnerships />
      </main>
      <Footer />
    </div>
  );
}
