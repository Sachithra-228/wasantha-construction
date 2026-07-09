"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["All", "Residential", "Commercial", "Industrial"];

export function ProjectsGrid({ filterable = false }: { filterable?: boolean }) {
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <div>
      {filterable ? (
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={active === filter ? "default" : "outline"}
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
            >
              {filter}
            </Button>
          ))}
        </div>
      ) : null}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <Dialog key={project.title}>
            <div className="group overflow-hidden rounded-lg border bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-premium">
              <div className="relative h-72 overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-sm font-bold text-orange-300">{project.category} · {project.year}</p>
                  <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-zinc-200"><MapPin className="h-4 w-4" />{project.location}</p>
                </div>
              </div>
              <div className="p-5">
                <DialogTrigger asChild>
                  <Button variant="secondary" className={cn("w-full")}>View Details</Button>
                </DialogTrigger>
              </div>
            </div>
            <DialogContent>
              <div className="relative h-80">
                <Image src={project.image} alt={project.title} fill sizes="100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <DialogTitle className="text-2xl font-bold text-zinc-950">{project.title}</DialogTitle>
                <DialogDescription className="mt-3 text-base leading-7 text-zinc-600">
                  Completed in {project.year} at {project.location}. This {project.category.toLowerCase()} project was delivered with accurate fabrication, durable finishing, and professional installation.
                </DialogDescription>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
