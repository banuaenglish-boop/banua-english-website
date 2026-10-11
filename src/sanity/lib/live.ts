import { defineLive } from "next-sanity/live";
import { client } from "./client";
import * as mocks from "./mockData";
import * as provided from "@/lib/provided-content";
import { banuaStories } from "@/lib/banua-stories";

const token = process.env.SANITY_API_READ_TOKEN;
const hasSanityEnv =
  Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "mock-project-id";

const live = defineLive({
  client,
  serverToken: token,
  browserToken: token,
});

export const SanityLive = hasSanityEnv ? live.SanityLive : () => null;

export async function sanityFetch<T = any>({
  query,
  fallbackOnEmpty = true,
}: {
  query: string;
  fallbackOnEmpty?: boolean;
}): Promise<{ data: T }> {
  // Jika Sanity env belum diatur, langsung kembalikan data mockup
  if (!hasSanityEnv) {
    return { data: getMockDataForQuery(query) as T };
  }

  try {
    const res = await live.sanityFetch({ query });
    if (!res?.data || (fallbackOnEmpty && Array.isArray(res.data) && res.data.length === 0)) {
      return { data: getMockDataForQuery(query) as T };
    }
    return res as { data: T };
  } catch (err) {
    console.warn("Sanity fetch failed, using fallback mock data:", err);
    return { data: getMockDataForQuery(query) as T };
  }
}

function getMockDataForQuery(query: string): any {
  if (query.includes('type == "banuaStory"'))
    return banuaStories.map(({ id, ...story }) => ({ ...story, _id: `initial-banuaStory-${id}` }));
  if (query.includes('type == "program"') && query.includes("featuredOnHome"))
    return mocks.MOCK_PROGRAMS;
  if (query.includes('type == "program"')) return mocks.MOCK_PROGRAMS;
  if (query.includes('type == "tutor"') && query.includes("featuredOnHome"))
    return provided.homeTutors;
  if (query.includes('type == "tutor"')) return provided.tutors;
  if (query.includes('type == "teamMember"')) return provided.team;
  if (query.includes('type == "milestone"')) return provided.milestones;
  if (query.includes('type == "partner"')) return mocks.MOCK_PARTNERS;
  if (query.includes('type == "webinar"') && query.includes("featuredOnHome"))
    return mocks.MOCK_HOME_WEBINARS;
  if (query.includes('type == "webinar"')) return mocks.MOCK_WEBINARS;
  if (query.includes('type == "pastWebinar"')) return mocks.MOCK_PAST_WEBINARS;
  if (query.includes('type == "video"') && query.includes("featuredOnHome"))
    return mocks.MOCK_HOME_VIDEOS;
  if (query.includes('type == "video"')) return mocks.MOCK_VIDEOS;
  if (
    query.includes('type == "testimonial"') &&
    query.includes("featuredOnHome")
  )
    return provided.homeTestimonials;
  if (query.includes('type == "testimonial"')) return provided.testimonials;
  if (query.includes('type == "faq"')) return mocks.MOCK_FAQS;

  return [];
}
