import React from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const values = [
  {
    title: 'Innovation with Purpose',
    description: "We don't innovate for the sake of innovation. Every feature we develop serves a clear purpose."
  },
  {
    title: 'User-Centric Design',
    description: 'Our technology is designed around the needs of both pet owners and facility operators. We believe in creating solutions that are intuitive and enhance the experience for everyone involved.'
  },
  {
    title: 'Reliability First',
    description: "We understand that pet care facilities can't afford downtime. That's why we prioritize reliability in everything we build, from our hardware to our software systems."
  },
  {
    title: 'Continuous Improvement',
    description: "We're constantly learning from our users and improving our products. Your feedback drives our development, ensuring we're always delivering the best possible solution."
  }
]

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

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-hetri-primary">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              Hetri was born from a simple observation: while technology has transformed many industries, pet care facilities were still relying on outdated systems and manual processes. Our founder, during their time at Cal Poly Pomona, was inspired by a professor's challenge to "be different", emphasizing the importance of finding innovative solutions to real-world problems.
            </p>
            <p>
              This philosophy led to the creation of the Hetri Camera and PAW management system, combining cutting-edge hardware with intelligent software to create a seamless experience for both pet owners and facility operators.
            </p>
            <blockquote className="border-l-4 border-hetri-primary pl-6 italic text-gray-700 my-8">
              "We believe in technology that enhances human experience, not complicate it. Our smart pet camera is a statement about how we approach innovation."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 hover:transform hover:-translate-y-1 transition-transform duration-200">
                <h3 className="text-xl font-bold text-hetri-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-hetri-primary">
            Our Mission
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              At Hetri, we're committed to transforming the pet care industry through technology that makes a real difference.
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-hetri-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                To provide pet owners with unprecedented peace of mind through real-time access and transparency
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-hetri-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                To empower pet care facilities with tools that streamline operations and enhance service quality
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-hetri-primary rounded-full mt-3 mr-4 flex-shrink-0"></span>
                To create a more connected, efficient, and enjoyable experience for everyone involved in pet care
              </li>
            </ul>
            <p>
              We achieve this by combining innovative hardware with intelligent software, creating a seamless ecosystem that benefits both pet owners and facility operators.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-hetri-primary">
            Our Team
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              We're a team of passionate engineers, designers, and pet care enthusiasts who believe in the power of technology to make a positive impact. Our diverse backgrounds in Customer Service, software development, and Business operations allow us to create solutions that truly understand and address the needs of our users.
            </p>
            <p>
              What unites us is our shared commitment to excellence and our belief that technology should enhance, not complicate, the human experience. We're constantly pushing the boundaries of what's possible in pet care technology, always with our users' needs at the forefront.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hetri-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Revolutionizing Pet Care
          </h2>
          <p className="text-xl text-hetri-light mb-8 max-w-2xl mx-auto">
            Whether you're a pet care facility looking to modernize your operations or a pet owner interested in our technology, we'd love to hear from you.
          </p>
          <Link href="/waitlist" className="bg-white text-hetri-primary hover:bg-hetri-light font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
            Join Our Waitlist
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
} 