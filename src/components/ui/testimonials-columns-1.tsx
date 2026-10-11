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
                  <p className="text-white/80 text-sm leading-relaxed font-inter">{text}</p>
                  <div className="flex items-center gap-3 mt-4">
                    {avatar ? <img
                      width={40}
                      height={40}
                      src={avatar}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
                    /> : <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white ring-2 ring-white/20" aria-hidden="true">{name.split(" ").slice(0, 2).map((part) => part[0]).join("")}</span>}
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
