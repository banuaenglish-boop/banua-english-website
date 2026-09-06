import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecordingHero from "@/components/recording/RecordingHero";
import VideoGrid from "@/components/recording/VideoGrid";
import { sanityFetch } from "@/sanity/lib/live";
import { VIDEOS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Recording Webinar & Tutorial | English Banua",
  description:
    "Arsip recording webinar dan tutorial IELTS, TOEFL, serta persiapan beasiswa. Gratis tonton dari channel YouTube @EnglishBanua.",
};

export default async function RecordingPage() {
  const { data: videos } = await sanityFetch({ query: VIDEOS_QUERY });

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <RecordingHero />
        <VideoGrid videos={videos} />
      </main>
      <Footer />
    </div>
  );
}
