import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const benefits = [
  'Early access to PAW beta features',
  'Priority implementation scheduling',
  'Exclusive pricing for early adopters',
  'Direct feedback channel to development team',
  'Access to live product demos',
  'Free consultation with our specialists'
]

export default function WaitlistPage() {
  return (
    <div className="pt-20">
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
            <span className="text-hetri-light text-sm">🚀 Early Access Program</span>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Join Our Waitlist?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card p-8 bg-hetri-light">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Get Priority Access
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-hetri-primary mb-2">
                    #1,247
                  </div>
                  <div className="text-gray-600">Current waitlist position</div>
                </div>
                
                <div className="text-center py-4">
                  <a
                    href="mailto:waitlist@hetri.org?subject=Waitlist Registration&body=Please add me to the Hetri waitlist. I'm interested in:%0A%0AFacility Name:%0AContact Person:%0APhone:%0AEmail:%0A%0ASpecific interests (PAW, TreatTap, both):%0A%0AExpected implementation timeline:"
                    className="btn-primary inline-flex items-center"
                  >
                    Join Waitlist
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </a>
                </div>
                
                <div className="text-center text-sm text-gray-600">
                  Average response time: 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what happens after you join our waitlist
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Welcome Email</h3>
              <p className="text-gray-600">
                Receive a personalized welcome with detailed product information and timeline updates.
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Consultation</h3>
              <p className="text-gray-600">
                Get a one-on-one consultation to discuss your specific facility needs and requirements.
              </p>
            </div>
            
            <div className="card p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Priority Access</h3>
              <p className="text-gray-600">
                Be the first to access new features and receive priority implementation scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Already Convinced CTA */}
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
              href="/contactus"
              className="bg-white text-hetri-primary hover:bg-hetri-light font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Schedule Immediate Demo
            </Link>
            <a
              href="mailto:partnerships@hetri.org?subject=Fast-Track Implementation"
              className="border-2 border-white text-white hover:bg-white hover:text-hetri-primary font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Partnerships
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 