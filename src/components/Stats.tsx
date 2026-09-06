import { Check } from "@phosphor-icons/react/dist/ssr";

const statsData = [
  {
    id: 1,
    title: "50+",
    subtitle: "Tutor Awardee & Tersertifikasi",
  },
  {
    id: 2,
    title: "10.000+",
    subtitle: "Alumni Seluruh Indonesia",
  },
  {
    id: 3,
    title: "85%",
    subtitle: "Lolos Beasiswa Impian",
  },
  {
    id: 4,
    title: "98%",
    subtitle: "Mencapai Target Skor",
  },
];

export default function Stats() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex gap-4 items-start">
              <div className="flex-shrink-0 bg-[#2C3E8A] w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md">
                <Check size={24} weight="bold" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-xl text-[#2C3E8A] mb-1">
                  {stat.title}
                </h3>
                <p className="font-inter text-sm text-[#2C3E8A] font-medium leading-snug">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
