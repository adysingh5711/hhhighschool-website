"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpenText, Lightbulb, Award, Images, type LucideIcon } from "lucide-react";
import { storyClusterNav } from "@/content/site";

const icons: LucideIcon[] = [BookOpenText, Lightbulb, Award, Images];

export function SubNavPills({ variant = "compact" }: { variant?: "compact" | "hero" }) {
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
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            style={{ backgroundColor: item.color }}
            className={`relative flex flex-col items-center justify-center gap-2 text-center font-heading text-white tracking-wide uppercase transition-[filter] hover:brightness-110 ${
              hero ? "px-4 py-8 text-base sm:text-xl" : "px-4 py-5 text-sm sm:text-lg"
            }`}
          >
            {hero && <Icon className="size-8 sm:size-10" strokeWidth={1.5} />}
            {item.label}
            {active && (
              <span className="absolute inset-x-6 bottom-1.5 h-0.5 rounded-full bg-white" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
