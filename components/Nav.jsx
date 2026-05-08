import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { img } from '../lib/img'

export default function Nav() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/', label: 'Start', match: 'index.html' },
    { href: '/judo', label: 'Judo', match: 'judo.html' },
    { href: '/jiujitsu', label: 'Jiu-Jitsu', match: 'jiujitsu.html' },
    { href: '/trainingszeiten', label: 'Trainingszeiten', match: 'trainingszeiten.html' },
    { href: '/trainer', label: 'Trainer', match: 'trainer.html' },
    { href: '/vorstand', label: 'Vorstand', match: 'vorstand.html' },
    { href: '/galerie', label: 'Galerie', match: 'galerie.html' },
    { href: '/kontakt', label: 'Kontakt', match: 'kontakt.html' },
  ]

  return (
    <nav>
      <Link href="/" className="nav-brand">
        <div className="nav-logo"><img src={img('/images/logo.png')} alt="Kodokan Olsberg" /></div>
        <div className="nav-name">Kodokan <small>Olsberg</small></div>
      </Link>
      <button
        className={`nav-burger${open ? ' open' : ''}`}
        aria-label="Menü"
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(({ href, label, match }) => (
          <li key={href}>
            <Link
              href={href}
              className={router.pathname === href || router.pathname === '/' && href === '/' ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
