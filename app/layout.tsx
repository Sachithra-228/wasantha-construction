import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";
import { siteUrl } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wasantha Construction | Steel Fabrication Sri Lanka",
    template: "%s | Wasantha Construction",
  },
  description:
    "Premium steel fabrication, grill work, gates, roofing, staircases, handrails, and structural steel solutions across Sri Lanka.",
  keywords: [
    "steel fabrication Sri Lanka",
    "window grills",
    "steel gates",
    "rolling shutters",
    "roof structures",
    "Wasantha Construction",
  ],
  openGraph: {
    title: "Wasantha Construction",
    description: "Building strength with steel across Sri Lanka.",
    url: siteUrl,
    siteName: "Wasantha Construction",
    images: [{ url: "/w_logo.png", width: 1200, height: 630 }],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wasantha Construction",
    description: "High-quality steel fabrication and grill construction in Sri Lanka.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

