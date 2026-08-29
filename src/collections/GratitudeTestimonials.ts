import type { CollectionConfig } from "payload";

export const GratitudeTestimonials: CollectionConfig = {
  slug: "gratitude-testimonials",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role", "order"],
  },
  defaultSort: "order",
  fields: [
    { name: "quote", type: "textarea", required: true },
    { name: "name", type: "text", required: true },
    { name: "role", type: "text", required: true },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "alt", type: "text" },
    { name: "order", type: "number", required: true, admin: { position: "sidebar" } },
  ],
};
