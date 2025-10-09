"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, MapPin, Building2, Clock, ArrowRight, Star, Users, Shield, Heart } from "lucide-react";
import { useState } from "react";

export default function JobBoardPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider text-blue-900">aaoewmu</div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#jobs" className="hover:text-blue-700 transition-colors">Jobs</a>
            <a href="#companies" className="hover:text-blue-700 transition-colors">Companies</a>
            <a href="#categories" className="hover:text-blue-700 transition-colors">Categories</a>
            <a href="#resources" className="hover:text-blue-700 transition-colors">Resources</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              Sign In
            </Button>
            <Button size="sm" className="bg-blue-900 hover:bg-blue-800 text-white">
              Post a Job
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Search Section */}
        <section className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Find Your Dream 
            <span className="text-blue-900"> Ministry Job</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Connecting churches and Christian organizations with qualified candidates
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-2 border border-gray-200"
          >
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, keywords, or companies..."
                  className="flex-1 outline-none text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-l border-gray-200">
                <MapPin className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Location, city, or state..."
                  className="flex-1 outline-none text-lg"
                />
              </div>
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg">
                Search Jobs
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Recently Posted Jobs Section */}
        <section id="jobs" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold text-gray-900">Recently Posted Jobs</h2>
              <div className="w-16 h-1 bg-blue-900"></div>
            </div>
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              View All Jobs <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Card 1 - Lifeway */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Senior Pastor</h3>
                      <p className="text-gray-600">Lifeway Church</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Nashville, TN</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="w-4 h-4" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Posted 2 days ago</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$75,000</span>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Job Card 2 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">C</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Worship Director</h3>
                      <p className="text-gray-600">Community Church</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Orlando, FL</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="w-4 h-4" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Posted 1 day ago</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$55,000</span>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Job Card 3 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">Y</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Youth Pastor</h3>
                      <p className="text-gray-600">Youth Ministry Inc</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Dallas, TX</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Building2 className="w-4 h-4" />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Posted 3 hours ago</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">$48,000</span>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white">
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Categories Section */}
        <section id="categories" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">POPULAR CATEGORIES</h2>
            <p className="text-gray-600 text-lg">Browse jobs by ministry focus area</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Pastoral", count: "234", color: "from-blue-500 to-blue-700" },
              { name: "Worship", count: "189", color: "from-green-500 to-green-700" },
              { name: "Youth", count: "156", color: "from-purple-500 to-purple-700" },
              { name: "Children", count: "143", color: "from-pink-500 to-pink-700" },
              { name: "Administration", count: "132", color: "from-orange-500 to-orange-700" },
              { name: "Missions", count: "98", color: "from-teal-500 to-teal-700" },
              { name: "Counseling", count: "87", color: "from-indigo-500 to-indigo-700" },
              { name: "Education", count: "76", color: "from-red-500 to-red-700" },
              { name: "Media", count: "65", color: "from-yellow-500 to-yellow-600" },
              { name: "Facilities", count: "54", color: "from-gray-500 to-gray-700" },
              { name: "Outreach", count: "43", color: "from-cyan-500 to-cyan-700" },
              { name: "Senior Care", count: "32", color: "from-amber-500 to-amber-700" },
            ].map((category, index) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{category.name[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} jobs</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Create Account CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to get started? Create an account.</h3>
            <p className="text-blue-100 mb-6">
              Join thousands of churches and candidates finding their perfect match through our platform.
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-white text-blue-900 hover:bg-gray-100 text-lg py-6">
                Sign Up Free
              </Button>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-900">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Consultation CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Get your free consultation</h3>
            <p className="text-green-100 mb-6">
              Speak with our ministry placement specialists about your specific needs and goals.
            </p>
            <div className="space-y-4">
              <Button className="w-full bg-white text-green-700 hover:bg-gray-100 text-lg py-6">
                Schedule Now
              </Button>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-green-700">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Why Churches Trust Us */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Churches Trust Us</h2>
            <p className="text-gray-600 text-lg">Trusted by thousands of churches nationwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Large Network</h3>
              <p className="text-gray-600">
                Access to thousands of qualified ministry professionals across all denominations and roles.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Candidates</h3>
              <p className="text-gray-600">
                All candidates are thoroughly vetted and reference-checked to ensure quality matches.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-purple-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Success</h3>
              <p className="text-gray-600">
                95% of churches find their ideal candidate within 90 days using our platform.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">aaoewmu</h3>
              <p className="text-gray-400">
                Connecting churches with qualified ministry professionals since 2015.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">For Job Seekers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Create Profile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Application Tips</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">For Churches</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Post a Job</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Browse Candidates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 aaoewmu Ministry Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}