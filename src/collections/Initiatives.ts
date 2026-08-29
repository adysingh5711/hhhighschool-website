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
    { name: "alt", type: "text", admin: { description: "Optional. Falls back to the title if left blank." } },
    {
      name: "images",
      type: "array",
      admin: {
        description: "Optional extra photos. When present, the card cycles through image + these.",
      },
      fields: [
        { name: "image", type: "upload", relationTo: "media", required: true },
        { name: "alt", type: "text" },
      ],
    },
    { name: "order", type: "number", required: true, admin: { position: "sidebar" } },
  ],
};
