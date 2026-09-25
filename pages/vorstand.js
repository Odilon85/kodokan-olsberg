import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
)

function BoardCard({ photo, alt, name, role }) {
  return (
    <div className="board-card">
      <div className="board-photo">
        {photo
          ? <Image src={photo} alt={alt} fill sizes="(max-width: 600px) 50vw, 25vw" />
          : <PersonIcon />
        }
      </div>
      <div className="board-card-body">
        <div className="board-card-name">{name}</div>
        <div className="board-card-role">{role}</div>
      </div>
    </div>
  )
}

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
            <BoardCard photo="/images/vorstand-peter.jpg" alt="Peter den Ridder" name="Peter den Ridder" role="1. Vorsitzender" />
            <BoardCard photo="/images/vorstand-kati.jpg" alt="Kati Dittrich" name="Kati Dittrich" role="Vorstand" />
            <BoardCard name="Sebastian Bültmann" role="Vorstand" />
          </div>

          <div className="divider mt-2"></div>

          {/* GESAMTVORSTAND */}
          <div className="section-tag mt-2">Gesamtvorstand</div>
          <div className="board-grid" style={{marginTop:'1rem'}}>
            <BoardCard photo="/images/vorstand-peter.jpg" alt="Peter den Ridder" name="Peter den Ridder" role="1. Vorsitzender" />
            <BoardCard photo="/images/vorstand-kati.jpg" alt="Kati Dittrich" name="Kati Dittrich" role="Vorstand" />
            <BoardCard name="Sebastian Bültmann" role="Vorstand" />
            <BoardCard photo="/images/vorstand-tobias.jpg" alt="Tobias Klappert" name="Tobias Klappert" role="Erweiterter Vorstand" />
            <BoardCard photo="/images/vorstand-nico.jpg" alt="Nico Berkenkopf" name="Nico Berkenkopf" role="Erweiterter Vorstand" />
            <BoardCard photo="/images/vorstand-sebastian.jpg" alt="Sebastian Zahm" name="Sebastian Zahm" role="Erweiterter Vorstand" />
            <BoardCard photo="/images/vorstand-tia.jpg" alt="Tia den Ridder" name="Tia den Ridder" role="Jugendleitung" />
            <BoardCard photo="/images/vorstand-jacqueline.jpg" alt="Jacqueline Stappert" name="Jacqueline Stappert" role="Erweiterter Vorstand · Presse" />
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
