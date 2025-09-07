import Link from 'next/link'
import { CheckCircleIcon, CalendarDaysIcon, UsersIcon, ShieldCheckIcon, Cog6ToothIcon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function PAWPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-hetri-primary to-hetri-secondary text-white">
        <div className="container-max text-center py-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Professional Animal Works (PAW)</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Complete facility management platform designed for modern pet care operations. Streamline bookings,
            manage customer relationships, and give pet parents real-time access to their pets through our mobile app, PAW.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/pricing" className="btn-primary">See Pricing</Link>
            <Link href="/contactus" className="btn-secondary bg-white/10 hover:bg-white text-white hover:text-hetri-primary">Talk to Us</Link>
          </div>
        </div>
        <div className="container-max pb-16">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl">
            <img
              src="/paw-platform-demo-320x640.png"
              alt="PAW Platform Demo"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Comprehensive Facility Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to run a modern pet care facility, from booking to billing.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Multi-Tenant support</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Custom integrations</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Data Isolation & Security</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Facility Management Side */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Facilities</h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
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
                    <h4 className="font-semibold text-gray-900">Booking & Scheduling</h4>
                    <p className="text-gray-600 text-sm">Complete appointment management system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <UsersIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Customer Management</h4>
                    <p className="text-gray-600 text-sm">Comprehensive pet and owner profiles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ChartBarIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">TreatTap Management</h4>
                    <p className="text-gray-600 text-sm">Handle live session requests and revenue</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pet Parent Side */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Pet Parents</h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
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
                    className="absolute -bottom-4 -right-4 bg-hetri-primary hover:bg-hetri-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transition-colors duration-200"
                  >
                    PAW Login
                  </a>
                </div>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Booking</h4>
                    <p className="text-gray-600 text-sm">Schedule appointments and manage services</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">TreatTap Requests</h4>
                    <p className="text-gray-600 text-sm">Request live sessions anytime during visits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Updates</h4>
                    <p className="text-gray-600 text-sm">Live notifications and secure payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect PAW with your existing systems for a unified workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Cog6ToothIcon className="h-8 w-8 mx-auto text-hetri-primary mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Gingr Integration</h3>
              <p className="text-gray-600 text-sm">Sync appointments and customer data automatically</p>
            </div>
            <div className="card text-center">
              <ShieldCheckIcon className="h-8 w-8 mx-auto text-hetri-primary mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Petexec Integration</h3>
              <p className="text-gray-600 text-sm">Unified management across multiple facilities</p>
            </div>
            <div className="card text-center">
              <ChartBarIcon className="h-8 w-8 mx-auto text-hetri-primary mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Custom APIs</h3>
              <p className="text-gray-600 text-sm">Build integrations with any pet care software</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <ShieldCheckIcon className="h-16 w-16 text-hetri-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Enterprise-Grade Security</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Multi-tenant data isolation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">End-to-end encryption</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">SOC 2 Type II compliant</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Regular security audits</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Scale & Security</h2>
              <p className="text-gray-600 text-lg mb-6">
                PAW is designed to handle the demands of growing pet care businesses while maintaining
                the highest standards of data security and privacy.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Facility Support</h4>
                    <p className="text-gray-600 text-sm">Manage multiple locations with unified administration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Role-Based Access</h4>
                    <p className="text-gray-600 text-sm">Granular permissions for staff and administrators</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Audit Trails</h4>
                    <p className="text-gray-600 text-sm">Complete activity logging for compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Facility?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join the growing number of pet care facilities using PAW to streamline operations
            and delight pet parents with exceptional service.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/pricing" className="btn-primary">View Pricing</Link>
            <Link href="/contactus" className="btn-secondary">Contact Sales</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
