"use client";

import { useRef, useState } from "react";
import { CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/ui/section-label";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/sanity/lib/types";

export default function TeamGrid({ team }: { team: TeamMember[] }) {
  // ponytail: satu kartu terbuka sekaligus. Ganti ke Set<string> kalau perlu banyak.
  const [flipped, setFlipped] = useState<string | null>(null);
  const rail = useRef<HTMLDivElement>(null);

  // ponytail: scroll native, tanpa state posisi jadi panah selalu aktif.
  // Tambah disabled-state kalau nanti perlu indikator ujung rail.
  const slide = (dir: 1 | -1) =>
    rail.current?.scrollBy({
      left: dir * rail.current.clientWidth * 0.8,
      behavior: "smooth",
    });

  return (
    /* 4. Siapa yang menjalankan */
    <section className="bg-linear-to-b from-gray-50 to-white section-y">
      <div className="section-shell">
        {/* Header */}
        <div className="reveal mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <SectionLabel variant="light">Tim Kami</SectionLabel>
            <h2 className="font-poppins font-bold heading-2 text-[#1a2557] mb-3">
              Orang-orang di Balik{" "}
              <span className="text-[#2C3E8A]">English Banua</span>
            </h2>
            <p className="text-gray-500 text-sm font-inter leading-relaxed">
              Perjalanan itu digerakkan orang. Founder, tutor, dan volunteer,
              semuanya berdedikasi membawa siswa Indonesia ke jenjang pendidikan
              yang lebih tinggi.
            </p>
          </div>

          {/* Panah geser (desktop; mobile pakai swipe) */}
          <div className="hidden md:flex gap-2 shrink-0">
            {([
              [-1, "Geser ke kiri", CaretLeft],
              [1, "Geser ke kanan", CaretRight],
            ] as const).map(([dir, label, Icon]) => (
              <button
                key={label}
                type="button"
                onClick={() => slide(dir)}
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-gray-200 text-[#2C3E8A] transition-colors hover:bg-[#2C3E8A] hover:text-white hover:border-[#2C3E8A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C3E8A]"
              >
                <Icon size={18} weight="bold" />
              </button>
            ))}
          </div>
        </div>

        {/* Rail horizontal */}
        <div
          ref={rail}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 py-2"
        >
          {team.map((member) => {
            const isFlipped = flipped === member._id;
            return (
              <button
                key={member._id}
                type="button"
                onClick={() => setFlipped(isFlipped ? null : member._id)}
                aria-expanded={isFlipped}
                className="group snap-start shrink-0 w-[70vw] sm:w-[45vw] md:w-[260px] aspect-4/5 cursor-pointer perspective-distant rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C3E8A]"
              >
                <div
                  className={cn(
                    "relative h-full w-full transition-transform duration-500 transform-3d",
                    isFlipped && "rotate-y-180"
                  )}
                >
                  {/* Depan: foto + nama */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl bg-gray-100 backface-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={`Tim ${member.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-4 pt-10 text-left">
                      <h3 className="font-poppins font-bold text-sm text-white">
                        {member.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-white/70 font-inter">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Belakang: profil singkat */}
                  <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-linear-to-br from-[#2C3E8A] to-[#141d47] p-5 text-left backface-hidden rotate-y-180">
                    <div
                      aria-hidden
                      className="absolute -right-6 -top-6 size-28 rounded-full bg-white/5"
                    />
                    <Quotes
                      size={28}
                      weight="fill"
                      className="text-white/20 shrink-0"
                    />
                    <p className="relative text-sm text-white/90 font-inter leading-relaxed">
                      {member.description}
                    </p>
                    <div className="relative border-t border-white/15 pt-3">
                      <p className="font-poppins font-bold text-sm text-white">
                        {member.name}
                      </p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-wider text-white/50 font-inter">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-center text-xs text-gray-400 md:text-left">
          Geser untuk lihat tim lainnya, klik kartu untuk profil singkat
        </p>
      </div>
    </section>
  );
}
