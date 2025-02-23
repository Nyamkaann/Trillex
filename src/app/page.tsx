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

      {/* Purpose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#00879E] text-center mb-16">Our Purpose</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SDG 1 - No Poverty */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 mb-6">
                <Image
                  src="/images/no-poverty.png"
                  alt="SDG 1 - No Poverty"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#00879E] mb-4">Financial Inclusion</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Within the Framework of Eradicating Poverty in All Forms and Everywhere:
                  For SDG 1, the focus is on eliminating all forms of poverty, including income inequality, 
                  lack of access to resources, and social exclusion.
                </p>
                <p className="text-gray-600">
                  Strengthening the transformative capacity of the microfinance sector as a powerful tool 
                  for combating poverty: By empowering NBFIs (Non-Bank Financial Institutions) through 
                  training and consulting services, we contribute to the sector's advancement and make a 
                  meaningful impact on the country's economic development by promoting financial inclusion 
                  and creating new opportunities.
                </p>
                <p className="text-gray-600">
                  The company is dedicated to empowering NBFIs operating in rural areas and supporting 
                  micro-entrepreneurs by providing free training, research, and business development 
                  assistance. Additionally, we aim to enhance investment and collaboration opportunities, 
                  improve policies and regulations, and ultimately increase their competitiveness in the market.
                </p>
              </div>
            </div>

            {/* SDG 8 - Decent Work */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 mb-6">
                <Image
                  src="/images/decent-work.png"
                  alt="SDG 8 - Decent Work"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#00879E] mb-4">Economic Growth</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our goal is to help microfinance institutions develop innovative and sustainable business models 
                  that connect them to economic growth and employment opportunities. By supporting micro-entrepreneurs, 
                  we aim to create jobs and reduce income inequality.
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-[#00879E]">Job Creation:</span> We focus on providing financial 
                  support to microfinance institutions and small and medium-sized enterprises (SMEs), with a particular 
                  emphasis on creating jobs for women, youth, and rural communities.
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-[#00879E]">Business Development:</span> We offer training and 
                  consulting services to micro-entrepreneurs to help them develop business management, financial literacy, 
                  and marketing skills.
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-[#00879E]">Sustainable Economic Growth:</span> By increasing 
                  financial inclusion, we create growth and expansion opportunities for small businesses, ultimately 
                  contributing to economic development.
                </p>
              </div>
            </div>

            {/* SDG 13 - Climate Action */}
            <div className="flex flex-col items-center text-center">
              <div className="relative h-48 w-48 mb-6">
                <Image
                  src="/images/climate-action.jpg"
                  alt="SDG 13 - Climate Action"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#00879E] mb-4">Climate Action</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <span className="font-medium text-[#00879E]">Sustainable Business Practices:</span> Integrating 
                  Environmental Sustainability into Daily Operations
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-[#00879E]">Policy Implementation:</span> We aim to reduce our 
                  carbon footprint by adopting energy-efficient practices, minimizing paper waste, and promoting 
                  digital solutions that lessen environmental impact.
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-[#00879E]">Sustainable Business Operations:</span> We support 
                  clients in transitioning to more sustainable business practices by providing consulting services 
                  on environmental and social risk assessments and sustainability strategy development.
                </p>
                <p className="text-gray-600">
                  <span className="font-medium text-[#00879E]">Green Finance:</span> We are committed to developing 
                  and promoting financial products that support environmentally friendly businesses. This includes 
                  consulting on renewable energy projects, eco-friendly agricultural practices, and green infrastructure 
                  projects that contribute to climate change mitigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* ISO Image */}
            <div className="lg:w-1/3">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/iso.png"
                  alt="ISO Certification"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-2/3 space-y-6">
              <h2 className="text-3xl font-bold text-[#00879E] leading-tight">
                TRILLEX IS COMPLIANT WITH THE REQUIREMENTS OF THE MNS ISO 20700:2017 STANDARD FOR MANAGEMENT CONSULTING SERVICES
              </h2>
              
              <p className="text-gray-600">
                Trillex provides consulting services with the highest level of professional ethics, adhering to principles of integrity, 
                independence, and client satisfaction, while ensuring compliance with confidentiality standards, legal, and regulatory requirements.
              </p>

              <div className="space-y-4">
                <p className="text-gray-600">
                  When delivering consulting services that meet quality standards for management system improvement, we follow the ISO 9001: 
                  Quality Management System framework, implementing the PDCA (Plan-Do-Check-Act) cycle in four stages:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-[#00879E] font-semibold mb-2">Plan</h3>
                    <p className="text-gray-600">Develop strategies and set objectives.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-[#00879E] font-semibold mb-2">Do</h3>
                    <p className="text-gray-600">Implement the planned processes.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-[#00879E] font-semibold mb-2">Check</h3>
                    <p className="text-gray-600">Monitor and evaluate the outcomes.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-[#00879E] font-semibold mb-2">Act</h3>
                    <p className="text-gray-600">Improve and optimize based on findings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
