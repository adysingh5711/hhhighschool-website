import type { CollectionConfig } from "payload";

export const Scholarships: CollectionConfig = {
  slug: "scholarships",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order"],
  },
  defaultSort: "order",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "alt", type: "textarea", admin: { description: "Optional. Falls back to the title if left blank." } },
    { name: "image", type: "upload", relationTo: "media", required: true },
    { name: "order", type: "number", required: true, admin: { position: "sidebar" } },
  ],
};
