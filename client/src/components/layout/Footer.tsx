import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { BRAND } from '../../assets';
import { FOOTER_COLS } from '../../data/content';
import AnimatedWave from '../ui/AnimatedWave';
import BrandLogo from '../ui/BrandLogo';
import { IconMail, IconMapPin, IconPhone, SOCIAL_ICONS } from '../ui/Icons';

export default function Footer() {
  const hoverSocial = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { scale: 1.12, duration: 0.2 });
  };
  const leaveSocial = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
  };

  return (
    <footer className="site-footer">
      <div className="footer-sky" aria-hidden />
      <div className="footer-inner">
        <BrandLogo size="lg" className="footer-logo" />
        <AnimatedWave />
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Get Started</h4>
            {FOOTER_COLS.getStarted.map((l) => (
              <Link key={l.path} to={l.path}>{l.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>More Info</h4>
            {FOOTER_COLS.moreInfo.map((l) => (
              <Link key={l.path} to={l.path}>{l.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            {FOOTER_COLS.contact.emails.map((e) => (
              <a key={e} href={`mailto:${e}`} className="footer-contact-item">
                <IconMail className="footer-contact-icon" />
                <span>{e}</span>
              </a>
            ))}
            <a href={`tel:${FOOTER_COLS.contact.phoneRaw}`} className="footer-contact-item">
              <IconPhone className="footer-contact-icon" />
              <span>{FOOTER_COLS.contact.phone}</span>
            </a>
            <p className="footer-contact-item footer-contact-item--static">
              <IconMapPin className="footer-contact-icon" />
              <span>{FOOTER_COLS.contact.location}</span>
            </p>
          </div>
        </div>
        <div className="footer-social">
          {FOOTER_COLS.social.map(({ label, href }) => {
            const Icon = SOCIAL_ICONS[label as keyof typeof SOCIAL_ICONS];
            return (
              <a
                key={label}
                href={href}
                className="footer-social-link"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={hoverSocial}
                onMouseLeave={leaveSocial}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
        <p className="footer-copy">&copy; {BRAND.fullName} — All Rights Reserved</p>
      </div>
    </footer>
  );
}
