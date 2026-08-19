import { MapPin, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/layout/reveal";
import { site } from "@/content/site";

export function ContactCards() {
  return (
    <section id="contact-us" className="bg-brand-accolades px-6 py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
        <Reveal>
          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(site.address.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col items-center gap-4 rounded-xl bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-1"
          >
            <MapPin className="size-10 text-brand-initiatives" />
            <p className="text-sm font-medium">
              {site.address.line1}, {site.address.line2}
            </p>
          </a>
        </Reveal>
        <Reveal delay={0.05}>
          <a
            href={site.phoneHref}
            className="flex h-full flex-col items-center gap-4 rounded-xl bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-1"
          >
            <Phone className="size-10 text-brand-gallery" />
            <p className="text-sm font-medium">{site.phone}</p>
          </a>
        </Reveal>
        <Reveal delay={0.1}>
          <a
            href={site.emailHref}
            className="flex h-full flex-col items-center gap-4 rounded-xl bg-white p-8 text-center shadow-sm transition-transform hover:-translate-y-1"
          >
            <Mail className="size-10 text-brand-story" />
            <p className="text-sm font-medium">{site.email}</p>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
