import { pageMetadata } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebinarHero from "@/components/webinar/WebinarHero";
import WebinarList from "@/components/webinar/WebinarList";
import VideoGrid from "@/components/webinar/VideoGrid";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { sanityFetch } from "@/sanity/lib/live";
import { WEBINARS_QUERY, VIDEOS_QUERY } from "@/sanity/lib/queries";

export const metadata = pageMetadata({
  path: "/webinar",
  title: "Webinar Gratis IELTS, TOEFL & Beasiswa",
  description:
    "Temukan webinar beasiswa gratis dan rekaman belajar IELTS serta TOEFL bersama English Banua. Lihat topik, jadwal, dan informasi pendaftaran setiap sesi.",
});

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
