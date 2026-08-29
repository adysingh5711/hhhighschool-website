import type { CollectionConfig } from "payload";

export const GalleryCategories: CollectionConfig = {
  slug: "gallery-categories",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "order"],
  },
  defaultSort: "order",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "color",
      type: "select",
      required: true,
      options: ["story", "initiatives", "accolades", "gallery", "sky", "cta"],
    },
    { name: "order", type: "number", required: true, admin: { position: "sidebar" } },
  ],
};
