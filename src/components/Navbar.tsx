'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <nav className="border-b border-[#00879E]/20 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-[#00879E] rounded-full"></div>
              <span className="ml-2 text-xl font-semibold text-[#00879E]">Trillex</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link 
              href="/about"
              className="text-gray-600 hover:text-[#00879E] px-3 py-2 text-sm font-medium transition-colors"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-600 group-hover:text-[#00879E] px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1"
                aria-expanded={isServicesOpen}
              >
                Services
                <svg
                  className="w-4 h-4 transform transition-transform duration-300 ease-in-out group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2 mt-2 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                  <Link
                    href="/services/training"
                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[#00879E] hover:bg-gray-50 transition-colors"
                  >
                    Training
                  </Link>
                  <Link
                    href="/services/iso"
                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[#00879E] hover:bg-gray-50 transition-colors"
                  >
                    ISO 9001
                  </Link>
                  <Link
                    href="/services/strategic-consulting"
                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[#00879E] hover:bg-gray-50 transition-colors"
                  >
                    Strategic Consulting Services
                  </Link>
                  <Link
                    href="/services/esg-consulting"
                    className="block px-4 py-3 text-sm text-gray-700 hover:text-[#00879E] hover:bg-gray-50 transition-colors"
                  >
                    ESG Consulting Services
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/faq"
              className="text-gray-600 hover:text-[#00879E] px-3 py-2 text-sm font-medium transition-colors"
            >
              FAQ
            </Link>
            <Link 
              href="/contact"
              className="text-gray-600 hover:text-[#00879E] px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#00879E] hover:text-[#00879E]/80 p-2"
              aria-label="Open menu"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMobileMenuOpen 
                    ? "M6 18L18 6M6 6l12 12" 
                    : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`sm:hidden transition-all duration-200 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/about"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50 rounded-md"
          >
            About Us
          </Link>
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50 rounded-md flex items-center justify-between"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div 
              className={`transition-all duration-200 ease-in-out ${
                isServicesOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <Link
                href="/services/training"
                className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50"
              >
                Training
              </Link>
              <Link
                href="/services/iso"
                className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50"
              >
                ISO 9001
              </Link>
              <Link
                href="/services/strategic-consulting"
                className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50"
              >
                Strategic Consulting Services
              </Link>
              <Link
                href="/services/esg-consulting"
                className="block px-6 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50"
              >
                ESG Consulting Services
              </Link>
            </div>
          </div>
          <Link
            href="/faq"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50 rounded-md"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  )
} 