/**
 * Env Sanity. Menggunakan fallback aman jika environment variable belum diisi,
 * agar aplikasi dapat berjalan sebagai mockup tanpa melempar error.
 */
export const apiVersion = "2026-01-01";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mock-project-id";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

