import type { Metadata } from "next";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { Reveal } from "@/components/layout/reveal";
import { AccoladeCard } from "@/components/accolades/accolade-card";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema } from "@/lib/structured-data";
import type { Media } from "@/payload-types";
import { getCMS, getGalleryCategories } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Accolades & Recognition | Awards for H. H. High School",
  description:
    "National recognition including Digital Trailblazer awards, TEDx talks, press coverage, and impact achievements. See how H. H. High School is leading rural education innovation.",
  alternates: {
    canonical: "https://hhhighschool.org/accolades",
  },
  openGraph: {
    title: "Accolades & Recognition — H. H. High School",
    description:
      "Award-winning rural school recognized for educational excellence and innovation.",
    url: "https://hhhighschool.org/accolades",
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

export default async function AccoladesPage() {
  const payload = await getCMS();
  const [{ docs }, galleryCategories] = await Promise.all([
    payload.find({ collection: "accolades", sort: "order", limit: 0 }),
    getGalleryCategories(),
  ]);

  const schemaData = articleSchema(
    "Accolades & Recognition",
    "National recognition and awards including Digital Trailblazer awards, TEDx talks, and press coverage for educational excellence."
  );
  const accolades = docs.map((doc) => ({
    slug: doc.slug,
    title: doc.title,
    description: doc.description,
    image: (doc.image as Media).url ?? "",
    linkLabel: doc.linkLabel,
    link: doc.link,
    alt: doc.alt,
  }));

  return (
    <>
      <JsonLd data={schemaData} />
      <SubNavPills galleryCategories={galleryCategories} />
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
