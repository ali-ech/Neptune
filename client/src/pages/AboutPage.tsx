import PageHero from '../components/ui/PageHero';
import { BRAND } from '../assets';

export default function AboutPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Our Story"
        title={`About ${BRAND.fullName}`}
        subtitle="Because true purity flows from nature."
      />
      <section className="page-section section">
        <div className="section-inner prose">
          <p>
            {BRAND.fullName} is more than premium bottled water — it is a symbol of purity, wellness, and refinement.
            Bottled with care and enriched with nature&apos;s minerals, every detail is crafted for those who see
            quality in every sip.
          </p>
          <p>
            From responsible sourcing to premium presentation, every step embodies our dedication to quality,
            sustainability, and the art of living well.
          </p>
        </div>
      </section>
      <section className="page-section section" id="why">
        <div className="section-inner">
          <h2 className="section-heading">Why Choose Us</h2>
          <div className="feature-grid">
            {[
              { title: 'Natural Purity', desc: 'Sourced from pristine natural springs with meticulous quality control.' },
              { title: 'Mineral Balance', desc: 'Naturally balanced composition for refined taste and wellness.' },
              { title: 'Premium Design', desc: 'Elegant bottles that elevate every table and occasion.' },
              { title: 'Trusted Brand', desc: 'Chosen by hotels, restaurants, and discerning households across Pakistan.' },
            ].map((f) => (
              <div key={f.title} className="feature-card">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
