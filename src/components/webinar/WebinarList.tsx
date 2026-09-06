"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDateId } from "@/lib/utils";
import SectionLabel from "@/components/ui/section-label";
import DateFilter, { type DateSort } from "@/components/ui/date-filter";
import FilterDropdown from "@/components/ui/filter-dropdown";
import type { Webinar, WebinarCountry } from "@/sanity/lib/types";

const countryFilters: { key: WebinarCountry | "all"; label: string }[] = [
  { key: "all", label: "Semua" },
  { key: "uk", label: "🇬🇧 UK" },
  { key: "usa", label: "🇺🇸 USA" },
  { key: "australia", label: "🇦🇺 Australia" },
  { key: "eropa", label: "🇪🇺 Eropa" },
  { key: "indonesia", label: "🇮🇩 Indonesia" },
];

export default function WebinarList({ webinars }: { webinars: Webinar[] }) {
  const [activeCountry, setActiveCountry] = useState<WebinarCountry | "all">(
    "all"
  );
  const [dateSort, setDateSort] = useState<DateSort>("terbaru");

  const filteredWebinars = useMemo(() => {
    const byCountry =
      activeCountry === "all"
        ? webinars
        : webinars.filter((w) => w.country === activeCountry);

    // ISO dates sort correctly as plain strings.
    if (dateSort === "upcoming") {
      const today = new Date().toISOString().slice(0, 10);
      return byCountry
        .filter((w) => w.date >= today)
        .sort((a, b) => a.date.localeCompare(b.date));
    }
    return [...byCountry].sort((a, b) => b.date.localeCompare(a.date));
  }, [activeCountry, dateSort, webinars]);

  return (
    <section
      id="webinar-list"
      className="bg-gray-50 py-16 md:py-24 relative overflow-hidden scroll-mt-20"
    >
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <SectionLabel variant="light">Jadwal Webinar</SectionLabel>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a2557] leading-tight mt-4">
            Webinar <span className="text-[#2C3E8A]">Mendatang</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-3 max-w-xl mx-auto">
            Temukan sesi webinar terbaik untuk persiapan studi abroad Anda
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="text-sm font-bold text-gray-400 whitespace-nowrap">Filter:</span>
            <FilterDropdown
              value={activeCountry}
              onChange={setActiveCountry}
              options={countryFilters}
              label="Pilih negara filter"
            />
          </div>

          <div className="w-full sm:w-auto">
            <DateFilter value={dateSort} onChange={setDateSort} />
          </div>
        </div>

        {/* Grid */}
        {filteredWebinars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWebinars.map((webinar) => (
              <Link
                key={webinar._id}
                href={webinar.registrationUrl ?? "/kontak"}
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2C3E8A]"
              >
                <Image
                  src={webinar.poster}
                  alt={`Poster webinar ${webinar.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#2C3E8A]">
                  {formatDateId(webinar.date)}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-3xl border border-dashed border-gray-200 bg-white/50">
            <p className="text-sm text-gray-500 font-inter">
              {dateSort === "upcoming"
                ? "Belum ada webinar mendatang untuk filter ini. Coba lihat yang terbaru atau pantau halaman ini secara berkala! 🎓"
                : "Belum ada webinar terjadwal untuk negara ini. Cek kategori lain atau pantau halaman ini secara berkala! 🎓"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
