import {
  WhatsappLogo,
  Clock,
  ShieldCheck,
  ChatsCircle,
} from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/ui/section-label";

const badges = [
  {
    icon: <ChatsCircle size={18} weight="bold" />,
    label: "Respons cepat < 5 menit",
  },
  {
    icon: <Clock size={18} weight="bold" />,
    label: "Senin-Sabtu, 09.00-17.00 WITA",
  },
  {
    icon: <ShieldCheck size={18} weight="bold" />,
    label: "Konsultasi 100% gratis",
  },
];

export default function KontakHero() {
  return (
    <section className="page-hero-bg relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[#2C3E8A]/35" />

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-2xl animate-fade-up">
          <SectionLabel variant="dark">Kontak &amp; Pendaftaran</SectionLabel>
          <h1 className="font-poppins font-bold text-3xl md:text-5xl text-white leading-tight mb-4">
            Mulai dengan <span className="text-[#FFD700]">Konsultasi Gratis</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base font-inter leading-relaxed mb-8">
            Ceritakan targetmu, skor IELTS/TOEFL, beasiswa, atau universitas
            impian. Tim kami akan merekomendasikan program yang paling sesuai
            untukmu, tanpa biaya sepeser pun.
          </p>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20English%20Banua%2C%20saya%20ingin%20konsultasi%20program%20belajar"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] pl-3 pr-6 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:scale-110">
              <WhatsappLogo size={20} weight="bold" />
            </span>
            <span className="text-xs md:text-sm font-poppins font-semibold text-white">
              Chat WhatsApp Sekarang
            </span>
          </a>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[11px] font-semibold text-white/80"
              >
                <span className="text-[#FFD700]">{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
