import Link from "next/link";
import {
  PlayCircle,
  ArrowRight,
  YoutubeLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/ui/section-label";
import { sanityFetch } from "@/sanity/lib/live";
import { PAST_WEBINARS_QUERY } from "@/sanity/lib/queries";

export default async function PastWebinars() {
  const { data: pastWebinars } = await sanityFetch({
    query: PAST_WEBINARS_QUERY,
  });

  return (
    <>
      {/* Past webinars archive */}
      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-xl">
              <SectionLabel variant="light">Arsip Webinar</SectionLabel>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a2557] leading-tight">
                Tonton Webinar <span className="text-[#2C3E8A]">Sebelumnya</span>
              </h2>
            </div>
            <Link
              href="/recording"
              className="group flex items-center gap-2 text-[#2C3E8A] text-sm font-bold hover:underline whitespace-nowrap"
            >
              Lihat Semua Recording
              <ArrowRight
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pastWebinars.map((webinar) => (
              <a
                key={webinar._id}
                href={webinar.youtubeUrl ?? "https://youtube.com/@englishbanua"}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-blue-100"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-transform duration-300 group-hover:scale-110">
                  <PlayCircle size={24} weight="fill" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-[#1a2557] leading-snug line-clamp-2 group-hover:text-[#2C3E8A] transition-colors mb-1">
                    {webinar.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-inter truncate">
                    {webinar.speaker} · {webinar.dateLabel}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] font-bold text-gray-400">
                  {webinar.views}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / subscribe CTA */}
      <section className="bg-gray-50 py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#2C3E8A] p-8 md:p-12">

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-3">
                  Jangan Sampai Ketinggalan Webinar Berikutnya
                </h2>
                <p className="text-sm text-white/70 font-inter leading-relaxed mb-6">
                  Subscribe channel YouTube kami untuk tidak ketinggalan
                  recording webinar, atau hubungi kami untuk info jadwal
                  terbaru.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                  <a
                    href="https://youtube.com/@englishbanua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-[#FFD700] px-6 py-3 text-sm font-poppins font-bold text-[#1a2557] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 w-max"
                  >
                    <YoutubeLogo size={18} weight="fill" />
                    Subscribe YouTube
                  </a>
                  <a
                    href="/kontak"
                    className="flex items-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-poppins font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                  >
                    <EnvelopeSimple size={18} weight="bold" />
                    Hubungi Kami
                  </a>
                </div>
              </div>

              {/* Decorative stat */}
              <div className="hidden lg:flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/10 p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFD700] text-[#1a2557]">
                  <PlayCircle size={28} weight="fill" />
                </span>
                <p className="font-poppins font-bold text-3xl text-white">40+</p>
                <p className="text-xs text-white/60 font-medium text-center">
                  Recording webinar
                  <br />
                  gratis di YouTube
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
