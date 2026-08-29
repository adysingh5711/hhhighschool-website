import { cache } from "react";
import { getPayload } from "payload";
import config from "@/payload.config";

export const getCMS = () => getPayload({ config });

export const getGalleryCategories = cache(async () => {
  const payload = await getCMS();
  const { docs } = await payload.find({ collection: "gallery-categories", sort: "order", limit: 0 });
  return docs.map((doc) => ({ slug: doc.slug, title: doc.title, color: doc.color }));
});
