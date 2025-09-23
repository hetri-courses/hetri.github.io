import type { Metadata, Viewport } from 'next'
import { Syne_Mono } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'

const syneMono = Syne_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-syne-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hetri Inc',
  description: 'We don\'t build apps. We build systems that turn facilities into powerhouses. Technology that commands markets and delivers measurable dominance.',
  keywords: 'technology, market dominance, business systems, automation, revenue multiplication, pet care, facility management',
  authors: [{ name: 'Hetri Team' }],
  creator: 'Hetri Inc',
  publisher: 'Hetri Inc',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon0.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-icon.png',
  },
  appleWebApp: {
    title: 'Hetri',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hetri.org',
    siteName: 'Hetri Inc',
    title: 'Hetri Inc - Technology That Commands Results',
    description: 'We don\'t build apps. We build systems that turn facilities into powerhouses. Technology that commands markets and delivers measurable dominance.',
    images: [
      {
        url: 'https://hetri.org/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hetri Inc - Technology That Commands Results',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hetri Inc - Technology That Commands Results',
    description: 'We don\'t build apps. We build systems that turn facilities into powerhouses.',
    images: ['https://hetri.org/og-image.png'],
  },
  alternates: {
    canonical: 'https://hetri.org',
  },
}

export const viewport: Viewport = {
  themeColor: '#78a18a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={syneMono.variable}>
      <body className="font-mono min-h-screen flex flex-col bg-black text-white">
        <StructuredData />
        <Header />
        <main className="flex-1 bg-black">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}