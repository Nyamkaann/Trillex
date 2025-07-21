'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { websiteContent } from '@/constants';
import { FaRegNewspaper } from 'react-icons/fa';
import Image from 'next/image';

const NewsPage = () => {
  const { language } = useLanguage();
  const { news } = websiteContent;

  // News data (replace with images and provided context)
  const newsItems = [
    {
      date: '22nd Jan 2025',
      image: '/images/news/jan_22_2025.jpg',
      en: `Beijing Trans FinTech and Mongolian consulting agency Trillex LLC signed a Memorandum of Understanding on January 22nd.\nTrans FinTech and Trillex desire to enter into an agreement in which the 2 parties will work together to share know-hows in:\n  ESG risk evaluation modelling\n  ESG data collection\n  Carbon accounting methodologies\n  Green and sustainable project verification utilizing AI agent\n  Capacity building.\nTrans FinTech is a fintech company based in mainland China that leads ESG-related industrial standard formulation and helps the banks to establish and construct ESG risk evaluation models and digital systems for their clients. Trans FinTech utilized MSMEs’ ESG-related data to support the ESG risk evaluation model and builds digital platforms for MSMEs to realize easier and cheaper ESG information reporting. Moreover, Trans FinTech utilizes emerging technologies such as big data governance tools, smart algorithms and AI agents to help MSMEs collect and disclose sustainability-related information in a time-saving and cost-effective manner.\nTurning Hope into Opportunity\nTrillex – Microfinance Consulting Hub`,
      mn: `“Триллекс” ХХК болон “Бээжин Транс ФинТек” ХХК хамтын ажиллагааны санамж бичиг байгууллаа.\n\n“Триллекс” ХХК болон “Бээжин Транс ФинТек” байгууллагууд хоорондоо харилцан мэдээлэл солилцох, мэдлэг хуваалцан БОНЗ-ын талбарт байгууллагуудыг чадавхжуулах, үйл ажиллагааг өргөжүүлэх, Хөрөнгө оруулалтын таатай нөхцөл суурийг тавихаар зорьж байгаа бөгөөд хамтран ажиллах гол чиглэлүүд нь:\n•  БОНЗ эрсдлийн үнэлгээний загварчлал\n•  БОНЗ өгөгдөл цуглуулах\n•  Карбон тооцооллын аргачлалууд\n•  AI агент ашиглан ногоон болон тогтвортой төслийн баталгаажуулалт\n•  Чадамжийг бэхжүүлэх\n“Бээжин Транс ФинТек” ХХК /Beijing Trans FinTech/ нь БНХАУ-д байрладаг финтек компани бөгөөд салбарын БОНЗ-ын стандартуудыг боловсруулах, банкны харилцагчдын БОНЗ-ын үнэлгээний загвар, системийг бий болгох болон БЖДҮ-ийн БОНЗ-ын өгөгдлийг ашиглан БОНЗ-ын мэдээллийн тайлагналын дижитал платформыг бий болгох зэрэг томоохон ажлуудыг тэргүүлэн хийж байгаа билээ. Транс ФинТек нь БСБ-уудын БОНЗ-той холбоотой өгөгдлийг ашиглан БОНЗ-н эрсдлийн үнэлгээний загварыг дэмжиж, БСБ-уудад илүү хялбар, хямд үнээр БОНЗ мэдээллийг тайлагнах боломж олгох дижитал платформуудыг үүсгэн тэдний үйл ажиллагааг дэмжих мөн том өгөгдөлийг ашиглан засаглалын хэрэгсэл, ухаалаг алгоритм, AI агентууд зэрэг орчин үеийн технологийг ашиглан БСБ-ууд болон БЖД бизнесүүдэд тогтвортой байдлын мэдээллийг хурдан, тогтвортой цуглуулах, илгээхэд тусалахаар ажиллаж эхэлж байна.`
    },
    {
      date: '03rd Feb 2025',
      image: '/images/news/feb_03_2025.jpg',
      en: `We are pleased to announce the signing of a Memorandum of Understanding (MoU) between Trilex LLC and OSHMI Consulting LLC.\nOSHMI Group was established in 2010 and is a leading organization in Mongolia for training and certification in Occupational Health and Safety (OHS) and International Management System Standards (ISO). As a key member of the Mongolian Management Consulting Institute (MMCI), OSHMI operates with a strong commitment to social responsibility, aiming to develop sustainable businesses and highly skilled professionals with competitive capabilities on a global scale.\n\uD83D\uDCCC Through this partnership, we aim to contribute to the long-term sustainable development of non-bank financial institutions by effectively implementing the ISO 9001 standard. Additionally, we will provide ESG (Environmental, Social, and Governance) advisory services to help enhance their operational quality and effectiveness. This collaboration is dedicated to fostering sustainable growth, business excellence, and aligning enterprises with global standards for continued prosperity.\n\uD83D\uDCCC We invite you to join us in this journey toward a brighter future, where we grow and succeed together\nTurning Hope into Opportunity\nTrillex – Microfinance Consulting Hub`,
      mn: `“Триллекс” ХХК болон “ОШМИ консалтинг” ХХК хамтын ажиллагааны санамж бичиг байгуулсныг дуулгахад таатай байна.\n\n"ОШМИ” Групп OSHMI нь 2010 онд үүсгэн байгуулагдсан бөгөөд Монгол дахь Хөдөлмөрийн эрүүл мэнд, аюулгүй байдал (ХЭМАБ) ба Менежментийн тогтолцооны Олон улсын стандартын (ISO) сургалт, баталгаажуулалтын тэргүүлэх байгууллага юм. ОШМИ нь нийгмийн өндөр хариуцлагатай, олон улсад өрсөлдөх чадавхи бүхий тогтвортой бизнес, ур чадвар бүхий мэргэжилтэнүүдийг бэлтгэх зорилготойгоор ажилладаг ММЗИ-н тэргүүлэх гишүүн байгууллага юм.\n\nХамтын ажиллагаагаар бид Монгол ISO стандартуудыг үр дүнтэй хэрэгжүүлэх замаар банк бус санхүүгийн байгууллагын урт хугацааны тогтвортой хөгжилд хувь нэмэр оруулах, ESG БОНЗ-ын зөвлөх үйлчилгээг үр дүнтэй хэрэгжүүлж, тэдэнд үйл ажиллагааныхаа чанарыг сайжруулахад туслах болно. Энэхүү түншлэл нь тогтвортой өсөлт , бизнесийн шилдэг байдлыг бий болгож , бизнесийг цэцэглэн хөгжиж, дэлхийн стандартад нийцүүлэхэд туслах зорилготой юм.\nТа бүхнийг илүү сайн ирээдүйн төлөөх бидний хамтын ажиллагаанд нэгдэн хамтдаа хөгжин дэвжихийг урьж байна.\nTurning Hope into Opportunity\nTrillex – Microfinance Consulting Hub`
    },
    {
      date: '10th Feb 2025',
      image: '/images/news/feb_10_2025.jpg',
      en: `We are pleased to announce the launch of a new professional program tailored for Non-Banking Financial Institutions (NBFIs):\n“ISO 9001:2015 Implementation of Quality Management Standards.”\nIntroducing the ISO 9001 international standard within NBFIs will provide a clear framework for decision-making and operational clarity, while supporting the sustainable improvement of service quality to meet global standards.\nImplementing this standard offers tangible benefits:\n•  Enhanced service consistency and quality\n•  Improved customer satisfaction and trust\n•  Reduced operational costs and errors\n•  Stronger internal controls and risk management\n•  Increased operational efficiency and market competitiveness\nBy adopting ISO 9001, NBFIs will not only strengthen their ability to manage regulatory compliance but also improve resilience in highly competitive markets.\nWe invite you to partner with us in this important initiative, designed to help your institution reach new levels of performance and sustainability.\nLet’s work together to drive your business forward.\nTurning Hope into Opportunity\nTrillex – Microfinance Consulting Hub`,
      mn: `Шинэ хөтөлбөрийн нээлт: ББСБ-уудад зориулсан ISO 9001:2015 чанарын удирдлагын хэрэгжилт\nБанк бус санхүүгийн байгууллага (ББСБ)-уудад зориулсан “ISO 9001:2015 Чанарын удирдлагын стандартыг хэрэгжүүлэх” мэргэжлийн шинэ хөтөлбөрийг хэрэгжүүлж эхэлснийг дуулгахад таатай байна .\n\nISO 9001 олон улсын стандартыг ББСБ-уудын хүрээнд нэвтрүүлснээр шийдвэр гаргах, үйл ажиллагааны тодорхой хүрээг бий болгохын зэрэгцээ үйлчилгээний чанарыг дэлхийн стандартад нийцүүлэн тогтвортой сайжруулахад дэмжлэг үзүүлэх юм.\nЭнэхүү стандартыг хэрэгжүүлэх нь дараахь бодит үр өгөөжийг өгдөг.\n•  Үйлчилгээний тогтвортой байдал, чанарыг сайжруулсан\n•  Хэрэглэгчийн сэтгэл ханамж, итгэлийг нэмэгдүүлсэн\n•  Үйл ажиллагааны зардал, алдаа багассан\n•  Дотоод хяналт, эрсдэлийн удирдлага илүү хүчтэй\n•  Үйл ажиллагааны үр ашиг, зах зээлийн өрсөлдөх чадварыг нэмэгдүүлсэн\nISO 9001 стандартыг нэвтрүүлснээр ББСБ-ууд зохицуулалтын хэрэгжилтийг удирдах чадвараа бэхжүүлээд зогсохгүй өрсөлдөөн ихтэй зах зээлд амжилттай байх чадварыг дээшлүүлнэ.\nТанай байгууллагын үйл ажиллагаа, тогтвортой байдлын шинэ түвшинд хүрэхэд нь туслах зорилготой энэхүү чухал санаачлагад бидэнтэй хамтран ажиллахыг урьж байна.\nБизнесээ урагшлуулахын төлөө хамтдаа зүтгэцгээе.\nИтгэл Найдварыг Боломж Болгоё\nТриллекс – Бичил `
    },
    {
      date: '27th Feb 2025',
      image: '/images/news/feb_27_2025.jpg',
      en: `We are excited to extend an invitation for you to collaborate with us on an important project focused on Greenhouse Gas (GHG) Emissions Quantification and Sustainability Reporting\nThis initiative, in partnership with NBFI and MSME, aims to drive meaningful change in sustainability practices and provide valuable insights into emissions management.\nThanks to our exclusive partnership with Australian and Mongolian consulting team, we deliver exceptional quality and results, ensuring that our clients receive maximum value at a fraction of the cost. Why this matters: This project will enable the company to track, report, and reduce its carbon footprint, contributing to a more sustainable future.\nWe’re excited to drive impactful change alongside you and contribute to a greener tomorrow!`,
      mn: `ХӨТӨЛБӨР 2 : Тогтвортой байдал ба хүлэмжийн хийн ялгарлын тоо хэмжээ\nОнцгой боломж\nБид ББСБ-уудтай Хүлэмжийн Хийн (ХХ) ялгарлын тоо хэмжээ болон тогтвортой байдлын тайлангийн иж бүрэн төсөл дээр хамтран ажиллах болсондоо баяртай байна!\nҮүнд:\n•  Шууд ялгаруулалтын хэмжээг тодорхойлох: ББСБ-ын эзэмшиж буй болон хяналтанд байдаг тээврийн хэрэгсэл, газар дээрх түлшний шаталт гэх мэт бүх хүлэмжийн хийн ялгарлыг тодорхойлох, хэмжих.\n•  Тогтвортой байдлын тайлагналыг сайжруулах: ББСБ-ын тогтвортой байдлын талаарх мэдээллийг дэмжих үнэн зөв мэдээллээр хангах, олон улсын тайлагналын стандарттай нийцүүлэх.\n•  Бууруулах боломжуудыг тодорхойлох: ББСБ-д байгаль орчны зорилгодоо хүрэхэд нь туслах, бууруулах боломжтой боломжуудыг илрүүлэхийн тулд утаанд дүн шинжилгээ хийх.\nЭнэ яагаад чухал вэ:\nЭнэхүү төсөл нь ББСБ-д нүүрсхүчлийн хийн ул мөрийг хянах, тайлагнах, багасгах боломжийг олгож, илүү тогтвортой ирээдүйд хувь нэмэр оруулах юм.\nТРИЛЛЕКС нь ББСБ-тай хамтран үр дүнтэй өөрчлөлтийг хийж, маргаашийг илүү ногоон болгоход хувь нэмрээ оруулахдаа баяртай байна`
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-r from-[#00879E] to-[#006d7a] text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {news.title[language]}
          </h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden">
              {item.image && (
                <div className="relative h-56 w-full">
                  <Image src={item.image} alt={item.date} fill className="object-cover" />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm font-semibold text-[#00879E] mb-2">{item.date}</p>
                <div className="mb-4 text-gray-700 text-base leading-relaxed space-y-2">
                  {(item[language] || '').split(/\n+/).map((line, i) =>
                    line.trim().startsWith('•') ? (
                      <li key={i} className="ml-6 list-disc">{line.replace(/^•\s*/, '')}</li>
                    ) : line.trim() !== '' ? (
                      <p key={i}>{line}</p>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NewsPage; 