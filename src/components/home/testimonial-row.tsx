import Image from "next/image";
import { Reveal } from "@/components/layout/reveal";
import { Marquee } from "@/components/layout/marquee";
import { paletteColor } from "@/lib/brand-palette";
import type { Testimonial } from "@/content/testimonials";

function initialsOf(name: string) {
  const parts = name.replace(/[()&]/g, "").trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export function TestimonialRow({
  title,
  testimonials,
}: {
  title: string;
  testimonials: Testimonial[];
}) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl sm:text-3xl">{title}</h2>
        </Reveal>
      </div>
      <Marquee durationSeconds={testimonials.length * 5}>
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className="flex h-full w-80 flex-col overflow-hidden rounded-xl border bg-card shadow-sm"
          >
            <div className="relative h-48 shrink-0">
              <span
                className="absolute top-3 left-3 size-20 rounded-full"
                style={{ backgroundColor: paletteColor(i) }}
                aria-hidden
              />
              <div className="absolute top-8 right-3 bottom-3 left-9 overflow-hidden rounded-lg shadow-sm">
                {t.image ? (
                  <Image src={t.image} alt="" fill className="object-cover" sizes="320px" />
                ) : (
                  <div
                    className="flex size-full items-center justify-center font-heading text-2xl text-white"
                    style={{ backgroundColor: paletteColor(i) }}
                  >
                    {initialsOf(t.name)}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 bg-surface-muted p-6">
              <blockquote className="text-sm leading-relaxed text-foreground/80 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-heading text-base uppercase" style={{ color: paletteColor(i) }}>
                  {t.name}
                </p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </div>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
