"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Briefcase,
  Users,
  BookOpen,
  ChevronRight,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ModernDynamicLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Image
              src="/placeholder.svg?height=40&width=150"
              alt="Red Letter Jobs Logo"
              className="h-8"
            />
            <nav className="hidden md:flex space-x-6">
              {["Find Jobs", "Post a Job", "Resources", "About Us"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:inline-flex">
                Sign In
              </Button>
              <Button className="hidden md:inline-flex">Sign Up</Button>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Discover Your Divine Purpose
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Connect with Christian organizations and find meaningful career
              opportunities that align with your faith.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <Input
                  placeholder="Job title or keywords"
                  className="flex-grow"
                />
                <Input placeholder="Location" className="flex-grow" />
                <Select defaultValue="">
                  <option value="" disabled>
                    Category
                  </option>
                  <option>Ministry</option>
                  <option>Non-Profit</option>
                  <option>Education</option>
                </Select>
                <Button size="lg" className="w-full md:w-auto">
                  <Search className="mr-2 h-4 w-4" /> Search Jobs
                </Button>
              </div>
              <div className="flex justify-center space-x-4 text-sm">
                <Link
                  href={"/Design2"}
                  className="text-blue-600 hover:underline"
                >
                  Advanced Search
                </Link>

                <a href="#" className="text-blue-600 hover:underline">
                  Browse All Jobs
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Briefcase, title: "Ministry Positions", count: 1500 },
                { icon: Users, title: "Non-Profit Roles", count: 800 },
                { icon: BookOpen, title: "Christian Education", count: 600 },
              ].map((category, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardHeader>
                    <category.icon className="h-12 w-12 text-blue-600 mb-4" />
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-gray-700">
                      {category.count}+ Jobs
                    </p>
                    <Button variant="link" className="mt-4 p-0">
                      Explore <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Opportunities
            </h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="fulltime">Full Time</TabsTrigger>
                <TabsTrigger value="parttime">Part Time</TabsTrigger>
                <TabsTrigger value="remote">Remote</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((job) => (
                    <Card key={job}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          Senior Pastor
                        </h3>
                        <p className="text-gray-600 mb-4">
                          First Baptist Church - Atlanta, GA
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            Full Time
                          </span>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              {/* Repeat similar structure for other tab contents */}
            </Tabs>
            <div className="text-center mt-12">
              <Button size="lg">View All Jobs</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">For Employers</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Find dedicated individuals who share your mission and values.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Post a Job
              </Button>
              <Button size="lg" variant="outline">
                Search Resumes
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Stay updated with the latest opportunities and resources in
              Christian careers.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex gap-4">
                <Input
                  placeholder="Your email address"
                  type="email"
                  className="flex-grow"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="/placeholder.svg?height=40&width=150"
                alt="Red Letter Jobs Logo"
                className="h-8 mb-4"
              />
              <p className="text-sm mb-4">
                Red Letter Jobs is dedicated to connecting passionate
                individuals with meaningful careers in Christian ministry and
                non-profit sectors.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-400 hover:text-white"
                    >
                      <Image
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
                    <a href="#" className="hover:underline">
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
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
            <p>© 2024 Red Letter Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
