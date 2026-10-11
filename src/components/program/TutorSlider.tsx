"use client";

import { useRef } from "react";
import { CaretLeft, CaretRight, CheckCircle } from "@phosphor-icons/react";
import type { Tutor } from "@/sanity/lib/types";

export default function TutorSlider({ tutors }: { tutors: Tutor[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mb-16">
      {/* Controls & Hint Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-gray-400 font-inter font-medium">
          Geser atau gunakan tombol panah untuk melihat seluruh tutor ({tutors.length})
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1a2557] shadow-xs transition-all hover:bg-[#2C3E8A] hover:text-white hover:border-[#2C3E8A] cursor-pointer"
          >
            <CaretLeft size={18} weight="bold" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1a2557] shadow-xs transition-all hover:bg-[#2C3E8A] hover:text-white hover:border-[#2C3E8A] cursor-pointer"
          >
            <CaretRight size={18} weight="bold" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth -mx-6 px-6 md:mx-0 md:px-0"
      >
        {tutors.map((tutor) => (
          <div
            key={tutor._id}
            className="snap-start shrink-0 w-[280px] sm:w-[320px] group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-md"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tutor.image}
                alt={`Tutor ${tutor.name}`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-poppins font-bold text-base leading-snug text-[#1a2557]">
                {tutor.name}
              </h3>
              <p className="mt-1.5 text-xs text-[#2C3E8A] font-inter leading-relaxed">
                {tutor.credential}
              </p>
              <ul className="mt-4 space-y-2 border-t border-gray-100 pt-3.5">
                {[tutor.expertise, tutor.role].filter(Boolean).map((item) => (
                  <li
                    key={item as string}
                    className="flex items-start gap-2 text-xs text-gray-500 font-inter leading-tight"
                  >
                    <CheckCircle
                      size={15}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-[#2C3E8A]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
