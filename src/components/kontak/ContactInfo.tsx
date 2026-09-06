import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  InstagramLogo,
  YoutubeLogo,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";

const contactItems = [
  {
    icon: <Phone size={18} weight="bold" />,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
  },
  {
    icon: <EnvelopeSimple size={18} weight="bold" />,
    label: "Email",
    value: "hello@englishbanua.com",
    href: "mailto:hello@englishbanua.com",
  },
  {
    icon: <Clock size={18} weight="bold" />,
    label: "Jam Operasional",
    value: "Senin-Sabtu, 09.00-17.00 WITA",
  },
];

const socials = [
  {
    icon: <InstagramLogo size={18} weight="fill" />,
    label: "Instagram",
    handle: "@englishbanua",
    href: "https://instagram.com/englishbanua",
  },
  {
    icon: <YoutubeLogo size={18} weight="fill" />,
    label: "YouTube",
    handle: "@EnglishBanua",
    href: "https://youtube.com/@englishbanua",
  },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      {/* Location card */}
      <div className="rounded-3xl bg-[#2C3E8A] p-6 md:p-8 relative overflow-hidden shadow-md">

        <div className="relative z-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD700] text-[#1a2557] mb-5">
            <MapPin size={22} weight="bold" />
          </span>
          <h3 className="font-poppins font-bold text-lg text-white mb-2">
            Kelas Offline, Banjarmasin
          </h3>
          <p className="text-xs text-white/70 font-inter leading-relaxed mb-5">
            Kunjungi kelas tatap muka kami di pusat kota Banjarmasin,
            Kalimantan Selatan. Alamat lengkap akan dibagikan saat konsultasi.
          </p>

          {/* Map placeholder */}
          <div className="rounded-2xl border border-white/15 bg-white/10 overflow-hidden">
            <iframe
              title="Lokasi English Banua, Banjarmasin"
              src="https://www.google.com/maps?q=Banjarmasin,+Kalimantan+Selatan&output=embed"
              className="h-44 w-full border-0 opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Banjarmasin,+Kalimantan+Selatan"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD700] hover:underline"
          >
            Buka di Google Maps
            <ArrowUpRight
              size={12}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* Contact details */}
      <div className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-md">
        <h3 className="font-poppins font-bold text-lg text-[#1a2557] mb-5">
          Kontak Langsung
        </h3>
        <ul className="flex flex-col gap-4 mb-6">
          {contactItems.map((item) => {
            const content = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#2C3E8A]">
                  {item.icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-[#1a2557] font-inter truncate">
                    {item.value}
                  </p>
                </div>
              </>
            );

            return (
              <li key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3.5 rounded-2xl border border-transparent p-2 -m-2 transition-all duration-300 hover:border-blue-100 hover:bg-blue-50/50"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-center gap-3.5 p-2 -m-2">
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Socials */}
        <div className="border-t border-gray-100 pt-5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
            Ikuti Kami
          </p>
          <div className="flex flex-col gap-2.5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 transition-all duration-300 hover:border-[#2C3E8A] hover:bg-blue-50/50"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2C3E8A] text-white transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#1a2557]">
                      {social.label}
                    </p>
                    <p className="text-[11px] text-gray-400">{social.handle}</p>
                  </div>
                </span>
                <ArrowUpRight
                  size={14}
                  weight="bold"
                  className="text-gray-300 transition-all duration-300 group-hover:text-[#2C3E8A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
