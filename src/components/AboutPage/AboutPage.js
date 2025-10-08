import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <section className="aboutpage-section" aria-label="About Sithuma">
      <div className="aboutpage-hero">
        <img
          className="aboutpage-hero-media"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2400&auto=format&fit=crop"
          alt="Sri Lankan landscape"
        />
        <div className="aboutpage-hero-overlay" />
        <div className="aboutpage-hero-content">
          <p className="aboutpage-kicker">DISCOVER WITH CARE</p>
          <h1 className="aboutpage-title">About Sithuma</h1>
          <p className="aboutpage-sub">We craft private, luxury journeys across Sri Lanka—thoughtfully designed by local experts and delivered with world‑class care.</p>
          <div className="aboutpage-actions">
            <Link to="/packages" className="aboutpage-btn aboutpage-btn-primary">Explore Packages</Link>
            <Link to="/contact" className="aboutpage-btn aboutpage-btn-ghost">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="aboutpage-container">
        <section className="aboutpage-story" aria-labelledby="story-heading">
          <div className="section-head">
            <div className="aboutpage-title-wrap">
              <div className="aboutpage-decorative" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.13477 14.0199C4.07339 13.8558 5.0166 13.7283 5.95891 13.6011C6.59234 13.5156 7.22536 13.4301 7.8563 13.3335C9.22034 13.1247 10.5941 13.0067 11.9607 12.8892C12.1666 12.8715 12.3723 12.8538 12.5778 12.8359C14.1445 12.5249 15.7295 12.4101 17.3122 12.4926C18.9356 12.6745 20.5282 13.1897 22.0338 14.0199V14.4147C20.5282 15.2449 18.9356 15.76 17.3122 15.9419C15.7295 16.0245 14.1445 15.9096 12.5778 15.5987C11.0083 15.4614 9.43872 15.2898 7.8563 15.1011C6.27387 14.9123 4.70432 14.6892 3.13477 14.4147V14.0199Z" fill="#FCF8F7"/></svg>
              </div>
              <h2 id="story-heading" className="aboutpage-section-title">Our Story</h2>
              <div className="aboutpage-decorative" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.1504 14.5233C21.517 14.6089 20.884 14.6943 20.253 14.7909C18.889 14.9997 17.5152 15.1177 16.1487 15.2352C15.9428 15.2529 15.7371 15.2706 15.5316 15.2886C13.9649 15.5994 12.3799 15.7144 10.7972 15.6318C9.17375 15.4499 7.58113 14.9347 6.07561 14.1044V13.7098C7.58113 12.8795 9.17375 12.3643 10.7972 12.1825C12.3799 12.0999 13.9649 12.2148 15.5316 12.5257C17.1011 12.663 18.6707 12.8346 20.253 13.0233C21.8355 13.2121 23.4051 13.4352 24.9746 13.7098V14.1044C24.036 14.2687 23.0928 14.396 22.1504 14.5233Z" fill="#FCF8F7"/></svg>
              </div>
            </div>
            <p className="aboutpage-lead">Founded by Sri Lankan travel specialists, Sithuma brings together deep local knowledge, trusted relationships and a passion for meaningful experiences. We believe travel should enrich both travellers and the communities they visit.</p>
          </div>

          <div className="aboutpage-stats">
            <div className="stat-card"><span className="stat-value">10+ years</span><span className="stat-label">Crafting journeys</span></div>
            <div className="stat-card"><span className="stat-value">4.9/5</span><span className="stat-label">Guest rating</span></div>
            <div className="stat-card"><span className="stat-value">50+</span><span className="stat-label">Trusted partners</span></div>
            <div className="stat-card"><span className="stat-value">24/7</span><span className="stat-label">On‑trip support</span></div>
          </div>
        </section>

        <section className="aboutpage-values" aria-labelledby="values-heading">
          <h2 id="values-heading" className="aboutpage-section-title">Our Values</h2>
          <div className="values-grid">
            <article className="value-card">
              <h3 className="value-title">Care & Craft</h3>
              <p className="value-text">Every itinerary is tailor‑made with attention to pacing, logistics and comfort—so you can simply enjoy the journey.</p>
            </article>
            <article className="value-card">
              <h3 className="value-title">Local Insight</h3>
              <p className="value-text">We work with exceptional guides, boutique hotels and expert partners to unlock Sri Lanka’s most rewarding experiences.</p>
            </article>
            <article className="value-card">
              <h3 className="value-title">Sustainable Mindset</h3>
              <p className="value-text">We support conservation and community initiatives and choose partners who share our commitment to responsible travel.</p>
            </article>
            <article className="value-card">
              <h3 className="value-title">Seamless Support</h3>
              <p className="value-text">From first call to your flight home, our team is available around the clock with proactive, reliable assistance.</p>
            </article>
          </div>
        </section>

        <section className="aboutpage-about" aria-labelledby="about-heading">
          <h2 id="about-heading" className="aboutpage-section-title">Who we are</h2>
          <div className="about-grid">
            <div className="about-col">
              <p className="about-text">Sithuma is a Sri Lankan team of trip designers, guides and operations specialists. We started with a simple idea: combine deep local knowledge with modern service standards to create travel that feels effortless and personal.</p>
              <p className="about-text">Our relationships with boutique hotels, conservation groups and craftspeople allow us to open doors—off‑hours access, expert‑led experiences and warm welcomes that elevate every journey.</p>
            </div>
            <div className="about-col">
              <p className="about-text">We design for different travel styles—honeymoons, family adventures and celebratory trips—balancing headline sights with time to slow down. With 24/7 on‑trip support, we stay close so you can relax.</p>
              <p className="about-text">Every plan is built around what matters to you: pace, comfort level, special interests and the little touches that make a trip uniquely yours.</p>
            </div>
          </div>
        </section>

        <section className="aboutpage-approach" aria-labelledby="approach-heading">
          <h2 id="approach-heading" className="aboutpage-section-title">How we design your trip</h2>
          <ol className="steps-list">
            <li className="step-item"><span className="step-badge">1</span><div><h3 className="step-title">Listen</h3><p className="step-text">A short call to understand your wish‑list, pace, dates and budget.</p></div></li>
            <li className="step-item"><span className="step-badge">2</span><div><h3 className="step-title">Design</h3><p className="step-text">We craft options with hotels and experiences that fit your style.</p></div></li>
            <li className="step-item"><span className="step-badge">3</span><div><h3 className="step-title">Refine</h3><p className="step-text">Together we fine‑tune the route until it feels just right.</p></div></li>
            <li className="step-item"><span className="step-badge">4</span><div><h3 className="step-title">Care</h3><p className="step-text">On‑trip support and thoughtful touches from our local team.</p></div></li>
          </ol>
        </section>

        <section className="aboutpage-accs" aria-labelledby="accs-heading">
          <h2 id="accs-heading" className="aboutpage-section-title">Accreditations & partners</h2>
          <ul className="chip-list">
            <li className="chip">SLTDA Registered</li>
            <li className="chip">Sustainable Tourism Pledge</li>
            <li className="chip">Local Conservation Partners</li>
            <li className="chip">Boutique Hotel Collective</li>
            <li className="chip">Private Guides Network</li>
          </ul>
        </section>

        <section className="aboutpage-promise" aria-labelledby="promise-heading">
          <h2 id="promise-heading" className="aboutpage-section-title">Our promise</h2>
          <div className="promise-grid">
            <article className="promise-card"><h3>Transparent pricing</h3><p>No hidden fees—clear inclusions and honest recommendations.</p></article>
            <article className="promise-card"><h3>Tailored pacing</h3><p>Unrush your days with balanced routing and well‑timed stops.</p></article>
            <article className="promise-card"><h3>Trusted support</h3><p>Local experts on hand before, during and after your trip.</p></article>
          </div>
        </section>

        <section className="aboutpage-timeline" aria-labelledby="timeline-heading">
          <h2 id="timeline-heading" className="aboutpage-section-title">Milestones</h2>
          <ol className="timeline-list">
            <li className="timeline-item"><span className="timeline-year">2014</span><p className="timeline-text">Sithuma founded by a small team of planners and guides.</p></li>
            <li className="timeline-item"><span className="timeline-year">2017</span><p className="timeline-text">Curated boutique‑hotel network expands island‑wide.</p></li>
            <li className="timeline-item"><span className="timeline-year">2020</span><p className="timeline-text">Flexible, safety‑first travel operations introduced.</p></li>
            <li className="timeline-item"><span className="timeline-year">2024</span><p className="timeline-text">4.9/5 guest rating with thousands of happy travellers.</p></li>
          </ol>
        </section>

        <section className="aboutpage-cta" aria-labelledby="cta-heading">
          <div className="cta-box">
            <h2 id="cta-heading" className="aboutpage-section-title">Plan with a local expert</h2>
            <p className="cta-text">Tell us what you love, and we’ll design a journey around you—balancing culture, nature and time to unwind.</p>
            <div className="cta-actions">
              <Link to="/contact" className="aboutpage-btn aboutpage-btn-primary">Get in touch</Link>
              <Link to="/packages" className="aboutpage-btn aboutpage-btn-ghost">View packages</Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
