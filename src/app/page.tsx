import Link from 'next/link'
import { ArrowRightIcon, PlayIcon, CheckCircleIcon, CalendarDaysIcon, VideoCameraIcon, CameraIcon, BoltIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'PAW Booking System',
    description: 'Streamlined facility management for Hetri Admins with comprehensive booking, scheduling, and customer management.',
    icon: CalendarDaysIcon,
  },
  {
    title: 'TreatTap Live Service',
    description: 'Real-time treat dispensing with live video streaming. Hetri Parents can interact with their pets remotely.',
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
            Empower Hetri Admins with comprehensive facility management and delight Hetri Parents 
            with live TreatTap experiences. The future of pet care is here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contactus?type=schedule-demo" className="btn-primary inline-flex items-center">
              Schedule Demo
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contactus?type=product-demo" className="btn-secondary inline-flex items-center">
              <PlayIcon className="mr-2 h-5 w-5" />
              Watch PAW Demo
            </Link>
          </div>
        </div>
      </section>

      {/* TreatTap Feature Highlight */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Introducing TreatTap
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolutionary live-service treat dispensing that connects Hetri Parents with their pets in real-time
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How TreatTap Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pet Check-In</h4>
                    <p className="text-gray-600">Hetri Admin activates TreatTap when pet is ready for live sessions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Live Connection</h4>
                    <p className="text-gray-600">Hetri Parents connect via secure live video stream</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Treat Interaction</h4>
                    <p className="text-gray-600">Real-time treat dispensing with instant pet reactions</p>
                  </div>
                </div>
              </div>
              <Link href="/contactus?type=product-demo" className="btn-primary mt-8 inline-flex items-center">
                Learn More About TreatTap
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-video bg-hetri-accent rounded-lg flex items-center justify-center">
                <PlayIcon className="h-16 w-16 text-hetri-primary" />
              </div>
              <p className="text-center text-gray-600 mt-4">TreatTap Demo Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Pet Care Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a modern pet care facility and provide exceptional experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="card p-6 text-center">
                  <div className="mb-4 h-16 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-hetri-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hetri-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Pet Care Facility?
          </h2>
          <p className="text-xl text-hetri-light mb-8 max-w-2xl mx-auto">
            Join hundreds of facilities already using PAW and TreatTap to deliver exceptional pet care experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contactus?type=schedule-demo" className="bg-white text-hetri-primary hover:bg-hetri-light font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Your Demo
            </Link>
            <Link href="/waitlist" className="border-2 border-white text-white hover:bg-white hover:text-hetri-primary font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 