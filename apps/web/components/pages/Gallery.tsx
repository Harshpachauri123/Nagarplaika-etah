
'use client'

import { Upload, Image as ImageIcon, Filter } from 'lucide-react'
import { useState } from 'react'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All Highlights')

  const filters = [
    'All Highlights',
    'Events',
    'Development',
    'Landmarks',
  ]

  const galleryItems = [
    {
      title: 'Historical Grandeur of Etah Parishad',
      category: 'Landmarks',
      description: 'The iconic traditional administration block representing our regional heritage',
      image: 'https://images.pexels.com/photos/2047397/pexels-photo-2047397.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Greening Etah: Reforestation Drive',
      category: 'Development',
      description: 'Community participation in planting 10,000 trees across the city parks',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Swachh Etah Abhiyan',
      category: 'Events',
      description: 'Citizens join municipal forces for active cleanliness and waste management drives',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Digital Payment System Launch',
      category: 'Events',
      description: 'Honorable Chairman inaugurates the new online citizen tax, license fees, and utility payment portal dashboard.',
      // Fixed with a highly reliable, premium digital dashboard interface image
      image: 'https://images.pexels.com/photos/6347734/pexels-photo-6347734.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'LED Street Lighting Project',
      category: 'Development',
      description: 'Modern environment-friendly infrastructure upgrade deployed in all administrative wards',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Public Health Clinic Inauguration',
      category: 'Events',
      description: 'New community medical facility serving local urban families and primary care needs',
      image: 'https://images.pexels.com/photos/3951878/pexels-photo-3951878.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]

  const filteredItems =
    activeFilter === 'All Highlights'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-12">
      {/* Header Banner */}
      <section className="bg-linear-to-r from-blue-700 to-blue-900 text-white py-12 px-4 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              Visual Heritage & Progress
            </h1>
            <p className="text-blue-100">
              Documenting the growth, landscapes, and achievements of Nagar Palika Parishad, Etah
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-white/10 p-1.5 rounded-xl backdrop-blur-sm self-start md:self-center">
            {filters.map((filter) => (
              <button
                suppressHydrationWarning
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-white text-blue-950 shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-72 bg-linear-to-br from-blue-900 to-blue-950 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
            >
              {/* Fallback Placeholder Container (Sits behind the image) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-blue-700 to-blue-900 p-6 text-center">
                <ImageIcon className="w-12 h-12 text-blue-300/40 mb-2" />
                <span className="text-xs text-blue-200/50 font-medium">Loading Visual Reference...</span>
              </div>

              {/* Actual Background Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                // Handle image broken links gracefully by turning off the broken icon layout
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />

              {/* Dark Gradient Overlay for consistent, crisp text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

              {/* Title and Description Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10">
                <h3 className="text-lg font-bold text-white leading-tight tracking-wide drop-shadow-sm">
                  {item.title}
                </h3>
                
                <p className="text-xs text-gray-200 mt-2 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 overflow-hidden transition-all duration-300 ease-in-out">
                  {item.description}
                </p>
              </div>

              {/* Category Tag Badge */}
              <div className="absolute top-4 left-4 z-10 bg-orange-600 text-white px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider shadow-md">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm mb-16">
            <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">No updates found in this category right now</p>
          </div>
        )}

        {/* Contribute Section */}
        <div className="bg-linear-to-r from-blue-800 to-blue-950 rounded-2xl p-10 md:p-14 text-white text-center shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <Upload className="w-12 h-12 mx-auto mb-4 text-orange-400" />
          <h2 className="text-3xl font-bold mb-3 tracking-wide">Contribute to the Gallery</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            Help us document the progress and achievements of our local municipality. Share
            your high-resolution photos of regional public events, modern infrastructure developments, 
            and civic community initiatives.
          </p>
          <button 
            type="button"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all inline-flex items-center gap-2 shadow-sm text-sm"
          >
            <Upload className="w-4 h-4" />
            Submit Photos
          </button>
        </div>
      </section>
    </div>
  )
}
