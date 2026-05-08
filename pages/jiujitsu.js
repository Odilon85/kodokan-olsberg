import Layout from '../components/Layout'
import Link from 'next/link'
import { img } from '../lib/img'

export default function Jiujitsu() {
  return (
    <Layout title="Jiu-Jitsu" description="Jiu-Jitsu beim Kodokan Olsberg: Trainingszeiten, Techniken und Informationen für Einsteiger und Fortgeschrittene.">

      <div className="page-header page-header--jiujitsu">
        <div className="container">
          <div>
            <div className="section-tag">Sportart</div>
            <h1>Jiu-Jitsu</h1>
            <p>Die sanfte Kunst – effektive Selbstverteidigung für alle</p>
          </div>
          <Link href="/aufnahmeantrag" className="btn btn-primary btn-sm">Jetzt anmelden</Link>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="sport-split">
            <div className="sport-img"><img src={img('/images/Jiusport.png')} alt="Jiu-Jitsu – Bodenkampf" /></div>
            <div>
              <div className="section-tag">Was ist Jiu-Jitsu?</div>
              <h2 className="section-title">Die sanfte Kunst der Selbstverteidigung</h2>
              <p style={{color:'var(--text-muted)',lineHeight:'1.8',marginBottom:'1rem'}}>
                Jiu-Jitsu (auch: Ju-Jutsu) ist eine der ältesten japanischen Kampfkünste und die Mutter vieler moderner
                Kampfsportarten – darunter Judo, Sambo und Aikido. Das Prinzip: Kraft durch Technik überwinden,
                nicht durch Kraft kontern.
              </p>
              <p style={{color:'var(--text-muted)',lineHeight:'1.8'}}>
                Beim Kodokan Olsberg unterrichten wir Jiu-Jitsu mit Fokus auf Selbstverteidigung, Hebelgriffe,
                Würgetechniken und Bodenkampf. Das Training ist für Einsteiger genauso geeignet wie für erfahrene Judoka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRUPPENFOTO JIU */}
      <div className="photo-banner">
        <img src={img('/images/Jiu-Gruppe.JPEG')} alt="Die Jiu-Jitsu-Gruppe des Kodokan Olsberg" style={{objectPosition: 'center 20%'}} />
        <div className="photo-banner-overlay">
          <div className="photo-banner-text">
            <div className="section-tag">Gemeinschaft</div>
            <h2><span style={{whiteSpace:'nowrap'}}>Stark gemeinsam –</span><br />auf und neben der Matte</h2>
            <p>Unsere Jiu-Jitsu-Gruppe verbindet Menschen aller Altersgruppen durch Technik, Respekt und Teamgeist.</p>
          </div>
        </div>
      </div>

      {/* VORTEILE */}
      <section className="section">
        <div className="container">
          <div className="section-tag">Warum Jiu-Jitsu?</div>
          <h2 className="section-title">Die Stärken dieser Kampfkunst</h2>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 013 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg></div>
              <h3>Effektive Selbstverteidigung</h3>
              <p>Jiu-Jitsu wurde für die Praxis entwickelt – Techniken funktionieren unabhängig von Größe oder Stärke.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg></div>
              <h3>Vielseitige Techniken</h3>
              <p>Würfe, Hebel, Würger, Stöße – Jiu-Jitsu vereint alle Distanzbereiche des Kampfes.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/></svg></div>
              <h3>Körperkontrolle</h3>
              <p>Feingefühl, Gleichgewicht und Körperspannung werden systematisch entwickelt.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg></div>
              <h3>Für jeden geeignet</h3>
              <p>Kleinere können Größere besiegen – das macht Jiu-Jitsu für alle Altersgruppen und Körpertypen ideal.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/></svg></div>
              <h3>Kombination mit Judo</h3>
              <p>Wer Judo trainiert, profitiert enorm vom Jiu-Jitsu-Training und umgekehrt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="section-title">Kostenlos reinschnuppern</h2>
          <p className="section-lead" style={{margin:'0 auto .75rem'}}>Qualität, Teamgeist und echte Förderung – bei uns findest du die besten Voraussetzungen, um sportlich und persönlich zu wachsen.</p>
          <p className="section-lead" style={{margin:'0 auto 2rem',fontSize:'.95rem'}}>Komm einfach zum Probetraining – bequeme Sportkleidung genügt für den Anfang.</p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/aufnahmeantrag" className="btn btn-primary">Mitglied werden</Link>
            <Link href="/kontakt" className="btn btn-ghost">Fragen? Kontakt aufnehmen</Link>
          </div>
        </div>
      </section>

    </Layout>
  )
}
