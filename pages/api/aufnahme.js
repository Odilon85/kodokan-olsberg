import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const d = req.body

  const text = `AUFNAHMEANTRAG – Kodokan Olsberg e.V.
=====================================

PERSÖNLICHE DATEN
Vorname:        ${d.vorname}
Nachname:       ${d.nachname}
Geburtsdatum:   ${d.geburtsdatum}
Geschlecht:     ${d.geschlecht}

KONTAKTDATEN
Straße:         ${d.strasse}
PLZ / Ort:      ${d.plz} ${d.ort}
E-Mail:         ${d.email}
Telefon:        ${d.telefon}

SPORTART & GRUPPE
Sportart:       ${d.sportart}
Erfahrung:      ${d.erfahrung}
Gürtelgrad:     ${d.grad}

ERZIEHUNGSBERECHTIGTE (bei Minderjährigen)
Name:           ${d.eb_name}
Telefon:        ${d.eb_tel}

BANKVERBINDUNG
Kontoinhaber:   ${d.kontoinhaber}
IBAN:           ${d.iban}
BIC:            ${d.bic}
Kreditinstitut: ${d.bank}
SEPA-Mandat:    erteilt

EINWILLIGUNGEN
Satzung:        anerkannt
Datenschutz:    zugestimmt

ANMERKUNGEN
${d.anmerkung || '–'}`

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Kodokan Website" <${process.env.SMTP_USER}>`,
      to: 'info@kodokan-olsberg.de',
      replyTo: d.email,
      subject: `Aufnahmeantrag – ${d.vorname} ${d.nachname}`,
      text,
    })
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Fehler beim Senden.' })
  }
}
