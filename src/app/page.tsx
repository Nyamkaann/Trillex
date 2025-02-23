'use client'

import Carousel from '@/components/Carousel'
import { useState } from 'react'
import { websiteContent } from '@/constants'

export default function Home() {
  const [activeSection, setActiveSection] = useState<'who' | 'what' | null>(null)
  const { home } = websiteContent

  return (
    <main className="min-h-screen">
      <Carousel />
      
      {/* Who is Trillex Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#00879E] mb-6">{home.hero.title}</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <button 
              onClick={() => setActiveSection(activeSection === 'who' ? null : 'who')}
              className={`inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md transition-colors duration-300 ${
                activeSection === 'who' 
                  ? 'bg-[#00879E] text-white'
                  : 'bg-white text-[#00879E] border-2 border-[#00879E]'
              }`}
            >
              {home.hero.buttons.whoAreWe}
            </button>
            <button 
              onClick={() => setActiveSection(activeSection === 'what' ? null : 'what')}
              className={`inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md transition-colors duration-300 ${
                activeSection === 'what'
                  ? 'bg-[#00879E] text-white'
                  : 'bg-white text-[#00879E] border-2 border-[#00879E]'
              }`}
            >
              {home.hero.buttons.whatWeDo}
            </button>
          </div>

          {activeSection === 'who' && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-semibold text-[#00879E] mb-4">{home.whoAreWe.title}</h3>
              <p className="text-gray-600">{home.whoAreWe.content}</p>
            </div>
          )}

          {activeSection === 'what' && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-semibold text-[#00879E] mb-4">{home.whatWeDo.title}</h3>
              <p className="text-gray-600">{home.whatWeDo.content}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
