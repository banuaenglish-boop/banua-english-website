/** Canonical site identity — SEO / OG / JSON-LD. */
export const siteConfig = {
  name: "English Banua",
  legalName: "PT. Banua Education Center",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://englishbanua.com").replace(
    /\/$/,
    ""
  ),
  locale: "id_ID",
  description:
    "Kursus IELTS dan TOEFL di Banjarmasin serta kelas privat online. Kenali tutor, pilihan belajar, dan pengalaman peserta English Banua sebelum mendaftar.",
  email: "hello@englishbanua.com",
  phoneDisplay: "+62 821-1515-1221",
  phoneE164: "+6282115151221",
  waMe: "https://wa.me/6282115151221",
  city: "Banjarmasin",
  region: "Kalimantan Selatan",
  country: "ID",
  hours: "Mo-Sa 09:00-17:00",
  sameAs: [
    "https://instagram.com/englishbanua",
    "https://youtube.com/@englishbanua",
  ],
} as const;

export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/program", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/program/ielts-banjarmasin", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/program/toefl-banjarmasin", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/webinar", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/testimoni", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/cerita-banua", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/tentang-kami", priority: 0.6, changeFrequency: "monthly" as const },
] as const;

export const breadcrumbLabels: Record<string, string> = {
  "/": "Beranda",
  "/program": "Kelas & Program",
  "/program/ielts-banjarmasin": "Kursus IELTS Banjarmasin",
  "/program/toefl-banjarmasin": "Kursus TOEFL Banjarmasin",
  "/webinar": "Webinar",
  "/testimoni": "Testimoni",
  "/cerita-banua": "Cerita Banua",
  "/tentang-kami": "Tentang Kami",
};

export const socialUrls = {
  instagram: siteConfig.sameAs[0],
  youtube: siteConfig.sameAs[1],
} as const;

/** Jam operasional dalam bentuk teks tampilan (bukan schema.org). */
export const hoursDisplay = "Senin-Sabtu, 09.00-17.00 WITA";

export function absoluteUrl(path = "/") {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${p === "/" ? "" : p}`;
}

export function programRegistrationUrl(programTitle: string) {
  const message = `Halo English Banua, saya ingin mendaftar program ${programTitle}. Mohon informasi jadwal, biaya, dan langkah pendaftarannya. Terima kasih.`;
  return `${siteConfig.waMe}?text=${encodeURIComponent(message)}`;
}
