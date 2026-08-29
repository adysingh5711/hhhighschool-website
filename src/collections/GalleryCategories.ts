import type { CollectionConfig } from "payload";

export const GalleryCategories: CollectionConfig = {
  slug: "gallery-categories",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "order"],
  },
  defaultSort: "order",
  hooks: {
    beforeChange: [
      // New categories always slot in right below "In the Media", pushing
      // everything else (starting with Health & Wellbeing) down one — so the
      // most recently added section is always on top of the customizable zone.
      async ({ operation, req, data }) => {
        if (operation !== "create") return data;
        const { docs: pinned } = await req.payload.find({
          collection: "gallery-categories",
          where: { slug: { equals: "in-the-media" } },
          limit: 1,
        });
        const insertAt = (pinned[0]?.order ?? 1) + 1;
        const { docs: toShift } = await req.payload.find({
          collection: "gallery-categories",
          where: { order: { greater_than_equal: insertAt } },
          limit: 0,
        });
        await Promise.all(
          toShift.map((doc) =>
            req.payload.update({
              collection: "gallery-categories",
              id: doc.id,
              data: { order: (doc.order ?? insertAt) + 1 },
            }),
          ),
        );
        data.order = insertAt;
        return data;
      },
    ],
  },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    {
      name: "color",
      type: "select",
      required: true,
      options: ["story", "initiatives", "accolades", "gallery", "sky", "cta"],
    },
    {
      name: "order",
      type: "number",
      admin: {
        position: "sidebar",
        description: "Auto-assigned on create; edit to reorder manually.",
      },
    },
  ],
};
