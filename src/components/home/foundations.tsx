import Image from "next/image";
import { Reveal } from "@/components/layout/reveal";
import { foundations } from "@/content/story";

const colorVar: Record<string, string> = {
  story: "var(--brand-story)",
  initiatives: "var(--brand-initiatives)",
  accolades: "var(--brand-accolades)",
  gallery: "var(--brand-gallery)",
};

export function Foundations() {
  return (
    <section className="bg-surface-muted px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl sm:text-3xl">
            Foundations We Stand On
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="relative mb-10 aspect-[16/7] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/home/students-award-photo.jpg"
              alt="Students celebrating a Best Class Award at H. H. High School"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1152px, 100vw"
            />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foundations.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-2 rounded-xl bg-white p-6 shadow-sm">
                <span
                  className="h-1.5 w-10 rounded-full"
                  style={{ backgroundColor: colorVar[f.color] }}
                />
                <h3 className="font-heading text-base">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center font-heading text-lg text-muted-foreground">
            The SDGs We Directly Contribute To
          </p>
        </Reveal>
      </div>
    </section>
  );
}
