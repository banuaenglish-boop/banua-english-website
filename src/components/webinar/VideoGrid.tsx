"use client";

import { useMemo, useState } from "react";
import {
  PlayCircle,
  CalendarBlank,
  Eye,
  Clock,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";
import { formatDateId, safeYoutubeUrl, todayISO } from "@/lib/utils";
import { socialUrls } from "@/lib/site";
import SectionLabel from "@/components/ui/section-label";
import DateFilter, { type DateSort } from "@/components/ui/date-filter";
import FilterDropdown from "@/components/ui/filter-dropdown";
import {
  videoCategoryLabels,
  type Video,
  type VideoCategory,
} from "@/sanity/lib/types";

type CategoryFilter = VideoCategory | "all";

const categoryFilters: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "ielts", label: "IELTS" },
  { key: "toefl", label: "TOEFL" },
  { key: "scholarship", label: "Scholarship" },
  { key: "general", label: "General English" },
];

function VideoCard({ video }: { video: Video }) {
  const href = safeYoutubeUrl(video.youtubeUrl);
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg"
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Duration badge */}
        <span className="absolute bottom-3 right-3 rounded-md bg-black/80 px-2 py-1 text-[10px] font-bold text-white flex items-center gap-1">
          <Clock size={10} weight="bold" />
          {video.duration}
        </span>

        {/* Play button overlay */}
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg scale-75 transition-transform duration-300 group-hover:scale-100">
            <PlayCircle size={28} weight="fill" />
          </span>
        </span>

        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-[#2C3E8A]">
          {videoCategoryLabels[video.category]}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-poppins font-bold text-sm text-[#1a2557] leading-snug line-clamp-2 mb-3 group-hover:text-[#2C3E8A] transition-colors">
          {video.title}
        </h3>
        <div className="mt-auto flex items-center justify-between text-[11px] text-gray-400 font-inter">
          <span className="flex items-center gap-1.5">
            <CalendarBlank size={12} weight="bold" />
            {formatDateId(video.date)}
          </span>
          {video.views && <span className="flex items-center gap-1.5">
            <Eye size={12} weight="bold" />
            {video.views}
          </span>}
        </div>
      </div>
    </a>
  );
}

export default function VideoGrid({
  videos,
  id,
}: {
  videos: Video[];
  id?: string;
}) {
  const [dateSort, setDateSort] = useState<DateSort>("terbaru");
  const [category, setCategory] = useState<CategoryFilter>("all");

  // ISO dates sort correctly as plain strings.
  const visibleVideos = useMemo(() => {
    const byCategory =
      category === "all"
        ? videos
        : videos.filter((v) => v.category === category);
    if (dateSort === "upcoming") {
      const today = todayISO();
      return byCategory
        .filter((v) => v.date >= today)
        .sort((a, b) => a.date.localeCompare(b.date));
    }
    return [...byCategory].sort((a, b) => b.date.localeCompare(a.date));
  }, [dateSort, category, videos]);

  return (
    <section
      id={id}
      className="scroll-mt-20 bg-gray-50 py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-8">
          <SectionLabel variant="light">Video Library</SectionLabel>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a2557] leading-tight">
            Jelajahi Berdasarkan <span className="text-[#2C3E8A]">Kategori</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-inter leading-relaxed mt-4">
            Pilih topik yang paling kamu butuhkan, semua video gratis dan bisa
            ditonton langsung di YouTube.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-sm font-bold text-gray-400 whitespace-nowrap">Filter:</span>
            <FilterDropdown
              value={category}
              onChange={setCategory}
              options={categoryFilters}
              label="Pilih kategori video"
            />
          </div>

          <div className="w-full sm:w-auto">
            <DateFilter value={dateSort} onChange={setDateSort} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleVideos.map((video) => (
            <VideoCard key={video._id} video={video} />
          ))}
        </div>

        {visibleVideos.length === 0 && (
          <div className="text-center py-16 rounded-3xl border border-dashed border-gray-200 bg-white/50">
            <p className="text-sm text-gray-500 font-inter">
              Belum ada video yang cocok dengan filter ini. Coba kategori lain
              atau tab Terbaru! 🎬
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border-2 border-dashed border-gray-200 bg-white p-8 md:p-12 text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 mb-5">
            <YoutubeLogo size={32} weight="fill" />
          </span>
          <h3 className="font-poppins font-bold text-2xl md:text-3xl text-[#1a2557] mb-3">
            Masih Ada Puluhan Video Lainnya
          </h3>
          <p className="text-sm text-gray-500 font-inter leading-relaxed max-w-lg mx-auto mb-6">
            Kunjungi channel YouTube kami untuk menjelajahi seluruh arsip
            webinar, tutorial, dan tips belajar bahasa Inggris, semuanya gratis.
          </p>
          <a
            href={socialUrls.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#2C3E8A] px-8 py-3.5 text-sm font-poppins font-bold text-white transition-all duration-300 hover:bg-[#1a2557] hover:shadow-xl hover:-translate-y-0.5"
          >
            <YoutubeLogo size={18} weight="fill" />
            Lihat Semua di YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
