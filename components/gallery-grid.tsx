"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { gallery } from "@/lib/data";

const filters = ["All", "Residential", "Commercial", "Industrial"];

export function GalleryGrid() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => (active === "All" ? gallery : gallery.filter((item) => item.category === active)), [active]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <Button key={filter} variant={active === filter ? "default" : "outline"} onClick={() => setActive(filter)}>
            {filter}
          </Button>
        ))}
      </div>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {visible.map((item, index) => (
          <Dialog key={`${item.title}-${index}`}>
            <DialogTrigger className="mb-6 block w-full overflow-hidden rounded-lg focus-ring" aria-label={`Open ${item.title} image`}>
              <div className="group relative break-inside-avoid overflow-hidden rounded-lg bg-zinc-100 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={700}
                  height={index % 3 === 0 ? 900 : 620}
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-left text-white opacity-0 transition group-hover:opacity-100">
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-zinc-200">{item.category}</p>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle className="sr-only">{item.title}</DialogTitle>
              <Image src={item.image} alt={item.title} width={1200} height={800} className="max-h-[80vh] w-full object-cover" />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
