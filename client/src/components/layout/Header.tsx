import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../data/content';
import CartButton from '../cart/CartButton';
import BrandLogo from '../ui/BrandLogo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const overHero = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const renderNavLinks = () =>
    NAV_LINKS.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className={location.pathname === link.path ? 'active' : ''}
        onClick={() => setOpen(false)}
      >
        {link.label}
      </Link>
    ));

  return (
    <>
      <div
        className={`mobile-nav-backdrop${open ? ' open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <nav
        className={`header-nav header-nav--drawer${open ? ' open' : ''}`}
        aria-hidden={!open}
      >
        <div className="mobile-nav-head">
          <span className="mobile-nav-label">Menu</span>
          <button
            type="button"
            className="mobile-nav-close"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="mobile-nav-links">{renderNavLinks()}</div>
        <div className="mobile-nav-foot">
          <CartButton showLabel />
          <Link to="/products" className="btn-primary mobile-nav-cta" onClick={() => setOpen(false)}>
            Order Now
          </Link>
        </div>
      </nav>
      <header
        className={[
          'site-header',
          scrolled ? 'scrolled' : '',
          overHero ? 'over-hero' : '',
          open ? 'menu-open' : '',
        ].filter(Boolean).join(' ')}
      >
        <div className="header-inner">
          <Link to="/" className="header-logo" onClick={() => setOpen(false)}>
            <BrandLogo size="sm" />
          </Link>
          <nav className="header-nav header-nav--desktop">{renderNavLinks()}</nav>
          <div className="header-actions">
            <Link to="/products" className="btn-primary header-order-btn">Order Now</Link>
            <div className="header-cart-desktop">
              <CartButton />
            </div>
            <button
              type="button"
              className={`header-toggle${open ? ' open' : ''}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
