import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site";
import { ctaStats } from "@/lib/content";
import CourseLinks from "@/components/program/CourseLinks";

export default function SuccessCTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <CourseLinks />
        <div className="relative overflow-hidden rounded-3xl bg-[#2C3E8A] p-8 md:p-16">

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-poppins font-bold text-2xl md:text-4xl text-white leading-tight mb-4">
                Giliran Kamu yang Menulis{" "}
                <span className="text-[#FFD700]">Kisah Sukses</span> Berikutnya
              </h2>
              <p className="text-sm md:text-base text-white/70 font-inter leading-relaxed mb-8">
                Setiap alumni di atas memulai dari langkah yang sama: konsultasi
                gratis. Tentukan targetmu, biarkan tutor Awardee kami memandu
                langkah berikutnya.
              </p>
              <a
                href={siteConfig.waMe}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white pl-3 pr-6 py-2.5 rounded-full hover:-translate-y-0.5 transition-all duration-300 shadow-lg w-max"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2C3E8A] text-white transition-transform duration-300 group-hover:-rotate-45">
                  <ArrowRight size={16} weight="bold" />
                </span>
                <span className="text-xs md:text-sm font-poppins font-semibold text-[#2C3E8A]">
                  Mulai Konsultasi Gratis
                </span>
              </a>
            </div>

            {/* Right: mini stat cards */}
            <div className="grid w-full max-w-sm grid-cols-2 gap-4 shrink-0">
              {ctaStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center min-w-[130px]"
                >
                  <p className="font-poppins font-bold text-sm leading-snug text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-white/60 font-medium leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
