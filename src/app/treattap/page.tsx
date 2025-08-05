import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon, PlayIcon, HeartIcon, CameraIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function TreatTapPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-section section-padding bg-gradient-to-b from-hetri-light to-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            TreatTap
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Live treat sessions that bring pet parents closer to their pets throughout the day
          </p>
          <Link href="/contactus" className="btn-primary inline-flex items-center text-lg">
            Request Demo
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* How TreatTap Works */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How TreatTap Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, live interactions that make every moment count
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 - Mobile Interface */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <div className="relative mx-auto" style={{ width: '140px', height: '280px' }}>
                  {/* iPhone 15+ Style Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[32px] p-1">
                    <div className="w-full h-full bg-gray-100 rounded-[28px] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                      {/* Content Area */}
                      <div className="pt-10 px-3 h-full">
                        <img 
                          src="/treattap-request.png" 
                          alt="TreatTap Request Interface"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pet Parent Requests</h3>
              <p className="text-gray-600">Parents request TreatTap sessions through the PAW app</p>
            </div>

            {/* Step 2 - Staff Interface */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <div className="relative mx-auto" style={{ width: '140px', height: '280px' }}>
                  {/* iPhone 15+ Style Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[32px] p-1">
                    <div className="w-full h-full bg-gray-100 rounded-[28px] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                      {/* Content Area */}
                      <div className="pt-10 px-3 h-full">
                        <img 
                          src="/treattap-staff.png" 
                          alt="Staff TreatTap Interface"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Staff Activates</h3>
              <p className="text-gray-600">Facility staff receives notification and starts the session</p>
            </div>

            {/* Step 3 - Live Session */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <div className="relative mx-auto" style={{ width: '140px', height: '280px' }}>
                  {/* iPhone 15+ Style Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[32px] p-1">
                    <div className="w-full h-full bg-gray-100 rounded-[28px] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                      {/* Content Area */}
                      <div className="pt-10 px-3 h-full">
                        <video 
                          src="/treattap-live-session.mp4" 
                          className="w-full h-full object-cover rounded-lg"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Interaction</h3>
              <p className="text-gray-600">Real-time treat dispensing and personalized attention</p>
            </div>

            {/* Step 4 - Parent Watches */}
            <div className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <div className="relative mx-auto" style={{ width: '140px', height: '280px' }}>
                  {/* iPhone 15+ Style Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[32px] p-1">
                    <div className="w-full h-full bg-gray-100 rounded-[28px] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                      {/* Content Area */}
                      <div className="pt-10 px-3 h-full">
                        <img 
                          src="/treattap-parent-view.png" 
                          alt="Parent Viewing TreatTap Session"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Parent Enjoys</h3>
              <p className="text-gray-600">Pet parents watch and enjoy their pet's special moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* TreatTap Features */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              TreatTap Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed for meaningful connections between pets and their families
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-hetri-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="h-8 w-8 text-hetri-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Duration</h3>
              <p className="text-gray-600">Choose from 5, 15, or 30-minute sessions based on your pet's needs</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-hetri-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="h-8 w-8 text-hetri-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">TreatTap Premium</h3>
              <p className="text-gray-600">Enhanced sessions with extra treats and 25% longer duration</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-hetri-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <CameraIcon className="h-8 w-8 text-hetri-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Live Streaming</h3>
              <p className="text-gray-600">Watch your pet in real-time through our Hetri camera system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            TreatTap Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Clear, upfront pricing with 10% transaction fee included.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-hetri-light rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">TreatTap Sessions</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-lg">5 minute session</span>
                  <span className="text-xl font-bold text-hetri-primary">$20</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-lg">15 minute session</span>
                  <span className="text-xl font-bold text-hetri-primary">$35</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg">30 minute session</span>
                  <span className="text-xl font-bold text-hetri-primary">$100</span>
                </div>
              </div>
            </div>

            <div className="bg-hetri-light rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dog Walks</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-lg">20 minute walk</span>
                  <span className="text-xl font-bold text-hetri-primary">$150</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-lg">30 minute walk</span>
                  <span className="text-xl font-bold text-hetri-primary">$200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hetri-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Pet Care?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join facilities across the country offering TreatTap to create meaningful moments for pets and their families.
          </p>
          <Link href="/contactus" className="bg-white text-hetri-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center">
            Get Started with TreatTap
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}