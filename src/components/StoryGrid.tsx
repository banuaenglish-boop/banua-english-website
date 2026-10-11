import Image from "next/image";
import type { BanuaStory } from "@/sanity/lib/types";

export default function StoryGrid({ stories }: { stories: BanuaStory[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {stories.map((story) => (
        <figure
          key={story._id}
          className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
            <Image
              src={story.image}
              alt={story.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1216px) 33vw, 380px"
              className="object-cover"
              style={{ objectPosition: story.imagePosition || "center" }}
            />
          </div>
          <figcaption className="whitespace-pre-line p-5 font-inter text-sm leading-relaxed text-gray-600">
            {story.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
