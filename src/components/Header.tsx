'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, UserIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'TreatTap', href: '/treattap' },
  { name: 'Pricing', href: '/pricing' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleLogin = () => {
    // Direct facilities to contact us for account setup and login access
    window.location.href = "https://paw.hetri.org";
  }

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
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-bold transition-all duration-200 font-syne-mono tracking-tight ${
                  index === 0 ? 'rounded-l-lg' : ''
                } ${
                  index === navigation.length - 1 ? 'rounded-r-lg' : ''
                } ${
                  pathname === item.href
                    ? 'bg-white text-hetri-primary shadow-md transform scale-105'
                    : 'text-white hover:bg-white/20 hover:transform hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
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
              {navigation.map((item) => (
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
              ))}
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
