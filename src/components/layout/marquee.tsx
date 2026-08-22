import type { ReactNode } from "react";

export function Marquee({
  children,
  durationSeconds = 40,
  className,
}: {
  children: ReactNode;
  durationSeconds?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div
        className="marquee-track flex w-max gap-6"
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 gap-6">{children}</div>
        <div className="flex shrink-0 gap-6" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
