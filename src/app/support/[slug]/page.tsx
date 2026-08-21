import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubNavPills } from "@/components/layout/sub-nav-pills";
import { SupportDetailTemplate } from "@/components/support/support-detail-template";
import { supportPrograms } from "@/content/supportPrograms";

export function generateStaticParams() {
  return supportPrograms.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/support/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const program = supportPrograms.find((p) => p.slug === slug);
  return { title: program?.title ?? "Support Us" };
}

export default async function SupportDetailPage({ params }: PageProps<"/support/[slug]">) {
  const { slug } = await params;
  const program = supportPrograms.find((p) => p.slug === slug);
  if (!program) notFound();

  return (
    <>
      <SubNavPills />
      <SupportDetailTemplate program={program} />
    </>
  );
}
