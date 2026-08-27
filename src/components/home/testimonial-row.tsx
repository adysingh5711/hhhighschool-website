import { Reveal } from "@/components/layout/reveal";
import { Marquee } from "@/components/layout/marquee";
import { FramedAvatar } from "@/components/home/framed-avatar";
import type { Testimonial } from "@/content/testimonials";

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
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex h-full w-80 flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm"
          >
            <blockquote className="text-sm leading-relaxed text-muted-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 pt-2">
              <FramedAvatar name={t.name} image={t.image} />
              <div>
                <p className="font-heading text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
