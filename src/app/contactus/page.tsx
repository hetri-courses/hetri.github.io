'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { 
  ArrowRightIcon, 
  UserGroupIcon,
  PresentationChartLineIcon,
  WrenchScrewdriverIcon,
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import ContactForm from '../../components/ContactForm'

const contactCards = [
  {
    icon: UserGroupIcon,
    title: 'Business Partnerships',
    description: 'Ready to integrate PAW and Hetri Camera into your facility? Let\'s discuss pricing, implementation, and custom solutions.',
    responseTime: '1-2 business days',
    email: 'partnerships@hetri.org',
    status: 'Business team available',
    priority: false,
    formType: 'general-questions' as const
  },
  {
    icon: PresentationChartLineIcon,
    title: 'Product Demo',
    description: 'See PAW and TreatTap in action. Schedule a personalized demo to experience our platform firsthand.',
    responseTime: '4-6 hours',
    email: 'demo@hetri.org',
    status: 'Demo specialists online',
    priority: false,
    formType: 'product-demo' as const
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Technical Support',
    description: 'Need help with implementation, integration, or troubleshooting? Our technical team provides priority support.',
    responseTime: '30 minutes',
    email: 'support@hetri.org',
    status: 'Support team standing by',
    priority: true,
    formType: 'technical-support' as const,
    disclaimer: 'Technical support is only available for existing Hetri account holders.'
  },
  {
    icon: QuestionMarkCircleIcon,
    title: 'General Questions',
    description: 'Have questions about our products, pricing, or how Hetri can help your facility? We\'re here to help.',
    responseTime: '4-6 hours',
    email: 'hello@hetri.org',
    status: 'Customer success team available',
    priority: false,
    formType: 'general-questions' as const
  }
]

function ContactUsContent() {
  const [showForm, setShowForm] = useState(false)
  const [currentFormType, setCurrentFormType] = useState<'schedule-demo' | 'product-demo' | 'general-questions' | 'technical-support'>('general-questions')
  const [currentFormTitle, setCurrentFormTitle] = useState('')
  
  const searchParams = useSearchParams()
  
  useEffect(() => {
    // Check URL parameters for form type
    const formType = searchParams.get('type')
    if (formType) {
      switch (formType) {
        case 'schedule-demo':
          setCurrentFormType('schedule-demo')
          setCurrentFormTitle('Schedule Demo')
          setShowForm(true)
          break
        case 'product-demo':
          setCurrentFormType('product-demo')
          setCurrentFormTitle('Product Demo')
          setShowForm(true)
          break
        case 'technical-support':
          setCurrentFormType('technical-support')
          setCurrentFormTitle('Technical Support')
          setShowForm(true)
          break
        case 'general-questions':
          setCurrentFormType('general-questions')
          setCurrentFormTitle('General Questions')
          setShowForm(true)
          break
      }
    }
  }, [searchParams])

  const handleShowForm = (formType: 'schedule-demo' | 'product-demo' | 'general-questions' | 'technical-support', title: string) => {
    setCurrentFormType(formType)
    setCurrentFormTitle(title)
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  return (
    <div className="pt-20">
      {/* Show Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <XMarkIcon className="h-5 w-5 text-gray-600" />
            </button>
            <ContactForm
              formType={currentFormType}
              title={currentFormTitle}
              onClose={handleCloseForm}
            />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero-section section-padding bg-gradient-to-b from-hetri-light to-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Transform Your Facility Together
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the best way to connect with our team. We're here to help you succeed with PAW and TreatTap.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="container-max max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className={`card p-6 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                  card.priority ? 'ring-2 ring-hetri-primary bg-hetri-light' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-hetri-light p-3 rounded-lg">
                      <card.icon className="h-8 w-8 text-hetri-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {card.title}
                      {card.priority && <span className="ml-2 text-xs bg-hetri-primary text-white px-2 py-1 rounded-full">Priority</span>}
                    </h3>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    
                    {/* Technical Support Disclaimer */}
                    {card.disclaimer && (
                      <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <ExclamationTriangleIcon className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-yellow-800">{card.disclaimer}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Response time:</span>
                        <span className="font-medium text-hetri-primary">{card.responseTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Status:</span>
                        <span className="font-medium text-green-600">{card.status}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleShowForm(card.formType, card.title)}
                        className="btn-primary inline-flex items-center text-sm flex-1"
                      >
                        Fill Form
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </button>
                    <a
                      href={`mailto:${card.email}?subject=Contact Request - ${card.title}`}
                        className="btn-secondary inline-flex items-center text-sm px-3"
                        title="Send Email"
                    >
                        Email
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Section */}
      <section className="bg-hetri-primary text-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer a Direct Conversation?
          </h2>
          <p className="text-xl text-hetri-light mb-8 max-w-2xl mx-auto">
            Sometimes the best solutions come from a simple conversation. Let's talk about your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@hetri.org?subject=Direct Contact Request"
              className="bg-white text-hetri-primary hover:bg-hetri-light font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Send Direct Email
            </a>
            <Link
              href="/waitlist"
              className="border-2 border-white text-white hover:bg-white hover:text-hetri-primary font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Join Our Waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ContactUsPage() {
  return (
    <Suspense fallback={<div className="pt-20 min-h-screen flex items-center justify-center">Loading...</div>}>
      <ContactUsContent />
    </Suspense>
  )
} 