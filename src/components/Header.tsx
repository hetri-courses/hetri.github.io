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
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contactus' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleLogin = () => {
    // Direct facilities to contact us for account setup and login access
    window.location.href = '/contactus?subject=Facility Login Setup Request'
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-hetri-primary font-syne-mono">
      {/* Ambient info bar */}
      <div className="h-0.5 bg-gradient-to-r from-hetri-primary via-hetri-secondary to-hetri-primary bg-[length:200%_100%] animate-ambient-flow" />
      
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
            <span className="text-2xl font-bold font-syne-mono text-hetri-primary">Hetri</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-syne-mono">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-base font-bold transition-all duration-200 font-syne-mono tracking-tight group ${
                pathname === item.href
                  ? 'text-hetri-primary'
                  : 'text-gray-800 hover:text-hetri-primary'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-hetri-primary transition-all duration-200 ${
                pathname === item.href 
                  ? 'w-full' 
                  : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          
          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl border-2 border-hetri-primary text-hetri-primary hover:bg-hetri-primary hover:text-white text-sm font-bold transition-all duration-200 font-syne-mono hover:scale-105 hover:shadow-lg hover:shadow-hetri-primary/25"
            title="Hetri Login"
          >
            <UserIcon className="h-5 w-5" />
            <span className="font-syne-mono">Hetri Login</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-700"
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
            className="md:hidden bg-white border-t border-gray-200 font-syne-mono"
          >
            <div className="px-4 py-6 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-base font-bold font-syne-mono tracking-tight py-2 transition-all duration-200 ${
                    pathname === item.href
                      ? 'text-hetri-primary border-l-4 border-hetri-primary pl-4'
                      : 'text-gray-800 hover:text-hetri-primary hover:pl-2'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleLogin}
                className="flex items-center space-x-2 w-full px-4 py-3 rounded-xl border-2 border-hetri-primary text-hetri-primary hover:bg-hetri-primary hover:text-white transition-all duration-200 font-syne-mono text-sm font-bold hover:shadow-lg"
              >
                <UserIcon className="h-5 w-5" />
                <span className="font-syne-mono">Hetri Login</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 