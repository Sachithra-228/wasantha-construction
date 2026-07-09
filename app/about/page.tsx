import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { companyValues, features, images, timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Wasantha Construction, our history, mission, vision, team, values, and fabrication standards.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-zinc-950 pb-16 pt-36 text-white">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">About Us</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">A steel fabrication partner built on reliable workmanship.</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Image src={images.fabrication} alt="Steel fabrication workshop" width={900} height={700} className="rounded-lg object-cover shadow-premium" />
          <div>
            <SectionHeader align="left" eyebrow="Company History" title="Serving Sri Lankan construction needs for more than a decade." />
            <p className="mt-6 leading-8 text-zinc-600">
              Wasantha Construction began with practical grill and gate fabrication, then expanded into railings, shutters, canopies, roof structures, and industrial steel work. Our team combines hands-on site knowledge with workshop discipline to deliver durable results.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Card><CardContent><h3 className="font-bold">Mission</h3><p className="mt-2 text-sm leading-6 text-zinc-600">Deliver strong, attractive, and affordable steel solutions with honest communication and dependable timelines.</p></CardContent></Card>
              <Card><CardContent><h3 className="font-bold">Vision</h3><p className="mt-2 text-sm leading-6 text-zinc-600">Become a trusted Sri Lankan name for residential, commercial, and industrial steel fabrication.</p></CardContent></Card>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-zinc-50">
        <div className="container-page">
          <SectionHeader eyebrow="Our Team" title="Skilled people, organized process, quality finish." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["Fabrication Lead", "Site Supervisor", "Design Coordinator"].map((role, index) => (
              <Card key={role} className="overflow-hidden shadow-lg">
                <Image src={index === 1 ? images.team : images.welding} alt={role} width={700} height={520} className="h-64 w-full object-cover" />
                <CardContent>
                  <h3 className="text-xl font-bold">{role}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">Experienced in practical steel construction work, site coordination, and client communication.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader align="left" eyebrow="Company Values" title="The standards that guide every project." />
            <div className="mt-8 grid gap-4">
              {companyValues.map((value) => (
                <div key={value} className="rounded-lg border bg-white p-5 font-semibold shadow-sm">{value}</div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader align="left" eyebrow="Timeline" title="A steady path of growth." />
            <div className="mt-8 grid gap-5">
              {timeline.map((item) => (
                <div key={item.year} className="border-l-4 border-orange-500 bg-zinc-50 p-5">
                  <p className="text-sm font-bold text-orange-600">{item.year}</p>
                  <h3 className="mt-1 font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding bg-zinc-950 text-white">
        <div className="container-page">
          <SectionHeader eyebrow="Why Choose Us" title="Built for durability, finish, and real-world use." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
                <feature.icon className="h-8 w-8 text-orange-400" />
                <h3 className="mt-4 font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
