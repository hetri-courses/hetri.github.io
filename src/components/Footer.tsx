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
              <li><Link href="/treattap" className="text-hetri-light hover:text-white transition-colors">TreatTap</Link></li>
              <li><Link href="/pricing" className="text-hetri-light hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing#faq" className="text-hetri-light hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contactus" className="text-hetri-light hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Access</h4>
            <ul className="space-y-2">
              <li><a href="https://paw.hetri.org" target="_blank" rel="noopener noreferrer" className="text-hetri-light hover:text-white transition-colors">PAW Login</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-hetri-secondary mt-8 pt-8 text-center text-hetri-light">
          <p>&copy; 2025 Hetri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 