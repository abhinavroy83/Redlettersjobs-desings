"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Briefcase, ChevronRight } from "lucide-react";

export function RedLetterJobs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <img
              src="/placeholder.svg?height=40&width=150"
              alt="Red Letter Jobs Logo"
              className="h-8"
            />
            <nav className="hidden md:flex space-x-6">
              {["Find Jobs", "Post a Job", "Resources", "About"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
            <Button
              variant="ghost"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Find Your Calling
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Discover meaningful opportunities in Christian ministry and
              non-profit sectors.
            </p>
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Job title or keywords"
                className="flex-grow"
              />
              <Input placeholder="Location" className="flex-grow" />
              <Button
                size="lg"
                className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Search className="mr-2 h-4 w-4" /> Search
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Featured Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((job) => (
                <Card
                  key={job}
                  className="bg-white hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Senior Pastor
                    </h3>
                    <p className="text-gray-600 mb-4">First Baptist Church</p>
                    <p className="text-gray-500 mb-4">Atlanta, GA</p>
                    <Button variant="outline" className="w-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Jobs <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Explore by Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Ministry & Pastoral",
                "Non-Profit Leadership",
                "Education & Teaching",
                "Worship & Creative Arts",
                "Administration & Management",
                "Missions & Outreach",
              ].map((category, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-auto py-8 flex flex-col items-center justify-center text-center bg-white hover:bg-blue-100 transition-colors"
                >
                  <Briefcase className="h-8 w-8 mb-4 text-blue-500" />
                  <span className="text-lg font-medium">{category}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">For Employers</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find dedicated individuals who share your mission and values.
            </p>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Post a Job
            </Button>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-8">Stay Connected</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Receive the latest job opportunities and resources directly in
              your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                placeholder="Your email address"
                type="email"
                className="flex-grow"
              />
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img
                src="/placeholder.svg?height=40&width=150"
                alt="Red Letter Jobs Logo"
                className="h-8 mb-4"
              />
              <p className="text-sm text-gray-600 mb-4">
                Connecting passionate individuals with meaningful careers in
                Christian ministry and non-profit sectors.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-blue-500"
                    >
                      <img
                        src={`/placeholder.svg?text=${social}&height=24&width=24`}
                        alt={social}
                        className="h-6 w-6"
                      />
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Contact",
                  "FAQ",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {[
                  "Career Advice",
                  "Resume Tips",
                  "Interview Prep",
                  "Employer Guide",
                  "Blog",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>© 2024 Red Letter Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
