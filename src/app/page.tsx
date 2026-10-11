import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import HomeAboutSection from "@/components/HomeAboutSection";
import HomeWebinarRecording from "@/components/HomeWebinarRecording";
import HomeTutorPreview from "@/components/HomeTutorPreview";
import HomeCTABanner from "@/components/HomeCTABanner";
import HomeTestimonials from "@/components/HomeTestimonials";
import { JsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import { sanityFetch } from "@/sanity/lib/live";
import {
  HOME_VIDEOS_QUERY,
  HOME_WEBINARS_QUERY,
  HOME_TESTIMONIALS_QUERY,
} from "@/sanity/lib/queries";

export default async function Home() {
  const [{ data: webinars }, { data: recordings }, { data: testimonials }] =
    await Promise.all([
      sanityFetch({ query: HOME_WEBINARS_QUERY }),
      sanityFetch({ query: HOME_VIDEOS_QUERY }),
      sanityFetch({ query: HOME_TESTIMONIALS_QUERY }),
    ]);

  return (
    <div className="bg-[#2C3E8A]">
      <JsonLd data={breadcrumbJsonLd("/")} />
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden flex flex-col bg-[#2C3E8A]">
        {/* Hero Section with Video Background */}
        <section className="relative h-dvh min-h-[520px] flex flex-col items-center justify-center bg-[#2C3E8A]">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              src="/background/90933-629483642_small.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#2C3E8A]/55"></div>
          </div>
          <Hero />
        </section>

        {/* Programs & Event Section */}
        <Programs />

        {/* About Section */}
        <HomeAboutSection />

        {/* Webinar & Recording Preview Section */}
        <HomeWebinarRecording webinars={webinars} recordings={recordings} />

        {/* Tutor Preview Section */}
        <HomeTutorPreview />

        {/* Testimonials Section */}
        <HomeTestimonials testimonials={testimonials} />

        {/* CTA Banner Section */}
        <HomeCTABanner />
      </main>
      <Footer />
    </div>
  );
}
