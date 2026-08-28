import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hhhighschool.org";
  const pages = [
    "",
    "/our-story",
    "/initiatives",
    "/accolades",
    "/gallery",
    "/support-us",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cancellation-and-refund-policy",
    "/shipping-and-delivery-policy",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
