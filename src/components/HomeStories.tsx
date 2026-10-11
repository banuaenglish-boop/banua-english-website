import Link from "next/link";
import StoryGrid from "@/components/StoryGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_STORIES_QUERY } from "@/sanity/lib/queries";
import type { BanuaStory } from "@/sanity/lib/types";

export default async function HomeStories() {
  const { data: stories } = await sanityFetch<BanuaStory[]>({
    query: HOME_STORIES_QUERY,
    fallbackOnEmpty: false,
  });
  if (!stories.length) return null;
  return (
    <section
      id="cerita-banua"
      aria-labelledby="cerita-banua-heading"
      className="section-y bg-[#F7F8FC]"
    >
      <div className="section-shell">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-xl">
          <h2
            id="cerita-banua-heading"
            className="font-poppins heading-2 font-bold text-[#1a2557]"
          >
            Cerita Banua
          </h2>
          <p className="mt-3 font-inter text-sm leading-relaxed text-gray-500">
            Potret kecil dari ruang belajar dan kebersamaan di English Banua.
          </p>
          </div>
          <Link href="/cerita-banua" className="text-sm font-bold text-[#2C3E8A] hover:underline">
            Lihat semua cerita →
          </Link>
        </div>

        <StoryGrid stories={stories} />
      </div>
    </section>
  );
}
