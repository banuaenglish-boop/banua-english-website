import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Tanggal hari ini dalam format ISO yyyy-mm-dd (zona lokal). */
export function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

/** "2026-09-14" -> "14 September 2026" */
export function formatDateId(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const YOUTUBE_HOSTS = new Set([
  "youtube.com",
  "www.youtube.com",
  "m.youtube.com",
  "youtu.be",
  "www.youtube-nocookie.com",
]);

const BADGE_COLOR_CLASSES = {
  "bg-orange-500 text-white": "bg-orange-500 text-white",
  "bg-[#2C3E8A] text-white": "bg-[#2C3E8A] text-white",
} as const;

/** Hanya class dari enum Studio — blok string mentah di className. */
export function badgeColorClass(raw: string | null | undefined) {
  if (raw && raw in BADGE_COLOR_CLASSES) {
    return BADGE_COLOR_CLASSES[raw as keyof typeof BADGE_COLOR_CLASSES];
  }
  return BADGE_COLOR_CLASSES["bg-[#2C3E8A] text-white"];
}

/** https saja, optional host allowlist. Blok javascript:/data:. */
export function safeHttpsUrl(
  raw: string | null | undefined,
  allowedHosts?: ReadonlySet<string>
) {
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== "https:") return null;
    if (allowedHosts && !allowedHosts.has(url.hostname)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function safeYoutubeUrl(raw: string | null | undefined) {
  return safeHttpsUrl(raw, YOUTUBE_HOSTS);
}

/** Path internal `/…` atau https absolut. */
export function safeHref(raw: string | null | undefined) {
  if (!raw) return null;
  if (raw.startsWith("/") && !raw.startsWith("//")) return raw;
  return safeHttpsUrl(raw);
}
