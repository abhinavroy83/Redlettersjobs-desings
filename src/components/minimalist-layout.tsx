"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
export function MinimalistLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <header className="relative">
        <div
          className="h-[520px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black/45"></div>
          <nav className="container mx-auto px-6 py-6 relative z-20 flex items-center justify-between">
            <div className="text-white font-bold text-xl">YourLogo</div>
            <div className="hidden md:flex gap-6 text-white/90">
              <a className="hover:underline">Home</a>
              <a className="hover:underline">Jobs</a>
              <a className="hover:underline">Categories</a>
              <a className="hover:underline">About</a>
            </div>
            <div className="text-white hidden md:block">Sign in</div>
          </nav>

          <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center h-full text-center">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg"
            >
              ROOMS FROM <span className="line-through mr-2">$166</span>
              <span className="ml-2">$144</span>
            </motion.h1>
            <motion.p
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="mt-4 text-white/90 max-w-2xl"
            >
              Find the best places, great deals and book instantly — example
              hero subtitle to match the screenshot.
            </motion.p>

            {/* Booking / Search form overlay */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="w-full max-w-4xl bg-white rounded-xl shadow-2xl mt-8 p-5 md:p-6"
            >
              <form className="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
                <div className="col-span-1 md:col-span-2">
                  <label className="text-xs font-medium text-gray-500">
                    Destination
                  </label>
                  <input
                    className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="City, hotel, address..."
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-500">
                    Check-out
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-200 rounded-md px-3 py-2"
                  />
                </div>

                <div className="md:col-span-4 flex justify-end mt-1">
                  <button
                    type="submit"
                    className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold"
                  >
                    Search rooms
                  </button>
                </div>
              </form>

              {/* small stats / quick links row */}
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3"
                    />
                  </svg>
                  Best price guarantee
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6l4 2"
                    />
                  </svg>
                  Free cancellation
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Verified hosts
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Recent Jobs / small strip */}
      <section className="container mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
              <svg
                className="w-5 h-5 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7h18M3 12h18M3 17h18"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-medium">Recently Posted Jobs</div>
              <div className="text-xs text-gray-500">
                See latest opportunities
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600 hidden sm:block">
            Accountant • Marketing Manager • Nurse • Front Desk
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm rounded-md border border-gray-200">
              View all
            </button>
            <button className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white">
              Post a job
            </button>
          </div>
        </div>
      </section>

      {/* Popular categories */}
      <section className="container mx-auto px-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold">POPULAR JOB CATEGORIES</h3>
          <p className="text-gray-500 mt-2">Browse by category</p>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-stretch">
          {[
            { name: "Accounting", icon: "💼" },
            { name: "Administration", icon: "🏢" },
            { name: "Healthcare", icon: "🏥" },
            { name: "Hospitality", icon: "🛎️" },
            { name: "Technology", icon: "💻" },
            { name: "Customer Service", icon: "📞" },
          ].map((c) => (
            <div
              key={c.name}
              className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center"
            >
              <div className="text-3xl mb-2">{c.icon}</div>
              <div className="text-sm font-medium">{c.name}</div>
              <div className="text-xs text-gray-400 mt-1">10+ jobs</div>
            </div>
          ))}
        </div>
      </section>

      {/* Search by specialization / reduced space area (the turquoise box in screenshot) */}
      <section className="container mx-auto px-6 mt-8">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-white to-sky-50 border border-gray-100 rounded-xl shadow p-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h4 className="text-lg font-semibold">
                FIND BY SPECIALIZATION / LOCATION
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Refine your search using filters below
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <input
                  placeholder="Keyword"
                  className="border px-3 py-2 rounded-md"
                />
                <select className="border px-3 py-2 rounded-md">
                  <option>Location</option>
                  <option>New York</option>
                </select>
                <select className="border px-3 py-2 rounded-md">
                  <option>Specialization</option>
                </select>
                <select className="border px-3 py-2 rounded-md">
                  <option>Salary Range</option>
                </select>
              </div>
            </div>

            <div className="w-full md:w-72 flex flex-col gap-3 justify-center">
              <button className="py-3 px-4 bg-blue-600 text-white rounded-md font-semibold">
                Search
              </button>
              <button className="py-2 px-4 border rounded-md">
                Advanced search
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Account CTA */}
      <section className="container mx-auto px-6 mt-10">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-6 items-center"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold">
              Ready to get started? Create an account.
            </h3>
            <p className="text-gray-500 mt-2">
              Save searches, apply faster, and get job alerts tailored to you.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-blue-600 text-white px-5 py-3 rounded-md font-semibold">
              Sign up
            </button>
            <button className="px-5 py-3 border rounded-md">Sign in</button>
          </div>
        </motion.div>
      </section>

      {/* Main content: Cards and consultation area */}
      <main className="container mx-auto px-6 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: big content column */}
        <section className="lg:col-span-2 space-y-6">
          {/* Large card with form like 'Find your next job' */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="text-lg font-semibold">Find your next job</h4>
            <p className="text-gray-500 mt-2">Search, save and apply quickly</p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                placeholder="Job title or keyword"
                className="border px-3 py-2 rounded-md"
              />
              <input
                placeholder="Location"
                className="border px-3 py-2 rounded-md"
              />
              <select className="border px-3 py-2 rounded-md">
                <option>Job type</option>
                <option>Full time</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Search jobs
              </button>
            </div>
          </div>

          {/* Features / Why choose us */}
          <div className="bg-white p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Verified employers",
                desc: "Only legitimate listings from trusted providers.",
                icon: "✔️",
              },
              {
                title: "Quick apply",
                desc: "Apply with a single click after saving your profile.",
                icon: "⚡",
              },
              {
                title: "24/7 Support",
                desc: "We help you at every step of the job search.",
                icon: "🤝",
              },
            ].map((f) => (
              <div key={f.title} className="p-4 border rounded">
                <div className="text-3xl mb-2">{f.icon}</div>
                <div className="font-semibold">{f.title}</div>
                <div className="text-sm text-gray-500 mt-1">{f.desc}</div>
              </div>
            ))}
          </div>

          {/* Testimonials / trust */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h5 className="font-semibold">Why Candidates Trust Us</h5>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="text-sm font-medium">Trusted Professionals</div>
                <div className="text-xs text-gray-500">
                  We screen employers thoroughly.
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">Experienced Team</div>
                <div className="text-xs text-gray-500">
                  Career experts available for help.
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm font-medium">
                  Satisfaction Guarantee
                </div>
                <div className="text-xs text-gray-500">
                  High-quality placements & follow-ups.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right column: consultation and contact */}
        <aside className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h6 className="font-semibold">Get your free consultation</h6>
            <p className="text-xs text-gray-500 mt-1">
              Speak to an expert and improve your application
            </p>
            <form className="mt-4 space-y-3">
              <input
                className="border px-3 py-2 rounded-md w-full"
                placeholder="Full name"
              />
              <input
                className="border px-3 py-2 rounded-md w-full"
                placeholder="Phone number"
              />
              <input
                className="border px-3 py-2 rounded-md w-full"
                placeholder="Email"
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-md">
                Request call
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h6 className="font-semibold">Contact us</h6>
            <div className="text-sm text-gray-500 mt-2">
              The Launch Branch
              <br />
              support@example.com
              <br />
              +1 (555) 123-4567
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60"
              alt="team"
              className="w-full h-36 object-cover rounded mb-3"
            />
            <div className="text-sm font-medium">Trusted by businesses</div>
            <div className="text-xs text-gray-400 mt-2">
              Logos & partners section
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-12">
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="text-white font-bold text-lg">YourLogo</div>
            <p className="text-sm text-gray-400 mt-2">
              Leading job & hospitality platform
            </p>
          </div>

          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Support</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Privacy</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Get the app</div>
            <div className="mt-3 text-sm text-gray-400">
              Download on the store
            </div>
            <div className="mt-4 flex gap-2">
              <div className="bg-white/10 px-3 py-2 rounded">App Store</div>
              <div className="bg-white/10 px-3 py-2 rounded">Google Play</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
