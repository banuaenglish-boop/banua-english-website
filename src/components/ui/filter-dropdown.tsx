"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export type FilterOption<T extends string> = { key: T; label: string };

/** Rounded pill dropdown used by the webinar & recording filter bars. */
export default function FilterDropdown<T extends string>({
  value,
  onChange,
  options,
  label,
}: {
  value: T;
  onChange: (value: T) => void;
  options: FilterOption<T>[];
  /** aria-label for the trigger, e.g. "Pilih negara filter". */
  label: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find((o) => o.key === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={label}
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-[#1a2557] transition-all hover:border-[#2C3E8A] hover:text-[#2C3E8A] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2C3E8A] min-w-[200px]"
      >
        <div className="flex items-center gap-2 flex-1">
          <span>{selected?.label ?? options[0]?.label}</span>
        </div>
        <svg
          className={`h-4 w-4 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute left-0 top-full z-20 mt-2 w-56 origin-top-left overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl ring-1 ring-black/5">
            <div className="max-h-72 overflow-y-auto py-1">
              {options.map((option) => (
                <button
                  key={option.key}
                  onClick={() => {
                    onChange(option.key);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-bold transition-colors outline-none",
                    value === option.key
                      ? "bg-[#2C3E8A] text-white"
                      : "text-[#1a2557] hover:bg-gray-50"
                  )}
                  role="menuitem"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base">{option.label}</span>
                    {value === option.key && (
                      <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
