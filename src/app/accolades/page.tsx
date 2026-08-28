import type { Metadata } from "next";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { Reveal } from "@/components/layout/reveal";
import { AccoladeCard } from "@/components/accolades/accolade-card";
import type { Media } from "@/payload-types";
import { getCMS } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Accolades",
  description:
    "Press coverage, TEDx talks, national and state Digital Trailblazer awards, and other recognition earned by H. H. High School, Brambe.",
};

export default async function AccoladesPage() {
  const payload = await getCMS();
  const { docs } = await payload.find({ collection: "accolades", sort: "order", limit: 0 });
  const accolades = docs.map((doc) => ({
    slug: doc.slug,
    title: doc.title,
    description: doc.description,
    image: (doc.image as Media).url ?? "",
    linkLabel: doc.linkLabel,
  }));

  return (
    <>
      <SubNavPills />
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <Reveal>
          <h1 className="mb-10 text-center font-heading text-3xl text-brand-accolades sm:text-4xl">
            Accolades
          </h1>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {accolades.map((accolade, i) => (
            <Reveal key={accolade.slug} delay={(i % 2) * 0.05}>
              <AccoladeCard accolade={accolade} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
