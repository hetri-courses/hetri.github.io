import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Hetri - Professional Animal Works & TreatTap',
  description: 'Transform your pet care facility with PAW booking system and TreatTap live-streaming treats. Empowering Hetri Admins and delighting Hetri Parents.',
  keywords: 'pet care, animal works, treatTap, facility management, live streaming, pet resort, booking system',
  authors: [{ name: 'Hetri Team' }],
  openGraph: {
    title: 'Hetri - Professional Animal Works & TreatTap',
    description: 'Transform your pet care facility with PAW booking system and TreatTap live-streaming treats.',
    type: 'website',
    url: 'https://hetri.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#78a18a" />
        <meta name="msapplication-TileColor" content="#78a18a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-mono">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 