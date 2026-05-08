import { useState, useEffect } from 'react'
import Link from 'next/link'

const SESSIONS = [
  { day: 1, h: 18, m: 0,  name: 'Kraft / Ausdauer',    info: 'ab 7 Jahre',             href: '/judo' },
  { day: 2, h: 18, m: 0,  name: 'Jugendtraining',       info: '6–11 Jahre',             href: '/judo' },
  { day: 2, h: 19, m: 30, name: 'Erwachsenentraining',  info: 'ab 15 Jahre',            href: '/judo' },
  { day: 2, h: 19, m: 30, name: 'Jiu-Jitsu',            info: 'alle Altersgruppen',     href: '/jiujitsu' },
  { day: 4, h: 16, m: 30, name: 'Kindertraining',        info: 'ab 4 Jahre',             href: '/judo' },
  { day: 4, h: 17, m: 45, name: 'Jugendtraining',        info: 'ab Orange Gurt',         href: '/judo' },
  { day: 4, h: 19, m: 30, name: 'Erwachsenentraining',  info: 'ab 15 Jahre',            href: '/judo' },
  { day: 4, h: 19, m: 30, name: 'Jiu-Jitsu',            info: 'alle Altersgruppen',     href: '/jiujitsu' },
  { day: 5, h: 17, m: 0,  name: 'Leistungsgruppe',      info: 'ausgewählte Teilnehmer', href: '/judo' },
  { day: 5, h: 18, m: 0,  name: 'Wettkampftraining',    info: 'ab Gelb Gurt',           href: '/judo' },
  { day: 5, h: 19, m: 30, name: 'Kata / Spiel & Spaß', info: 'Wochenwechsel',          href: '/judo' },
]

const DAY_NAMES = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag']

export default function NextTraining() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    const now = new Date()
    const today = now.getDay()
    const nowMin = now.getHours() * 60 + now.getMinutes()

    const sorted = SESSIONS.map(s => {
      let diff = (s.day - today + 7) % 7
      if (diff === 0 && s.h * 60 + s.m <= nowMin) diff = 7
      return { ...s, diff }
    }).sort((a, b) => a.diff - b.diff || (a.h * 60 + a.m) - (b.h * 60 + b.m))

    setSessions(sorted.slice(0, 2))
  }, [])

  if (!sessions.length) return null

  function dayLabel(s) {
    if (s.diff === 0) return 'Heute'
    if (s.diff === 1) return 'Morgen'
    return DAY_NAMES[s.day]
  }

  function time(s) {
    return `${String(s.h).padStart(2,'0')}:${String(s.m).padStart(2,'0')}`
  }

  return (
    <div className="next-training">
      <span className="next-training-label">Nächste Einheiten</span>
      <div className="next-training-list">
        {sessions.map((s, i) => (
          <div key={i} className="next-training-item">
            <span className="next-training-when">{dayLabel(s)}, {time(s)} Uhr</span>
            <span className="next-training-name">{s.name}</span>
            <span className="next-training-info">{s.info}</span>
            <Link href={s.href} className="next-training-link">Details →</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
