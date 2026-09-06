"use client";

import { cn } from "@/lib/utils";

export type DateSort = "terbaru" | "upcoming";

const options: { key: DateSort; label: string }[] = [
  { key: "terbaru", label: "Terbaru" },
  { key: "upcoming", label: "Upcoming" },
];

export default function DateFilter({
  value,
  onChange,
  className,
}: {
  value: DateSort;
  onChange: (value: DateSort) => void;
  className?: string;
}) {
  return (
    <div
      role="group"
      aria-label="Urutkan berdasarkan tanggal"
      className={cn(
        "inline-flex rounded-full border border-gray-200 bg-white p-1 shadow-sm",
        className
      )}
    >
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          onClick={() => onChange(option.key)}
          aria-pressed={value === option.key}
          className={cn(
            "rounded-full px-4 py-1.5 text-xs md:text-sm font-bold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C3E8A]",
            value === option.key
              ? "bg-[#2C3E8A] text-white shadow"
              : "text-[#1a2557] hover:text-[#2C3E8A]"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
