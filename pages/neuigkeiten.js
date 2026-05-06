import Layout from '../components/Layout'
import Link from 'next/link'

// Instagram-Handles hier eintragen, sobald bekannt
const INSTAGRAM_ACCOUNTS = [
  { handle: '@kodokan.olsberg', label: 'Kodokan Olsberg', url: 'https://instagram.com/kodokan.olsberg' },
  { handle: '@kodokan.judo', label: 'Judo', url: 'https://instagram.com/kodokan.judo' },
  { handle: '@kodokan.jiujitsu', label: 'Jiu-Jitsu', url: 'https://instagram.com/kodokan.jiujitsu' },
]

export default function Neuigkeiten() {
  return (
    <Layout title="Neuigkeiten" description="Neuigkeiten und aktuelle Beiträge des Judovereins Kodokan Olsberg.">

      <div className="page-header">
        <div className="container">
          <div>
            <div className="section-tag">Aktuelles</div>
            <h1>Neuigkeiten</h1>
            <p>Aktuelle Beiträge aus unserem Vereinsleben</p>
          </div>
        </div>
      </div>

      {/* INSTAGRAM FEED */}
      <section className="section">
        <div className="container">
          <div className="section-tag">Social Media</div>
          <h2 className="section-title">Aktuelles auf Instagram</h2>
          <p className="section-lead">
            Folge uns auf Instagram und bleib immer auf dem Laufenden – Trainingseindrücke, Wettkampfergebnisse und Vereinsleben aus erster Hand.
          </p>

          {/* Instagram-Profile */}
          <div className="grid-3" style={{marginBottom:'3rem'}}>
            {INSTAGRAM_ACCOUNTS.map(({ handle, label, url }) => (
              <a key={handle} href={url} target="_blank" rel="noopener noreferrer" className="card" style={{textDecoration:'none',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',gap:'.75rem'}}>
                <div className="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                </div>
                <div>
                  <div style={{fontWeight:700,color:'var(--primary)',fontSize:'1rem'}}>{label}</div>
                  <div style={{color:'var(--text-muted)',fontSize:'.85rem'}}>{handle}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Feed-Embed Platzhalter */}
          {/*
            INSTAGRAM FEED EINRICHTEN:
            1. Gehe zu https://behold.so und erstelle einen kostenlosen Account
            2. Verbinde deine drei Instagram-Accounts
            3. Erstelle einen Feed und kopiere den Widget-Code
            4. Ersetze den Platzhalter unten durch deinen Behold-Widget-Code
            Alternativ: Wir können den Feed auch über die Instagram Graph API direkt einbinden.
          */}
          <div style={{background:'var(--surface)',border:'1px dashed var(--border)',borderRadius:'12px',padding:'3rem',textAlign:'center'}}>
            <div style={{color:'var(--text-muted)',marginBottom:'1rem',fontSize:'1.1rem'}}>
              📸 Instagram-Feed
            </div>
            <p style={{color:'var(--text-muted)',marginBottom:'1.5rem',maxWidth:'500px',margin:'0 auto 1.5rem'}}>
              Der Instagram-Feed wird hier angezeigt, sobald die drei Instagram-Accounts verbunden sind. Bitte die Handles in der Seite hinterlegen und einen Feed-Dienst einrichten.
            </p>
            <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
              {INSTAGRAM_ACCOUNTS.map(({ handle, url }) => (
                <a key={handle} href={url} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">{handle}</a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container text-center">
          <div className="section-tag">Mitmachen</div>
          <h2 className="section-title">Teil der Gemeinschaft werden</h2>
          <p className="section-lead" style={{margin:'0 auto 2rem'}}>Komm zum Probetraining und erlebe den Kodokan Olsberg live auf der Matte.</p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/aufnahmeantrag" className="btn btn-primary">Mitglied werden</Link>
            <Link href="/kontakt" className="btn btn-ghost">Kontakt aufnehmen</Link>
          </div>
        </div>
      </section>

    </Layout>
  )
}
