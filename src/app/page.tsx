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
              Live treat sessions that bring pet parents closer to their pets throughout the day. Request 5, 15, or 30-minute personalized sessions where facility staff provides treats, attention, and playtime while parents watch in real-time.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Live video streaming</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Real-time treat dispensing</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>90% revenue to facility</span>
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
                <div className="relative" style={{ width: '200px', height: '400px' }}>
                  {/* iPhone 15+ Style Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[42px] p-2">
                    <div className="w-full h-full bg-transparent rounded-[36px] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-7 bg-black rounded-full"></div>
                      {/* Content Area */}
                      <div className="pt-12 px-4 h-full">
                        <img 
                          src="/treattap-demo-interface.png" 
                          alt="TreatTap Mobile Interface"
                          className="w-full h-full object-cover rounded-lg"
                        />
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

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Animal Works (PAW)
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Complete facility management platform designed specifically for modern pet care operations. Streamline bookings, manage customer relationships, and integrate seamlessly with existing software like Gingr and Petexec.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Multi-facility support</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Custom integrations</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-4 w-4 text-hetri-primary mr-2" />
                <span>Real-time analytics</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-center">
                <div className="relative" style={{ width: '240px', height: '480px' }}>
                  {/* iPhone 15+ Style Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[48px] p-2">
                    <div className="w-full h-full bg-transparent rounded-[42px] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full"></div>
                      {/* Content Area */}
                      <div className="pt-16 px-4 h-full">
                        <video 
                          src="/paw-platform-demo.mp4" 
                          className="w-full h-full object-cover rounded-lg"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-6">PAW Platform Demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer PAW Section */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                PAW for Pet Parents
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Give pet parents the power to stay connected with their pets throughout the day. 
                Request TreatTap sessions, view live updates, and manage bookings all from their mobile device. Available for iOS and Android with real-time notifications and secure payment processing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Easy Booking Management</h4>
                    <p className="text-gray-600">Schedule appointments and manage pet care services with ease</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">TreatTap Requests</h4>
                    <p className="text-gray-600">Request personalized attention sessions for your pet anytime</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Real-time Updates</h4>
                    <p className="text-gray-600">Stay informed about your pet's day with live notifications</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative">
                <div className="relative mx-auto" style={{ width: '240px', height: '480px' }}>
                  {/* iPhone 15+ Style Frame */}
                  <div className="absolute inset-0 bg-gray-900 rounded-[48px] p-2">
                    <div className="w-full h-full bg-transparent rounded-[42px] overflow-hidden relative">
                      {/* Dynamic Island */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black rounded-full"></div>
                      {/* Content Area */}
                      <div className="pt-16 px-4 h-full">
                        <video 
                          src="/paw-mobile-app-demo.mp4" 
                          className="w-full h-full object-cover rounded-lg"
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
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
              <p className="text-center text-gray-600 mt-6">PAW Mobile App</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
} 