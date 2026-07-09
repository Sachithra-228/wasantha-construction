import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Wasantha Construction for a free quote on steel fabrication, gates, grills, railings, shutters, and structural steel work.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-zinc-950 pb-16 pt-36 text-white">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">Contact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Request your free steel fabrication quote.</h1>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="shadow-premium">
            <CardContent className="p-6 sm:p-8">
              <SectionHeader align="left" eyebrow="Send Message" title="Tell us about your project." description="Share your site location, service type, sizes, photos, drawings, or expected deadline." />
              <div className="mt-8">
                <ContactForm />
              </div>
            </CardContent>
          </Card>
          <div className="grid gap-5">
            <Card><CardContent className="flex gap-4"><MapPin className="h-6 w-6 text-orange-500" /><div><h3 className="font-bold">Office Address</h3><p className="mt-1 text-sm text-zinc-600">{contact.address}</p></div></CardContent></Card>
            <Card><CardContent className="flex gap-4"><Phone className="h-6 w-6 text-orange-500" /><div><h3 className="font-bold">Phone</h3><a className="mt-1 block text-sm text-zinc-600 hover:text-orange-600" href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a></div></CardContent></Card>
            <Card><CardContent className="flex gap-4"><Mail className="h-6 w-6 text-orange-500" /><div><h3 className="font-bold">Email</h3><a className="mt-1 block text-sm text-zinc-600 hover:text-orange-600" href={`mailto:${contact.email}`}>{contact.email}</a></div></CardContent></Card>
            <Card><CardContent className="flex gap-4"><Clock className="h-6 w-6 text-orange-500" /><div><h3 className="font-bold">Working Hours</h3><p className="mt-1 text-sm text-zinc-600">{contact.hours}</p></div></CardContent></Card>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg" variant="secondary"><a href={contact.whatsapp}><MessageCircle className="h-5 w-5" />WhatsApp</a></Button>
              <Button asChild size="lg"><a href={`tel:${contact.phone.replaceAll(" ", "")}`}><Phone className="h-5 w-5" />Call Button</a></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-zinc-50 pb-20">
        <div className="container-page">
          <div className="flex h-[420px] items-center justify-center rounded-lg border bg-white text-lg font-semibold text-zinc-500 shadow-lg">
            Google Map Placeholder
          </div>
        </div>
      </section>
    </>
  );
}
