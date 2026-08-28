import type { CollectionConfig } from "payload";

export const Accolades: CollectionConfig = {
  slug: "accolades",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "order"],
  },
  defaultSort: "order",
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "description", type: "textarea", required: true },
    { name: "image", type: "upload", relationTo: "media", required: true },
    {
      name: "linkLabel",
      type: "select",
      required: true,
      options: ["Watch Video", "View more"],
    },
    { name: "order", type: "number", required: true, admin: { position: "sidebar" } },
  ],
};
