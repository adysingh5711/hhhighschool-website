import type { Metadata } from "next";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { Reveal } from "@/components/layout/reveal";
import { GallerySection } from "@/components/gallery/gallery-section";
import { galleryCategories } from "@/content/gallery";
import type { Media } from "@/payload-types";
import { getCMS } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Gallery | Photos from H. H. High School, Brambe",
  description:
    "Photo gallery showcasing student life, celebrations, health camps, community events, and impact moments at H. H. High School in Brambe, Jharkhand.",
  alternates: {
    canonical: "https://hhhighschool.org/gallery",
  },
  openGraph: {
    title: "Gallery — H. H. High School",
    description:
      "Visual stories from our school community in Brambe, Jharkhand.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function GalleryPage() {
  const payload = await getCMS();
  const { docs } = await payload.find({
    collection: "gallery-images",
    sort: "createdAt",
    limit: 0,
  });
  const imagesByCategory = new Map<string, string[]>();
  for (const doc of docs) {
    const url = (doc.image as Media).url;
    if (!url) continue;
    const list = imagesByCategory.get(doc.category) ?? [];
    list.push(url);
    imagesByCategory.set(doc.category, list);
  }
  const categoriesWithImages = galleryCategories.map((category) => ({
    ...category,
    images: imagesByCategory.get(category.slug) ?? [],
  }));

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
          {categoriesWithImages.map((category, i) => (
            <GallerySection key={category.slug} category={category} priority={i === 0} />
          ))}
        </div>
      </div>
    </>
  );
}
