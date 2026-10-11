import SectionLabel from "@/components/ui/section-label";

const destinationLogos = [
  "Melbourne",
  "NUS",
  "Osaka",
  "Cranfield",
  "Edinburgh",
  "Univ. Indonesia",
  "ERASMUS",
  "LPDP",
];

export default function TestimoniHero() {
  return (
    <section className="page-hero-bg relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[#2C3E8A]/35" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <SectionLabel variant="dark">Alumni Stories</SectionLabel>
          <h1 className="font-poppins font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
            Mereka Sudah <span className="text-[#FFD700]">Membuktikan</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base font-inter leading-relaxed mb-10">
            Kenali pengalaman peserta IELTS dan TOEFL di English Banua,
            dari kesan selama belajar hingga cerita perjalanan mereka.
          </p>

        </div>

        {/* Destination marquee strip */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
            Alumni kami diterima di
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {destinationLogos.map((dest) => (
              <span
                key={dest}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 font-inter"
              >
                {dest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
