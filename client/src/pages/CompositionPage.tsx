import PageHero from '../components/ui/PageHero';
import { COMPOSITION_CONTENT, MINERALS } from '../data/content';

export default function CompositionPage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="The Water"
        title="Composition"
        subtitle="A unique balance of minerals — naturally present, nothing added, nothing removed."
      />
      <section className="page-section section">
        <div className="section-inner prose">
          <p>{COMPOSITION_CONTENT.intro}</p>
          <p className="text-muted">{COMPOSITION_CONTENT.note}</p>
        </div>
        <div className="minerals-grid section-inner">
          {MINERALS.map((m) => (
            <article key={m.symbol} className="mineral-card">
              <span className="mineral-symbol">{m.symbol}</span>
              <h3>{m.name}</h3>
              <p className="mineral-value">{m.value}</p>
              <p>{m.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
