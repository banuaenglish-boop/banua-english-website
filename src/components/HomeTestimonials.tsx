"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import type { HomeTestimonial } from "@/sanity/lib/types";

export default function HomeTestimonials({
  testimonials,
}: {
  testimonials: HomeTestimonial[];
}) {
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-[#2C3E8A] section-y relative z-10 overflow-hidden">
      <div className="section-shell mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="flex justify-center mb-2">
            <div className="border border-white/20 py-1 px-4 rounded-full text-xs font-bold text-white/60 uppercase tracking-[0.2em]">
              Alumni Stories
            </div>
          </div>
          <h2 className="heading-2 font-poppins font-bold text-white tracking-tight mt-1 mb-2">
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-white/60 text-sm">
            Cerita peserta tentang pengalaman belajar IELTS dan TOEFL bersama English Banua.
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center gap-5 max-h-[clamp(360px,48vh,460px)] overflow-hidden px-6 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
        <TestimonialsColumn testimonials={firstColumn} duration={15} />
        {secondColumn.length > 0 && <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />}
        {thirdColumn.length > 0 && <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />}
      </div>
    </section>
  );
}
