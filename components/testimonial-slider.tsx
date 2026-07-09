"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/data";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  return (
    <div className="mx-auto max-w-4xl rounded-lg border bg-white p-6 shadow-premium sm:p-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <Image src={testimonial.image} alt={testimonial.name} width={128} height={128} className="h-28 w-28 rounded-md object-cover" />
        <div className="flex-1">
          <div className="flex gap-1 text-orange-500">
            {Array.from({ length: testimonial.rating }).map((_, star) => (
              <Star key={star} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-4 text-lg leading-8 text-zinc-700">“{testimonial.review}”</p>
          <p className="mt-5 font-bold text-zinc-950">{testimonial.name}</p>
          <p className="text-sm text-zinc-500">{testimonial.location}</p>
        </div>
      </div>
      <div className="mt-8 flex justify-end gap-3">
        <Button variant="outline" size="icon" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button variant="secondary" size="icon" onClick={() => setIndex((index + 1) % testimonials.length)} aria-label="Next testimonial">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
