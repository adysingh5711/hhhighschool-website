import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Accolade } from "@/content/accolades";

export function AccoladeCard({ accolade }: { accolade: Accolade }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg sm:flex-row">
      <div className="relative h-48 w-full sm:h-auto sm:w-56 sm:shrink-0">
        <Image
          src={accolade.image}
          alt={accolade.title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 224px, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-heading text-base text-brand-accolades">{accolade.title}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{accolade.description}</p>
        {/* External media link — the source site doesn't always resolve to a
            specific stable URL per award, so this signals "more info exists"
            without claiming a specific destination we don't have. */}
        <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-brand-gallery">
          {accolade.linkLabel}
          <ExternalLink className="size-3" />
        </span>
      </div>
    </div>
  );
}
