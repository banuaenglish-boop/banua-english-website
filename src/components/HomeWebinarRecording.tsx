"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDots,
  Clock,
  VideoCamera,
  PlayCircle,
  Sparkle,
} from "@phosphor-icons/react";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import {
  videoCategoryLabels,
  type HomeVideo,
  type HomeWebinar,
} from "@/sanity/lib/types";

import SectionLabel from "@/components/ui/section-label";

export default function HomeWebinarRecording({
  webinars,
  recordings,
}: {
  webinars: HomeWebinar[];
  recordings: HomeVideo[];
}) {
  const upcomingWebinars: CardStackItem[] = webinars.map((webinar) => ({
    id: webinar._id,
    title: webinar.title,
    imageSrc: webinar.poster,
    href: "/webinar",
  }));

  return (
    <section className="relative bg-gray-50 section-y overflow-hidden">

      <div className="section-shell relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <SectionLabel variant="light">Webinar &amp; Recording</SectionLabel>
            <h2 className="font-poppins font-bold heading-2 text-[#1a2557]">
              Belajar Gratis dari
              <br />
              <span className="text-[#2C3E8A]">Sesi Terbaru Kami</span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm font-inter leading-relaxed">
              Ikuti webinar live bersama mentor &amp; awardee, atau akses rekaman
              sesi sebelumnya kapan saja, 100% gratis.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/webinar"
              className="inline-flex items-center gap-2 rounded-full bg-[#2C3E8A] px-5 py-2.5 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#1a2557] hover:-translate-y-0.5"
            >
              <VideoCamera size={14} weight="bold" />
              Lihat Semua Webinar
            </Link>
            <Link
              href="/recording"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#2C3E8A] px-5 py-2.5 text-xs font-bold text-[#2C3E8A] transition-all duration-300 hover:bg-[#2C3E8A] hover:text-white"
            >
              <PlayCircle size={14} weight="bold" />
              Arsip Recording
            </Link>
          </div>
        </div>

        {/* Split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch">
          {/* Left: 3D Card Stack Upcoming Webinars */}
          <div className="lg:col-span-3 rounded-3xl border border-blue-100 bg-white p-5 shadow-sm flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2C3E8A]">
                    <CalendarDots size={20} weight="bold" />
                  </span>
                  <div>
                    <h3 className="font-poppins font-bold text-base text-[#1a2557]">
                      Webinar Terdekat
                    </h3>
                    <p className="text-[11px] text-gray-400 font-medium">
                      Gratis • Geser atau klik kartu untuk melihat jadwal
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                  <Sparkle size={12} weight="bold" />
                  Open Registration
                </span>
              </div>

              {/* 3D Interactive Card Stack */}
              <div className="pt-10 pb-1">
                <CardStack
                  items={upcomingWebinars}
                  initialIndex={0}
                  autoAdvance
                  intervalMs={3500}
                  pauseOnHover
                  cardWidth={210}
                  cardHeight={295}
                />
              </div>
            </div>
          </div>

          {/* Right: Past Recordings */}
          <div className="lg:col-span-2 rounded-3xl bg-[#1a2557] p-5 relative overflow-hidden shadow-sm flex flex-col justify-between">

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD700] text-[#1a2557]">
                  <PlayCircle size={20} weight="bold" />
                </span>
                <div>
                  <h3 className="font-poppins font-bold text-base text-white">
                    Rekaman Terpopuler
                  </h3>
                  <p className="text-[11px] text-white/50 font-medium">
                    Akses kapan saja, gratis
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 mb-4">
                {recordings.map((recording, index) => (
                  <Link
                    key={recording._id}
                    href="/recording"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FFD700] font-poppins font-bold text-sm">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="font-poppins font-bold text-xs text-white leading-snug line-clamp-2 mb-1 group-hover:text-[#FFD700] transition-colors">
                        {recording.title}
                      </p>
                      <div className="flex items-center gap-2 text-[10px] text-white/50">
                        <span className="rounded-full bg-white/10 px-2 py-0.5 font-semibold">
                          {videoCategoryLabels[recording.category]}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} weight="bold" />
                          {recording.duration}
                        </span>
                        <span>{recording.views} views</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10">
              <Link
                href="/recording"
                className="group inline-flex items-center gap-2 text-xs font-bold text-[#FFD700] hover:underline"
              >
                Lihat semua rekaman
                <ArrowRight
                  size={12}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

