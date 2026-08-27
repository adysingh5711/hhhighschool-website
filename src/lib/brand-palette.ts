/** The 4 recurring brand colors, cycled by index across card grids (initiatives, accolades, ...). */
export const brandPalette = [
  { var: "var(--brand-story)", hex: "#38c4c1" },
  { var: "var(--brand-initiatives)", hex: "#feca02" },
  { var: "var(--brand-accolades)", hex: "#fe7ec9" },
  { var: "var(--brand-gallery)", hex: "#488df4" },
] as const;

export function paletteColor(index: number) {
  return brandPalette[index % brandPalette.length].var;
}

/** A light tint of the color for card backgrounds (hex + alpha suffix, since CSS vars can't take an alpha suffix). */
export function paletteTint(index: number, alphaHex = "26") {
  return `${brandPalette[index % brandPalette.length].hex}${alphaHex}`;
}
