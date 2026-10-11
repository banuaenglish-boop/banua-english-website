import {
  GraduationCap,
  Medal,
  GlobeHemisphereWest,
  Certificate,
} from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/ui/section-label";
import { sanityFetch } from "@/sanity/lib/live";
import { TUTORS_QUERY } from "@/sanity/lib/queries";
import type { Tutor } from "@/sanity/lib/types";
import TutorSlider from "@/components/program/TutorSlider";

const values = [
  {
    icon: <GraduationCap size={22} weight="bold" />,
    title: "Tutor Awardee",
    description:
      "Tutor online kami adalah awardee LPDP dari universitas di Inggris dan Australia.",
  },
  {
    icon: <Medal size={22} weight="bold" />,
    title: "Fokus IELTS & TOEFL",
    description:
      "Bimbingan persiapan IELTS dan TOEFL bersama tim tutor kami.",
  },
  {
    icon: <GlobeHemisphereWest size={22} weight="bold" />,
    title: "Latar Pendidikan Global",
    description:
      "Tutor lulusan universitas di Indonesia, Inggris, dan Australia.",
  },
  {
    icon: <Certificate size={22} weight="bold" />,
    title: "Bersertifikat",
    description:
      "Tutor dengan latar belakang TESOL, pendidikan bahasa Inggris, dan sastra Inggris.",
  },
];

export default async function TutorSection() {
  const { data: tutors } = await sanityFetch<Tutor[]>({ query: TUTORS_QUERY });
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <SectionLabel variant="light">Tutor Kami</SectionLabel>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a2557] leading-tight mb-4">
            Belajar bersama{" "}
            <span className="text-[#2C3E8A]">Tutor Kami</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-inter leading-relaxed">
            Kenali tutor offline dan online English Banua, dengan latar belakang
            pendidikan, skor bahasa Inggris, dan pengalaman mengajar mereka.
          </p>
        </div>

        {/* Horizontal Slider Card Tutor */}
        <TutorSlider tutors={tutors} />

        {/* Why us strip */}
        <div className="rounded-3xl bg-[#2C3E8A] p-8 md:p-12 relative overflow-hidden">

          <div className="relative z-10">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white text-center mb-10">
              Kenapa Belajar di English Banua?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-5 transition-colors duration-300 hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD700] text-[#1a2557]">
                    {value.icon}
                  </span>
                  <h4 className="font-poppins font-bold text-sm text-white">
                    {value.title}
                  </h4>
                  <p className="text-xs text-white/60 font-inter leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
