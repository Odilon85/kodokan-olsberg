import Layout from '../components/Layout'
import { img } from '../lib/img'

export default function Galerie() {
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

          <div className="section-tag">Training</div>
          <h2 className="section-title mb-2">Trainingseindrücke</h2>
          <div className="gallery-grid">
            <div className="gallery-item"><img src={img('/images/Training-1.jpg')} alt="Training" /></div>
            <div className="gallery-item"><img src={img('/images/Training-2.jpg')} alt="Training" /></div>
            <div className="gallery-item"><img src={img('/images/Training-3.jpg')} alt="Training" /></div>
            <div className="gallery-item"><img src={img('/images/Training-4.jpg')} alt="Training" /></div>
          </div>

          <div className="divider mt-3"></div>

          <div className="section-tag mt-2">Wettkämpfe</div>
          <h2 className="section-title mb-2">Wettkampfergebnisse</h2>
          <div className="gallery-grid">
            <div className="gallery-item"><img src={img('/images/Erfolge-1.jpg')} alt="Erfolge" /></div>
            <div className="gallery-item"><img src={img('/images/Erfolge-2.jpg')} alt="Erfolge" /></div>
            <div className="gallery-item"><img src={img('/images/Erfolge-3.jpg')} alt="Erfolge" /></div>
            <div className="gallery-item"><img src={img('/images/Wettkampf-1.jpg')} alt="Wettkampf" /></div>
            <div className="gallery-item"><img src={img('/images/Wettkampf-2.jpg')} alt="Wettkampf" /></div>
            <div className="gallery-item"><img src={img('/images/Wettkampf-3.jpg')} alt="Wettkampf" /></div>
            <div className="gallery-item"><img src={img('/images/Wettkampf-4.jpg')} alt="Wettkampf" /></div>
            <div className="gallery-item"><img src={img('/images/Wettkampf-5.jpg')} alt="Wettkampf" /></div>
            <div className="gallery-item"><img src={img('/images/Wettkampf-6.jpg')} alt="Wettkampf" /></div>
            <div className="gallery-item"><img src={img('/images/Wettkampf-7.jpg')} alt="Wettkampf" /></div>
          </div>

          <div className="divider mt-3"></div>

          <div className="section-tag mt-2">Vereinsleben</div>
          <h2 className="section-title mb-2">Gemeinschaft &amp; Events</h2>
          <div className="gallery-grid">
            <div className="gallery-item"><img src={img('/images/Freizeit-1.jpg')} alt="Vereinsleben" /></div>
            <div className="gallery-item"><img src={img('/images/Freizeit-2.jpg')} alt="Vereinsleben" /></div>
            <div className="gallery-item"><img src={img('/images/Freizeit-3.jpg')} alt="Vereinsleben" /></div>
            <div className="gallery-item"><img src={img('/images/Freizeit-4.jpg')} alt="Vereinsleben" /></div>
            <div className="gallery-item"><img src={img('/images/Freizeit-5.jpg')} alt="Vereinsleben" /></div>
          </div>

        </div>
      </section>

    </Layout>
  )
}
