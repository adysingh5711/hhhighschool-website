import Image from "next/image";
import { CmsImage } from "@/components/ui/cms-image";
import { Reveal } from "@/components/layout/reveal";
import { paletteColor } from "@/lib/brand-palette";

type FoundationItem = { title: string; description: string };
type SdgGoal = {
  number: number;
  name: string;
  bg: string;
  bgAlt?: string | null;
  icon: string;
  color: string;
  description: string;
};

function FoundationCard({ f, index }: { f: FoundationItem; index: number }) {
  return (
    <div className="flex h-full flex-col justify-center gap-3 rounded-xl bg-white p-8 text-center">
      <h3 className="font-heading text-lg" style={{ color: paletteColor(index) }}>
        {f.title}
      </h3>
      <p className="text-sm text-foreground/80">{f.description}</p>
    </div>
  );
}

export function Foundations({
  foundations,
  foundationsBanner,
  foundationsBannerAlt,
}: {
  foundations: FoundationItem[];
  foundationsBanner: string;
  foundationsBannerAlt?: string | null;
}) {
  const bannerAlt = foundationsBannerAlt || "Students of H. H. High School";
  const [left, right] = [foundations.slice(0, 3), foundations.slice(3, 6)];

  return (
    <section className="bg-brand-initiatives px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="mb-10 text-center font-heading text-2xl text-white sm:text-3xl">
            Foundations We Stand On
          </h2>
        </Reveal>

        {/* Desktop: left cards / center image spanning both rows / right cards — matches the source layout */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-6">
          <div className="flex flex-col gap-6">
            {left.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05} className="flex-1">
                <FoundationCard f={f} index={i} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="relative min-h-105 overflow-hidden rounded-2xl">
            <CmsImage
              src={foundationsBanner}
              alt={bannerAlt}
              fill
              className="object-cover"
              sizes="33vw"
            />
          </Reveal>
          <div className="flex flex-col gap-6">
            {right.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05} className="flex-1">
                <FoundationCard f={f} index={i + 3} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile/tablet: banner above a 2-col card grid */}
        <div className="lg:hidden">
          <Reveal delay={0.05}>
            <div className="relative mb-10 aspect-16/7 w-full overflow-hidden rounded-2xl">
              <CmsImage
                src={foundationsBanner}
                alt="Students of H. H. High School"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {foundations.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <FoundationCard f={f} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SdgSection({ sdgGoals }: { sdgGoals: SdgGoal[] }) {
  return (
    <section className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-10 flex flex-col items-center justify-center gap-4">
            <Image src="/images/home/sdg.svg" alt="Sustainable Development Goals" width={160} height={40} className="h-16 w-auto" />
            <h2 className="text-center font-heading text-2xl sm:text-3xl" style={{ color: "#039CDE" }}>
              The SDGs We Directly Contribute To
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {sdgGoals.map((goal, i) => (
            <Reveal key={goal.number} delay={i * 0.05}>
              <div className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl shadow-sm">
                <CmsImage
                  src={goal.bg}
                  alt={goal.bgAlt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  priority={i < 3}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div
                  className="absolute bottom-3 left-3 size-20 overflow-hidden rounded-md shadow-md transition-all duration-300 ease-out group-hover:bottom-0 group-hover:left-0 group-hover:size-full group-hover:rounded-xl sm:size-30 lg:size-32"
                  style={{ backgroundColor: goal.color }}
                >
                  <CmsImage
                    src={goal.icon}
                    alt={`SDG ${goal.number}: ${goal.name}`}
                    fill
                    sizes="80px"
                    className="object-cover transition-opacity duration-200 group-hover:opacity-0"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="font-heading text-3xl text-white">{goal.number}</span>
                    <h3 className="font-heading text-base text-white uppercase tracking-wide">{goal.name}</h3>
                    <p className="text-sm leading-relaxed text-white/90">{goal.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
