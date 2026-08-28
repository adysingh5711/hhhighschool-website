"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function GalleryLightbox({
  images,
  categoryTitle,
}: {
  images: string[];
  categoryTitle: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const go = (delta: number) => {
    if (index === null) return;
    setIndex((index + delta + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`${categoryTitle} photo ${i + 1}`}
              fill
              className="object-cover transition-transform duration-200 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={(v) => !v && setIndex(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none sm:max-w-4xl">
          <DialogTitle className="sr-only">{categoryTitle} photo viewer</DialogTitle>
          {open && (
            <div className="relative">
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-black">
                <Image
                  src={images[index]}
                  alt={`${categoryTitle} photo ${index + 1}`}
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
