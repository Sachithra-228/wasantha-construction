import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AboutPreview } from "@/components/about-preview";
import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { Hero } from "@/components/hero";
import { ProcessSection } from "@/components/process-section";
import { ProjectsGrid } from "@/components/projects-grid";
import { SectionHeader } from "@/components/section-header";
import { ServicesGrid } from "@/components/services-grid";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { Button } from "@/components/ui/button";
import { contact, services } from "@/lib/data";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Steel Fabrication & Grill Construction Sri Lanka",
  description:
    "Wasantha Construction provides steel gates, window grills, railings, rolling shutters, roof structures, and industrial fabrication across Sri Lanka.",
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Wasantha Construction",
    image: `${siteUrl}/w_logo.png`,
    telephone: contact.phone,
    email: contact.email,
    address: contact.address,
    areaServed: "Sri Lanka",
    url: siteUrl,
    priceRange: "$$",
    serviceType: services.map((service) => service.title),
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero />
      <section className="section-padding bg-white" id="services">
        <div className="container-page">
          <SectionHeader
            eyebrow="Our Services"
            title="Steel solutions for homes, shops, factories, and commercial sites."
            description="Every project starts with practical advice, accurate measurements, and fabrication choices that fit the location, budget, and finish you expect."
          />
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>
      <AboutPreview />
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader align="left" eyebrow="Featured Projects" title="Recent steel construction work." />
            <Button asChild variant="secondary">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10">
            <ProjectsGrid />
          </div>
        </div>
      </section>
      <ProcessSection />
      <section className="section-padding bg-zinc-50">
        <div className="container-page">
          <SectionHeader eyebrow="Testimonials" title="Trusted by homeowners and business owners." />
          <div className="mt-10">
            <TestimonialSlider />
          </div>
        </div>
      </section>
      <FaqSection />
      <CtaSection />
    </>
  );
}

