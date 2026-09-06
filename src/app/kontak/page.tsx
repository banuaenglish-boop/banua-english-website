import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KontakHero from "@/components/kontak/KontakHero";
import ContactForm from "@/components/kontak/ContactForm";
import ContactInfo from "@/components/kontak/ContactInfo";
import FAQSection from "@/components/kontak/FAQSection";
import { sanityFetch } from "@/sanity/lib/live";
import { FAQS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Kontak & Pendaftaran | English Banua",
  description:
    "Daftar kelas IELTS, TOEFL, atau webinar English Banua. Hubungi kami via WhatsApp atau isi form pendaftaran, konsultasi gratis!",
};

export default async function KontakPage() {
  const { data: faqs } = await sanityFetch({ query: FAQS_QUERY });

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <KontakHero />
        <section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Form takes 3 cols, Info takes 2 cols */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
              <div className="lg:col-span-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>
        <FAQSection faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
}
