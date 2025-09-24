import Link from 'next/link'
import { ArrowRightIcon, CheckCircleIcon, LightBulbIcon, CogIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hetri Inc - Technology That Produces Results',
  description: 'Technology that produces results. We turn facilities into powerhouses with Professional Animal Works (PAW) for pet care operations.',
  openGraph: {
    title: 'Hetri Inc - Technology That Produces Results',
    description: 'Technology that produces results. We turn facilities into powerhouses with Professional Animal Works (PAW).',
    url: 'https://hetri.org',
    images: [
      {
        url: 'https://hetri.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hetri Inc - Technology That Produces Results',
      },
    ],
  },
  alternates: {
    canonical: 'https://hetri.org',
  },
}

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-section section-padding bg-black">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Technology That <span className="text-gradient">Produces Results</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We build systems that turn businesses into powerhouses. Faster workflows, 
            sharper execution, and new revenue streams you didn't know existed.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <div className="bg-hetri-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <LightBulbIcon className="h-8 w-8 text-hetri-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                We set standards. Hetri builds what the market adopts years later.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-hetri-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CogIcon className="h-8 w-8 text-hetri-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Automation</h3>
              <p className="text-gray-300">
                Manual work is the past. Automation is leverage. Our clients choose leverage.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-hetri-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CurrencyDollarIcon className="h-8 w-8 text-hetri-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Revenue Growth</h3>
              <p className="text-gray-300">
                If your bottom line doesn't move, we didn't build it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PAW Platform Section - Authority Position */}
      <section className="section-padding bg-black border-t border-hetri-primary/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Animal Works (PAW)
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Complete facility management platform designed for modern pet care operations. 
              Streamline bookings, manage customer relationships, and give pet parents real-time access to their pets through our mobile app, PAW.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Supreme market position</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Revenue stream creation</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Operational mastery</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/paw" className="btn-primary inline-flex items-center">
                How PAW Works
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="https://paw.hetri.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center"
              >
                Access PAW
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Hetri - Authority Frame */}
      <section className="section-padding bg-black border-t border-hetri-primary/30 pb-8">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Market Revolves Around Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              The businesses aligned with Hetri set the pace everyone else follows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Proven Results</h4>
                    <p className="text-gray-300">Our systems are tested in environments where failure isn't an option</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Bonus Revenue Streams</h4>
                    <p className="text-gray-300">Every system we build directly multiplies your bottom line</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Scalable Systems</h4>
                    <p className="text-gray-300">Built to thrive at any scale</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-hetri-primary to-hetri-secondary rounded-2xl p-8 text-black">
                <h3 className="text-2xl font-bold mb-4">Ready to Implement?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Let's discuss how Hetri transforms your business into a market leader.
                </p>
                <Link href="/contactus" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}