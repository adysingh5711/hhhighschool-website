import Image from "next/image";
import { Reveal } from "@/components/layout/reveal";

function SectionDivider({ color }: { color: string }) {
  return <span className="mx-auto h-0.5 w-16 rounded-full" style={{ backgroundColor: color }} />;
}

export function LeadershipNotes() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16 sm:py-24">
      <Reveal>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-2xl text-brand-gallery">Director&apos;s Message</h2>
          <SectionDivider color="var(--brand-gallery)" />
        </div>
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
          <Image
            src="/images/home/director-shadab.png"
            alt="Dr. Shahid Shadab Hassan, Director"
            width={280}
            height={298}
            className="mx-auto h-56 w-48 shrink-0 rounded-md object-cover sm:mx-0"
          />
          <div className="space-y-4 text-left text-sm leading-relaxed text-muted-foreground italic">
            <p>
              At H. H. High School, our mission is deeply personal. I have always believed that
              children in rural areas carry the same spark, the same dreams as a city kid. All
              they need is someone to believe in them.
            </p>
            <p>
              This school was born out of that belief. Every child who walks through our gates
              brings with them a world of potential. My greatest joy comes from helping nurture
              that potential, especially in places where education has long been a distant
              promise. We&apos;re not just teaching children, we&apos;re building futures,
              strengthening families, and lighting up communities.
            </p>
            <p>
              Thank you for being here. If our vision speaks to you, let&apos;s walk this journey
              together.
            </p>
            <p className="text-right font-heading text-xs text-foreground not-italic">
              —Dr. Shahid Shadab Hassan
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-2xl text-brand-gallery">Principal&apos;s Note</h2>
          <SectionDivider color="var(--brand-gallery)" />
        </div>
        <div className="mt-8 flex flex-col gap-8 sm:flex-row-reverse sm:items-start">
          <Image
            src="/images/home/principal-roshan-ara.png"
            alt="Mrs. Roshan Ara, Principal"
            width={280}
            height={298}
            className="mx-auto h-56 w-48 shrink-0 rounded-md object-cover sm:mx-0"
          />
          <blockquote className="space-y-4 text-left text-sm leading-relaxed text-muted-foreground italic">
            <p>
              &ldquo;At H. H. High School, we believe education is not just about books and
              exams—it&apos;s about shaping compassionate, curious, and courageous individuals who
              can uplift not only themselves but their communities. Since our humble beginnings in
              Brambe, we have strived to create a space where every child feels seen, valued, and
              inspired to dream beyond their circumstances.
            </p>
            <p>
              Our vision is rooted in service, driven by values, and nurtured with love. Here,
              learning is joyful, character is built with care, and every achievement—no matter how
              small—is celebrated.
            </p>
            <p>It is a journey of hope, purpose, and transformation.&rdquo;</p>
            <p className="text-right font-heading text-xs text-foreground not-italic">
              —Mrs. Roshan Ara
            </p>
          </blockquote>
        </div>
      </Reveal>
    </section>
  );
}
