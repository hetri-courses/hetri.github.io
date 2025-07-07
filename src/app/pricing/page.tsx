'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckIcon } from '@heroicons/react/24/outline'



const pricingTiers = [
  {
    name: 'Standard',
    monthlyPrice: 50,
    cameraPrice: 50,
    description: 'Perfect for small facilities',
    features: [
      'Unlimited storage',
      '1 Hetri Camera',
      'TreatTap: 5 minutes',
      'TreatTap Earnings Share: 75/25',
      'PAW Analytic Reports',
    ],
    cta: 'Get Standard',
    ctaHref: '/contactus?type=standard-plan',
    popular: false,
  },
  {
    name: 'Business',
    monthlyPrice: 250,
    cameraPrice: 50,
    description: 'Ideal for growing businesses',
    features: [
      'Unlimited storage',
      '1–5 Hetri Cameras',
      'TreatTap: 5 min, 15 min',
      'TreatTap Revenue Share: 60/40',
      'PAW Analytic Reports',
    ],
    cta: 'Get Business',
    ctaHref: '/contactus?type=business-plan',
    popular: true,
  },
  {
    name: 'Pro',
    monthlyPrice: 1000,
    cameraPrice: 20,
    description: 'Complete solution for scale',
    features: [
      'Unlimited storage',
      'Unlimited Hetri Cameras',
      'TreatTap: 5 min, 15 min, 1 hr',
      'TreatTap Earnings Share: 30/70',
      'TreatTap extension: live-stream chat, custom treat options',
      'PAW Analytic Reports',
    ],
    cta: 'Get Pro',
    ctaHref: '/contactus?type=pro-plan',
    popular: false,
  },
]

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

      {/* Pricing Cards */}
      <div className="container-max pb-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => {
            const price = calculatePrice(tier.monthlyPrice)
            const originalYearlyPrice = calculateOriginalYearlyPrice(tier.monthlyPrice)
            const isCustom = tier.monthlyPrice === null

            return (
              <div
                key={tier.name}
                className={`bg-white rounded-xl border p-6 relative transition-all duration-200 hover:shadow-lg flex flex-col h-full ${
                  tier.popular
                    ? 'border-hetri-primary shadow-lg ring-1 ring-hetri-primary'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-hetri-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header Section - Fixed Height */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 h-6">{tier.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 h-10 flex items-center justify-center">{tier.description}</p>
                  
                  {isCustom ? (
                    <div className="mb-4 h-20 flex flex-col justify-center">
                      <span className="text-3xl font-bold text-gray-900">Custom</span>
                    </div>
                  ) : (
                    <div className="mb-4 h-20 flex flex-col justify-center">
                      {isYearly && originalYearlyPrice && price && originalYearlyPrice !== price ? (
                        <div>
                          <div className="text-sm text-red-500 line-through font-medium">
                            ${originalYearlyPrice}/year
                          </div>
                          <div className="text-3xl font-bold text-gray-900">
                            ${price}<span className="text-lg text-gray-500 font-medium">/year</span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-3xl font-bold text-gray-900">
                          ${price}<span className="text-lg text-gray-500 font-medium">/{isYearly ? 'year' : 'mo'}</span>
                        </div>
                      )}
                      {!isCustom && (
                        <div className="text-sm text-gray-500 mt-1">
                          + ${tier.cameraPrice}/{isYearly ? 'year' : 'mo'} per Hetri camera
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Features Section - Flexible Height */}
                <div className="flex-grow">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-hetri-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Section - Fixed at Bottom */}
                <div className="pt-8">
                  <Link
                    href={tier.ctaHref}
                    className={`block w-full text-center py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      tier.popular
                        ? 'bg-hetri-primary text-white hover:bg-hetri-secondary'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 