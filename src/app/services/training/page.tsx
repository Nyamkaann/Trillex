"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { FaChalkboardTeacher, FaUserTie, FaLeaf, FaStar } from "react-icons/fa";
import React from "react";

const modules = [
  {
    icon: <FaChalkboardTeacher className="text-3xl text-[#00879E] mb-2 mx-auto" />, // Core
    category: {
      mn: "БСЗТөвийн  сургалтын үндсэн модулиуд",
      en: "MFCHub-Led Core Training Modules",
    },
    items: [
      {
        mn: [
          "Байгууллагын стратеги (анхан шатны)",
          "Тодорхой алсын харааг боловсруулж, стратегийн зорилгоо тодорхойлж, бизнесийн үндсэн чиглэлийг бий болгох. Гарааны бизнес болон эхний шатандаа яваа аж ахуйн нэгжүүдэд тохиромжтой.",
        ],
        en: [
          "Organizational Strategy (Beginner Level)",
          "Develop a clear vision, define strategic goals, and create a foundational business roadmap. Ideal for startups and early-stage enterprises.",
        ],
      },
      {
        mn: [
          "Борлуулалт, зээлийн эрсдэлтэй ажиллах нь",
          "Өсөлтийг эрсдэлтэй хэрхэн тэнцвэржүүлэх талаар ойлгох. Борлуулалтын гүйцэтгэлийг бэхжүүлэхийн зэрэгцээ зээлийн эрсдэлийг тодорхойлж, үнэлэх, ажил үүргийн зааг ялгааг тодорхойлж сурах ",
        ],
        en: [
          "Working with Sales and Credit Risk",
          "Understand how to balance growth with risk. Learn to identify, assess, and manage credit risks while strengthening sales performance.",
        ],
      },
      {
        mn: [
          "БЖДҮ-ийн санхүүжилтийн чанарын гол хүчин зүйлүүд, ЖДҮ сорилт болох нь",
          'БЖДҮ-ийн санхүүжилтийн "чанар"-ыг тодорхойлогч харилцагчийн үнэлгээ ХТМ,  зээлийн бүтэц, багцын чанар  зэрэгт дүн шинжилгээ хийх, ЖДҮ яагаад сорилт болдог, хэрхэн санхүүжилтийнхээ үр дүнг сайжруулах, Зээлийн эдийн засагч нар судалгааны ур чадварыг нэмэгдүүлэх ',
        ],
        en: [
          "Key Quality Factors in SME Financing",
          "Analyze what defines ‘quality’ in SME financing: client evaluation, loan structuring, and portfolio health. Improves financing outcomes.",
        ],
      },
      {
        mn: [
          "Үнэнч харилцагчаа хадгалан авч үлдэх батлагдсан туршлага",
          "Итгэлцэл, сэтгэл ханамж, урт хугацааны харилцааг бий болгоход тулгуурласан өндөр үр нөлөө бүхий харилцагчийг хадгалах стратегиас суралцах ",
        ],
        en: [
          "Proven Strategies to Retain Clients",
          "Learn high-impact customer retention strategies based on trust, satisfaction, and long-term relationship building.",
        ],
      },
      {
        mn: [
          "Санхүүгийн байгууллагуудын эрсдэлийн удирдлага",
          "Дотоод болон гадаад эрсдлийг үр дүнтэй үнэлэх, хянах, бууруулах арга хэрэгсэл, тогтолцоог нэвтрүүлэх.",
        ],
        en: [
          "Risk Management for Financial Institutions",
          "Introduce tools and frameworks to assess, monitor, and mitigate both internal and external risks effectively.",
        ],
      },
    ],
  },
  {
    icon: <FaUserTie className="text-3xl text-[#00879E] mb-2 mx-auto" />, // Consultant
    category: {
      mn: "Зөвлөхөөр удирдуулсан мэргэжлийн хөгжлийн модулиуд",
      en: "Consultant-Led Professional Development Modules",
    },
    items: [
      {
        mn: [
          "Бизнесийн үйл явцын шинэчлэл (BPR)",
          "Үр ашиг, бүтээмж, харилцагчийн сэтгэл ханамжийг хангахын тулд үндсэн процессуудыг хэрхэн зураглах, дүн шинжилгээ хийх, дахин төлөвлөх талаар суралц.",
        ],
        en: [
          "Business Process Reengineering (BPR)",
          "Learn how to map, analyze, and redesign core processes for efficiency, productivity, and client satisfaction.",
        ],
      },
      {
        mn: [
          "Таны дижитал өөрчлөлтөд хүрэх зам",
          "Зардал багатай, өргөтгөх боломжтой технологи ашиглан бизнесийн үндсэн чиг үүргийг дижитал болгон бүтээмжээ нэмэгдүүлэх нь",
        ],
        en: [
          "Your Road to Digital Transformation",
          "Step-by-step approach to digitizing key business functions using cost-effective, scalable technologies.",
        ],
      },
      {
        mn: [
          "Чанарын удирдлагын систем (ЧМС)",
          "Олон улсын чанарын стандартад ( ISO 9001) нийцсэн системийг хэрхэн зохион бүтээх, хэрэгжүүлэх талаар ойлгох.",
        ],
        en: [
          "Quality Management Systems (QMS)",
          "Understand how to design and implement systems aligned with international quality standards (e.g., ISO 9001).",
        ],
      },
      {
        mn: [
          "Байгууллагын чадавхийг бэхжүүлэх, удирдлагын сургалт",
          "Манлайлал, дунд шатны удирдлага, байгууллагын гүйцэтгэлийг сайжруулах цогц сургалт.",
        ],
        en: [
          "Organizational Capacity Building & Management Training",
          "Holistic training for improving leadership, middle management, and organizational performance.",
        ],
      },
      {
        mn: [
          "ISO менежерийн чадавхийг дээшлүүлэх хөтөлбөр",
          "ОУСБ-ын нийцлийн менежерүүдийг сургах, баталгаажуулах тусгай хөтөлбөр нь аудит, баталгаажуулалтад бэлтгэхэд тусалдаг.",
        ],
        en: [
          "ISO Manager Empowerment Program",
          "Specific program to train and certify ISO compliance managers, helping prepare for audits and certifications.",
        ],
      },
      {
        mn: [
          "Ажилчдын ур чадварыг дээшлүүлэх практик семинар",
          "Ажилчдад харилцагчийн үйлчилгээ, дижитал хэрэгсэл, багийн бүтээмжийн бодит ур чадварыг хөгжүүлэхэд туслах практик хичээлүүд.",
        ],
        en: [
          "Practical Employee Upskilling Workshops",
          "Hands-on sessions that help staff develop real-world skills in customer service, digital tools, and team productivity.",
        ],
      },
      {
        mn: [
          "Бизнесийн тасралтгүй байдлын менежмент (BCM)",
          "Идэвхтэй төлөвлөлтөөр үйл ажиллагааны доголдолд хэрхэн бэлдэж, түүнээс гарах талаар суралц.",
        ],
        en: [
          "Business Continuity Management (BCM)",
          "Learn how to prepare for and recover from operational disruptions through proactive planning.",
        ],
      },
    ],
  },
  {
    icon: <FaLeaf className="text-3xl text-[#00879E] mb-2 mx-auto" />, // ESG
    category: {
      mn: "ESG & Нөлөөллийн гүйцэтгэлийн модулиуд (Байгаль орчин, Нийгэм, Засаглал)",
      en: "ESG & Impact Performance Modules (Environmental, Social, Governance)",
    },
    items: [
      {
        mn: [
          "Уур амьсгалын өөрчлөлт ба түүний санхүүгийн байгууллагуудад үзүүлэх нөлөө",
          "Уур амьсгалтай холбоотой эрсдэлүүд зээлийн багцад хэрхэн нөлөөлж байгааг судалж, уур амьсгалд дасан зохицох, тэсвэрлэх стратегийг судлах.",
        ],
        en: [
          "Climate Change & Its Impact on Financial Institutions",
          "Examine how climate-related risks affect credit portfolios and explore strategies for climate adaptation and resilience.",
        ],
      },
      {
        mn: [
          "Дагаж мөрдөх танилцуулга сургалт",
          "Мөнгө угаахтай тэмцэх (AML), мэдээллийн нууцлал, зохицуулалтын эрсдэл, ёс зүйн зан үйл зэрэг үндсэн дагаж мөрдөх сэдвүүдийг хамарна.",
        ],
        en: [
          "Introductory Compliance Training",
          "Covers essential compliance topics: anti-money laundering (AML), data privacy, regulatory risk, and ethical conduct.",
        ],
      },
      {
        mn: [
          "Нийгмийн гүйцэтгэлийн стандарт үзүүлэлтүүд",
          "Олон улсад хүлээн зөвшөөрөгдсөн үзүүлэлтүүдийг ашиглан байгууллагынхаа нийгэмд үзүүлэх нөлөөллийг үнэлж, тайлагнаж сур.",
        ],
        en: [
          "Social Performance Standard Indicators",
          "Learn to assess and report on the social impact of your institution using recognized international indicators.",
        ],
      },
      {
        mn: [
          "Харилцагчийг хамгаалах зарчмуудын сургалт",
          "Дэлхийн сайн туршлагад үндэслэн энэхүү модуль нь харилцагчидтэй шударга харьцаж, зөв мэдээлэл өгч, хохирлоос хамгаалдаг.",
        ],
        en: [
          "Client Protection Principles Training",
          "Based on global good practices, this module ensures clients are treated fairly, informed properly, and protected from harm.",
        ],
      },
    ],
  },
];

const highlights = [
  {
    icon: <FaStar className="text-[#00879E] mr-2" />,
    mn: "Цогц хамрах хүрээ: Энэхүү сургалт нь санхүүгийн байгууллага, БСБ, ЖДҮ-ийг идэвхжүүлэгчдэд зориулагдсан стратегиас эхлээд дагаж мөрдөх зэрэг бүх гол талыг хамардаг.",
    en: "Comprehensive Coverage: The training touches every key aspect from strategy to compliance, designed for financial institutions, MFIs, and SME enablers.",
  },
  {
    icon: <FaStar className="text-[#00879E] mr-2" />,
    mn: "Захиалгат, практик: Бодит жишээнүүд, кейс судалгаа, нэн даруй хэрэгжүүлэх хэрэгслүүд.",
    en: "Customized & Practical: Real-world examples, case studies, and tools for immediate implementation.",
  },
  {
    icon: <FaStar className="text-[#00879E] mr-2" />,
    mn: "Дэлхийн стандартууд: ISO, SMART кампанит ажил, нийгмийн гүйцэтгэлийн хэмжүүр зэрэг олон улсын стандартуудтай нийцдэг.",
    en: "Global Standards: Aligns with international standards such as ISO, SMART Campaign, and social performance metrics.",
  },
  {
    icon: <FaStar className="text-[#00879E] mr-2" />,
    mn: "Өсөлтөд бэлтгэгдсэн: Байгууллагууд ёс зүйтэй, тогтвортой, үр дүнтэй хөгжих бат бөх суурийг бүрдүүлдэг.",
    en: "Prepared for Growth: Builds a solid foundation for organizations to grow ethically, sustainably, and effectively.",
  },
];

export default function TrainingPage() {
  const { language } = useLanguage();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Gradient Header */}
      <header className="bg-gradient-to-r from-[#00879E] to-[#006d7a] text-white py-16 text-center mb-12 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {language === "mn" ? "Сургалтын хөтөлбөрүүд" : "Training Programs"}
        </h1>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border-t-8 border-[#00879E] hover:shadow-2xl transition-shadow duration-300 flex flex-col p-8 group"
            >
              {module.icon}
              <h2 className="text-xl font-bold mb-4 text-[#00879E] text-center group-hover:text-[#006d7a] transition-colors">
                {module.category[language]}
              </h2>
              <div className="space-y-6 flex-1">
                {module.items.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {item[language][0]}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item[language][1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

        {/* Highlights Section */}
        <section className="bg-gradient-to-r from-[#F0F7FA] to-[#e6f3f7] rounded-2xl p-8 shadow flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#00879E] mb-6 text-center">
            {language === "mn" ? "Онцлох давуу талууд" : "Key Highlights"}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start bg-white rounded-xl shadow p-4 text-gray-700 text-base">
                {h.icon}
                <span>{h[language]}</span>
              </li>
            ))}
          </ul>
        </section>
    </main>
    </div>
  );
} 