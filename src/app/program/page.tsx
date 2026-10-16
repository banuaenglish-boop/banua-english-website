import { pageMetadata } from "@/lib/seo";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramExplorer from "@/components/program/ProgramExplorer";
import TutorSection from "@/components/program/TutorSection";
import RegistrationSteps from "@/components/program/RegistrationSteps";
import { sanityFetch } from "@/sanity/lib/live";
import { PROGRAMS_QUERY } from "@/sanity/lib/queries";

export const metadata = pageMetadata({
  path: "/program",
  title: "Program IELTS, TOEFL & Kelas Privat",
  description:
    "Pilihan kursus IELTS, TOEFL, dan les privat bahasa Inggris. Belajar di Banjarmasin atau online, kenali tutor, dan konsultasikan kebutuhan kelasmu.",
});

export default async function ProgramPage() {
  const { data: programs } = await sanityFetch({ query: PROGRAMS_QUERY });

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbJsonLd("/program")} />
      <Navbar />
      <main>
        <ProgramExplorer programs={programs} />
        <TutorSection />
        <RegistrationSteps />
      </main>
      <Footer />
    </div>
  );
}
