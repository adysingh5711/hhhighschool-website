import type { Metadata } from "next";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { Reveal } from "@/components/layout/reveal";
import { GallerySection } from "@/components/gallery/gallery-section";
import { galleryCategories } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from H. H. High School, Brambe — press coverage, health & wellbeing camps, guest visits, celebrations, student creativity, and community life.",
};

export default function GalleryPage() {
  return (
    <>
      <SubNavPills />
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <Reveal>
          <h1 className="mb-4 text-center font-heading text-3xl text-brand-gallery sm:text-4xl">
            Gallery
          </h1>
        </Reveal>
        <div className="divide-y">
          {galleryCategories.map((category) => (
            <GallerySection key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}
