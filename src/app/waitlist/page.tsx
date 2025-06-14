'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRightIcon, CheckCircleIcon, RocketLaunchIcon, XMarkIcon } from '@heroicons/react/24/outline'
import WaitlistForm from '../../components/WaitlistForm'

const benefits = [
  'Early access to PAW beta features',
  'Priority implementation scheduling',
  'Exclusive pricing for early adopters',
  'Direct feedback channel to development team',
  'Access to live product demos',
  'Free consultation with our specialists'
]

export default function WaitlistPage() {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
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
            <WaitlistForm onClose={handleCloseForm} />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-hetri-primary to-hetri-secondary text-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join the Hetri Revolution
          </h1>
          <p className="text-xl md:text-2xl text-hetri-light mb-8 max-w-3xl mx-auto">
            Be among the first to transform your pet care facility with PAW and TreatTap technology.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 inline-block">
            <div className="flex items-center justify-center">
              <RocketLaunchIcon className="h-5 w-5 text-white mr-2" />
              <span className="text-hetri-light text-sm">Early Access Program</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join the Waitlist?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Early access means priority support, exclusive features, and special pricing for our founding partners.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max max-w-2xl">
          <div className="card p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Reserve Your Spot Today
            </h3>
            
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-hetri-primary mb-2">
                  #4
                </div>
                <div className="text-gray-600">Current waitlist position</div>
              </div>
              
              <div className="text-center py-4">
                <button
                  onClick={handleShowForm}
                  className="btn-primary inline-flex items-center"
                >
                  Join Waitlist
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <div className="text-center text-sm text-gray-600">
                Average response time: 24 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What to Expect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-hetri-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-hetri-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welcome Email</h3>
              <p className="text-gray-600">Receive confirmation and early access materials within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-hetri-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-hetri-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Beta Access</h3>
              <p className="text-gray-600">Get first access to PAW features and TreatTap demos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-hetri-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-hetri-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">Priority scheduling for full system implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="section-padding bg-hetri-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Skip the Wait?
          </h2>
          <p className="text-xl text-hetri-light mb-8 max-w-2xl mx-auto">
            If you're ready to implement PAW and TreatTap immediately, let's talk about our fast-track program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactus?type=schedule-demo"
              className="bg-white text-hetri-primary hover:bg-hetri-light font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Schedule Immediate Demo
            </Link>
            <Link
              href="/contactus?type=general-questions"
              className="border-2 border-white text-white hover:bg-white hover:text-hetri-primary font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Partnerships
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 