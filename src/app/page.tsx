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
import { getCMS } from "@/lib/payload";

export default async function Home() {
  const payload = await getCMS();
  const { docs } = await payload.find({
    collection: "gratitude-testimonials",
    sort: "order",
    limit: 0,
  });
  const gratitudeTestimonials = docs.map((doc) => ({
    quote: doc.quote,
    name: doc.name,
    role: doc.role,
    image: doc.image ? (doc.image as Media).url ?? undefined : undefined,
  }));

  const story = await payload.findGlobal({ slug: "our-story" });
  const foundations = story.foundations.map((f) => ({ title: f.title, description: f.description }));
  const foundationsBanner = (story.foundationsBanner as Media).url ?? "";
  const sdgGoals = story.sdgGoals.map((g) => ({
    number: g.number,
    name: g.name,
    bg: (g.bg as Media).url ?? "",
    icon: (g.icon as Media).url ?? "",
    color: g.color,
    description: g.description,
  }));

  return (
    <>
      <Hero />
      <SubNavPills variant="hero" />
      <LeadershipNotes />
      <Foundations foundations={foundations} foundationsBanner={foundationsBanner} />
      <SdgSection sdgGoals={sdgGoals} />
      <VisionMission />
      <TestimonialRow title="Gratitude & Impressions" testimonials={gratitudeTestimonials} />
      <CelebrateEffortsVideo />
      <ScholarshipsCarousel />
      <AlumniRow />
      <ContactCards />
    </>
  );
}
