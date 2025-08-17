'use client'

import { CheckIcon } from '@heroicons/react/24/outline'



const plans = [
  {
    name: 'Pilot',
    description: 'Same great PAW + pilot program terms',
    priceDisplay: '$100/mo',
    ribbon: {
      text: 'Limited Time',
      className:
        'bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 text-gray-900 ring-1 ring-yellow-500/40 shadow',
    },
    features: [
      '1 Hetri Camera',
      '1 PAW License',
      'Additional cameras: $100/mo',
      'Platform fee: 20%',
      'TreatTap sessions: 5 mins, 10 mins',
      'TreatTap+: Extra treats, +25% duration',
      'Custom implementations with existing booking software',
      '$500 deposit required',
    ],
    cta: 'Buy Now',
    ctaHref: 'https://paw.hetri.org',
  },
  {
    name: 'PAW Platform',
    description: 'Complete pet care management and TreatTap solution',
    priceDisplay: '$1000/mo',
    features: [
      '10 Hetri Cameras',
      'Additional cameras: $50/mo',
      'Platform fee: 10%',
      'TreatTap sessions: 5 min, 10 min, 20 min, 30 min',
      'TreatTap+: Extra treats, +25% duration, and dog walks',
      'Custom implementations with existing booking software',
      '$1500 deposit required',
    ],
    cta: 'Buy Now',
    ctaHref: 'https://paw.hetri.org',
  },
]

export default function PricingPage() {
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
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="container-max pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl border border-hetri-primary shadow-lg ring-1 ring-hetri-primary p-8 pt-14 relative">
                {plan.ribbon && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className={`${plan.ribbon.className} text-sm font-semibold text-center py-2 rounded-t-xl`}>
                      {plan.ribbon.text}
                    </div>
                  </div>
                )}

                {/* Header Section */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-gray-900">{plan.priceDisplay}</div>
                </div>

                {/* Features Section */}
                <div className="mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-hetri-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button Section */}
                <div>
                  <a
                    href={plan.ctaHref}
                    className="block w-full text-center py-4 px-6 rounded-lg text-base font-bold bg-hetri-primary text-white hover:bg-hetri-secondary transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta || 'Buy Now'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-hetri-light">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What is PAW and how does it work?</h3>
              <p className="text-gray-600">PAW (Professional Animal Works) is our comprehensive facility management platform designed specifically for pet care facilities. It streamlines booking, scheduling, customer management, and integrates seamlessly with our TreatTap service. We also offer custom implementations with existing pet booking software like Gingr, Petexec, and other platforms.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does TreatTap work?</h3>
              <p className="text-gray-600">TreatTap is a three-step process: Pet parents request a session through PAW, facility staff receives the request and activates when ready, then provides personalized attention and care for the requested duration. Pets can participate in sessions for personalized attention and care.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What TreatTap session options are available?</h3>
              <p className="text-gray-600">We offer 5-minute sessions,10-minute sessions, and dog walks at 20 minutes & 30 minutes. Platform fee applies.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can you integrate with our existing booking software?</h3>
              <p className="text-gray-600">Absolutely! Our technical team ensures seamless integration so you can keep using familiar systems while adding TreatTap capabilities.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does implementation take?</h3>
              <p className="text-gray-600">Implementation typically takes 1-2 weeks depending on your facility size and integration requirements. For existing booking software integrations, we may need additional time to ensure seamless connectivity. We provide full support and training throughout the process.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 