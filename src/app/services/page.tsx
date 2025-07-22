"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import { FaUserTie, FaCubes, FaHandshake, FaStar } from "react-icons/fa";

const content = {
  mn: {
    intro:
      "Триллекс Бичил Санхүүгийн Зөвлөх Төв (БСЗТөв) дээр бид үйл ажиллагааны гүйцэтгэл, зохицуулалтын нийцэл, урт хугацааны тогтвортой байдлыг бэхжүүлэх зорилготой тусгайлсан зөвлөх үйлчилгээ, шинэлэг бүтээгдэхүүнээр байгууллагуудыг чадавхижуулдаг.",
    sections: [
      {
        title: "I. Триллекс (БСЗТөв)-ийн үндсэн зөвлөх үйлчилгээ",
        desc:
          "БСЗТөв нь олон улсын шилдэг туршлагад тулгуурлан бичил санхүүгийн байгууллага (БСБ)-банк бус санхүүгийн байгууллага (ББСБ) болон өсөн нэмэгдэж буй бизнесүүдэд байгууллагын хөгжлийн үндсэн асуудлуудыг хамарсан тогтвортой өсөлтийн хүчирхэг дотоод тогтолцоог бий болгоход нь туслах цогц зөвлөх үйлчилгээг үзүүлдэг.",
        bullets: [
          "Стратегийн зөвлөгөө ба бизнесийн өсөлтийн зөвлөгөө",
          "Зээлийн эрсдэлийн удирдлагын тогтолцоо ба хэрэгжилт",
          "Бүтээгдэхүүн ба бодлого, журам боловсруулах",
          "Зээл, зээлийн үйл явцыг оновчтой болгох",
          "Хүний нөөц ба авьяасын стратеги боловсруулах",
          "Мөнгө угаахтай тэмцэх (AML) нийцлийн зөвлөгөө",
        ],
      },
      {
        title: "II. Шинэ бүтээгдэхүүний багц – Стратегийн түншүүдтэй хамтран боловсруулсан",
        desc:
          "Олон улсын тэргүүлэгч түншүүдтэй хамтран дэлхийн стандарт, дижитал шийдлүүдийг таны бизнест шууд авчрах тусгайлсан зөвлөх үйлчилгээг санал болгож байна.",
        bullets: [
          "ISO 9001:2015 Чанарын удирдлагын бүлгийн зөвлөгөө  (OSHMI ХХК-тай)\n3-5 байгууллагыг бүлэг болгон чадавхид тохируулсан бүтэцтэй тогтолцоог ашиглан олон улсын чанарын удирдлагын стандартыг хэрэгжүүлж, баталгаажуулж, үйлчилгээний чанар сайжирч, тогтвортой өсөлтийг хангана.",
          "ISO 27001:2022 Мэдээллийн аюулгүй байдлын удирдлагын зөвлөгөө (ABC ХХК-тай)\nISO 27001:2022 Мэдээллийн аюулгүй байдлын удирдлагын стандартыг бусад ISO стандартуудын хамт хэрэгжүүлснээр өөрийн мэдээллийн аюулгүй байдлыг хангаж, байгууллагын бүрэн бүтэн байдлыг хамгаалах салбарын мэргэшил хосолсон зөвлөх үйлчилгээ",
          "SMART-TO – Чанарын удирдлагын хялбаршуулсан систем (ОМО ХХК-тай)\nISO 9001 стандартын зарчимд суурилсан хялбаршуулсан хөтөлбөр болох SMART-TO нь бизнесийн үйл ажиллагаа, хэрэглэгчийн сэтгэл ханамж, аудитын бэлэн байдлыг сайжруулахын зэрэгцээ олон улсын стандартын дагуу чанарын удирдлагын тогтолцоог үе шаттайгаар нэвтрүүлэх боломжийг олгодог.",
          "ESG (Байгаль орчин, нийгэм, засаглал) шийдэл:",
          "- Хамрах хүрээ 1, 2, 3 ESG Consulting & Certification (OSHMI & Green Odyssey-тай)\nТаны нүүрстөрөгчийн ул мөр, тогтвортой байдлын гүйцэтгэлийг бүхэлд нь хамарсан цогц үнэлгээ, баталгаажуулалтын зөвлөгөө.",
          "- ESG Risk Assessment & Modeling (Beijing Trans Fintech-тэй хамтран)\nESG-тэй холбоотой эрсдлийг тодорхойлох, бууруулах, стратегийн шийдвэр гаргах чадварыг сайжруулах дэвшилтэт загварчлалын хэрэгслүүд.",
          "- Бүрэн дижитал ESG шийдлүүд (Бээжин Транс Финтек компанитай)\nхиймэл оюун ухаанаар дэмжигдсэн өгөгдөл цуглуулах, нүүрстөрөгчийн бүртгэл, төслийн баталгаажуулалт, автоматжуулсан ESG тайлагнал нь бизнесийн тогтвортой үйл ажиллагаанд зориулсан дижитал өөрчлөлтийн иж бүрэн шийдэл юм.",
          "EOS – Entrepreneurial Operating System Consulting (Business Excellence ХХК-тай)\nЖижиг, дунд аж ахуйн нэгжийн манлайлал, үйл ажиллагаа, өсөлтийн стратегийг уялдуулах зорилготой, зургаан үндсэн бүрэлдэхүүн хэсгээс бүрдсэн зохион байгуулалттай удирдлагын систем. EOS нь тодорхой, практик үйл ажиллагааны тогтолцоог хэрэгжүүлснээр байгууллагуудад анхаарлаа төвлөрүүлэх, хариуцлага хүлээх, өргөжүүлэх чадварыг сайжруулахад тусалдаг.",
        ],
      },
      {
        title: "Яагаад БСЗТөвийг сонгох хэрэгтэй вэ?",
        desc: null,
        bullets: [
          "Бичил Санхүүгийн салбарт олон арван жилийн туршлагатай мэргэшсэн зөвлөгөө",
          "Монголын болон бүс нутгийн бизнест тохирсон олон улсын түвшинд нийцсэн зөвлөгөө",
          "ESG, ISO стандарт, дижитал технологийн чиглэлээр дэлхийн тэргүүлэгчидтэй хүчтэй түншлэл",
          "Урт хугацааны тогтвортой байдал, дагаж мөрдөх байдал, үйл ажиллагааны өндөр түвшинд анхаарлаа хандуулаарай",
          "Бизнесийн бодит үр нөлөөг бий болгодог практик шийдлүүд",
        ],
      },
    ],
    cta: "Итгэл Найдварын Боломж Болгоё",
  },
  en: {
    intro:
      "At Trillex MFConsulting Hub (MFCHub), we empower organizations with tailored consulting services and innovative products designed to strengthen operational performance, regulatory compliance, and long-term sustainability.",
    sections: [
      {
        title: "I. Trillex MFCHub’s Core consulting services",
        desc:
          "The Microfinance Consulting Hub (MFCHub) provides comprehensive consulting services designed to help microfinance institutions (MFIs), non-banking financial institutions (NBFIs), and growing businesses build strong internal systems for sustainable growth, addressing core aspects of organizational development based on international best practices.",
        bullets: [
          "Strategic consulting & business growth advisory",
          "Risk management frameworks & implementation",
          "Product & Policy development",
          "Credit and lending process optimization",
          "Human resources & Talent strategy development",
          "Anti-Money Laundering (AML) Compliance consulting",
        ],
      },
      {
        title: "II. New product portfolio – Developed with strategic partners",
        desc:
          "In collaboration with leading international partners, we now offer specialized consulting products that bring global standards and digital solutions directly to your business:",
        bullets: [
          "ISO 9001:2015 Quality management consulting (with OSHMI)\nImplement and certify international quality management standards using structured frameworks customized to your organization’s capacity, ensuring enhanced service quality and sustainable growth.",
          "ISO 27001:2022 Information security management consulting (with ABC LLC)\nSecure your data and protect organizational integrity through the implementation of the ISO 27001:2022 Information Security Management Standard, along with other ISO standards.",
          "SMART-TO – Simplified quality management system (with OMO LLC)\nA streamlined program based on ISO 9001 principles, SMART-TO enables businesses to gradually adopt quality management systems in line with international standards, while improving operational processes, customer satisfaction, and audit readiness.",
          "ESG (Environmental, Social, Governance) solutions:",
          "- Scope 1, 2, and 3 ESG Consulting & Certification (with OSHMI & Green Odyssey)\nComprehensive assessment and certification consulting covering your full carbon footprint and sustainability performance.",
          "- ESG risk assessment & modeling (with Beijing Trans Fintech)\nAdvanced modeling tools for identifying and mitigating ESG-related risks, enhancing strategic decision-making.",
          "- Full digital ESG solutions (with Beijing Trans Fintech)\nAI-supported data collection, carbon accounting, project verification, and automated ESG reporting – a complete digital transformation solution for sustainable business operations.",
          "EOS – Entrepreneurial Operating System Consulting (with Business Excellence LLC)\nA structured management system consisting of six core components, designed to align leadership, operations, and growth strategies for small and medium enterprises. EOS helps organizations improve focus, accountability, and scalability by implementing a clear, practical operating framework.",
        ],
      },
      {
        title: "Why choose MFCHub?",
        desc: null,
        bullets: [
          "Specialized consultants with decades of experience in the microfinance sector",
          "Internationally aligned consulting adapted to Mongolian and regional businesses",
          "Strong partnerships with global leaders in ESG, ISO standards, and digital technologies",
          "Focus on long-term sustainability, compliance, and operational excellence",
          "Practical solutions that drive real business impact",
        ],
      },
    ],
    cta: "Turning Hope into Opportunity",
  },
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const langContent = content[language];

  // New context bilingual content with icons
  const extraSection = {
    mn: {
      heading: "MFCHub – Бидний шийдлүүд: Тогтвортой өсөлт ба бизнесийн шилдэг туршлага",
      paragraphs: [
        "Триллекс Бичил Санхүүгийн Зөвлөх Төв (БСЗТөв) дээр бид үйл ажиллагааны гүйцэтгэл, зохицуулалтын нийцэл, урт хугацааны тогтвортой байдлыг бэхжүүлэх зорилготой тусгайлсан зөвлөх үйлчилгээ, шинэлэг бүтээгдэхүүнээр байгууллагуудыг чадавхижуулдаг.",
      ],
      sections: [
        {
          icon: <FaUserTie className="text-3xl text-[#00879E] mb-2 mx-auto" />,
          title: "I. Триллекс (БСЗТөв)-ийн үндсэн зөвлөх үйлчилгээ",
          bullets: [
            "Стратегийн зөвлөгөө ба бизнесийн өсөлтийн зөвлөгөө",
            "Зээлийн эрсдэлийн удирдлагын тогтолцоо ба хэрэгжилт",
            "Бүтээгдэхүүн ба бодлого, журам боловсруулах",
            "Зээл, зээлийн үйл явцыг оновчтой болгох",
            "Хүний нөөц ба авьяасын стратеги боловсруулах",
            "Мөнгө угаахтай тэмцэх (AML) нийцлийн зөвлөгөө",
          ],
        },
        {
          icon: <FaCubes className="text-3xl text-[#00879E] mb-2 mx-auto" />,
          title: "II. Шинэ бүтээгдэхүүний багц – Стратегийн түншүүдтэй хамтран боловсруулсан",
          bullets: [
            "ISO 9001:2015 Чанарын удирдлагын бүлгийн зөвлөгөө  (OSHMI ХХК-тай) — 3-5 байгууллагыг бүлэг болгон чадавхид тохируулсан бүтэцтэй тогтолцоог ашиглан олон улсын чанарын удирдлагын стандартыг хэрэгжүүлж, баталгаажуулж, үйлчилгээний чанар сайжирч, тогтвортой өсөлтийг хангана.",
            "ISO 27001:2022 Мэдээллийн аюулгүй байдлын удирдлагын зөвлөгөө (ABC ХХК-тай) — ISO 27001:2022 Мэдээллийн стандартыг бусад ISO стандартуудын хамт хэрэгжүүлснээр өөрийн мэдээллийн аюулгүй байдлыг хангаж, байгууллагын бүрэн бүтэн байдлыг хамгаалах салбарын мэргэшил хосолсон зөвлөх үйлчилгээ.",
            "SMART-TO – Чанарын удирдлагын хялбаршуулсан систем (ОМО ХХК-тай) — ISO 9001 стандартын зарчимд суурилсан хялбаршуулсан хөтөлбөр болох SMART-TO нь бизнесийн үйл ажиллагаа, хэрэглэгчийн сэтгэл ханамж, аудитын бэлэн байдлыг сайжруулахын зэрэгцээ олон улсын стандартын дагуу чанарын удирдлагын тогтолцоог үе шаттайгаар нэвтрүүлэх боломжийг олгодог.",
            "ESG (Байгаль орчин, нийгэм, засаглал) шийдэл:",
            "- Хамрах хүрээ 1, 2, 3 ESG Consulting & Certification (OSHMI & Green Odyssey-тай) — Таны нүүрстөрөгчийн ул мөр, тогтвортой байдлын гүйцэтгэлийг бүхэлд нь хамарсан цогц үнэлгээ, баталгаажуулалтын зөвлөгөө.",
            "- ESG Risk Assessment & Modeling (Beijing Trans Fintech-тэй хамтран) — ESG-тэй холбоотой эрсдлийг тодорхойлох, бууруулах, стратегийн шийдвэр гаргах чадварыг сайжруулах дэвшилтэт загварчлалын хэрэгслүүд.",
            "- Бүрэн дижитал ESG шийдлүүд (Бээжин Транс Финтек компанитай) — хиймэл оюун ухаанаар дэмжигдсэн өгөгдөл цуглуулах, нүүрстөрөгчийн бүртгэл, төслийн баталгаажуулалт, автоматжуулсан ESG тайлагнал нь бизнесийн тогтвортой үйл ажиллагаанд зориулсан дижитал өөрчлөлтийн иж бүрэн шийдэл юм.",
            "EOS – Entrepreneurial Operating System Consulting (Business Excellence ХХК-тай) — Жижиг, дунд аж ахуйн нэгжийн манлайлал, үйл ажиллагаа, өсөлтийн стратегийг уялдуулах зорилготой, зургаан үндсэн бүрэлдэхүүн хэсгээс бүрдсэн зохион байгуулалттай удирдлагын систем. EOS нь тодорхой, практик үйл ажиллагааны тогтолцоог хэрэгжүүлснээр байгууллагуудад анхаарлаа төвлөрүүлэх, хариуцлага хүлээх, өргөжүүлэх чадварыг сайжруулахад тусалдаг.",
          ],
        },
        {
          icon: <FaHandshake className="text-3xl text-[#00879E] mb-2 mx-auto" />,
          title: "Яагаад БСЗТөвийг сонгох хэрэгтэй вэ?",
          bullets: [
            "Бичил Санхүүгийн салбарт олон арван жилийн туршлагатай мэргэшсэн зөвлөхүүд",
            "Монголын болон бүс нутгийн бизнест тохирсон олон улсын түвшинд нийцсэн зөвлөгөө",
            "ESG, ISO стандарт, дижитал технологийн чиглэлээр дэлхийн тэргүүлэгчидтэй хүчтэй түншлэл",
            "Урт хугацааны тогтвортой байдал, дагаж мөрдөх байдал, үйл ажиллагааны өндөр түвшинд анхаарлаа хандуулаарай",
            "Бизнесийн бодит үр нөлөөг бий болгодог практик шийдлүүд",
          ],
        },
      ],
      cta: "Итгэл Найдварын Боломж Болгоё",
    },
    en: {
      heading: "MFCHub – Our solutions for sustainable growth and business excellence",
      paragraphs: [
        "At Trillex MFConsulting Hub (MFCHub), we empower organizations with tailored consulting services and innovative products designed to strengthen operational performance, regulatory compliance, and long-term sustainability.",
      ],
      sections: [
        {
          icon: <FaUserTie className="text-3xl text-[#00879E] mb-2 mx-auto" />,
          title: "I. Trillex MFCHub’s Core consulting services",
          bullets: [
            "Strategic consulting & business growth advisory",
            "Risk management frameworks & implementation",
            "Product & Policy development",
            "Credit and lending process optimization",
            "Human resources & Talent strategy development",
            "Anti-Money Laundering (AML) Compliance consulting",
          ],
        },
        {
          icon: <FaCubes className="text-3xl text-[#00879E] mb-2 mx-auto" />,
          title: "II. New product portfolio – Developed with strategic partners",
          bullets: [
            "ISO 9001:2015 Quality management consulting (with OSHMI) — Implement and certify international quality management standards using structured frameworks customized to your organization’s capacity, ensuring enhanced service quality and sustainable growth.",
            "ISO 27001:2022 Information security management consulting (with ABC LLC) — Secure your data and protect organizational integrity through the implementation of the ISO 27001:2022 Information Security Management Standard, along with other ISO standards.",
            "SMART-TO – Simplified quality management system (with OMO LLC) — A streamlined program based on ISO 9001 principles, SMART-TO enables businesses to gradually adopt quality management systems in line with international standards, while improving operational processes, customer satisfaction, and audit readiness.",
            "ESG (Environmental, Social, Governance) solutions:",
            "- Scope 1, 2, and 3 ESG Consulting & Certification (with OSHMI & Green Odyssey) — Comprehensive assessment and certification consulting covering your full carbon footprint and sustainability performance.",
            "- ESG risk assessment & modeling (with Beijing Trans Fintech) — Advanced modeling tools for identifying and mitigating ESG-related risks, enhancing strategic decision-making.",
            "- Full digital ESG solutions (with Beijing Trans Fintech) — AI-supported data collection, carbon accounting, project verification, and automated ESG reporting – a complete digital transformation solution for sustainable business operations.",
            "EOS – Entrepreneurial Operating System Consulting (with Business Excellence LLC) — A structured management system consisting of six core components, designed to align leadership, operations, and growth strategies for small and medium enterprises. EOS helps organizations improve focus, accountability, and scalability by implementing a clear, practical operating framework.",
          ],
        },
        {
          icon: <FaHandshake className="text-3xl text-[#00879E] mb-2 mx-auto" />,
          title: "Why choose MFCHub?",
          bullets: [
            "Specialized consultants with decades of experience in the microfinance sector",
            "Internationally aligned consulting adapted to Mongolian and regional businesses",
            "Strong partnerships with global leaders in ESG, ISO standards, and digital technologies",
            "Focus on long-term sustainability, compliance, and operational excellence",
            "Practical solutions that drive real business impact",
          ],
        },
      ],
      cta: "Turning Hope into Opportunity",
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-r from-[#00879E] to-[#006d7a] text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {language === 'mn'
              ? 'Бүтээгдэхүүн Үйлчилгээ'
              : 'Products & Services'}
          </h1>
        </div>
      </header>
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <p className="text-lg text-gray-700 mb-8">{langContent.intro}</p>

          {/* --- New context section start --- */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8">
            {/* Main heading and intro */}
            <div className="text-center">
              <h2 className={`text-3xl ${language === 'mn' ? 'font-bold font-sans' : 'font-extrabold'} text-[#00879E] mb-2`} style={language === 'mn' ? { fontFamily: 'Arial, sans-serif' } : {}}>
                {extraSection[language].heading}
              </h2>
              {extraSection[language].paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`mb-6 text-gray-600 text-lg max-w-2xl mx-auto ${language === 'mn' ? 'font-normal font-sans' : ''}`}
                  style={language === 'mn' ? { fontFamily: 'Arial, sans-serif' } : {}}
                >
                  {p}
                </p>
              ))}
            </div>
            {/* Subsections */}
            <div className="w-full max-w-3xl mx-auto flex flex-col gap-8">
              {extraSection[language].sections.map((sec, idx) => {
                return (
                  <div key={idx} className="">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{sec.icon}</span>
                      <h3
                        className={`text-xl ${language === 'mn' ? 'font-bold font-sans' : 'font-bold'} text-[#00879E]`}
                        style={language === 'mn' ? { fontFamily: 'Arial, sans-serif' } : {}}
                      >
                        {sec.title}
                      </h3>
                    </div>
                    <ul className="list-disc pl-8 space-y-2 text-gray-700 text-base">
                      {sec.bullets.map((b, j) => (
                        <li
                          key={j}
                          className={language === 'mn' ? 'font-normal font-sans' : ''}
                          style={language === 'mn' ? { fontFamily: 'Arial, sans-serif' } : {}}
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                    {idx < extraSection[language].sections.length - 1 ? (
                      <hr className="my-6 border-gray-200" />
                    ) : null}
                  </div>
                );
              })}
                </div>
            {/* Call to action */}
            <div className="mt-6 text-center text-xl font-semibold text-[#00879E]">
              <FaStar className="inline-block mr-2 text-2xl align-middle" />
              {extraSection[language].cta}
                  </div>
                </div>
          {/* --- New context section end --- */}

          {langContent.sections.map((section, idx) => (
            <div key={idx} className="mb-10">
              <h2 className="text-2xl font-bold text-[#00879E] mb-4">{section.title}</h2>
              {section.desc && <p className="mb-4 text-gray-700">{section.desc}</p>}
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {section.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-12 text-center text-xl font-semibold text-[#00879E]">
            {langContent.cta}
        </div>
        </section>
      </main>
      </div>
  );
} 