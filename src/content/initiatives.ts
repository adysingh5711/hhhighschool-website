export type Initiative = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt?: string | null;
  images?: { url: string; alt?: string | null }[];
};
