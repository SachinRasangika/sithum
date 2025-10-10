import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <section className="about-simple" aria-label="About Sithuma">
      {/* Minimal hero */}
      <header className="simple-hero" role="banner">
        <div className="simple-container">
          <p className="simple-eyebrow">About Us</p>
          <div className="simple-hero-divider" aria-hidden="true"><span className="simple-divider-line"></span></div>
          <div className="simple-title-wrap">
            <span className="simple-deco simple-deco-left" aria-hidden="true">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_safari_icon)"><path d="M27.6345 12.7839C25.6725 13.0602 23.6945 13.2328 21.7325 13.4746C19.7707 13.7162 17.7927 13.8371 15.8307 13.9752C13.8723 14.2879 11.891 14.4036 9.91267 14.3204C7.88342 14.1376 5.89265 13.6192 4.01074 12.7839V12.3868C5.89265 11.5516 7.88342 11.0333 9.91267 10.8503C11.891 10.7672 13.8723 10.8828 15.8307 11.1956C17.7927 11.3337 19.7545 11.5063 21.7325 11.6963C23.7107 11.8862 25.6725 12.1106 27.6345 12.3868V12.7839Z" fill="#030922"/><path d="M7.9021 0.976394C7.45182 1.82237 6.93722 2.61655 6.45477 3.42799C5.97233 4.23944 5.42555 5.01635 4.84663 5.776C4.26769 6.53565 3.96214 7.50248 3.23848 8.00317C2.36858 8.57979 1.36619 8.8847 0.343826 8.88367L0.134766 8.64195C0.144877 7.54444 0.458312 6.47487 1.03533 5.56883C1.50169 4.72285 2.41833 4.39482 3.142 3.84235C3.86567 3.28988 4.6054 2.75467 5.36123 2.23673C6.11705 1.71878 6.88897 1.2181 7.70913 0.751953L7.9021 0.976394Z" fill="#030922"/><path d="M7.5799 24.7298C6.77582 24.2463 6.05215 23.6939 5.28022 23.1759C4.50831 22.6579 3.81681 22.0709 3.10921 21.4494C2.40162 20.8278 1.50105 20.4998 1.03468 19.7229C0.483483 18.7956 0.198279 17.7149 0.214525 16.6151L0.439666 16.3906C1.46275 16.3963 2.46042 16.7333 3.30218 17.3575C4.09018 17.8581 4.39573 18.8423 4.91035 19.6193C5.42496 20.3961 5.93957 21.1904 6.42202 22.0019C6.90447 22.8133 7.37083 23.642 7.80503 24.5053L7.5799 24.7298Z" fill="#030922"/></g><defs><clipPath id="clip0_safari_icon"><rect width="27.5" height="25" fill="white" transform="translate(0.134766 0.751953)"/></clipPath></defs></svg>
            </span>
            <h1 className="simple-title">Sri Lanka, designed around you</h1>
            <span className="simple-deco simple-deco-right" aria-hidden="true">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_safari_icon)"><path d="M27.6345 12.7839C25.6725 13.0602 23.6945 13.2328 21.7325 13.4746C19.7707 13.7162 17.7927 13.8371 15.8307 13.9752C13.8723 14.2879 11.891 14.4036 9.91267 14.3204C7.88342 14.1376 5.89265 13.6192 4.01074 12.7839V12.3868C5.89265 11.5516 7.88342 11.0333 9.91267 10.8503C11.891 10.7672 13.8723 10.8828 15.8307 11.1956C17.7927 11.3337 19.7545 11.5063 21.7325 11.6963C23.7107 11.8862 25.6725 12.1106 27.6345 12.3868V12.7839Z" fill="#030922"/><path d="M7.9021 0.976394C7.45182 1.82237 6.93722 2.61655 6.45477 3.42799C5.97233 4.23944 5.42555 5.01635 4.84663 5.776C4.26769 6.53565 3.96214 7.50248 3.23848 8.00317C2.36858 8.57979 1.36619 8.8847 0.343826 8.88367L0.134766 8.64195C0.144877 7.54444 0.458312 6.47487 1.03533 5.56883C1.50169 4.72285 2.41833 4.39482 3.142 3.84235C3.86567 3.28988 4.6054 2.75467 5.36123 2.23673C6.11705 1.71878 6.88897 1.2181 7.70913 0.751953L7.9021 0.976394Z" fill="#030922"/><path d="M7.5799 24.7298C6.77582 24.2463 6.05215 23.6939 5.28022 23.1759C4.50831 22.6579 3.81681 22.0709 3.10921 21.4494C2.40162 20.8278 1.50105 20.4998 1.03468 19.7229C0.483483 18.7956 0.198279 17.7149 0.214525 16.6151L0.439666 16.3906C1.46275 16.3963 2.46042 16.7333 3.30218 17.3575C4.09018 17.8581 4.39573 18.8423 4.91035 19.6193C5.42496 20.3961 5.93957 21.1904 6.42202 22.0019C6.90447 22.8133 7.37083 23.642 7.80503 24.5053L7.5799 24.7298Z" fill="#030922"/></g><defs><clipPath id="clip0_safari_icon"><rect width="27.5" height="25" fill="white" transform="translate(0.134766 0.751953)"/></clipPath></defs></svg>
            </span>
          </div>
          <div className="simple-hero-divider" aria-hidden="true"><span className="simple-divider-line"></span></div>
          <p className="simple-sub">We craft private journeys with clear pricing, thoughtful pacing and dependable support—so your trip feels effortless from hello to home.</p>
          <div className="simple-actions">
            <Link to="/packages" className="btn-minimal btn-solid" data-discover>Explore packages</Link>
            <Link to="/contact" className="btn-minimal btn-outline" data-discover>Contact us</Link>
          </div>
        </div>
      </header>

      {/* Feature strip */}
      <section className="feature-strip" aria-label="Highlights">
        <div className="simple-container feature-grid">
          <div className="feature-item"><span className="feature-dot" aria-hidden="true" /><div><h3 className="feature-title">Local expertise</h3><p className="feature-text">Designed by Sri Lankan specialists with trusted partners.</p></div></div>
          <div className="feature-item"><span className="feature-dot" aria-hidden="true" /><div><h3 className="feature-title">Clear & fair</h3><p className="feature-text">Transparent pricing and honest recommendations.</p></div></div>
          <div className="feature-item"><span className="feature-dot" aria-hidden="true" /><div><h3 className="feature-title">Always on</h3><p className="feature-text">Proactive, on‑trip support—anytime you need us.</p></div></div>
        </div>
      </section>

      {/* Story */}
      <section className="story-simple" aria-labelledby="story-title">
        <div className="simple-container">
          <h2 id="story-title" className="section-h">Our story</h2>
          <div className="story-grid">
            <p className="story-text">We started with a clear idea: combine deep local knowledge with modern service to create journeys that feel personal and unhurried. Our relationships with boutique hotels, conservation groups and expert guides allow us to open doors and pace your days well.</p>
            <p className="story-text">Whether it’s a honeymoon, family adventure or celebration, we balance headline sights with time to slow down—so you return refreshed, with memories that last.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-simple" aria-labelledby="values-title">
        <div className="simple-container">
          <h2 id="values-title" className="section-h">What we value</h2>
          <div className="values-grid-simple">
            <article className="value-row"><div className="value-accent" aria-hidden="true" /><div><h3 className="value-h">Care & craft</h3><p className="value-p">Tailor‑made plans with right‑sized logistics and comfort.</p></div></article>
            <article className="value-row"><div className="value-accent" aria-hidden="true" /><div><h3 className="value-h">Local insight</h3><p className="value-p">Exceptional guides, boutique stays and access that feels special.</p></div></article>
            <article className="value-row"><div className="value-accent" aria-hidden="true" /><div><h3 className="value-h">Responsible travel</h3><p className="value-p">Conservation‑minded choices that benefit communities.</p></div></article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="steps-simple" aria-labelledby="steps-title">
        <div className="simple-container">
          <h2 id="steps-title" className="section-h">How it works</h2>
          <ol className="steps-list-simple">
            <li className="step-row"><span className="step-num">1</span><div><h3 className="step-h">Listen</h3><p className="step-p">A quick call to learn your wish‑list, dates and pace.</p></div></li>
            <li className="step-row"><span className="step-num">2</span><div><h3 className="step-h">Design</h3><p className="step-p">We suggest hotels and experiences that fit your style.</p></div></li>
            <li className="step-row"><span className="step-num">3</span><div><h3 className="step-h">Refine</h3><p className="step-p">We tune the route together until it feels right.</p></div></li>
            <li className="step-row"><span className="step-num">4</span><div><h3 className="step-h">Care</h3><p className="step-p">On‑trip support and thoughtful touches from our team.</p></div></li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-simple" aria-labelledby="cta-title">
        <div className="simple-container">
          <div className="cta-box-simple">
            <h2 id="cta-title" className="section-h">Plan with a local expert</h2>
            <p className="cta-p">Tell us what you love and we’ll build a journey around you—clear, simple and well‑paced.</p>
            <div className="simple-actions">
              <Link to="/contact" className="btn-minimal btn-solid">Get in touch</Link>
              <Link to="/packages" className="btn-minimal btn-outline">View packages</Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
