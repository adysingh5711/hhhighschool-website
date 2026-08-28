import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SupportProgram } from "@/content/supportPrograms";

export function ProgramCard({ program }: { program: SupportProgram }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={program.cardImage}
          alt={program.title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 bg-brand-gallery p-6 text-center text-white">
        <div>
          <h3 className="font-heading text-xl">{program.title}</h3>
          <p className="text-xs text-white/80">({program.parenthetical})</p>
        </div>
        <p className="text-sm text-white/90 italic">{program.teaser}</p>
        <Link
          href={`/support/${program.slug}`}
          className="text-sm font-semibold underline underline-offset-4 hover:text-white/80"
        >
          View More &gt;&gt;
        </Link>
        <Button
          nativeButton={false}
          variant="cta"
          className="mx-auto mt-2 gap-1.5"
          render={
            <a href={program.ctaHref} target="_blank" rel="noopener noreferrer" />
          }
        >
          {program.ctaLabel}
          <ExternalLink className="size-3.5" />
        </Button>
      </div>
    </div>
  );
}
