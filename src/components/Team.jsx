import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

const members = [
  {
    name: 'Michael Gallegos',
    bio: "Mike works behind the scenes at game startups and agencies. His domain experience is in marketing and design. He designs, markets, and does business development. He's probably busy networking right now!",
    email: 'm@relentless.games',
    linkedin: 'https://www.linkedin.com/in/mgallegos91/',
  },
  {
    name: 'Gareth Griffiths',
    bio: "Gareth is a full stack developer for games and web applications. He makes assets, writes code to produce the digital content. He's a creative to the core, loving nothing more than to make make make!",
    email: 'g@relentless.games',
    linkedin: 'https://www.linkedin.com/in/gngriffiths/',
  },
];

export default function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team__photo', {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.team__photo',
          start: 'top 85%',
        },
      });

      gsap.utils.toArray('.team__card').forEach((card, i) => {
        gsap.from(card, {
          x: i === 0 ? -80 : 80,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" className="team" ref={sectionRef}>
      <div className="container">
        <h2 className="team__heading">The Team</h2>

        <div className="team__photo">
          <img
            src="/images/mike-and-gareth-relentless-games.jpg"
            alt="Michael Gallegos and Gareth Griffiths — the Relentless Games team"
          />
        </div>

        <div className="team__grid">
          {members.map((m) => (
            <div className="team__card" key={m.name}>
              <h3>{m.name}</h3>
              <p className="team__bio">{m.bio}</p>
              <div className="team__links">
                <a href={`mailto:${m.email}`} className="team__link">
                  <span className="team__link-icon">✉</span> {m.email}
                </a>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="team__link"
                >
                  <span className="team__link-icon">in</span> LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,30 C360,90 1080,10 1440,70 L1440,100 L0,100 Z"
            fill="var(--navy)"
          />
        </svg>
      </div>
    </section>
  );
}
