'use client'

import Image from "next/image";
import { websiteContent } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { about } = websiteContent;
  const { language } = useLanguage();

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Founder Image */}
            <div className="lg:col-span-1">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="relative h-80 w-80 mx-auto rounded-full overflow-hidden border-4 border-[#00879E]/10">
                  <Image
                    src="/images/team/ceo.jpg"
                    alt="Otgontsetseg Tseveg - Founder & CEO"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Founder Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#00879E] mb-2">{about.sections.founder.title[language]}</h2>
              <h3 className="text-xl font-semibold text-[#00879E] mb-4">{about.sections.founder.subtitle[language]}</h3>
              <div className="prose max-w-none text-gray-600">
                <p>{about.sections.founder.content[language]}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#00879E] mb-6">{about.sections.vision.title[language]}</h2>
          <div className="prose max-w-none text-gray-600">
            <p>{about.sections.vision.content[language]}</p>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#00879E] mb-6">{about.sections.mission.title[language]}</h2>
          <div className="prose max-w-none text-gray-600">
            <p>{about.sections.mission.content[language]}</p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#00879E] mb-6">{about.sections.values.title[language]}</h2>
          <div className="prose max-w-none text-gray-600 space-y-6">
            <p className="font-bold">
              {about.sections.values.content[language]}
            </p>
            
            <div>
              <h3 className="text-xl font-bold text-[#00879E] mb-2">{about.sections.values.subContent.creativeCollaboration.title[language]}</h3>
              <p>
                {about.sections.values.subContent.creativeCollaboration.content[language]}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#00879E] mb-2">{about.sections.values.subContent.confidentiality.title[language]}</h3>
              <p>
                {about.sections.values.subContent.confidentiality.content[language]}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-[#00879E] mb-2">{about.sections.values.subContent.sustainability.title[language]}</h3>
              <p>
                {about.sections.values.subContent.sustainability.content[language]}
              </p>
            </div>
          </div>
        </section>

        {/* ISO Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#00879E] mb-6">{about.sections.isoStandards.title[language]}</h2>
          <div className="prose max-w-none text-gray-600">
            <p>{about.sections.isoStandards.content[language]}</p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-32 bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#00879E] text-center mb-16">{about.team.title[language]}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Founder & CEO */}
              <div className="text-center">
                <div className="relative aspect-square w-full mb-6">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-[#00879E]/10">
                    <Image
                      src={about.team.members[0].image}
                      alt={about.team.members[0].role[language]}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#00879E] mb-2">{about.team.members[0].name[language]}</h3>
                <p className="text-gray-600 font-medium mb-4">{about.team.members[0].role[language]}</p>
                <div className="text-gray-500 text-sm space-y-1">
                  {about.team.members[0].education[language].map((edu, index) => (
                    <p key={index}>{edu}</p>
                  ))}
                </div>
              </div>

              {/* COO */}
              <div className="text-center">
                <div className="relative aspect-square w-full mb-6">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-[#00879E]/10">
                    <Image
                      src={about.team.members[1].image}
                      alt={about.team.members[1].role[language]}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#00879E] mb-2">{about.team.members[1].name[language]}</h3>
                <p className="text-gray-600 font-medium mb-4">{about.team.members[1].role[language]}</p>
                <div className="text-gray-500 text-sm space-y-1">
                  {about.team.members[1].education[language].map((edu, index) => (
                    <p key={index}>{edu}</p>
                  ))}
                </div>
              </div>

              {/* CTO */}
              <div className="text-center">
                <div className="relative aspect-square w-full mb-6">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-[#00879E]/10">
                    <Image
                      src={about.team.members[2].image}
                      alt={about.team.members[2].role[language]}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#00879E] mb-2">{about.team.members[2].name[language]}</h3>
                <p className="text-gray-600 font-medium mb-4">{about.team.members[2].role[language]}</p>
                <div className="text-gray-500 text-sm space-y-1">
                  {about.team.members[2].education[language].map((edu, index) => (
                    <p key={index}>{edu}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
