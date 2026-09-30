'use client'

import { Menu, Search, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const primaryLinks = [
  { name: 'Home', path: '/' },
  { name: 'Chairman', path: '/chairman' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const secondaryLinks = [
  { name: 'About', path: '/about' },
  { name: 'Department', path: '/department' },
  { name: 'Our Services', path: '/services' },
  { name: 'Public Grievance', path: '/publicgrievance' },
  { name: 'Schemes', path: '/schemes' },
  { name: 'Staff', path: '/staff' },
  { name: 'Property Tax', path: '/propertytax' },
]

export default function NavigationHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isMobileMenuOpen])

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Main Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 xl:gap-8 xl:py-4">
        
        {/* Logo and Title */}
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3 xl:flex-initial">
          <img src="/governmentlogo.png" alt="Nagar Palika Logo" className="h-12 w-12 shrink-0 sm:h-14 sm:w-14 xl:h-18 xl:w-18" />
          <div className="min-w-0">
            <h1 className="text-sm leading-tight font-bold text-blue-700 sm:text-lg xl:text-2xl">
              Nagar Palika Parishad, Etah
            </h1>
            <p className="text-[11px] leading-tight font-medium text-gray-600 sm:text-sm xl:text-base">
              Etah, Uttar Pradesh, India
            </p>
          </div>
        </div>

        {/* Primary Navigation Links (Text size increased to text-base / md:text-lg) */}
        <nav className="hidden items-center gap-2 xl:flex" aria-label="Primary navigation">
          {primaryLinks.map((link) => (
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
        <div className="hidden max-w-xs flex-1 items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 xl:flex">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            suppressHydrationWarning
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-200 text-gray-700 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 xl:hidden"
          aria-label="Open navigation menu"
          aria-controls="mobile-navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Secondary Navbar */}
      <nav className="hidden w-full bg-blue-700 text-white xl:block" aria-label="Services navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 overflow-x-auto whitespace-nowrap px-4 py-1 text-lg font-medium md:gap-4 md:text-xl">
          {secondaryLinks.map((link) => (
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

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden" id="mobile-navigation">
          <button
            type="button"
            className="absolute inset-0 h-full w-full bg-slate-950/50"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <aside className="absolute inset-y-0 right-0 flex h-dvh w-[min(22rem,88vw)] flex-col overflow-y-auto bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <span className="text-lg font-semibold text-gray-900">Navigation</span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                aria-label="Close navigation menu"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-4">
              <Search className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
              <input
                suppressHydrationWarning
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <nav className="flex flex-col gap-1 px-3 py-4" aria-label="Mobile navigation">
              {[...primaryLinks, ...secondaryLinks].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`rounded-md px-3 py-3 text-base font-medium transition ${
                    isActive(link.path)
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  )
}
