import type { GlobalConfig } from "payload";

export const OurStory: GlobalConfig = {
  slug: "our-story",
  fields: [
    {
      name: "storyParagraphs",
      type: "array",
      required: true,
      fields: [{ name: "paragraph", type: "textarea", required: true }],
    },
    {
      name: "storyPortraits",
      type: "array",
      required: true,
      fields: [
        { name: "name", type: "text", required: true },
        { name: "image", type: "upload", relationTo: "media", required: true },
      ],
    },
    { name: "foundationsBanner", type: "upload", relationTo: "media", required: true },
    {
      name: "foundations",
      type: "array",
      required: true,
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
    {
      name: "sdgGoals",
      type: "array",
      required: true,
      fields: [
        { name: "number", type: "number", required: true },
        { name: "name", type: "text", required: true },
        { name: "bg", type: "upload", relationTo: "media", required: true },
        { name: "icon", type: "upload", relationTo: "media", required: true },
        { name: "color", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
      ],
    },
  ],
};
