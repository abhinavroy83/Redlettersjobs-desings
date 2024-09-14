'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Briefcase, Upload, PlusCircle } from 'lucide-react'

export function RedLetterJobdesing() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">RJ</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Red Letter Jobs</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {['Home', 'Find Jobs', 'Post Jobs', 'Pricing', 'Blog', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-red-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button className="hidden md:inline-flex">Sign In</Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-red-500 to-red-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Christian Job Search with a Deeper Sense of Purpose</h1>
            <p className="text-xl mb-8">Find your calling in ministry and faith-based organizations</p>
            <div className="bg-white rounded-lg p-4 shadow-lg max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input className="pl-10" placeholder="Job Title, Church, or Organization" />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input className="pl-10" placeholder="City, State or Country" />
                </div>
                <div className="flex-1">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Job Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pastor">Pastor</SelectItem>
                      <SelectItem value="youth">Youth Ministry</SelectItem>
                      <SelectItem value="music">Music Ministry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full md:w-auto">
                  <Search className="mr-2" />
                  Search
                </Button>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
              <Button variant="outline" className="bg-white text-red-600 hover:bg-red-50">
                <Upload className="mr-2" />
                Upload Resume
              </Button>
              <Button variant="outline" className="bg-white text-red-600 hover:bg-red-50">
                <PlusCircle className="mr-2" />
                Post a Job
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Recent Church & Pastor Job Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((job) => (
                <Card key={job} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="mr-2 text-red-600" />
                      <span>Youth Pastor</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Grace Community Church</p>
                    <p className="text-gray-500 text-sm">Los Angeles, CA</p>
                    <Button variant="outline" className="mt-4">Full Time</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button className="bg-red-600 hover:bg-red-700">Browse All Jobs</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Popular Church Jobs & Pastor Jobs</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Pastor / Senior Pastor', 'Children\'s Ministry', 'Youth & Teen Ministry', 'Music & Worship Ministries',
                'Associate Pastor', 'Family Ministry', 'Discipleship Ministry', 'Adult Ministry'].map((category, index) => (
                <Card key={category} className="hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-red-600">{index + 1}</span>
                    </div>
                    <p className="font-semibold text-gray-800">{category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button className="bg-red-600 hover:bg-red-700">Browse All Categories</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Find by Denomination/Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Denomination</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {['Baptist: SBC (64)', 'Baptist (20)', 'Presbyterian - ECO (14)', 'Presbyterian - EPC (11)', 'Anglican (8)'].map((item) => (
                      <li key={item} className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {['Non - Denominational (39)', 'Christian Church (16)', 'Pentecostal (13)', 'Episcopal (11)', 'Church of Christ (4)'].map((item) => (
                      <li key={item} className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-10">
              <Button className="bg-red-600 hover:bg-red-700">Browse All Denominations</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">RJ</span>
                </div>
                <span className="text-xl font-bold">Red Letter Jobs</span>
              </Link>
              <p className="text-gray-400">Connecting faith and careers for a higher purpose.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Find Jobs', 'Post a Job', 'Pricing', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {['Blog', 'FAQ', 'Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      {/* Replace with actual social media icons */}
                      <span>{social[0].toUpperCase()}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 Red Letter Jobs. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}