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
import { gratitudeTestimonials } from "@/content/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <SubNavPills variant="hero" />
      <LeadershipNotes />
      <Foundations />
      <SdgSection />
      <VisionMission />
      <TestimonialRow title="Gratitude & Impressions" testimonials={gratitudeTestimonials} />
      <CelebrateEffortsVideo />
      <ScholarshipsCarousel />
      <AlumniRow />
      <ContactCards />
    </>
  );
}
