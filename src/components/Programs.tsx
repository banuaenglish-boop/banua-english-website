import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/ui/section-label";
import { programIcons } from "@/components/program/program-icons";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_PROGRAMS_QUERY } from "@/sanity/lib/queries";
import type { Program, ProgramMode } from "@/sanity/lib/types";

const modeConfig: Record<ProgramMode, { label: string; bg: string; text: string; border: string }> = {
  private: {
    label: "Private 1-on-1",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  offline: {
    label: "Offline",
    bg: "bg-blue-50",
    text: "text-[#2C3E8A]",
    border: "border-blue-200",
  },
  online: {
    label: "Online",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
};

function ProgramCard({ program }: { program: Program }) {
  const mode = modeConfig[program.mode];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
      <div className="relative h-40 overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2">
          {program.badge ? (
            <span className={`min-w-0 truncate rounded-full px-3 py-1 text-[11px] font-bold shadow-lg ${program.badgeColor}`}>
              {program.badge}
            </span>
          ) : (
            <span />
          )}

          <span className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${mode.bg} ${mode.text} ${mode.border}`}>
            {mode.label}
          </span>
        </div>

        {program.highlight && (
          <div className="absolute bottom-3 left-3 rounded-full border border-white/50 bg-white/90 px-3 py-1 text-[11px] font-bold text-[#2C3E8A] shadow">
            ✦ {program.highlight}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <p className="mb-1 line-clamp-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            {program.subtitle}
          </p>
          <h3 className="font-poppins text-base font-bold leading-tight text-[#1a2557]">
            {program.title}
          </h3>
        </div>

        <p className="text-xs leading-relaxed text-gray-500 line-clamp-3 font-inter">
          {program.description}
        </p>

        <div className="mt-auto border-t border-gray-100 pt-3">
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {program.features?.map((feat) => (
              <div key={feat.label} className="flex min-w-0 items-center gap-2 text-[#2C3E8A]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  {programIcons[feat.iconKey]}
                </span>
                <span className="truncate text-[11px] font-medium text-gray-600">{feat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href="/kontak"
          className="flex w-full items-center justify-between rounded-xl bg-[#2C3E8A] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#1a2557] group/btn"
        >
          <span>{program.ctaLabel ?? "Lihat Detail"}</span>
          <ArrowRight
            size={14}
            weight="bold"
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </a>
      </div>
    </article>
  );
}

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
              Satu Tempat untuk Semua
              <br />
              <span className="text-[#2C3E8A]">Persiapan Studi Abroadmu</span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm font-inter leading-relaxed">
              Dari persiapan IELTS, TOEFL, hingga strategi beasiswa, semua tersedia
              dalam satu ekosistem bimbingan yang dipimpin Awardee.
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

        {/* Cards: horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-3 -mx-5 px-5 md:mx-0 md:px-0 md:overflow-visible md:grid md:grid-cols-2 lg:grid-cols-4 snap-x snap-mandatory md:snap-none scrollbar-hide">
          {programs.map((program) => (
            <div key={program._id} className="snap-start shrink-0 w-[78vw] sm:w-[55vw] md:w-auto">
              <ProgramCard program={program} />
            </div>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <p className="mt-3 text-center text-xs text-gray-400 md:hidden">
          Geser untuk lihat lebih banyak →
        </p>
      </div>
    </section>
  );
}
