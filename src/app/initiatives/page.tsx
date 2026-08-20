import type { Metadata } from "next";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { Reveal } from "@/components/layout/reveal";
import { InitiativeCard } from "@/components/initiatives/initiative-card";
import { initiatives } from "@/content/initiatives";

export const metadata: Metadata = {
  title: "Initiatives",
  description:
    "REACH2teach, LIVE Classroom, VOLUNTEER2teach, Happy Periods, Maatri, Pehel and the other programs run by H. H. High School, Brambe.",
};

export default function InitiativesPage() {
  return (
    <>
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
              <InitiativeCard initiative={initiative} />
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
