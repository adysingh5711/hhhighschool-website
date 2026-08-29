import { useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

/**
 * Autoplay that pauses while the user is dragging/tapping the carousel — without this,
 * an interval-driven scrollNext() firing mid-gesture fights the user's own swipe and
 * the slide jumps two at once instead of one.
 */
export function useCarouselAutoplay(api: CarouselApi | undefined, intervalMs: number) {
  useEffect(() => {
    if (!api) return;
    let paused = false;
    const pause = () => (paused = true);
    const resume = () => (paused = false);
    api.on("pointerDown", pause);
    api.on("pointerUp", resume);
    const id = setInterval(() => {
      if (!paused) api.scrollNext();
    }, intervalMs);
    return () => {
      clearInterval(id);
      api.off("pointerDown", pause);
      api.off("pointerUp", resume);
    };
  }, [api, intervalMs]);
}
