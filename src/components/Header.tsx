'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, MicrophoneIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contactus' },
  { name: 'Waitlist', href: '/waitlist' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showContextNav, setShowContextNav] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const pathname = usePathname()

  // Context-aware content based on current page
  const getContextContent = () => {
    if (pathname.includes('aboutus')) {
      return { text: 'Learning about Hetri', cta: 'Join Waitlist' }
    } else if (pathname.includes('faq')) {
      return { text: 'Getting answers', cta: 'Contact Us' }
    } else if (pathname.includes('contactus')) {
      return { text: 'Ready to connect', cta: 'Call Now' }
    } else if (pathname.includes('waitlist')) {
      return { text: 'Joining early access', cta: 'Get Started' }
    } else if (pathname === '/') {
      return { text: 'Welcome to Hetri', cta: 'Explore Solutions' }
    }
    return { text: 'Exploring Hetri solutions', cta: 'Get Started' }
  }

  const context = getContextContent()

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContextNav(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [pathname])

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      
      setIsListening(true)
      
      recognition.onresult = (event: any) => {
        const query = event.results[0][0].transcript.toLowerCase()
        
        if (query.includes('demo') || query.includes('contact')) {
          window.location.href = '/contactus'
        } else if (query.includes('about')) {
          window.location.href = '/aboutus'
        } else if (query.includes('faq') || query.includes('question')) {
          window.location.href = '/faq'
        } else if (query.includes('waitlist') || query.includes('join')) {
          window.location.href = '/waitlist'
        } else {
          window.location.href = `/contactus?q=${encodeURIComponent(query)}`
        }
      }
      
      recognition.onerror = () => {
        setIsListening(false)
      }
      
      recognition.onend = () => {
        setIsListening(false)
      }
      
      recognition.start()
    } else {
      const query = prompt('What would you like to know about Hetri?')
      if (query) {
        window.location.href = `/contactus?q=${encodeURIComponent(query)}`
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-hetri-primary">
      {/* Ambient info bar */}
      <div className="h-0.5 bg-gradient-to-r from-hetri-primary via-hetri-secondary to-hetri-primary bg-[length:200%_100%] animate-ambient-flow" />
      
      <nav className="container-max flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/hetri-logo.png"
              alt="Hetri"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold font-mono text-hetri-primary">Hetri</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === item.href
                  ? 'text-hetri-primary'
                  : 'text-gray-700 hover:text-hetri-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Voice Search */}
          <button
            onClick={handleVoiceSearch}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-hetri-primary text-sm font-medium transition-all duration-200 ${
              isListening
                ? 'bg-hetri-primary text-white'
                : 'text-hetri-primary hover:bg-hetri-primary hover:text-white'
            }`}
            title="Ask Hetri anything"
          >
            <MicrophoneIcon className="h-4 w-4" />
            <span>{isListening ? 'Listening...' : 'Ask Hetri'}</span>
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

      {/* Context Navigation */}
      <AnimatePresence>
        {showContextNav && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full right-4 bg-hetri-primary text-white px-4 py-2 rounded-b-lg text-sm font-medium shadow-lg"
          >
            <div className="absolute -top-1 right-5 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-l-transparent border-r-transparent border-b-hetri-primary" />
            {context.text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-base font-medium ${
                    pathname === item.href
                      ? 'text-hetri-primary'
                      : 'text-gray-700 hover:text-hetri-primary'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleVoiceSearch}
                className="flex items-center space-x-2 w-full px-4 py-2 rounded-lg border-2 border-hetri-primary text-hetri-primary hover:bg-hetri-primary hover:text-white transition-colors duration-200"
              >
                <MicrophoneIcon className="h-4 w-4" />
                <span>{isListening ? 'Listening...' : 'Ask Hetri'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 