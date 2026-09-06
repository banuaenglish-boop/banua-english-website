import { YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import SectionLabel from "@/components/ui/section-label";

export default function RecordingHero() {
  return (
    <section className="page-hero-bg relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[#2C3E8A]/35" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="animate-fade-up text-center lg:text-left">
          <SectionLabel variant="dark">Recording Archive</SectionLabel>
          <h1 className="font-poppins font-bold text-3xl md:text-5xl text-white leading-tight mb-4 max-w-xl">
            Tonton Webinar & Tutorial{" "}
            <span className="text-[#FFD700]">Gratis</span> Dari Channel Kami
          </h1>
          <p className="text-white/70 text-sm md:text-base font-inter leading-relaxed mb-6 max-w-xl">
            Semua recording webinar kami tersedia di YouTube, tonton kapan saja
            dan di mana saja tanpa perlu mendaftar. Materi IELTS, TOEFL,
            persiapan beasiswa, dan tips belajar bahasa Inggris.
          </p>
          <Link
            href="https://youtube.com/@englishbanua"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white pl-3 pr-6 py-2.5 rounded-full hover:-translate-y-0.5 transition-all duration-300 shadow-lg w-max mx-auto lg:mx-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-white transition-transform duration-300 group-hover:-rotate-45">
              <YoutubeLogo size={20} weight="fill" />
            </span>
            <span className="text-xs md:text-sm font-poppins font-semibold text-[#2C3E8A]">
              Buka Channel YouTube
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
