import { BRAND } from '../../assets';

export default function VisionMission() {
  return (
    <section className="mission-section section solid-light" id="vision">
      <div className="mission-content section-inner">
        <p className="section-eyebrow">Our Mission</p>
        <h2 className="section-heading">Our Vision to Mission</h2>
        <p className="mission-text">
          To be the most trusted and admired premium water brand, a symbol of purity, wellness, and refinement
          in every home, event, and establishment across Pakistan. We envision a future where every sip of
          {` ${BRAND.fullName} `}reflects sophistication, sustainability, and the art of living well.
        </p>
        <p className="mission-text">
          From responsible sourcing to premium presentation, every step embodies our dedication to quality,
          sustainability, and excellence. We aim to inspire a lifestyle that values purity, wellness, and
          the subtle art of living well — because quality is not created; it&apos;s cultivated.
        </p>
      </div>
    </section>
  );
}
