import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from "@payloadcms/storage-s3";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Initiatives } from "./collections/Initiatives";
import { Accolades } from "./collections/Accolades";
import { GratitudeTestimonials } from "./collections/GratitudeTestimonials";
import { AlumniTestimonials } from "./collections/AlumniTestimonials";
import { OurStory } from "./globals/OurStory";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Initiatives, Accolades, GratitudeTestimonials, AlumniTestimonials],
  globals: [OurStory],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    // Payload's single `pool` handles both app queries and its own internal
    // schema push/migrate — there's no separate migration connection option.
    // Neon's pooled connection (PgBouncer, transaction mode) can break the
    // session-level operations schema push relies on, so use the direct
    // connection here. At this app's traffic (a handful of admins, low-volume
    // page reads), pooling's concurrency benefit isn't worth that risk.
    pool: {
      connectionString: process.env.DATABASE_URL_UNPOOLED || "",
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: {
          generateFileURL: ({ filename }) => `${process.env.R2_PUBLIC_URL}/${filename}`,
        },
      },
      bucket: process.env.S3_BUCKET || "",
      config: {
        region: process.env.S3_REGION || "auto",
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
      },
    }),
  ],
});
