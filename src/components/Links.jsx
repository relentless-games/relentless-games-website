import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Links.css';

gsap.registerPlugin(ScrollTrigger);

const socials = [
  { name: 'TikTok', url: 'https://www.tiktok.com/@relentlessgames', icon: '🎵' },
  { name: 'YouTube', url: 'https://www.youtube.com/@RelentlessScot', icon: '▶' },
  { name: 'Bluesky', url: 'https://bsky.app/profile/relentless.games', icon: '🦋' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/relentless-games-sco/', icon: '💼' },
  { name: 'Instagram', url: 'https://www.instagram.com/RelentlessScot', icon: '📸' },
  { name: 'Sprouter', url: 'https://sprouter.app/relentlessgames', icon: '🌱' },
];

export default function Links() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.links__item').forEach((item, i) => {
        gsap.from(item, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="links" className="links" ref={sectionRef}>
      <div className="container">
        <h2 className="links__heading">Connect With Us</h2>

        <div className="links__grid">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="links__item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="links__icon">{s.icon}</span>
              <span className="links__name">{s.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,50 C480,100 960,0 1440,50 L1440,100 L0,100 Z"
            fill="var(--navy)"
          />
        </svg>
      </div>
    </section>
  );
}
