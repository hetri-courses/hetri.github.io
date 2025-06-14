'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  const getCtaContent = () => {
    if (pathname.includes('paw')) {
      return { text: 'Request PAW Demo', href: '/contact?demo=paw' }
    } else if (pathname.includes('hetri-camera')) {
      return { text: 'Try TreatTap', href: '/contact?demo=treattap' }
    } else if (pathname.includes('contact')) {
      return { text: 'Call Now', href: 'tel:+1-555-HETRI' }
    }
    return { text: 'Schedule Demo', href: '/contact' }
  }

  const cta = getCtaContent()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed top-20 right-5 z-40"
        >
          <Link
            href={cta.href}
            className="block bg-hetri-primary hover:bg-hetri-secondary text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {cta.text}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 