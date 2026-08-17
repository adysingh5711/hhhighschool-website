// The live site renders each scholarship announcement as a single designed
// poster image (not overlaid HTML text), so each slide here is image-only.
// Slide 1 is confirmed as the "Bandana Bose Gold Medal Award"; the rest are
// the same announcement-graphic format, sequenced as they appear on the source.
export const scholarshipSlides = Array.from({ length: 8 }, (_, i) => ({
  image: `/images/home/scholarship-${String(i + 1).padStart(2, "0")}.png`,
  alt: i === 0 ? "Bandana Bose Gold Medal Award announcement" : `Scholarship announcement ${i + 1}`,
}));
