'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { websiteContent } from '@/constants';
import { FaRegNewspaper } from 'react-icons/fa';

const NewsPage = () => {
  const { language } = useLanguage();
  const { news } = websiteContent;

  const parseContent = (text: string) => {
    const lines = text.split('\n').map(line => line.trim());
    return lines.map((line, index) => {
      if (line.startsWith('•') || line.startsWith('📌') || line.startsWith('🌟')) {
        return (
          <li key={index} className="mb-2 list-inside list-disc">
            {line.substring(1).trim()}
          </li>
        );
      }
      if (line.trim() === '') return null;
      return <p key={index} className="mb-4">{line}</p>;
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-r from-[#00879E] to-[#006d7a] text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {news.title[language]}
          </h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical line on larger screens */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-300" />
          
          <div className="space-y-16">
            {news.articles.map((article, index) => (
              <div key={index} className="relative md:grid md:grid-cols-2 md:gap-x-16 items-start">
                {/* Timeline Point */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-[#00879E] rounded-full z-10 flex items-center justify-center">
                  <FaRegNewspaper className="text-[#00879E]" />
                </div>

                {/* Vertical line on mobile */}
                <div className="md:hidden absolute top-0 left-4 w-0.5 h-full bg-gray-300"/>

                {/* Empty div for spacing on alternating sides */}
                <div className={index % 2 === 0 ? 'hidden md:block' : ''}></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <p className="text-sm font-semibold text-[#00879E] mb-3">{article.date}</p>
                    <div className="text-gray-700 leading-relaxed space-y-2">
                      {parseContent(article.content[language])}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewsPage; 