"use client";

import { useState } from "react";
import { Star, Medal, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import SectionLabel from "@/components/ui/section-label";
import type { Testimonial, TestimonialProgram } from "@/sanity/lib/types";

type ProgramFilter = TestimonialProgram | "all";

const filterTabs: { key: ProgramFilter; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "ielts", label: "IELTS" },
  { key: "toefl", label: "TOEFL" },
  { key: "scholarship", label: "Scholarship" },
  { key: "private", label: "Private 1-on-1" },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
      {/* Score badge */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-bold text-[#2C3E8A]">
          {item.programLabel}
        </span>
        {item.score && <span className="flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-700">
          <Medal size={12} weight="bold" />
          {item.score}
        </span>}
      </div>

      {/* Quote */}
      <p className="text-sm text-gray-600 font-inter leading-relaxed mb-5 flex-1">
        &quot;{item.text}&quot;
      </p>

      {/* Achievement */}
      {item.achievement && <div className="mb-5 rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
          Pencapaian
        </p>
        <p className="text-xs font-semibold text-[#1a2557] flex items-center gap-1.5">
          <Star size={12} weight="fill" className="text-[#FFD700] shrink-0" />
          {item.achievement}
        </p>
      </div>}
      {item.tutor && <p className="mb-4 text-xs text-gray-500">Tutor: {item.tutor}</p>}

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-blue-100">
          {item.avatar ? <img
            src={item.avatar}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover"
          /> : <span className="flex h-full w-full items-center justify-center bg-blue-50 text-sm font-bold text-[#2C3E8A]" aria-hidden="true">{item.name.split(" ").slice(0, 2).map((part) => part[0]).join("")}</span>}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#1a2557]">
            {item.name}
          </p>
          <p className="text-[11px] text-gray-400">{[item.status, item.university].filter(Boolean).join(" · ")}</p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialGallery({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [activeFilter, setActiveFilter] = useState<ProgramFilter>("all");

  const filtered =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter((t) => t.program === activeFilter || (activeFilter === "private" && t.programLabel.startsWith("Private")) || (activeFilter === "scholarship" && t.achievement.includes("Beasiswa")));

  return (
    <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <SectionLabel variant="light">Testimoni Alumni</SectionLabel>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a2557] leading-tight">
            Filter Berdasarkan <span className="text-[#2C3E8A]">Program</span>
          </h2>
        </div>

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
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <TestimonialCard key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-3xl border border-dashed border-gray-200 bg-white/50">
            <p className="text-sm text-gray-500 font-inter">
              Belum ada testimoni untuk kategori ini.
            </p>
          </div>
        )}

        {/* Link to see more */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/englishbanua"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#2C3E8A] hover:underline"
          >
            Lihat lebih banyak cerita alumni di Instagram
            <ArrowUpRight
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
