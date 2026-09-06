import Link from "next/link";
import {
  ChatCircleText,
  CalendarCheck,
  BookOpenText,
  RocketLaunch,
  ArrowRight,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/ui/section-label";

const steps = [
  {
    number: "01",
    icon: <ChatCircleText size={22} weight="bold" />,
    title: "Konsultasi Gratis",
    description:
      "Hubungi kami via WhatsApp dan ceritakan targetmu, skor IELTS/TOEFL, beasiswa, atau universitas impian.",
  },
  {
    number: "02",
    icon: <CalendarCheck size={22} weight="bold" />,
    title: "Pilih Program & Jadwal",
    description:
      "Tim kami akan merekomendasikan program yang paling sesuai, lalu kamu tentukan jadwal yang fleksibel.",
  },
  {
    number: "03",
    icon: <BookOpenText size={22} weight="bold" />,
    title: "Mulai Belajar",
    description:
      "Masuk kelas dan langsung dibimbing tutor Awardee. Progres dipantau rutin dengan feedback terukur.",
  },
  {
    number: "04",
    icon: <RocketLaunch size={22} weight="bold" />,
    title: "Raih Target",
    description:
      "Ikuti simulasi scoring, perbaiki area lemah, dan capai skor yang kamu butuhkan untuk masa depanmu.",
  },
];

export default function RegistrationSteps() {
  return (
    <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-14">
          <SectionLabel variant="light">Cara Daftar</SectionLabel>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a2557] leading-tight mb-4">
            Mulai dalam{" "}
            <span className="text-[#2C3E8A]">4 Langkah</span> Mudah
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-inter leading-relaxed">
            Tidak perlu ribet, dari konsultasi sampai kelas dimulai bisa
            selesai dalam hitungan hari.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-[#2C3E8A]/20" />
              )}

              <div className="flex flex-col items-center text-center h-full rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="relative mb-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2C3E8A] text-white shadow-lg">
                    {step.icon}
                  </span>
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#FFD700] text-[#1a2557] text-[11px] font-poppins font-bold shadow">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-base text-[#1a2557] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 font-inter leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/kontak"
            className="group flex items-center gap-3 bg-[#2C3E8A] hover:bg-[#1a2557] text-white pl-3 pr-6 py-3 rounded-full font-poppins font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={16} weight="bold" />
            </span>
            Daftar Sekarang
          </Link>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 border-2 border-[#2C3E8A] text-[#2C3E8A] hover:bg-[#2C3E8A] hover:text-white px-6 py-3 rounded-full font-poppins font-semibold text-sm transition-all duration-300"
          >
            <WhatsappLogo size={18} weight="bold" />
            Chat WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
