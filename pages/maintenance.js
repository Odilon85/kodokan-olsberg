import Head from 'next/head'
import { img } from '../lib/img'

export default function Maintenance() {
  return (
    <>
      <Head>
        <title>Kodokan Olsberg – Wartung</title>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Barlow', sans-serif;
          background: #0a0a0a;
          color: #f0f0f0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page {
          text-align: center;
          padding: 2rem;
          max-width: 560px;
          width: 100%;
        }

        .logo {
          width: 120px;
          height: 120px;
          object-fit: contain;
          margin-bottom: 2rem;
          opacity: 0.9;
          filter: drop-shadow(0 4px 16px rgba(0,0,0,0.6));
        }

        .badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c8a84b;
          border: 1px solid #c8a84b;
          border-radius: 2rem;
          padding: 0.3rem 1rem;
          margin-bottom: 1.5rem;
        }

        h1 {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          color: #ffffff;
        }

        h1 em {
          display: block;
          font-style: normal;
          color: #c8a84b;
        }

        p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #a0a0a0;
          margin-bottom: 2.5rem;
        }

        .divider {
          width: 48px;
          height: 3px;
          background: #c8a84b;
          border-radius: 2px;
          margin: 0 auto 2.5rem;
        }

        .contact {
          font-size: 0.9rem;
          color: #707070;
        }

        .contact a {
          color: #c8a84b;
          text-decoration: none;
        }

        .contact a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="page">
        <img
          src={img('/images/logo.png')}
          alt="Kodokan Olsberg"
          className="logo"
        />

        <div className="badge">Wartungsmodus</div>

        <h1>
          Einen Moment –
          <em>Wir sind gleich zurück</em>
        </h1>

        <div className="divider" />

        <p>
          Unsere Website wird gerade überarbeitet und verbessert.<br />
          Wir sind bald wieder für euch da.
        </p>

        <div className="contact">
          Bei dringenden Fragen:{' '}
          <a href="mailto:info@kodokan-olsberg.de">info@kodokan-olsberg.de</a>
        </div>
      </div>
    </>
  )
}
