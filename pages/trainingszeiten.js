import Layout from '../components/Layout'
import Link from 'next/link'

export default function Trainingszeiten() {
  return (
    <Layout title="Trainingszeiten" description="Alle Trainingszeiten des Kodokan Olsberg – Judo und Jiu-Jitsu. Montag bis Freitag, für Kinder, Jugendliche und Erwachsene.">

      <div className="page-header">
        <div className="container">
          <div>
            <div className="section-tag">Wann &amp; Wo</div>
            <h1>Trainingszeiten</h1>
            <p>Alle Einheiten für Judo und Jiu-Jitsu im Überblick</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="section-lead">Trainingsstätte: <strong>Turnhalle der städtischen Real- und Sekundarschule Olsberg</strong>, Bahnhofstraße 59, 59939 Olsberg.</p>

          <div className="schedule-grid" style={{marginTop:'2rem'}}>

            {/* MONTAG */}
            <div className="day-card">
              <div className="day-label">Montag</div>
              <div className="session">
                <div className="session-time">⏱ 18:00 – 19:30</div>
                <div className="session-name">Kraft / Ausdauer</div>
                <div className="session-info">ab 7 Jahre</div>
                <div className="session-trainer">👤 Jamie</div>
              </div>
            </div>

            {/* DIENSTAG */}
            <div className="day-card">
              <div className="day-label">Dienstag</div>
              <div className="session">
                <div className="session-time">⏱ 18:00 – 19:15</div>
                <div className="session-name">Jugendtraining <span style={{color:'var(--primary)',fontSize:'.75rem',fontWeight:600}}>Judo</span></div>
                <div className="session-info">6 – 11 Jahre</div>
                <div className="session-trainer">👤 Nico / Jamie</div>
                <div className="session-assistant">Assistenz: Ricardo</div>
              </div>
              <div className="session">
                <div className="session-time">⏱ 19:30 – 21:00</div>
                <div className="session-name">Erwachsenentraining <span style={{color:'var(--primary)',fontSize:'.75rem',fontWeight:600}}>Judo</span></div>
                <div className="session-info">ab 15 Jahre</div>
                <div className="session-trainer">👤 Nico</div>
              </div>
              <div className="session">
                <div className="session-time">⏱ 19:30 – 21:00</div>
                <div className="session-name">Jiu-Jitsu</div>
                <div className="session-info">alle Altersgruppen</div>
                <div className="session-trainer">👤 Dirk</div>
              </div>
            </div>

            {/* DONNERSTAG */}
            <div className="day-card">
              <div className="day-label">Donnerstag</div>
              <div className="session">
                <div className="session-time">⏱ 16:30 – 17:45</div>
                <div className="session-name">Kindertraining <span style={{color:'var(--primary)',fontSize:'.75rem',fontWeight:600}}>Judo</span></div>
                <div className="session-info">ab 4 Jahre</div>
                <div className="session-trainer">👤 Tobi / Tia</div>
                <div className="session-assistant">Assistenz: Albert / Jule / Felix</div>
              </div>
              <div className="session">
                <div className="session-time">⏱ 17:45 – 19:15</div>
                <div className="session-name">Jugendtraining <span style={{color:'var(--primary)',fontSize:'.75rem',fontWeight:600}}>Judo</span></div>
                <div className="session-info">ab Orange Gurt</div>
                <div className="session-trainer">👤 Tobi / Tia</div>
              </div>
              <div className="session">
                <div className="session-time">⏱ 19:30 – 21:00</div>
                <div className="session-name">Erwachsenentraining <span style={{color:'var(--primary)',fontSize:'.75rem',fontWeight:600}}>Judo</span></div>
                <div className="session-info">ab 15 Jahre</div>
                <div className="session-trainer">👤 Tobi</div>
              </div>
              <div className="session">
                <div className="session-time">⏱ 19:30 – 21:00</div>
                <div className="session-name">Jiu-Jitsu</div>
                <div className="session-info">alle Altersgruppen</div>
                <div className="session-trainer">👤 Carsten / Frank</div>
              </div>
            </div>

            {/* FREITAG */}
            <div className="day-card">
              <div className="day-label">Freitag</div>
              <div className="session">
                <div className="session-time">⏱ 17:00 – 18:00</div>
                <div className="session-name">Leistungsgruppe <span style={{color:'var(--primary)',fontSize:'.75rem',fontWeight:600}}>Judo</span></div>
                <div className="session-info">ausgewählte Teilnehmer</div>
                <div className="session-trainer">👤 Tia / Tobi</div>
              </div>
              <div className="session">
                <div className="session-time">⏱ 18:00 – 19:30</div>
                <div className="session-name">Wettkampftraining <span style={{color:'var(--primary)',fontSize:'.75rem',fontWeight:600}}>Judo</span></div>
                <div className="session-info">ab Gelb Gurt</div>
                <div className="session-trainer">👤 Tia / Tobi</div>
              </div>
              <div className="session">
                <div className="session-time">⏱ 19:30 – 21:00</div>
                <div className="session-name">Kata / Spiel &amp; Spaß <span style={{color:'var(--primary)',fontSize:'.75rem',fontWeight:600}}>Judo</span></div>
                <div className="session-info">Wochenwechsel</div>
                <div className="session-trainer">👤 Tia / Tobi / Jamie</div>
              </div>
            </div>

          </div>

          <div style={{marginTop:'1.5rem',display:'flex',gap:'.75rem',flexWrap:'wrap'}}>
            <Link href="/judo" className="btn btn-ghost btn-sm">Mehr über Judo</Link>
            <Link href="/jiujitsu" className="btn btn-ghost btn-sm">Mehr über Jiu-Jitsu</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container text-center">
          <h2 className="section-title">Einfach vorbeikommen</h2>
          <p className="section-lead" style={{margin:'0 auto 2rem'}}>Keine Voranmeldung nötig – komm einfach zum Probetraining. Bequeme Sportkleidung genügt für den Anfang.</p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/aufnahmeantrag" className="btn btn-primary">Mitglied werden</Link>
            <Link href="/kontakt" className="btn btn-ghost">Kontakt aufnehmen</Link>
          </div>
        </div>
      </section>

    </Layout>
  )
}
