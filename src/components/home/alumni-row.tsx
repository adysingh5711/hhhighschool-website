import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { Marquee } from "@/components/layout/marquee";
import { paletteColor } from "@/lib/brand-palette";

type AlumniTestimonial = {
  quote: string;
  name: string;
  year: string;
  qualification: string;
  role: string;
  image: string;
};

export function AlumniRow({ alumniTestimonials }: { alumniTestimonials: AlumniTestimonial[] }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl sm:text-3xl">Alumni Speak</h2>
        </Reveal>
      </div>
      <Marquee>
        {alumniTestimonials.map((a, i) => (
          <div
            key={a.name}
            className="flex h-full w-108 shrink-0 flex-col items-center gap-4 overflow-hidden p-4 text-center text-white"
            style={{ backgroundColor: paletteColor(i) }}
          >
            <div className="flex flex-col items-center gap-2 pb-2">
              <Quote className="size-16 fill-white" strokeWidth={0} aria-hidden />
              <blockquote className="text-sm leading-relaxed italic">&ldquo;{a.quote}&rdquo;</blockquote>
            </div>
            <div className="mt-auto flex flex-col items-center gap-2.5">
              <div className="relative size-40 overflow-hidden rounded-full border-2 border-white bg-white">
                <Image src={a.image} alt="" fill className="object-cover" sizes="160px" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-heading text-xl uppercase">{a.name}</p>
                <p className="text-xs">{a.year}</p>
                <p className="text-xs">{a.qualification}</p>
                <p className="text-xs">{a.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
