import Link from "next/link";
import SectionLabel from "@/components/ui/section-label";
import {
  GraduationCap,
  Medal,
  GlobeHemisphereWest,
  Certificate,
  CheckCircle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_TUTORS_QUERY } from "@/sanity/lib/queries";

const values = [
  {
    icon: <GraduationCap size={20} weight="bold" />,
    title: "Tutor Awardee",
    description: "Semua tutor utama adalah awardee beasiswa S1 & S2.",
  },
  {
    icon: <Medal size={20} weight="bold" />,
    title: "Terbukti Berhasil",
    description: "98% siswa mencapai target skor mereka.",
  },
  {
    icon: <GlobeHemisphereWest size={20} weight="bold" />,
    title: "Jaringan Global",
    description: "Alumni tersebar di 15+ negara dunia.",
  },
  {
    icon: <Certificate size={20} weight="bold" />,
    title: "Bersertifikat",
    description: "Pengalaman mengajar minimal 3 tahun.",
  },
];

export default async function HomeTutorPreview() {
  const { data: tutors } = await sanityFetch({ query: HOME_TUTORS_QUERY });

  return (
    <section className="relative bg-white section-y overflow-hidden">
      <div className="section-shell relative z-10">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-8">
          <SectionLabel variant="light">Tutor Kami</SectionLabel>
          <h2 className="font-poppins font-bold heading-2 text-[#1a2557] mb-3">
            Dipandu oleh{" "}
            <span className="text-[#2C3E8A]">Awardee Sejati</span>
          </h2>
          <p className="text-gray-500 text-sm font-inter leading-relaxed">
            Yang membedakan kami: rata-rata tutor kami adalah Awardee beasiswa
            S1 &amp; S2 dari dalam dan luar negeri. Mereka bukan hanya mengajar,
            mereka sudah membuktikan jalurnya.
          </p>
        </div>

        {/* Tutor cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tutor.image}
                  alt={`Tutor ${tutor.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-poppins font-bold text-sm leading-snug text-[#1a2557]">
                  {tutor.name}
                </h3>
                <p className="mt-1.5 text-xs text-[#2C3E8A] font-inter leading-relaxed">
                  {tutor.credential}
                </p>
                <ul className="mt-3 space-y-1.5 border-t border-gray-100 pt-3">
                  {[tutor.score, tutor.experience].filter(Boolean).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-1.5 text-xs text-gray-500 font-inter"
                    >
                      <CheckCircle
                        size={14}
                        weight="fill"
                        className="mt-px shrink-0 text-[#2C3E8A]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why us strip */}
        <div className="rounded-3xl bg-[#2C3E8A] p-6 md:p-8 relative overflow-hidden">

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <h3 className="font-poppins font-bold text-xl md:text-2xl text-white text-center md:text-left">
                Kenapa Belajar di English Banua?
              </h3>
              <Link
                href="/tentang-kami"
                className="group inline-flex items-center gap-2 text-xs font-bold text-[#FFD700] hover:underline whitespace-nowrap justify-center"
              >
                Kenali kami lebih dekat
                <ArrowRight
                  size={12}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col items-start gap-2 rounded-2xl bg-white/5 border border-white/10 p-4 transition-colors duration-300 hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFD700] text-[#1a2557]">
                    {value.icon}
                  </span>
                  <h4 className="font-poppins font-bold text-sm text-white">
                    {value.title}
                  </h4>
                  <p className="text-xs text-white/60 font-inter leading-relaxed">
                    {value.description}
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
