import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" flex justify-center space-x-4 border-b-2 border-gray-200 p-4">
          <Link href={"/Design1"}>Design1</Link>
          <Link href={"/Design2"}>Design2</Link>
          <Link href={"/Design3"}>Design3</Link>
          <Link href={"/Design4"}>Design4</Link>
          <Link href={"/Design5"}>Design5</Link>
          <Link href={"/Design6"}>Design6</Link>
          <Link href={"/Design7"}>Design7</Link>
          <Link href={"/Design8"}>Design8</Link>
          <Link href={"/Design9"}>Design9</Link>
          <Link href={"/Design9"}>Design9</Link>
          <Link href={"/Home"}>Design10</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
