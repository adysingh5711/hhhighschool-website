import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/layout/reveal";
import { InitialsAvatar } from "@/components/home/initials-avatar";
import { alumniTestimonials } from "@/content/testimonials";

const colorVar: Record<string, string> = {
  story: "var(--brand-story)",
  initiatives: "var(--brand-initiatives)",
  accolades: "var(--brand-accolades)",
  gallery: "var(--brand-gallery)",
};

export function AlumniRow() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl sm:text-3xl">Alumni Speak</h2>
        </Reveal>
        <Carousel opts={{ align: "start", dragFree: true }} className="px-2">
          <CarouselContent>
            {alumniTestimonials.map((a) => (
              <CarouselItem key={a.name} className="basis-[85%] sm:basis-1/2 lg:basis-1/4">
                <div
                  className="flex h-full flex-col gap-4 rounded-xl p-6 text-white shadow-sm"
                  style={{ backgroundColor: colorVar[a.color] }}
                >
                  <p className="text-sm leading-relaxed italic">&ldquo;{a.quote}&rdquo;</p>
                  <div className="mt-auto flex flex-col items-center gap-2 pt-4 text-center">
                    <InitialsAvatar
                      name={a.name}
                      className="size-16 border-2 border-white text-base"
                    />
                    <p className="font-heading text-sm">{a.name}</p>
                    <p className="text-xs text-white/80">{a.year}</p>
                    <p className="text-xs text-white/80">{a.qualification}</p>
                    <p className="text-xs font-semibold text-white/90">{a.role}</p>
                  </div>
                </div>
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
