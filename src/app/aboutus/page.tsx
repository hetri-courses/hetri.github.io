import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Hetri Inc - Technology That Produces Results',
  description: 'Learn how Hetri Inc produces results by turning facilities into powerhouses with the Professional Animal Works (PAW) platform.',
  keywords: 'Hetri Inc, about us, technology company, PAW platform, pet care management, Los Angeles, California, business systems',
  openGraph: {
    title: 'About Hetri Inc - Technology That Produces Results',
    description: 'Learn how Hetri Inc produces results with Professional Animal Works (PAW) for pet care operations.',
    url: 'https://hetri.org/aboutus',
    images: [
      {
        url: 'https://hetri.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Hetri Inc - Technology That Produces Results',
      },
    ],
  },
  alternates: {
    canonical: 'https://hetri.org/aboutus',
  },
}

export default function AboutUsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-section section-padding bg-gradient-to-b from-hetri-dark to-black">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-gradient">Hetri</span>
          </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Hetri Inc was founded because we saw a gap in the market that needed to be filled. Nothing more, nothing less.
            </p>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="section-padding bg-black border-t border-hetri-primary/30">
        <div className="container-max max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Technology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We create technology frameworks that solve real market problems. 
              Our flagship platform, PAW, demonstrates our approach to building systems that finds the gap in the market and fills it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Professional Animal Works (PAW)</h3>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  PAW transforms how pet care businesses operate. 
                  It's a complete management framework that streamlines operations and creates new revenue streams.
                </p>
                <p>
                  PAW is about demonstrating our approach to building 
                  technology that delivers measurable returns.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-hetri-primary to-hetri-secondary rounded-2xl p-8 text-black">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Facility?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Join to streamline operations and delight pet parents with exceptional service.
                </p>
                <div className="flex flex-col gap-4 justify-center">
                  <a 
                    href="https://paw.hetri.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
                  >
                    Access PAW
                  </a>
                  <Link href="/paw" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center justify-center">
                    How PAW Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Location */}
      <section className="section-padding bg-black border-t border-hetri-primary/30">
        <div className="container-max max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="aspect-video bg-black rounded-2xl flex items-center justify-center overflow-hidden border border-hetri-primary/20">
                  <img 
                    src="/hq-location.jpg" 
                    alt="Hetri Headquarters"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Our Location</h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Greater Los Angeles Area<br />
                  California, United States
                </p>
                <p>
                  Our location enables us to serve businesses across the western United States while maintaining 
                  close relationships with technology partners and investors in the Los Angeles ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}