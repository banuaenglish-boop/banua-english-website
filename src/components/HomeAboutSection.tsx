import Link from "next/link";
import SectionLabel from "@/components/ui/section-label";
import {
  ArrowRight,
  Compass,
  HandHeart,
  SealCheck,
  Target,
} from "@phosphor-icons/react/dist/ssr";

const values = [
  {
    icon: <Compass size={22} weight="bold" />,
    title: "Belajar Jadi Mudah",
    description:
      "Tanpa jargon, tanpa komplikasi, hanya langkah-langkah jelas yang bisa kamu ikuti untuk mencapai skor target dan meraih beasiswa impian.",
  },
  {
    icon: <Target size={22} weight="bold" />,
    title: "Fokus pada Hasil Nyata",
    description:
      "Setiap strategi belajar dirancang untuk membantumu lolos lebih cepat, berkembang lebih cerdas, dan meraih skor lebih tinggi, bukan sekadar teori.",
  },
  {
    icon: <SealCheck size={22} weight="bold" />,
    title: "Tahu Apa yang Berhasil",
    description:
      "Berawal dari les privat pada 2016, English Banua kini fokus pada bimbingan IELTS dan TOEFL.",
  },
  {
    icon: <HandHeart size={22} weight="bold" />,
    title: "Menemanimu Sampai Tujuan",
    description:
      "Dari persiapan awal hingga pengumuman lolos, kami memberikan dukungan penuh, bukan hanya kelas sekali jalan.",
  },
];

export default function HomeAboutSection() {
  return (
    <section className="relative overflow-hidden bg-white section-y">
      <div className="section-shell relative z-10">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
            <SectionLabel variant="light">Tentang English Banua</SectionLabel>
            <h2 className="font-poppins heading-2 font-bold text-[#1a2557]">
              Bukan Sekadar Kursus,
              <br />
              <span className="text-[#2C3E8A]">Tapi Teman Perjalananmu</span>
            </h2>
            <p className="mt-3 font-inter text-sm leading-relaxed text-gray-500">
              Sejak awal kami percaya satu hal: setiap orang berhak punya
              kesempatan belajar dan mempersiapkan studi. English Banua
              mendampingi perjalanan itu melalui bimbingan bahasa Inggris.
            </p>
          </div>

          <Link
            href="/tentang-kami"
            className="group flex items-center gap-2 whitespace-nowrap text-sm font-bold text-[#2C3E8A] hover:underline"
          >
            Kenali Kami Lebih Dekat
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Value cards */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val) => (
            <article
              key={val.title}
              className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2C3E8A] transition-colors duration-300 group-hover:bg-[#2C3E8A] group-hover:text-white">
                {val.icon}
              </span>
              <h3 className="mb-1.5 font-poppins text-base font-bold leading-tight text-[#1a2557]">
                {val.title}
              </h3>
              <p className="font-inter text-xs leading-relaxed text-gray-500">
                {val.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
