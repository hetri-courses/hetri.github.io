import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-hetri-primary text-white mt-16">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Hetri</h3>
            <p className="text-hetri-light">
              Transforming pet care with PAW booking system and TreatTap live-streaming treats.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/aboutus" className="text-hetri-light hover:text-white transition-colors">About Us</Link></li>
                              <li><Link href="/waitlist" className="text-hetri-light hover:text-white transition-colors">Waitlist</Link></li>
                <li><Link href="/contactus" className="text-hetri-light hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-hetri-light hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contactus" className="text-hetri-light hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <p className="text-hetri-light">
              Ready to transform your facility?
            </p>
            <Link href="/contactus" className="inline-block mt-4 bg-white text-hetri-primary px-6 py-2 rounded-lg font-medium hover:bg-hetri-light transition-colors">
              Get Started
            </Link>
          </div>
        </div>
        
        <div className="border-t border-hetri-secondary mt-8 pt-8 text-center text-hetri-light">
          <p>&copy; 2025 Hetri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 