import { Reveal } from "@/components/layout/reveal";
import { Marquee } from "@/components/layout/marquee";
import { FramedAvatar } from "@/components/home/framed-avatar";
import { alumniTestimonials } from "@/content/testimonials";

const colorVar: Record<string, string> = {
  story: "var(--brand-story)",
  initiatives: "var(--brand-initiatives)",
  accolades: "var(--brand-accolades)",
  gallery: "var(--brand-gallery)",
};

export function AlumniRow() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl sm:text-3xl">Alumni Speak</h2>
        </Reveal>
      </div>
      <Marquee durationSeconds={alumniTestimonials.length * 6}>
        {alumniTestimonials.map((a) => (
          <div
            key={a.name}
            className="flex h-full w-72 flex-col items-center gap-4 rounded-xl p-6 pt-8 text-center text-white shadow-sm"
            style={{ backgroundColor: colorVar[a.color] }}
          >
            <FramedAvatar name={a.name} image={a.image} size={88} />
            <p className="text-sm leading-relaxed italic">&ldquo;{a.quote}&rdquo;</p>
            <div className="mt-auto flex flex-col items-center gap-1 border-t border-white/20 pt-4">
              <p className="font-heading text-sm">{a.name}</p>
              <p className="text-xs text-white/80">
                {a.year} · {a.qualification}
              </p>
              <p className="text-xs font-semibold text-white/90">{a.role}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
