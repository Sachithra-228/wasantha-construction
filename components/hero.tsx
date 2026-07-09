import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, images, stats, trustBadges } from "@/lib/data";
import { Counter, MotionDiv } from "@/components/motion";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950 pt-20 text-white">
      <Image
        src={images.hero}
        alt="Steel fabrication and construction work"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,9,11,0.94),rgba(9,9,11,0.62),rgba(9,9,11,0.25))]" />
      <div className="container-page relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Steel Fabrication & Grill Construction
          </div>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Building Strength with Steel
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-100 sm:text-xl">
            Wasantha Construction provides high-quality steel fabrication, grill work, gates, roofing, staircases, handrails, and structural steel solutions across Sri Lanka.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-zinc-950">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-3xl font-black text-white"><Counter value={stat.value} suffix={stat.suffix} /></p>
                <p className="mt-1 text-sm leading-5 text-zinc-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="hidden lg:block"
        >
          <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-premium backdrop-blur">
            <div className="grid gap-4">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-4 rounded-lg bg-white p-4 text-zinc-950 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-orange-500 text-white">
                    <badge.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold">{badge.label}</p>
                    <p className="text-sm text-zinc-600">Professional steel construction standards</p>
                  </div>
                </div>
              ))}
            </div>
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="mt-5 flex items-center justify-center gap-3 rounded-md bg-zinc-950 p-4 font-bold text-white hover:bg-orange-500">
              <Phone className="h-5 w-5" />
              {contact.phone}
            </a>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
