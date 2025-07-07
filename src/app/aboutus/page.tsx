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

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Hetri was born from a simple observation: while technology has transformed many industries, pet care facilities were still relying on outdated systems. Our founder, inspired by a Cal Poly Pomona professor's challenge to "be different," set out to create innovative solutions for real-world problems.
            </p>
            <p>
              This philosophy led to the creation of <strong className="text-hetri-primary">TreatTap</strong> — our revolutionary live treat dispensing system — and the <strong className="text-hetri-primary">PAW management platform</strong>, combining cutting-edge hardware with intelligent software to create seamless experiences for both pet owners and facility operators.
            </p>
            <blockquote className="border-l-4 border-hetri-primary pl-6 italic text-gray-700 my-6 text-xl">
              "We believe in technology that enhances human experience, not complicate it."
            </blockquote>
            <p>
              Our mission is simple: transform the pet care industry through technology that makes a real difference — providing pet owners with unprecedented peace of mind while empowering facilities with tools that streamline operations and enhance service quality.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 