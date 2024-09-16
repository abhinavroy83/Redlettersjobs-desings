'use client'

import { useState } from 'react'
import { Search, Upload, Briefcase, ChevronDown } from 'lucide-react'
import Image from 'next/image'

const jobListings = [
  { title: "Assistant Pastor of Youth and Evangelism", church: "Community West Church", location: "Herndon, Virginia", date: "13 Sep 2024", type: "FULL TIME" },
  { title: "Youth & Young Adult Pastor", church: "Vineyard Maryville", location: "Maryville, Tennessee", date: "13 Sep 2024", type: "FULL TIME" },
  { title: "Youth Ministry Director", church: "Mercy Vineyard Church", location: "Minneapolis, Minnesota", date: "13 Sep 2024", type: "PART TIME" },
  { title: "Youth and Young Adults Pastor / Director", church: "Miami Vineyard Community Church", location: "Miami, Florida", date: "13 Sep 2024", type: "FULL TIME" },
  { title: "Lead Pastor", church: "Temple Baptist Church in Swan River", location: "Swan River, Manitoba", date: "12 Sep 2024", type: "FULL TIME" },
  { title: "Pastor/Minister", church: "Hopewell Associate Reformed Presbyterian Church", location: "Covington, Georgia", date: "12 Sep 2024", type: "FULL TIME" },
  { title: "Senior Pastor", church: "Evergreen Church in Sevierville", location: "Sevierville, Tennessee", date: "12 Sep 2024", type: "FULL TIME" },
  { title: "Youth Pastor", church: "Joy Christian Fellowship", location: "Englewood, New Jersey", date: "12 Sep 2024", type: "PART TIME" },
]

const popularCategories = [
  { name: "Pastor / Senior Pastor", icon: "👨‍🏫", count: 180 },
  { name: "Children's Ministry", icon: "👨‍👩‍👧‍👦", count: 58 },
  { name: "Youth & Teen Ministry", icon: "🎉", count: 151 },
  { name: "Music & Worship Ministries", icon: "🎵", count: 89 },
  { name: "Associate Pastor", icon: "👥", count: 214 },
  { name: "Family Ministry", icon: "👨‍👩‍👧‍👦", count: 24 },
  { name: "Discipleship Ministry", icon: "🤝", count: 111 },
  { name: "Adult Ministry", icon: "👨‍👩‍👧‍👦", count: 12 },
]

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
]

export function HomePageComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/placeholder.svg?height=40&width=40" alt="Red Letter Jobs Logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl font-bold text-gray-900">Red Letter Jobs</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">HOME</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">FIND JOBS</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">POST JOBS</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">PRICING</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">BLOG</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">FAQ'S</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">CONTACT</a>
          </nav>
          <a href="#" className="text-blue-600 hover:text-blue-800">Hi Jobseeker</a>
        </div>
      </header>

      <main>
        <div className="relative bg-gray-900 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block">Christian job search with a</span>
                    <span className="block text-blue-500">deeper sense of purpose!</span>
                  </h1>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <input
                        type="text"
                        placeholder="Job Title, Church, or Organization"
                        className="w-full px-5 py-3 border border-transparent text-base font-medium rounded-l-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <input
                        type="text"
                        placeholder="City, State or Country"
                        className="w-full px-5 py-3 border border-transparent text-base font-medium text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <select
                        className="w-full px-5 py-3 border border-transparent text-base font-medium rounded-r-md text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">Job Category</option>
                        <option value="pastor">Pastor</option>
                        <option value="youth">Youth Ministry</option>
                        <option value="worship">Worship</option>
                      </select>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                        <Search className="w-5 h-5 mr-2" />
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="/placeholder.svg?height=600&width=800"
              alt="Christian community"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center space-x-4 mb-8">
            <button className="flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <Upload className="w-5 h-5 mr-2" />
              Upload Your Resume
            </button>
            <button className="flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              <Briefcase className="w-5 h-5 mr-2" />
              Hiring? Post a job
            </button>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">RECENT CHURCH & PASTOR JOB OPPORTUNITIES</h2>
          <p className="text-gray-600 mb-8 text-center italic">
            "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost."
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {jobListings.map((job, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-blue-600 mb-1">{job.church}</p>
                  <p className="text-gray-600 mb-2">{job.location} | {job.date}</p>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${job.type === 'FULL TIME' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {job.type}
                  </span>
                </div>
                <button className="text-blue-600 hover:text-blue-800">
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              BROWSE ALL JOBS
            </button>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">POPULAR CHURCH JOBS & PASTOR JOBS</h2>
          <p className="text-gray-600 mb-8 text-center italic">
            "And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers."
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {popularCategories.map((category, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
                <span className="text-4xl mb-2">{category.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-600">{category.count} Opportunities</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              BROWSE ALL CATEGORIES
            </button>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">FIND BY DENOMINATION/LOCATION</h2>
          <p className="text-gray-600 mb-8">Candidates can find your job by Denomination/Location.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {denominations.map((denomination, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-900">{denomination.name}</span>
                <span className="text-gray-600">({denomination.count})</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              BROWSE ALL DENOMINATIONS
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image src="/placeholder.svg?height=40&width=40" alt="Red Letter Jobs Logo" className="h-10 w-10 mb-4" />
              <p className="text-sm mb-4">
                Red Letter Jobs creates and delivers the best hiring and job search tools for connecting people of faith with ministry jobs.
                Red Letter Jobs strives to equip churches and Christian organizations to hire the best candidates and job seekers to find meaningful employment in realizing their call.
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                GET STARTED
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-400">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Refund Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Terms Of Use</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Latest Tweets</h3>
              <p className="text-sm">No Tweets Found</p>
              <a href="#" className="text-blue-400 hover:underline">@RedLetterJobs</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex justify-between items-center">
            <p className="text-sm">Red Letter Jobs © 2024. All Rights Reserved</p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-blue-400">Terms</a>
              <a href="#" className="text-sm hover:text-blue-400">Privacy</a>
              <a href="#" className="text-sm hover:text-blue-400">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}