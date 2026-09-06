"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

import SectionLabel from "@/components/ui/section-label";
import type { Faq } from "@/sanity/lib/types";

export default function FAQSection({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <SectionLabel variant="light">FAQ</SectionLabel>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-[#1a2557] leading-tight">
              Pertanyaan yang{" "}
              <span className="text-[#2C3E8A]">Sering Diajukan</span>
            </h2>
          </div>

          {/* FAQ accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq._id}
                  className={cn(
                    "rounded-2xl border transition-all duration-300",
                    isOpen
                      ? "border-[#2C3E8A]/30 bg-blue-50/30 shadow-md"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 md:px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={cn(
                        "font-poppins font-semibold text-sm md:text-base leading-snug transition-colors",
                        isOpen ? "text-[#2C3E8A]" : "text-[#1a2557]"
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                        isOpen
                          ? "bg-[#2C3E8A] text-white rotate-180"
                          : "bg-gray-100 text-gray-500"
                      )}
                    >
                      <CaretDown size={14} weight="bold" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 md:px-6 pb-5 text-xs md:text-sm text-gray-500 font-inter leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
