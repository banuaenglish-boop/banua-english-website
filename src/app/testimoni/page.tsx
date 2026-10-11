import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimoniHero from "@/components/testimoni/TestimoniHero";
import TestimonialGallery from "@/components/testimoni/TestimonialGallery";
import SuccessCTA from "@/components/testimoni/SuccessCTA";
import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import type { Testimonial } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Testimoni Alumni | English Banua",
  description:
    "Pengalaman peserta Private TOEFL Online dan Private IELTS Offline bersama tutor English Banua.",
};

export default async function TestimoniPage() {
  const { data: testimonials } = await sanityFetch<Testimonial[]>({ query: TESTIMONIALS_QUERY });
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
