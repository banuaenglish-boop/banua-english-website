/**
 * Data statis yang dipakai di lebih dari satu komponen.
 * Single source of truth — ubah di sini, semua ikut.
 */

/** Informasi layanan (Hero + Stats section), berdasarkan materi pemilik. */
export const statsData = [
  { id: 1, title: "Sejak 2016", subtitle: "Perjalanan English Banua" },
  { id: 2, title: "Offline & Online", subtitle: "Pilihan cara belajar" },
  { id: 3, title: "Kelas Private", subtitle: "Bimbingan IELTS & TOEFL" },
  { id: 4, title: "Tutor Awardee LPDP", subtitle: "Kenali tim pengajar kami" },
] as const;

/** Informasi layanan yang sama untuk kedua banner. */
export const ctaStats = statsData.map(({ title, subtitle }) => ({
  value: title,
  label: subtitle,
}));

/** Label + warna badge mode program (Programs + ProgramExplorer). */
export const modeConfig = {
  private: {
    label: "Private 1-on-1",
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  offline: {
    label: "Offline",
    bg: "bg-blue-50",
    text: "text-[#2C3E8A]",
    border: "border-blue-200",
  },
  online: {
    label: "Online",
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
} as const;

export type ModeConfigEntry =
  (typeof modeConfig)[keyof typeof modeConfig];
