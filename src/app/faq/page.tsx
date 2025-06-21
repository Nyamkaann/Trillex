'use client'

import { useState } from "react";
import { websiteContent } from "@/constants";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQ() {
  const { faq } = websiteContent;
  const { language } = useLanguage();
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#00879E] mb-4">
            {faq.title[language]}
          </h1>
          <p className="text-gray-600 text-lg">
            {language === 'en' 
              ? "Find answers to commonly asked questions about our services and expertise"
              : "Бидний үйлчилгээ болон мэргэжлийн талаарх түгээмэл асуултуудын хариултыг олно уу"
            }
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faq.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#00879E] mb-6">
                {category.title[language]}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const questionId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openQuestions[questionId];
                  
                  return (
                    <div key={questionIndex} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-semibold text-gray-800 pr-4">
                          {item.question[language]}
                        </span>
                        <svg
                          className={`w-5 h-5 text-[#00879E] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
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
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer[language]}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold text-[#00879E] mb-4">
            {language === 'en' ? "Still have questions?" : "Асуулт үлдсэн үү?"}
          </h3>
          <p className="text-gray-600 mb-6">
            {language === 'en' 
              ? "If you couldn't find the answer you're looking for, please don't hesitate to contact us directly."
              : "Хайж байгаа хариултаа олж чадсангүй бол бидэнтэй шууд холбогдоно уу."
            }
          </p>
          <a
            href="mailto:info@trillex.mn"
            className="inline-flex items-center px-6 py-3 bg-[#00879E] text-white font-medium rounded-lg hover:bg-[#007a8a] transition-colors duration-200"
          >
            {language === 'en' ? "Contact Us" : "Бидэнтэй холбогдох"}
          </a>
        </div>
      </div>
    </main>
  );
} 