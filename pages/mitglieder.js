import { useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Mitglieder() {
  const [showNote, setShowNote] = useState(false)

  return (
    <Layout title="Mitglieder" description="Mitgliederbereich des Judovereins Kodokan Olsberg – Dokumente, interne Infos und mehr.">

      <div className="page-header">
        <div className="container">
          <div>
            <div className="section-tag">Exklusiv</div>
            <h1>Mitgliederbereich</h1>
            <p>Interne Dokumente, Trainingsunterlagen und Vereinsinformationen</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">

          <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'3rem',alignItems:'start'}}>

            {/* ANMELDEN */}
            <div>
              <div className="section-tag">Zugang</div>
              <h2 className="section-title">Mitglieder-Login</h2>
              <div className="form-card mt-2">
                <div className="fg">
                  <label htmlFor="m-email">E-Mail</label>
                  <input type="email" id="m-email" name="email" placeholder="mitglied@email.de" />
                </div>
                <div className="fg">
                  <label htmlFor="m-pw">Passwort</label>
                  <input type="password" id="m-pw" name="passwort" placeholder="••••••••" />
                </div>
                <button type="button" className="btn btn-primary" style={{width:'100%'}} onClick={() => setShowNote(true)}>Einloggen</button>
                <p style={{textAlign:'center',marginTop:'.85rem',fontSize:'.82rem',color:'var(--text-muted)'}}>
                  Noch kein Zugang? <Link href="/kontakt">Vorstand kontaktieren</Link>
                </p>
              </div>
              {showNote && (
                <div id="loginNote" style={{marginTop:'1rem'}} className="alert alert-info">
                  ℹ️ Der Login-Bereich erfordert ein Backend (z.B. PHP oder Node.js). Bitte beim Webmaster nachfragen.
                </div>
              )}
            </div>

            {/* DOKUMENTE (öffentlich sichtbar) */}
            <div>
              <div className="section-tag">Dokumente</div>
              <h2 className="section-title">Vereinsdokumente</h2>
              <p style={{color:'var(--text-muted)',fontSize:'.9rem',marginBottom:'1.5rem'}}>Folgende Dokumente sind öffentlich zugänglich. Weitere Unterlagen erhalten eingeloggte Mitglieder.</p>
              <div className="grid-2" style={{gap:'1rem'}}>
                <div className="card" style={{display:'flex',gap:'1rem',alignItems:'center',padding:'1.25rem'}}>
                  <div style={{fontSize:'1.75rem'}}>📄</div>
                  <div>
                    <div style={{fontSize:'.95rem',fontWeight:'700'}}>Vereinssatzung</div>
                    <Link href="/satzung" style={{fontSize:'.82rem',color:'var(--primary)'}}>Online ansehen →</Link>
                  </div>
                </div>
                <div className="card" style={{display:'flex',gap:'1rem',alignItems:'center',padding:'1.25rem'}}>
                  <div style={{fontSize:'1.75rem'}}>📋</div>
                  <div>
                    <div style={{fontSize:'.95rem',fontWeight:'700'}}>Aufnahmeantrag</div>
                    <Link href="/aufnahmeantrag" style={{fontSize:'.82rem',color:'var(--primary)'}}>Formular öffnen →</Link>
                  </div>
                </div>
                <div className="card" style={{display:'flex',gap:'1rem',alignItems:'center',padding:'1.25rem'}}>
                  <div style={{fontSize:'1.75rem'}}>🔒</div>
                  <div>
                    <div style={{fontSize:'.95rem',fontWeight:'700'}}>Trainingsplan</div>
                    <span style={{fontSize:'.82rem',color:'var(--text-muted)'}}>Nur für Mitglieder</span>
                  </div>
                </div>
                <div className="card" style={{display:'flex',gap:'1rem',alignItems:'center',padding:'1.25rem'}}>
                  <div style={{fontSize:'1.75rem'}}>🔒</div>
                  <div>
                    <div style={{fontSize:'.95rem',fontWeight:'700'}}>Wettkampfanmeldungen</div>
                    <span style={{fontSize:'.82rem',color:'var(--text-muted)'}}>Nur für Mitglieder</span>
                  </div>
                </div>
                <div className="card" style={{display:'flex',gap:'1rem',alignItems:'center',padding:'1.25rem'}}>
                  <div style={{fontSize:'1.75rem'}}>🔒</div>
                  <div>
                    <div style={{fontSize:'.95rem',fontWeight:'700'}}>Protokolle (HV)</div>
                    <span style={{fontSize:'.82rem',color:'var(--text-muted)'}}>Nur für Mitglieder</span>
                  </div>
                </div>
                <div className="card" style={{display:'flex',gap:'1rem',alignItems:'center',padding:'1.25rem'}}>
                  <div style={{fontSize:'1.75rem'}}>🔒</div>
                  <div>
                    <div style={{fontSize:'.95rem',fontWeight:'700'}}>Beitragsordnung</div>
                    <span style={{fontSize:'.82rem',color:'var(--text-muted)'}}>Nur für Mitglieder</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KEIN MITGLIED */}
      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="section-title">Noch kein Mitglied?</h2>
          <p className="section-lead" style={{margin:'0 auto 2rem'}}>Werde jetzt Teil der Kodokan-Familie und erhalte Zugang zum Mitgliederbereich.</p>
          <Link href="/aufnahmeantrag" className="btn btn-primary">Mitglied werden</Link>
        </div>
      </section>

    </Layout>
  )
}
