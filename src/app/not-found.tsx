import Link from 'next/link';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found - Hetri Inc',
  description: 'This page doesn\'t exist in our system. But that\'s okay – the path to market dominance is clear.',
}

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-hetri-dark to-black text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
        This page doesn't exist in our system. 
      </p>
      <Link href="/" className="btn-primary inline-flex items-center">
        Command Your Market
      </Link>

      <section className="mt-16 section-padding bg-hetri-accent w-full">
        <div className="container-max text-center">
          <h3 className="text-3xl font-bold text-white mb-6">While You're Here, Command Your Market</h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Don't get lost in the past. The future of pet care operations is here.
          </p>
          <Link href="/paw" className="btn-primary inline-flex items-center">
            Explore PAW Platform
          </Link>
        </div>
      </section>
    </div>
  );
}