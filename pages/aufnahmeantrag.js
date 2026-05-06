import { useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const STATIC = process.env.NEXT_PUBLIC_STATIC === 'true'

export default function Aufnahmeantrag() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.target
    const data = {
      vorname: form.vorname.value,
      nachname: form.nachname.value,
      geburtsdatum: form.geburtsdatum.value,
      geschlecht: form.geschlecht.value,
      strasse: form.strasse.value,
      plz: form.plz.value,
      ort: form.ort.value,
      email: form.email.value,
      telefon: form.telefon.value,
      sportart: form.sportart.value,
      erfahrung: form.erfahrung.value,
      grad: form.grad.value,
      eb_name: form.eb_name.value,
      eb_tel: form.eb_tel.value,
      kontoinhaber: form.kontoinhaber.value,
      iban: form.iban.value,
      bic: form.bic.value,
      bank: form.bank.value,
      anmerkung: form.anmerkung.value,
    }

    try {
      const res = await fetch('/api/aufnahme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.')
      }
    } catch {
      setError('Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout title="Aufnahmeantrag" description="Mitglied werden beim Judoverein Kodokan Olsberg – Aufnahmeantrag online ausfüllen.">

      <div className="page-header" style={{textAlign:'center'}}>
        <div className="container" style={{display:'block'}}>
          <div className="section-tag">Mitmachen</div>
          <h1>Aufnahmeantrag</h1>
          <p>Ob erste Schritte auf der Matte oder gezieltes Wettkampftraining – bei uns entwickelst du dich mit erfahrenen Trainern und einer starken Gemeinschaft weiter. Du machst den richtigen Schritt.</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{maxWidth:'720px'}}>

          {STATIC ? (
            <div className="alert alert-info mb-2">
              <strong>Online-Anmeldung</strong><br />
              Schreibe uns eine E-Mail an <a href="mailto:info@kodokan-olsberg.de" style={{fontWeight:'600'}}>info@kodokan-olsberg.de</a> – wir senden dir dann den Aufnahmeantrag zu.
            </div>
          ) : submitted ? (
            <div className="alert alert-info mb-2">
              <strong>Vielen Dank für deinen Aufnahmeantrag!</strong><br />
              Wir haben deine Daten erhalten und melden uns per E-Mail bei dir. Die Mitgliedschaft wird nach Prüfung durch den Vorstand bestätigt.
            </div>
          ) : (
            <>
              <div className="alert alert-info mb-2">
                Alle mit <strong>*</strong> markierten Felder sind Pflichtfelder. Nach dem Absenden melden wir uns per E-Mail bei dir.
              </div>

              <div className="form-card">
                <form onSubmit={handleSubmit}>

                  <h3 style={{fontSize:'1rem',textTransform:'uppercase',letterSpacing:'1px',color:'var(--text-muted)',marginBottom:'1.25rem'}}>Persönliche Daten</h3>
                  <div className="form-row">
                    <div className="fg">
                      <label htmlFor="a-vorname">Vorname *</label>
                      <input type="text" id="a-vorname" name="vorname" required />
                    </div>
                    <div className="fg">
                      <label htmlFor="a-nachname">Nachname *</label>
                      <input type="text" id="a-nachname" name="nachname" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="fg">
                      <label htmlFor="a-geb">Geburtsdatum *</label>
                      <input type="date" id="a-geb" name="geburtsdatum" required />
                    </div>
                    <div className="fg">
                      <label htmlFor="a-geschlecht">Geschlecht</label>
                      <select id="a-geschlecht" name="geschlecht">
                        <option value="">Bitte wählen</option>
                        <option>Männlich</option>
                        <option>Weiblich</option>
                        <option>Divers</option>
                      </select>
                    </div>
                  </div>

                  <div className="divider"></div>
                  <h3 style={{fontSize:'1rem',textTransform:'uppercase',letterSpacing:'1px',color:'var(--text-muted)',marginBottom:'1.25rem'}}>Kontaktdaten</h3>
                  <div className="fg">
                    <label htmlFor="a-strasse">Straße &amp; Hausnummer *</label>
                    <input type="text" id="a-strasse" name="strasse" required />
                  </div>
                  <div className="form-row">
                    <div className="fg">
                      <label htmlFor="a-plz">PLZ *</label>
                      <input type="text" id="a-plz" name="plz" maxLength="5" pattern="[0-9]{5}" required />
                    </div>
                    <div className="fg">
                      <label htmlFor="a-ort">Ort *</label>
                      <input type="text" id="a-ort" name="ort" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="fg">
                      <label htmlFor="a-email">E-Mail *</label>
                      <input type="email" id="a-email" name="email" required />
                    </div>
                    <div className="fg">
                      <label htmlFor="a-tel">Telefon</label>
                      <input type="tel" id="a-tel" name="telefon" />
                    </div>
                  </div>

                  <div className="divider"></div>
                  <h3 style={{fontSize:'1rem',textTransform:'uppercase',letterSpacing:'1px',color:'var(--text-muted)',marginBottom:'1.25rem'}}>Sportart &amp; Gruppe</h3>
                  <div className="fg">
                    <label htmlFor="a-sportart">Gewünschte Sportart *</label>
                    <select id="a-sportart" name="sportart" required>
                      <option value="">Bitte wählen ...</option>
                      <option>Judo</option>
                      <option>Jiu-Jitsu</option>
                      <option>Judo und Jiu-Jitsu</option>
                    </select>
                  </div>
                  <div className="fg">
                    <label htmlFor="a-erfahrung">Kampfsporterfahrung</label>
                    <select id="a-erfahrung" name="erfahrung">
                      <option value="">Bitte wählen ...</option>
                      <option>Keine – kompletter Einsteiger</option>
                      <option>Etwas Erfahrung (unter 1 Jahr)</option>
                      <option>1–3 Jahre Erfahrung</option>
                      <option>Mehr als 3 Jahre Erfahrung</option>
                    </select>
                  </div>
                  <div className="fg">
                    <label htmlFor="a-grad">Aktueller Gürtelgrad (falls vorhanden)</label>
                    <input type="text" id="a-grad" name="grad" placeholder="z.B. Weißgurt, 4. Kyu, 1. Dan ..." />
                  </div>

                  {/* Bei Minderjährigen */}
                  <div className="divider"></div>
                  <h3 style={{fontSize:'1rem',textTransform:'uppercase',letterSpacing:'1px',color:'var(--text-muted)',marginBottom:'.5rem'}}>Erziehungsberechtigte</h3>
                  <p style={{color:'var(--text-muted)',fontSize:'.85rem',marginBottom:'1.25rem'}}>Nur bei Minderjährigen (unter 18 Jahren) ausfüllen.</p>
                  <div className="form-row">
                    <div className="fg">
                      <label htmlFor="a-eb-name">Name des Erziehungsberechtigten</label>
                      <input type="text" id="a-eb-name" name="eb_name" />
                    </div>
                    <div className="fg">
                      <label htmlFor="a-eb-tel">Telefon</label>
                      <input type="tel" id="a-eb-tel" name="eb_tel" />
                    </div>
                  </div>

                  <div className="divider"></div>
                  <div className="alert alert-info">
                    Der Mitgliedsbeitrag richtet sich nach der <Link href="/satzung#beitragsordnung">Beitragsordnung des Kodokan Olsberg e.V.</Link> (Stand: 21. März 2021). Der Beitrag wird jährlich per SEPA-Lastschrift eingezogen.
                  </div>

                  <h3 style={{fontSize:'1rem',textTransform:'uppercase',letterSpacing:'1px',color:'var(--text-muted)',marginBottom:'.5rem',marginTop:'1.25rem'}}>Bankverbindung</h3>
                  <p style={{color:'var(--text-muted)',fontSize:'.85rem',marginBottom:'1.25rem'}}>Für den Einzug des Mitgliedsbeitrags per SEPA-Lastschrift.</p>
                  <div className="fg">
                    <label htmlFor="a-kontoinhaber">Kontoinhaber *</label>
                    <input type="text" id="a-kontoinhaber" name="kontoinhaber" required />
                  </div>
                  <div className="fg">
                    <label htmlFor="a-iban">IBAN *</label>
                    <input type="text" id="a-iban" name="iban" placeholder="DE00 0000 0000 0000 0000 00" required />
                  </div>
                  <div className="form-row">
                    <div className="fg">
                      <label htmlFor="a-bic">BIC</label>
                      <input type="text" id="a-bic" name="bic" placeholder="z.B. WELADED1OLS" />
                    </div>
                    <div className="fg">
                      <label htmlFor="a-bank">Kreditinstitut</label>
                      <input type="text" id="a-bank" name="bank" placeholder="z.B. Sparkasse Hochsauerland" />
                    </div>
                  </div>
                  <div style={{marginBottom:'.9rem'}}>
                    <div className="form-check">
                      <input type="checkbox" id="a-sepa" name="sepa" required />
                      <label htmlFor="a-sepa">Ich erteile dem Judoverein Kodokan Olsberg e.V. ein SEPA-Lastschriftmandat zum Einzug des Mitgliedsbeitrags. *</label>
                    </div>
                  </div>

                  <div className="divider"></div>
                  <h3 style={{fontSize:'1rem',textTransform:'uppercase',letterSpacing:'1px',color:'var(--text-muted)',marginBottom:'1.25rem'}}>Einwilligungen</h3>
                  <div style={{marginBottom:'.9rem'}}>
                    <div className="form-check">
                      <input type="checkbox" id="a-satzung" name="satzung" required />
                      <label htmlFor="a-satzung">Ich erkenne die <Link href="/satzung">Vereinssatzung</Link> des Judovereins Kodokan Olsberg e.V. an. *</label>
                    </div>
                  </div>
                  <div style={{marginBottom:'.9rem'}}>
                    <div className="form-check">
                      <input type="checkbox" id="a-dsgvo" name="dsgvo" required />
                      <label htmlFor="a-dsgvo">Ich habe die <Link href="/datenschutz">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Daten gemäß DSGVO zu. *</label>
                    </div>
                  </div>
                  <div className="fg">
                    <label htmlFor="a-anmerkung">Anmerkungen / Besonderheiten (optional)</label>
                    <textarea id="a-anmerkung" name="anmerkung" placeholder="z.B. Verletzungen, Allergien, Fragen ..."></textarea>
                  </div>

                  {error && <p style={{color:'red',marginBottom:'.75rem',textAlign:'center'}}>{error}</p>}
                  <div style={{textAlign:'center',marginTop:'.5rem'}}>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? 'Wird gesendet ...' : 'Aufnahmeantrag absenden'}
                    </button>
                  </div>
                </form>
              </div>

              <p className="text-muted mt-2" style={{fontSize:'.82rem',textAlign:'center'}}>
                Die Mitgliedschaft wird nach Prüfung durch den Vorstand bestätigt.
              </p>
            </>
          )}

        </div>
      </section>

    </Layout>
  )
}
