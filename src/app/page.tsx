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
          <div className="flex justify-center">
            <Link href="/contactus?type=schedule-demo" className="btn-primary inline-flex items-center">
              Schedule Demo
              <ArrowRightIcon className="ml-2 h-5 w-5" />
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
              Revolutionary live-service treat dispensing that connects pet owners with their pets in real-time during daycare
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How TreatTap Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">TreatTap Request</h4>
                    <p className="text-gray-600">Pet Parent logs into PAW, and requests a TreatTap for their booked pet on PAW</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Staff Activation</h4>
                    <p className="text-gray-600">Facility Staff receives TreatTap request on PAW and activates TreatTap order when the pet is ready for a live session</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircleIcon className="h-6 w-6 text-hetri-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Treat Interaction</h4>
                    <p className="text-gray-600">Facility staff provides personalized attention and care to your pet for the requested duration. Multiple pets can participate in the session, creating a fun social experience. Live chat functionality available for Pro Users.</p>
                  </div>
                </div>
              </div>
              <Link href="/contactus?type=product-demo" className="btn-primary mt-8 inline-flex items-center">
                Learn More About TreatTap
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/DogPhoto.png" 
                  alt="Happy dog wearing Hetri camera"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-gray-600 mt-4">Happy pup with Hetri Camera</p>
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


    </div>
  )
} 