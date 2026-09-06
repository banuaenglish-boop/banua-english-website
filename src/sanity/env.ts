/**
 * Env Sanity. Sengaja throw saat build/boot supaya salah ketik ketahuan
 * langsung, bukan jadi query kosong yang senyap.
 */
function required(value: string | undefined, name: string) {
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export const apiVersion = "2026-01-01";

export const projectId = required(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const dataset = required(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "NEXT_PUBLIC_SANITY_DATASET"
);
