import type { CollectionConfig } from "payload";

export const Initiatives: CollectionConfig = {
  slug: "initiatives",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order"],
  },
  defaultSort: "order",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "subtitle", type: "text", required: true },
    { name: "description", type: "textarea", required: true },
    { name: "image", type: "upload", relationTo: "media", required: true },
    { name: "order", type: "number", required: true, admin: { position: "sidebar" } },
  ],
};
