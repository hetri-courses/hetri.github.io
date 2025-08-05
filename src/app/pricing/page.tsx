'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'



const pricingPlan = {
  name: 'Hetri Platform',
  monthlyPrice: 1000,
  description: 'Complete pet care management and TreatTap solution',
  features: [
    'Unlimited storage and facilities',
    '5 Hetri cameras included',
    'Additional cameras: $50/month each',
    'TreatTap sessions: 5 min, 15 min, 30 min',
    'TreatTap Premium: Enhanced sessions with extra treats and 25% longer duration',
    '10% Hetri fee per TreatTap session',
    '90% revenue share to your facility',
    'Custom implementations with existing booking software',
    'Live Events Planner and analytics',
    'Priority technical support',
  ],
  cta: 'Get Started',
  ctaHref: '/contactus?type=platform-plan',
}

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  const calculatePrice = (monthlyPrice: number) => {
    if (!monthlyPrice) return null
    return isYearly ? Math.round(monthlyPrice * 12 * 0.9) : monthlyPrice
  }

  const calculateOriginalYearlyPrice = (monthlyPrice: number) => {
    if (!monthlyPrice) return null
    return monthlyPrice * 12
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="container-max pt-16 pb-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Pricing
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose the plan that works for you
          </p>
          
          {/* Monthly/Yearly Toggle */}
          <div className="flex items-center justify-center mb-12">
            <span className={`text-sm font-medium mr-3 ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              MONTHLY
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-hetri-primary focus:ring-offset-2 ${
                isYearly ? 'bg-hetri-primary' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ml-3 ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              YEARLY <span className="text-green-600 font-bold">(SAVE 10%)</span>
            </span>
          </div>
        </div>
      </div>

      {/* All Plans Include */}
      <div className="container-max mb-12">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">All plans include:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckIcon className="h-4 w-4 text-hetri-primary mr-2 flex-shrink-0" />
              <span>Unlimited facilities (multi-tenant support)</span>
            </div>
            <div className="flex items-center">
              <CheckIcon className="h-4 w-4 text-hetri-primary mr-2 flex-shrink-0" />
              <span>Access to our newest features. we dont play favorites here (Sorry Pro Clients!)</span>
            </div>
            <div className="flex items-center">
              <CheckIcon className="h-4 w-4 text-hetri-primary mr-2 flex-shrink-0" />
              <span>Custom implementations with existing pet booking software (Gingr, Petexec, etc)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="container-max pb-16">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-xl border border-hetri-primary shadow-lg ring-1 ring-hetri-primary p-8 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-hetri-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                One Simple Plan
              </span>
            </div>

            {/* Header Section */}
            <div className="text-center mb-8 pt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{pricingPlan.name}</h3>
              <p className="text-gray-600 mb-6">{pricingPlan.description}</p>
              
              <div className="mb-6">
                {isYearly && calculateOriginalYearlyPrice(pricingPlan.monthlyPrice) !== calculatePrice(pricingPlan.monthlyPrice) ? (
                  <div>
                    <div className="text-sm text-red-500 line-through font-medium">
                      ${calculateOriginalYearlyPrice(pricingPlan.monthlyPrice)}/year
                    </div>
                    <div className="text-4xl font-bold text-gray-900">
                      ${calculatePrice(pricingPlan.monthlyPrice)}<span className="text-xl text-gray-500 font-medium">/year</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-gray-900">
                    ${calculatePrice(pricingPlan.monthlyPrice)}<span className="text-xl text-gray-500 font-medium">/{isYearly ? 'year' : 'mo'}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Features Section */}
            <div className="mb-8">
              <ul className="space-y-4">
                {pricingPlan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-hetri-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button Section */}
            <div>
              <Link
                href={pricingPlan.ctaHref}
                className="block w-full text-center py-4 px-6 rounded-lg text-base font-bold bg-hetri-primary text-white hover:bg-hetri-secondary transition-colors duration-200"
              >
                {pricingPlan.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 