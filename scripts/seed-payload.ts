import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(dirname, "..");

const mimeTypes: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

export function readImageFile(publicPath: string) {
  const absolute = path.join(repoRoot, "public", publicPath);
  const data = fs.readFileSync(absolute);
  const ext = path.extname(publicPath).toLowerCase();
  return {
    data,
    mimetype: mimeTypes[ext] ?? "application/octet-stream",
    name: path.basename(publicPath),
    size: data.length,
  };
}

// Initiatives, Accolades, Testimonials, Our Story, and Gallery (Phases 1-4)
// were seeded from this script and have since been trimmed from
// src/content/*.ts — the migration is complete, nothing left to seed.
// `readImageFile` above is kept as the reusable pattern (top-level await —
// `payload run` exits as soon as this module's top-level execution finishes,
// without waiting for any unawaited async work) for any future content area.
console.log("nothing pending to seed");
