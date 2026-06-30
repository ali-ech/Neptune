import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ASSETS, BRAND } from '../../assets';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.from('.hero-reveal', {
      y: 28,
      opacity: 0,
      duration: 0.8,
      stagger: 0.14,
      ease: 'power2.out',
      delay: 0.35,
    });
  }, []);

  return (
    <section ref={heroRef} className="hero hero--o1 section">
      <div
        className="hero-bg-image"
        style={{ backgroundImage: `url(${ASSETS.heroBg})` }}
        aria-hidden
      />
      <div className="hero-bg-overlay" aria-hidden />
      <div className="hero-o1-content">
        <h1 className="hero-o1-title hero-reveal">{BRAND.heroHeadline}</h1>
        <p className="hero-o1-sub hero-reveal">{BRAND.heroSubline}</p>
      </div>
    </section>
  );
}
