import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Aktifkan draft mode. Dipanggil dari Studio / bookmarklet:
 *   /api/draft-mode/enable?secret=XXX&slug=/webinar
 *
 * Keamanan: secret dibandingkan dengan timing-safe compare, dan `slug` hanya
 * boleh path internal dari daftar di bawah — mencegah open redirect.
 */
const ALLOWED_PATHS = new Set([
  "/",
  "/program",
  "/webinar",
  "/recording",
  "/testimoni",
  "/tentang-kami",
  "/kontak",
]);

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function GET(request: Request) {
  const secret = process.env.SANITY_DRAFT_SECRET;
  if (!secret) {
    return new Response("Draft mode not configured", { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const provided = searchParams.get("secret") ?? "";
  const slug = searchParams.get("slug") ?? "/";

  if (!safeEqual(provided, secret)) {
    return new Response("Invalid secret", { status: 401 });
  }
  if (!ALLOWED_PATHS.has(slug)) {
    return new Response("Invalid slug", { status: 400 });
  }

  (await draftMode()).enable();
  redirect(slug);
}
