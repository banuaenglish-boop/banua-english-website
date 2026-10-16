/**
 * Bentuk hasil query di lib/queries.ts.
 * Field gambar sudah berupa URL CDN (transformasi dilakukan di GROQ).
 * ponytail: ditulis tangan. Ganti dengan `sanity typegen generate` kalau
 * schema mulai sering berubah.
 */

import type { WebinarCountry } from "@/lib/webinar-countries";
export type { WebinarCountry } from "@/lib/webinar-countries";

export type ProgramMode = "online" | "offline" | "private";

export type IconKey =
  | "clock"
  | "graduationCap"
  | "star"
  | "video"
  | "chalkboard"
  | "users"
  | "bookOpen";

export type Program = {
  _id: string;
  title: string;
  subtitle: string;
  mode: ProgramMode;
  description: string;
  image: string;
  badge?: string | null;
  badgeColor?: string | null;
  highlight?: string | null;
  ctaLabel?: string | null;
  features?: { iconKey: IconKey; label: string }[] | null;
};

export type Tutor = {
  _id: string;
  name: string;
  role?: string | null;
  expertise?: string | null;
  credential: string;
  image: string;
};

export type HomeTutor = {
  _id: string;
  name: string;
  credential: string;
  score?: string | null;
  experience?: string | null;
  image: string;
};

export type TeamMember = {
  _id: string;
  name: string;
  role: string;
  description: string;
  image: string;
};

export type Milestone = {
  _id: string;
  year: string;
  title: string;
  description: string;
};

export type Partner = { _id: string; name: string; region: string };

export type Webinar = {
  _id: string;
  title: string;
  country: WebinarCountry;
  date: string;
  registrationUrl?: string | null;
  poster: string;
};

export type HomeWebinar = { _id: string; title: string; poster: string; date?: string | null };

export type PastWebinar = {
  _id: string;
  title: string;
  dateLabel: string;
  views?: string | null;
  speaker: string;
  youtubeUrl?: string | null;
};

export type VideoCategory = "ielts" | "toefl" | "scholarship" | "general";

export type Video = {
  _id: string;
  title: string;
  category: VideoCategory;
  date: string;
  views?: string | null;
  duration: string;
  youtubeUrl: string;
  thumbnail: string;
};

export type HomeVideo = {
  _id: string;
  title: string;
  category: VideoCategory;
  duration: string;
  views?: string | null;
};

export type TestimonialProgram = "ielts" | "toefl" | "scholarship" | "private";

export type Testimonial = {
  _id: string;
  name: string;
  program: TestimonialProgram;
  programLabel: string;
  score: string;
  achievement: string;
  university: string;
  text: string;
  avatar: string;
  status?: string;
  tutor?: string;
};

export type HomeTestimonial = {
  _id: string;
  name: string;
  role: string;
  score: string;
  university: string;
  text: string;
  avatar: string;
};

export type Faq = { _id: string; question: string; answer: string };

export type BanuaStory = {
  _id: string;
  image: string;
  alt: string;
  caption: string;
  imagePosition?: string | null;
};

/** Label kategori untuk badge — dipakai di halaman Recording & Homepage. */
export const videoCategoryLabels: Record<VideoCategory, string> = {
  ielts: "IELTS",
  toefl: "TOEFL",
  scholarship: "Scholarship",
  general: "General English",
};
