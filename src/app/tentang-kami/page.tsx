import { pageMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/tentang/AboutHero";
import Timeline from "@/components/tentang/Timeline";
import TeamGrid from "@/components/tentang/TeamGrid";
import Partnerships from "@/components/tentang/Partnerships";
import { sanityFetch } from "@/sanity/lib/live";
import { TEAM_QUERY } from "@/sanity/lib/queries";
import type { TeamMember } from "@/sanity/lib/types";

export const metadata = pageMetadata({
  path: "/tentang-kami",
  title: "Tentang Kami & Tim Tutor di Banjarmasin",
  description:
    "Kenali English Banua, PT. Banua Education Center di Banjarmasin. Simak perjalanan sejak 2016, profil tutor, serta bimbingan IELTS dan TOEFL kami.",
});

export default async function TentangKamiPage() {
  const { data: team } = await sanityFetch<TeamMember[]>({ query: TEAM_QUERY });
  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbJsonLd("/tentang-kami")} />
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
