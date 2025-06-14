'use client'

import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What is PAW and how does it work?",
    answer: "PAW (Professional Animal Works) is our comprehensive facility management system designed specifically for pet care facilities. It streamlines booking, scheduling, customer management, and integrates seamlessly with our TreatTap live service for real-time pet interaction."
  },
  {
    question: "How does TreatTap enhance the pet care experience?",
    answer: "TreatTap enables real-time treat dispensing with live video streaming. Pet owners can connect remotely to watch their pets and dispense treats in real-time, creating meaningful interactions even when they're away. This reduces pet anxiety and gives owners peace of mind."
  },
  {
    question: "What makes the Hetri Camera different from regular pet cameras?",
    answer: "Our Hetri Camera is specifically designed for pet care facilities with weatherproof construction, HD live streaming, collar-attachment capability, and seamless integration with our PAW management system. It's built for commercial use with enterprise-grade reliability."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation varies by facility size and complexity. Our fast-track process can have you up and running in as little as one week, while more comprehensive setups with custom integrations may take 2-4 weeks. We provide full support throughout the process."
  },
  {
    question: "Is training provided for staff?",
    answer: "Absolutely! We provide comprehensive training for all staff members, including hands-on sessions, video tutorials, and ongoing support. Our goal is to ensure your team feels confident and comfortable using all PAW and TreatTap features."
  },
  {
    question: "What kind of support is available after implementation?",
    answer: "We offer multiple levels of support including 30-minute priority technical support, regular system updates, troubleshooting assistance, and ongoing consultation to help optimize your operations. Our support team is always standing by."
  },
  {
    question: "Can PAW integrate with our existing systems?",
    answer: "Yes! PAW is designed with integration in mind. We can connect with most existing booking systems, payment processors, and customer management platforms. Our technical team will work with you to ensure seamless integration."
  },
  {
    question: "What are the hardware requirements?",
    answer: "PAW is cloud-based, so you'll need reliable internet connectivity and basic computer access. For TreatTap, we provide all necessary hardware including cameras, treat dispensers, and mounting equipment. We handle the technical setup."
  },
  {
    question: "How does pricing work?",
    answer: "We offer flexible pricing based on facility size, number of pets, and features needed. Our business team provides customized quotes after understanding your specific requirements. We believe in transparent, value-based pricing."
  },
  {
    question: "What happens if there's a technical issue?",
    answer: "Our priority technical support responds within 30 minutes for urgent issues. We also provide remote troubleshooting, phone support, and if needed, on-site assistance. Reliability is our top priority."
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
            <a
              href="mailto:hello@hetri.org?subject=FAQ Follow-up Questions"
              className="bg-white text-hetri-primary hover:bg-hetri-light font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Ask a Question
            </a>
            <a
              href="mailto:demo@hetri.org?subject=Product Demo Request"
              className="border-2 border-white text-white hover:bg-white hover:text-hetri-primary font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 