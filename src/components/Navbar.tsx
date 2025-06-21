'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { websiteContent } from '@/constants'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()

  return (
    <nav className="border-b border-[#00879E]/20 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-xl font-semibold text-[#00879E]">Trillex</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link 
              href="/about"
              className="text-gray-600 hover:text-[#00879E] px-3 py-2 text-sm font-medium transition-colors"
            >
              {websiteContent.navbar.aboutUs[language]}
            </Link>

            <Link 
              href="/services"
              className="text-gray-600 hover:text-[#00879E] px-3 py-2 text-sm font-medium transition-colors"
            >
              {websiteContent.navbar.services[language]}
            </Link>

            <Link 
              href="/faq"
              className="text-gray-600 hover:text-[#00879E] px-3 py-2 text-sm font-medium transition-colors"
            >
              {websiteContent.navbar.faq[language]}
            </Link>

            <Link 
              href="/news"
              className="text-gray-600 hover:text-[#00879E] px-3 py-2 text-sm font-medium transition-colors"
            >
              {websiteContent.navbar.news[language]}
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors"
              >
                {websiteContent.navbar.contactUs[language]}
              </Link>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1.5 text-sm font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors"
              >
                {language === 'en' ? 'MN' : 'EN'}
              </button>
            </div>
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
            {websiteContent.navbar.aboutUs[language]}
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50 rounded-md"
          >
            {websiteContent.navbar.services[language]}
          </Link>
          <Link
            href="/faq"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50 rounded-md"
          >
            {websiteContent.navbar.faq[language]}
          </Link>
          <Link
            href="/news"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#00879E] hover:bg-gray-50 rounded-md"
          >
            {websiteContent.navbar.news[language]}
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-md hover:bg-gray-100 transition-colors"
            >
              {websiteContent.navbar.contactUs[language]}
            </Link>
            <button
              onClick={toggleLanguage}
              className="w-full justify-center px-4 py-2 rounded-lg border border-[#3C3F43] bg-[#282A2E] text-white flex items-center gap-2 transition-colors hover:bg-[#383A3E]"
            >
              {language === 'en' ? 'MN' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 