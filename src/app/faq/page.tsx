'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is PAW and how does it work?",
    answer: "PAW (Professional Animal Works) is our comprehensive facility management platform designed specifically for pet care facilities. It streamlines booking, scheduling, customer management, and integrates seamlessly with our TreatTap service. We also offer custom implementations with existing pet booking software like Gingr, Petexec, and other platforms."
  },
  {
    question: "How does TreatTap work?",
    answer: "TreatTap is a three-step process: Pet Parents log into PAW and request a TreatTap session for their booked pet. Facility staff receives the request and activates the TreatTap order when the pet is ready. Staff then provides personalized attention and care for the requested duration, with multiple pets able to participate in the session for a fun social experience."
  },
  {
    question: "What are your pricing plans?",
    answer: "We offer three transparent pricing tiers: Standard ($50/mo + $50/mo per camera), Business ($250/mo + $50/mo per camera), and Pro ($1000/mo + $20/mo per camera). All plans include unlimited storage, access to newest features, and custom implementations with existing booking software. Pro users get live chat functionality and unlimited cameras."
  },
  {
    question: "How do TreatTap earnings work?",
    answer: "TreatTap generates additional revenue for your facility through our earnings share model: Standard plans get 75/25 split, Business gets 60/40 split, and Pro gets 30/70 split. This creates a new revenue stream while providing enhanced services to pet parents."
  },
  {
    question: "Can you integrate with our existing booking software?",
    answer: "Absolutely! We specialize in custom implementations with existing pet booking software including Gingr, Petexec, and other platforms. Our technical team ensures seamless integration so you can keep using familiar systems while adding TreatTap capabilities."
  },
  {
    question: "What makes Hetri Cameras special?",
    answer: "Hetri Cameras are specifically designed for commercial pet care with weatherproof construction, HD live streaming, and seamless PAW integration. They attach securely to collars and provide reliable performance in facility environments. Camera pricing varies by plan tier."
  },
  {
    question: "Do all customers get the same features?",
    answer: "We don't play favorites here (Sorry Pro Clients!)! All plans include access to our newest features, unlimited facilities with multi-tenant support, and custom implementations with existing software. The main differences are camera limits, TreatTap duration options, and earnings share percentages."
  },
  {
    question: "What TreatTap session lengths are available?",
    answer: "Session lengths vary by plan: Standard offers 5-minute sessions, Business adds 15-minute sessions, and Pro includes 5-minute, 15-minute, and 1-hour sessions. Pro users also get TreatTap extensions with live-stream chat and custom treat options."
  },
  {
    question: "How long does implementation take?",
    answer: "Implementation typically takes 1-2 weeks depending on your facility size and integration requirements. For existing booking software integrations, we may need additional time to ensure seamless connectivity. We provide full support and training throughout the process."
  },
  {
    question: "What happens if I need technical support?",
    answer: "All plans include comprehensive technical support. We provide troubleshooting assistance, system updates, and ongoing consultation. Our team responds quickly to ensure your operations run smoothly, because facility downtime isn't an option."
  }
]

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about PAW, TreatTap, and how Hetri can transform your pet care facility.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-hetri-primary flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-hetri-primary flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-padding bg-hetri-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-hetri-light mb-8 max-w-2xl mx-auto">
            Our team is here to help! Get personalized answers and schedule a demo to see PAW and TreatTap in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contactus?type=general-questions"
              className="bg-white text-hetri-primary hover:bg-hetri-light font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Ask a Question
            </Link>
            <Link
              href="/contactus?type=schedule-demo"
              className="border-2 border-white text-white hover:bg-white hover:text-hetri-primary font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 