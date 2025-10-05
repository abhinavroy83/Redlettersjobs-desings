"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // optional helper — replace or remove if you don't have it
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  MapPin,
  Briefcase,
  Upload,
  PlusCircle,
  Menu,
  Phone,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  Headphones,
  Users,
  ThumbsUp,
  BedDouble,
  Bath,
  Wifi,
  UtensilsCrossed,
  Dumbbell,
  Sparkles,
} from "lucide-react";

export default function RedLetterJobs() {
  const [openNav, setOpenNav] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const logos = [
    "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
    "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
    "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
    "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
    "https://res.cloudinary.com/druohnmyv/image/upload/v1744965083/portland_deyhxa.jpg",
  ];

  const amenities = [
    {
      icon: BedDouble,
      title: "Meaningful Roles",
      text: "Serve with heart & purpose.",
    },
    {
      icon: Bath,
      title: "Trusted Employers",
      text: "Verified ministry & church listings.",
    },
    {
      icon: Wifi,
      title: "Fast Responses",
      text: "Direct messaging & quick replies.",
    },
    {
      icon: UtensilsCrossed,
      title: "Community Events",
      text: "Network and grow.",
    },
    {
      icon: Dumbbell,
      title: "Professional Growth",
      text: "Training and mentorship.",
    },
    {
      icon: Sparkles,
      title: "Supportive Teams",
      text: "Faith-centered organizations.",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Network",
      text: "Verified ministries and background checks.",
    },
    {
      icon: Headphones,
      title: "Personalized Support",
      text: "Real people assisting you.",
    },
    {
      icon: Users,
      title: "Community",
      text: "Join a network of faith-driven professionals.",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Focused",
      text: "We support successful placements.",
    },
  ];

  const steps = [
    {
      title: "Search & Discover",
      text: "Find roles aligned with your calling.",
    },
    { title: "Apply Easily", text: "One-click apply & manage applications." },
    { title: "Connect", text: "Interview and engage with ministry leaders." },
    { title: "Serve & Grow", text: "Start serving in your new role." },
  ];

  // simple framer variants
  const fadeUp = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-800">
      {/* Top utility / header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center text-white font-bold">
                RJ
              </div>
              <div className="text-lg font-semibold">RedLetterJobs</div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#features" className="hover:text-red-700">
                Features
              </Link>
              <Link href="#jobs" className="hover:text-red-700">
                Jobs
              </Link>
              <Link href="#categories" className="hover:text-red-700">
                Categories
              </Link>
              <Link href="#about" className="hover:text-red-700">
                About
              </Link>
              <Link href="#contact" className="hover:text-red-700">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center text-sm text-gray-600 gap-4">
                <Phone className="size-4" />
                <a href="tel:+18001234567" className="hover:text-slate-900">
                  +1 (800) 123-4567
                </a>
                <Mail className="size-4" />
                <a
                  href="mailto:hello@redletterjobs.org"
                  className="hover:text-slate-900"
                >
                  hello@redletterjobs.org
                </a>
              </div>

              <div className="hidden md:flex gap-2">
                <Button
                  variant="outline"
                  className="border-slate-200"
                  onClick={() => setShowSignin(true)}
                >
                  Sign In
                </Button>
                <Button
                  className="bg-red-700 hover:bg-red-800"
                  onClick={() => setShowSignup(true)}
                >
                  Create Account
                </Button>
              </div>

              <button
                className="md:hidden p-2 rounded border"
                onClick={() => setOpenNav((s) => !s)}
                aria-label="menu"
              >
                <Menu />
              </button>
            </div>
          </div>

          {/* mobile nav */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all",
              openNav ? "max-h-60" : "max-h-0"
            )}
          >
            <div className="flex flex-col gap-2 pb-3">
              <Link href="#features" className="px-2">
                Features
              </Link>
              <Link href="#jobs" className="px-2">
                Jobs
              </Link>
              <Link href="#categories" className="px-2">
                Categories
              </Link>
              <Link href="#about" className="px-2">
                About
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative bg-cover bg-center bg-red-700"
        // style={{
        //   backgroundImage:
        //     "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80')",
        // }}
      >
        {/* <div className="absolute inset-0 bg-black/45" /> */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 lg:py-28 text-white">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="inline-block rounded-full bg-red-100/20 px-3 py-1 text-xs text-red-200">
              Serving ministries & church careers
            </p>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Find your calling — meaningful church & ministry jobs
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/90">
              RedLetterJobs connects faith-driven professionals with churches,
              schools, and ministries. Search, apply, and step into service.
            </p>

            {/* Glass search card */}
            <motion.div
              className="mt-8 max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-2xl p-5 shadow-2xl border border-white/30"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <form className="grid grid-cols-1 md:grid-cols-[1fr_1fr_320px] gap-3 items-end">
                <div className="relative text-white">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
                  <Input
                    className="pl-10"
                    placeholder="Job title, skill or organization"
                  />
                </div>
                <div className="relative text-white">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
                  <Input
                    className="pl-10"
                    placeholder="City, state, or country"
                  />
                </div>
                <div className="flex gap-2 text-white">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pastor">Pastor</SelectItem>
                      <SelectItem value="youth">Youth Ministry</SelectItem>
                      <SelectItem value="music">Music Ministry</SelectItem>
                      <SelectItem value="admin">Administration</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="bg-red-700 hover:bg-red-800 flex items-center gap-2">
                    <Search /> Search
                  </Button>
                </div>
              </form>

              <div className="flex flex-wrap gap-3 mt-4 text-sm text-slate-700">
                <Button
                  variant="outline"
                  className="bg-white/70 text-red-700 border-red-200 flex items-center gap-2"
                >
                  <Upload /> Upload Resume
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/70 text-red-700 border-red-200 flex items-center gap-2"
                >
                  <PlusCircle /> Post a Job
                </Button>
                <div className="ml-auto text-xs text-slate-700 hidden sm:block">
                  Best matches in ministry & faith-based orgs
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partner logos strip */}
      <section className="bg-white py-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-center gap-8 opacity-80 flex-wrap">
            {logos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`partner ${i}`}
                className="h-10 w-auto rounded-md shadow-sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features / amenities */}
      <section id="features" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-2xl font-semibold">Why RedLetterJobs</h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
              We combine faith-first values with modern job tools to help you
              find the right role.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="rounded-xl border p-5 bg-white shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-red-50 p-3 text-red-700">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-medium">{a.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{a.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent jobs */}
      <section id="jobs" className="py-12 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                Recent Church & Ministry Jobs
              </h2>
              <p className="text-sm text-slate-600">
                Handpicked, verified opportunities
              </p>
            </div>
            <div>
              <Button className="bg-red-700 hover:bg-red-800">
                Browse all jobs
              </Button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <motion.div
                key={n}
                whileHover={{ y: -6 }}
                className="rounded-xl bg-white border p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-md bg-red-50 flex items-center justify-center text-red-700 text-lg font-semibold">
                        G
                      </div>
                      <div>
                        <div className="font-semibold">Youth Pastor</div>
                        <div className="text-sm text-slate-600">
                          Grace Community Church
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 text-sm text-slate-500">
                      <MapPin className="inline mr-1 align-middle" /> Los
                      Angeles, CA
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-red-700">
                      Full time
                    </div>
                    <Button variant="outline" className="mt-3">
                      Apply
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories + Denominations */}
      <section id="categories" className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-2xl font-semibold">
              Popular Categories & Denominations
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Filter by role type, denomination, or location
            </p>
          </motion.div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Pastor",
              "Children's Ministry",
              "Music & Worship",
              "Youth & Young Adults",
              "Administration",
              "Education",
              "Counseling",
              "Outreach",
            ].map((c, i) => (
              <Card key={c} className="hover:shadow-lg transition">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-50 mx-auto flex items-center justify-center mb-4 text-red-700 font-bold">
                    {i + 1}
                  </div>
                  <div className="font-semibold">{c}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-red-700 hover:bg-red-800">
              Browse All Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Process & features */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold">How it works</h3>
              <p className="text-sm text-slate-600 mt-2">
                A simple process to find ministry work that matches your
                calling.
              </p>

              <ol className="mt-6 space-y-4">
                {steps.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="rounded-full w-9 h-9 bg-red-50 flex items-center justify-center text-red-700 font-semibold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-medium">{s.title}</div>
                      <div className="text-sm text-slate-600">{s.text}</div>
                    </div>
                  </li>
                ))}
              </ol>

              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-1 text-red-700" /> Best-in-class
                  safety checks
                </li>
                <li className="flex items-start gap-2">
                  <Headphones className="mt-1 text-red-700" /> Human support &
                  coaching
                </li>
                <li className="flex items-start gap-2">
                  <Users className="mt-1 text-red-700" /> Community network
                </li>
              </ul>
            </div>

            <div>
              <Card className="rounded-xl border p-0 overflow-hidden">
                <div className="p-6">
                  <h4 className="text-lg font-semibold">
                    Get a free consultation
                  </h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Talk to one of our ministry advisors about roles and fit.
                  </p>

                  <form className="mt-4 grid grid-cols-1 gap-3">
                    <Input placeholder="Full name" />
                    <Input type="email" placeholder="Email address" />
                    <Input placeholder="Phone number" />
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="date" />
                      <Input type="date" />
                    </div>
                    <textarea
                      placeholder="Message"
                      className="rounded-md border p-3 min-h-[90px]"
                    />
                    <Button className="bg-red-700 hover:bg-red-800">
                      Request Consultation
                    </Button>
                  </form>

                  <p className="mt-3 text-xs text-slate-500">
                    We respect your privacy — your details are safe with us.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / trust */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="text-2xl font-semibold">Stories of Service</h2>
            <p className="text-sm text-slate-600 mt-2">
              Real people finding meaningful ministry work.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((t) => (
              <Card key={t} className="p-6">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-50 text-red-700 flex items-center justify-center font-semibold">
                      U
                    </div>
                    <div>
                      <div className="font-medium">Alex M.</div>
                      <div className="text-sm text-slate-500">
                        Youth Pastor — placed in 2024
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">
                    "RedLetterJobs helped me find a role where I can serve
                    full-time. The support and vetting made the process simple."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe / footer */}
      <footer className="bg-slate-900 text-white mt-12">
        <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-700 flex items-center justify-center font-bold">
                RJ
              </div>
              <div className="text-lg font-semibold">RedLetterJobs</div>
            </div>
            <p className="text-sm text-slate-300">
              Connecting faith & work — find church and ministry opportunities
              that align with your calling.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="#jobs">Find Jobs</Link>
              </li>
              <li>
                <Link href="#categories">Categories</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
              <li>
                <Link href="#about">About</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Stay updated</h4>
            <p className="text-sm text-slate-300 mb-3">
              Subscribe for new job alerts & ministry resources
            </p>
            <form className="flex gap-2">
              <Input
                placeholder="you@example.com"
                className="bg-slate-800/30 text-white placeholder:text-slate-300"
              />
              <Button className="bg-red-700">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} RedLetterJobs. All rights reserved.
        </div>
      </footer>

      {/* SIGN IN panel (inline modal-like panel) */}
      {showSignin && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowSignin(false)}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="relative z-50 w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Sign in</h3>
              <button
                onClick={() => setShowSignin(false)}
                className="text-slate-500"
              >
                Close
              </button>
            </div>

            <form className="mt-4 space-y-3">
              <Input type="email" placeholder="Email" />
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-slate-600"
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="#" className="text-red-700">
                  Forgot?
                </a>
              </div>

              <Button className="w-full bg-red-700">Sign in</Button>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <button
                  className="text-red-700"
                  onClick={() => {
                    setShowSignin(false);
                    setShowSignup(true);
                  }}
                >
                  Create account
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* SIGN UP panel */}
      {showSignup && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowSignup(false)}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="relative z-50 w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Create an account</h3>
              <button
                onClick={() => setShowSignup(false)}
                className="text-slate-500"
              >
                Close
              </button>
            </div>

            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="in">India</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="State" />
              <Input placeholder="Postal code" />
              <Input type="date" />
              <Input placeholder="Phone number" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Signing up as" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="church">Church</SelectItem>
                  <SelectItem value="school">School</SelectItem>
                  <SelectItem value="individual">Individual</SelectItem>
                </SelectContent>
              </Select>
              <Input type="email" placeholder="Email" />
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-slate-600"
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              <div className="md:col-span-2 flex items-start gap-2">
                <Checkbox id="agree" />
                <label htmlFor="agree" className="text-sm text-slate-600">
                  I agree to the{" "}
                  <a href="#" className="text-red-700">
                    Terms
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-red-700">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <Button className="md:col-span-2 bg-red-700">
                Create account
              </Button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
