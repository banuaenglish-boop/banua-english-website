import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site";
import { ctaStats } from "@/lib/content";

export default function HomeCTABanner() {
  return (
    <section className="relative bg-[#2C3E8A] section-y overflow-hidden">

      <div className="section-shell relative z-10">
        <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 md:p-10">

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left */}
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-poppins font-bold heading-2 text-white mb-3">
                Giliran Kamu yang Menulis{" "}
                <span className="text-[#FFD700]">Kisah Sukses</span> Berikutnya
              </h2>
              <p className="text-sm text-white/70 font-inter leading-relaxed mb-5">
                Setiap alumni memulai dari langkah yang sama: konsultasi gratis.
                Tentukan targetmu, biarkan tutor Awardee kami memandu langkah
                berikutnya.
              </p>
              <a
                href={siteConfig.waMe}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white pl-2.5 pr-5 py-2 rounded-full hover:-translate-y-0.5 transition-all duration-300 shadow-lg w-max"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2C3E8A] text-white transition-transform duration-300 group-hover:-rotate-45">
                  <ArrowRight size={15} weight="bold" />
                </span>
                <span className="text-xs md:text-sm font-poppins font-semibold text-[#2C3E8A]">
                  Mulai Konsultasi Gratis
                </span>
              </a>
            </div>

            {/* Right: mini stat cards */}
            <div className="grid w-full max-w-sm grid-cols-2 gap-3 shrink-0">
              {ctaStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center min-w-[120px]"
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
