import React from 'react';
import { Link } from 'react-router-dom';
import './SriLankaStay.css';
import { hotels } from '../../data/hotels';

export default function SriLankaStay() {
  return (
    <section className="stays-section" aria-label="Sri Lanka stays">
      <div className="stays-container">
        <header className="stays-header">
          <span className="stays-badge">Stays</span>
          <div className="stays-hero-divider" aria-hidden="true"><span className="stays-divider-line"></span></div>
          <div className="stays-title-wrap">
            <div className="stays-decorative stays-decorative-left" aria-hidden="true">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_safari_icon)"><path d="M27.6345 12.7839C25.6725 13.0602 23.6945 13.2328 21.7325 13.4746C19.7707 13.7162 17.7927 13.8371 15.8307 13.9752C13.8723 14.2879 11.891 14.4036 9.91267 14.3204C7.88342 14.1376 5.89265 13.6192 4.01074 12.7839V12.3868C5.89265 11.5516 7.88342 11.0333 9.91267 10.8503C11.891 10.7672 13.8723 10.8828 15.8307 11.1956C17.7927 11.3337 19.7545 11.5063 21.7325 11.6963C23.7107 11.8862 25.6725 12.1106 27.6345 12.3868V12.7839Z" fill="#030D34"/><path d="M7.9021 0.976394C7.45182 1.82237 6.93722 2.61655 6.45477 3.42799C5.97233 4.23944 5.42555 5.01635 4.84663 5.776C4.26769 6.53565 3.96214 7.50248 3.23848 8.00317C2.36858 8.57979 1.36619 8.8847 0.343826 8.88367L0.134766 8.64195C0.144877 7.54444 0.458312 6.47487 1.03533 5.56883C1.50169 4.72285 2.41833 4.39482 3.142 3.84235C3.86567 3.28988 4.6054 2.75467 5.36123 2.23673C6.11705 1.71878 6.88897 1.2181 7.70913 0.751953L7.9021 0.976394Z" fill="#030D34"/><path d="M7.5799 24.7298C6.77582 24.2463 6.05215 23.6939 5.28022 23.1759C4.50831 22.6579 3.81681 22.0709 3.10921 21.4494C2.40162 20.8278 1.50105 20.4998 1.03468 19.7229C0.483483 18.7956 0.198279 17.7149 0.214525 16.6151L0.439666 16.3906C1.46275 16.3963 2.46042 16.7333 3.30218 17.3575C4.09018 17.8581 4.39573 18.8423 4.91035 19.6193C5.42496 20.3961 5.93957 21.1904 6.42202 22.0019C6.90447 22.8133 7.37083 23.642 7.80503 24.5053L7.5799 24.7298Z" fill="#030D34"/></g><defs><clipPath id="clip0_safari_icon"><rect width="27.5" height="25" fill="white" transform="translate(0.134766 0.751953)"/></clipPath></defs></svg>
            </div>
            <h1 className="stays-title">Sri Lanka Stays</h1>
            <div className="stays-decorative stays-decorative-right" aria-hidden="true">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_safari_icon)"><path d="M27.6345 12.7839C25.6725 13.0602 23.6945 13.2328 21.7325 13.4746C19.7707 13.7162 17.7927 13.8371 15.8307 13.9752C13.8723 14.2879 11.891 14.4036 9.91267 14.3204C7.88342 14.1376 5.89265 13.6192 4.01074 12.7839V12.3868C5.89265 11.5516 7.88342 11.0333 9.91267 10.8503C11.891 10.7672 13.8723 10.8828 15.8307 11.1956C17.7927 11.3337 19.7545 11.5063 21.7325 11.6963C23.7107 11.8862 25.6725 12.1106 27.6345 12.3868V12.7839Z" fill="#030D34"/><path d="M7.9021 0.976394C7.45182 1.82237 6.93722 2.61655 6.45477 3.42799C5.97233 4.23944 5.42555 5.01635 4.84663 5.776C4.26769 6.53565 3.96214 7.50248 3.23848 8.00317C2.36858 8.57979 1.36619 8.8847 0.343826 8.88367L0.134766 8.64195C0.144877 7.54444 0.458312 6.47487 1.03533 5.56883C1.50169 4.72285 2.41833 4.39482 3.142 3.84235C3.86567 3.28988 4.6054 2.75467 5.36123 2.23673C6.11705 1.71878 6.88897 1.2181 7.70913 0.751953L7.9021 0.976394Z" fill="#030D34"/><path d="M7.5799 24.7298C6.77582 24.2463 6.05215 23.6939 5.28022 23.1759C4.50831 22.6579 3.81681 22.0709 3.10921 21.4494C2.40162 20.8278 1.50105 20.4998 1.03468 19.7229C0.483483 18.7956 0.198279 17.7149 0.214525 16.6151L0.439666 16.3906C1.46275 16.3963 2.46042 16.7333 3.30218 17.3575C4.09018 17.8581 4.39573 18.8423 4.91035 19.6193C5.42496 20.3961 5.93957 21.1904 6.42202 22.0019C6.90447 22.8133 7.37083 23.642 7.80503 24.5053L7.5799 24.7298Z" fill="#030D34"/></g><defs><clipPath id="clip0_safari_icon"><rect width="27.5" height="25" fill="white" transform="translate(0.134766 0.751953)"/></clipPath></defs></svg>
            </div>
          </div>
          <div className="stays-hero-divider" aria-hidden="true"><span className="stays-divider-line"></span></div>
          <p className="stays-hero-subtitle">Handpicked hotels, lodges and boutique retreats across Sri Lanka.</p>
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
