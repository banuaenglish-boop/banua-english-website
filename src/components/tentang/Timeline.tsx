import SectionLabel from "@/components/ui/section-label";
import { sanityFetch } from "@/sanity/lib/live";
import { MILESTONES_QUERY } from "@/sanity/lib/queries";

export default async function Timeline() {
  const { data: milestones } = await sanityFetch({ query: MILESTONES_QUERY });

  return (
    /* 3. Bagaimana kami sampai di sini */
    <section className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 section-y">
      <div className="section-shell relative z-10">
        {/* Header */}
        <div className="reveal mx-auto mb-14 max-w-xl text-center">
          <SectionLabel variant="light">Perjalanan Kami</SectionLabel>
          <h2 className="font-poppins heading-2 font-bold text-[#1a2557]">
            Tumbuh Bersama <span className="text-[#2C3E8A]">Ribuan Alumni</span>
          </h2>
          <p className="mt-3 font-inter text-sm leading-relaxed text-gray-500">
            Tujuh tahun, satu arah: dari satu kelas kecil di Banjarmasin sampai
            alumni yang tersebar lintas negara.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-3xl">
          {/* Garis vertikal, memudar di kedua ujung supaya tidak terpotong keras */}
          <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-linear-to-b from-transparent via-[#2C3E8A]/25 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {milestones.map((milestone, index) => (
            <div
              key={milestone._id}
              className={`reveal relative mb-12 flex gap-6 last:mb-0 md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Titik */}
              <div className="absolute left-4 top-6 z-10 -translate-x-1/2 md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2C3E8A] shadow-lg ring-4 ring-gray-50">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFD700]" />
                </span>
              </div>

              {/* Kartu */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <span className="mb-3 inline-block rounded-full bg-[#2C3E8A] px-3 py-1 text-[11px] font-bold text-white">
                    {milestone.year}
                  </span>
                  <h3 className="mb-2 font-poppins text-base font-bold text-[#1a2557]">
                    {milestone.title}
                  </h3>
                  <p className="font-inter text-xs leading-relaxed text-gray-500">
                    {milestone.description}
                  </p>
                </div>
              </div>

              {/* Spacer untuk layout zig-zag */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
