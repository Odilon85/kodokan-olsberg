import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'
import { img } from '../lib/img'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://odilon85.github.io/kodokan-olsberg'

const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'SportsClub',
  name: 'Kodokan Olsberg',
  description: 'Judo- und Jiu-Jitsu-Verein im Sauerland für Kinder, Jugendliche und Erwachsene.',
  url: 'https://www.kodokan-olsberg.de',
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/logo.png`,
  telephone: '',
  email: 'info@kodokan-olsberg.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bahnhofstraße 59',
    addressLocality: 'Olsberg',
    postalCode: '59939',
    addressCountry: 'DE',
  },
  sport: ['Judo', 'Jiu-Jitsu'],
  areaServed: {
    '@type': 'City',
    name: 'Olsberg',
  },
  sameAs: [
    'https://www.instagram.com/kodokan_olsberg_jugend/',
    'https://www.instagram.com/kodokanolsbergmannermannschaft/',
  ],
}

export default function Layout({ children, title, description }) {
  const fullTitle = title ? `${title} – Kodokan Olsberg` : 'Kodokan Olsberg – Judo & Jiu-Jitsu im Sauerland'
  const desc = description || 'Der Judoverein Kodokan Olsberg bietet Judo und Jiu-Jitsu für Kinder, Jugendliche und Erwachsene im Sauerland.'
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={desc} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={img('/images/logo.png')} type="image/png" />

        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={`${SITE_URL}/images/logo.png`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />

        {/* Twitter/X */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={`${SITE_URL}/images/logo.png`} />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
