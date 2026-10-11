"use client";

import Image from "next/image";
import { ArrowRight, Check, Quotes } from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";
import { statsData } from "@/lib/content";
import { heroTestimonials } from "@/lib/provided-content";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroTestimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full flex-1 flex items-center justify-center py-8 min-h-0">
      <div className="section-shell relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-10">
        {/* Left Content */}
        <div className="flex-1 text-white max-w-2xl flex flex-col justify-center">
          {/* Eyebrow label */}
          <h1 className="animate-fade-up [animation-delay:120ms] text-[clamp(1.6rem,4vw,2.6rem)] font-poppins font-bold leading-[1.12] tracking-tight text-balance mb-3 text-white">
            Persiapan IELTS &amp; TOEFL Terbaik Bersama Tutor Awardee
          </h1>
          <p className="animate-fade-up [animation-delay:240ms] text-sm md:text-base text-white/80 mb-4 max-w-xl font-inter leading-relaxed">
            <span className="font-semibold text-white">English Banua</span> siap bantu raih skor targetmu lewat Private 1-on-1 &amp; Kelas Intensif, dibimbing langsung oleh Awardee S1/S2 dalam dan luar negeri.
          </p>
          <div className="animate-fade-up [animation-delay:360ms] mb-4">
            <button className="group flex items-center gap-2 md:gap-3 bg-white pl-2 pr-5 md:pr-6 py-1.5 rounded-full hover:-translate-y-0.5 transition-all duration-300 shadow-lg w-max">
              <div className="bg-[#2C3E8A] text-white p-2.5 rounded-full transition-transform duration-300 group-hover:-rotate-45">
                <ArrowRight size={17} weight="bold" />
              </div>
              <span className="text-xs md:text-sm font-poppins font-semibold text-[#2C3E8A]">
                Start Your Journey
              </span>
            </button>
          </div>

          {/* Stats integrated in the Hero */}
          <div className="animate-fade-up [animation-delay:480ms] grid grid-cols-2 gap-x-4 gap-y-3 border-t border-white/15 mt-3 pt-4">
            {statsData.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-1">
                <div className="flex items-center gap-2.5">
                  <div className="flex-shrink-0 bg-[#FFD700] w-6 h-6 rounded-full flex items-center justify-center text-[#2C3E8A]">
                    <Check size={13} weight="bold" />
                  </div>
                  <h3 className="font-poppins font-bold text-sm lg:text-base text-white leading-snug tracking-tight">
                    {stat.title}
                  </h3>
                </div>
                <p className="font-inter text-[10px] lg:text-xs text-white/60 font-medium leading-snug">
                  {stat.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - hidden on mobile, visible md+ */}
        <div className="hidden md:flex animate-fade-up [animation-delay:200ms] flex-1 relative justify-end items-center md:pr-2">
          <div className="relative w-full max-w-[350px] lg:max-w-[430px] xl:max-w-[480px] aspect-[1/1.1]">
            <div className="relative h-full w-full">
              {heroTestimonials.map((slide, index) => (
                <div
                  key={slide._id}
                  aria-hidden={index !== currentSlide}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    pointerEvents: index === currentSlide ? "auto" : "none",
                  }}
                >
                  <div className="absolute inset-y-0 left-0 right-8 overflow-hidden rounded-2xl border border-white/25 shadow-2xl">
                    <Image
                      src={slide.avatar}
                      alt={`Foto ${slide.name}, peserta ${slide.programLabel}`}
                      fill
                      sizes="(min-width: 1280px) 448px, (min-width: 1024px) 398px, 318px"
                      className="object-cover"
                      style={{ objectPosition: slide.imagePosition, transform: `scale(${slide.imageScale})`, transformOrigin: "40% 55%" }}
                      preload={index === 0}
                    />
                  </div>
                  <div className="absolute -right-2 bottom-3 w-[62%] max-w-[280px] rounded-xl border border-white/70 bg-white/95 px-3.5 py-3 shadow-lg backdrop-blur-md lg:-right-3 lg:bottom-4">
                    <div className="flex items-start gap-2">
                      <Quotes size={16} weight="fill" className="mt-0.5 shrink-0 text-[#2C3E8A]/35" aria-hidden="true" />
                      <blockquote className="font-inter text-xs font-medium leading-relaxed text-[#1a2557] lg:text-[13px]">{slide.quote}</blockquote>
                    </div>
                    <div className="mt-2.5 border-t border-[#2C3E8A]/10 pt-2">
                      <p className="font-poppins text-xs font-bold leading-snug text-[#1a2557]">{slide.name}</p>
                      <p className="mt-0.5 text-[10px] leading-snug text-gray-500">{slide.programLabel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute -bottom-6 right-2 md:right-8 flex items-center gap-2">
            {heroTestimonials.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Lihat testimoni ${slide.name}`}
                aria-pressed={index === currentSlide}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "w-6 bg-[#FFD700]"
                  : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
