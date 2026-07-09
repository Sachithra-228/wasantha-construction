"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, navigation } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "border-b bg-white/95 shadow-sm backdrop-blur" : "bg-transparent",
      )}
    >
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="focus-ring rounded-md" aria-label="Wasantha Construction home">
          <Image src="/w_logo.png" alt="Wasantha Construction" width={178} height={52} priority />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors focus-ring rounded-md",
                scrolled ? "text-zinc-700 hover:text-orange-600" : "text-white hover:text-orange-300",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant={scrolled ? "secondary" : "outline"}>
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button variant={scrolled ? "ghost" : "outline"} size="icon" className="lg:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50" />
            <Dialog.Content className="fixed right-0 top-0 z-50 h-full w-[86vw] max-w-sm bg-white p-6 shadow-premium">
              <div className="flex items-center justify-between">
                <Image src="/w_logo.png" alt="Wasantha Construction" width={158} height={46} />
                <Dialog.Close asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="h-5 w-5" />
                  </Button>
                </Dialog.Close>
              </div>
              <div className="mt-10 grid gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base font-semibold text-zinc-800 hover:bg-zinc-100 focus-ring"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-8 grid gap-3">
                <Button asChild>
                  <Link href="/contact" onClick={() => setOpen(false)}>Get Free Quote</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}

