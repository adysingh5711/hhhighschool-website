import { CmsImage } from "@/components/ui/cms-image";
import { Reveal } from "@/components/layout/reveal";
import { Marquee } from "@/components/layout/marquee";
import { paletteColor } from "@/lib/brand-palette";
import type { Testimonial } from "@/content/testimonials";

// Card is a fixed 376x256 photo over a 376-wide panel, matching the source design exactly
// (source photos are pre-cut to 376x256 PNGs with transparent backgrounds so the accent
// circle behind the subject shows through).
const PHOTO_WIDTH = 376;
const PHOTO_HEIGHT = 256;
const CIRCLE_SIZE = 204;

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
          <h2 className="mb-10 text-center font-heading text-2xl text-brand-gallery sm:text-3xl">{title}</h2>
        </Reveal>
      </div>
      <Marquee>
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            className="flex h-full w-80 shrink-0 flex-col items-center border-2 border-white bg-surface-muted"
          >
            <div className="relative w-full shrink-0 overflow-hidden bg-white" style={{ height: PHOTO_HEIGHT }}>
              <span
                className="absolute rounded-full"
                style={{
                  width: CIRCLE_SIZE,
                  height: CIRCLE_SIZE,
                  left: (PHOTO_WIDTH - CIRCLE_SIZE) * 0.6,
                  top: (PHOTO_HEIGHT - CIRCLE_SIZE) / 2,
                  backgroundColor: paletteColor(i),
                }}
                aria-hidden
              />
              {t.image && (
                <CmsImage src={t.image} alt={t.alt ?? ""} fill className="relative object-cover" sizes="376px" />
              )}
            </div>
            <div className="flex w-full flex-1 flex-col justify-between gap-2 p-3">
              <blockquote className="text-sm leading-relaxed text-foreground italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <p className="font-heading text-lg uppercase" style={{ color: paletteColor(i) }}>
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
