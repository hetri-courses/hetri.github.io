'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Professional Animal Works', href: '/paw' },
  { name: 'About Us', href: '/aboutus' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  const handlePawLogin = () => {
    // Direct to PAW platform
    window.location.href = "https://paw.hetri.org";
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg font-syne-mono border-b border-hetri-primary/20">
      
      <nav className="container-max flex items-center justify-between p-4 font-syne-mono">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/Logo.png"
              alt="Hetri"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation - Segmented Button Style */}
        <div className="hidden md:flex items-center font-syne-mono">
          {/* Navigation Buttons */}
          <div className="flex items-center bg-hetri-accent backdrop-blur-sm rounded-xl p-1 mr-6 border border-hetri-primary/30">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href
              const isFirst = index === 0
              const isLast = index === navigation.length - 1

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-bold transition-all duration-200 font-syne-mono tracking-tight border-r ${
                    isLast ? 'border-r-0' : 'border-hetri-primary/20'
                  } ${
                    isFirst ? 'rounded-l-lg' : ''
                  } ${
                    isLast ? 'rounded-r-lg' : ''
                  } ${
                    isActive
                      ? 'bg-hetri-primary text-black shadow-md transform scale-105'
                      : 'text-white hover:bg-hetri-primary/20 hover:transform hover:scale-105'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
          
          {/* PAW Button */}
          <button
            onClick={handlePawLogin}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-hetri-primary text-black hover:bg-hetri-secondary text-sm font-bold transition-all duration-200 font-syne-mono hover:scale-105 hover:shadow-lg border border-hetri-primary"
            title="PAW"
          >
            <UserIcon className="h-5 w-5" />
            <span className="font-syne-mono">PAW</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white p-2 rounded-lg bg-hetri-accent hover:bg-hetri-primary/20 transition-all duration-200 border border-hetri-primary/30"
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
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-hetri-primary/20 font-syne-mono"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-base font-bold font-syne-mono tracking-tight py-3 px-4 rounded-lg transition-all duration-200 border ${
                    pathname === item.href
                      ? 'bg-hetri-primary text-black shadow-md border-hetri-primary'
                      : 'text-white hover:bg-hetri-primary/20 border-hetri-primary/20'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handlePawLogin}
                className="flex items-center space-x-2 w-full px-4 py-3 rounded-lg bg-hetri-primary text-black hover:bg-hetri-secondary transition-all duration-200 font-syne-mono text-sm font-bold hover:shadow-lg mt-4 border border-hetri-primary"
              >
                <UserIcon className="h-5 w-5" />
                <span className="font-syne-mono">PAW</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}