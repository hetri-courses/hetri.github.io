import Link from 'next/link'
import { ArrowRightIcon, CheckCircleIcon, CalendarDaysIcon, VideoCameraIcon, CameraIcon, BoltIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'PAW Booking System',
    description: 'Streamlined facility management with comprehensive booking, scheduling, and customer management. Includes custom implementations with existing software like Gingr, Petexec, and other platforms.',
    icon: CalendarDaysIcon,
  },
  {
    title: 'TreatTap Live Service',
    description: 'Pet parents request TreatTap sessions through PAW, facility staff activates when ready, and provides personalized attention with treats during the allotted time.',
    icon: VideoCameraIcon,
  },
  {
    title: 'Hetri Camera Integration',
    description: 'Weatherproof cameras that attach to any collar, providing HD live streaming and health monitoring.',
    icon: CameraIcon,
  },
  {
    title: 'Workflow Automation',
    description: 'Seamless integration between booking, check-in, TreatTap activation, and customer communication.',
    icon: BoltIcon,
  },
]

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-section section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Pet Care with{' '}
            <span className="text-gradient">PAW & TreatTap</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empower pet care facilities with comprehensive management tools and delight pet owners 
            with live TreatTap experiences. The future of pet care is here.
          </p>

        </div>
      </section>

      {/* TreatTap Feature Highlight */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              TreatTap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Live treat sessions that bring pet parents closer to their pets throughout the day. Request 5, 10, or 30-minute personalized sessions where facility staff provides treats, attention, and playtime while parents watch in real-time.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Live video streaming</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Sessions from $20-$90</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Dog walks available</span>
              </div>
            </div>
            <Link href="/treattap" className="btn-primary inline-flex items-center">
              TreatTap
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-center">
                <div className="relative" style={{ width: '300px', height: '600px' }}>
                  {/* iPhone 15+ Style Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[60px] p-3">
                    <div className="w-full h-full bg-white rounded-[52px] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full"></div>
                      {/* Content Area */}
                      <div className="pt-14 px-0 h-full">
                        {/* PLACEHOLDER: Replace with mobile design image */}
                        <div className="w-full h-full bg-gradient-to-br from-hetri-light to-gray-100 flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="text-xs text-gray-500 mb-2">MOBILE DESIGN PLACEHOLDER</div>
                            <div className="text-sm font-semibold text-hetri-primary">TreatTap Mobile Interface</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6">TreatTap Interface</p>
            </div>
          </div>
        </div>
      </section>

      {/* PAW Platform Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Animal Works (PAW)
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Complete facility management platform designed for modern pet care operations. Streamline bookings, manage customer relationships, and give pet parents real-time access to their pets through mobile apps.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Multi-facility support</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Custom integrations (Gingr, Petexec)</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Real-time analytics</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>iOS & Android apps</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Facility Management Side */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Facilities</h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <div className="flex justify-center">
                  <div className="relative" style={{ width: '320px', height: '640px' }}>
                    {/* iPhone 15+ Style Frame */}
                    <div className="absolute inset-0 bg-gray-900 rounded-[64px] p-3">
                      <div className="w-full h-full bg-white rounded-[56px] overflow-hidden relative">
                        {/* Dynamic Island */}
                        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-36 h-9 bg-black rounded-full"></div>
                        {/* Content Area */}
                        <div className="pt-16 px-0 h-full">
                          {/* PLACEHOLDER: Replace with mobile design image */}
                          <div className="w-full h-full bg-gradient-to-br from-hetri-light to-gray-100 flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="text-xs text-gray-500 mb-2">MOBILE DESIGN PLACEHOLDER</div>
                              <div className="text-sm font-semibold text-hetri-primary">PAW Platform Demo</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Booking & Scheduling</h4>
                    <p className="text-gray-600 text-sm">Complete appointment management system</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Customer Management</h4>
                    <p className="text-gray-600 text-sm">Comprehensive pet and owner profiles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1 flex-shrink-0" />
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
                  <div className="relative mx-auto" style={{ width: '320px', height: '640px' }}>
                    {/* iPhone 15+ Style Frame */}
                    <div className="absolute inset-0 bg-gray-900 rounded-[64px] p-3">
                      <div className="w-full h-full bg-white rounded-[56px] overflow-hidden relative">
                        {/* Dynamic Island */}
                        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-36 h-9 bg-black rounded-full"></div>
                        {/* Content Area */}
                        <div className="pt-16 px-0 h-full">
                          {/* PLACEHOLDER: Replace with mobile design video */}
                          <div className="w-full h-full bg-gradient-to-br from-hetri-light to-gray-100 flex items-center justify-center">
                            <div className="text-center p-4">
                              <div className="text-xs text-gray-500 mb-2">MOBILE VIDEO PLACEHOLDER</div>
                              <div className="text-sm font-semibold text-hetri-primary">PAW Pet Parent App</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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


    </div>
  )
} 