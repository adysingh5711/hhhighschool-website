"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenText, Lightbulb, Award, Images, type LucideIcon } from "lucide-react";
import { storyClusterNav } from "@/content/site";

const icons: LucideIcon[] = [BookOpenText, Lightbulb, Award, Images];

export function SubNavPills({
  variant = "compact",
  galleryCategories = [],
}: {
  variant?: "compact" | "hero";
  galleryCategories?: { slug: string; title: string }[];
}) {
  const pathname = usePathname();
  const hero = variant === "hero";

  return (
    <nav
      aria-label="Story, Initiatives, Accolades, Gallery"
      className="grid grid-cols-2 sm:grid-cols-4"
    >
      {storyClusterNav.map((item, i) => {
        const Icon = icons[i];
        const active = pathname === item.href;
        const isGallery = item.href === "/gallery";

        return (
          <div key={item.href} className={isGallery ? "group relative" : "relative"}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              style={{ backgroundColor: item.color }}
              className={`relative flex w-full flex-col items-center justify-center gap-2 text-center font-heading text-white tracking-wide uppercase transition-[filter] hover:brightness-110 ${
                hero ? "px-4 py-8 text-base sm:text-xl" : "px-4 py-5 text-sm sm:text-lg"
              }`}
            >
              {hero && <Icon className="size-8 sm:size-10" strokeWidth={1.5} />}
              {item.label}
              {active && (
                <span className="absolute inset-x-6 bottom-1.5 h-0.5 rounded-full bg-white" />
              )}
            </Link>

            {isGallery && (
              <div className="invisible absolute inset-x-0 top-full z-30 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="mx-2 mt-1 overflow-hidden rounded-lg border bg-white py-1 shadow-lg sm:mx-0">
                  {galleryCategories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/gallery#${cat.slug}`}
                        className="block px-4 py-2 text-left text-xs font-medium text-foreground/80 uppercase tracking-wide hover:bg-muted hover:text-brand-gallery"
                      >
                        {cat.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
