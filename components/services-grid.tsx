import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";
import { Reveal } from "@/components/motion";

export function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <Reveal key={service.title} delay={Math.min(index * 0.03, 0.18)}>
          <Card className="group h-full overflow-hidden border-zinc-200 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-premium">
            <div className="relative h-52 overflow-hidden">
              <Image
                src={service.image}
                alt={`${service.title} placeholder construction image`}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white shadow-lg">
                <service.icon className="h-6 w-6" />
              </div>
            </div>
            <CardContent>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">{service.category}</p>
              <h3 className="mt-2 text-xl font-bold text-zinc-950">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{service.description}</p>
              {detailed ? (
                <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              ) : null}
              <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-zinc-950 hover:text-orange-600">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
