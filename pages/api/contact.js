import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { fname, lname, email, subject, msg } = req.body

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
      replyTo: email,
      subject: `Kontaktanfrage: ${subject || 'Allgemein'} – ${fname} ${lname}`,
      text: `Name: ${fname} ${lname}\nE-Mail: ${email}\nBetreff: ${subject}\n\n${msg}`,
    })
    res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Fehler beim Senden.' })
  }
}
