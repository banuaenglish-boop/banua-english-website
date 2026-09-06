import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

async function exitDraftMode() {
  "use server";
  (await draftMode()).disable();
  redirect("/");
}

/** Banner draft mode. Render null saat mode normal, jadi tak terlihat publik. */
export default async function PreviewBanner() {
  const { isEnabled } = await draftMode();
  if (!isEnabled) return null;

  return (
    <aside
      role="status"
      className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#FFD700]/40 bg-[#1a2557] px-5 py-2.5 text-xs font-semibold text-white shadow-xl"
    >
      <span className="flex items-center gap-2">
        <span className="size-2 animate-pulse rounded-full bg-[#FFD700]" />
        Mode draft aktif
      </span>
      <form action={exitDraftMode}>
        <button
          type="submit"
          className="rounded-full bg-[#FFD700] px-3 py-1 font-bold text-[#1a2557] transition-colors hover:bg-white"
        >
          Keluar
        </button>
      </form>
    </aside>
  );
}
