import { useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.target
    const data = {
      fname: form.fname.value,
      lname: form.lname.value,
      email: form.email.value,
      subject: form.subject.value,
      msg: form.msg.value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Es ist ein Fehler aufgetreten. Bitte schreibe uns direkt an info@kodokan-olsberg.de')
      }
    } catch {
      setError('Es ist ein Fehler aufgetreten. Bitte schreibe uns direkt an info@kodokan-olsberg.de')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout title="Kontakt" description="Kontakt zum Judoverein Kodokan Olsberg – Adresse, E-Mail und Kontaktformular.">

      <div className="page-header">
        <div className="container">
          <div>
            <div className="section-tag">Kontakt</div>
            <h1>Kontakt aufnehmen</h1>
            <p>Fragen? Wir antworten schnell und unkompliziert.</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">

            {/* KONTAKTDATEN */}
            <div>
              <div className="section-tag">Direktkontakt</div>
              <h2 className="section-title">So erreichst du uns</h2>
              <div className="contact-block mt-2">
                <div className="contact-row">
                  <div className="contact-ico">📍</div>
                  <div>
                    <strong>Vereinssitz</strong>
                    <p>
                      Judoverein Kodokan Olsberg e.V.<br />
                      Zum Krähenbrink 38<br />
                      59757 Arnsberg
                    </p>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-ico">🥋</div>
                  <div>
                    <strong>Trainingsstätte</strong>
                    <p>
                      Turnhalle der städtischen Real- und Sekundarschule Olsberg<br />
                      Bahnhofstraße 59<br />
                      59939 Olsberg
                    </p>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-ico">📧</div>
                  <div>
                    <strong>E-Mail</strong>
                    <a href="mailto:info@kodokan-olsberg.de">info@kodokan-olsberg.de</a>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-ico">🥋</div>
                  <div>
                    <strong>Probetraining</strong>
                    <p>Einfach zum Training vorbeikommen – keine Anmeldung nötig! Sportkleidung mitbringen.</p>
                  </div>
                </div>
              </div>

              {/* GOOGLE MAPS */}
              <div style={{marginTop:'2rem',borderRadius:'10px',overflow:'hidden',border:'1px solid var(--border)'}}>
                <iframe
                  src="https://maps.google.com/maps?q=Bahnhofstra%C3%9Fe+59%2C+59939+Olsberg&output=embed&hl=de"
                  width="100%"
                  height="280"
                  style={{border:0,display:'block'}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Trainingsstätte Kodokan Olsberg">
                </iframe>
              </div>
            </div>

            {/* KONTAKTFORMULAR */}
            <div>
              <div className="section-tag">Formular</div>
              <h2 className="section-title">Nachricht schreiben</h2>
              <div className="form-card mt-2">
                {submitted ? (
                  <div className="alert alert-info">
                    <strong>Vielen Dank für deine Nachricht!</strong><br />
                    Wir melden uns so schnell wie möglich bei dir.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="fg">
                        <label htmlFor="fname">Vorname</label>
                        <input type="text" id="fname" name="fname" placeholder="Erika" required />
                      </div>
                      <div className="fg">
                        <label htmlFor="lname">Nachname</label>
                        <input type="text" id="lname" name="lname" placeholder="Mustermann" required />
                      </div>
                    </div>
                    <div className="fg">
                      <label htmlFor="email">E-Mail</label>
                      <input type="email" id="email" name="email" placeholder="erika@beispiel.de" required />
                    </div>
                    <div className="fg">
                      <label htmlFor="subject">Betreff</label>
                      <select id="subject" name="subject">
                        <option value="">Bitte wählen ...</option>
                        <option>Probetraining Judo</option>
                        <option>Probetraining Jiu-Jitsu</option>
                        <option>Mitgliedschaft</option>
                        <option>Trainingszeiten</option>
                        <option>Wettkämpfe / Lehrgänge</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>
                    <div className="fg">
                      <label htmlFor="msg">Nachricht</label>
                      <textarea id="msg" name="msg" placeholder="Deine Nachricht ..." required></textarea>
                    </div>
                    <div style={{marginBottom:'.9rem'}}>
                      <div className="form-check">
                        <input type="checkbox" id="privacy" name="privacy" required />
                        <label htmlFor="privacy">Ich habe die <Link href="/datenschutz">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.</label>
                      </div>
                    </div>
                    {error && <p style={{color:'red',marginBottom:'.75rem'}}>{error}</p>}
                    <button type="submit" className="btn btn-primary" style={{width:'100%'}} disabled={loading}>
                      {loading ? 'Wird gesendet ...' : 'Nachricht senden'}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  )
}
