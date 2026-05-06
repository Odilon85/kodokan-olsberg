import Layout from '../components/Layout'
import { img } from '../lib/img'

function DanBadge({ dan }) {
  return (
    <div className="dan-badge">
      {dan}. Dan
      <span className="dan-pips">
        {Array.from({ length: dan }).map((_, i) => <span key={i} className="dan-pip" />)}
      </span>
    </div>
  )
}

const BELT_COLORS = { braun: '#7B4F2E', gruen: '#2e7d32' }

function BeltBadge({ color, label }) {
  return (
    <div className="dan-badge">
      <span style={{ width: 10, height: 10, borderRadius: 2, background: BELT_COLORS[color], flexShrink: 0, display: 'inline-block' }} />
      {label}
    </div>
  )
}

export default function Trainer() {
  return (
    <Layout title="Trainer" description="Unsere lizenzierten Trainer beim Judoverein Kodokan Olsberg.">

      <div className="page-header">
        <div className="container">
          <div>
            <div className="section-tag">Team</div>
            <h1>Unsere Trainer</h1>
            <p>Lizenzierte Übungsleiter mit Leidenschaft für den Kampfsport</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="section-lead">Unser Trainerteam besteht aus lizenzierten Übungsleitern des Deutschen Judo-Bundes (DJB). Jeder Trainer bringt seine eigene Erfahrung und Spezialisierung mit – gemeinsam sorgen wir für ein professionelles und abwechslungsreiches Training.</p>

          {/* JUDO TRAINER */}
          <div className="section-tag mt-2">Judo</div>
          <h2 className="section-title mb-2">Judo-Trainer</h2>
          <div className="grid-3">
            <div className="team-card">
              <div className="avatar" style={{background:'none',width:'80px',height:'80px',borderRadius:'50%',overflow:'hidden'}}>
                <img src={img('/images/trainer-tia.jpg')} alt="Tia den Ridder" style={{width:'80px',height:'80px',objectFit:'cover'}} />
              </div>
              <div className="team-name">Tia den Ridder</div>
              <div className="team-role">Trainerin Judo</div>
              <DanBadge dan={2} />
              <div className="team-belt">Freitag: Wettkampf &amp; Kata</div>
              <p style={{color:'var(--text-muted)',fontSize:'.82rem',marginTop:'.75rem',lineHeight:'1.6'}}>Trainiert Wettkampf- und Kata-Gruppen sowie die Kinder- und Leistungsgruppe.</p>
            </div>
            <div className="team-card">
              <div className="avatar" style={{background:'none',width:'80px',height:'80px',borderRadius:'50%',overflow:'hidden'}}>
                <img src={img('/images/trainer-nico.jpg')} alt="Nico Berkenkopf" style={{width:'80px',height:'80px',objectFit:'cover'}} />
              </div>
              <div className="team-name">Nico Berkenkopf</div>
              <div className="team-role">Trainer Judo</div>
              <DanBadge dan={1} />
              <div className="team-belt">Dienstag: Jugend &amp; Erwachsene</div>
              <p style={{color:'var(--text-muted)',fontSize:'.82rem',marginTop:'.75rem',lineHeight:'1.6'}}>Zuständig für die Jugendgruppe (6–11 J.) und das Erwachsenentraining dienstags.</p>
            </div>
            <div className="team-card">
              <div className="avatar" style={{background:'none',width:'80px',height:'80px',borderRadius:'50%',overflow:'hidden'}}>
                <img src={img('/images/trainer-tobias.jpg')} alt="Tobias Klappert" style={{width:'80px',height:'80px',objectFit:'cover'}} />
              </div>
              <div className="team-name">Tobias Klappert</div>
              <div className="team-role">Trainer Judo</div>
              <DanBadge dan={3} />
              <div className="team-belt">Do: Leistungsgruppe &amp; Erwachsene</div>
              <p style={{color:'var(--text-muted)',fontSize:'.82rem',marginTop:'.75rem',lineHeight:'1.6'}}>Leitet die Leistungsgruppe, das Erwachsenentraining donnerstags sowie die Wettkampfgruppe.</p>
            </div>
            <div className="team-card">
              <div className="avatar" style={{background:'none',width:'80px',height:'80px',borderRadius:'50%',overflow:'hidden'}}>
                <img src={img('/images/trainer-jamie.jpg')} alt="Jamie den Ridder" style={{width:'80px',height:'80px',objectFit:'cover'}} />
              </div>
              <div className="team-name">Jamie den Ridder</div>
              <div className="team-role">Trainer Judo</div>
              <DanBadge dan={2} />
              <div className="team-belt">Montag: Kraft &amp; Ausdauer</div>
              <p style={{color:'var(--text-muted)',fontSize:'.82rem',marginTop:'.75rem',lineHeight:'1.6'}}>Verantwortlich für das Kraft- und Ausdauertraining montags (ab 7 Jahre).</p>
            </div>
            <div className="team-card">
              <div className="avatar">👤</div>
              <div className="team-name">Albert Smajli</div>
              <div className="team-role">Trainer Judo</div>
              <BeltBadge color="braun" label="Braun" />
              <div className="team-belt">Donnerstag: Kindertraining</div>
              <p style={{color:'var(--text-muted)',fontSize:'.82rem',marginTop:'.75rem',lineHeight:'1.6'}}>Unterstützt das Kindertraining donnerstags.</p>
            </div>
            <div className="team-card">
              <div className="avatar">👤</div>
              <div className="team-name">Jule Dittrich</div>
              <div className="team-role">Trainerin Judo</div>
              <BeltBadge color="gruen" label="Grün" />
              <div className="team-belt">Donnerstag: Kindertraining</div>
              <p style={{color:'var(--text-muted)',fontSize:'.82rem',marginTop:'.75rem',lineHeight:'1.6'}}>Unterstützt das Kindertraining donnerstags.</p>
            </div>
          </div>

          <div className="divider mt-3"></div>

          {/* JIU-JITSU TRAINER */}
          <div className="section-tag mt-2">Jiu-Jitsu</div>
          <h2 className="section-title mb-2">Jiu-Jitsu-Trainer</h2>
          <div className="grid-4">
            <div className="team-card">
              <div className="avatar" style={{background:'none',width:'80px',height:'80px',borderRadius:'50%',overflow:'hidden'}}>
                <img src={img('/images/trainer-dirk.jpg')} alt="Dirk Jung" style={{width:'80px',height:'80px',objectFit:'cover'}} />
              </div>
              <div className="team-name">Dirk Jung</div>
              <div className="team-role">Trainer Jiu-Jitsu</div>
              <div className="team-belt">Dienstag: 19:30 – 21:00</div>
              <p style={{color:'var(--text-muted)',fontSize:'.82rem',marginTop:'.75rem',lineHeight:'1.6'}}>Leitet das Jiu-Jitsu-Training dienstags für alle Altersgruppen und Leistungsstufen.</p>
            </div>
            <div className="team-card">
              <div className="avatar">👤</div>
              <div className="team-name">Carsten</div>
              <div className="team-role">Trainer Jiu-Jitsu</div>
              <div className="team-belt">Donnerstag: 19:30 – 21:00</div>
              <p style={{color:'var(--text-muted)',fontSize:'.82rem',marginTop:'.75rem',lineHeight:'1.6'}}>Leitet gemeinsam mit Frank das Jiu-Jitsu-Training donnerstags für alle Altersgruppen.</p>
            </div>
            <div className="team-card">
              <div className="avatar">👤</div>
              <div className="team-name">Frank</div>
              <div className="team-role">Trainer Jiu-Jitsu</div>
              <div className="team-belt">Donnerstag: 19:30 – 21:00</div>
              <p style={{color:'var(--text-muted)',fontSize:'.82rem',marginTop:'.75rem',lineHeight:'1.6'}}>Leitet gemeinsam mit Carsten das Jiu-Jitsu-Training donnerstags für alle Altersgruppen.</p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
