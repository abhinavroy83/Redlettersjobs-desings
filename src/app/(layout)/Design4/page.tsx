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
          <div className="text-xl font-bold tracking-wider">CAESARS</div>
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
        className="relative h-[60vh] bg-gradient-to-br from-red-800 to-red-950 overflow-hidden"
      >
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-xl">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              CAESARS PALACE ONLINE
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/90 mb-8 text-lg"
            >
              Experience luxury and entertainment at your fingertips
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-white text-red-900 hover:bg-gray-100"
              >
                EXPLORE NOW
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Overlapping Phone Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full hidden lg:block"
        >
          <img
            src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
            alt="App mockup"
            className="absolute right-12 top-1/2 -translate-y-1/2 h-4/5 w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </motion.section>

      {/* Deals Carousel */}
      <section className="bg-gray-50 py-8 border-b border-border">
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
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[
                { title: "ROOM PACKAGES", subtitle: "Save up to 30%" },
                { title: "THE CAESARS EDGE", subtitle: "Exclusive rewards" },
                { title: "SEE HOOK", subtitle: "Limited engagement" },
                { title: "DINING DEALS", subtitle: "Book your table" },
                { title: "SPA SPECIAL", subtitle: "Relax & rejuvenate" },
              ].map((deal, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-[280px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300">
                    <img
                      src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
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
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-light text-gray-400 mb-4">STAY</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience world-class accommodations designed for ultimate
              comfort and luxury. From premium suites to lavish penthouses.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <img
                src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                alt="Caesars Palace"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">CAESARS PALACE</h3>
                <p className="text-white/90 mb-4">
                  The iconic resort that defines Las Vegas luxury
                </p>
                <Button variant="secondary">BOOK NOW</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <img
                src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                alt="Resort Pool"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">POOL & GARDENS</h3>
                <p className="text-white/90 mb-4">
                  Seven stunning pools in a Garden of the Gods oasis
                </p>
                <Button variant="secondary">EXPLORE</Button>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "JULIUS TOWER", desc: "Classic elegance" },
              { title: "PALACE TOWER", desc: "Refined luxury" },
              { title: "OCTAVIUS TOWER", desc: "Modern opulence" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
      <section id="eat" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-light text-gray-400 mb-4">EAT</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Indulge in world-renowned cuisine from celebrity chefs and
              award-winning restaurants.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden rounded-lg shadow-xl mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
            <img
              src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
              alt="Restaurant"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="text-white p-12 max-w-xl">
                <h3 className="text-4xl font-bold mb-3">
                  GORDON RAMSAY'S HELL'S KITCHEN
                </h3>
                <p className="text-white/90 mb-6">
                  Experience the world-famous restaurant inspired by the hit TV
                  series
                </p>
                <Button size="lg" variant="secondary">
                  RESERVE TABLE
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "BACCHANAL",
                desc: "Award-winning buffet",
                tag: "BUFFET",
              },
              {
                title: "MR CHOW AT CAESARS",
                desc: "Authentic Chinese cuisine",
                tag: "ASIAN",
              },
              {
                title: "THE Bedford",
                desc: "Classic American steakhouse",
                tag: "STEAKHOUSE",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="absolute top-4 left-4 z-30 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                  {item.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <img
                  src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
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
              World-class entertainment experiences that will leave you
              breathless.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/80 to-transparent z-10" />
              <img
                src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                alt="Live Performance"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">PALMS NIGHTLIFE</h3>
                <p className="text-white/90 mb-4">
                  Experience the hottest DJs and live performances
                </p>
                <Button variant="secondary">GET TICKETS</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent z-10" />
              <img
                src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                alt="Fire Show"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">ABSINTHE SHOW</h3>
                <p className="text-white/90 mb-4">
                  A wild, uncensored adult circus experience
                </p>
                <Button variant="secondary">BOOK SHOW</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SHOP Section */}
      <section id="shop" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-light text-gray-400 mb-4">SHOP</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover luxury brands and exclusive boutiques in our world-class
              shopping destination.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden rounded-lg shadow-xl mb-6"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
            <img
              src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
              alt="Forum Shops"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="text-white p-12 max-w-xl">
                <h3 className="text-4xl font-bold mb-3">
                  THE FORUM SHOPS AT CAESARS PALACE
                </h3>
                <p className="text-white/90 mb-6">
                  Over 160 specialty stores and boutiques featuring the world's
                  finest brands
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
                desc: "170+ stores and restaurants",
              },
              {
                title: "GRAND BAZAAR SHOPS",
                desc: "Unique shopping experience",
              },
              { title: "THE LINQ PROMENADE", desc: "Open-air dining & retail" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
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
              From gaming to attractions, discover endless entertainment
              options.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10" />
              <img
                src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                alt="High Roller"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">THE HIGH ROLLER</h3>
                <p className="text-white/90 mb-4">
                  World's tallest observation wheel with breathtaking views
                </p>
                <Button variant="secondary">RIDE NOW</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent z-10" />
              <img
                src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                alt="Casino"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2">CASINO GAMING</h3>
                <p className="text-white/90 mb-4">
                  Over 1,400 slot machines and 185 table games
                </p>
                <Button variant="secondary">PLAY GAMES</Button>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "CAESARS REWARDS", desc: "Exclusive benefits program" },
              { title: "CAESARS SPORTSBOOK", desc: "Premium sports betting" },
              { title: "CAESARS REWARDS VISA", desc: "Earn points everywhere" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 border border-border"
              >
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/druohnmyv/image/upload/v1755273275/generative-ai_u2mlq0.webp"
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.desc}
                </p>
                <Button size="sm" className="w-full">
                  LEARN MORE
                </Button>
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
            <h2 className="text-3xl font-bold mb-2">CAESARS REWARDS</h2>
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
            <p>© 2025 Caesars Entertainment. All Rights Reserved.</p>
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
