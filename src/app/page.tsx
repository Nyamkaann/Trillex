'use client'

import Link from "next/link";
import { websiteContent } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Home() {
  const { home } = websiteContent;
  const { language } = useLanguage();

  // Carousel slides: use only the 3 carousel images, cycle through them
  const availableImages = [
    "/images/carousel-1.jpg",
    "/images/carousel-2.jpg",
    "/images/carousel-3.jpg"
  ];
  const serviceTitles = websiteContent.services.offering.list.map(item => item[language]);
  const serviceSlides = serviceTitles.map((title, idx) => ({
    title,
    image: availableImages[idx % availableImages.length],
  }));

  return (
    <main className="min-h-screen">
      {/* Product & Services Carousel - under navbar */}
      <section className="w-full bg-gradient-to-r from-[#F0F7FA] to-[#e6f3f7] py-0 mb-2">
        <div className="w-full">
          <Slider
            dots={true}
            infinite={true}
            speed={600}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3500}
            arrows={false}
            className="services-carousel"
          >
            {serviceSlides.map((slide, idx) => (
              <div key={idx} className="relative w-full aspect-[16/6]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover rounded-none"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <h3 className="text-base md:text-lg lg:text-xl font-medium text-white px-3 py-2 rounded-lg text-center max-w-xl mx-auto shadow bg-black/20 backdrop-blur-sm border border-white/10" style={{wordBreak: 'break-word'}}>
                    {slide.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <div className="mb-8" />
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
              {language === 'en' ? 'Our Partners' : 'Бидний түншүүд'}
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {language === 'en' 
                ? 'We are proud to work with leading organizations and institutions that share our vision for sustainable development and financial inclusion.'
                : 'Тогтвортой хөгжил, санхүүгийн хүртээмжийн талаарх бидний алсын харааг хуваалцдаг тэргүүлэгч байгууллагууд, байгууллагтай хамтран ажиллахад бид горьдог.'
              }
            </p>
          </div>

          {/* Partners Slider */}
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
            responsive={[
              { breakpoint: 1280, settings: { slidesToShow: 4 } },
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 640, settings: { slidesToShow: 2 } },
            ]}
            className="partners-slider mb-8"
          >
            {[
              { file: 'mmci.JPG', alt: 'MMCI' },
              { file: 'oshmi.jpg', alt: 'OSHMI' },
              { file: 'ppg.jpg', alt: 'PPG' },
              { file: 'transfin.jpg', alt: 'Transfin' },
              { file: 'icmi.jpg', alt: 'ICMI' },
              { file: 'image6.jpg', alt: 'Partner 6' },
              { file: 'image7.jpg', alt: 'Partner 7' },
              { file: 'image8.jpg', alt: 'Partner 8' },
            ].map((partner, idx) => (
              <div key={partner.file} className="px-2">
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-32 hover:shadow-lg transition-shadow">
                  <img
                    src={`/images/partners/${partner.file}`}
                    alt={partner.alt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
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
