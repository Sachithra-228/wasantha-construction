import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Masonry gallery of steel fabrication, gates, grills, railings, shutters, canopies, and structural steel work.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-zinc-950 pb-16 pt-36 text-white">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Gallery</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Large masonry gallery with project lightbox.</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeader title="Construction Image Gallery" description="Browse fabrication, welding, installation, and finished project placeholders by category." />
          <div className="mt-12">
            <GalleryGrid />
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
