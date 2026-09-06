import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebinarHero from "@/components/webinar/WebinarHero";
import WebinarList from "@/components/webinar/WebinarList";
import PastWebinars from "@/components/webinar/PastWebinars";
import { sanityFetch } from "@/sanity/lib/live";
import { WEBINARS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Webinar Gratis | English Banua",
  description:
    "Webinar gratis persiapan IELTS, TOEFL, dan beasiswa bersama tutor Awardee S1 & S2. Topik mencakup strategi essay, speaking, dan wawancara dari pemenang Erasmus dan LPDP.",
};

export default async function WebinarPage() {
  const { data: webinars } = await sanityFetch({ query: WEBINARS_QUERY });

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <WebinarHero />
        <WebinarList webinars={webinars} />
        <PastWebinars />
      </main>
      <Footer />
    </div>
  );
}
