import {
  VideoCamera,
  Users,
  GlobeHemisphereWest,
  ArrowRight,
  CalendarDots,
  PlayCircle,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/ui/section-label";

const stats = [
  {
    icon: <VideoCamera size={20} weight="bold" />,
    value: "2-3×",
    label: "Webinar per bulan",
  },
  {
    icon: <Users size={20} weight="bold" />,
    value: "1000+",
    label: "Peserta per sesi",
  },
  {
    icon: <GlobeHemisphereWest size={20} weight="bold" />,
    value: "100%",
    label: "Gratis & terbuka",
  },
];

export default function WebinarHero() {
  return (
    <section className="page-hero-bg relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[#2C3E8A]/35" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            <SectionLabel variant="dark">Webinar Gratis</SectionLabel>
            <h1 className="font-poppins font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
              Belajar dari{" "}
              <span className="text-[#FFD700]">Awardee</span>, Langsung dari
              Rumahmu
            </h1>
            <p className="text-white/70 text-sm md:text-base font-inter leading-relaxed mb-8 max-w-xl">
              Webinar gratis seputar persiapan IELTS, TOEFL, dan strategi
              beasiswa. Dipandu langsung oleh awardee yang sudah menempuh
              pendidikan di universitas luar negeri, dari strategi essay,
              speaking, hingga simulasi wawancara.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <Link
                href="#webinar-list"
                className="group flex items-center gap-3 bg-white pl-3 pr-6 py-2.5 rounded-full hover:-translate-y-0.5 transition-all duration-300 shadow-lg w-max"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2C3E8A] text-white transition-transform duration-300 group-hover:-rotate-45">
                  <CalendarDots size={16} weight="bold" />
                </span>
                <span className="text-xs md:text-sm font-poppins font-semibold text-[#2C3E8A]">
                  Lihat Jadwal Webinar
                </span>
              </Link>
              <Link
                href="/recording"
                className="group flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors"
              >
                <PlayCircle size={18} weight="bold" />
                Tonton Recording
                <ArrowRight
                  size={14}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-[#FFD700]">
                    {stat.icon}
                  </span>
                  <h3 className="font-poppins font-bold text-xl md:text-2xl text-white leading-none mt-1">
                    {stat.value}
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/60 font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: featured webinar poster */}
          <div className="hidden lg:flex animate-fade-up [animation-delay:200ms] relative justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/15 shadow-2xl">
              {/* ponytail: dummy poster. Swap src for the real poster (portrait 3:4). */}
              <Image
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800&h=1066"
                alt="Poster webinar Strategi Essay LPDP dari Nol sampai Lolos"
                width={800}
                height={1066}
                className="aspect-[3/4] w-full object-cover"
                priority
              />

              {/* Freshness label */}
              <span className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                Up Next
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
