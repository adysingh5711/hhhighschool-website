"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { RotateCw } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const MAX_AUTO_RETRIES = 2;

type Status = "loading" | "loaded" | "failed";

// ponytail: cache-busting query param forces a fresh /_next/image optimize instead of
// re-requesting the same failed URL, which the browser would otherwise short-circuit.
export function CmsImage({
  src,
  alt,
  className,
  fill,
  showSkeleton = true,
  ...props
}: ImageProps & { showSkeleton?: boolean }) {
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<Status>("loading");

  if (status === "failed") {
    return (
      <button
        type="button"
        onClick={() => {
          setStatus("loading");
          setAttempt((a) => a + 1);
        }}
        className={cn(
          "flex items-center justify-center gap-1.5 bg-muted text-xs text-muted-foreground",
          fill && "absolute inset-0 size-full",
          className,
        )}
      >
        <RotateCw className="size-3.5" aria-hidden />
        Retry
      </button>
    );
  }

  const bustedSrc =
    attempt === 0 || typeof src !== "string" ? src : `${src}${src.includes("?") ? "&" : "?"}retry=${attempt}`;

  const image = (
    <Image
      key={attempt}
      src={bustedSrc}
      alt={alt}
      fill={fill}
      className={className}
      style={{ opacity: status === "loading" ? 0 : 1 }}
      onLoad={() => setStatus("loaded")}
      onError={() => {
        if (attempt < MAX_AUTO_RETRIES) {
          setAttempt((a) => a + 1);
        } else {
          setStatus("failed");
        }
      }}
      {...props}
    />
  );

  const skeleton = status === "loading" && showSkeleton && <Skeleton className="absolute inset-0 rounded-none" />;

  // fill images position against whatever ancestor the caller already made `relative` -
  // no wrapper needed. Non-fill images need one, since the caller's container usually isn't.
  if (fill) {
    return (
      <>
        {skeleton}
        {image}
      </>
    );
  }

  return (
    <div className="relative">
      {skeleton}
      {image}
    </div>
  );
}
