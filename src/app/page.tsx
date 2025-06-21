'use client'

import Link from "next/link";
import { websiteContent } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { home } = websiteContent;
  const { language } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00879E] to-[#006d7a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-8">
            {home.hero.title[language]}
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-white text-[#00879E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {home.hero.buttons.whoAreWe[language]}
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#00879E] transition-colors"
            >
              {home.hero.buttons.whatWeDo[language]}
            </Link>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00879E] mb-6">
              {home.companyIntro.title[language]}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {home.companyIntro.content[language]}
            </p>
          </div>
        </div>
      </section>

      {/* SDG Focus Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00879E] mb-6">
              {home.sdgFocus.title[language]}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {home.sdgFocus.content[language]}
            </p>
          </div>

          {/* SDG Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {home.sdgFocus.goals.map((goal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <img 
                  src={`/images/${
                    goal.number === 'SDG 1' ? 'no-poverty.png' :
                    goal.number === 'SDG 8' ? 'decent-work.png' :
                    'climate-action.jpg'
                  }`}
                  alt={goal.title[language]}
                  className="mx-auto mb-6 h-24 object-contain"
                />
                <div className="text-4xl font-bold text-[#00879E] mb-4">
                  {goal.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {goal.title[language]}
                </h3>
                <p className="text-gray-600">
                  {goal.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Are We & What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Who Are We */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#00879E] mb-6">
                {home.whoAreWe.title[language]}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {home.whoAreWe.content[language]}
              </p>
              <Link
                href="/about"
                className="inline-block mt-6 bg-[#00879E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#007a8a] transition-colors"
              >
                {language === 'en' ? 'Learn More' : 'Дэлгэрэнгүй'}
              </Link>
            </div>

            {/* What We Do */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#00879E] mb-6">
                {home.whatWeDo.title[language]}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {home.whatWeDo.content[language]}
              </p>
              <Link
                href="/services"
                className="inline-block mt-6 bg-[#00879E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#007a8a] transition-colors"
              >
                {language === 'en' ? 'Our Services' : 'Бидний үйлчилгээ'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Microfinance Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00879E] mb-6">
              {home.microfinance.title[language]}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {home.microfinance.content[language]}
            </p>
          </div>
          
          <div className="text-center">
            <Link
              href="/faq"
              className="inline-block bg-[#00879E] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#007a8a] transition-colors text-lg"
            >
              {language === 'en' ? 'Learn More About Microfinance' : 'Бичил санхүүгийн талаар дэлгэрэнгүй'}
            </Link>
          </div>
        </div>
      </section>

      {/* Partners/Sponsors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00879E] mb-6">
              {language === 'en' ? 'Our Partners & Sponsors' : 'Бидний түншүүд & Ивээн тэтгэгчид'}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'We are proud to work with leading organizations and institutions that share our vision for sustainable development and financial inclusion.'
                : 'Тогтвортой хөгжил, санхүүгийн хүртээмжийн талаарх бидний алсын харааг хуваалцдаг тэргүүлэгч байгууллагууд, байгууллагтай хамтран ажиллахад бид горьдог.'
              }
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {/* PPG */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow">
              <img 
                src="/images/partners/ppg.jpg" 
                alt="PPG" 
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* MMCI */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow">
              <img 
                src="/images/partners/mmci.JPG" 
                alt="MMCI" 
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* ICMI */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow">
              <img 
                src="/images/partners/icmi.jpg" 
                alt="ICMI" 
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Transfin */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow">
              <img 
                src="/images/partners/transfin.jpg" 
                alt="Transfin" 
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* OSHMI */}
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow">
              <img 
                src="/images/partners/oshmi.jpg" 
                alt="OSHMI" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#00879E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' 
              ? 'Ready to Transform Your Organization?'
              : 'Таны байгууллагыг өөрчлөхөд бэлэн үү?'
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Let us help you achieve sustainable growth and development through our expert consulting services.'
              : 'Бидний мэргэжлийн зөвлөх үйлчилгээгээр тогтвортой хөгжил, дэвшилд хүрэхэд тусалъя.'
            }
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#00879E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            {language === 'en' ? 'Get Started Today' : 'Өнөөдөр эхлэх'}
          </Link>
        </div>
      </section>
    </main>
  );
}
