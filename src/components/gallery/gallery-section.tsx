import Image from "next/image";
import { Reveal } from "@/components/layout/reveal";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import type { GalleryCategory } from "@/content/gallery";

const colorVar: Record<GalleryCategory["color"], string> = {
  story: "var(--brand-story)",
  initiatives: "var(--brand-initiatives)",
  accolades: "var(--brand-accolades)",
  gallery: "var(--brand-gallery)",
  sky: "var(--brand-sky)",
  cta: "var(--brand-cta)",
};

export function GallerySection({ category }: { category: GalleryCategory }) {
  const isSingleMosaic = category.images.length === 1;

  return (
    <section className="py-10">
      <Reveal>
        <h2
          className="mb-6 text-center font-heading text-xl sm:text-2xl"
          style={{ color: colorVar[category.color] }}
        >
          {category.title}
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        {isSingleMosaic ? (
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border-8 border-brand-initiatives/30 shadow-md">
            <Image
              src={category.images[0]}
              alt={`${category.title} press coverage`}
              width={1600}
              height={1200}
              className="h-auto w-full"
            />
          </div>
        ) : (
          <GalleryLightbox images={category.images} categoryTitle={category.title} />
        )}
      </Reveal>
    </section>
  );
}
