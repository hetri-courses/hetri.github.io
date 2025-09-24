export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hetri Inc',
    url: 'https://hetri.org',
    logo: 'https://hetri.org/Logo.png',
    description: 'We don\'t build apps. We produce results by building systems that turn facilities into powerhouses with Professional Animal Works (PAW).',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@hetri.org',
    },
    sameAs: [
      'https://paw.hetri.org',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Hetri Inc',
    url: 'https://hetri.org',
    description: 'Technology that produces results. We build systems that turn businesses into powerhouses.',
    publisher: {
      '@type': 'Organization',
      name: 'Hetri Inc',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
