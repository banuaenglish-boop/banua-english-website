import {
  GraduationCap,
  Medal,
  GlobeHemisphereWest,
  Certificate,
} from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/ui/section-label";
import { sanityFetch } from "@/sanity/lib/live";
import { TUTORS_QUERY } from "@/sanity/lib/queries";

const values = [
  {
    icon: <GraduationCap size={22} weight="bold" />,
    title: "Tutor Awardee",
    description:
      "Semua tutor utama adalah awardee beasiswa S1 & S2 dari universitas dalam dan luar negeri.",
  },
  {
    icon: <Medal size={22} weight="bold" />,
    title: "Terbukti Berhasil",
    description:
      "98% siswa mencapai target skor, 85% berhasil lolos beasiswa impian mereka.",
  },
  {
    icon: <GlobeHemisphereWest size={22} weight="bold" />,
    title: "Jaringan Global",
    description:
      "Alumni tersebar di Melbourne, NUS, Osaka, Cranfield, Edinburgh, dan universitas dunia lainnya.",
  },
  {
    icon: <Certificate size={22} weight="bold" />,
    title: "Bersertifikat",
    description:
      "Tutor tersertifikasi dengan pengalaman mengajar minimal 3 tahun di bidangnya.",
  },
];

export default async function TutorSection() {
  const { data: tutors } = await sanityFetch({ query: TUTORS_QUERY });

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-14">
          <SectionLabel variant="light">Tutor Kami</SectionLabel>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a2557] leading-tight mb-4">
            Dipandu oleh{" "}
            <span className="text-[#2C3E8A]">Awardee Sejati</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-inter leading-relaxed">
            Yang membedakan kami: rata-rata tutor kami adalah Awardee beasiswa
            S1 &amp; S2 dari dalam dan luar negeri. Mereka bukan hanya mengajar,
            mereka sudah membuktikan jalurnya.
          </p>
        </div>

        {/* Tutor cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="relative h-72 overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tutor.image}
                  alt={`Tutor ${tutor.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1a2557]/70" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[#FFD700] text-[10px] font-bold uppercase tracking-widest mb-1">
                    {tutor.role}
                  </p>
                  <h3 className="font-poppins font-bold text-xl text-white">
                    {tutor.name}
                  </h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#2C3E8A]">
                    <GraduationCap size={16} weight="bold" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      Spesialisasi
                    </p>
                    <p className="text-xs font-semibold text-[#1a2557]">
                      {tutor.expertise}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-inter leading-relaxed">
                  {tutor.credential}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why us strip */}
        <div className="rounded-3xl bg-[#2C3E8A] p-8 md:p-12 relative overflow-hidden">

          <div className="relative z-10">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white text-center mb-10">
              Kenapa Belajar di English Banua?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-5 transition-colors duration-300 hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD700] text-[#1a2557]">
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
