import { createClient } from "next-sanity";

// Public content location verified by the poster import. These are public IDs,
// not credentials; published webinars do not need a preview or write token.
const publishedWebinarClient = createClient({
  projectId: "25ynefoe",
  dataset: "production",
  apiVersion: "2026-01-01",
  perspective: "published",
  useCdn: false,
});

export async function fetchPublishedWebinars<T>({
  query,
}: {
  query: string;
}): Promise<{ data: T }> {
  const data = await publishedWebinarClient.fetch<T>(query, {}, {
    next: { revalidate: 60, tags: ["webinars"] },
  });
  return { data };
}
