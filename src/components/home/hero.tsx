"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { site } from "@/content/site";

const YOUTUBE_ID = "KVjwIPEDR34";

export function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black sm:min-h-[85vh]">
      <Image
        src="/images/home/hero.png"
        alt="Students and staff of H. H. High School, Brambe"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <h1 className="font-heading text-4xl leading-tight text-white sm:text-6xl">
          {site.tagline}
        </h1>
        <Button
          size="lg"
          className="h-auto gap-2 bg-brand-cta px-6 py-3 text-base text-brand-cta-foreground hover:bg-brand-cta/90"
          onClick={() => setOpen(true)}
        >
          <Play className="size-4 fill-current" />
          Watch Our Story!
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl overflow-hidden p-0 sm:max-w-3xl">
          <DialogTitle className="sr-only">H. H. High School — Our Story</DialogTitle>
          {open && (
            <div className="aspect-video w-full">
              <iframe
                className="size-full"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1`}
                title="H. H. High School — Our Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
