'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'PAW',
    href: '#',
    dropdown: [
      { name: 'PAW Platform', href: '/paw' },
      { name: 'PAW Camera (PAWC)', href: '/camera' },
      { name: 'TreatTap', href: '/treattap' },
    ]
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About Us', href: '/aboutus' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  const handleLogin = () => {
    // Direct facilities to contact us for account setup and login access
    window.location.href = "https://paw.hetri.org";
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [dropdownOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hetri-primary shadow-lg font-syne-mono">
      
      <nav className="container-max flex items-center justify-between p-4 font-syne-mono">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/LogoV2.png"
              alt="Hetri"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold font-syne-mono text-white">Hetri</span>
          </Link>
        </div>

        {/* Desktop Navigation - Segmented Button Style */}
        <div className="hidden md:flex items-center font-syne-mono">
          {/* Navigation Buttons */}
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-1 mr-6">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(subItem => pathname === subItem.href))
              const isFirst = index === 0
              const isLast = index === navigation.length - 1

              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative dropdown-container">
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`relative px-4 py-2 text-sm font-bold transition-all duration-200 font-syne-mono tracking-tight flex items-center gap-1 ${
                        isActive
                          ? 'bg-white text-hetri-primary shadow-md transform scale-105'
                          : 'text-white hover:bg-white/20 hover:transform hover:scale-105'
                      }`}
                    >
                      {item.name}
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                                pathname === subItem.href ? 'text-hetri-primary font-semibold' : 'text-gray-700'
                              }`}
                              onClick={() => setDropdownOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-bold transition-all duration-200 font-syne-mono tracking-tight ${
                    isFirst ? 'rounded-l-lg' : ''
                  } ${
                    isLast ? 'rounded-r-lg' : ''
                  } ${
                    isActive
                      ? 'bg-white text-hetri-primary shadow-md transform scale-105'
                      : 'text-white hover:bg-white/20 hover:transform hover:scale-105'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
          
          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-hetri-primary text-sm font-bold transition-all duration-200 font-syne-mono hover:scale-105 hover:shadow-lg"
            title="Login"
          >
            <UserIcon className="h-5 w-5" />
            <span className="font-syne-mono">Login</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-hetri-primary border-t border-white/20 font-syne-mono"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => {
                if (item.dropdown) {
                  return (
                    <div key={item.name} className="space-y-2">
                      <div className="text-base font-bold font-syne-mono tracking-tight py-3 px-4 text-white">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block text-sm font-bold font-syne-mono tracking-tight py-2 px-4 rounded-lg transition-all duration-200 ${
                              pathname === subItem.href
                                ? 'bg-white text-hetri-primary shadow-md'
                                : 'text-white/80 hover:bg-white/20 hover:text-white'
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-base font-bold font-syne-mono tracking-tight py-3 px-4 rounded-lg transition-all duration-200 ${
                      pathname === item.href
                        ? 'bg-white text-hetri-primary shadow-md'
                        : 'text-white hover:bg-white/20'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <button
                onClick={handleLogin}
                className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-hetri-primary transition-all duration-200 font-syne-mono text-sm font-bold hover:shadow-lg mt-4"
              >
                <UserIcon className="h-5 w-5" />
                <span className="font-syne-mono">Login</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 
