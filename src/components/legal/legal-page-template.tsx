import { Reveal } from "@/components/layout/reveal";

export type LegalSection = { heading: string; body: string[] };

export function LegalPageTemplate({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <Reveal>
        <h1 className="font-heading text-3xl text-brand-story sm:text-4xl">{title}</h1>
        <p className="mt-2 text-xs text-muted-foreground">Last updated: {updated}</p>
        <p className="mt-6 text-sm text-muted-foreground">{intro}</p>
      </Reveal>
      <div className="mt-8 space-y-8">
        {sections.map((section, i) => (
          <Reveal key={section.heading} delay={i * 0.03}>
            <div>
              <h2 className="mb-2 font-heading text-lg">{section.heading}</h2>
              <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                {section.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
