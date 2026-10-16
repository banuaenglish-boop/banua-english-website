import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/ui/section-label";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PROGRAMS_QUERY } from "@/sanity/lib/queries";
import ProgramSlider from "@/components/ProgramSlider";

export default async function Programs() {
  const { data: programs } = await sanityFetch({ query: HOME_PROGRAMS_QUERY });

  return (
    <section className="relative bg-gray-50 section-y overflow-hidden">
      <div className="section-shell relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <SectionLabel variant="light">Program &amp; Event</SectionLabel>
            <h2 className="font-poppins font-bold heading-2 text-[#1a2557]">
              Pilihan Kursus Bahasa Inggris
              <br />
              <span className="text-[#2C3E8A]">di Banjarmasin dan Online</span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm font-inter leading-relaxed">
              Kenali persiapan IELTS dan TOEFL, pilihan les privat, serta tim
              tutor kami. Diskusikan kebutuhan belajar dan jadwalmu sebelum
              memilih program.
            </p>
          </div>

          <a
            href="/program"
            className="flex items-center gap-2 text-[#2C3E8A] text-sm font-bold group hover:underline whitespace-nowrap"
          >
            Lihat Semua Program
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Horizontal Program Slider */}
        <ProgramSlider programs={programs} />
      </div>
    </section>
  );
}
