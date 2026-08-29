"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { GalleryImage } from "@/content/gallery";

export function GalleryLightbox({
  images,
  categoryTitle,
  priority = false,
}: {
  images: GalleryImage[];
  categoryTitle: string;
  priority?: boolean;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const touchStartX = useRef<number | null>(null);

  const go = (delta: number) => {
    if (index === null) return;
    setIndex((index + delta + images.length) % images.length);
  };

  const SWIPE_THRESHOLD_PX = 40;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    go(delta < 0 ? 1 : -1);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={img.url}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={img.url}
              alt={img.alt || `${categoryTitle} photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              priority={priority && i < 4}
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(v) => !v && setIndex(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none sm:max-w-4xl">
          <DialogTitle className="sr-only">{categoryTitle} photo viewer</DialogTitle>
          {open && (
            <div className="relative">
              <div
                className="relative aspect-4/3 w-full touch-pan-y overflow-hidden rounded-lg bg-black"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <Image
                  src={images[index].url}
                  alt={images[index].alt || `${categoryTitle} photo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 896px) 896px, 100vw"
                />
              </div>
              {images.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 left-2 -mt-4 rounded-full"
                    onClick={() => go(-1)}
                    aria-label="Previous photo"
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-1/2 right-2 -mt-4 rounded-full"
                    onClick={() => go(1)}
                    aria-label="Next photo"
                  >
                    <ChevronRight />
                  </Button>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
