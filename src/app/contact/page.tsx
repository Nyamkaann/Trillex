'use client'

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#00879E] mb-4">
            {language === 'en' ? 'Contact Us' : 'Бидэнтэй холбогдох'}
          </h1>
          <p className="text-gray-600 text-lg">
            {language === 'en' 
              ? "Get in touch with us to discuss your consulting needs and how we can help your organization grow."
              : "Таны зөвлөх үйлчилгээний хэрэгцээ болон бид таны байгууллагын хөгжилд хэрхэн тусалж чадах талаар ярилцахаар бидэнтэй холбогдоно уу."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#00879E] mb-6">
                {language === 'en' ? 'Get in Touch' : 'Холбогдох'}
              </h2>
              <p className="text-gray-600 mb-6">
                {language === 'en'
                  ? "Ready to take your organization to the next level? Contact us today to discuss your needs and discover how our expertise can drive your success."
                  : "Таны байгууллагыг дараагийн түвшинд аваачхад бэлэн үү? Өнөөдөр бидэнтэй холбогдож, таны хэрэгцээг хэлэлцээд, бидний мэргэжлийн ур чадвар таны амжилтыг хэрхэн удирдаж чадах талаар олж мэдээрэй."
                }
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00879E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === 'en' ? 'Email' : 'И-мэйл'}
                  </h3>
                  <p className="text-gray-600">info@trillex.mn</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00879E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === 'en' ? 'Location' : 'Байршил'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' ? 'Ulaanbaatar, Mongolia' : 'Улаанбаатар, Монгол'}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00879E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {language === 'en' ? 'Business Hours' : 'Ажлын цаг'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Monday - Friday: 9:00 AM - 6:00 PM'
                      : 'Даваа - Баасан: 09:00 - 18:00'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#00879E] mb-6">
              {language === 'en' ? 'Send us a Message' : 'Бидэнд мессеж илгээх'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Full Name' : 'Бүтэн нэр'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00879E] focus:border-transparent transition-colors"
                  placeholder={language === 'en' ? 'Enter your full name' : 'Бүтэн нэрээ оруулна уу'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Email Address' : 'И-мэйл хаяг'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00879E] focus:border-transparent transition-colors"
                  placeholder={language === 'en' ? 'Enter your email address' : 'И-мэйл хаягаа оруулна уу'}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Company/Organization' : 'Компани/Байгууллага'}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00879E] focus:border-transparent transition-colors"
                  placeholder={language === 'en' ? 'Enter your company name' : 'Компанийн нэрийг оруулна уу'}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === 'en' ? 'Message' : 'Мессеж'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00879E] focus:border-transparent transition-colors resize-none"
                  placeholder={language === 'en' 
                    ? 'Tell us about your consulting needs and how we can help...'
                    : 'Таны зөвлөх үйлчилгээний хэрэгцээ болон бид хэрхэн тусалж чадах талаар бидэнд хэлнэ үү...'
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00879E] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#007a8a] transition-colors duration-200"
              >
                {language === 'en' ? 'Send Message' : 'Мессеж илгээх'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 