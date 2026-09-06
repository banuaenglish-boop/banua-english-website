import Link from "next/link";
import {
  GraduationCap,
  Handshake,
  ArrowRight,
  InstagramLogo,
  YoutubeLogo,
  GlobeHemisphereWest,
} from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/ui/section-label";
import { sanityFetch } from "@/sanity/lib/live";
import { PARTNERS_QUERY } from "@/sanity/lib/queries";

const channels = [
  {
    icon: <InstagramLogo size={20} weight="fill" />,
    title: "Instagram",
    handle: "@englishbanua",
    href: "https://instagram.com/englishbanua",
    description: "Info kelas, tips harian, dan cerita alumni.",
  },
  {
    icon: <YoutubeLogo size={20} weight="fill" />,
    title: "YouTube",
    handle: "@EnglishBanua",
    href: "https://youtube.com/@englishbanua",
    description: "Recording webinar & tutorial gratis setiap minggu.",
  },
  {
    icon: <GlobeHemisphereWest size={20} weight="bold" />,
    title: "Webinar",
    handle: "2-3× per bulan",
    href: "/webinar",
    description: "Sesi live gratis bersama tutor dan alumni awardee.",
  },
];

export default async function Partnerships() {
  const { data: partners } = await sanityFetch({ query: PARTNERS_QUERY });

  return (
    <>
      {/* 5. Ke mana ini mengantar */}
      <section className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 section-y">
        <div className="section-shell relative z-10">
          <div className="reveal mx-auto mb-12 max-w-xl text-center">
            <SectionLabel variant="light">Partnership</SectionLabel>
            <h2 className="mb-4 font-poppins heading-2 font-bold text-[#1a2557]">
              Terhubung dengan{" "}
              <span className="text-[#2C3E8A]">Universitas Dunia</span>
            </h2>
            <p className="font-inter text-sm leading-relaxed text-gray-500 md:text-base">
              Ke mana tim ini mengantar siswanya? Jaringan alumni dan kemitraan
              kami membentang dari Inggris, Selandia Baru, hingga Eropa, membuka
              wawasan dan peluang bagi setiap siswa.
            </p>
          </div>

          {/* Partner grid */}
          <div className="reveal mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner._id}
                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2C3E8A] text-white transition-transform duration-300 group-hover:scale-110">
                  <GraduationCap size={22} weight="bold" />
                </span>
                <div>
                  <h3 className="font-poppins text-sm font-bold leading-tight text-[#1a2557]">
                    {partner.name}
                  </h3>
                  <p className="mt-0.5 font-inter text-[11px] text-gray-400">
                    {partner.region}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Community channels */}
          <div className="reveal rounded-3xl border border-gray-100 bg-white p-8 shadow-md md:p-12">
            <div className="mb-8 flex items-center justify-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD700] text-[#1a2557]">
                <Handshake size={22} weight="bold" />
              </span>
              <h3 className="font-poppins text-2xl font-bold text-[#1a2557] md:text-3xl">
                Gabung Komunitas Kami
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {channels.map((channel) => {
                const isInternal = channel.href.startsWith("/");
                const content = (
                  <>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2C3E8A] text-white mb-4 transition-transform duration-300 group-hover:scale-110">
                      {channel.icon}
                    </span>
                    <h4 className="font-poppins font-bold text-sm text-[#1a2557] mb-1">
                      {channel.title}
                    </h4>
                    <p className="text-[11px] font-bold text-[#2C3E8A] mb-2">
                      {channel.handle}
                    </p>
                    <p className="text-xs text-gray-500 font-inter leading-relaxed">
                      {channel.description}
                    </p>
                  </>
                );

                return isInternal ? (
                  <Link
                    key={channel.title}
                    href={channel.href}
                    className="group flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white"
                  >
                    {content}
                  </Link>
                ) : (
                  <a
                    key={channel.title}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center text-center rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — gradasi berakhir di warna Footer (#1a2557) supaya
          halaman menutup tanpa garis potong. */}
      <section className="relative overflow-hidden bg-linear-to-b from-[#2C3E8A] to-[#1a2557] section-y">
        <div className="section-shell reveal relative z-10 text-center">
          <h2 className="mx-auto mb-4 max-w-2xl font-poppins text-2xl font-bold leading-tight text-white md:text-4xl">
            Siap Menjadi Bagian dari{" "}
            <span className="text-[#FFD700]">Cerita Kami</span> Berikutnya?
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-inter text-sm leading-relaxed text-white/70 md:text-base">
            Konsultasikan targetmu hari ini, kami bantu memetakan jalur
            tercepat menuju skor dan beasiswa impianmu.
          </p>
          <Link
            href="/kontak"
            className="group inline-flex items-center gap-3 rounded-full bg-white py-2.5 pl-3 pr-6 shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2C3E8A] text-white transition-transform duration-300 group-hover:-rotate-45">
              <ArrowRight size={16} weight="bold" />
            </span>
            <span className="font-poppins text-xs font-semibold text-[#2C3E8A] md:text-sm">
              Hubungi Kami Sekarang
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
