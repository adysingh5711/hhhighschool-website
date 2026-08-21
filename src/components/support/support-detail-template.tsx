import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/layout/reveal";
import { supportUsIntro, type SupportProgram } from "@/content/supportPrograms";

function List({ heading, items }: { heading: string; items: string[] }) {
  const [intro, ...points] = items;
  return (
    <Reveal>
      <div>
        <h2 className="mb-3 font-heading text-lg text-brand-gallery">{heading}</h2>
        <p className="mb-2 text-sm text-muted-foreground">{intro}</p>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="text-brand-cta">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function SupportDetailTemplate({ program }: { program: SupportProgram }) {
  const { detail } = program;

  return (
    <>
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-black">
        <Image src={supportUsIntro.hero.image} alt="" fill className="object-cover opacity-70" sizes="100vw" />
        <div className="relative z-10 mx-auto max-w-2xl rounded-lg bg-white/90 px-8 py-6 text-center">
          <p className="font-heading text-sm text-muted-foreground">{supportUsIntro.hero.heading}</p>
          <h1 className="mt-2 font-heading text-2xl sm:text-3xl">{program.title}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <Reveal>
          <p className="mb-10 text-center text-lg font-medium text-foreground">{detail.tagline}</p>
        </Reveal>

        <div className="space-y-10">
          <List heading={detail.whyHeading} items={detail.why} />
          <List heading={detail.planHeading} items={detail.plan} />
          <List heading={detail.howHeading} items={detail.how} />
        </div>

        {detail.images.length > 0 && (
          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {detail.images.map((img) => (
                <div key={img} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image src={img} alt={program.title} fill className="object-cover" sizes="25vw" />
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-xl bg-surface-muted p-8 text-center">
            <p className="text-sm text-muted-foreground">{detail.closing}</p>
            <Button
              size="lg"
              nativeButton={false}
              className="gap-2 bg-brand-cta text-brand-cta-foreground hover:bg-brand-cta/90"
              render={<a href={program.ctaHref} target="_blank" rel="noopener noreferrer" />}
            >
              {program.ctaLabel}
              <ExternalLink className="size-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </>
  );
}
