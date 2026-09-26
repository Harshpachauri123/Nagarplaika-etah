'use client'

import { ChevronRight, AlertCircle, Users, Leaf, Zap } from 'lucide-react'

export default function ChairmanProfile() {
  const activities = [
    {
      date: '12 OCT',
      title: 'Water Supply Infrastructure Meeting',
      description: 'Reviewed new water treatment facility plans for North Ward',
    },
    {
      date: '05 OCT',
      title: 'Community Health Initiative Launch',
      description: 'Inaugurated free health screening camps across all wards',
    },
    {
      date: '28 SEP',
      title: 'Digital Literacy Program',
      description: 'Trained 500 senior citizens on digital payment systems',
    },
    {
      date: '20 SEP',
      title: 'Road Infrastructure Review',
      description: 'Inspected ongoing road construction projects in Central Ward',
    },
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span>Leadership</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blue-700 font-semibold">Chairman&apos;s Profile</span>
        </div>

        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          Chairman&apos;s Profile
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Biography Block */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Portrait */}
                <div className="bg-linear-to-br from-blue-600 to-blue-800 h-80 md:h-auto flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-24 h-24 text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-blue-900 mb-1">
                    Shri Smt. Sudha Gupta
                  </h2>
                  <p className="text-lg text-red-600 font-semibold mb-4">
                    Honorable Chairman
                  </p>
                  <p className="text-gray-700 mb-6">
                    Public Service Tenured since 2020 | 15+ Years of Municipal
                    Governance Experience
                  </p>

                  <h4 className="font-bold text-gray-900 mb-3">Key Focus Areas:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-700 rounded-full" />
                      Urban Planning & Infrastructure
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-700 rounded-full" />
                      Community Health Initiatives
                    </li>
                    <li className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-700 rounded-full" />
                      Digital Literacy & Governance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Biography Text */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Biography</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Shri Smt. Sudha Gupta has been serving as the Honorable Chairman of
                Nagar Palika Parishad, Etah since 2020. With over 15 years of
                experience in municipal governance and public administration, she has
                demonstrated exceptional commitment to citizen welfare and transparent
                governance.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                During her tenure, she has successfully implemented numerous
                infrastructure development projects, digitized municipal services, and
                initiated community engagement programs that have significantly improved
                the quality of life for citizens across all wards of Etah.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Her vision for Etah 2026 focuses on creating a sustainable, inclusive,
                and digitally advanced municipality that serves as a model for urban
                governance in the region.
              </p>
            </div>

            {/* Recent Activities Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Recent Activities
              </h3>
              <div className="space-y-6">
                {activities.map((activity, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="relative flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-blue-100 border-4 border-blue-700 flex items-center justify-center font-bold text-blue-700 text-xs text-center px-2">
                        {activity.date}
                      </div>
                      {idx < activities.length - 1 && (
                        <div className="w-1 h-12 bg-blue-300 mt-2" />
                      )}
                    </div>
                    <div className="pb-4 flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        {activity.title}
                      </h4>
                      <p className="text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Chairman's Note */}
            <div className="bg-white border-l-4 border-blue-700 rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-3">Chairman&apos;s Note</h4>
              <blockquote className="text-gray-700 italic border-l-4 border-gray-300 pl-4">
                &quot;Our commitment is to ensure that every citizen of Etah
                experiences transparent, efficient, and inclusive governance. Together,
                we build a stronger, more prosperous community.&quot;
              </blockquote>
              <p className="text-sm text-gray-600 mt-4">
                — Shri Smt. Sudha Gupta
              </p>
            </div>

            {/* Vision 2026 Grid */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Vision 2026</h4>
              <div className="space-y-3">
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-lg p-4">
                  <Leaf className="w-8 h-8 text-green-700 mb-2" />
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">
                    Pristine Etah
                  </h5>
                  <p className="text-xs text-gray-700">
                    100% waste collection & recycling
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-300 rounded-lg p-4">
                  <Zap className="w-8 h-8 text-blue-700 mb-2" />
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">
                    Modern Infrastructure
                  </h5>
                  <p className="text-xs text-gray-700">
                    LED street lighting in all wards
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-300 rounded-lg p-4">
                  <Zap className="w-8 h-8 text-purple-700 mb-2" />
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">
                    Digital Governance
                  </h5>
                  <p className="text-xs text-gray-700">
                    100% paperless operations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
