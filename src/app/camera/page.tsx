import Link from 'next/link'
import { CheckCircleIcon, BoltIcon, SignalIcon, ShieldCheckIcon, CameraIcon, Cog6ToothIcon, Battery50Icon } from '@heroicons/react/24/outline'

export default function HetriCameraPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-hetri-primary to-hetri-secondary text-white">
        <div className="container-max text-center py-24">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Hetri Camera</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10">
            The compact, facility‑ready camera built for TreatTap. Ultra‑light, weather‑resistant, and designed
            to deliver stabilized POV video that brings pet parents into the moment.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/pricing" className="btn-primary">See Pricing</Link>
            <Link href="/contactus" className="btn-secondary bg-white/10 hover:bg-white text-white hover:text-hetri-primary">Talk to Us</Link>
          </div>
        </div>
        <div className="container-max pb-16">
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl">
            <img
              src="/hetri-camera-hero-1600x900.png"
              alt="Hetri Camera Hero"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Works with TreatTap */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for TreatTap</h2>
              <p className="text-gray-600 text-lg mb-6">
                Hetri Camera integrates natively with PAW and TreatTap for one‑tap live sessions. Staff starts
                a TreatTap, the camera streams instantly, and pet parents watch in real‑time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1" />
                  <span className="text-gray-700">Low‑latency HD video tuned for facilities</span></li>
                <li className="flex items-start gap-3"><CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1" />
                  <span className="text-gray-700">Smart pairing with PAW gateway or secure Wi‑Fi</span></li>
                <li className="flex items-start gap-3"><CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1" />
                  <span className="text-gray-700">Automatic session start/stop from staff console</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <img src="/hetri-camera-treattap-1200x600.png" alt="Hetri Camera with TreatTap" className="w-full h-auto rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mounting options */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Flexible mounting for any activity</h2>
            <p className="text-gray-600 text-lg">Clip to a collar, set on a tripod, or use our in‑house Hetri collar for perfect POV.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <CameraIcon className="h-8 w-8 mx-auto text-hetri-primary mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Collar Clip</h3>
              <p className="text-gray-600 text-sm">Ultra‑light clip attaches to most collars for natural, pet‑level perspective.</p>
            </div>
            <div className="card text-center">
              <BoltIcon className="h-8 w-8 mx-auto text-hetri-primary mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Tripod Mount</h3>
              <p className="text-gray-600 text-sm">Quick‑lock base sits on counters or tripods to capture the whole room.</p>
            </div>
            <div className="card text-center">
              <Cog6ToothIcon className="h-8 w-8 mx-auto text-hetri-primary mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Hetri Collar</h3>
              <p className="text-gray-600 text-sm">Our in‑house, comfort‑fit collar keeps the camera stable and centered.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg mt-10">
            <img src="/hetri-camera-mounts-1200x600.png" alt="Hetri Camera Mounting Options" className="w-full h-auto rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg order-2 md:order-1">
              <img src="/hetri-camera-specs-1200x600.png" alt="Hetri Camera Specs" className="w-full h-auto rounded-xl object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Engineered for facilities</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><SignalIcon className="h-5 w-5 text-hetri-primary mt-1" />
                  <span className="text-gray-700">Reliable connectivity via PAW gateway or facility Wi‑Fi</span></li>
                <li className="flex items-start gap-3"><Battery50Icon className="h-5 w-5 text-hetri-primary mt-1" />
                  <span className="text-gray-700">All‑day battery with smart sleep between sessions</span></li>
                <li className="flex items-start gap-3"><ShieldCheckIcon className="h-5 w-5 text-hetri-primary mt-1" />
                  <span className="text-gray-700">Encrypted video, facility‑controlled access, audit logs</span></li>
                <li className="flex items-start gap-3"><CheckCircleIcon className="h-5 w-5 text-hetri-primary mt-1" />
                  <span className="text-gray-700">1080p stabilized video, low‑light tuning, and wide FOV</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What’s in the box */}
      <section className="section-padding bg-hetri-light">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What’s in the box</h2>
            <p className="text-gray-600">Everything you need to start TreatTap sessions on day one.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center"><h3 className="font-semibold text-gray-900 mb-2">Hetri Camera</h3><p className="text-gray-600 text-sm">Factory‑paired and preconfigured.</p></div>
            <div className="card text-center"><h3 className="font-semibold text-gray-900 mb-2">Mounting Kit</h3><p className="text-gray-600 text-sm">Collar clip, tripod base, and adhesive plate.</p></div>
            <div className="card text-center"><h3 className="font-semibold text-gray-900 mb-2">Charging Cable</h3><p className="text-gray-600 text-sm">Fast USB‑C charger for quick turnarounds.</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to bring pet parents closer?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Pair Hetri Camera with TreatTap and the PAW platform for seamless live sessions and effortless facility workflows.</p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/pricing" className="btn-primary">View Pricing</Link>
            <Link href="/contactus" className="btn-secondary">Contact Sales</Link>
          </div>
        </div>
      </section>
    </div>
  )
}


