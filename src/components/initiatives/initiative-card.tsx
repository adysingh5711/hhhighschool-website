"use client";

import { useEffect, useState } from "react";
import { CmsImage } from "@/components/ui/cms-image";
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
  const [selected, setSelected] = useState(0);
  useCarouselAutoplay(api, AUTOPLAY_INTERVAL_MS);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  if (images.length <= 1) {
    return (
      <div className="relative aspect-square w-full">
        <CmsImage src={images[0].src} alt={images[0].alt} fill className="object-cover" sizes={IMAGE_SIZES} />
      </div>
    );
  }

  return (
    <Carousel opts={{ loop: true }} setApi={setApi} className="group/gallery">
      <CarouselContent className="ml-0">
        {images.map((img, i) => (
          <CarouselItem key={i} className="relative aspect-square basis-full pl-0">
            <CmsImage src={img.src} alt={img.alt} fill className="object-cover" sizes={IMAGE_SIZES} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        variant="ghost"
        className="left-2 size-8 border-none bg-black/35 text-white hover:bg-black/55 hover:text-white sm:left-2"
      />
      <CarouselNext
        variant="ghost"
        className="right-2 size-8 border-none bg-black/35 text-white hover:bg-black/55 hover:text-white sm:right-2"
      />
      <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === selected}
            onClick={() => api?.scrollTo(i)}
            className={`size-1.5 rounded-full transition-all ${
              i === selected ? "w-4 bg-white" : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
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
