"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, ChevronRight, ChevronDown, Star } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample data
const jobCategories = [
  { icon: "🏠", label: "Remote" },
  { icon: "🏢", label: "MNC" },
  { icon: "📈", label: "Marketing" },
  { icon: "⚙️", label: "Engineering" },
  { icon: "📚", label: "Internship" },
  { icon: "👥", label: "Project Mgr" },
  { icon: "📊", label: "Data Science" },
  { icon: "💼", label: "Sales" },
  { icon: "🎓", label: "Fresher" },
  { icon: "🔄", label: "Supply Chain" },
  { icon: "💰", label: "Fortune 500" },
];

const topCompanies = {
  mncs: [
    { name: "Google", logo: "/placeholder.svg" },
    { name: "Microsoft", logo: "/placeholder.svg" },
    { name: "Amazon", logo: "/placeholder.svg" },
  ],
  internet: [
    { name: "Flipkart", logo: "/placeholder.svg" },
    { name: "Meesho", logo: "/placeholder.svg" },
    { name: "Swiggy", logo: "/placeholder.svg" },
  ],
  manufacturing: [
    { name: "Tata", logo: "/placeholder.svg" },
    { name: "Reliance", logo: "/placeholder.svg" },
    { name: "Adani", logo: "/placeholder.svg" },
  ],
};

const featuredCompanies = [
  {
    name: "FIS",
    logo: "/placeholder.svg",
    description: "Leading provider of technology solutions",
    employees: "5k+ employees",
  },
  {
    name: "Reliance Retail",
    logo: "/placeholder.svg",
    description: "Building India's largest retail chain",
    employees: "10k+ employees",
  },
];

const sponsoredCompanies = [
  {
    name: "KGISL",
    logo: "/placeholder.svg",
    rating: "4.1",
    reviews: "1.2k+ reviews",
    type: "Technology, Staffing",
  },
  {
    name: "Spark",
    logo: "/placeholder.svg",
    rating: "4.3",
    reviews: "890+ reviews",
    type: "BPO",
  },
];

const interviewQuestions = [
  {
    company: "Flipkart",
    logo: "/placeholder.svg",
    questions: "85+ questions",
  },
  {
    company: "Amazon",
    logo: "/placeholder.svg",
    questions: "120+ questions",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Image
              src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
              alt="Naukri Logo"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-[#4A90E2] flex items-center"
              >
                Jobs
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-[#4A90E2] flex items-center"
              >
                Companies
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-[#4A90E2] flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-sm font-normal text-[#4A90E2]"
            >
              Login
            </Button>
            <Button className="bg-[#FF7555] hover:bg-[#FF6B4A] text-white text-sm font-normal">
              Register
            </Button>
            <Button
              variant="ghost"
              className="hidden md:flex text-sm font-normal text-gray-600 hover:text-gray-900"
            >
              For employers
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Find your dream job now
            </h1>
            <p className="text-gray-600 mb-8">
              5 lakh+ jobs for you to explore
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Enter skills / designations / companies"
                    className="pl-10 border-gray-300"
                  />
                </div>
                <div className="w-full md:w-48">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Fresher</SelectItem>
                      <SelectItem value="1">1 year</SelectItem>
                      <SelectItem value="2">2 years</SelectItem>
                      <SelectItem value="3">3 years</SelectItem>
                      <SelectItem value="4">4+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Enter location"
                    className="pl-10 border-gray-300"
                  />
                </div>
                <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white px-8">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Banner */}
        <section className="max-w-7xl mx-auto px-4 -mt-6 mb-12">
          <Card className="bg-gradient-to-r from-[#00A5A7] to-[#00B7B7] border-none overflow-hidden">
            <CardContent className="flex items-center justify-between p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">
                  Need help with your resume?
                </h3>
                <p className="opacity-90 mb-4">
                  Get experts to build your resume from scratch
                </p>
                <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white">
                  View details
                </Button>
              </div>
              <div className="hidden md:block">
                <Image
                  src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                  alt="Resume"
                  width={120}
                  height={120}
                  className="h-24 w-auto"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Job Categories */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {jobCategories.map((category) => (
              <Button
                key={category.label}
                variant="outline"
                className="justify-start space-x-2 bg-white hover:bg-gray-50 border-gray-200"
              >
                <span role="img" aria-label={category.label}>
                  {category.icon}
                </span>
                <span>{category.label}</span>
                <ChevronRight className="ml-auto h-4 w-4" />
              </Button>
            ))}
          </div>
        </section>

        {/* Top Companies */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-xl font-bold mb-6">Top companies hiring now</h2>
          <Tabs defaultValue="mncs" className="space-y-6">
            <TabsList className="bg-transparent border-b h-auto p-0 space-x-6">
              <TabsTrigger
                value="mncs"
                className="bg-transparent border-b-2 rounded-none pb-2 data-[state=active]:border-[#4A90E2] data-[state=active]:text-[#4A90E2]"
              >
                MNCs
              </TabsTrigger>
              <TabsTrigger
                value="internet"
                className="bg-transparent border-b-2 rounded-none pb-2 data-[state=active]:border-[#4A90E2] data-[state=active]:text-[#4A90E2]"
              >
                Internet
              </TabsTrigger>
              <TabsTrigger
                value="manufacturing"
                className="bg-transparent border-b-2 rounded-none pb-2 data-[state=active]:border-[#4A90E2] data-[state=active]:text-[#4A90E2]"
              >
                Manufacturing
              </TabsTrigger>
            </TabsList>
            {Object.entries(topCompanies).map(([key, companies]) => (
              <TabsContent key={key} value={key} className="mt-6">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
                  {companies.map((company) => (
                    <div
                      key={company.name}
                      className="flex flex-col items-center gap-2"
                    >
                      <Image
                        src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                        alt={company.name}
                        width={40}
                        height={40}
                        className="rounded"
                      />
                      <span className="text-sm text-gray-600">
                        {company.name}
                      </span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Featured Companies */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-xl font-bold mb-6">
            Featured companies actively hiring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredCompanies.map((company) => (
              <Card
                key={company.name}
                className="bg-white hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Image
                      src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                      alt={company.name}
                      width={64}
                      height={64}
                      className="mb-4"
                    />
                    <h3 className="font-semibold mb-2">{company.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {company.description}
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      {company.employees}
                    </p>
                    <Button variant="outline" className="w-full">
                      View jobs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View all companies</Button>
          </div>
        </section>

        {/* Career Platform */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-none">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="max-w-lg">
                  <h2 className="text-2xl font-bold mb-4">
                    Introducing a career platform for college students & fresh
                    grads
                  </h2>
                  <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white">
                    Explore now
                  </Button>
                </div>
                <Image
                  src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                  alt="Career Illustration"
                  width={300}
                  height={300}
                  className="hidden lg:block"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sponsored Companies */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-xl font-bold mb-6">Sponsored companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsoredCompanies.map((company) => (
              <Card
                key={company.name}
                className="bg-white hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                      alt={company.name}
                      width={48}
                      height={48}
                      className="rounded"
                    />
                    <div>
                      <h3 className="font-semibold mb-1">{company.name}</h3>
                      <div className="flex items-center gap-2 mb-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {company.rating}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({company.reviews})
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{company.type}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View all companies</Button>
          </div>
        </section>

        {/* Interview Questions */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-xl font-bold mb-6">
            Interview questions by company
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interviewQuestions.map((company) => (
              <Card key={company.company} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                      alt={company.company}
                      width={40}
                      height={40}
                      className="rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{company.company}</h3>
                      <p className="text-sm text-gray-600">
                        {company.questions}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="bg-gradient-to-r from-purple-50 to-purple-100 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  10M+ users are on the Naukri app
                </h2>
                <p className="text-gray-600 mb-6">
                  Get real-time job updates & more!
                </p>
                <div className="flex items-center gap-8">
                  <Image
                    src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                    alt="QR Code"
                    width={120}
                    height={120}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col gap-4">
                    <Button
                      variant="outline"
                      className="bg-black text-white hover:bg-black/90"
                    >
                      <Image
                        src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                        alt="App Store"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      App Store
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-black text-white hover:bg-black/90"
                    >
                      <Image
                        src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                        alt="Play Store"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      Play Store
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative w-72 h-[400px]">
                <Image
                  src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                  alt="Mobile App"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-12 border-t">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div>
                <Image
                  src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                  alt="Naukri Logo"
                  width={100}
                  height={32}
                  className="mb-6"
                />
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">About us</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      About Naukri
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Terms & conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Employers</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Post jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Access database
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Recruiting solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Advertise with us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Job seekers</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Search jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Create resume
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Job alerts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Career advice
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Browse jobs</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      All jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Companies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Browse all jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Premium services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                  alt="ISO"
                  width={40}
                  height={40}
                />
                <Image
                  src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                  alt="Great Place to Work"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Naukri Internet Services Ltd. All
                rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <Image
                  src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                  alt="Play Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
