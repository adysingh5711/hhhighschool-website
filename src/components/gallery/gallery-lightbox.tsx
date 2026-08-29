"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CmsImage } from "@/components/ui/cms-image";
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
            <CmsImage
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
        <DialogContent
          showCloseButton={false}
          className="max-w-4xl border-none bg-transparent p-0 shadow-none sm:max-w-4xl"
        >
          <DialogTitle className="sr-only">{categoryTitle} photo viewer</DialogTitle>
          {open && (
            <div className="relative">
              <DialogClose
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 z-10 rounded-full border-none bg-black/35 text-white hover:bg-black/55 hover:text-white"
                    aria-label="Close"
                  />
                }
              >
                <X />
              </DialogClose>
              <div
                className="relative aspect-4/3 w-full touch-pan-y overflow-hidden rounded-lg bg-black"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                <Image
                  key={`${images[index].url}-bg`}
                  src={images[index].url}
                  alt=""
                  aria-hidden
                  fill
                  className="scale-110 object-cover opacity-60 blur-2xl"
                  sizes="(min-width: 896px) 896px, 100vw"
                />
                <CmsImage
                  key={images[index].url}
                  src={images[index].url}
                  alt={images[index].alt || `${categoryTitle} photo ${index + 1}`}
                  fill
                  showSkeleton={false}
                  className="relative object-contain"
                  sizes="(min-width: 896px) 896px, 100vw"
                />
              </div>
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 left-2 -mt-4 rounded-full border-none bg-black/35 text-white hover:bg-black/55 hover:text-white"
                    onClick={() => go(-1)}
                    aria-label="Previous photo"
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-2 -mt-4 rounded-full border-none bg-black/35 text-white hover:bg-black/55 hover:text-white"
                    onClick={() => go(1)}
                    aria-label="Next photo"
                  >
                    <ChevronRight />
                  </Button>
                  <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
                    {images.map((img, i) => (
                      <button
                        key={img.url}
                        type="button"
                        aria-label={`Go to photo ${i + 1}`}
                        aria-current={i === index}
                        onClick={() => setIndex(i)}
                        className={`size-1.5 rounded-full transition-all ${
                          i === index ? "w-4 bg-white" : "bg-white/60 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
