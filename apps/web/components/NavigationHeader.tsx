'use client'

import { Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationHeader() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Main Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-4">
        
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img src="/governmentlogo.png" alt="Nagar Palika Logo" className="h-18 w-18" />
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              Nagar Palika Parishad, Etah
            </h1>
            <p className="text-base font-medium text-gray-600">
              Etah, Uttar Pradesh, India
            </p>
          </div>
        </div>

        {/* Primary Navigation Links (Text size increased to text-base / md:text-lg) */}
        <nav className="hidden items-center gap-2 md:flex">
          {[
            { name: 'Home', path: '/' },
            { name: 'Chairman', path: '/chairman' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`cursor-pointer rounded-md px-4 py-2 text-base font-semibold transition md:text-lg ${
                isActive(link.path)
                  ? 'bg-blue-700 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden flex-1 max-w-xs items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 sm:flex">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            suppressHydrationWarning
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      {/* Secondary Navbar (Centered & Text size increased to text-lg / md:text-xl) */}
      <nav className="w-full bg-blue-700 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 overflow-x-auto whitespace-nowrap px-4 py-1 text-lg font-medium md:gap-4 md:text-xl">
          {[
            { name: 'About', path: '/about' },
            { name: 'Department', path: '/department' },
            { name: 'Our Services', path: '/services' },
            { name: 'Public Grievance', path: '/publicgrievance' },
            { name: 'Schemes', path: '/schemes' },
            { name: 'Staff', path: '/staff' },
            { name: 'Property Tax', path: '/propertytax' },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block cursor-pointer rounded-md px-4 py-2.5 transition ${
                isActive(link.path) ? 'bg-blue-900 font-semibold' : 'hover:bg-blue-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
