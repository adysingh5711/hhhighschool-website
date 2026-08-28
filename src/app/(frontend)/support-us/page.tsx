import type { Metadata } from "next";
import Image from "next/image";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { Reveal } from "@/components/layout/reveal";
import { ProgramCard } from "@/components/support/program-card";
import { supportPrograms, supportUsIntro } from "@/content/supportPrograms";

export const metadata: Metadata = {
  title: "Support Us | Donate to H. H. High School Education",
  description:
    "Make an impact: Support Education. Restore Hope. Empower Lives. Contribute to infrastructure, scholarships, teacher development, and student programs at H. H. High School.",
  alternates: {
    canonical: "https://hhhighschool.org/support-us",
  },
  openGraph: {
    title: "Support Us — H. H. High School",
    description:
      "Donate to support rural education and student empowerment in Brambe.",
    url: "https://hhhighschool.org/support-us",
    siteName: "H. H. High School",
    type: "website",
    images: [
      {
        url: "https://hhhighschool-website.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H. H. High School, Brambe",
      },
    ],
  },
};

const cardColor = { accolades: "bg-brand-accolades", story: "bg-brand-story", gallery: "bg-brand-gallery" } as const;

export default function SupportUsPage() {
  return (
    <>
      <SubNavPills />

      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-black">
        <Image
          src={supportUsIntro.hero.image}
          alt=""
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-2xl rounded-lg bg-white/90 px-8 py-6 text-center">
          <h1 className="font-heading text-2xl sm:text-3xl">{supportUsIntro.hero.heading}</h1>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
        <Reveal>
          <p className="mb-12 text-center text-base text-muted-foreground">
            {supportUsIntro.hero.subheading}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {supportUsIntro.whyCards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.05}>
              <div className={`h-full rounded-xl p-6 text-white ${cardColor[card.color]}`}>
                <h2 className="mb-4 text-center font-heading text-base">{card.title}</h2>
                <ul className="space-y-2 text-sm text-white/90">
                  {card.points.map((point) => (
                    <li key={point}>❖ {point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="my-12 text-center text-lg font-medium">{supportUsIntro.waysToGiveIntro}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {supportPrograms.map((program, i) => (
            <Reveal key={program.slug} delay={(i % 2) * 0.05}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
