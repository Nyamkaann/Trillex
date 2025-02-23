'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ServiceSection {
  isOpen: boolean
  title: string
  content: string
  icon?: string
}

export default function Services() {
  const [sections, setSections] = useState<ServiceSection[]>([
    {
      isOpen: false,
      title: "Training",
      content: `Our comprehensive training programs cover:
      • Financial Management
      • Risk Assessment
      • Business Development
      • Leadership Skills
      • Digital Transformation`,
      icon: "/icons/training.svg"
    },
    {
      isOpen: false,
      title: "ISO 9001",
      content: `We provide complete ISO 9001 consultation services:
      • Gap Analysis
      • Documentation Development
      • Implementation Support
      • Internal Audit Training
      • Certification Preparation`,
      icon: "/icons/iso.svg"
    },
    {
      isOpen: false,
      title: "Strategic Consulting Services",
      content: `Our strategic consulting services include:
      • Business Strategy Development
      • Market Analysis
      • Operational Efficiency
      • Growth Planning
      • Performance Optimization`,
      icon: "/icons/strategy.svg"
    },
    {
      isOpen: false,
      title: "ESG Consulting Services",
      content: `Comprehensive ESG consulting solutions:
      • ESG Strategy Development
      • Sustainability Reporting
      • Environmental Impact Assessment
      • Social Responsibility Programs
      • Governance Framework Design`,
      icon: "/icons/esg.svg"
    }
  ])

  const toggleSection = (index: number) => {
    setSections(sections.map((section, i) => ({
      ...section,
      isOpen: i === index ? !section.isOpen : false
    })))
  }

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#00879E] text-center mb-16">Our Services</h1>
        
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div key={section.title} className="border border-[#00879E]/20 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  {section.icon && (
                    <div className="w-8 h-8 relative">
                      <Image
                        src={section.icon}
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <span className="text-xl font-medium text-[#00879E]">{section.title}</span>
                </div>
                <svg
                  className={`w-6 h-6 transform transition-transform ${section.isOpen ? 'rotate-180' : ''}`}
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
              
              {section.isOpen && (
                <div className="px-6 py-4 bg-gray-50">
                  <div className="prose max-w-none">
                    <p className="whitespace-pre-line text-gray-600">
                      {section.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 