import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} – Kodokan Olsberg` : 'Kodokan Olsberg – Judo & Jiu-Jitsu im Sauerland'}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
