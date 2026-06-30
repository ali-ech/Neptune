import PageHero from '../components/ui/PageHero';
import { DELIVERY_POLICY, PRIVACY_POLICY, TERMS_OF_USE } from '../data/content';

function PolicyLayout({ title, content }: { title: string; content: string }) {
  return (
    <main className="inner-page">
      <PageHero title={title} />
      <section className="page-section section">
        <div className="section-inner prose"><p>{content}</p></div>
      </section>
    </main>
  );
}

export function DeliveryPolicyPage() {
  return <PolicyLayout title="Delivery Policy" content={DELIVERY_POLICY} />;
}

export function PrivacyPolicyPage() {
  return <PolicyLayout title="Privacy Policy" content={PRIVACY_POLICY} />;
}

export function TermsOfUsePage() {
  return <PolicyLayout title="Terms of Use" content={TERMS_OF_USE} />;
}
