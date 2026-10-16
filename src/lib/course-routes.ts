export const courseLinks = [
  { exam: "IELTS", path: "/program/ielts-banjarmasin" },
  { exam: "TOEFL", path: "/program/toefl-banjarmasin" },
] as const;

export function programDetailPath(title: string): string | undefined {
  const hasIelts = /\bielts\b/i.test(title);
  const hasToefl = /\btoefl\b/i.test(title);
  if (hasIelts === hasToefl) return undefined;
  return hasIelts ? courseLinks[0].path : courseLinks[1].path;
}
