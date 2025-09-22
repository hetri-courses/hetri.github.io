import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16 border-t border-hetri-primary/20">
      <div className="container-max py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/paw" className="text-hetri-primary hover:text-hetri-secondary transition-colors font-medium">Professional Animal Works</Link></li>
              <li><a href="https://paw.hetri.org" target="_blank" rel="noopener noreferrer" className="text-hetri-primary hover:text-hetri-secondary transition-colors font-medium">PAW Access</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contactus" className="text-hetri-primary hover:text-hetri-secondary transition-colors font-medium">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Hetri Inc</h3>
            <div className="mb-4">
              <Link href="/aboutus" className="text-hetri-primary hover:text-hetri-secondary transition-colors font-medium">
                About Us
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-hetri-primary/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Hetri Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}