import React from 'react';
import './SafariBeach.css';

export default function SafariBeach() {
  return (
    <section className="safari-beach-section" aria-label="Sri Lanka Island & Beach Adventures">
      <div className="safari-beach-container">

        <div className="safari-beach-layout">
          <div className="safari-beach-copy">
            <p className="safari-beach-eyebrow">Island & Beach Journeys</p>

            <h2 className="safari-beach-heading">
              Award‑winning Sri Lanka & Beach Adventures
            </h2>

            <p className="safari-beach-subtext">
              Discover Sri Lanka’s wild parks, tea country, and palm‑fringed beaches in one seamless journey curated for comfort and wonder.
            </p>

            <ul className="safari-beach-highlights" aria-label="Experience highlights">
              <li className="highlight-item">
                <span className="highlight-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17l-5-5" stroke="#030922" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="highlight-text">Private, flexible itineraries</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" stroke="#030922" strokeWidth="1.5" fill="none"/>
                  </svg>
                </span>
                <span className="highlight-text">Handpicked boutique stays</span>
              </li>
              <li className="highlight-item">
                <span className="highlight-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10.5c0 6-9 11.5-9 11.5S3 16.5 3 10.5a9 9 0 1118 0z" stroke="#030922" strokeWidth="1.5" fill="none"/>
                    <circle cx="12" cy="10.5" r="3" stroke="#030922" strokeWidth="1.5" fill="none"/>
                  </svg>
                </span>
                <span className="highlight-text">Local expert guides</span>
              </li>
            </ul>

            <div className="safari-beach-actions">
              <button className="safari-beach-cta-primary">View Sri Lanka Tours</button>
              <button className="safari-beach-cta-secondary">Talk to a Specialist</button>
            </div>
          </div>

          <div className="safari-beach-gallery" aria-label="Travel inspiration images">
            <div className="gallery-main">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/65ff6ed5e6244b2e20c22885f70a35a40ecd5c0a?width=2059"
                alt="Golden beach with gentle waves and a couple walking by the shore"
                className="gallery-image"
                loading="lazy"
              />
            </div>
            <div className="gallery-side">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/29cc984c31cf5fc0f154ad45f64e3f45806abe65?width=455"
                alt="Couple enjoying a serene boat ride"
                className="gallery-image"
                loading="lazy"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/65ff6ed5e6244b2e20c22885f70a35a40ecd5c0a?width=1024"
                alt="Tropical coastline with palm trees"
                className="gallery-image"
                loading="lazy"
              />
            </div>

            <div className="safari-beach-badge" aria-label="Travel trust indicator">
              <span className="badge-ring" aria-hidden="true"></span>
              <div className="badge-content">
                <strong className="badge-title">Trusted Trips</strong>
                <span className="badge-sub">Curated for you</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
