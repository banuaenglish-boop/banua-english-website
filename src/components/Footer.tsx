import Link from "next/link";
import {
  InstagramLogo,
  YoutubeLogo,
  WhatsappLogo,
  MapPin,
  EnvelopeSimple,
  Phone,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { siteConfig, socialUrls, hoursDisplay } from "@/lib/site";

const whatsappUrl = siteConfig.waMe;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Kelas & Program" },
  { href: "/webinar", label: "Webinar" },
  { href: "/testimoni", label: "Alumni" },
  { href: "/cerita-banua", label: "Cerita Banua" },
  { href: "/tentang-kami", label: "Tentang Kami" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a2557] text-white">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp English Banua"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] md:h-16 md:w-16"
      >
        <WhatsappLogo size={30} weight="bold" />
      </a>

      {/* Main footer content */}
      <div className="container mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <img
                src="/logo.png"
                alt="English Banua Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/60 leading-relaxed font-inter mb-6">
              Lembaga kursus bahasa Inggris, TOEFL, dan IELTS di Banjarmasin.
              Dibimbing tutor Awardee S1 &amp; S2 dari dalam dan luar negeri.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={socialUrls.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram English Banua"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#FFD700] hover:text-[#1a2557] hover:-translate-y-1"
              >
                <InstagramLogo size={18} weight="bold" />
              </a>
              <a
                href={socialUrls.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube English Banua"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#FFD700] hover:text-[#1a2557] hover:-translate-y-1"
              >
                <YoutubeLogo size={18} weight="bold" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp English Banua"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-[#FFD700] hover:text-[#1a2557] hover:-translate-y-1"
              >
                <WhatsappLogo size={18} weight="bold" />
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-poppins font-bold text-sm uppercase tracking-[0.15em] text-white mb-5">
              Navigasi
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 font-inter transition-colors duration-300 hover:text-white"
                  >
                    <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-3">
                      <ArrowRight size={12} weight="bold" />
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs column */}
          <div>
            <h3 className="font-poppins font-bold text-sm uppercase tracking-[0.15em] text-white mb-5">
              Program Unggulan
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Private 1-on-1",
                "IELTS Preparation",
                "TOEFL Preparation",
                "IELTS for Scholarship",
                "Online Scoring",
              ].map((program) => (
                <li key={program}>
                  <Link
                    href="/program"
                    className="text-sm text-white/60 font-inter transition-colors duration-300 hover:text-white"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-poppins font-bold text-sm uppercase tracking-[0.15em] text-white mb-5">
              Hubungi Kami
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FFD700]">
                  <MapPin size={15} weight="bold" />
                </span>
                <p className="text-sm text-white/60 font-inter leading-relaxed">
                  Banjarmasin, Kalimantan Selatan
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FFD700]">
                  <WhatsappLogo size={15} weight="bold" />
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 font-inter transition-colors hover:text-white"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FFD700]">
                  <EnvelopeSimple size={15} weight="bold" />
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/60 font-inter transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#FFD700]">
                  <Phone size={15} weight="bold" />
                </span>
                <p className="text-sm text-white/60 font-inter leading-relaxed">
                  {hoursDisplay}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 font-inter">
            © {new Date().getFullYear()} PT. Banua Education Center. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40 font-inter">
            IELTS &amp; TOEFL Preparation, Banjarmasin, Kalimantan Selatan
          </p>
        </div>
      </div>
    </footer>
  );
}
