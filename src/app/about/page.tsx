import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#00879E] mb-6">Introduction of Company</h2>
          <div className="prose max-w-none text-gray-600">
            <p>Content for company introduction...</p>
          </div>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#00879E] mb-6">Vision</h2>
          <div className="prose max-w-none text-gray-600">
            <p>Content for vision...</p>
          </div>
        </section>

        {/* Goal */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#00879E] mb-6">Goal</h2>
          <div className="prose max-w-none text-gray-600">
            <p>Content for goal...</p>
          </div>
        </section>

        {/* Value */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#00879E] mb-6">Value</h2>
          <div className="prose max-w-none text-gray-600">
            <p>Content for value...</p>
          </div>
        </section>

        {/* Motto */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#00879E] mb-6">Motto</h2>
          <div className="prose max-w-none text-gray-600">
            <p>Content for motto...</p>
          </div>
        </section>

        {/* Ethical Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#00879E] mb-6">Ethical Principles</h2>
          <div className="prose max-w-none text-gray-600">
            <p>Content for ethical principles...</p>
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-32 bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#00879E] text-center mb-16">Team of Lead</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Founder & CEO */}
              <div className="text-center">
                <div className="relative aspect-square w-full mb-6">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-[#00879E]/10">
                    <Image
                      src="/images/team/ceo.jpg"
                      alt="Founder & CEO"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#00879E] mb-2">Ts Otgontsetseg</h3>
                <p className="text-gray-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-500 text-sm">
                  Brief description about the CEO's experience and role in the company.
                </p>
              </div>

              {/* Director of Operations */}
              <div className="text-center">
                <div className="relative aspect-square w-full mb-6">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-[#00879E]/10">
                    <Image
                      src="/images/team/operations.jpg"
                      alt="Director of Operations"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#00879E] mb-2">G Oulen</h3>
                <p className="text-gray-600 font-medium mb-4">Director of Operations</p>
                <p className="text-gray-500 text-sm">
                  Brief description about the Director's experience and responsibilities.
                </p>
              </div>

              {/* CTO */}
              <div className="text-center">
                <div className="relative aspect-square w-full mb-6">
                  <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-[#00879E]/10">
                    <Image
                      src="/images/team/cto.jpg"
                      alt="Chief Technology Officer"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#00879E] mb-2">G Tergel</h3>
                <p className="text-gray-600 font-medium mb-4">Chief Technology Officer</p>
                <p className="text-gray-500 text-sm">
                  Brief description about the CTO's expertise and technical leadership.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
