import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebinarHero from "@/components/webinar/WebinarHero";
import WebinarList from "@/components/webinar/WebinarList";
import VideoGrid from "@/components/webinar/VideoGrid";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { sanityFetch } from "@/sanity/lib/live";
import { WEBINARS_QUERY, VIDEOS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Webinar Gratis IELTS, TOEFL & Beasiswa",
  description:
    "Webinar gratis persiapan IELTS, TOEFL, dan beasiswa bersama tutor Awardee S1 & S2. Topik mencakup strategi essay, speaking, dan wawancara dari pemenang Erasmus dan LPDP.",
  alternates: { canonical: "/webinar" },
};

export default async function WebinarPage() {
  const [{ data: webinars }, { data: videos }] = await Promise.all([
    sanityFetch({ query: WEBINARS_QUERY }),
    sanityFetch({ query: VIDEOS_QUERY }),
  ]);

  return (
    <div className="bg-white">
      <JsonLd data={breadcrumbJsonLd("/webinar")} />
      <Navbar />
      <main>
        <WebinarHero />
        <WebinarList webinars={webinars} />
        <VideoGrid videos={videos} id="recording" />
      </main>
      <Footer />
    </div>
  );
}