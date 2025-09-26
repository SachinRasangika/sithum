import React from 'react';
import './HeroBanner.css';

export default function HeroBanner() {
  const onSubmitBooking = (e) => {
    e.preventDefault();
    const anchor = document.getElementById('packages');
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.location.hash = '#packages';
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-media-wrap">
          <img
            className="hero-fallback-image hero-single-image"
            src="https://api.builder.io/api/v1/image/assets/TEMP/71d4d2e655c02fb11b2f791fa9086c118a1cf0c6?width=3840"
            alt=""
            loading="eager"
          />
        </div>
        <div className="hero-overlay"></div>
      </div>


      <div className="hero-content-grid">
        <div className="hero-content-card" role="region" aria-label="Intro">
          <div className="hero-heading-group">
            <p className="hero-subcaption">DISCOVER THE PEARL OF THE INDIAN OCEAN</p>
            <h1 className="hero-title">Explore Sri Lanka, Your Way</h1>
            <p className="hero-subtitle">Private, luxury tours designed around you — beaches, tea country, wildlife and culture in one unforgettable journey.</p>
          </div>

          <div className="hero-cta-row" role="group" aria-label="Primary actions">
            <a href="#about" className="hero-cta-button" aria-label="Plan your trip to Sri Lanka">Plan Your Trip</a>
            <a href="#packages" className="hero-cta-button hero-cta-secondary" aria-label="View Sri Lanka destinations and tours">View Destinations</a>
          </div>

          <div className="hero-trust" aria-label="Highlights and trust">
            <div className="trust-stars" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 0.62L10.101 6.148H15.913L11.211 9.564L13.007 15.092L8.305 11.676L3.602 15.092L5.399 9.564L0.696 6.148H6.509L8.305 0.62Z" fill="#FF6275"/></svg>
              <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 0.62L10.101 6.148H15.913L11.211 9.564L13.007 15.092L8.305 11.676L3.602 15.092L5.399 9.564L0.696 6.148H6.509L8.305 0.62Z" fill="#FF6275"/></svg>
              <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 0.62L10.101 6.148H15.913L11.211 9.564L13.007 15.092L8.305 11.676L3.602 15.092L5.399 9.564L0.696 6.148H6.509L8.305 0.62Z" fill="#FF6275"/></svg>
              <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 0.62L10.101 6.148H15.913L11.211 9.564L13.007 15.092L8.305 11.676L3.602 15.092L5.399 9.564L0.696 6.148H6.509L8.305 0.62Z" fill="#FF6275"/></svg>
              <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 0.62L10.101 6.148H15.913L11.211 9.564L13.007 15.092L8.305 11.676L3.602 15.092L5.399 9.564L0.696 6.148H6.509L8.305 0.62Z" fill="#FF6275"/></svg>
            </div>
            <span className="trust-note">Rated 4.9/5 by travellers</span>
            <span className="trust-dot" aria-hidden="true">•</span>
            <span className="trust-item">Tailor‑made itineraries</span>
            <span className="trust-dot" aria-hidden="true">•</span>
            <span className="trust-item">Local expert support</span>
          </div>

          <form className="booking-bar" onSubmit={onSubmitBooking} aria-label="Quick trip planner">
            <div className="booking-field">
              <label htmlFor="dest" className="visually-hidden">Destination</label>
              <select id="dest" className="booking-input" defaultValue="Sri Lanka" aria-label="Destination">
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="South Coast">South Coast</option>
                <option value="Tea Country">Tea Country</option>
                <option value="Cultural Triangle">Cultural Triangle</option>
                <option value="Wildlife">Wildlife</option>
              </select>
            </div>
            <div className="booking-sep" aria-hidden="true"></div>
            <div className="booking-field">
              <label htmlFor="start" className="visually-hidden">Start date</label>
              <input id="start" className="booking-input" type="date" aria-label="Start date" />
            </div>
            <div className="booking-sep" aria-hidden="true"></div>
            <div className="booking-field">
              <label htmlFor="guests" className="visually-hidden">Guests</label>
              <select id="guests" className="booking-input" defaultValue="2" aria-label="Guests">
                {Array.from({ length: 6 }, (_, i) => i + 1).map((g) => (
                  <option key={g} value={g}>{g} {g === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="booking-submit">Search</button>
          </form>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to content">
        <span className="hero-scroll-dot" aria-hidden="true"></span>
      </a>
    </section>
  );
}
