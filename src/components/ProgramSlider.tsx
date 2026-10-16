"use client";

import { useRef } from "react";
import Link from "next/link";
import { CaretLeft, CaretRight, ArrowRight } from "@phosphor-icons/react";
import type { Program } from "@/sanity/lib/types";
import { programIcons } from "@/components/program/program-icons";
import { badgeColorClass } from "@/lib/utils";
import { programRegistrationUrl } from "@/lib/site";
import { modeConfig } from "@/lib/content";
import { programDetailPath } from "@/lib/course-routes";

function ProgramCard({ program }: { program: Program }) {
  const detailPath = programDetailPath(program.title);
  const mode = modeConfig[program.mode] || {
    label: program.mode,
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  };

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={program.image}
          alt={program.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2">
          {program.badge ? (
            <span
              className={`min-w-0 truncate rounded-full px-3 py-1 text-[11px] font-bold shadow-lg ${badgeColorClass(
                program.badgeColor
              )}`}
            >
              {program.badge}
            </span>
          ) : (
            <span />
          )}

          <span
            className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${mode.bg} ${mode.text} ${mode.border}`}
          >
            {mode.label}
          </span>
        </div>

        {program.highlight && (
          <div className="absolute bottom-3 left-3 rounded-full border border-white/50 bg-white/90 px-3 py-1 text-[11px] font-bold text-[#2C3E8A] shadow">
            ✦ {program.highlight}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="mb-1 line-clamp-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">
            {program.subtitle}
          </p>
          <h3 className="font-poppins text-lg font-bold leading-snug text-[#1a2557]">
            {program.title}
          </h3>
        </div>

        <p className="text-xs leading-relaxed text-gray-500 line-clamp-3 font-inter">
          {program.description}
        </p>

        {detailPath && (
          <Link href={detailPath} className="text-sm font-semibold text-[#2C3E8A] underline underline-offset-4">
            Lihat detail persiapan {/\bIELTS\b/i.test(program.title) ? "IELTS" : "TOEFL"}
          </Link>
        )}

        <div className="mt-auto border-t border-gray-100 pt-3.5">
          <div className="grid grid-cols-2 gap-x-3 gap-y-2">
            {program.features?.map((feat) => (
              <div
                key={feat.label}
                className="flex min-w-0 items-center gap-2 text-[#2C3E8A]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  {programIcons[feat.iconKey]}
                </span>
                <span className="truncate text-[11px] font-medium text-gray-600">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <a
          href={programRegistrationUrl(program.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex w-full items-center justify-between rounded-xl bg-[#2C3E8A] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#1a2557] group/btn"
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

export default function ProgramSlider({ programs }: { programs: Program[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Slider Controls */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-gray-400 font-inter font-medium">
          Geser atau gunakan tombol panah untuk menjelajahi semua program ({programs.length})
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1a2557] shadow-xs transition-all hover:bg-[#2C3E8A] hover:text-white hover:border-[#2C3E8A] cursor-pointer"
          >
            <CaretLeft size={18} weight="bold" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1a2557] shadow-xs transition-all hover:bg-[#2C3E8A] hover:text-white hover:border-[#2C3E8A] cursor-pointer"
          >
            <CaretRight size={18} weight="bold" />
          </button>
        </div>
      </div>

      {/* Horizontal Slider Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth -mx-5 px-5 md:mx-0 md:px-0"
      >
        {programs.map((program) => (
          <div
            key={program._id}
            className="snap-start shrink-0 w-[82vw] sm:w-[340px] md:w-[370px]"
          >
            <ProgramCard program={program} />
          </div>
        ))}
      </div>
    </div>
  );
}
