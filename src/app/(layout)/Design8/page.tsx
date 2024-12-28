"use client";

import { useState } from "react";
import {
  Search,
  Upload,
  Briefcase,
  MapPin,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

const jobListings = [
  {
    title: "Assistant Pastor of Youth and Evangelism",
    church: "Community West Church",
    location: "Herndon, Virginia",
    date: "13 Sep 2024",
    type: "FULL TIME",
  },
  {
    title: "Youth & Young Adult Pastor",
    church: "Vineyard Maryville",
    location: "Maryville, Tennessee",
    date: "13 Sep 2024",
    type: "FULL TIME",
  },
  {
    title: "Youth Ministry Director",
    church: "Mercy Vineyard Church",
    location: "Minneapolis, Minnesota",
    date: "13 Sep 2024",
    type: "PART TIME",
  },
  {
    title: "Youth and Young Adults Pastor / Director",
    church: "Miami Vineyard Community Church",
    location: "Miami, Florida",
    date: "13 Sep 2024",
    type: "FULL TIME",
  },
  {
    title: "Lead Pastor",
    church: "Temple Baptist Church in Swan River",
    location: "Swan River, Manitoba",
    date: "12 Sep 2024",
    type: "FULL TIME",
  },
  {
    title: "Pastor/Minister",
    church: "Hopewell Associate Reformed Presbyterian Church",
    location: "Covington, Georgia",
    date: "12 Sep 2024",
    type: "FULL TIME",
  },
];

const popularCategories = [
  {
    name: "Pastor / Senior Pastor",
    icon: "🙏",
    count: 180,
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Children's Ministry",
    icon: "👨‍👩‍👧‍👦",
    count: 58,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Youth & Teen Ministry",
    icon: "🎉",
    count: 151,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Music & Worship Ministries",
    icon: "🎵",
    count: 89,
    color: "bg-purple-100 text-purple-600",
  },
  {
    name: "Associate Pastor",
    icon: "👥",
    count: 214,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Family Ministry",
    icon: "❤️",
    count: 24,
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Discipleship Ministry",
    icon: "📚",
    count: 111,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Adult Ministry",
    icon: "🧑‍🤝‍🧑",
    count: 12,
    color: "bg-orange-100 text-orange-600",
  },
];

const denominations = [
  { name: "Baptist", color: "bg-red-500" },
  { name: "Presbyterian", color: "bg-blue-500" },
  { name: "Methodist", color: "bg-green-500" },
  { name: "Lutheran", color: "bg-yellow-500" },
  { name: "Episcopal", color: "bg-purple-500" },
  { name: "Pentecostal", color: "bg-pink-500" },
  { name: "Non-Denominational", color: "bg-indigo-500" },
  { name: "Catholic", color: "bg-orange-500" },
  { name: "Orthodox", color: "bg-teal-500" },
  { name: "Evangelical", color: "bg-cyan-500" },
  { name: "Reformed", color: "bg-lime-500" },
  { name: "Charismatic", color: "bg-amber-500" },
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Red Letter Jobs Logo"
              className="mr-2"
              width={10} // Explicit width
              height={10} 
            />
            <span className="text-2xl font-bold text-red-600">
              Red Letter Jobs
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 font-medium"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 font-medium"
            >
              Post Jobs
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 font-medium"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 font-medium"
            >
              Contact
            </a>
          </nav>
          <a href="#" className="text-red-600 hover:text-red-800 font-medium">
            Sign In
          </a>
        </div>
      </header>

      <main>
        <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover opacity-20"
              src="/placeholder.svg?height=600&width=1200"
              alt="Church interior"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
              Christian job search with a deeper sense of purpose
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100 text-center">
              Find your calling in ministry and make a difference in the world
              through faith-based employment opportunities.
            </p>
            <div className="mt-10">
              <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden md:max-w-3xl shadow-lg">
                <div className="md:flex">
                  <div className="p-3 md:w-1/3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Job Title or Keywords"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="p-3 md:w-1/3">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Location"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-red-500 focus:border-red-500"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                      <MapPin className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="p-3 md:w-1/3">
                    <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                      Search Jobs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center space-x-4 mb-12">
            <button className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out">
              <Upload className="w-5 h-5 mr-2" />
              Upload Your Resume
            </button>
            <button className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out">
              <Briefcase className="w-5 h-5 mr-2" />
              Post a Job
            </button>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Recent Church & Pastor Job Opportunities
          </h2>
          <p className="text-gray-600 mb-8 text-center italic">
            "Go ye therefore, and teach all nations, baptizing them in the name
            of the Father, and of the Son, and of the Holy Ghost."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 border-l-4 border-red-500"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-red-600 mb-1">{job.church}</p>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{job.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      job.type === "FULL TIME"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {job.type}
                  </span>
                  <button className="text-red-600 hover:text-red-800 transition duration-150 ease-in-out">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
              Browse All Jobs
            </button>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-20 mb-6 text-center">
            Popular Church Jobs & Pastor Jobs
          </h2>
          <p className="text-gray-600 mb-8 text-center italic">
            "And he gave some, apostles; and some, prophets; and some,
            evangelists; and some, pastors and teachers."
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {popularCategories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} rounded-lg p-6 text-center hover:shadow-lg transition duration-300`}
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-sm">{category.count} Opportunities</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
              Browse All Categories
            </button>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-20 mb-6 text-center">
            Find by Denomination
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Explore opportunities across various Christian denominations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {denominations.map((denomination, index) => (
              <a
                key={index}
                href="#"
                className={`${denomination.color} text-white rounded-lg p-4 text-center hover:opacity-90 transition duration-300`}
              >
                {denomination.name}
              </a>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
              Browse All Denominations
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Red Letter Jobs Logo"
                className="mb-4"
                width={10} // Explicit width
                height={10}
              />
              <p className="text-sm mb-4">
                Red Letter Jobs creates and delivers the best hiring and job
                search tools for connecting people of faith with ministry jobs.
                We strive to equip churches and Christian organizations to hire
                the best candidates and help job seekers find meaningful
                employment in realizing their call.
              </p>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
                Get Started
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition duration-150 ease-in-out"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition duration-150 ease-in-out"
                  >
                    Find Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition duration-150 ease-in-out"
                  >
                    Post a Job
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition duration-150 ease-in-out"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition duration-150 ease-in-out"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition duration-150 ease-in-out"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition duration-150 ease-in-out"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition duration-150 ease-in-out"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-red-400 transition duration-150 ease-in-out"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              Red Letter Jobs © 2024. All Rights Reserved
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
