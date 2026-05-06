import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-about">
          <Link href="/" className="nav-brand">
            <div className="nav-logo"><img src="/images/logo.png" alt="Kodokan Olsberg" /></div>
            <div className="nav-name">Kodokan <small>Olsberg</small></div>
          </Link>
          <p>Judo und Jiu-Jitsu im Herzen des Sauerlandes. Willkommen auf der Matte – egal ob Einsteiger oder Wettkämpfer.</p>
        </div>
        <div className="footer-col">
          <h4>Sport</h4>
          <ul>
            <li><Link href="/judo">Judo</Link></li>
            <li><Link href="/jiujitsu">Jiu-Jitsu</Link></li>
            <li><Link href="/trainer">Trainer</Link></li>
            <li><Link href="/galerie">Galerie</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Verein</h4>
          <ul>
            <li><Link href="/vorstand">Vorstand</Link></li>
            <li><Link href="/neuigkeiten">Neuigkeiten</Link></li>
            <li><Link href="/aufnahmeantrag">Mitglied werden</Link></li>
            <li><Link href="/satzung">Satzung</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Rechtliches</h4>
          <ul>
            <li><Link href="/kontakt">Kontakt</Link></li>
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Judoverein Kodokan Olsberg e.V.</span>
      </div>
    </footer>
  )
}
