import type { Metadata } from "next";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { Reveal } from "@/components/layout/reveal";
import { StoryPortrait } from "@/components/our-story/story-portrait";
import { storyParagraphs, storyPortraits } from "@/content/story";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "How Hamid Hassan High School began in the village of Brambe, Jharkhand, and grew from 80 children and six teachers into a movement.",
};

export default function OurStoryPage() {
  return (
    <>
      <SubNavPills />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-12 sm:py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Reveal>
            <h1 className="mb-8 font-heading text-3xl text-brand-gallery sm:text-4xl">
              Our Story
            </h1>
          </Reveal>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {storyParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2">
          {storyPortraits.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.04}>
              <StoryPortrait name={p.name} image={p.image} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
