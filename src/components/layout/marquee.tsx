"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GAP_PX = 24; // matches gap-6

/**
 * Auto-scrolling row of cards (content is duplicated so it drifts seamlessly), with
 * arrow buttons and ArrowLeft/ArrowRight to nudge it a card at a time. Both directions
 * wrap: stepping back from the first card lands on the last, and vice versa.
 */
export function Marquee({
  children,
  speed = 40,
  className,
}: {
  children: ReactNode;
  /** Ambient auto-scroll speed in px/sec. */
  speed?: number;
  className?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  // scrollLeft is an integer, so sub-pixel-per-frame drift must accumulate here instead
  // of being read back from the (rounding) DOM property each frame.
  const positionRef = useRef(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const set = setRef.current;
    if (!scroller || !set) return;

    let frame: number;
    let last = performance.now();
    function tick(now: number) {
      const dt = (now - last) / 1000;
      last = now;
      if (scroller && set) {
        if (pausedRef.current) {
          // Stay in sync with drag/step-driven scrolling while paused.
          positionRef.current = scroller.scrollLeft;
        } else {
          const setWidth = set.scrollWidth;
          let next = positionRef.current + speed * dt;
          if (next >= setWidth) next -= setWidth;
          positionRef.current = next;
          scroller.scrollLeft = next;
        }
      }
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  function pauseThenResume() {
    pausedRef.current = true;
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => (pausedRef.current = false), 3000);
  }

  function step(direction: 1 | -1) {
    const scroller = scrollerRef.current;
    const set = setRef.current;
    if (!scroller || !set) return;
    const itemWidth = (set.firstElementChild as HTMLElement | null)?.offsetWidth ?? 300;
    const delta = itemWidth + GAP_PX;
    const setWidth = set.scrollWidth;

    pauseThenResume();
    // Re-base into the duplicated set first so stepping past either end wraps seamlessly.
    if (direction === -1 && scroller.scrollLeft - delta < 0) {
      scroller.scrollLeft += setWidth;
    } else if (direction === 1 && scroller.scrollLeft + delta > setWidth) {
      scroller.scrollLeft -= setWidth;
    }
    scroller.scrollBy({ left: direction * delta, behavior: "smooth" });
  }

  return (
    <div className={`group/marquee relative ${className ?? ""}`}>
      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-6 overflow-x-auto"
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onPointerDown={() => (pausedRef.current = true)}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            step(-1);
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            step(1);
          }
        }}
      >
        <div ref={setRef} className="flex shrink-0 gap-6">
          {children}
        </div>
        <div className="flex shrink-0 gap-6" aria-hidden="true">
          {children}
        </div>
      </div>
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => step(-1)}
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full border bg-white/90 p-2 opacity-0 shadow-sm transition-opacity group-hover/marquee:opacity-100 hover:bg-white focus-visible:opacity-100"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => step(1)}
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full border bg-white/90 p-2 opacity-0 shadow-sm transition-opacity group-hover/marquee:opacity-100 hover:bg-white focus-visible:opacity-100"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
