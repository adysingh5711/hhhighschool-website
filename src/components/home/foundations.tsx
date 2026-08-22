import Image from "next/image";
import { Reveal } from "@/components/layout/reveal";
import { foundations, foundationsBanner, sdgGoals } from "@/content/story";

const colorVar: Record<string, string> = {
  story: "var(--brand-story)",
  initiatives: "var(--brand-initiatives)",
  accolades: "var(--brand-accolades)",
  gallery: "var(--brand-gallery)",
};

export function Foundations() {
  return (
    <section className="bg-brand-initiatives px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl text-white sm:text-3xl">
            Foundations We Stand On
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="relative mb-10 aspect-[16/7] w-full overflow-hidden rounded-2xl">
            <Image
              src={foundationsBanner}
              alt="Students celebrating a Best Class Award at H. H. High School"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1152px, 100vw"
            />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {foundations.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-3 rounded-xl bg-white p-8 text-center">
                <h3 className="font-heading text-lg" style={{ color: colorVar[f.color] }}>
                  {f.title}
                </h3>
                <p className="text-sm text-foreground/80 italic">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SdgSection() {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl text-brand-gallery sm:text-3xl">
            The SDGs We Directly Contribute To
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {sdgGoals.map((goal, i) => (
            <Reveal key={goal.number} delay={i * 0.05}>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={goal.bg}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-3 left-3 size-16 overflow-hidden rounded-md shadow-md sm:size-20">
                  <Image
                    src={goal.icon}
                    alt={`SDG ${goal.number}: ${goal.name}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
