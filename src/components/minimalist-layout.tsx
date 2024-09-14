'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ArrowRight, Menu } from "lucide-react"

export function MinimalistLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src="/placeholder.svg?height=40&width=150" alt="Red Letter Jobs Logo" className="h-8" />
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Jobs", "Employers", "Resources", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex">Post a Job</Button>
            <Button variant="ghost" className="md:hidden"><Menu className="h-6 w-6" /></Button>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Calling in Christian Ministry</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Connect with churches and organizations seeking passionate individuals like you.</p>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-4 flex flex-col md:flex-row gap-4">
              <Input placeholder="Job title or keywords" className="flex-grow" />
              <Input placeholder="Location" className="flex-grow" />
              <Button size="lg" className="w-full md:w-auto"><Search className="mr-2 h-4 w-4" /> Search</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Explore Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Church Staff", count: 1234 },
                { title: "Non-Profit", count: 567 },
                { title: "Education", count: 890 },
                { title: "Missions", count: 345 },
                { title: "Worship", count: 678 },
                { title: "Youth Ministry", count: 901 }
              ].map((category) => (
                <Card key={category.title} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                      <p className="text-gray-600">{category.count} jobs</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-blue-600" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Featured Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Senior Pastor</h3>
                    <p className="text-gray-600 mb-4">First Baptist Church - Atlanta, GA</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Full Time</span>
                      <Button variant="outline">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg">View All Jobs</Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">For Employers</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Find the perfect candidates for your ministry positions</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button size="lg">Post a Job</Button>
              <Button size="lg" variant="outline">Search Resumes</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src="/placeholder.svg?height=40&width=150" alt="Red Letter Jobs Logo" className="h-8 mb-4" />
              <p className="text-sm mb-4">Connecting Christians with meaningful career opportunities in ministry and non-profit sectors.</p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white">
                    <img src={`/placeholder.svg?text=${social}&height=24&width=24`} alt={social} className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About Us', 'Contact', 'FAQ', 'Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}><a href="#" className="hover:underline">{link}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Subscribe</h3>
              <p className="text-sm mb-4">Get the latest job opportunities delivered to your inbox</p>
              <form className="flex flex-col gap-2">
                <Input placeholder="Your email" type="email" />
                <Button>Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
            <p>© 2024 Red Letter Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}