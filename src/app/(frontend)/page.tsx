import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { LeadershipNotes } from "@/components/home/leadership-notes";
import { Foundations, SdgSection } from "@/components/home/foundations";
import { VisionMission } from "@/components/home/vision-mission";
import { TestimonialRow } from "@/components/home/testimonial-row";
import { CelebrateEffortsVideo } from "@/components/home/celebrate-efforts-video";
import { ScholarshipsCarousel } from "@/components/home/scholarships-carousel";
import { AlumniRow } from "@/components/home/alumni-row";
import { ContactCards } from "@/components/home/contact-cards";
import type { Media } from "@/payload-types";
import { getCMS, getGalleryCategories } from "@/lib/payload";

export const metadata: Metadata = {
  title: "H. H. High School, Brambe | Rural Education in Jharkhand",
  description:
    "Hamid Hassan High School combines child-centered education with strong academics, life skills, and values. Award-winning school serving 1000+ students in Brambe, Jharkhand.",
  alternates: {
    canonical: "https://hhhighschool.org",
  },
  openGraph: {
    title: "H. H. High School, Brambe",
    description:
      "Award-winning rural school in Jharkhand committed to child-centered, values-based education.",
    url: "https://hhhighschool.org",
    siteName: "H. H. High School",
    type: "website",
    images: [
      {
        url: "https://hhhighschool-website.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H. H. High School, Brambe",
      },
    ],
  },
};

export default async function Home() {
  const payload = await getCMS();
  const [{ docs: gratitudeDocs }, story, { docs: alumniDocs }, { docs: scholarshipDocs }, galleryCategories] =
    await Promise.all([
      payload.find({ collection: "gratitude-testimonials", sort: "order", limit: 0 }),
      payload.findGlobal({ slug: "our-story" }),
      payload.find({ collection: "alumni-testimonials", sort: "order", limit: 0 }),
      payload.find({ collection: "scholarships", sort: "order", limit: 0 }),
      getGalleryCategories(),
    ]);

  const scholarshipSlides = scholarshipDocs.map((doc) => ({
    slug: doc.slug,
    title: doc.title,
    image: (doc.image as Media).url ?? "",
    alt: doc.alt,
  }));

  const gratitudeTestimonials = gratitudeDocs.map((doc) => ({
    quote: doc.quote,
    name: doc.name,
    role: doc.role,
    image: doc.image ? (doc.image as Media).url ?? undefined : undefined,
    alt: doc.alt,
  }));

  const alumniTestimonials = alumniDocs.map((doc) => ({
    quote: doc.quote,
    name: doc.name,
    year: doc.year,
    qualification: doc.qualification,
    role: doc.role,
    image: (doc.image as Media).url ?? "",
    alt: doc.alt,
  }));

  const foundations = story.foundations.map((f) => ({ title: f.title, description: f.description }));
  const foundationsBanner = (story.foundationsBanner as Media).url ?? "";
  const foundationsBannerAlt = story.foundationsBannerAlt;
  const sdgGoals = story.sdgGoals.map((g) => ({
    number: g.number,
    name: g.name,
    bg: (g.bg as Media).url ?? "",
    bgAlt: g.bgAlt,
    icon: (g.icon as Media).url ?? "",
    color: g.color,
    description: g.description,
  }));

  return (
    <>
      <Hero />
      <SubNavPills variant="hero" galleryCategories={galleryCategories} />
      <LeadershipNotes />
      <Foundations
        foundations={foundations}
        foundationsBanner={foundationsBanner}
        foundationsBannerAlt={foundationsBannerAlt}
      />
      <SdgSection sdgGoals={sdgGoals} />
      <VisionMission />
      <TestimonialRow title="Gratitude & Impressions" testimonials={gratitudeTestimonials} />
      <CelebrateEffortsVideo />
      <ScholarshipsCarousel scholarshipSlides={scholarshipSlides} />
      <AlumniRow alumniTestimonials={alumniTestimonials} />
      <ContactCards />
    </>
  );
}
