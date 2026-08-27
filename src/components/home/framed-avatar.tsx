import Image from "next/image";

const palette = ["var(--brand-story)", "var(--brand-initiatives)", "var(--brand-accolades)", "var(--brand-gallery)"];

function initialsOf(name: string) {
  const parts = name.replace(/[()&]/g, "").trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function hashIndex(name: string, mod: number) {
  let h = 0;
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) % 997;
  return h % mod;
}

/** Circular color halo stacked behind an offset square photo — matches the source site's avatar treatment. */
export function FramedAvatar({
  name,
  image,
  size = 56,
}: {
  name: string;
  image?: string;
  size?: number;
}) {
  const color = palette[hashIndex(name, palette.length)];
  const circle = size * 0.82;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <span
        className="absolute top-0 right-0 rounded-full"
        style={{ width: circle, height: circle, backgroundColor: color }}
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 overflow-hidden rounded-lg shadow-sm ring-2 ring-white"
        style={{ width: size * 0.72, height: size * 0.72 }}
      >
        {image ? (
          <Image src={image} alt="" fill className="object-cover" sizes={`${size}px`} />
        ) : (
          <span
            className="flex size-full items-center justify-center font-heading text-white"
            style={{ backgroundColor: color, fontSize: size * 0.22 }}
          >
            {initialsOf(name)}
          </span>
        )}
      </div>
    </div>
  );
}
