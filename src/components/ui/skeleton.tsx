import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  // ponytail: bg-foreground/10 instead of the theme's --muted (near-white here) so the
  // pulse stays visible over white cards, dark frames, and colored tints alike.
  return <div data-slot="skeleton" className={cn("animate-pulse rounded-md bg-foreground/10", className)} {...props} />;
}

export { Skeleton };
