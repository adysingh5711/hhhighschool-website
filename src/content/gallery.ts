export type GalleryCategory = {
  slug: string;
  title: string;
  color: "story" | "initiatives" | "accolades" | "gallery" | "sky" | "cta";
  images: string[];
};

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "in-the-media",
    title: "In the Media",
    color: "story",
    images: ["/images/gallery/in-the-media/mosaic.png"],
  },
  {
    slug: "health-wellbeing",
    title: "Health & Wellbeing",
    color: "accolades",
    images: Array.from({ length: 12 }, (_, i) => `/images/gallery/health-wellbeing/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    slug: "visit-guest-interactions",
    title: "Visit & Guest Interactions",
    color: "gallery",
    images: Array.from({ length: 2 }, (_, i) => `/images/gallery/visit-guest/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    slug: "events-celebrations",
    title: "Events & Celebrations",
    color: "initiatives",
    images: Array.from({ length: 10 }, (_, i) => `/images/gallery/events-celebrations/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    slug: "student-creativity",
    title: "Student Creativity",
    color: "sky",
    images: Array.from({ length: 6 }, (_, i) => `/images/gallery/student-creativity/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    slug: "community-engagement",
    title: "Community Engagement",
    color: "cta",
    images: Array.from({ length: 6 }, (_, i) => `/images/gallery/community-engagement/${String(i + 1).padStart(2, "0")}.jpg`),
  },
  {
    slug: "powered-by-people",
    title: "Powered by People",
    color: "story",
    images: Array.from({ length: 6 }, (_, i) => `/images/gallery/powered-by-people/${String(i + 1).padStart(2, "0")}.jpg`),
  },
];
