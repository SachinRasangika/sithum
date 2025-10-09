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
          <h1 className="simple-title">Sri Lanka, designed around you</h1>
          <p className="simple-sub">We craft private journeys with clear pricing, thoughtful pacing and dependable support—so your trip feels effortless from hello to home.</p>
          <div className="simple-actions">
            <Link to="/packages" className="btn-minimal btn-solid">Explore packages</Link>
            <Link to="/contact" className="btn-minimal btn-outline">Contact us</Link>
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
