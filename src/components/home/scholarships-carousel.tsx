import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/layout/reveal";
import { scholarshipSlides } from "@/content/scholarships";

export function ScholarshipsCarousel() {
  return (
    <section className="bg-surface-muted px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl sm:text-3xl">
            Scholarships Offered
          </h2>
        </Reveal>
        <Carousel className="px-10">
          <CarouselContent>
            {scholarshipSlides.map((slide) => (
              <CarouselItem key={slide.image}>
                <div className="overflow-hidden rounded-2xl border-4 border-brand-initiatives/40 shadow-md">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={1200}
                    height={818}
                    className="h-auto w-full"
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
