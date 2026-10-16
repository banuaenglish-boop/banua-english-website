"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { programRegistrationUrl } from "@/lib/site";
import SectionLabel from "@/components/ui/section-label";
import { programIcons } from "@/components/program/program-icons";
import CourseLinks from "@/components/program/CourseLinks";
import { programDetailPath } from "@/lib/course-routes";
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

const filterTabs: { key: ProgramMode | "all"; label: string }[] = [
  { key: "all", label: "Semua Program" },
  { key: "offline", label: "Kelas Offline" },
  { key: "online", label: "Kelas Online" },
];

function ProgramCard({ program }: { program: Program }) {
  const mode = modeConfig[program.mode];
  const detailPath = programDetailPath(program.title);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
      <div className="relative h-52 overflow-hidden bg-gray-100">
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

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="min-h-[74px]">
          <p className="mb-1 line-clamp-2 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            {program.subtitle}
          </p>
          <h3 className="font-poppins text-lg font-bold leading-tight text-[#1a2557]">
            {program.title}
          </h3>
        </div>

        <p className="min-h-[66px] text-xs leading-relaxed text-gray-500 line-clamp-4 font-inter">
          {program.description}
        </p>

        {detailPath && (
          <Link href={detailPath} className="text-sm font-semibold text-[#2C3E8A] underline underline-offset-4">
            Lihat detail persiapan {/\bIELTS\b/i.test(program.title) ? "IELTS" : "TOEFL"}
          </Link>
        )}

        <div className="mt-auto border-t border-gray-100 pt-4">
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
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
          href={programRegistrationUrl(program.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-between rounded-xl bg-[#2C3E8A] px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#1a2557] group/btn"
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

export default function ProgramExplorer({ programs }: { programs: Program[] }) {
  const [activeFilter, setActiveFilter] = useState<ProgramMode | "all">("all");

  const filteredPrograms =
    activeFilter === "all"
      ? programs
      : programs.filter((p) => p.mode === activeFilter);

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero-bg relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[#2C3E8A]/35" />

        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-2xl animate-fade-up">
            <SectionLabel variant="dark">Program &amp; Kelas</SectionLabel>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
              Program IELTS, TOEFL, dan{" "}
              <span className="text-[#FFD700]">Kelas Privat</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base font-inter leading-relaxed">
              Temukan pilihan kursus di Banjarmasin dan kelas online bersama
              English Banua. Pelajari materi IELTS dan TOEFL, kenali tutor,
              lalu konsultasikan format belajar yang sesuai dengan targetmu.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Program Grid */}
      <section className="bg-gray-50 py-16 md:py-24 relative">

        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <CourseLinks />
          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-2.5 mb-10 justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-xs md:text-sm font-bold transition-all duration-300 border",
                  activeFilter === tab.key
                    ? "bg-[#2C3E8A] text-white border-[#2C3E8A] shadow-lg"
                    : "bg-white text-[#1a2557] border-gray-200 hover:border-[#2C3E8A] hover:text-[#2C3E8A]"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program) => (
                <ProgramCard key={program._id} program={program} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 rounded-3xl border border-dashed border-gray-200 bg-white/50">
              <p className="text-sm text-gray-500 font-inter">
                Belum ada program untuk mode ini. Coba filter lain.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
