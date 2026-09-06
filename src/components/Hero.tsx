"use client";

import Image from "next/image";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";

const statsData = [
  {
    id: 1,
    title: "50+",
    subtitle: "Tutor Awardee & Tersertifikasi",
  },
  {
    id: 2,
    title: "10.000+",
    subtitle: "Alumni Seluruh Indonesia",
  },
  {
    id: 3,
    title: "85%",
    subtitle: "Lolos Beasiswa Impian",
  },
  {
    id: 4,
    title: "98%",
    subtitle: "Mencapai Target Skor",
  },
];

const dummySlides = [
  "https://images.unsplash.com/photo-1741675121621-df90e3195f9d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDg0MzB8MHwxfHNlYXJjaHw2fHxhc2lhbiUyMG1hbGUlMjBzdHVkZW50JTIwd2VhcmluZyUyMHN1aXQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODc2Mzc2MTd8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1645034647845-e0c4a794aac0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDg0MzB8MHwxfHNlYXJjaHw5fHxhc2lhbiUyMG1hbGUlMjBzdHVkZW50JTIwd2VhcmluZyUyMHN1aXQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODc2Mzc2MTd8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=srgb&fm=jpg&ixid=M3w5MDg0MzB8MHwxfHNlYXJjaHw1fHxhc2lhbiUyMG1hbGUlMjBzdHVkZW50JTIwd2VhcmluZyUyMHN1aXQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3ODc2Mzc2MTd8MA&ixlib=rb-4.1.0&q=85"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dummySlides.length);
    }, 4000);
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
                  <h3 className="font-poppins font-bold text-lg text-white leading-none tracking-tight">
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
        <div className="hidden md:flex animate-fade-up [animation-delay:200ms] flex-1 relative justify-end items-center md:pr-4">
          <div className="relative w-full max-w-[240px] lg:max-w-[290px] aspect-[3/4]">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] shadow-lg border-4 md:border-[6px] border-white/20">
              {dummySlides.map((slide, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                  }}
                >
                  <Image
                    src={slide}
                    alt={`Student Portrait ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute -bottom-6 right-2 md:right-8 flex items-center gap-2">
            {dummySlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
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
