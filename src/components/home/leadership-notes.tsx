import Image from "next/image";
import { Reveal } from "@/components/layout/reveal";

export function LeadershipNotes() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2">
      <Reveal>
        <div className="flex flex-col gap-6">
          <Image
            src="/images/home/director-shadab.png"
            alt="Dr. Shahid Shadab Hassan, Director"
            width={280}
            height={298}
            className="size-28 rounded-full border-4 border-brand-story object-cover"
          />
          <h2 className="font-heading text-2xl text-brand-story">Director&apos;s Message</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
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
          </div>
          <p className="font-heading text-sm text-foreground">—Dr. Shahid Shadab Hassan</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-col gap-6">
          <Image
            src="/images/home/principal-roshan-ara.png"
            alt="Mrs. Roshan Ara, Principal"
            width={280}
            height={188}
            className="size-28 rounded-full border-4 border-brand-accolades object-cover"
          />
          <h2 className="font-heading text-2xl text-brand-accolades">Principal&apos;s Note</h2>
          <blockquote className="space-y-4 text-sm leading-relaxed text-muted-foreground italic">
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
          </blockquote>
          <p className="font-heading text-sm text-foreground not-italic">—Mrs. Roshan Ara</p>
        </div>
      </Reveal>
    </section>
  );
}
