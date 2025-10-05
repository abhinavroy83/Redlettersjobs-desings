"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-white/30"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-red-700 tracking-tight"
          >
            RedLetterJobs
          </motion.h1>
          <p className="text-gray-600 text-sm mt-1">Create your account to find faith-based careers</p>
        </div>

        <form className="space-y-4">
          {/* Name */}
          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="First name" className="bg-white/70" />
            <Input placeholder="Last name" className="bg-white/70" />
          </div>

          {/* Country / State / Postal */}
          <div className="grid grid-cols-3 gap-3">
            <Select>
              <SelectTrigger className="bg-white/70">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="in">India</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>

            <Input placeholder="State" className="bg-white/70" />
            <Input placeholder="Postal code" className="bg-white/70" />
          </div>

          {/* DOB */}
          <Input type="date" className="bg-white/70" />

          {/* Phone */}
          <div className="grid grid-cols-4 gap-3">
            <Select>
              <SelectTrigger className="bg-white/70">
                <SelectValue placeholder="+1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+1">+1</SelectItem>
                <SelectItem value="+91">+91</SelectItem>
                <SelectItem value="+44">+44</SelectItem>
              </SelectContent>
            </Select>
            <div className="col-span-3">
              <Input placeholder="Phone Number" className="bg-white/70" />
            </div>
          </div>

          {/* Property */}
          <Select>
            <SelectTrigger className="bg-white/70">
              <SelectValue placeholder="Where are you signing up from?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="church">Church</SelectItem>
              <SelectItem value="organization">Organization</SelectItem>
              <SelectItem value="individual">Individual</SelectItem>
            </SelectContent>
          </Select>

          {/* Email + Password */}
          <Input type="email" placeholder="Email address" className="bg-white/70" />

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              className="bg-white/70 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Agreement */}
          <div className="flex items-start gap-2 text-xs text-gray-700">
            <Checkbox id="agree" />
            <label htmlFor="agree">
              I agree to the{" "}
              <span className="text-red-700 font-medium cursor-pointer">Terms & Privacy Policy</span>.
            </label>
          </div>

          {/* CTA Button */}
          <Button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold tracking-wide shadow-md"
          >
            JOIN US
          </Button>

          <div className="text-center text-sm text-gray-700 space-y-1 mt-3">
            <p>
              Already have an account?{" "}
              <a href="Signin" className="text-red-700 font-medium hover:underline">
                Sign in
              </a>
            </p>
            {/* <p>
              Have a RedLetterJobs card but no online access?{" "}
              <a href="#" className="text-red-700 font-medium hover:underline">
                Activate Account
              </a>
            </p> */}
          </div>
        </form>
      </motion.div>
    </div>
  );
}
