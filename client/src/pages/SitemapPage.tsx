import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { NAV_LINKS } from '../data/content';

const WATER_PAGES = [
  { label: 'Origins & Source', path: '/origins-source' },
  { label: 'Composition', path: '/composition' },
  { label: 'Natural vs. Other', path: '/natural-vs-other' },
  { label: 'Quality', path: '/quality' },
];

export default function SitemapPage() {
  return (
    <main className="inner-page">
      <PageHero title="Sitemap" subtitle="All pages on this website." />
      <section className="page-section section">
        <div className="section-inner sitemap-grid">
          <div>
            <h3>Main</h3>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>The Water</h3>
            <ul>
              {WATER_PAGES.map((l) => (
                <li key={l.path}><Link to={l.path}>{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link to="/delivery-policy">Delivery Policy</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
