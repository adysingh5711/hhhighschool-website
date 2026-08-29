"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useCarouselAutoplay } from "@/hooks/use-carousel-autoplay";
import { paletteColor, paletteTint } from "@/lib/brand-palette";
import type { Initiative } from "@/content/initiatives";

const AUTOPLAY_INTERVAL_MS = 4000;
const IMAGE_SIZES = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

type CardImage = { src: string; alt: string };

function InitiativeImages({ images }: { images: CardImage[] }) {
  const [api, setApi] = useState<CarouselApi>();
  useCarouselAutoplay(api, AUTOPLAY_INTERVAL_MS);

  if (images.length <= 1) {
    return (
      <div className="relative aspect-square w-full">
        <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" sizes={IMAGE_SIZES} />
      </div>
    );
  }

  return (
    <Carousel opts={{ loop: true }} setApi={setApi} className="group/gallery">
      <CarouselContent className="ml-0">
        {images.map((img) => (
          <CarouselItem key={img.src} className="relative aspect-square basis-full pl-0">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes={IMAGE_SIZES} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 size-7 opacity-0 transition-opacity group-hover/gallery:opacity-100" />
      <CarouselNext className="right-2 size-7 opacity-0 transition-opacity group-hover/gallery:opacity-100" />
    </Carousel>
  );
}

export function InitiativeCard({ initiative, index }: { initiative: Initiative; index: number }) {
  const images: CardImage[] = [
    { src: initiative.image, alt: initiative.alt || initiative.title },
    ...(initiative.images ?? []).map((i) => ({ src: i.url, alt: i.alt || initiative.title })),
  ].filter((img) => img.src);

  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
      style={{ backgroundColor: paletteTint(index) }}
    >
      <InitiativeImages images={images} />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-lg" style={{ color: paletteColor(index) }}>
          {initiative.title}
        </h3>
        <p className="text-xs font-medium text-foreground/70">{initiative.subtitle}</p>
        <p className="text-sm text-muted-foreground">{initiative.description}</p>
      </div>
    </div>
  );
}
