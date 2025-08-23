"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white border-gray-100 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Mobile menu button and Logo */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Logo - centered on mobile, left-aligned on desktop */}
            <div className="flex items-center justify-center md:justify-start">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={80}
                  height={32}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="md:gap-10 hidden md:flex md:items-center md:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/discover"
                className="text-gray-700 hover:text-gray-900"
              >
                Discover
              </Link>
              <Link
                href="/for-hosts"
                className="text-gray-700 hover:text-gray-900"
              >
                For Hosts
              </Link>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-8">
              <button className="px-4 py-2 text-sm rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                Host your Event
              </button>
              <button className="px-4 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/discover"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Discover
                </Link>
                <Link
                  href="/for-hosts"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  For Hosts
                </Link>
                <div className="px-3 py-3 space-y-2">
                  <button className="w-full px-4 py-2 text-sm rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                    Host your Event
                  </button>
                  <button className="w-full px-4 py-2 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
