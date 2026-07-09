import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { SectionHeader } from "@/components/section-header";
import { ServicesGrid } from "@/components/services-grid";
import { images, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "Detailed steel fabrication services including gates, grills, railings, shutters, roofing, canopies, warehouses, and custom steel designs.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-zinc-950 pb-16 pt-36 text-white">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Services</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Complete steel fabrication and installation services.</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeader
            title="Every service is measured, fabricated, finished, and installed with care."
            description="Choose from residential, commercial, industrial, and custom steel solutions designed for Sri Lankan sites and weather conditions."
          />
          <div className="mt-12">
            <ServicesGrid detailed />
          </div>
        </div>
      </section>
      <section className="section-padding bg-zinc-50">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Image src={images.welding} alt="Steel welding gallery placeholder" width={900} height={700} className="rounded-lg object-cover shadow-premium" />
          <div>
            <SectionHeader align="left" eyebrow="Service Benefits" title="Fabrication that balances strength, finish, and budget." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.slice(0, 8).map((service) => (
                <div key={service.title} className="rounded-lg border bg-white p-5 shadow-sm">
                  <service.icon className="h-7 w-7 text-orange-500" />
                  <h3 className="mt-3 font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{service.benefits[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
