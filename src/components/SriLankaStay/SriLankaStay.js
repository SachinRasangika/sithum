import React from 'react';
import { Link } from 'react-router-dom';
import './SriLankaStay.css';
import { hotels } from '../../data/hotels';

export default function SriLankaStay() {
  return (
    <section className="stays-section" aria-label="Sri Lanka stays">
      <div className="stays-container">
        <header className="stays-header">
          <div className="stays-title-wrap">
            <div className="stays-decorative stays-decorative-left" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.13477 14.0199C4.07339 13.8558 5.0166 13.7283 5.95891 13.6011C6.59234 13.5156 7.22536 13.4301 7.8563 13.3335C9.22034 13.1247 10.5941 13.0067 11.9607 12.8892C12.1666 12.8715 12.3723 12.8538 12.5778 12.8359C14.1445 12.5249 15.7295 12.4101 17.3122 12.4926C18.9356 12.6745 20.5282 13.1897 22.0338 14.0199V14.4147C20.5282 15.2449 18.9356 15.76 17.3122 15.9419C15.7295 16.0245 14.1445 15.9096 12.5778 15.5987C11.0083 15.4614 9.43872 15.2898 7.8563 15.1011C6.27387 14.9123 4.70432 14.6892 3.13477 14.4147V14.0199Z" fill="#FCF8F7"/></svg>
            </div>
            <h1 className="stays-title">Sri Lanka Stays</h1>
            <div className="stays-decorative stays-decorative-right" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.1504 14.5233C21.517 14.6089 20.884 14.6943 20.253 14.7909C18.889 14.9997 17.5152 15.1177 16.1487 15.2352C15.9428 15.2529 15.7371 15.2706 15.5316 15.2886C13.9649 15.5994 12.3799 15.7144 10.7972 15.6318C9.17375 15.4499 7.58113 14.9347 6.07561 14.1044V13.7098C7.58113 12.8795 9.17375 12.3643 10.7972 12.1825C12.3799 12.0999 13.9649 12.2148 15.5316 12.5257C17.1011 12.663 18.6707 12.8346 20.253 13.0233C21.8355 13.2121 23.4051 13.4352 24.9746 13.7098V14.1044C24.036 14.2687 23.0928 14.396 22.1504 14.5233Z" fill="#FCF8F7"/></svg>
            </div>
          </div>
          <p className="stays-subtitle">Handpicked hotels, lodges and boutique retreats across Sri Lanka.</p>
        </header>

        <div className="stays-grid" role="list">
          {hotels.map((h) => (
            <article key={h.id} className="stay-card" role="listitem">
              <Link to={`/hotel/${h.slug}`} className="stay-media" aria-label={`View ${h.name}`}>
                <img src={h.image} alt={h.alt} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop';}} />
                <div className="stay-chip">{h.location}</div>
              </Link>
              <div className="stay-body">
                <h2 className="stay-name"><Link to={`/hotel/${h.slug}`}>{h.name}</Link></h2>
                <p className="stay-desc">{h.description}</p>
                <ul className="stay-tags">
                  {(h.amenities || []).slice(0,3).map(a => <li key={a} className="stay-tag">{a}</li>)}
                </ul>
                <div className="stay-actions">
                  <Link className="stay-view" to={`/hotel/${h.slug}`}>View details</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
