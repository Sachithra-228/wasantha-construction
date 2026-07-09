import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { features, images } from "@/lib/data";
import { Reveal } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";

export function AboutPreview() {
  return (
    <section className="section-padding bg-zinc-50">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg shadow-premium">
            <Image src={images.team} alt="Construction team on site" width={900} height={900} className="aspect-[4/5] w-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg bg-white p-5 shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-orange-500">Why Choose Us</p>
              <p className="mt-2 text-2xl font-black text-zinc-950">Reliable steel work for real sites.</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeader
            align="left"
            eyebrow="About Wasantha Construction"
            title="Practical fabrication, polished finishes, dependable installation."
            description="We support homeowners, builders, shops, factories, and commercial properties with steel solutions that are measured accurately, fabricated carefully, and installed with attention to safety and finish."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <Reveal key={feature.title}>
                <div className="rounded-lg border bg-white p-5 shadow-sm">
                  <feature.icon className="h-7 w-7 text-orange-500" />
                  <h3 className="mt-4 font-bold text-zinc-950">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{feature.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button asChild variant="secondary">
              <Link href="/about">
                More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
