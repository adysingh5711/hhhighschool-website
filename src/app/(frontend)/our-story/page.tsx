import type { Metadata } from "next";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { Reveal } from "@/components/layout/reveal";
import { StoryPortrait } from "@/components/our-story/story-portrait";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema } from "@/lib/structured-data";
import type { Media } from "@/payload-types";
import { getCMS } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Our Story | H. H. High School — From Brambe to a Movement",
  description:
    "Discover how H. H. High School grew from 80 students and six teachers into a celebrated rural education movement. Read the inspiring journey of our school in Brambe.",
  alternates: {
    canonical: "https://hhhighschool.org/our-story",
  },
  openGraph: {
    title: "Our Story — H. H. High School Journey",
    description:
      "How a village school in Brambe became a model for rural education in India.",
    url: "https://hhhighschool.org/our-story",
    siteName: "H. H. High School",
    type: "article",
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

export default async function OurStoryPage() {
  const payload = await getCMS();
  const story = await payload.findGlobal({ slug: "our-story" });
  const storyParagraphs = story.storyParagraphs.map((p) => p.paragraph);
  const storyPortraits = story.storyPortraits.map((p) => ({
    name: p.name,
    image: (p.image as Media).url ?? "",
  }));

  return (
    <>
      <JsonLd data={articleSchema("Our Story", "How H. H. High School grew from 80 students and six teachers into a celebrated rural education movement.")} />
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
