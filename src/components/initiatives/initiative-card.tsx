import Image from "next/image";
import type { Initiative } from "@/content/initiatives";

const colorVar: Record<Initiative["color"], string> = {
  story: "var(--brand-story)",
  initiatives: "var(--brand-initiatives)",
  accolades: "var(--brand-accolades)",
  gallery: "var(--brand-gallery)",
  sky: "var(--brand-sky)",
  cta: "var(--brand-cta)",
};

export function InitiativeCard({ initiative }: { initiative: Initiative }) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
      style={{ backgroundColor: `${colorVar[initiative.color]}14` }}
    >
      <div className="relative aspect-square w-full">
        <Image
          src={initiative.image}
          alt={initiative.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-lg" style={{ color: colorVar[initiative.color] }}>
          {initiative.title}
        </h3>
        <p className="text-xs font-medium text-foreground/70">{initiative.subtitle}</p>
        <p className="text-sm text-muted-foreground">{initiative.description}</p>
      </div>
    </div>
  );
}
