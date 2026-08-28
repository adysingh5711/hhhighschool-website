"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/layout/reveal";
import { scholarshipSlides } from "@/content/scholarships";

const AUTOPLAY_INTERVAL_MS = 5000;

export function ScholarshipsCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => api.scrollNext(), AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [api]);

  return (
    <section className="bg-brand-story/10 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl sm:text-3xl">
            Scholarships Offered
          </h2>
        </Reveal>
        <Carousel opts={{ loop: true, align: "start" }} setApi={setApi} className="px-10">
          <CarouselContent>
            {scholarshipSlides.map((slide) => (
              <CarouselItem key={slide.image} className="lg:basis-1/2">
                <div className="overflow-hidden rounded-2xl border-4 border-brand-initiatives/40 shadow-md">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={1200}
                    height={927}
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
