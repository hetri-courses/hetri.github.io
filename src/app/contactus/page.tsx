'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { 
  ArrowRightIcon, 
  QuestionMarkCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import ContactForm from '../../components/ContactForm'

const contactCards = [
  {
    icon: QuestionMarkCircleIcon,
    title: 'Questions',
    description: 'Ready to upgrade your business? Have questions about how Hetri transforms businesses into market leaders? We\'re here to help you succeed.',
    responseTime: '2-4 hours',
    email: 'questions@hetri.org',
    status: 'Available',
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
    <div className="pt-20" style={{ height: 'auto', minHeight: 'auto' }}>
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
      <section className="hero-section section-padding bg-gradient-to-b from-hetri-dark to-black">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-gradient">Contact Us</span>
          </h1>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="bg-black px-4 sm:px-6 lg:px-8 py-16 pb-0 border-t border-hetri-primary/30">
        <div className="container-max max-w-2xl">
          <div className="flex justify-center">
            {contactCards.map((card, index) => (
              <div
                key={index}
                className={`p-6 transition-all duration-300 hover:transform hover:-translate-y-1 ${
                  card.priority ? 'ring-2 ring-hetri-primary' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-hetri-primary/20 p-3 rounded-lg">
                      <card.icon className="h-8 w-8 text-hetri-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {card.title}
                      {card.priority && <span className="ml-2 text-xs bg-hetri-primary text-black px-2 py-1 rounded-full">Priority</span>}
                    </h3>
                    <p className="text-gray-300 mb-4">{card.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Response time:</span>
                        <span className="font-medium text-hetri-primary">{card.responseTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Status:</span>
                        <span className="font-medium text-green-400">{card.status}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleShowForm(card.formType, card.title)}
                        className="btn-primary inline-flex items-center text-sm flex-1"
                      >
                        Contact our Team
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </button>
                    <a
                      href={`mailto:${card.email}?subject=Market Command Request - ${card.title}`}
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