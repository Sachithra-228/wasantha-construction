import { ArrowDown } from "lucide-react";
import { process } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function ProcessSection() {
  return (
    <section className="section-padding bg-zinc-950 text-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Our Process</p>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">From first call to final inspection.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {process.map((step, index) => (
            <Reveal key={step} delay={index * 0.04}>
              <div className="relative rounded-lg border border-white/10 bg-white/5 p-5 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-lg font-black">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-bold">{step}</h3>
                {index < process.length - 1 ? (
                  <ArrowDown className="mx-auto mt-4 h-5 w-5 text-orange-400 lg:absolute lg:-right-4 lg:top-12 lg:rotate-[-90deg]" />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
