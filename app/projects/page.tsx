import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { ProjectsGrid } from "@/components/projects-grid";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore residential, commercial, and industrial steel fabrication projects completed by Wasantha Construction.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-zinc-950 pb-16 pt-36 text-white">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Projects</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Residential, commercial, and industrial steel work.</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionHeader title="Project Gallery" description="Filter recent work by category and open each project for details." />
          <div className="mt-12">
            <ProjectsGrid filterable />
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
