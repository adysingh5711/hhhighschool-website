const palette = [
  "var(--brand-story)",
  "var(--brand-initiatives)",
  "var(--brand-accolades)",
  "var(--brand-gallery)",
];

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

export function InitialsAvatar({ name, className }: { name: string; className?: string }) {
  const color = palette[hashIndex(name, palette.length)];
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full font-heading text-white ${className ?? "size-12 text-sm"}`}
      style={{ backgroundColor: color }}
      aria-hidden
    >
      {initialsOf(name)}
    </span>
  );
}
