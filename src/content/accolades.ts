export type Accolade = {
  slug: string;
  title: string;
  description: string;
  image: string;
  linkLabel: "Watch Video" | "View more";
  link?: string | null;
  alt?: string | null;
};
