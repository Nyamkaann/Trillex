'use client'

import { useLanguage } from "@/contexts/LanguageContext";
import { websiteContent } from "@/constants";
import { FaCheckCircle } from 'react-icons/fa';

const ServicesPage = () => {
  const { language } = useLanguage();
  const { services } = websiteContent;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-[#00879E] to-[#006d7a] text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {services.title[language]}
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="prose prose-lg max-w-none text-gray-700">
            {services.introduction[language].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Offerings Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-[#00879E] mb-10">
            {services.offering.title[language]}
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {services.offering.list.map((item, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FaCheckCircle className="text-green-500 text-2xl mt-1 mr-4 flex-shrink-0" />
                <p className="text-gray-800 text-lg">{item[language]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section>
          <div className="space-y-12">
            {services.programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <div className="bg-[#00879E] text-white p-6">
                  <h3 className="text-2xl font-bold">{program.title[language]}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {program.description[language]}
                  </p>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <p className="font-semibold text-gray-800">
                      {program.team[language]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage; 