import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionConfigProvider } from "@/components/layout/motion-config-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema } from "@/lib/structured-data";
import "../globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "H. H. High School, Brambe",
    template: "%s | H. H. High School",
  },
  description:
    "Hamid Hassan High School (H. H. High School), Brambe, Jharkhand — outperforming ourselves, each day. A rural school built on child-centered, values-based, affordable education.",
  metadataBase: new URL("https://hhhighschool.org"),
  alternates: {
    canonical: "https://hhhighschool.org",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://hhhighschool.org",
    siteName: "H. H. High School",
    title: "H. H. High School, Brambe",
    description:
      "A rural school in Jharkhand built on child-centered, values-based, affordable education. Outperforming ourselves, each day.",
    images: [
      {
        url: "https://hhhighschool-website.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H. H. High School, Brambe",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@HHHS_Brambe",
    creator: "@HHHS_Brambe",
    title: "H. H. High School, Brambe",
    description:
      "A rural school in Jharkhand built on child-centered, values-based, affordable education.",
    images: ["https://hhhighschool-website.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <JsonLd data={organizationSchema()} />
      </head>
      <body
        className="flex min-h-full flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <MotionConfigProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionConfigProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
