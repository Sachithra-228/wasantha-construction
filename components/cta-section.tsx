import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/data";

export function CtaSection() {
  return (
    <section className="bg-orange-500 py-16 text-white">
      <div className="container-page flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Need Professional Steel Construction?</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Request a Free Quote Today</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white bg-white text-zinc-950 hover:bg-zinc-100">
            <Link href="/contact">
              <MessageCircle className="h-5 w-5" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
