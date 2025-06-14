'use client'

import React, { useState } from 'react'
import Link from 'next/link'

type PathType = 'excited' | 'concerned' | 'urgent' | 'exploring' | null

const contactCards = [
  {
    icon: '🚀',
    title: 'Business Partnerships',
    description: 'Ready to integrate PAW and Hetri Camera into your facility? Let\'s discuss pricing, implementation, and custom solutions.',
    responseTime: '1-2 business days',
    email: 'partnerships@hetri.org',
    status: 'Business team available',
    priority: false
  },
  {
    icon: '💡',
    title: 'Product Demo',
    description: 'See PAW and TreatTap in action. Schedule a personalized demo to experience our platform firsthand.',
    responseTime: '4-6 hours',
    email: 'demo@hetri.org',
    status: 'Demo specialists online',
    priority: false
  },
  {
    icon: '🛠️',
    title: 'Technical Support',
    description: 'Need help with implementation, integration, or troubleshooting? Our technical team provides priority support.',
    responseTime: '30 minutes',
    email: 'support@hetri.org',
    status: 'Support team standing by',
    priority: true
  },
  {
    icon: '❓',
    title: 'General Questions',
    description: 'Have questions about our products, pricing, or how Hetri can help your facility? We\'re here to help.',
    responseTime: '4-6 hours',
    email: 'hello@hetri.org',
    status: 'Customer success team available',
    priority: false
  }
]

const journeyOptions = [
  {
    id: 'excited',
    emoji: '🚀',
    text: 'I\'m excited to get started!',
    subtitle: 'Ready to transform my facility'
  },
  {
    id: 'concerned',
    emoji: '🤔',
    text: 'I\'m worried about implementation',
    subtitle: 'Need reassurance and support'
  },
  {
    id: 'urgent',
    emoji: '⚡',
    text: 'I need this yesterday!',
    subtitle: 'Looking for immediate solutions'
  },
  {
    id: 'exploring',
    emoji: '🔍',
    text: 'I\'m just exploring',
    subtitle: 'Learning about possibilities'
  }
]

const pathDetails = {
  excited: {
    title: '🎯 Fast-Track Partnership Path',
    description: 'Perfect! Let\'s get you set up quickly with our streamlined onboarding process.',
    timeline: ['Demo Today', 'Proposal 24hrs', 'Setup 1 Week'],
    email: 'partnerships@hetri.org',
    subject: 'Fast-Track Partnership - Ready to Start!',
    buttonText: 'Start Fast-Track Process'
  },
  concerned: {
    title: '🤝 Guided Support Journey',
    description: 'We\'ll address every concern and provide comprehensive support throughout your decision process.',
    timeline: ['Consultation Call', 'Custom Demo', 'Implementation Plan'],
    email: 'support@hetri.org',
    subject: 'Implementation Consultation - Need Guidance',
    buttonText: 'Get Personalized Support'
  },
  urgent: {
    title: '⚡ Priority Response Lane',
    description: 'We understand urgency. Our priority team will respond within 30 minutes to discuss immediate solutions.',
    timeline: ['30min Response', 'Same-Day Demo', 'Rush Implementation'],
    email: 'support@hetri.org',
    subject: 'URGENT - Immediate PAW Implementation Needed',
    buttonText: 'Get Priority Response'
  },
  exploring: {
    title: '📚 Educational Discovery Path',
    description: 'Take your time! We\'ll provide resources and gentle guidance to help you explore at your own pace.',
    timeline: ['Resource Pack', 'Optional Demo', 'Follow-up Check'],
    email: 'hello@hetri.org',
    subject: 'Exploring PAW - Send Resources Please',
    buttonText: 'Get Educational Resources'
  }
}

export default function ContactUsPage() {
  const [selectedPath, setSelectedPath] = useState<PathType>(null)

  const handlePathSelection = (pathType: PathType) => {
    setSelectedPath(pathType)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand every situation is unique. Tell us where you are in your journey, and we'll guide you to the perfect solution.
          </p>
        </div>
      </section>

      {/* Journey Mapper */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-5xl">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How are you feeling about implementing PAW & TreatTap?
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {journeyOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handlePathSelection(option.id as PathType)}
                  className={`card p-6 text-center cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-1 ${
                    selectedPath === option.id ? 'ring-2 ring-hetri-primary bg-hetri-light' : ''
                  }`}
                >
                  <div className="text-4xl mb-3">{option.emoji}</div>
                  <div className="font-medium text-gray-900 mb-2">{option.text}</div>
                  <div className="text-sm text-gray-600">{option.subtitle}</div>
                </div>
              ))}
            </div>

            {/* Recommended Path */}
            {selectedPath && (
              <div className="bg-white rounded-lg p-6 border-l-4 border-hetri-primary animate-fade-in">
                <div className="font-bold text-hetri-primary mb-3">
                  {pathDetails[selectedPath].title}
                </div>
                <div className="text-gray-600 mb-4">
                  {pathDetails[selectedPath].description}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pathDetails[selectedPath].timeline.map((step, index) => (
                    <div key={index} className="bg-hetri-light px-4 py-2 rounded-full text-sm text-gray-700">
                      {step}
                    </div>
                  ))}
                </div>
                <a
                  href={`mailto:${pathDetails[selectedPath].email}?subject=${encodeURIComponent(pathDetails[selectedPath].subject)}`}
                  className="btn-primary inline-block"
                >
                  {pathDetails[selectedPath].buttonText}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {contactCards.map((card, index) => (
              <div key={index} className="card p-8 relative hover:transform hover:-translate-y-2 transition-all duration-300">
                {card.priority && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    Priority
                  </div>
                )}
                
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{card.description}</p>
                
                <div className="bg-hetri-light p-3 rounded-lg mb-4">
                  <span className="text-sm text-gray-600">Response time: </span>
                  <span className="font-bold text-hetri-primary">{card.responseTime}</span>
                </div>
                
                <a
                  href={`mailto:${card.email}?subject=${encodeURIComponent(card.title + ' Inquiry')}`}
                  className="btn-primary inline-block mb-4"
                >
                  {card.title === 'Business Partnerships' ? 'Start Partnership Discussion' :
                   card.title === 'Product Demo' ? 'Schedule Demo' :
                   card.title === 'Technical Support' ? 'Get Technical Help' :
                   'Ask a Question'}
                </a>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {card.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl text-center">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Prefer a Direct Approach?</h3>
            <p className="text-gray-600 mb-6">
              Reach out to our founder directly for strategic discussions and partnership opportunities.
            </p>
            <a
              href="mailto:owner@hetri.org?subject=Direct Inquiry"
              className="btn-primary"
            >
              Contact Founder
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 