import PageHero from '../components/ui/PageHero';
import { ORIGINS_CONTENT } from '../data/content';

export default function OriginsSourcePage() {
  return (
    <main className="inner-page">
      <PageHero
        eyebrow="The Water"
        title="Origins & Source"
        subtitle="From crystalline peaks to pristine aquifers — the journey of Neptune Natural Mineral Water."
      />
      <section className="page-section section">
        <div className="section-inner prose">
          <p>{ORIGINS_CONTENT.intro}</p>
          <p>{ORIGINS_CONTENT.journey}</p>
          <p>{ORIGINS_CONTENT.source}</p>
        </div>
      </section>
    </main>
  );
}
