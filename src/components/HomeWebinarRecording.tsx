"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDots, Clock, Play, PlayCircle, VideoCamera } from "@phosphor-icons/react";
import { formatDateId } from "@/lib/utils";
import { videoCategoryLabels, type HomeVideo, type HomeWebinar } from "@/sanity/lib/types";
import SectionLabel from "@/components/ui/section-label";

const focusRing = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2C3E8A]";

export default function HomeWebinarRecording({ webinars, recordings }: { webinars: HomeWebinar[]; recordings: HomeVideo[] }) {
  const [selectedId, setSelectedId] = useState(webinars[0]?._id);
  const selectedIndex = Math.max(0, webinars.findIndex((webinar) => webinar._id === selectedId));
  const selectedWebinar = webinars[selectedIndex];

  function changeWebinar(direction: number) {
    const nextIndex = (selectedIndex + direction + webinars.length) % webinars.length;
    setSelectedId(webinars[nextIndex]._id);
  }

  return (
    <section className="relative overflow-hidden bg-gray-50 section-y">
      <div className="section-shell">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionLabel variant="light">Webinar &amp; Recording</SectionLabel>
            <h2 className="font-poppins font-bold heading-2 text-[#1a2557]">Belajar Gratis dari<br /><span className="text-[#2C3E8A]">Sesi Terbaru Kami</span></h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">Ikuti webinar bersama mentor &amp; awardee, atau pelajari rekamannya kapan saja. Semuanya gratis.</p>
          </div>
          <Link href="/webinar" className={`group inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-blue-200 bg-white px-5 text-sm font-semibold text-[#2C3E8A] transition-colors hover:bg-blue-50 ${focusRing}`}>
            Jelajahi semua sesi <ArrowRight size={16} weight="bold" className="transition-transform motion-safe:group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.45fr_1fr]">
          <div className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
            <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 sm:px-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#2C3E8A]"><CalendarDots size={22} weight="duotone" /></span>
              <div>
                <h3 className="font-poppins text-base font-bold text-[#1a2557]">Pilihan Webinar</h3>
                <p className="mt-0.5 text-xs text-gray-500">Kenali peluang studi dari para awardee</p>
              </div>
              <span className="ml-auto rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">Gratis</span>
            </div>

            {selectedWebinar ? (
              <>
                <div className="grid flex-1 items-center gap-5 p-5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] sm:gap-6 sm:p-6">
                  <Link href="/webinar#webinar-list" aria-label={`Lihat jadwal ${selectedWebinar.title}`} className={`relative mx-auto block aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-2xl bg-[#eef2fa] ring-1 ring-blue-100 ${focusRing}`}>
                    <Image src={selectedWebinar.poster} alt={`Poster ${selectedWebinar.title}`} fill sizes="(min-width: 1024px) 230px, (min-width: 640px) 240px, 70vw" className="object-contain" />
                  </Link>
                  <div aria-live="polite" aria-atomic="true" className="min-w-0">
                    <span className="mb-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2C3E8A]"><VideoCamera size={15} weight="bold" /> Webinar pilihan</span>
                    <h4 className="font-poppins text-xl font-bold leading-snug text-[#1a2557] sm:text-[22px]">{selectedWebinar.title}</h4>
                    {selectedWebinar.date && <p className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-600"><CalendarDots size={18} className="shrink-0 text-[#2C3E8A]" /><time dateTime={selectedWebinar.date}>{formatDateId(selectedWebinar.date)}</time></p>}
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">Temukan informasi beasiswa dan pengalaman studi langsung dari narasumber.</p>
                    <Link href="/webinar#webinar-list" className={`mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#2C3E8A] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#1a2557] ${focusRing}`}>
                      Lihat jadwal &amp; daftar <ArrowRight size={16} weight="bold" />
                    </Link>
                  </div>
                </div>

                {webinars.length > 1 && (
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-slate-50/70 px-5 py-4 sm:px-6">
                    <div className="flex min-w-0 flex-wrap gap-2" role="group" aria-label="Pilih webinar">
                      {webinars.map((webinar, index) => (
                        <button key={webinar._id} type="button" onClick={() => setSelectedId(webinar._id)} aria-label={`Tampilkan ${webinar.title}`} aria-pressed={selectedIndex === index} className={`relative h-14 w-11 overflow-hidden rounded-lg border-2 transition-colors ${selectedIndex === index ? "border-[#2C3E8A] ring-2 ring-blue-100" : "border-transparent opacity-60 hover:border-blue-200 hover:opacity-100"} ${focusRing}`}>
                          <Image src={webinar.poster} alt="" fill sizes="44px" className="object-cover" />
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="mr-1 text-xs font-medium tabular-nums text-gray-500">{selectedIndex + 1} / {webinars.length}</span>
                      <button type="button" onClick={() => changeWebinar(-1)} aria-label="Webinar sebelumnya" className={`flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#2C3E8A] transition-colors hover:bg-blue-50 ${focusRing}`}><ArrowLeft size={16} weight="bold" /></button>
                      <button type="button" onClick={() => changeWebinar(1)} aria-label="Webinar berikutnya" className={`flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#2C3E8A] transition-colors hover:bg-blue-50 ${focusRing}`}><ArrowRight size={16} weight="bold" /></button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-1 flex-col items-start justify-center gap-4 p-6">
                <p className="text-sm leading-relaxed text-gray-500">Jadwal webinar baru akan hadir di sini. Sambil menunggu, kamu bisa belajar dari rekaman sesi sebelumnya.</p>
                <Link href="/webinar#recording" className={`text-sm font-semibold text-[#2C3E8A] ${focusRing}`}>Jelajahi rekaman <span aria-hidden="true">→</span></Link>
              </div>
            )}
          </div>

          <div className="flex min-w-0 flex-col rounded-3xl bg-[#1a2557] p-5 text-white shadow-sm sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFD700] text-[#1a2557]"><PlayCircle size={23} weight="duotone" /></span>
              <div>
                <h3 className="font-poppins text-base font-bold">Rekaman Pilihan</h3>
                <p className="mt-0.5 text-xs text-blue-100/80">Belajar sesuai waktumu, tanpa biaya</p>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              {recordings.map((recording, index) => (
                <Link key={recording._id} href="/webinar#recording" className="group flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:border-white/25 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD700]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#FFD700] transition-colors group-hover:bg-[#FFD700] group-hover:text-[#1a2557]"><Play size={18} weight="fill" /></span>
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px]">
                      <span className="font-semibold uppercase tracking-wider text-[#FFD700]">{videoCategoryLabels[recording.category]}</span>
                      <span className="text-blue-100/75">•</span>
                      <span className="inline-flex items-center gap-1 text-blue-100/80"><Clock size={12} />{recording.duration}</span>
                    </div>
                    <h4 className="text-sm font-semibold leading-relaxed text-white group-hover:text-yellow-100">{recording.title}</h4>
                    {recording.views && <p className="mt-1 text-xs text-blue-100/80">{recording.views} kali ditonton</p>}
                  </div>
                  <span className="self-start text-[11px] font-medium tabular-nums text-blue-100/40" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                </Link>
              ))}
              {recordings.length === 0 && <p className="py-6 text-sm leading-relaxed text-blue-100">Rekaman baru akan segera tersedia. Cek jadwal webinar untuk menemukan sesi berikutnya.</p>}
            </div>
            <Link href="/webinar#recording" className="mt-5 flex min-h-11 items-center justify-between rounded-xl bg-[#FFD700] px-4 py-3 text-sm font-bold text-[#1a2557] transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFD700]">
              Lihat semua rekaman <ArrowRight size={17} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
