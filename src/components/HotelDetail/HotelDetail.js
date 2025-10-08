import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './HotelDetail.css';
import { findHotelBySlug } from '../../data/hotels';

const HotelDetail = () => {
  const { slug } = useParams();
  const hotel = findHotelBySlug(slug);
  const navigate = useNavigate();

  const [booking, setBooking] = useState({ name: '', email: '', checkIn: '', checkOut: '', roomId: '' });

  if (!hotel) {
    return (
      <section className="hotel-detail-section">
        <div className="hotel-detail-container">
          <h2 className="hotel-detail-title">Hotel not found</h2>
          <p className="hotel-detail-text">We couldn't find the requested hotel. Please browse our Sri Lanka stays and try again.</p>
          <Link to="/" className="hotel-detail-cta">Back to Home</Link>
        </div>
      </section>
    );
  }

  const onChangeBooking = (field) => (e) => setBooking((s) => ({ ...s, [field]: e.target.value }));

  const submitBooking = (e) => {
    e.preventDefault();
    const room = hotel.rooms.find((r) => r.id === booking.roomId) || hotel.rooms[0];
    const payload = {
      hotel: hotel.name,
      room: room?.type || '',
      name: booking.name,
      email: booking.email,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut
    };
    window.alert(`Reservation request submitted:\n${JSON.stringify(payload, null, 2)}`);
    setBooking({ name: '', email: '', checkIn: '', checkOut: '', roomId: '' });
  };

  const quickBook = (roomId) => {
    setBooking((s) => ({ ...s, roomId }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="hotel-detail-section" aria-label={`${hotel.name} details`}>
      <div className="hotel-hero-media">
        <img src={hotel.image} alt={hotel.alt} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop';}} />
        <div className="hotel-hero-overlay">
          <div className="hotel-hero-container">
            <button type="button" className="back-button" onClick={() => navigate(-1)} aria-label="Go back">← Back</button>
            <div className="hero-text">
              <h1 className="hero-hotel-name">{hotel.name}</h1>
              <p className="hero-hotel-location">{hotel.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hotel-detail-container">

        <div className="hotel-body">
          <div>
            <section className="hotel-overview" aria-labelledby="overview-title">
              <h2 id="overview-title" className="section-heading">Overview</h2>
              <p className="hotel-detail-text">{hotel.description}</p>

              {hotel.specialOffers && hotel.specialOffers.length > 0 && (
                <section className="special-offers" aria-labelledby="offers-title">
                  <h2 id="offers-title" className="section-heading">Special offers</h2>
                  <ul className="offers-list">
                    {hotel.specialOffers.map((o) => (
                      <li key={o.id} className="offer-item">
                        <strong className="offer-title">{o.title}</strong>
                        <p className="offer-text">{o.description}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {hotel.gallery && hotel.gallery.length > 0 && (
                <section className="hotel-gallery" aria-labelledby="gallery-title">
                  <h2 id="gallery-title" className="section-heading">Gallery</h2>
                  <div className="gallery-grid">
                    {hotel.gallery.map((src) => (
                      <figure key={src} className="gallery-item">
                        <img className="gallery-image" src={src} alt={`${hotel.name} preview`} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop';}} />
                      </figure>
                    ))}
                  </div>
                </section>
              )}

              {hotel.inclusions && hotel.inclusions.length > 0 && (
                <section className="hotel-inclusions" aria-labelledby="inclusions-title">
                  <h2 id="inclusions-title" className="section-heading">What’s included</h2>
                  <ul className="inclusions-list">
                    {hotel.inclusions.map((item) => (
                      <li key={item} className="inclusion-item">{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {hotel.bookingBenefits && hotel.bookingBenefits.length > 0 && (
                <section className="hotel-benefits" aria-labelledby="benefits-title">
                  <h2 id="benefits-title" className="section-heading">Why book with us</h2>
                  <ul className="benefits-list">
                    {hotel.bookingBenefits.map((b) => (
                      <li key={b} className="benefit-item">
                        <span className="benefit-icon" aria-hidden="true" />
                        <span className="benefit-text">{b}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

            </section>

            {hotel.rooms && hotel.rooms.length > 0 && (
              <section className="rooms-section" aria-labelledby="rooms-title">
                <h2 id="rooms-title" className="section-heading">Rooms & rates</h2>
                <div className="rooms-grid">
                  {hotel.rooms.map((r) => (
                    <div key={r.id} className="room-card">
                      <img src={r.images?.[0]} alt={r.type} className="room-image" onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop';}} />
                      <div className="room-content">
                        <h3 className="room-type">{r.type}</h3>
                        <p className="room-desc">{r.description}</p>
                        <div className="room-meta">
                          <span className="room-price">From {r.currency} {r.priceFrom}</span>
                          <button className="quick-book-btn" onClick={() => quickBook(r.id)}>Book now</button>
                        </div>
                        <ul className="room-amenities">
                          {r.amenities.map((a) => <li key={a} className="room-amenity">{a}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="policies-section" aria-labelledby="policies-title">
              <h2 id="policies-title" className="section-heading">Policies & FAQs</h2>
              <div className="policies-grid">
                <div className="policies-list">
                  {hotel.policies && hotel.policies.map((p) => (
                    <div key={p.title} className="policy-item">
                      <strong>{p.title}</strong>
                      <p className="policy-text">{p.text}</p>
                    </div>
                  ))}
                </div>

                <div className="faqs-list">
                  {hotel.faqs && hotel.faqs.map((f) => (
                    <div key={f.q} className="faq-item">
                      <strong className="faq-question">{f.q}</strong>
                      <p className="faq-answer">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="reviews-section" aria-labelledby="reviews-title">
              <h2 id="reviews-title" className="section-heading">Guest reviews</h2>
              <ul className="reviews-list">
                {hotel.reviews && hotel.reviews.map((r) => (
                  <li key={r.id} className="review-item">
                    <div className="review-meta">
                      <strong className="reviewer-name">{r.name}</strong>
                      <span className="review-rating">{Array.from({ length: r.rating }).map((_, i) => '★')}</span>
                    </div>
                    <p className="review-text">{r.text}</p>
                  </li>
                ))}
              </ul>
            </section>

            {hotel.nearbyExperiences && hotel.nearbyExperiences.length > 0 && (
              <section className="nearby-experiences" aria-labelledby="nearby-title">
                <h2 id="nearby-title" className="section-heading">Nearby experiences</h2>
                <ul className="nearby-list">
                  {hotel.nearbyExperiences.map((n) => (
                    <li key={n.id} className="nearby-item">
                      <span className="nearby-title">{n.title}</span>
                      <span className="nearby-distance">{n.distance}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {hotel.mapSrc && (
              <section className="hotel-map" aria-labelledby="map-title">
                <h2 id="map-title" className="section-heading">Location</h2>
                <div className="map-frame">
                  <iframe
                    className="map-iframe"
                    src={hotel.mapSrc}
                    title={`${hotel.name} location map`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </section>
            )}
          </div>

          <aside className="hotel-sidebar" aria-label="Highlights">
            {hotel.amenities && hotel.amenities.length > 0 && (
              <section className="hotel-amenities" aria-labelledby="amenities-title">
                <h2 id="amenities-title" className="section-heading">Amenities</h2>
                <ul className="amenities-list">
                  {hotel.amenities.map((a) => (
                    <li key={a} className="amenity-item">{a}</li>
                  ))}
                </ul>
              </section>
            )}

            {hotel.interiors && hotel.interiors.length > 0 && (
              <section className="hotel-interiors" aria-labelledby="interiors-title">
                <h2 id="interiors-title" className="section-heading">Interior features</h2>
                <ul className="interiors-grid">
                  {hotel.interiors.map((feat) => (
                    <li key={feat} className="interior-item">
                      <span className="interior-icon" aria-hidden="true" />
                      <span className="interior-label">{feat}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="booking-widget" aria-labelledby="booking-title">
              <h2 id="booking-title" className="section-heading">Request a reservation</h2>
              <form className="booking-form" onSubmit={submitBooking}>
                <label className="form-label">Name
                  <input className="form-input" value={booking.name} onChange={onChangeBooking('name')} required />
                </label>

                <label className="form-label">Email
                  <input type="email" className="form-input" value={booking.email} onChange={onChangeBooking('email')} required />
                </label>

                <label className="form-label">Check-in
                  <input type="date" className="form-input" value={booking.checkIn} onChange={onChangeBooking('checkIn')} required />
                </label>

                <label className="form-label">Check-out
                  <input type="date" className="form-input" value={booking.checkOut} onChange={onChangeBooking('checkOut')} required />
                </label>

                <label className="form-label">Room
                  <select className="form-input" value={booking.roomId} onChange={onChangeBooking('roomId')}>
                    <option value="">Select a room</option>
                    {hotel.rooms && hotel.rooms.map((r) => (
                      <option key={r.id} value={r.id}>{r.type} — From {r.currency} {r.priceFrom}</option>
                    ))}
                  </select>
                </label>

                <button type="submit" className="primary-action booking-submit">Send request</button>
              </form>

              <div className="contact-cta">
                <strong>Need help planning?</strong>
                <p>Contact our concierge for tailored itineraries and add-ons.</p>
                <Link to="/contact" className="secondary-action contact-link">Contact concierge</Link>
              </div>
            </section>

          </aside>
        </div>

        <section className="hotel-actions" aria-label="Hotel actions">
          <Link to="/packages" className="primary-action">View related packages</Link>
          <Link to="/contact" className="secondary-action">Enquire</Link>
        </section>
      </div>
    </article>
  );
};

export default HotelDetail;
