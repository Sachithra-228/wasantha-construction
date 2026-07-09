import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, navigation, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
        <div>
          <Image src="/w_logo.png" alt="Wasantha Construction" width={188} height={55} />
          <p className="mt-6 max-w-sm text-sm leading-7 text-zinc-300">
            High-quality steel fabrication, grill construction, gates, roofing, handrails, and structural steel solutions across Sri Lanka.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <Button key={index} size="icon" variant="outline" className="border-zinc-700 bg-zinc-900 text-white hover:bg-orange-500" aria-label="Social media link">
                <Icon className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-zinc-300 hover:text-orange-400">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Services</h3>
          <div className="mt-5 grid gap-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.title} href="/services" className="text-sm text-zinc-300 hover:text-orange-400">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm text-zinc-300">
            <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 text-orange-500" />{contact.address}</p>
            <a className="flex gap-3 hover:text-orange-400" href={`tel:${contact.phone.replaceAll(" ", "")}`}><Phone className="h-4 w-4 text-orange-500" />{contact.phone}</a>
            <a className="flex gap-3 hover:text-orange-400" href={`mailto:${contact.email}`}><Mail className="h-4 w-4 text-orange-500" />{contact.email}</a>
          </div>
          <div className="mt-6 flex h-36 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-sm text-zinc-400">
            Google Map Placeholder
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-5 text-center text-sm text-zinc-400">
        Copyright (c) {new Date().getFullYear()} Wasantha Construction. All rights reserved.
      </div>
    </footer>
  );
}

