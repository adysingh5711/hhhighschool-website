export type GalleryImage = { url: string; alt?: string | null };

export type GalleryCategory = {
  slug: string;
  title: string;
  color: "story" | "initiatives" | "accolades" | "gallery" | "sky" | "cta";
  images: GalleryImage[];
};
