"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function VisionMission() {
  return (
    <section className="bg-brand-accolades/90 px-6 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-0 overflow-hidden rounded-2xl sm:grid-cols-3">
        <div className="flex flex-col items-center justify-center gap-3 bg-pink-50 p-8 text-center">
          <h2 className="font-heading text-lg text-brand-accolades">Vision</h2>
          <p className="text-sm text-foreground/80 italic">
            To build a model of sustainable rural education that inspires transformation beyond
            the classroom.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[320px] sm:min-h-[420px]"
        >
          <Image
            src="/images/home/vision-mission-photo.png"
            alt="Students of H. H. High School"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 33vw, 100vw"
          />
        </motion.div>
        <div className="flex flex-col items-center justify-center gap-3 bg-blue-50 p-8 text-center">
          <h2 className="font-heading text-lg text-brand-gallery">Mission</h2>
          <p className="text-sm text-foreground/80 italic">
            To bridge the rural-urban education divide by nurturing confident, compassionate, and
            competent individuals through accessible, inclusive, and high-quality
            education—empowering every child, regardless of background, to rise and thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
