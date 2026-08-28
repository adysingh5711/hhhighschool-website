import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const r2Hostname = new URL(process.env.R2_PUBLIC_URL || "https://pub-placeholder.r2.dev").hostname;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: r2Hostname,
      },
    ],
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
