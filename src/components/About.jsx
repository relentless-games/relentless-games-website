import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.about__card').forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
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
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="about__heading">Who We Are</h2>
        <p className="about__intro">
          Relentless Games is a small, scrappy studio driven by a love for playful, 
          immersive experiences. We're building <strong>Sprinkles</strong> a puzzle game for <strong>Meta Quest</strong>. It's a Mixed Reality experience with exploding cupcakes.
        </p>

        <div className="about__grid">
          <div className="about__card">
            <div className="about__icon">🎮</div>
            <h3>MR-First</h3>
            <p>Built from the ground up for Meta Quest, designed to make you smile.</p>
          </div>
          <div className="about__card">
            <div className="about__icon">🎨</div>
            <h3>Bold & Colourful</h3>
            <p>Eye-popping visuals and a vibrant art style that pops in every direction.</p>
          </div>
          <div className="about__card">
            <div className="about__icon">🚀</div>
            <h3>Relentlessly Crafted</h3>
            <p>Every detail polished with care. We don't ship until it feels right.</p>
          </div>
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,60 C480,0 960,100 1440,40 L1440,100 L0,100 Z"
            fill="var(--pink)"
          />
        </svg>
      </div>
    </section>
  );
}
