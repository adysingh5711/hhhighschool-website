import Image from "next/image";

export function StoryPortrait({ name, image }: { name: string; image: string }) {
  return (
    <figure className="overflow-hidden rounded-lg border shadow-sm">
      <div className="relative aspect-square">
        <Image src={image} alt={name} fill className="object-cover" sizes="200px" />
      </div>
      <figcaption className="bg-brand-story py-2 text-center text-xs font-medium text-white">
        {name}
      </figcaption>
    </figure>
  );
}
