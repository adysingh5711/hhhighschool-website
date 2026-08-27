import Image from "next/image";
import { paletteColor, paletteTint } from "@/lib/brand-palette";
import type { Initiative } from "@/content/initiatives";

export function InitiativeCard({ initiative, index }: { initiative: Initiative; index: number }) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-xl shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
      style={{ backgroundColor: paletteTint(index) }}
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
        <h3 className="font-heading text-lg" style={{ color: paletteColor(index) }}>
          {initiative.title}
        </h3>
        <p className="text-xs font-medium text-foreground/70">{initiative.subtitle}</p>
        <p className="text-sm text-muted-foreground">{initiative.description}</p>
      </div>
    </div>
  );
}
