import type { Metadata } from "next";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { Reveal } from "@/components/layout/reveal";
import { InitiativeCard } from "@/components/initiatives/initiative-card";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema } from "@/lib/structured-data";
import type { Media } from "@/payload-types";
import { getCMS } from "@/lib/payload";

export const metadata: Metadata = {
  title: "Our Initiatives | Student-Centered Programs at H. H. High School",
  description:
    "Explore our impact programs: REACH2teach, LIVE Classroom, VOLUNTEER2teach, Happy Periods, Maatri, Pehel and more. Student-centered initiatives for holistic development.",
  alternates: {
    canonical: "https://hhhighschool.org/initiatives",
  },
  openGraph: {
    title: "Our Initiatives — H. H. High School",
    description:
      "Student-centered programs in academics, health, life skills, and sustainability.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function InitiativesPage() {
  const payload = await getCMS();
  const { docs } = await payload.find({ collection: "initiatives", sort: "order", limit: 0 });

  const schemaData = articleSchema(
    "Our Initiatives",
    "Explore our student-centered programs including REACH2teach, LIVE Classroom, and initiatives for holistic development."
  );
  const initiatives = docs.map((doc) => ({
    slug: doc.slug,
    title: doc.title,
    subtitle: doc.subtitle,
    description: doc.description,
    image: (doc.image as Media).url ?? "",
  }));

  return (
    <>
      <JsonLd data={schemaData} />
      <SubNavPills />
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <Reveal>
          <h1 className="mb-10 text-center font-heading text-3xl text-brand-initiatives sm:text-4xl">
            Initiatives
          </h1>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((initiative, i) => (
            <Reveal key={initiative.slug} delay={(i % 3) * 0.05}>
              <InitiativeCard initiative={initiative} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
