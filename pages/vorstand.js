import Layout from '../components/Layout'
import Link from 'next/link'
import { img } from '../lib/img'

export default function Vorstand() {
  return (
    <Layout title="Vorstand" description="Der Vorstand des Judovereins Kodokan Olsberg e.V.">

      <div className="page-header">
        <div className="container">
          <div>
            <div className="section-tag">Verein</div>
            <h1>Vorstand</h1>
            <p>Der geschäftsführende Vorstand des Judovereins Kodokan Olsberg e.V.</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="section-lead">Der Vorstand des Kodokan Olsberg e.V. leitet den Verein ehrenamtlich und engagiert sich für das Wohl aller Mitglieder. Bei Fragen, Anregungen oder Problemen stehen wir gerne zur Verfügung.</p>

          {/* GESCHÄFTSFÜHRENDER VORSTAND */}
          <div className="section-tag mt-2">Geschäftsführender Vorstand</div>
          <div className="board-grid" style={{marginTop:'1rem'}}>
            <div className="board-card">
              <div className="board-avatar"><img src={img('/images/vorstand-peter.jpg')} alt="Peter den Ridder" /></div>
              <div><div className="board-card-name">Peter den Ridder</div><div className="board-card-role">1. Vorsitzender</div></div>
            </div>
            <div className="board-card">
              <div className="board-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
              <div><div className="board-card-name">Kati Dittrich</div><div className="board-card-role">Vorstand</div></div>
            </div>
            <div className="board-card">
              <div className="board-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
              <div><div className="board-card-name">Sebastian Bültmann</div><div className="board-card-role">Vorstand</div></div>
            </div>
          </div>

          <div className="divider mt-2"></div>

          {/* GESAMTVORSTAND */}
          <div className="section-tag mt-2">Gesamtvorstand</div>
          <div className="board-grid" style={{marginTop:'1rem'}}>
            <div className="board-card">
              <div className="board-avatar"><img src={img('/images/vorstand-peter.jpg')} alt="Peter den Ridder" /></div>
              <div><div className="board-card-name">Peter den Ridder</div><div className="board-card-role">1. Vorsitzender</div></div>
            </div>
            <div className="board-card">
              <div className="board-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
              <div><div className="board-card-name">Kati Dittrich</div><div className="board-card-role">Vorstand</div></div>
            </div>
            <div className="board-card">
              <div className="board-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
              <div><div className="board-card-name">Sebastian Bültmann</div><div className="board-card-role">Vorstand</div></div>
            </div>
            <div className="board-card">
              <div className="board-avatar"><img src={img('/images/trainer-tobias.jpg')} alt="Tobias Klappert" /></div>
              <div><div className="board-card-name">Tobias Klappert</div><div className="board-card-role">Erweiterter Vorstand</div></div>
            </div>
            <div className="board-card">
              <div className="board-avatar"><img src={img('/images/trainer-nico.jpg')} alt="Nico Berkenkopf" /></div>
              <div><div className="board-card-name">Nico Berkenkopf</div><div className="board-card-role">Erweiterter Vorstand</div></div>
            </div>
            <div className="board-card">
              <div className="board-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
              <div><div className="board-card-name">Sebastian Zahm</div><div className="board-card-role">Erweiterter Vorstand</div></div>
            </div>
            <div className="board-card">
              <div className="board-avatar"><img src={img('/images/trainer-tia.jpg')} alt="Tia den Ridder" /></div>
              <div><div className="board-card-name">Tia den Ridder</div><div className="board-card-role">Jugendleitung</div></div>
            </div>
            <div className="board-card">
              <div className="board-avatar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
              <div><div className="board-card-name">Jacqueline Stappert</div><div className="board-card-role">Erweiterter Vorstand · Presse</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT VORSTAND */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-tag">Kontakt</div>
          <h2 className="section-title">Vorstand kontaktieren</h2>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon">📧</div>
              <h3>E-Mail</h3>
              <p>Für allgemeine Anfragen: <a href="mailto:info@kodokan-olsberg.de">info@kodokan-olsberg.de</a></p>
            </div>
            <div className="card">
              <div className="card-icon">📅</div>
              <h3>Jahreshauptversammlung</h3>
              <p>Die Jahreshauptversammlung findet jährlich statt. Alle Mitglieder werden rechtzeitig eingeladen.</p>
            </div>
            <div className="card">
              <div className="card-icon">📋</div>
              <h3>Satzung</h3>
              <p>Die vollständige Vereinssatzung ist im Mitgliederbereich und unter <Link href="/satzung">Satzung</Link> einsehbar.</p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
