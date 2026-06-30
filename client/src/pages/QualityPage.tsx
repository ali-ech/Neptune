import PageHero from '../components/ui/PageHero';
import { QUALITY_POINTS } from '../data/content';

export default function QualityPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Quality"
        title="Our Quality Promise"
        subtitle="Rigorous standards at every stage — from protected source to your door."
      />
      <section className="page-section section">
        <div className="section-inner feature-grid">
          {QUALITY_POINTS.map((q) => (
            <article key={q.title} className="feature-card">
              <h3>{q.title}</h3>
              <p>{q.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
