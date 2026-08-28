"use client";

import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/layout/social-links";
import { site, footerQuickLinks, footerLegalLinks } from "@/content/site";
import { handleLogoClick } from "@/lib/handle-logo-click";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/logo-short.png"
              alt=""
              width={40}
              height={40}
              className="size-10 rounded bg-white object-contain p-1"
            />
            <span className="font-heading text-lg">{site.shortName}</span>
          </Link>
          <p className="text-sm text-white/70">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
          <a href={site.emailHref} className="block text-sm text-white/70 hover:text-white">
            {site.email}
          </a>
          <a href={site.phoneHref} className="block text-sm text-white/70 hover:text-white">
            {site.phone}
          </a>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-heading tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {footerQuickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-heading tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            {footerLegalLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-heading tracking-wide">Follow Us</h3>
          <div className="flex gap-3">
            <SocialLinks
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              iconClassName="size-4"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
