"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Briefcase, ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ShieldCheck, ThumbsUp, Users, Headphones } from "lucide-react";

import {
  Bath,
  BedDouble,
  Sparkles,
  UtensilsCrossed,
  Wifi,
  Dumbbell,
} from "lucide-react";

export function RedLetterJobs() {
  const [open, setOpen] = useState(false);
  const logos = [
    "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
    "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
    "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
    "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
    "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
  ];
  const items = [
    {
      icon: BedDouble,
      title: "Premium Bedding",
      text: "Rest easy with high-thread-count linens.",
    },
    {
      icon: Bath,
      title: "Modern Bathrooms",
      text: "Fresh, elegant, and fully equipped.",
    },
    {
      icon: Wifi,
      title: "Fast Wi‑Fi",
      text: "Stream, work, and browse effortlessly.",
    },
    {
      icon: UtensilsCrossed,
      title: "On‑site Dining",
      text: "Tasty breakfast and room service.",
    },
    {
      icon: Dumbbell,
      title: "Fitness Studio",
      text: "Open 24/7 for your routine.",
    },
    {
      icon: Sparkles,
      title: "Daily Housekeeping",
      text: "Immaculate rooms, every day.",
    },
  ];
  const points = [
    {
      icon: ShieldCheck,
      title: "Trusted Network",
      text: "Thousands of verified reviews and secure payments.",
    },
    {
      icon: Headphones,
      title: "Personalized Service",
      text: "Real people ready to assist 24/7.",
    },
    {
      icon: Users,
      title: "Corporate Friendly",
      text: "Group bookings and flexible invoicing.",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Focused",
      text: "We’re not happy until you are.",
    },
  ];
  const steps = [
    {
      title: "Search & Compare",
      text: "Find the perfect room for your dates and budget.",
    },
    {
      title: "Customize Stay",
      text: "Add breakfast, late checkout, or a city tour.",
    },
    {
      title: "Secure Booking",
      text: "Pay safely and receive instant confirmation.",
    },
    {
      title: "Enjoy & Relax",
      text: "Arrive and let us take care of the rest.",
    },
  ];
  return (
    <div className="">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="mx-auto max-w-6xl px-4">
          {/* Top utility bar */}
          <div className="hidden md:flex items-center justify-between py-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2">
                <Phone className="size-4 text-primary" aria-hidden />
                <a href="tel:+18001234567" className="hover:text-foreground">
                  +1 (800) 123-4567
                </a>
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="size-4 text-primary" aria-hidden />
                <a
                  href="mailto:hello@example.com"
                  className="hover:text-foreground"
                >
                  hello@example.com
                </a>
              </span>
            </div>
            <div className="hidden md:block">
              <a className="hover:text-foreground" href="#signup">
                Create account
              </a>
            </div>
          </div>

          {/* Main nav */}
          <div className="flex items-center justify-between py-3">
            <a href="#" className="font-semibold text-xl tracking-tight">
              REDLETTER JOBS
            </a>
            <nav
              className={cn(
                "fixed inset-x-0 top-[56px] md:static md:top-auto bg-background md:bg-transparent border-b md:border-0",
                open ? "block" : "hidden md:block"
              )}
            >
              <ul className="mx-4 md:mx-0 md:flex md:items-center gap-6 py-3 md:py-0">
                <li>
                  <a className="hover:text-primary" href="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#deals">
                    Deals
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md border"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <section
        className="relative bg-[url('https://res.cloudinary.com/druohnmyv/image/upload/v1744811695/portland-oregon-downtown-cityscape-in-the-fall-181229873-578404d73df78c1e1f73a34e_bw5mzb.jpg')] bg-cover bg-center"
        aria-label="Hero"
      >
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28 text-center text-white">
          <p className="inline-block rounded-full bg-primary px-3 py-1 text-xs/6 text-primary-foreground shadow">
            Limited time offer
          </p>
          <h1 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">
            Rooms from <span className="line-through opacity-80">$166</span>{" "}
            <span className="text-accent-foreground bg-accent rounded px-2 py-1">
              $144
            </span>{" "}
            / night
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-sm/6 sm:text-base/7 text-white/90">
            Discover comfort and elegance in the heart of the city. Book today
            and enjoy exclusive perks.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button className="bg-accent text-accent-foreground hover:opacity-90">
              Book now
            </Button>
            <Button
              variant="outline"
              className="border-white/70 text-white hover:bg-white/10 bg-transparent"
            >
              View rooms
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 text-left">
            {[
              ["Free Wi‑Fi", "High-speed internet throughout the property"],
              ["Downtown", "Walk to landmarks and dining"],
              ["Breakfast", "Complimentary continental options"],
              ["24/7 Support", "Concierge and front desk"],
            ].map(([t, d], i) => (
              <div key={i} className="rounded-md bg-white/10 p-3 backdrop-blur">
                <div className="text-sm font-medium">{t}</div>
                <div className="text-xs text-white/85">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-secondary" aria-label="Partner logos">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            {logos.map((src, i) => (
              <img
                key={i}
                src={src || "/placeholder.svg"}
                alt={"Partner logo " + (i + 1)}
                className="h-9 w-auto"
              />
            ))}
          </div>
        </div>
      </section>
      <section id="features" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-center text-2xl font-semibold">
            Included Amenities
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-muted-foreground">
            Everything you need for a comfortable and memorable stay.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(({ icon: Icon, title, text }, i) => (
              <div
                key={i}
                className="rounded-lg border p-5 transition hover:shadow-md bg-card"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-primary/10 p-2 text-primary">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="font-medium">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="deals" className="relative py-4">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/druohnmyv/image/upload/v1744811695/portland-oregon-downtown-cityscape-in-the-fall-181229873-578404d73df78c1e1f73a34e_bw5mzb.jpg')] opacity-10" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="rounded-xl border bg-card p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold">
                  Book early and save 15%
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Lock in your dates now and enjoy our best available rates for
                  your upcoming trip.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Button className="w-full md:w-auto bg-primary text-primary-foreground hover:opacity-90">
                  See all deals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">
                Concierge-level booking made simple
              </h3>
              <p className="mt-2 text-muted-foreground">
                Our streamlined process takes you from search to stay in four
                easy steps.
              </p>

              <div className="mt-6">
                <ol className="space-y-6">
                  {steps.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="mt-0.5">
                        <span className="inline-flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-[11px] font-medium">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium">{s.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {s.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>{" "}
              </div>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {[
                  "Best rate guarantee",
                  "Flexible cancellation on select stays",
                  "Dedicated customer support",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 size-4 text-accent-foreground"
                      aria-hidden
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <form
                className="rounded-lg border bg-card p-5 md:p-6"
                id="contact"
              >
                <h4 className="text-lg font-semibold">
                  Get your free consultation
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Tell us your needs and we’ll get back to you.
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3">
                  <input
                    aria-label="Full name"
                    placeholder="Full name"
                    className="h-10 rounded-md border bg-background px-3"
                  />
                  <input
                    aria-label="Email"
                    placeholder="Email"
                    type="email"
                    className="h-10 rounded-md border bg-background px-3"
                  />
                  <input
                    aria-label="Check-in"
                    placeholder="Check-in date"
                    type="date"
                    className="h-10 rounded-md border bg-background px-3"
                  />
                  <input
                    aria-label="Check-out"
                    placeholder="Check-out date"
                    type="date"
                    className="h-10 rounded-md border bg-background px-3"
                  />
                  <textarea
                    aria-label="Message"
                    placeholder="Message"
                    className="min-h-24 rounded-md border bg-background px-3 py-2"
                  />
                </div>
                <Button className="mt-4 w-full bg-primary text-primary-foreground hover:opacity-90">
                  Send request
                </Button>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  We respect your privacy. No spam, ever.
                </p>
              </form>{" "}
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">
                Why travelers choose us
              </h3>
              <p className="mt-2 text-muted-foreground">
                Reliable, comfortable, and convenient stays—every time. Our team
                goes above and beyond to ensure your experience is seamless from
                check‑in to check‑out.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {points.map(({ icon: Icon, title, text }, i) => (
                  <div key={i} className="rounded-lg border bg-card p-4">
                    <div className="flex items-center gap-3">
                      <span className="rounded-md bg-primary/10 p-2 text-primary">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <h4 className="font-medium">{title}</h4>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
                "https://res.cloudinary.com/druohnmyv/image/upload/v1742398173/if-you-recognize-these-signs-youre-finally-finding-your-voice-and-standing-up-for-yourself-1-1024x538_rkbfst.png",
                "https://res.cloudinary.com/druohnmyv/image/upload/v1742398422/0_GettyImages-1062463482jpgThe-model-may-also-have-advantages-for-current-owners_jcfufk.webp",
                "https://res.cloudinary.com/druohnmyv/image/upload/v1742398060/College-Students-Using-Laptops-Feature-Image_nxbf74.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src || "/placeholder.svg"}
                  alt={"Why choose us photo " + (i + 1)}
                  className="h-full w-full rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-foreground text-background" aria-label="Footer">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold">Stay in the loop</h4>
              <p className="mt-2 text-sm opacity-80">
                Subscribe for exclusive offers and city guides.
              </p>
              <form className="mt-4 flex gap-2">
                <input
                  aria-label="Email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-10 w-full max-w-xs rounded-md border border-background/30 bg-background/10 px-3 text-background placeholder:text-background/70"
                />
                <button className="h-10 rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground hover:opacity-90">
                  Subscribe
                </button>
              </form>
            </div>
            <div>
              <h5 className="font-semibold">Hotel</h5>
              <ul className="mt-2 space-y-1 text-sm opacity-80">
                <li>
                  <a href="#features">Amenities</a>
                </li>
                <li>
                  <a href="#deals">Deals</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Support</h5>
              <ul className="mt-2 space-y-1 text-sm opacity-80">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Cancellation Policy</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-background/20 pt-6 text-sm opacity-70">
            © {new Date().getFullYear()} WhiteWave Hotels. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
