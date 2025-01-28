"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Upload, Briefcase, ChevronRight } from "lucide-react";
import Image from "next/image";

export function NewLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Image
            className="w-[120px] lg:w-[190px] md:bg-none hidden md:block"
            src="/placeholder.svg"
            alt="logo"
            width={150} // Explicit width
            height={40} // Explicit height
          />

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["Home", "Jobs", "Post a Job", "Resources", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-600 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          <Button>Sign In</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Find Your Calling
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover meaningful Christian job opportunities
          </p>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <Input
                placeholder="Job Title or Keywords"
                className="flex-grow"
              />
              <Input placeholder="Location" className="flex-grow" />
              <Select defaultValue="">
                <option value="" disabled>
                  Category
                </option>
                <option>Pastor</option>
                <option>Youth Ministry</option>
                <option>Worship</option>
              </Select>
              <Button className="w-full md:w-auto">
                <Search className="mr-2 h-4 w-4" /> Search Jobs
              </Button>
            </div>
            <div className="flex justify-center gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600">
                Advanced Search
              </a>
              <a href="#" className="hover:text-blue-600">
                Browse All Jobs
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-gray-800">
              Featured Opportunities
            </h2>
            <Button variant="outline">
              View All Jobs <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Senior Pastor</h3>
                  <p className="text-gray-600 mb-4">First Baptist Church</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Atlanta, GA</span>
                    <span>Full Time</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Explore Opportunities
          </h2>
          <Tabs defaultValue="category">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="category">By Category</TabsTrigger>
              <TabsTrigger value="denomination">By Denomination</TabsTrigger>
            </TabsList>
            <TabsContent value="category" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Pastor / Senior Pastor",
                  "Youth Ministry",
                  "Worship",
                  "Children's Ministry",
                  "Administrative",
                  "Outreach",
                  "Education",
                  "Counseling",
                ].map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="h-auto py-4 justify-start"
                  >
                    <Image
                      src="/placeholder.svg"
                      alt=""
                      className="mr-3"
                      width={24} // Explicit width
                      height={24} 
                    />
                    {category}
                  </Button>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="denomination" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Baptist",
                  "Presbyterian",
                  "Methodist",
                  "Lutheran",
                  "Non-Denominational",
                  "Anglican",
                  "Pentecostal",
                  "Reformed",
                ].map((denom) => (
                  <Button
                    key={denom}
                    variant="outline"
                    className="h-auto py-4 justify-start"
                  >
                    {denom}
                  </Button>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            For Employers
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Find the right candidates for your ministry
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button size="lg">
              <Upload className="mr-2 h-5 w-5" /> Post a Job
            </Button>
            <Button size="lg" variant="outline">
              <Briefcase className="mr-2 h-5 w-5" /> Browse Resumes
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                className="w-[120px] lg:w-[190px] md:bg-none hidden md:block"
                src="/placeholder.svg"
                alt="logo"
                width={150} // Explicit width
                height={40} // Explicit height
              />

              <p className="text-sm mb-4">
                Connecting Christians with meaningful career opportunities.
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
                        src={`/placeholder.svg?text=${social}`} // Only pass the text in the query string
                        alt={social}
                        width={24} // Explicitly provide width
                        height={24} // Explicitly provide height
                       
                      />
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
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
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">
                Stay updated with the latest opportunities
              </p>
              <div className="flex">
                <Input placeholder="Your email" className="rounded-r-none" />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
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
