import Link from 'next/link'
import { CheckCircleIcon, CalendarDaysIcon, UsersIcon, ShieldCheckIcon, Cog6ToothIcon, ChartBarIcon, ArrowRightIcon, VideoCameraIcon, CameraIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PAW - Hetri Inc',
  description: 'Command your pet care market. PAW is the operating system for modern pet care businesses.',
}

export default function PAWPage() {
  return (
    <div className="pt-20">
      {/* Hook - Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-hetri-primary to-hetri-secondary text-black">
        <div className="container-max text-center py-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Professional Animal Works <span className="text-gradient"></span></h1>
          <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto mb-10">
            PAW is designed to handle the demands of growing pet care businesses while maintaining the highest standards of data security and privacy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://paw.hetri.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white hover:bg-gray-800 font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-black/25 inline-flex items-center"
            >
              Access PAW
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            
          </div>
        </div>
        <div className="container-max pb-16">
          <div className="bg-black rounded-2xl p-6 md:p-10 shadow-xl">
            <img
              src="/paw-platform-demo-320x640.png"
              alt="PAW Platform Demo"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pain - Why Successful Businesses Choose PAW */}
      <section className="section-padding bg-black border-t border-hetri-primary/30">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose PAW?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to run a modern pet care facility.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Increased market share</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Reduction in operational inefficiencies</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Increased customer loyalty</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Business Management Side */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">For Businesses</h3>
              <div className="bg-black rounded-2xl p-8 shadow-lg mb-6">
                <img
                  src="/paw-platform-demo-320x640.png"
                  alt="PAW Platform Demo"
                  className="w-80 h-auto mx-auto rounded-xl shadow-md"
                />
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <CalendarDaysIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Booking & Scheduling</h4>
                    <p className="text-gray-300 text-sm">Complete appointment management system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <UsersIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Customer Management</h4>
                    <p className="text-gray-300 text-sm">Comprehensive pet and owner profiles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ChartBarIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">TreatTap Management</h4>
                    <p className="text-gray-300 text-sm">New revenue streams through PAW services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pet Parent Side */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">For Pet Parents</h3>
              <div className="bg-black rounded-2xl p-8 shadow-lg mb-6">
                <div className="relative">
                  <video
                    src="/paw-pet-parent-app-320x640.mp4"
                    className="w-80 h-auto mx-auto rounded-xl shadow-md"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <a
                    href="https://paw.hetri.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-4 -right-4 bg-hetri-primary hover:bg-hetri-secondary text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-colors duration-200"
                  >
                    Command PAW
                  </a>
                </div>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Effortless Booking</h4>
                    <p className="text-gray-300 text-sm">Schedule appointments and manage services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Live-Service Requests</h4>
                    <p className="text-gray-300 text-sm">Request live sessions anytime during visits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Real-time Updates</h4>
                    <p className="text-gray-300 text-sm">Stay informed with instant notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise - TreatTap Section */}
      <section className="section-padding bg-black border-t border-hetri-primary/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">TreatTap</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Live treat sessions that bring pet parents closer to their pets throughout the day. 
              Request 5 or 10-minute personalized sessions where facility staff provides treats, attention, and playtime while parents watch in real-time.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-8">
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Live video streaming</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Sessions from 5 min - 30 mins</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Dog walks available via TreatTap</span>
              </div>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://paw.hetri.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                TreatTap →
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-bold text-black mb-4">TreatTap Interface</h3>
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                <VideoCameraIcon className="h-12 w-12 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise - PAWC Section */}
      <section className="section-padding bg-black border-t border-hetri-primary/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">PAW Camera (PAWC)</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Purpose-built camera for TreatTap. Ultra-light, weather-ready, and facility-friendly.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-8">
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>HD live video for TreatTap</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Clips to collar or mounts</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Pairs with PAW gateway</span>
              </div>
            </div>
            <div className="flex justify-center">
              <a 
                href="https://paw.hetri.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Learn more →
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <CameraIcon className="h-8 w-8 text-hetri-primary mr-2" />
                <h3 className="text-lg font-bold text-black">PAW Camera</h3>
              </div>
              <p className="text-gray-600 mb-4">Compact. Reliable. TreatTap ready.</p>
              <div className="bg-gray-100 rounded-lg p-4 h-32 flex items-center justify-center">
                <CameraIcon className="h-8 w-8 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof - Key Features */}
      <section className="section-padding bg-black border-t border-hetri-primary/30">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              PAW provides all the frameworks modern pet care businesses need to manage their business and eliminate competition.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Cog6ToothIcon className="h-8 w-8 mx-auto text-hetri-primary mb-3" />
              <h3 className="font-semibold text-white mb-2">Seamless Integrations</h3>
              <p className="text-gray-300 text-sm">Connect with Gingr, Petexec, and other pet care software</p>
            </div>
            <div className="card text-center">
              <ShieldCheckIcon className="h-8 w-8 mx-auto text-hetri-primary mb-3" />
              <h3 className="font-semibold text-white mb-2">Enterprise-Grade Security</h3>
              <p className="text-gray-300 text-sm">SOC 2 compliant with multi-tenant data isolation and market-leading encryption</p>
            </div>
            <div className="card text-center">
              <ChartBarIcon className="h-8 w-8 mx-auto text-hetri-primary mb-3" />
              <h3 className="font-semibold text-white mb-2">Bonus Revenue Streams</h3>
              <p className="text-gray-300 text-sm">New revenue streams through PAW/PAWC and premium services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof - Trust Indicators */}
      <section className="section-padding bg-black border-t border-hetri-primary/30">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Market Leaders</h2>
              <p className="text-gray-300 text-lg mb-6">
                PAW is designed to handle the demands of pet care businesses while maintaining 
                the highest standards of operational efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Multi-Facility Support</h4>
                    <p className="text-gray-300 text-sm">Manage multiple locations with unified market control</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Role-Based Access</h4>
                    <p className="text-gray-300 text-sm">Granular permissions for staff</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Audit Trails</h4>
                    <p className="text-gray-300 text-sm">Complete activity logging for compliance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-hetri-primary to-hetri-secondary rounded-2xl p-8 text-black text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Facility?</h3>
              <p className="text-lg mb-6 opacity-90">
                Join to streamline operations and delight pet parents with exceptional service.
              </p>
              <div className="space-y-3">
                <a 
                  href="https://paw.hetri.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Access PAW
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}