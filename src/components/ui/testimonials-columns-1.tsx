"use client";
import React from "react";
import { motion } from "framer-motion";
import type { HomeTestimonial } from "@/sanity/lib/types";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: HomeTestimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, avatar, name, role }, i) => (
                <div
                  className="p-5 rounded-3xl border border-white/10 bg-white/5 max-w-xs w-full"
                  key={i}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg
                        key={si}
                        className="w-3.5 h-3.5 text-[#FFD700]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed font-inter">{text}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      width={40}
                      height={40}
                      src={avatar}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-poppins font-semibold text-sm text-white tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="text-xs leading-5 text-[#FFD700]/80 tracking-tight">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
