import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function AboutUsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-section section-padding bg-gradient-to-b from-hetri-light to-white">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Hetri
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're revolutionizing pet care through innovative technology that brings peace of mind to pet owners and operational excellence to facilities.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Founder</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Hetri was born from a simple observation: while technology has transformed many industries, pet care facilities were still relying on outdated systems. 
                </p>
                <p>
                  Our founder, inspired by a Cal Poly Pomona marketing professor's challenge to "be different," set out to create innovative solutions for real-world problems in the pet care industry.
                </p>
                <p>
                  This philosophy led to the creation of <strong className="text-hetri-primary">TreatTap</strong> and the <strong className="text-hetri-primary">PAW management platform</strong>, combining cutting-edge hardware with intelligent software to create seamless experiences for both pet owners and facility operators.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/founder-headshot.png" 
                    alt="Hetri Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border border-gray-200">
                  <span className="text-hetri-primary font-semibold">Founder & CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Location */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/hq-location.png" 
                    alt="Hetri Headquarters"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-hetri-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  HQ
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Headquarters:</strong><br />
                  Greater Los Angeles Area<br />
                  California, United States
                </p>
                <p>
                  Strategically located in the heart of Southern California's innovation corridor, our headquarters provides us access to top talent, cutting-edge technology resources, and proximity to many of our initial partner facilities.
                </p>
                <p>
                  Our location enables us to serve pet care facilities across the western United States while maintaining close relationships with technology partners and investors in the Los Angeles ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 