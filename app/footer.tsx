"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">DeeBo!</h1>
        {/* Logo and Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 ">
          <div>
            <div className="max-w-md">
              <h3 className="text-lg mb-4">
                Stay informed about everything new?
              </h3>
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-gray-600 py-2 pr-12 text-white placeholder-gray-500 placeholder:text-4xl focus:outline-none focus:border-white"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  aria-label="Subscribe"
                >
                  <Image
                    src="/icons/arrowIcon.png"
                    alt="icon"
                    width={45}
                    height={45}
                    className="bg-[#276EF1] p-2 rounded-md"
                  />
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-2">
                We don&apos;t let spam, Read our Privacy Policy if you&apos;re
                not convinced.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:justify-self-center">
            <h4 className="text-lg font-semibold mb-4">SOCIALS</h4>
            <nav className="space-y-2">
              <Link
                href="https://instagram.com"
                className="block hover:text-gray-300"
              >
                Instagram
              </Link>
              <Link
                href="https://facebook.com"
                className="block hover:text-gray-300"
              >
                Facebook
              </Link>
              <Link
                href="https://twitter.com"
                className="block hover:text-gray-300"
              >
                Twitter
              </Link>
              <Link
                href="https://linkedin.com"
                className="block hover:text-gray-300"
              >
                LinkedIn
              </Link>
              <Link
                href="https://snapchat.com"
                className="block hover:text-gray-300"
              >
                Snapchat
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">©2025 Deebo!</p>
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/faq" className="hover:text-gray-300">
              FAQ&apos;s
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
