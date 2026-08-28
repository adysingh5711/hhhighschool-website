"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SocialLinks } from "@/components/layout/social-links";
import { site } from "@/content/site";
import { handleLogoClick } from "@/lib/handle-logo-click";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/#contact-us" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-background/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt={site.shortName}
            width={238}
            height={64}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="uppercase tracking-wide text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 text-muted-foreground">
            <SocialLinks className="transition-colors hover:text-foreground" iconClassName="size-5" />
          </div>
          <Button
            nativeButton={false}
            variant="cta"
            render={<Link href="/support-us">Contribute</Link>}
          />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            size="sm"
            nativeButton={false}
            variant="cta"
            render={<Link href="/support-us">Contribute</Link>}
          />
          <Sheet>
            <SheetTrigger render={<Button variant="outline" size="icon" aria-label="Open menu" />}>
              <Menu />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <SheetClose
                    nativeButton={false}
                    render={
                      <Link href="/" onClick={handleLogoClick} className="hover:opacity-80 transition-opacity" />
                    }
                  >
                    {site.shortName}
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.label}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className="rounded-md px-2 py-2 text-sm font-medium uppercase tracking-wide hover:bg-muted"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex items-center gap-4 border-t px-4 py-4 text-muted-foreground">
                <SocialLinks className="transition-colors hover:text-foreground" iconClassName="size-5" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
