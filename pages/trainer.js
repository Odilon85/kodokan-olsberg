import Layout from '../components/Layout'
import Image from 'next/image'

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

const BELT_COLORS = { braun: '#7B4F2E', gruen: '#2e7d32', blau: '#1565c0', 'orange-gruen': 'linear-gradient(90deg, #e65100 50%, #2e7d32 50%)' }

function BeltBadge({ color, label }) {
  return (
    <div className="dan-badge">
      <span style={{ width: 10, height: 10, borderRadius: 2, background: BELT_COLORS[color], flexShrink: 0, display: 'inline-block' }} />
      {label}
    </div>
  )
}

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
)

function TeamCard({ photo, alt, name, role, badge, schedule, description }) {
  return (
    <div className="team-card">
      <div className="team-photo">
        {photo
          ? <Image src={photo} alt={alt} fill sizes="(max-width: 860px) 100vw, 33vw" />
          : <PersonIcon />
        }
      </div>
      <div className="team-card-body">
        <div className="team-name">{name}</div>
        <div className="team-role">{role}</div>
        {badge}
        <div className="team-belt">{schedule}</div>
        <p style={{color:'var(--text-muted)',fontSize:'.82rem',marginTop:'.75rem',lineHeight:'1.6'}}>{description}</p>
      </div>
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

      <div className="trainer-group-photo">
        <Image src="/images/trainer-gruppe.jpg" alt="Haupttrainer Kodokan Olsberg" width={1200} height={800} sizes="(max-width: 900px) 100vw, 900px" priority style={{width:'100%',height:'auto',display:'block'}} />
      </div>
      <div className="trainer-group-caption">
        <div className="trainer-group-caption-names">Tia · Tobias · Jamie · Nico</div>
        <div className="trainer-group-caption-label">Die Haupttrainer des Kodokan Olsberg</div>
      </div>

      <section className="section">
        <div className="container">
          <p className="section-lead">Unser Trainerteam besteht aus lizenzierten Übungsleitern des Deutschen Judo-Bundes (DJB). Jeder Trainer bringt seine eigene Erfahrung und Spezialisierung mit – gemeinsam sorgen wir für ein professionelles und abwechslungsreiches Training.</p>

          {/* JUDO TRAINER */}
          <div className="section-tag mt-2">Judo</div>
          <h2 className="section-title mb-2">Judo-Trainer</h2>
          <div className="grid-3">
            <TeamCard
              photo="/images/trainer-tia.jpg" alt="Tia den Ridder"
              name="Tia den Ridder" role="Trainerin Judo"
              badge={<DanBadge dan={2} />}
              schedule="Do: Kinder & Jugend · Fr: Leistung, Wettkampf & Kata"
              description="Leitet donnerstags das Kinder- und Jugendtraining sowie freitags Leistungsgruppe, Wettkampf und Kata."
            />
            <TeamCard
              photo="/images/trainer-nico.jpg" alt="Nico Berkenkopf"
              name="Nico Berkenkopf" role="Trainer Judo"
              badge={<DanBadge dan={1} />}
              schedule="Dienstag: Jugend & Erwachsene"
              description="Leitet das Jugendtraining gemeinsam mit Jamie sowie das Erwachsenentraining dienstags."
            />
            <TeamCard
              photo="/images/trainer-tobias.jpg" alt="Tobias Klappert"
              name="Tobias Klappert" role="Trainer Judo"
              badge={<DanBadge dan={3} />}
              schedule="Do: Kinder, Jugend & Senioren · Fr: Leistung & Wettkampf"
              description="Leitet donnerstags das Kinder-, Jugend- und Seniorentraining sowie freitags Leistungsgruppe und Wettkampf."
            />
            <TeamCard
              photo="/images/trainer-jamie.jpg" alt="Jamie den Ridder"
              name="Jamie den Ridder" role="Trainer Judo"
              badge={<DanBadge dan={2} />}
              schedule="Mo: Kraft & Ausdauer · Di: Jugendtraining"
              description="Leitet das Kraft- und Ausdauertraining montags sowie das Jugendtraining dienstags."
            />
            <TeamCard
              photo="/images/trainer-albert.jpg" alt="Albert Smajli"
              name="Albert Smajli" role="Assistenztrainer Judo"
              badge={<BeltBadge color="braun" label="Braun" />}
              schedule="Donnerstag: Kindertraining"
              description="Unterstützt das Kindertraining donnerstags."
            />
            <TeamCard
              photo="/images/trainer-jule.jpg" alt="Jule Dittrich"
              name="Jule Dittrich" role="Assistenztrainerin Judo"
              badge={<BeltBadge color="blau" label="Blau" />}
              schedule="Donnerstag: Kindertraining"
              description="Unterstützt das Kindertraining donnerstags."
            />
            <TeamCard
              photo="/images/trainer-ricardo.jpg" alt="Ricardo Lakatos"
              name="Ricardo Lakatos" role="Assistenztrainer Judo"
              badge={<BeltBadge color="blau" label="Blau" />}
              schedule="Dienstag: Jugendtraining"
              description="Unterstützt das Jugendtraining dienstags."
            />
            <TeamCard
              photo="/images/trainer-felix.jpg" alt="Felix Stappert"
              name="Felix Stappert" role="Assistenztrainer Judo"
              badge={<BeltBadge color="blau" label="Blau" />}
              schedule="Donnerstag: Kindertraining"
              description="Unterstützt das Kindertraining donnerstags."
            />
            <TeamCard
              photo="/images/trainer-sebastian.jpg" alt="Sebastian Zahm"
              name="Sebastian Zahm" role="Assistenztrainer Judo"
              badge={<BeltBadge color="orange-gruen" label="Orange-Grün" />}
              schedule="Donnerstag: Kinder & Jugend"
              description="Unterstützt das Kinder- und Jugendtraining donnerstags."
            />
          </div>

          <div className="divider mt-3"></div>

          {/* JIU-JITSU TRAINER */}
          <div className="section-tag mt-2">Jiu-Jitsu</div>
          <h2 className="section-title mb-2">Jiu-Jitsu-Trainer</h2>
          <div className="grid-3">
            <TeamCard
              photo="/images/trainer-dirk.jpg" alt="Dirk Jung"
              name="Dirk Jung" role="Trainer Jiu-Jitsu"
              schedule="Dienstag: 19:30 – 21:00"
              description="Leitet das Jiu-Jitsu-Training dienstags für alle Altersgruppen und Leistungsstufen."
            />
            <TeamCard
              name="Carsten" role="Trainer Jiu-Jitsu"
              schedule="Donnerstag: 19:30 – 21:00"
              description="Leitet gemeinsam mit Frank das Jiu-Jitsu-Training donnerstags für alle Altersgruppen."
            />
            <TeamCard
              name="Frank" role="Trainer Jiu-Jitsu"
              schedule="Donnerstag: 19:30 – 21:00"
              description="Leitet gemeinsam mit Carsten das Jiu-Jitsu-Training donnerstags für alle Altersgruppen."
            />
          </div>
        </div>
      </section>

    </Layout>
  )
}
