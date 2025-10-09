"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function HomePage() {
  const dealsScrollRef = useRef<HTMLDivElement>(null);

  const scrollDeals = (direction: "left" | "right") => {
    if (dealsScrollRef.current) {
      const scrollAmount = 300;
      dealsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-wider">Redletter Jobs</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#stay" className="hover:underline">
              STAY
            </a>
            <a href="#eat" className="hover:underline">
              EAT
            </a>
            <a href="#see" className="hover:underline">
              SEE
            </a>
            <a href="#shop" className="hover:underline">
              SHOP
            </a>
            <a href="#play" className="hover:underline">
              PLAY
            </a>
          </nav>
          <Button variant="outline" size="sm">
            SIGN IN
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[62vh] bg-gradient-to-br from-orange-600 via-rose-700 to-rose-900 overflow-hidden"
      >
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-xl">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight text-balance"
            >
              Redletter Jobs PALACE ONLINE
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/90 mb-8 text-lg"
            >
              Your Palace Awaits
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-white text-rose-900 hover:bg-gray-100"
              >
                EXPLORE NOW
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Phone overlap */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block"
        >
          {/* <img
            src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
            alt="App mockup"
            className="absolute right-12 top-1/2 -translate-y-1/2 h-4/5 w-auto object-contain drop-shadow-2xl"
          /> */}
        </motion.div>

        {/* Booking bar overlapping bottom of hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute left-1/2 bottom-20 md:bottom-20 -translate-x-1/2 z-20 w-[94%] md:w-auto"
        >
          <div className="mx-auto flex flex-col md:flex-row items-stretch md:items-center gap-2 bg-white/95 backdrop-blur rounded-md shadow-2xl ring-1 ring-black/10 px-3 md:px-4 py-3">
            <div className="flex items-center gap-3 px-3 py-2 rounded md:border-r border-border">
              <span className="text-xs text-muted-foreground">DESTINATION</span>
              <span className="font-medium">Redletter Jobs Palace, Las Vegas</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded md:border-r border-border">
              <span className="text-xs text-muted-foreground">CHECK IN</span>
              <span className="font-medium">Apr 20, 2025</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded md:border-r border-border">
              <span className="text-xs text-muted-foreground">CHECK OUT</span>
              <span className="font-medium">Apr 23, 2025</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 rounded">
              <span className="text-xs text-muted-foreground">GUESTS</span>
              <span className="font-medium">2 Adults</span>
            </div>
            <Button className="md:ml-2">FIND ROOMS</Button>
          </div>
        </motion.div>
      </motion.section>

      {/* Deals Carousel */}
      <section className="bg-muted py-8 border-b border-border relative -mt-8 md:-mt-14 z-20">
        <div className="container mx-auto px-4">
          <div className="relative">
            <button
              onClick={() => scrollDeals("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div
              ref={dealsScrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pr-8"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[
                {
                  title: "SEMI-ANNUAL SALE",
                  subtitle: "Save up to 30%",
                  img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
                },
                {
                  title: "THE Redletter Jobs $100",
                  subtitle: "Exclusive rewards",
                  img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
                },
                {
                  title: "THE HOOK",
                  subtitle: "Limited engagement",
                  img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
                },
                {
                  title: "DINING DEALS",
                  subtitle: "Book your table",
                  img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
                },
                {
                  title: "SPA SPECIAL",
                  subtitle: "Relax & rejuvenate",
                  img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
                },
              ].map((deal, i) => (
                <motion.div
                  key={deal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="min-w-[280px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <div className="h-40">
                    <img
                      src={
                        "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                      }
                      alt={deal.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm mb-1">{deal.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {deal.subtitle}
                    </p>
                    <Button size="sm" className="mt-3 w-full">
                      LEARN MORE
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
            <button
              onClick={() => scrollDeals("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* STAY Section */}
      <section id="stay" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-5xl font-light text-gray-400 mb-1">STAY</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A lavish retreat awaits.
            </p>
          </motion.div>

          {/* Sub-nav like screenshot */}
          <div className="flex items-center justify-center gap-4 mb-8 text-xs">
            {["HOTELS", "ROOMS", "SUITES", "AMENITIES", "POOL"].map((tab) => (
              <span
                key={tab}
                className="px-3 py-1 rounded-full bg-muted text-foreground/70 hover:bg-accent cursor-pointer"
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Left Feature */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <img
                src={
                  "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                }
                alt="Redletter Jobs Palace"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Black inset label bar */}
              <div className="absolute left-6 top-6 z-20 bg-black/70 text-white px-4 py-2 text-xs tracking-widest">
                FEATURED
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">Redletter Jobs PALACE</h3>
                <p className="text-white/90 mb-4">Iconic Las Vegas luxury</p>
                <Button variant="secondary">BOOK NOW</Button>
              </div>
            </motion.div>

            {/* Right Feature with floating white info card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <img
                src={
                  "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                }
                alt="Resort Pool"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Floating white info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute bottom-6 right-6 z-30 bg-white rounded-md shadow-2xl p-4 w-[250px] border border-border"
              >
                <p className="text-xs text-muted-foreground">From</p>
                <p className="text-2xl font-bold leading-none mb-3">
                  $199/night
                </p>
                <Button size="sm" className="w-full">
                  CHECK AVAILABILITY
                </Button>
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">POOL & GARDENS</h3>
                <p className="text-white/90 mb-4">Garden of the Gods oasis</p>
                <Button variant="secondary">EXPLORE</Button>
              </div>
            </motion.div>
          </div>

          {/* Three sub-cards with overlays */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "JULIUS TOWER",
                desc: "Classic elegance",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
              {
                title: "PALACE TOWER",
                desc: "Refined luxury",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
              {
                title: "OCTAVIUS TOWER",
                desc: "Modern opulence",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={
                    "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                  }
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 text-foreground text-[10px] px-2 py-1 tracking-widest">
                  TOWER
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/90 mb-3">{item.desc}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    VIEW
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EAT Section */}
      <section id="eat" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-light text-gray-400 mb-4">EAT</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your ultimate Las Vegas dining list.
            </p>
          </motion.div>

          {/* Inset black text slab on image, left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden rounded-lg shadow-xl mb-6"
          >
            <img
              src={
                "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
              }
              alt="Hell's Kitchen"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute left-8 top-8 z-20 bg-black px-6 py-5 ring-1 ring-white/10 max-w-md">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                GORDON RAMSAY'S HELL'S KITCHEN
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                Caesar’s most famous dining room. White knobs, rich leather,
                dramatic lighting.
              </p>
              <Button size="sm" variant="secondary">
                LEARN MORE
              </Button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "GIADA",
                desc: "Award-winning Italian",
                tag: "ITALIAN",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
              {
                title: "NOBU",
                desc: "World-famous sushi & more",
                tag: "ASIAN",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
              {
                title: "THE BEDFORD BY MARTHA",
                desc: "Classic American comfort",
                tag: "AMERICAN",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-4 left-4 z-30 bg-rose-600 text-white text-xs px-3 py-1 rounded-full">
                  {item.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <img
                  src={
                    "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                  }
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/90 mb-3">{item.desc}</p>
                  <Button size="sm" variant="secondary">
                    BOOK NOW
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEE Section */}
      <section id="see" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-light text-gray-400 mb-4">SEE</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The home of legendary entertainment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative md:col-span-2 overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/80 to-transparent z-10" />
              <img
                src={
                  "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                }
                alt="Nightlife"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">ALANIS MORISSETTE</h3>
                <p className="text-white/90 mb-4">
                  One night only at Redletter Jobs Palace
                </p>
                <Button variant="secondary">GET TICKETS</Button>
              </div>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent z-10" />
                <img
                  src={
                    "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                  }
                  alt="Absinthe"
                  className="w-full h-[238px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h4 className="font-bold mb-1">ABSINTHE</h4>
                  <p className="text-sm text-white/90 mb-3">
                    A wild adult circus
                  </p>
                  <Button size="sm" variant="secondary">
                    BOOK SHOW
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/80 to-transparent z-10" />
                <img
                  src={
                    "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                  }
                  alt="Residency"
                  className="w-full h-[238px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h4 className="font-bold mb-1">RESIDENCY SERIES</h4>
                  <p className="text-sm text-white/90 mb-3">
                    Limited runs all season
                  </p>
                  <Button size="sm" variant="secondary">
                    LEARN MORE
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP Section */}
      <section id="shop" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-light text-gray-400 mb-4">SHOP</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From luxury brands to boutiques—everything under one roof.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden rounded-lg shadow-xl mb-6"
          >
            <div className="absolute left-6 top-6 z-30 bg-white/90 text-foreground text-[10px] px-2 py-1 tracking-widest">
              THE FORUM SHOPS
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
            <img
              src={
                "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
              }
              alt="Forum Shops"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="text-white p-12 max-w-xl">
                <h3 className="text-4xl font-bold mb-3">
                  THE FORUM SHOPS AT Redletter Jobs PALACE
                </h3>
                <p className="text-white/90 mb-6">
                  160+ specialty stores and boutiques featuring the world's
                  finest brands.
                </p>
                <Button size="lg" variant="secondary">
                  START SHOPPING
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "MIRACLE MILE SHOPS",
                desc: "170+ stores & dining",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
              {
                title: "GRAND BAZAAR SHOPS",
                desc: "Unique open-air market",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
              {
                title: "THE LINQ PROMENADE",
                desc: "Open-air dining & retail",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={item.img || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/90 mb-3">{item.desc}</p>
                  <Button size="sm" variant="secondary">
                    EXPLORE
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAY Section */}
      <section id="play" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-light text-gray-400 mb-4">PLAY</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Attractions and gaming for every mood.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Left: High Roller */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10" />
              <img
                src={
                  "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                }
                alt="High Roller"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  HIGH ROLLER OBSERVATION WHEEL
                </h3>
                <p className="text-white/90 mb-4">
                  Breathtaking views from 550 feet
                </p>
                <Button variant="secondary">RIDE NOW</Button>
              </div>
            </motion.div>

            {/* Right column with overlap card */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent z-10" />
                <img
                  src={
                    "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                  }
                  alt="Casino"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                  <h3 className="text-3xl font-bold mb-2">CASINO GAMING</h3>
                  <p className="text-white/90 mb-4">Slots, tables, and more</p>
                  <Button variant="secondary">PLAY GAMES</Button>
                </div>
              </motion.div>

              {/* Floating overlap zipline card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 right-6 bg-white rounded-md shadow-2xl p-4 w-[260px] border border-border"
              >
                <div className="h-28 w-full overflow-hidden rounded">
                  <img
                    src={
                      "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                    }
                    alt="Zipline"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mt-3 font-bold">FLY LINQ ZIPLINE</h4>
                <p className="text-xs text-muted-foreground mb-3">
                  Soar over The LINQ Promenade.
                </p>
                <Button size="sm" className="w-full">
                  LEARN MORE
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Rewards strip like screenshot: 3 white tiles */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                title: "Redletter Jobs REWARDS",
                desc: "Experience the best loyalty program.",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
              {
                title: "CREDIT CARDS",
                desc: "Earn more on every purchase.",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
              {
                title: "Redletter Jobs REWARDS AIR",
                desc: "Fly in style with exclusive perks.",
                img: "https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="bg-white rounded-lg shadow-md border border-border p-6"
              >
                <div className="h-28 w-full overflow-hidden rounded bg-muted">
                  <img
                    src={card.img || "/placeholder.svg"}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="mt-4 font-bold">{card.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {card.desc}
                </p>
                <Button size="sm">LEARN MORE</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rewards Strip */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-2">Redletter Jobs REWARDS</h2>
            <p className="text-muted-foreground">
              Join today and start earning exclusive benefits
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Gold Tier", value: "5,000", unit: "Tier Credits" },
              { title: "Platinum", value: "15,000", unit: "Tier Credits" },
              { title: "Diamond", value: "25,000", unit: "Tier Credits" },
              { title: "Seven Stars", value: "100,000", unit: "Tier Credits" },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {tier.title[0]}
                  </span>
                </div>
                <h3 className="font-bold mb-2">{tier.title}</h3>
                <p className="text-2xl font-bold text-primary mb-1">
                  {tier.value}
                </p>
                <p className="text-xs text-muted-foreground">{tier.unit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Footer */}
      <footer className="bg-white py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center mb-8">
            {[
              "Partner 1",
              "Partner 2",
              "Partner 3",
              "Partner 4",
              "Partner 5",
              "Partner 6",
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center"
              >
                <span className="text-xs text-muted-foreground">{partner}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>© 2025 Redletter Jobs Entertainment. All Rights Reserved.</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
