import type { CollectionConfig } from "payload";

const categorySlugs = [
  "in-the-media",
  "health-wellbeing",
  "visit-guest-interactions",
  "events-celebrations",
  "student-creativity",
  "community-engagement",
  "powered-by-people",
] as const;

export const GalleryImages: CollectionConfig = {
  slug: "gallery-images",
  admin: {
    useAsTitle: "category",
    defaultColumns: ["category", "image", "createdAt"],
  },
  defaultSort: "-createdAt",
  fields: [
    { name: "image", type: "upload", relationTo: "media", required: true },
    { name: "category", type: "select", required: true, options: [...categorySlugs] },
  ],
};
