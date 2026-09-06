import {
  Target,
  Eye,
  Heartbeat,
  GraduationCap,
  Users,
  GlobeHemisphereWest,
} from "@phosphor-icons/react/dist/ssr";
import SectionLabel from "@/components/ui/section-label";

const stats = [
  { icon: <GraduationCap size={22} weight="bold" />, value: "10.000+", label: "Alumni seluruh Indonesia" },
  { icon: <Users size={22} weight="bold" />, value: "50+", label: "Tutor Awardee & tersertifikasi" },
  { icon: <GlobeHemisphereWest size={22} weight="bold" />, value: "15+", label: "Negara tujuan alumni" },
  { icon: <GraduationCap size={22} weight="bold" />, value: "85%", label: "Lolos beasiswa impian" },
];

const values = [
  {
    icon: <Eye size={20} weight="bold" />,
    title: "Visi",
    description:
      "Menjadi jembatan utama generasi muda Indonesia menuju universitas dan karier internasional.",
  },
  {
    icon: <Target size={20} weight="bold" />,
    title: "Misi",
    description:
      "Membuka akses pendidikan dan beasiswa global bagi siswa dari seluruh Indonesia lewat bimbingan bahasa Inggris yang berkualitas.",
  },
  {
    icon: <Heartbeat size={20} weight="bold" />,
    title: "Nilai",
    description:
      "Integritas, dedikasi, dan bukti nyata, setiap tutor adalah awardee yang sudah menempuh jalurnya sendiri.",
  },
];

export default function AboutHero() {
  return (
    <>
      {/* 1. Siapa kami */}
      <section className="page-hero-bg relative overflow-hidden pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="absolute inset-0 bg-[#2C3E8A]/35" />
        {/* Foto luruh ke #1a2557, warna section berikutnya. Gradasi berakhir
            tepat di batas section, jadi seam-nya navy-ke-navy: tak terlihat. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-[#1a2557] md:h-64"
        />

        <div className="section-shell relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-up">
              <SectionLabel variant="dark">Tentang Kami</SectionLabel>
              <h1 className="mb-4 font-poppins text-3xl font-bold leading-tight text-white md:text-5xl">
                Dari Banjarmasin, untuk{" "}
                <span className="text-[#FFD700]">Indonesia</span> dan Dunia
              </h1>
              <p className="mb-6 font-inter text-sm leading-relaxed text-white/70 md:text-base">
                English Banua, PT. Banua Education Center, adalah lembaga kursus
                pengembangan bahasa Inggris, TOEFL, dan IELTS yang berpusat di
                Banjarmasin, Kalimantan Selatan. Kami percaya bahwa siswa dari
                kota mana pun berhak mendapatkan bimbingan kelas dunia.
              </p>
              <p className="font-inter text-sm leading-relaxed text-white/70 md:text-base">
                Yang membedakan kami: rata-rata tutor kami adalah{" "}
                <span className="font-semibold text-white">
                  Awardee beasiswa S1 &amp; S2
                </span>{" "}
                dari universitas dalam dan luar negeri. Mereka bukan hanya
                mengajar, mereka sudah membuktikan jalurnya.
              </p>
            </div>

            <div className="hidden animate-fade-up justify-end [animation-delay:200ms] lg:flex">
              <div className="grid max-w-sm grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/15 bg-white/10 p-6 text-center"
                  >
                    <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFD700] text-[#1a2557]">
                      {stat.icon}
                    </span>
                    <p className="mb-1 font-poppins text-3xl font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-[11px] font-medium text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Apa yang kami pegang — tetap navy, lanjutan langsung dari hero
          tanpa kartu dan tanpa jeda. Dasarnya luruh ke putih untuk
          menyerahkan alur ke Timeline. */}
      <section className="relative overflow-hidden bg-[#1a2557] pt-4 pb-28 md:pt-8 md:pb-40">
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-white md:h-32"
        />

        <div className="section-shell relative z-10">
          <div className="reveal grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {values.map((value) => (
              <div key={value.title}>
                <div className="flex items-center gap-2.5 text-[#FFD700]">
                  {value.icon}
                  <h3 className="font-poppins text-sm font-bold uppercase tracking-[0.2em] text-white">
                    {value.title}
                  </h3>
                </div>
                <span
                  aria-hidden
                  className="mt-3 block h-0.5 w-10 rounded-full bg-[#FFD700]"
                />
                <p className="mt-4 font-inter text-sm leading-relaxed text-white/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
