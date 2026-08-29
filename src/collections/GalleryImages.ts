import type { CollectionConfig } from "payload";

export const GalleryImages: CollectionConfig = {
  slug: "gallery-images",
  admin: {
    useAsTitle: "image",
    defaultColumns: ["category", "image", "createdAt"],
  },
  defaultSort: "-createdAt",
  fields: [
    { name: "image", type: "upload", relationTo: "media", required: true },
    { name: "alt", type: "text" },
    { name: "category", type: "relationship", relationTo: "gallery-categories", required: true },
  ],
};
