import Link from 'next/link'
import Layout from '../components/Layout'
import { img } from '../lib/img'
import NextTraining from '../components/NextTraining'

export default function Home() {
  return (
    <Layout description="Der Judoverein Kodokan Olsberg bietet Judo und Jiu-Jitsu für Kinder, Jugendliche und Erwachsene im Sauerland.">

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-inner">
          <img src={img('/images/logo.png')} alt="Kodokan Olsberg" style={{display:'block',margin:'0 auto 1.5rem',width:'145px',height:'145px',objectFit:'contain',opacity:.75,filter:'drop-shadow(0 2px 8px rgba(0,0,0,.6))'}} />
          <h1>Willkommen beim<em>Kodokan Olsberg</em></h1>
          <p>Judo und Jiu-Jitsu für alle Altersgruppen – vom ersten Wurf bis zur Meisterschaft. Werde Teil unserer Gemeinschaft.</p>
          <div className="hero-btns">
            <Link href="/aufnahmeantrag" className="btn btn-primary">Jetzt Mitglied werden</Link>
            <Link href="/judo" className="btn btn-ghost">Trainingszeiten ansehen</Link>
          </div>
          <NextTraining />
        </div>
      </section>

      {/* WARUM KODOKAN */}
      <section className="section">
        <div className="container" style={{maxWidth:'800px',textAlign:'center'}}>
          <div className="section-tag">Warum Kodokan?</div>
          <h2 className="section-title">Deine erste Adresse für Judo und Jiu-Jitsu</h2>
          <p style={{color:'var(--text-muted)',lineHeight:1.9,marginBottom:'1.25rem'}}>
            Wir verbinden starke Jugend- und Talentförderung mit professionellem Training und erfolgreicher Wettkampfvorbereitung für Kinder, Jugendliche und Erwachsene. Ob erste Schritte auf der Matte oder gezielte Förderung im Leistungsbereich – bei uns entwickeln Sportler ihre Fähigkeiten in einem motivierenden Umfeld mit erfahrenen Trainern und einer starken Gemeinschaft.
          </p>
          <p style={{color:'var(--text-muted)',lineHeight:1.9}}>
            Unser Fokus liegt auf persönlicher Entwicklung, sportlichem Erfolg und der Begeisterung für Judo und Jiu-Jitsu. Wer Qualität, Teamgeist und echte Förderung sucht, findet bei uns die besten Voraussetzungen, um sportlich und persönlich zu wachsen.
          </p>
        </div>
      </section>

      {/* ÜBER UNS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-tag">Über uns</div>
          <h2 className="section-title">Mehr als ein Verein</h2>
          <p className="section-lead">Der Judoverein Kodokan Olsberg e.V. vereint Tradition und modernen Kampfsport. Wir trainieren zusammen, wachsen zusammen und feiern gemeinsam Erfolge.</p>
          <div className="grid-3">
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg></div>
              <h3>Professionelles Training</h3>
              <p>Unsere lizenzierten Trainer begleiten dich von der ersten Übung bis zum Schwarzgurt – individuell und engagiert.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg></div>
              <h3>Alle Altersgruppen</h3>
              <p>Von Bambini-Judo für die Kleinsten bis zum Erwachsenentraining – bei uns ist jeder willkommen.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" /></svg></div>
              <h3>Wettkampf &amp; Breitensport</h3>
              <p>Ob Wettkämpfer oder Freizeitsportler – wir bieten das passende Training für jedes Ziel.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg></div>
              <h3>Gemeinschaft</h3>
              <p>Der Dojo ist mehr als ein Trainingsraum – er ist ein Ort der Gemeinschaft, des Respekts und der Kameradschaft.</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg></div>
              <h3>Mitten in Olsberg</h3>
              <p>Gut erreichbar im Herzen des Sauerlandes – komm einfach zum Probetraining vorbei!</p>
            </div>
            <div className="card">
              <div className="card-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg></div>
              <h3>Zwei Kampfsportarten</h3>
              <p>Mit Judo und Jiu-Jitsu bieten wir zwei der effektivsten und vielseitigsten Kampfkünste der Welt.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SPORTARTEN */}
      <section className="section">
        <div className="container">
          <div className="section-tag">Sportarten</div>
          <h2 className="section-title">Was wir trainieren</h2>
          <p className="section-lead">Zwei klassische Kampfsportarten mit jahrhundertealter Tradition – bei uns modern und altersgerecht vermittelt.</p>
          <div className="sport-card-grid">
            <div className="sport-card">
              <div className="sport-card-img">
                <img src={img('/images/Judosport.png')} alt="Judo – Kodokan Olsberg" />
                <Link href="/judo" className="sport-card-link" title="Mehr über Judo">↗</Link>
              </div>
              <div className="sport-card-body">
                <div className="sport-card-sub">Der sanfte Weg</div>
                <div className="sport-card-title">JUDO</div>
                <p className="sport-card-desc">„Der sanfte Weg" – Judo ist eine der meistverbreiteten Kampfsportarten der Welt und olympische Disziplin. Im Fokus stehen Wurftechniken, Bodenkampf und mentale Stärke.</p>
                <Link href="/judo" className="btn btn-primary btn-sm">Trainingszeiten &amp; Details</Link>
              </div>
            </div>
            <div className="sport-card">
              <div className="sport-card-img">
                <img src={img('/images/Jiusport.png')} alt="Jiu-Jitsu – Kodokan Olsberg" />
                <Link href="/jiujitsu" className="sport-card-link" title="Mehr über Jiu-Jitsu">↗</Link>
              </div>
              <div className="sport-card-body">
                <div className="sport-card-sub">Die sanfte Kunst</div>
                <div className="sport-card-title">JIU-JITSU</div>
                <p className="sport-card-desc">Die „sanfte Kunst" – Jiu-Jitsu kombiniert Hebel, Würge- und Wurftechniken zur effektiven Selbstverteidigung. Ideal für Einsteiger und erfahrene Kämpfer.</p>
                <Link href="/jiujitsu" className="btn btn-primary btn-sm">Trainingszeiten &amp; Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAININGSZEITEN */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-tag">Training</div>
          <h2 className="section-title">Trainingszeiten (Übersicht)</h2>
          <p className="section-lead">Trainingsstätte: <strong>Turnhalle der Real- und Sekundarschule Olsberg</strong>, Bahnhofstraße 59, 59939 Olsberg.</p>
          <div className="schedule-grid">
            <div className="day-card">
              <div className="day-label">Montag</div>
              <div className="session">
                <div className="session-time">⏱ 18:00 – 19:30</div>
                <div className="session-name">Kraft / Ausdauer</div>
                <div className="session-info">ab 7 Jahre</div>
                <div className="session-trainer">👤 Jamie</div>
              </div>
            </div>
            <div className="day-card">
              <div className="day-label">Dienstag</div>
              <div className="session"><div className="session-time">⏱ 18:00 – 19:15</div><div className="session-name">Jugendtraining</div><div className="session-info">6 – 11 Jahre</div><div className="session-trainer">👤 Nico</div></div>
              <div className="session"><div className="session-time">⏱ 19:30 – 21:00</div><div className="session-name">Erwachsenentraining</div><div className="session-info">ab 15 Jahre</div><div className="session-trainer">👤 Nico</div></div>
              <div className="session"><div className="session-time">⏱ 19:30 – 21:00</div><div className="session-name">Jiu-Jitsu</div><div className="session-info">alle Altersgruppen</div><div className="session-trainer">👤 Dirk</div></div>
            </div>
            <div className="day-card">
              <div className="day-label">Donnerstag</div>
              <div className="session"><div className="session-time">⏱ 16:30 – 17:45</div><div className="session-name">Kindertraining</div><div className="session-info">ab 4 Jahre</div><div className="session-trainer">👤 Tobi / Tia / Albert / Jule</div></div>
              <div className="session"><div className="session-time">⏱ 17:45 – 19:15</div><div className="session-name">Leistungsgruppe</div><div className="session-info">ab Orange Gurt</div><div className="session-trainer">👤 Tobi / Tia</div></div>
              <div className="session"><div className="session-time">⏱ 19:30 – 21:00</div><div className="session-name">Erwachsenentraining</div><div className="session-info">ab 15 Jahre</div><div className="session-trainer">👤 Tobi</div></div>
              <div className="session"><div className="session-time">⏱ 19:30 – 21:00</div><div className="session-name">Jiu-Jitsu</div><div className="session-info">alle Altersgruppen</div><div className="session-trainer">👤 Carsten / Frank</div></div>
            </div>
            <div className="day-card">
              <div className="day-label">Freitag</div>
              <div className="session"><div className="session-time">⏱ 18:00 – 19:30</div><div className="session-name">Wettkampftraining</div><div className="session-info">ab Gelb Gurt</div><div className="session-trainer">👤 Tia / Tobi</div></div>
              <div className="session"><div className="session-time">⏱ 19:30 – 21:00</div><div className="session-name">Kata / Spiel &amp; Spaß</div><div className="session-info">Wochenwechsel</div><div className="session-trainer">👤 Tia / Tobi</div></div>
            </div>
          </div>
          <div style={{marginTop:'1.5rem'}}>
            <Link href="/judo" className="btn btn-ghost btn-sm">Judo-Details</Link>
            <Link href="/jiujitsu" className="btn btn-ghost btn-sm" style={{marginLeft:'.75rem'}}>Jiu-Jitsu-Details</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-alt">
        <div className="container text-center">
          <div className="section-tag">Mitmachen</div>
          <h2 className="section-title">Bereit für die Matte?</h2>
          <p className="section-lead" style={{margin:'0 auto 2rem'}}>Komm einfach zum Probetraining – keine Voranmeldung nötig. Wir freuen uns auf dich!</p>
          <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/aufnahmeantrag" className="btn btn-primary">Mitglied werden</Link>
            <Link href="/kontakt" className="btn btn-ghost">Kontakt aufnehmen</Link>
          </div>
        </div>
      </section>

    </Layout>
  )
}
