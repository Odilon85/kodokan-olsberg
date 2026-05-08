import { useState } from 'react'
import Layout from '../components/Layout'
import { img } from '../lib/img'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

const SECTIONS = [
  {
    tag: 'Training', title: 'Trainingseindrücke',
    images: ['Training-1.jpg','Training-2.jpg','Training-3.jpg','Training-4.jpg','Training-5.jpg','Training-6.jpg','Training-7.jpg','Training-8.jpg','Training-9.jpg','Training-10.jpg','Training-11.jpg'],
    alt: 'Training',
  },
  {
    tag: 'Wettkämpfe', title: 'Wettkampfergebnisse',
    images: ['Erfolge-1.jpg','Erfolge-2.jpg','Erfolge-3.jpg','Erfolge-4.jpg','Erfolge-5.jpg','Erfolge-6.jpg','Erfolge-7.jpg','Erfolge-8.jpg','Erfolge-9.jpg','Erfolge-10.jpg','Erfolge-11.jpg','Erfolge-12.jpg','Erfolge-13.jpg','Erfolge-14.jpg','Wettkampf-1.jpg','Wettkampf-2.jpg','Wettkampf-3.jpg','Wettkampf-4.jpg','Wettkampf-5.jpg','Wettkampf-6.jpg','Wettkampf-7.jpg','Wettkampf-8.jpg','Wettkampf-9.jpg','Wettkampf-10.jpg'],
    alt: 'Wettkampf',
  },
  {
    tag: 'Vereinsleben', title: 'Gemeinschaft & Events',
    images: ['Freizeit-1.jpg','Freizeit-2.jpg','Freizeit-3.jpg','Freizeit-4.jpg','Freizeit-5.jpg','Freizeit-6.jpg','Freizeit-7.jpg','Freizeit-8.jpg','Freizeit-9.jpg','Freizeit-10.jpg','Freizeit-11.jpg','Freizeit-12.jpg','Freizeit-13.jpg','Freizeit-14.jpg','Freizeit-15.jpg'],
    alt: 'Vereinsleben',
  },
]

const allSlides = SECTIONS.flatMap(s => s.images.map(f => ({ src: img(`/images/${f}`) })))

export default function Galerie() {
  const [open, setOpen] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  function openAt(globalIndex) {
    setSlideIndex(globalIndex)
    setOpen(true)
  }

  let offset = 0
  return (
    <Layout title="Galerie" description="Bilder und Impressionen vom Training und den Wettkämpfen des Judovereins Kodokan Olsberg.">

      <div className="page-header">
        <div className="container">
          <div>
            <div className="section-tag">Bilder</div>
            <h1>Galerie</h1>
            <p>Impressionen aus unserem Vereinsleben – Training, Wettkämpfe und Veranstaltungen</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {SECTIONS.map((sec, si) => {
            const sectionOffset = offset
            offset += sec.images.length
            return (
              <div key={sec.tag}>
                {si > 0 && <div className="divider mt-3"></div>}
                <div className={si > 0 ? 'section-tag mt-2' : 'section-tag'}>{sec.tag}</div>
                <h2 className="section-title mb-2">{sec.title}</h2>
                <div className="gallery-grid">
                  {sec.images.map((file, i) => (
                    <div
                      key={file}
                      className="gallery-item"
                      onClick={() => openAt(sectionOffset + i)}
                      style={{cursor:'pointer'}}
                    >
                      <img src={img(`/images/${file}`)} alt={sec.alt} />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={slideIndex}
        slides={allSlides}
      />

    </Layout>
  )
}
