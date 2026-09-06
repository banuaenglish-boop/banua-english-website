import { cn } from "@/lib/utils";

/**
 * Eyebrow label above section headings. Pill badge, no leading dash rule.
 * Alignment comes from the parent's text-align (element is inline-flex).
 */
export default function SectionLabel({
  children,
  variant = "light",
  className,
}: {
  children: React.ReactNode;
  /** "light" = on white sections, "dark" = on photo/navy heroes */
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-3 inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.2em]",
        variant === "dark"
          ? "border-white/20 bg-white/10 text-white/70"
          : "border-[#2C3E8A]/15 bg-[#2C3E8A]/[0.06] text-[#2C3E8A]",
        className,
      )}
    >
      {children}
    </p>
  );
}
