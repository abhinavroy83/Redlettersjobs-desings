"use client";
import { useEffect, useState } from "react";
import { Star, Phone, Mail, Globe } from "lucide-react";
import Image from "next/image";

const ColorfulStar = ({
  delay,
  x,
  y,
}: {
  delay: number;
  x: string;
  y: string;
}) => (
  <div
    className={`absolute ${x} ${y} transition-all duration-1000`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <Star
      className="h-4 w-4 text-yellow-500 animate-twinkle"
      fill="rgba(234, 179, 8, 0.3)"
    />
  </div>
);

const ContactInfo = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="flex items-center space-x-2 text-gray-600">
    {icon}
    <span className="text-sm">{text}</span>
  </div>
);

export default function RSMNavratriBannerWhiteContact() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-[600px] h-[600px] bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center justify-between text-center overflow-hidden relative">
      <div
        className={`absolute inset-0 bg-gradient-to-br from-orange-100 to-pink-100 opacity-30 transition-opacity duration-1000 ${
          animate ? "opacity-30" : "opacity-0"
        }`}
      />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full blur-3xl opacity-20 -translate-x-16 -translate-y-16" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-pink-200 to-purple-300 rounded-full blur-3xl opacity-20 translate-x-20 translate-y-20" />
      </div>

      {/* Stars */}
      <ColorfulStar delay={1000} x="top-12" y="left-16" />
      <ColorfulStar delay={1200} x="top-24" y="right-20" />
      <ColorfulStar delay={1400} x="bottom-16" y="left-24" />
      <ColorfulStar delay={1600} x="bottom-20" y="right-16" />

      <div className="flex justify-between items-start w-full z-10">
        <div
          className={`transition-all duration-1000 delay-500 ${
            animate ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="relative w-48 h-16 mb-4">
            <Image
              src="https://www.ramanship.com/img/RSM-LOGO-300X100.png"
              alt="Raman Ship Management Logo"
              layout="fill"
              objectFit="contain"
              // className="animate-pulse"
            />
          </div>
        </div>
        <div
          className={`text-right transition-all duration-1000 delay-700 ${
            animate ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
        >
          <ContactInfo
            icon={<Phone className="h-4 w-4" />}
            text="Tel: 02245001406"
          />
          <ContactInfo
            icon={<Mail className="h-4 w-4" />}
            text="Email: info@ramanship.com"
          />
          <ContactInfo
            icon={<Globe className="h-4 w-4" />}
            text="Web: www.ramanship.com"
          />
        </div>
      </div>

      <div
        className={`z-10 transition-all duration-1000 delay-900 ${
          animate
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-4 opacity-0 scale-95"
        }`}
      >
        <h1 className="text-6xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
          Happy Navratri
        </h1>
      </div>

      <div
        className={`space-y-6 max-w-md z-10 transition-all duration-1000 delay-1100 ${
          animate
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-4 opacity-0 scale-95"
        }`}
      >
        <p className="text-xl font-light leading-relaxed italic text-gray-700">
          "May Goddess Durga empower you with courage, wisdom, and strength to
          overcome all obstacles in life."
        </p>
        <p className="text-lg font-medium text-gray-800">
          May the vibrant colors of Navratri bring peace, prosperity, and joy to
          your life.
        </p>
      </div>

      <div
        className={`w-3/4 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent my-6 z-10 transition-all duration-1000 delay-1300 ${
          animate ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
      />

      <div
        className={`z-10 transition-all duration-1000 delay-1500 ${
          animate
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-4 opacity-0 scale-95"
        }`}
      >
        <p className="text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
          Lots of Happiness
        </p>
        <p className="text-lg mt-2 font-light text-gray-600">From</p>
        <p className="text-xl font-bold mt-1 tracking-wide text-gray-800">
          RAMAN SHIP MANAGEMENT INDIA PVT LTD 🙏
        </p>
      </div>
    </div>
  );
}
