import PageHero from '../components/ui/PageHero';
import { NATURAL_VS_OTHER } from '../data/content';
import { BRAND } from '../assets';

export default function NaturalVsOtherPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="The Water"
        title="Natural vs. Other"
        subtitle={`Why ${BRAND.fullName} stands apart from purified and treated waters.`}
      />
      <section className="page-section section">
        <div className="section-inner compare-grid">
          {NATURAL_VS_OTHER.map((col) => (
            <article key={col.title} className={`compare-card${col.highlight ? ' compare-card--highlight' : ''}`}>
              <h3>{col.title}</h3>
              <ul>
                {col.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
