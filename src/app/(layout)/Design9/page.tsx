"use client";

import { useState } from "react";
import {
  Search,
  Upload,
  Briefcase,
  MapPin,
  Calendar,
  ChevronRight,
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
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    title: "Youth & Young Adult Pastor",
    church: "Vineyard Maryville",
    location: "Maryville, Tennessee",
    date: "13 Sep 2024",
    type: "FULL TIME",
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    title: "Youth Ministry Director",
    church: "Mercy Vineyard Church",
    location: "Minneapolis, Minnesota",
    date: "13 Sep 2024",
    type: "PART TIME",
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    title: "Youth and Young Adults Pastor / Director",
    church: "Miami Vineyard Community Church",
    location: "Miami, Florida",
    date: "13 Sep 2024",
    type: "FULL TIME",
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    title: "Lead Pastor",
    church: "Temple Baptist Church in Swan River",
    location: "Swan River, Manitoba",
    date: "12 Sep 2024",
    type: "FULL TIME",
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    title: "Pastor/Minister",
    church: "Hopewell Associate Reformed Presbyterian Church",
    location: "Covington, Georgia",
    date: "12 Sep 2024",
    type: "FULL TIME",
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    title: "Senior Pastor",
    church: "Evergreen Church in Sevierville",
    location: "Sevierville, Tennessee",
    date: "12 Sep 2024",
    type: "FULL TIME",
    logo: "/placeholder.svg?height=50&width=50",
  },
  {
    title: "Youth Pastor",
    church: "Joy Christian Fellowship",
    location: "Englewood, New Jersey",
    date: "12 Sep 2024",
    type: "PART TIME",
    logo: "/placeholder.svg?height=50&width=50",
  },
];

const popularCategories = [
  { name: "Pastor / Senior Pastor", icon: "🙏", count: 180 },
  { name: "Children's Ministry", icon: "👨‍👩‍👧‍👦", count: 58 },
  { name: "Youth & Teen Ministry", icon: "🎉", count: 151 },
  { name: "Music & Worship Ministries", icon: "🎵", count: 89 },
  { name: "Associate Pastor", icon: "👥", count: 214 },
  { name: "Family Ministry", icon: "❤️", count: 24 },
  { name: "Discipleship Ministry", icon: "📚", count: 111 },
  { name: "Adult Ministry", icon: "🧑‍🤝‍🧑", count: 12 },
];

const denominations = [
  { name: "Baptist - SBC", count: 64 },
  { name: "Baptist", count: 20 },
  { name: "Presbyterian - ECO", count: 14 },
  { name: "Presbyterian - EPC", count: 11 },
  { name: "Anglican", count: 6 },
  { name: "Non - Denominational", count: 39 },
  { name: "Christian Church", count: 16 },
  { name: "Pentecostal", count: 13 },
  { name: "Episcopal", count: 11 },
  { name: "Church of Christ", count: 4 },
  { name: "Presbyterian - PCA", count: 35 },
  { name: "Christian Reformed", count: 15 },
  { name: "Presbyterian", count: 12 },
  { name: "Vineyard", count: 9 },
  { name: "Independent", count: 4 },
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Red Letter Jobs Logo"
              className="h-10 w-10 mr-2"
            />
            <span className="text-2xl font-bold text-gray-900">
              Red Letter Jobs
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              HOME
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              FIND JOBS
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              POST JOBS
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              PRICING
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              BLOG
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              FAQ'S
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              CONTACT
            </a>
          </nav>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Hi Jobseeker
          </a>
        </div>
      </header>

      <main>
        <div className="relative bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="/placeholder.svg?height=600&width=1200"
              alt="Church interior"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl text-center">
              Christian job search with a deeper sense of purpose!
            </h1>
            <div className="mt-10 max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="job-title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Job Title, Church, or Organization
                    </label>
                    <input
                      type="text"
                      id="job-title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. Pastor, Youth Minister"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      City, State or Country
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="e.g. New York, NY"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Job Category
                    </label>
                    <select
                      id="category"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select a category</option>
                      <option value="pastor">Pastor</option>
                      <option value="youth">Youth Ministry</option>
                      <option value="worship">Worship</option>
                    </select>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Search Jobs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center space-x-4 mb-12">
            <button className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Upload className="w-5 h-5 mr-2" />
              Upload Your Resume
            </button>
            <button className="flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <Briefcase className="w-5 h-5 mr-2" />
              Hiring? Post a job
            </button>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            RECENT CHURCH & PASTOR JOB OPPORTUNITIES
          </h2>
          <p className="text-gray-600 mb-8 text-center italic">
            "Go ye therefore, and teach all nations, baptizing them in the name
            of the Father, and of the Son, and of the Holy Ghost."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex items-start space-x-4 hover:shadow-lg transition duration-300"
              >
                <img
                  src={job.logo}
                  alt={`${job.church} logo`}
                  className="w-12 h-12 rounded-full flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-blue-600 mb-1">{job.church}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{job.date}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        job.type === "FULL TIME"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {job.type}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              BROWSE ALL JOBS
            </button>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-20 mb-6">
            POPULAR CHURCH JOBS & PASTOR JOBS
          </h2>
          <p className="text-gray-600 mb-8 text-center italic">
            "And he gave some, apostles; and some, prophets; and some,
            evangelists; and some, pastors and teachers."
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {popularCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition duration-300"
              >
                <span className="text-4xl mb-4 block">{category.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.count} Opportunities</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              BROWSE ALL CATEGORIES
            </button>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-20 mb-6">
            FIND BY DENOMINATION/LOCATION
          </h2>
          <p className="text-gray-600 mb-8">
            Candidates can find your job by Denomination/Location.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {denominations.map((denomination, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
              >
                <span className="text-gray-900">{denomination.name}</span>
                <span className="text-gray-600">({denomination.count})</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              BROWSE ALL DENOMINATIONS
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Red Letter Jobs Logo"
                className="h-10 w-10 mb-4"
              />
              <p className="text-sm mb-4">
                Red Letter Jobs creates and delivers the best hiring and job
                search tools for connecting people of faith with ministry jobs.
                Red Letter Jobs strives to equip churches and Christian
                organizations to hire the best candidates and job seekers to
                find meaningful employment in realizing their call.
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                GET STARTED
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    Terms Of Use
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Latest Tweets</h3>
              <p className="text-sm">No Tweets Found</p>
              <a href="#" className="text-blue-400 hover:underline">
                @RedLetterJobs
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              Red Letter Jobs © 2024. All Rights Reserved
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
