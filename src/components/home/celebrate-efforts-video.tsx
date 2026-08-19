import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Reveal } from "@/components/layout/reveal";

export function CelebrateEffortsVideo() {
  return (
    <section className="bg-brand-gallery/15 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              className="size-full"
              src="https://www.youtube-nocookie.com/embed/pWva-MUIlTE"
              title="Let Us Celebrate Efforts — H. H. High School"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </AspectRatio>
        </Reveal>
      </div>
    </section>
  );
}
