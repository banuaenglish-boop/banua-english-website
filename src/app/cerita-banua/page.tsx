import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryGrid from "@/components/StoryGrid";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { sanityFetch } from "@/sanity/lib/live";
import { STORIES_QUERY } from "@/sanity/lib/queries";
import type { BanuaStory } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Cerita Banua",
  description: "Potret kegiatan belajar, kunjungan, dan keseharian di English Banua dalam foto dan cerita singkat.",
  alternates: { canonical: "/cerita-banua" },
  openGraph: {
    title: "Cerita Banua | English Banua",
    description: "Potret kecil dari ruang belajar dan kebersamaan di English Banua.",
    url: "/cerita-banua",
  },
};

export default async function CeritaBanuaPage() {
  const { data: stories } = await sanityFetch<BanuaStory[]>({
    query: STORIES_QUERY,
    fallbackOnEmpty: false,
  });

  return (
    <div className="bg-[#F7F8FC]">
      <JsonLd data={breadcrumbJsonLd("/cerita-banua")} />
      <Navbar />
      <main className="min-h-[70vh] pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="section-shell">
          <header className="mb-10 max-w-xl">
            <p className="mb-3 font-inter text-xs font-bold uppercase tracking-[0.2em] text-[#2C3E8A]">
              Dari keseharian kami
            </p>
            <h1 className="font-poppins text-3xl font-bold text-[#1a2557] md:text-5xl">
              Cerita Banua
            </h1>
            <p className="mt-4 font-inter text-sm leading-relaxed text-gray-500 md:text-base">
              Potret kecil dari ruang belajar dan kebersamaan di English Banua.
              Setiap foto punya cerita.
            </p>
          </header>
          {stories.length ? (
            <StoryGrid stories={stories} />
          ) : (
            <p className="rounded-2xl bg-white p-8 font-inter text-sm text-gray-500">
              Cerita baru akan hadir di sini. Sampai jumpa di cerita berikutnya!
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
