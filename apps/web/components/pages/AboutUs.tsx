'use client'

import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react'

export default function AboutUs() {
  const departments = [
    { icon: '🏗️', name: 'Public Works', id: 'public-works' },
    { icon: '🏛️', name: 'Property Tax', id: 'property-tax' },
    { icon: '💧', name: 'Water Supply', id: 'water-supply' },
    { icon: '🚿', name: 'Sanitation', id: 'sanitation' },
    { icon: '👶', name: 'Birth/Health Card', id: 'birth-health' },
  ]

  const statistics = [
    { value: '150+', label: 'YEARS OF SERVICE' },
    { value: '25+', label: 'ADMINISTRATIVE WARDS' },
    { value: '120K', label: 'CITIZENS SERVED' },
    { value: '100%', label: 'DIGITAL GOVERNANCE' },
  ]

  const milestones = [
    {
      year: '1868',
      title: 'Founding Year',
      description: 'The Municipal Committee of Etah was established under the British Raj, marking the beginning of organized municipal governance.',
    },
    {
      year: '1950',
      title: 'Post-Independence Reorg',
      description: 'Significant administrative changes to align with the Constitution of India.',
    },
    {
      year: '1994',
      title: 'Urban Body Status',
      description: 'Upgraded following the 74th Constitutional Amendment to empower local urban bodies.',
    },
    {
      year: '2023',
      title: 'Smart Governance',
      description: 'Full transition to e-governance, digital tax certificate issuance and citizen portal launch.',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-cover bg-right flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(/clock-tower.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          minHeight: '320px',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/95 to-blue-600/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full py-16">
          <div className="text-white max-w-2xl">
            <p className="text-sm font-semibold mb-2 opacity-90">Established 1868</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              About Nagar Palika Parishad, Etah
            </h1>
            <p className="text-lg text-white/90">
              A legacy of over 150 years dedicated to the growth, well-being, and sustainable development of Etah city.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Departments */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-24">
              <h3 className="font-bold text-lg text-blue-700 mb-4">Departments</h3>
              <div className="space-y-3">
                {departments.map((dept) => (
                  <button
                    suppressHydrationWarning
                    key={dept.id}
                    className="w-full text-left flex items-center gap-3 p-3 rounded hover:bg-blue-50 transition text-gray-700 hover:text-blue-700"
                  >
                    <span className="text-xl">{dept.icon}</span>
                    <span className="text-sm font-medium">{dept.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Mission & Vision */}
            <section>
              <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
                Our Mission & Vision
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-blue-700 mb-2">
                        Unwavering Transparency
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Ensuring every decision and public fund expenditure is accessible to the citizens.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg text-blue-700 mb-2">
                        Sustainable Growth
                      </h3>
                      <p className="text-gray-700 text-sm">
                        Pioneering urban planning that balances modern infrastructure with environmental care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {statistics.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl font-bold text-blue-700 mb-2">
                      {stat.value}
                    </div>
                    <p className="text-xs font-semibold text-gray-600 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Historical Milestone */}
            <section>
              <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
                Historical Milestone
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-blue-200" />

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {milestones.map((milestone, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-6 h-6 bg-blue-700 rounded-full border-4 border-white shadow-md" />
                      </div>
                      <h3 className="font-bold text-blue-700 mb-1">{milestone.year}</h3>
                      <h4 className="font-semibold text-gray-800 mb-2">{milestone.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Administrative Hierarchy */}
            <section>
              <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
                Administrative Hierarchy
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        The Leadership
                      </p>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">
                        Hon&apos;ble Chairman
                      </h3>
                      <p className="text-sm text-gray-600">
                        The elected political head of the municipality, responsible for policy decisions and representing citizen interests.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                        Administration
                      </p>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">
                        Executive Officer (EO)
                      </h3>
                      <p className="text-sm text-gray-600">
                        The administrative head who oversees the execution of all board decisions and manages the municipal bureaucracy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    🏥 Health & Sanitation
                  </h3>
                  <p className="text-sm text-gray-600">
                    Managing public health and waste management services.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    💰 Revenue & Finance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Budgeting and collection of property and municipal taxes.
                  </p>
                </div>

                <div className="md:col-span-2 bg-blue-700 text-white rounded-lg p-8">
                  <h3 className="font-bold text-lg mb-2">🏗️ Engineering Works</h3>
                  <p className="text-sm">
                    Responsible for roads, street lighting, public buildings, and water infrastructure development.
                  </p>
                  <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">
                    View Projects
                  </button>
                </div>
              </div>
            </section>

            {/* City Pride Gallery */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-blue-700">City Pride</h2>
                <a href="#" className="text-blue-700 font-semibold text-sm hover:underline">
                  View Full Gallery →
                </a>
              </div>
              <p className="text-gray-600 text-sm mb-6">
                Visual glimpses of Etah&apos;s municipal landmarks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-64 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg overflow-hidden flex items-center justify-center text-white text-center p-4">
                  <p className="font-semibold">Historic Clock Tower</p>
                </div>
                <div className="h-64 bg-gradient-to-br from-green-300 to-green-500 rounded-lg overflow-hidden flex items-center justify-center text-white text-center p-4">
                  <p className="font-semibold">Public Park</p>
                </div>
                <div className="h-64 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg overflow-hidden flex items-center justify-center text-white text-center p-4">
                  <p className="font-semibold">Town Square</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

