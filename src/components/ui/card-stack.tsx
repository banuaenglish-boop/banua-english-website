"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type CardStackItem = {
  id: string | number;
  title?: string;
  description?: string;
  imageSrc?: string;
  href?: string;
  ctaLabel?: string;
  tag?: string;
  date?: string;
  time?: string;
  speaker?: string;
  speakerCredential?: string;
  countryLabel?: string;
};

export type CardStackProps<T extends CardStackItem> = {
  items: T[];

  /** Selected index on mount */
  initialIndex?: number;

  /** How many cards are visible around the active (odd recommended) */
  maxVisible?: number;

  /** Card sizing */
  cardWidth?: number;
  cardHeight?: number;

  /** How much cards overlap each other (0..0.8). Higher = more overlap */
  overlap?: number;

  /** Total fan angle (deg). Higher = wider arc */
  spreadDeg?: number;

  /** 3D / depth feel */
  perspectivePx?: number;
  depthPx?: number;
  tiltXDeg?: number;

  /** Active emphasis */
  activeLiftPx?: number;
  activeScale?: number;
  inactiveScale?: number;

  /** Motion */
  springStiffness?: number;
  springDamping?: number;

  /** Behavior */
  loop?: boolean;
  autoAdvance?: boolean;
  intervalMs?: number;
  pauseOnHover?: boolean;

  /** UI */
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;

  /** Hooks */
  onChangeIndex?: (index: number, item: T) => void;

  /** Custom renderer (optional) */
  renderCard?: (item: T, state: { active: boolean }) => React.ReactNode;
};

function wrapIndex(n: number, len: number) {
  if (len <= 0) return 0;
  return ((n % len) + len) % len;
}

/** Minimal signed offset from active index to i, with wrapping (for loop behavior). */
function signedOffset(i: number, active: number, len: number, loop: boolean) {
  const raw = i - active;
  if (!loop || len <= 1) return raw;

  const alt = raw > 0 ? raw - len : raw + len;
  return Math.abs(alt) < Math.abs(raw) ? alt : raw;
}

export function CardStack<T extends CardStackItem>({
  items,
  initialIndex = 0,
  maxVisible = 7,

  cardWidth = 290,
  cardHeight = 410,

  overlap = 0.48,
  spreadDeg = 48,

  perspectivePx = 1100,
  depthPx = 140,
  tiltXDeg = 12,

  activeLiftPx = 22,
  activeScale = 1.03,
  inactiveScale = 0.94,

  springStiffness = 300,
  springDamping = 30,

  loop = true,
  autoAdvance = false,
  intervalMs = 3500,
  pauseOnHover = true,

  showDots = false,
  showArrows = false,
  className,

  onChangeIndex,
  renderCard,
}: CardStackProps<T>) {
  const len = items.length;

  const [active, setActive] = React.useState(() =>
    wrapIndex(initialIndex, len),
  );
  const [hovering, setHovering] = React.useState(false);

  // keep active in bounds if items change
  React.useEffect(() => {
    setActive((a) => wrapIndex(a, len));
  }, [len]);

  React.useEffect(() => {
    if (!len) return;
    onChangeIndex?.(active, items[active]!);
  }, [active, len, items, onChangeIndex]);

  const maxOffset = Math.max(0, Math.floor(maxVisible / 2));
  const cardSpacing = Math.max(10, Math.round(cardWidth * (1 - overlap)));
  const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;

  const canGoPrev = loop || active > 0;
  const canGoNext = loop || active < len - 1;

  const prev = React.useCallback(() => {
    if (!len) return;
    if (!canGoPrev) return;
    setActive((a) => wrapIndex(a - 1, len));
  }, [canGoPrev, len]);

  const next = React.useCallback(() => {
    if (!len) return;
    if (!canGoNext) return;
    setActive((a) => wrapIndex(a + 1, len));
  }, [canGoNext, len]);

  // keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  // autoplay
  React.useEffect(() => {
    if (!autoAdvance) return;
    if (!len) return;
    if (pauseOnHover && hovering) return;

    const id = window.setInterval(
      () => {
        if (loop || active < len - 1) next();
      },
      Math.max(700, intervalMs),
    );

    return () => window.clearInterval(id);
  }, [autoAdvance, intervalMs, hovering, pauseOnHover, len, loop, active, next]);

  if (!len) return null;

  return (
    <div
      className={cn("w-full select-none", className)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Stage */}
      <div
        className="relative w-full flex items-center justify-center outline-none touch-pan-y"
        style={{ height: cardHeight + 40 }}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >

        <div
          className="absolute inset-0 flex items-end justify-center"
          style={{
            perspective: `${perspectivePx}px`,
          }}
        >
          <AnimatePresence initial={false}>
            {items.map((item, i) => {
              const off = signedOffset(i, active, len, loop);
              const abs = Math.abs(off);
              const visible = abs <= maxOffset;

              if (!visible) return null;

              const rotateZ = off * stepDeg;
              const x = off * cardSpacing;
              const y = abs * 12;
              const z = -abs * depthPx;

              const isActive = off === 0;
              const scale = isActive ? activeScale : inactiveScale;
              const lift = isActive ? -activeLiftPx : 0;
              const rotateX = isActive ? 0 : tiltXDeg;
              const zIndex = 100 - abs;

              return (
                <motion.div
                  key={item.id}
                  className={cn(
                    "absolute bottom-4 rounded-3xl border-2 border-white/40 shadow-lg overflow-hidden touch-none",
                    "will-change-transform select-none",
                    isActive
                      ? "cursor-grab active:cursor-grabbing ring-4 ring-[#2C3E8A]/25"
                      : "cursor-pointer hover:brightness-105",
                  )}
                  style={{
                    width: cardWidth,
                    maxWidth: "88vw",
                    height: cardHeight,
                    zIndex,
                    transformStyle: "preserve-3d",
                  }}
                  drag={isActive ? "x" : false}
                  dragSnapToOrigin={true}
                  dragElastic={0.65}
                  onDragEnd={(_e, info) => {
                    const offsetThreshold = 35;
                    const velocityThreshold = 180;
                    if (
                      info.offset.x > offsetThreshold ||
                      info.velocity.x > velocityThreshold
                    ) {
                      prev();
                    } else if (
                      info.offset.x < -offsetThreshold ||
                      info.velocity.x < -velocityThreshold
                    ) {
                      next();
                    }
                  }}
                  initial={{
                    opacity: 0,
                    y: y + 40,
                    x,
                    rotateZ,
                    rotateX,
                    scale,
                  }}
                  animate={{
                    opacity: 1,
                    x,
                    y: y + lift,
                    rotateZ,
                    rotateX,
                    scale,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: springStiffness,
                    damping: springDamping,
                  }}
                  onClick={() => {
                    if (!isActive) {
                      setActive(i);
                    }
                  }}
                >
                  <div
                    className="h-full w-full pointer-events-none"
                    style={{
                      transform: `translateZ(${z}px)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {renderCard ? (
                      renderCard(item, { active: isActive })
                    ) : (
                      <DefaultFanCard item={item} active={isActive} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls (hanya jika showDots atau showArrows aktif) */}
      {(showDots || showArrows) && (
        <div className="mt-4 flex items-center justify-center gap-4">
          {showArrows && (
            <button
              type="button"
              onClick={prev}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm transition hover:bg-gray-100 hover:text-[#2C3E8A] active:scale-95"
              aria-label="Poster sebelumnya"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          )}

          {showDots && (
            <div className="flex items-center gap-2">
              {items.map((it, idx) => {
                const on = idx === active;
                return (
                  <button
                    key={it.id}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-300",
                      on
                        ? "w-8 bg-[#2C3E8A]"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400",
                    )}
                    aria-label={`Lihat poster ${idx + 1}`}
                  />
                );
              })}
            </div>
          )}

          {showArrows && (
            <button
              type="button"
              onClick={next}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-gray-200 text-gray-700 shadow-sm transition hover:bg-gray-100 hover:text-[#2C3E8A] active:scale-95"
              aria-label="Poster berikutnya"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export function DefaultFanCard({
  item,
}: {
  item: CardStackItem;
  active?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-slate-900 shadow-md select-none pointer-events-none">
      {item.imageSrc ? (
        <img
          src={item.imageSrc}
          alt={item.title || "Poster webinar"}
          className="h-full w-full object-cover object-center pointer-events-none select-none"
          draggable={false}
          loading="eager"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-slate-800 text-sm text-slate-400">
          No image
        </div>
      )}
    </div>
  );
}

