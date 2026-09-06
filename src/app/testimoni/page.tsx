import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimoniHero from "@/components/testimoni/TestimoniHero";
import TestimonialGallery from "@/components/testimoni/TestimonialGallery";
import SuccessCTA from "@/components/testimoni/SuccessCTA";
import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Testimoni Alumni | English Banua",
  description:
    "Kisah sukses alumni English Banua: diterima di University of Melbourne, NUS, Osaka, Cranfield, dan lolos beasiswa LPDP dengan skor IELTS hingga 8.5.",
};

export default async function TestimoniPage() {
  const { data: testimonials } = await sanityFetch({
    query: TESTIMONIALS_QUERY,
  });

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <TestimoniHero />
        <TestimonialGallery testimonials={testimonials} />
        <SuccessCTA />
      </main>
      <Footer />
    </div>
  );
}
