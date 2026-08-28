"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { RotateCw } from "lucide-react";

const MAX_AUTO_RETRIES = 2;

// ponytail: cache-busting query param forces a fresh /_next/image optimize instead of
// re-requesting the same failed URL, which the browser would otherwise short-circuit.
export function RetryImage({ src, alt, className, ...props }: ImageProps) {
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <button
        type="button"
        onClick={() => {
          setFailed(false);
          setAttempt((a) => a + 1);
        }}
        className={`flex items-center justify-center gap-1.5 bg-muted text-xs text-muted-foreground ${className ?? ""}`}
      >
        <RotateCw className="size-3.5" aria-hidden />
        Retry
      </button>
    );
  }

  const bustedSrc =
    attempt === 0 || typeof src !== "string" ? src : `${src}${src.includes("?") ? "&" : "?"}retry=${attempt}`;

  return (
    <Image
      key={attempt}
      src={bustedSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (attempt < MAX_AUTO_RETRIES) {
          setAttempt((a) => a + 1);
        } else {
          setFailed(true);
        }
      }}
      {...props}
    />
  );
}
