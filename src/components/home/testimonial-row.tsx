import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/layout/reveal";
import { InitialsAvatar } from "@/components/home/initials-avatar";
import type { Testimonial } from "@/content/testimonials";

export function TestimonialRow({
  title,
  testimonials,
}: {
  title: string;
  testimonials: Testimonial[];
}) {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl sm:text-3xl">{title}</h2>
        </Reveal>
        <Carousel opts={{ align: "start", dragFree: true }} className="px-2">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="basis-[85%] sm:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm">
                  <blockquote className="text-sm leading-relaxed text-muted-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3 pt-2">
                    {t.image ? (
                      <Image
                        src={t.image}
                        alt=""
                        width={48}
                        height={48}
                        className="size-12 rounded-full object-cover"
                      />
                    ) : (
                      <InitialsAvatar name={t.name} />
                    )}
                    <div>
                      <p className="font-heading text-sm">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
