import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgramExplorer from "@/components/program/ProgramExplorer";
import TutorSection from "@/components/program/TutorSection";
import RegistrationSteps from "@/components/program/RegistrationSteps";
import { sanityFetch } from "@/sanity/lib/live";
import { PROGRAMS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Kelas & Program | English Banua",
  description:
    "Private 1-on-1, IELTS Preparation, TOEFL, dan kelas online bersama tutor Awardee S1 & S2 dari dalam dan luar negeri. Kelas offline di Banjarmasin dan online seluruh Indonesia.",
};

export default async function ProgramPage() {
  const { data: programs } = await sanityFetch({ query: PROGRAMS_QUERY });

  return (
    <div className="bg-white">
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
