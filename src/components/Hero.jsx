import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const YOUTUBE_VIDEO_ID = '1_ImOyM18AA';

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const videoRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(titleRef.current, { y: 80, opacity: 0, duration: 1 })
        .from(subtitleRef.current, { y: 60, opacity: 0, duration: 0.8 }, '-=0.5')
        .from(videoRef.current, { scale: 0.85, opacity: 0, duration: 1 }, '-=0.4')
        .from(ctaRef.current, { y: 30, opacity: 0, duration: 0.6 }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero__bg-shapes">
        <div className="hero__circle hero__circle--1" />
        <div className="hero__circle hero__circle--2" />
        <div className="hero__circle hero__circle--3" />
      </div>

      <div className="hero__content container">
        <div ref={titleRef} className="hero__title-row">
          <h1 className="hero__title">
            Sprinkles
          </h1>
          <img
            src="/images/relentless-games-logo.png"
            alt="Relentless Games logo"
            className="hero__logo"
          />
        </div>
        <p ref={subtitleRef} className="hero__subtitle">
          Coming soon to Meta Quest
        </p>

        <div ref={videoRef} className="hero__video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&playsinline=1&rel=0&modestbranding=1`}
            title="Sprinkles — Game Trailer"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div ref={ctaRef} className="hero__cta">
          <a href="#about" className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,40 C360,100 1080,0 1440,60 L1440,100 L0,100 Z"
            fill="var(--navy)"
          />
        </svg>
      </div>
    </section>
  );
}
