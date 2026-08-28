import type { CollectionConfig } from "payload";

export const AlumniTestimonials: CollectionConfig = {
  slug: "alumni-testimonials",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "year", "order"],
  },
  defaultSort: "order",
  fields: [
    { name: "quote", type: "textarea", required: true },
    { name: "name", type: "text", required: true },
    { name: "year", type: "text", required: true },
    { name: "qualification", type: "text", required: true },
    { name: "role", type: "text", required: true },
    { name: "image", type: "upload", relationTo: "media", required: true },
    { name: "order", type: "number", required: true, admin: { position: "sidebar" } },
  ],
};
