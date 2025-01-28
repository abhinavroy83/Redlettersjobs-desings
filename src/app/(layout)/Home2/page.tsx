"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  MapPin,
  ChevronRight,
  ChevronDown,
  Star,
  Briefcase,
  Building2,
  GraduationCap,
  Users,
  LineChart,
  ShoppingBag,
  Globe,
  Truck,
  Building,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const jobCategories = [
  { icon: Building2, label: "Remote", count: "12.5k+ Jobs" },
  { icon: Building, label: "MNC", count: "8.2k+ Jobs" },
  { icon: LineChart, label: "Marketing", count: "5.1k+ Jobs" },
  { icon: Briefcase, label: "Engineering", count: "15.3k+ Jobs" },
  { icon: GraduationCap, label: "Internship", count: "3.2k+ Jobs" },
  { icon: Users, label: "Project Mgr", count: "2.8k+ Jobs" },
  { icon: Globe, label: "Data Science", count: "4.7k+ Jobs" },
  { icon: ShoppingBag, label: "Sales", count: "6.9k+ Jobs" },
  { icon: Users, label: "Fresher", count: "9.1k+ Jobs" },
  { icon: Truck, label: "Supply Chain", count: "2.3k+ Jobs" },
  { icon: Trophy, label: "Fortune 500", count: "7.4k+ Jobs" },
];

const topCompanies = {
  mncs: [
    {
      name: "Google",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.8",
      reviews: "2.5k+",
    },
    {
      name: "Microsoft",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.7",
      reviews: "2.1k+",
    },
    {
      name: "Amazon",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.6",
      reviews: "3.2k+",
    },
    {
      name: "Apple",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.9",
      reviews: "1.8k+",
    },
    {
      name: "Meta",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.5",
      reviews: "1.5k+",
    },
    {
      name: "Netflix",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.7",
      reviews: "900+",
    },
  ],
  internet: [
    {
      name: "Flipkart",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.3",
      reviews: "1.2k+",
    },
    {
      name: "Meesho",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.1",
      reviews: "800+",
    },
    {
      name: "Swiggy",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.2",
      reviews: "1.5k+",
    },
    {
      name: "Zomato",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.0",
      reviews: "1.1k+",
    },
    {
      name: "PhonePe",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.4",
      reviews: "600+",
    },
    {
      name: "Paytm",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.1",
      reviews: "900+",
    },
  ],
  manufacturing: [
    {
      name: "Tata",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.5",
      reviews: "2.8k+",
    },
    {
      name: "Reliance",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.4",
      reviews: "2.2k+",
    },
    {
      name: "Adani",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.2",
      reviews: "1.5k+",
    },
    {
      name: "L&T",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.3",
      reviews: "1.8k+",
    },
    {
      name: "Mahindra",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.4",
      reviews: "1.6k+",
    },
    {
      name: "JSW",
      logo: "/placeholder.svg?height=80&width=80",
      rating: "4.1",
      reviews: "900+",
    },
  ],
};

const featuredCompanies = [
  {
    name: "FIS Global",
    logo: "/placeholder.svg?height=120&width=120",
    description:
      "Leading provider of technology solutions for merchants, banks and capital market firms globally",
    employees: "5k+ employees",
    rating: "4.2",
    reviews: "1.2k+",
    locations: ["Bangalore", "Pune", "Hyderabad"],
    openings: 156,
  },
  {
    name: "Reliance Retail",
    logo: "/placeholder.svg?height=120&width=120",
    description:
      "Building India's largest retail chain with presence across 7,000+ cities",
    employees: "10k+ employees",
    rating: "4.4",
    reviews: "2.1k+",
    locations: ["Mumbai", "Delhi", "Chennai"],
    openings: 234,
  },
  {
    name: "Accenture",
    logo: "/placeholder.svg?height=120&width=120",
    description:
      "Global professional services company with leading capabilities in digital, cloud and security",
    employees: "15k+ employees",
    rating: "4.3",
    reviews: "3.5k+",
    locations: ["Bangalore", "Mumbai", "Hyderabad"],
    openings: 312,
  },
  {
    name: "Cognizant",
    logo: "/placeholder.svg?height=120&width=120",
    description:
      "Leading professional services company transforming business, operating and technology models",
    employees: "12k+ employees",
    rating: "4.1",
    reviews: "2.8k+",
    locations: ["Chennai", "Pune", "Kolkata"],
    openings: 189,
  },
  {
    name: "Infosys",
    logo: "/placeholder.svg?height=120&width=120",
    description:
      "Global leader in next-generation digital services and consulting",
    employees: "20k+ employees",
    rating: "4.2",
    reviews: "4.2k+",
    locations: ["Bangalore", "Hyderabad", "Pune"],
    openings: 423,
  },
];

const interviewQuestions = [
  {
    company: "Flipkart",
    logo: "/placeholder.svg?height=60&width=60",
    questions: "85+ questions",
    categories: ["Software Engineer", "Product Manager", "Data Scientist"],
  },
  {
    company: "Amazon",
    logo: "/placeholder.svg?height=60&width=60",
    questions: "120+ questions",
    categories: ["SDE", "Business Analyst", "Operations"],
  },
  {
    company: "Google",
    logo: "/placeholder.svg?height=60&width=60",
    questions: "95+ questions",
    categories: ["Software Developer", "UX Designer", "Product Manager"],
  },
  {
    company: "Microsoft",
    logo: "/placeholder.svg?height=60&width=60",
    questions: "75+ questions",
    categories: ["Software Engineer", "Program Manager", "Data Engineer"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Image
                src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                alt="Naukri Logo"
                width={100}
                height={32}
                className="h-8 w-auto"
              />
              <nav className="hidden md:flex items-center gap-6">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-[#4A90E2] flex items-center"
                    >
                      Jobs
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          Popular Categories
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <Link href="#" className="hover:text-[#4A90E2]">
                            IT Jobs
                          </Link>
                          <Link href="#" className="hover:text-[#4A90E2]">
                            Sales Jobs
                          </Link>
                          <Link href="#" className="hover:text-[#4A90E2]">
                            Marketing Jobs
                          </Link>
                          <Link href="#" className="hover:text-[#4A90E2]">
                            Data Science Jobs
                          </Link>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <Link
                          href="#"
                          className="text-sm text-[#4A90E2] hover:underline"
                        >
                          View all categories →
                        </Link>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-[#4A90E2] flex items-center"
                    >
                      Companies
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          Browse Companies
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <Link href="#" className="hover:text-[#4A90E2]">
                            Top Companies
                          </Link>
                          <Link href="#" className="hover:text-[#4A90E2]">
                            MNC Companies
                          </Link>
                          <Link href="#" className="hover:text-[#4A90E2]">
                            Startup Companies
                          </Link>
                          <Link href="#" className="hover:text-[#4A90E2]">
                            Featured Companies
                          </Link>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <Link
                          href="#"
                          className="text-sm text-[#4A90E2] hover:underline"
                        >
                          View all companies →
                        </Link>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link
                      href="#"
                      className="text-sm text-gray-600 hover:text-[#4A90E2] flex items-center"
                    >
                      Services
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Link>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold">
                          Premium Services
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <Link href="#" className="hover:text-[#4A90E2]">
                            Resume Writing
                          </Link>
                          <Link href="#" className="hover:text-[#4A90E2]">
                            Priority Applicant
                          </Link>
                          <Link href="#" className="hover:text-[#4A90E2]">
                            Career Booster
                          </Link>
                          <Link href="#" className="hover:text-[#4A90E2]">
                            LinkedIn Profile
                          </Link>
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <Link
                          href="#"
                          className="text-sm text-[#4A90E2] hover:underline"
                        >
                          View all services →
                        </Link>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
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
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hidden md:flex text-sm font-normal text-gray-600 hover:text-gray-900"
                  >
                    For employers
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">
                        Hiring Solutions
                      </h4>
                      <div className="grid gap-2 text-sm">
                        <Link href="#" className="hover:text-[#4A90E2]">
                          Post a Job
                        </Link>
                        <Link href="#" className="hover:text-[#4A90E2]">
                          Browse Candidates
                        </Link>
                        <Link href="#" className="hover:text-[#4A90E2]">
                          Recruitment Software
                        </Link>
                      </div>
                    </div>
                    <Separator />
                    <Link
                      href="#"
                      className="text-sm text-[#4A90E2] hover:underline"
                    >
                      Contact sales →
                    </Link>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-white py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50" />
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Find your dream job now
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                5 lakh+ jobs for you to explore
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-4">
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
                          <SelectValue placeholder="Experience" />
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
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Resume Banner */}
        <section className="max-w-7xl mx-auto px-4 -mt-6 mb-12">
          <Card className="bg-gradient-to-r from-[#00A5A7] to-[#00B7B7] border-none overflow-hidden">
            <CardContent className="flex items-center justify-between p-8">
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  Need help with your resume?
                </h3>
                <p className="opacity-90 mb-6 text-lg">
                  Get experts to build your resume from scratch
                </p>
                <Button className="bg-white text-[#00A5A7] hover:bg-gray-100 hover:text-[#00A5A7]">
                  View details
                </Button>
              </div>
              <div className="hidden md:block relative">
                <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#00B7B7] rounded-full opacity-20" />
                <Image
                  src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                  alt="Resume"
                  width={200}
                  height={200}
                  className="relative z-10"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Job Categories */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {jobCategories.map((category) => (
              <Card
                key={category.label}
                className="hover:border-[#4A90E2] transition-colors group cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <category.icon className="h-6 w-6 text-[#4A90E2]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {category.label}
                      </h3>
                      <p className="text-sm text-gray-500">{category.count}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Top Companies */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top companies hiring now</h2>
            <Button variant="ghost" className="text-[#4A90E2]">
              View all companies →
            </Button>
          </div>
          <Tabs defaultValue="mncs" className="space-y-6">
            <TabsList className="bg-transparent border-b h-auto p-0 space-x-6">
              <TabsTrigger
                value="mncs"
                className="bg-transparent border-b-2 rounded-none px-0 pb-2 data-[state=active]:border-[#4A90E2] data-[state=active]:text-[#4A90E2]"
              >
                MNCs
              </TabsTrigger>
              <TabsTrigger
                value="internet"
                className="bg-transparent border-b-2 rounded-none px-0 pb-2 data-[state=active]:border-[#4A90E2] data-[state=active]:text-[#4A90E2]"
              >
                Internet
              </TabsTrigger>
              <TabsTrigger
                value="manufacturing"
                className="bg-transparent border-b-2 rounded-none px-0 pb-2 data-[state=active]:border-[#4A90E2] data-[state=active]:text-[#4A90E2]"
              >
                Manufacturing
              </TabsTrigger>
            </TabsList>
            {Object.entries(topCompanies).map(([key, companies]) => (
              <TabsContent key={key} value={key} className="mt-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {companies.map((company) => (
                    <Card
                      key={company.name}
                      className="hover:border-[#4A90E2] transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center text-center gap-3">
                          <Image
                            src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                            alt={company.name}
                            width={80}
                            height={80}
                            className="rounded-lg"
                          />
                          <div>
                            <h3 className="font-medium text-gray-900 group-hover:text-[#4A90E2] transition-colors">
                              {company.name}
                            </h3>
                            <div className="flex items-center justify-center gap-1 mt-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">
                                {company.rating}
                              </span>
                              <span className="text-xs text-gray-500">
                                ({company.reviews})
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Featured Companies */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Featured companies actively hiring
            </h2>
            <Button variant="ghost" className="text-[#4A90E2]">
              View all companies →
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredCompanies.map((company) => (
              <Card
                key={company.name}
                className="group hover:border-[#4A90E2] transition-colors cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Image
                      src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                      alt={company.name}
                      width={120}
                      height={120}
                      className="rounded-xl"
                    />
                    <div>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-[#4A90E2] transition-colors">
                        {company.name}
                      </h3>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {company.rating}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({company.reviews})
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {company.description}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {company.locations.map((location) => (
                          <Badge
                            key={location}
                            variant="secondary"
                            className="text-xs"
                          >
                            {location}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        {company.employees}
                      </p>
                      <Button className="w-full bg-white text-[#4A90E2] border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white group-hover:bg-[#4A90E2] group-hover:text-white transition-colors">
                        {company.openings} jobs
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Career Platform */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-none overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-lg">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Introducing a career platform for college students & fresh
                    grads
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Discover opportunities tailored for your career stage
                  </p>
                  <Button className="bg-[#4A90E2] hover:bg-[#357ABD] text-white">
                    Explore now
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full blur-3xl opacity-30" />
                  <Image
                    src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                    alt="Career Illustration"
                    width={300}
                    height={300}
                    className="relative z-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interview Questions */}
        <section className="max-w-7xl mx-auto px-4 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Interview questions by company
            </h2>
            <Button variant="ghost" className="text-[#4A90E2]">
              View all →
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interviewQuestions.map((company) => (
              <Card
                key={company.company}
                className="group hover:border-[#4A90E2] transition-colors cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                      alt={company.company}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold group-hover:text-[#4A90E2] transition-colors">
                        {company.company}
                      </h3>
                      <p className="text-sm text-[#4A90E2] font-medium mb-2">
                        {company.questions}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {company.categories.map((category) => (
                          <Badge
                            key={category}
                            variant="secondary"
                            className="text-xs"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mobile App Section */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold mb-4">
                  10M+ users are on the Naukri app
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Get real-time job updates & more!
                </p>
                <div className="flex items-start gap-8">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <Image
                      src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                      alt="QR Code"
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                  </div>
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
              <div className="relative w-72 h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full blur-3xl opacity-30" />
                <Image
                  src="https://th.bing.com/th/id/OIP.yub1-dnal2da2DVl1SreMAHaHa?rs=1&pid=ImgDetMain"
                  alt="Mobile App"
                  fill
                  className="object-contain relative z-10"
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
