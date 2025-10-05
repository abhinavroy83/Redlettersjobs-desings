"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative bg-gray-100"
      // style={{
      //   backgroundImage:
      //     "url('https://res.cloudinary.com/druohnmyv/image/upload/v1752743700/people-working-media-field-with-tablet-computer_23-2148901118_bfn4yq.jpg')",
      // }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-red-800/40 to-transparent backdrop-blur-sm"></div> */}

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
          <p className="text-gray-600 text-sm mt-1">
            Sign in to continue your faith-driven journey
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <Input
            type="email"
            placeholder="Email address"
            className="bg-white/70"
          />

          {/* Password */}
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="text-red-700 font-medium hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign in Button */}
          <Button
            type="submit"
            className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold tracking-wide shadow-md"
          >
            SIGN IN
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="text-xs text-gray-500">or continue with</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Social Sign-ins */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {/* Google */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-5 py-2.5 rounded-xl bg-white/80 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-md"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-gray-700 font-sm">Google</span>
            </motion.button>

            {/* Facebook */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-5 py-2.5 rounded-xl bg-white/80 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-md"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              <span className="text-gray-700 font-sm">Facebook</span>
            </motion.button>
          </motion.div>

          {/* Footer Links */}
          <div className="text-center text-sm text-gray-700 space-y-1 mt-4">
            <p>
              Don’t have an account?{" "}
              <a
                href="/Signup"
                className="text-red-700 font-medium hover:underline"
              >
                Create now
              </a>
            </p>
            {/* <p>
              Have a RedLetterJobs Card?{" "}
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
