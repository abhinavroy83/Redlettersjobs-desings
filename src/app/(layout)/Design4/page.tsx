import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Briefcase,
  ChevronRight,
  MapPin,
  Clock,
  Menu,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg"
                alt="Red Letter Jobs Logo"
                width={40} // Explicit width
                height={40}
              />
              <span className="text-xl font-bold text-blue-600">
                Red Letter Jobs
              </span>
            </div>
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
              Discover Your Calling
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Connect with Christian organizations and find meaningful career
              opportunities that align with your faith.
            </p>
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-grow relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Job title or keywords"
                    className="pl-10"
                  />
                </div>
                <div className="flex-grow relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input placeholder="Location" className="pl-10" />
                </div>
                <Select defaultValue="">
                  <option value="" disabled>
                    Category
                  </option>
                  <option>Ministry</option>
                  <option>Non-Profit</option>
                  <option>Education</option>
                </Select>
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Opportunities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Senior Pastor",
                  org: "First Baptist Church",
                  location: "Atlanta, GA",
                  type: "Full-time",
                },
                {
                  title: "Youth Minister",
                  org: "Grace Community Church",
                  location: "Dallas, TX",
                  type: "Part-time",
                },
                {
                  title: "Worship Leader",
                  org: "Hillsong Church",
                  location: "Los Angeles, CA",
                  type: "Full-time",
                },
              ].map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{job.org}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.type}
                    </div>
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Ministry & Pastoral",
                "Non-Profit Leadership",
                "Education & Teaching",
                "Worship & Creative Arts",
                "Administration & Management",
                "Missions & Outreach",
                "Counseling & Care",
                "Technology & Media",
              ].map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto py-6 flex flex-col items-center justify-center text-center hover:bg-blue-50 hover:border-blue-300 transition-colors"
                >
                  <Briefcase className="h-8 w-8 mb-3 text-blue-600" />
                  <span className="text-sm font-medium">{category}</span>
                </Button>
              ))}
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
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-blue-700"
              >
                Search Resumes
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Stay Connected</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Receive the latest job opportunities and resources directly in
              your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex gap-4">
                <Input
                  placeholder="Your email address"
                  type="email"
                  className="flex-grow"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Red Letter Jobs Logo"
                  width={10} // Explicit width
                  height={10} 
                />
                <span className="text-xl font-bold">Red Letter Jobs</span>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Connecting passionate individuals with meaningful careers in
                Christian ministry and non-profit sectors.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-gray-300 hover:text-white"
                    >
                      <Image
                        src={`/placeholder.svg?text=${social}`} // Only pass the text in the query string
                        alt={social}
                        width={10} // Explicitly provide width
                        height={10} // Explicitly provide height
                      />{" "}
                    </a>
                  )
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Contact",
                  "FAQ",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                {[
                  "Career Advice",
                  "Resume Tips",
                  "Interview Prep",
                  "Employer Guide",
                  "Blog",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
            <p>© 2024 Red Letter Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
