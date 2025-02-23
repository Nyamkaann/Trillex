'use client'

import Carousel from '@/components/Carousel'
import { useState } from 'react'
import { websiteContent } from '@/constants'
import Image from 'next/image'

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

          {activeSection === 'what' && (
            <div className="animate-fadeIn">
              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="lg:w-1/3">
                  <div className="relative h-full min-h-[500px] w-full rounded-lg overflow-hidden border-4 border-[#00879E]/10">
                    <Image
                      src="/images/what-we-do.png"
                      alt="What We Do"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <div className="lg:w-2/3 text-left space-y-6">
                  <p className="text-gray-600">
                    TRILLEX is a consulting company that provides services to Microfinance Institutions (MFIs) and Micro, Small, and Medium Enterprises (MSMEs). Our goal is to help these vital sectors overcome challenges, optimize their operations, and achieve sustainable growth by offering strategic solutions and innovative approaches. Additionally, we provide training and consulting services on ISO 9001 international quality management standards and Environmental, Social, and Governance (ESG) best practices, including Scope 1 integration.
                  </p>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-[#00879E] mb-4">Our services cover the following areas:</h3>
                    <div className="space-y-4">
                      <div className="pl-6">
                        <h4 className="text-[#00879E] font-medium mb-2">• Strategic Planning and Growth</h4>
                        <p className="text-gray-600">
                          Assisting target clients in sustainable expansion, broadening financial products and services, developing strategic and business plans, identifying growth opportunities, and scaling their operations.
                        </p>
                      </div>
                      
                      <div className="pl-6">
                        <h4 className="text-[#00879E] font-medium mb-2">• Risk Management and Regulatory Compliance</h4>
                        <p className="text-gray-600">
                          Enhancing risk management frameworks and improving compliance with legal and regulatory requirements.
                        </p>
                      </div>
                      
                      <div className="pl-6">
                        <h4 className="text-[#00879E] font-medium mb-2">• Operational Efficiency Enhancement</h4>
                        <p className="text-gray-600">
                          Improving business processes, integrating technology, expanding service offerings, reducing costs, and increasing profitability.
                        </p>
                      </div>
                      
                      <div className="pl-6">
                        <h4 className="text-[#00879E] font-medium mb-2">• ISO 9001:2015 Implementation</h4>
                        <p className="text-gray-600">
                          Guidance on establishing, implementing, maintaining, and continuously improving an ISO 9001-compliant quality management system.
                        </p>
                      </div>
                      
                      <div className="pl-6">
                        <h4 className="text-[#00879E] font-medium mb-2">• ESG Integration (Scope 1)</h4>
                        <p className="text-gray-600">
                          Implementing sustainable practices aligned with ESG principles, reducing direct environmental impacts, and providing training and consulting services.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 font-medium">
                    TRILLEX is committed to supporting MFIs and MSMEs in optimizing their operations, overcoming challenges, and achieving sustainable long-term growth. We are ready to help unlock your potential and drive sustainable success.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'who' && (
            <div className="animate-fadeIn">
              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="lg:w-1/3">
                  <div className="relative h-full min-h-[500px] w-full rounded-lg overflow-hidden border-4 border-[#00879E]/10">
                    <Image
                      src="/images/team/ceo.jpg"
                      alt="CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-2/3 text-left space-y-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#00879E]">Ts Otgontsetseg</h3>
                    <p className="text-gray-600">Founder & CEO</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Trillex LLC was established in 2020 and operates in several key areas, including management consulting, 
                      project implementation, information technology and other computer services, and international trade.
                    </p>
                    <p className="text-gray-600">
                      In all its activities, the company has integrated three of the 17 Sustainable Development Goals (SDGs) 
                      into its long-term strategic planning:
                    </p>
                    <ul className="text-gray-600 list-disc pl-6 space-y-2">
                      <li>Increasing financial inclusion (SDG 1)</li>
                      <li>Promoting economic growth (SDG 8)</li>
                      <li>Addressing climate change (SDG 13)</li>
                    </ul>
                    <p className="text-gray-600">
                      By doing so, the company not only contributes to global and national goals but also strives to be a 
                      trusted partner for clients who prioritize sustainability, helping them overcome challenges related to 
                      climate change and positive social impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
