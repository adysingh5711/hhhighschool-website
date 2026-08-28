export type GalleryCategory = {
  slug: string;
  title: string;
  color: "story" | "initiatives" | "accolades" | "gallery" | "sky" | "cta";
  images: string[];
};

export const galleryCategories: Omit<GalleryCategory, "images">[] = [
  { slug: "in-the-media", title: "In the Media", color: "story" },
  { slug: "health-wellbeing", title: "Health & Wellbeing", color: "accolades" },
  { slug: "visit-guest-interactions", title: "Visit & Guest Interactions", color: "gallery" },
  { slug: "events-celebrations", title: "Events & Celebrations", color: "initiatives" },
  { slug: "student-creativity", title: "Student Creativity", color: "sky" },
  { slug: "community-engagement", title: "Community Engagement", color: "cta" },
  { slug: "powered-by-people", title: "Powered by People", color: "story" },
];
