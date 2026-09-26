'use client'

import { ArrowRight, Home, Droplet, Users, Trash2 } from 'lucide-react'

export default function Schemes() {
  const schemes = [
    {
      title: 'PM Awas Yojana',
      description: 'Providing affordable pucca houses to eligible urban families under an inclusive development mission.',
      icon: Home,
      color: 'bg-blue-100',
      borderColor: 'border-blue-500',
      link: 'https://pmay-urban.gov.in/'
    },
    {
      title: 'Swachh Bharat Mission',
      description: 'Ensuring scientific waste management, sanitation coverage, and cleaner neighborhood surroundings.',
      icon: Trash2,
      color: 'bg-green-100',
      borderColor: 'border-green-500',
      link: 'https://swachhbharatmission.gov.in/'
    },
    {
      title: 'Chief Minister Awas Yojana',
      description: 'Providing affordable pucca houses to eligible urban families under an inclusive development mission.',
      icon: Home,
      color: 'bg-blue-100',
      borderColor: 'border-blue-500',
      link: 'https://upcmo.up.nic.in/'
    },
   
  ]

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Major Government Schemes</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Smart, citizen-focused schemes implemented across Nagar Palika Parishad, Etah.
          </p>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schemes.map((scheme, idx) => {
              const Icon = scheme.icon
              return (
                <div
                  key={idx}
                  className={`bg-white rounded-lg shadow-md hover:shadow-lg transition border-l-4 ${scheme.borderColor} overflow-hidden`}
                >
                  <div className={`${scheme.color} p-6 flex items-center gap-4`}>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-blue-700" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{scheme.title}</h2>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 text-base leading-relaxed mb-6">
                      {scheme.description}
                    </p>
                    <a
                      href={scheme.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900 transition"
                    >
                      Know More
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-700">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Eligibility & Application
            </h3>
            <p className="text-gray-700 mb-4">
              Each scheme has specific eligibility criteria and application procedures. Visit the detailed pages above to understand your eligibility and apply for the schemes that benefit you.
            </p>
            <p className="text-gray-700">
              For assistance in application or more information, contact our citizen help desk at the municipal office or call our helpline during business hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
