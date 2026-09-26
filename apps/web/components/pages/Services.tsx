'use client'

import { ArrowRight, FileText, AlertCircle, Scale, MapPin, FileCheck, DollarSign, Award } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'etender',
      title: 'E-Tender',
      description: 'Access live tenders, download documents & participate in procurement.',
      icon: FileText,
      link: '#'
    },
    {
      id: 'grievance',
      title: 'Public Grievance',
      description: 'Submit complaints & track your grievance resolution in real time.',
      icon: AlertCircle,
      link: '#'
    },
    {
      id: 'rti',
      title: 'RTI',
      description: 'Submit RTI applications & access transparency-related public documents.',
      icon: Scale,
      link: '#'
    },
    {
      id: 'wards',
      title: 'Zones / Wards',
      description: 'Check ward boundaries, zone maps & local area administrative details.',
      icon: MapPin,
      link: '#'
    },
    {
      id: 'charter',
      title: 'Citizen Charter',
      description: 'View service time limits, responsibilities & citizen rights.',
      icon: FileCheck,
      link: '#'
    },
    {
      id: 'tax',
      title: 'Property Tax',
      description: 'Check dues, generate challans & pay property tax online.',
      icon: DollarSign,
      link: '#'
    },
    {
      id: 'certificate',
      title: 'Birth / Death Certificate',
      description: 'Apply for certificates, track applications & download approvals.',
      icon: Award,
      link: '#'
    }
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-80 bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url(/hero-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full py-12">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Our Services
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Nagar Palika Parishad Etah offers citizen-centric, transparent and technology-driven services that ensure better governance and improved urban living.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-blue-300 transition duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition">
                    <Icon className="w-7 h-7 text-blue-700 group-hover:text-white transition" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Call to Action Section */}
        <section className="mt-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Our dedicated team is here to assist you with any queries or service-related information.
          </p>
          <button className="bg-white text-blue-700 px-6 py-3 rounded font-semibold hover:bg-blue-50 transition">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  )
}
