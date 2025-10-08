import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PackageDetailNew.css';
import { packagesData as listPackages } from '../../data/packages';
import MapContainer from '../MapContainer/MapContainer';

function Fact({ label, value }) {
  return (
    <div className="pkg-fact" role="listitem">
      <span className="pkg-fact-label">{label}</span>
      <span className="pkg-fact-value">{value}</span>
    </div>
  );
}

function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="pkg-accordion" role="region" aria-label="Frequently asked questions">
      {items.map((it, i) => (
        <div key={it.q} className={`pkg-acc-item${openIdx === i ? ' is-open' : ''}`}>
          <button className="pkg-acc-header" onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-expanded={openIdx === i}>
            <span>{it.q}</span>
            <span className="pkg-acc-caret" aria-hidden>▾</span>
          </button>
          <div className="pkg-acc-panel">
            <p>{it.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop';

export default function PackageDetail() {
  const { packageId } = useParams();

  const base = useMemo(() => {
    const found = listPackages.find(p => p.id === packageId) || listPackages[0];
    const title = found?.title || 'Tailor-made Journey';
    const heroImage = found?.image || 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop';
    const days = found?.days || 7;
    const priceFrom = found?.priceFrom || 'From $1,990 pp';
    const highlights = found?.highlights || ['Signature sights', 'Boutique stays', 'Guided experiences'];
    return { id: found.id, title, heroImage, days, priceFrom, highlights };
  }, [packageId]);

  const details = useMemo(() => ({
    tagline: 'World-class, worry-free travel',
    summary:
      'Designed for discerning travelers who want effortless exploration, this itinerary blends cultural depth, scenic variety and time to unwind. Every detail is handled by expert planners—so you simply enjoy the journey.',
    quickFacts: [
      { label: 'Duration', value: `${base.days} days` },
      { label: 'Ideal for', value: 'Couples, Friends, Families' },
      { label: 'Style', value: 'Private & Fully Tailored' },
      { label: 'Best time', value: 'Dec – Apr, Jul – Sep' },
    ],
    gallery: [
      base.heroImage,
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519567241046-7f570eee3da3?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500534311731-49301a39d7dc?q=80&w=2080&auto=format&fit=crop'
    ],
    itinerary: [
      {
        day: `Day 1`,
        title: 'Arrival & Welcome',
        location: 'Colombo → Cultural Triangle',
        description:
          'Meet your private host on arrival. Transfer in comfort to your first boutique hotel. Sunset stroll and curated dinner reservation.'
      },
      {
        day: `Day 2–3`,
        title: 'Ancient Cities & Safaris',
        location: 'Sigiriya & Minneriya',
        description:
          'Climb Sigiriya Rock Fortress at golden hour, visit UNESCO sites and head out on an elephant-focused game drive with an expert ranger.'
      },
      {
        day: `Day 4–5`,
        title: 'Tea Country Slow Life',
        location: 'Hatton & Ella',
        description:
          'Scenic train ride through misty hills, private tea tasting, waterfall hikes and fireside aperitifs at your plantation bungalow.'
      },
      {
        day: `Day 6–${base.days - 1}`,
        title: 'Coastline & Cuisine',
        location: 'Galle & South Coast',
        description:
          'Explore Galle Fort with a historian, learn to cook with a local chef and unwind on palm-fringed beaches. Optional whale watching (seasonal).'
      },
      {
        day: `Day ${base.days}`,
        title: 'Depart',
        location: 'Colombo Airport',
        description: 'Private transfer to the airport and VIP assistance on departure.'
      }
    ],
    accommodations: [
      {
        name: 'Tea Trails Bungalow',
        image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=2080&auto=format&fit=crop',
        features: ['Butler service', 'Lake views', 'Gourmet dining']
      },
      {
        name: 'Boutique Beach Retreat',
        image: 'https://images.unsplash.com/photo-1501117716987-c8e998f57447?q=80&w=2080&auto=format&fit=crop',
        features: ['Oceanfront', 'Infinity pool', 'Spa']
      }
    ],
    activities: [
      'Guided fortress climb',
      'Safari game drive',
      'Scenic rail journey',
      'Tea tasting & blending',
      'Old town walking tour',
      'Optional whale watching'
    ],
    inclusions: [
      'Handpicked accommodations',
      'Private transport & driver-guide',
      'Daily breakfast; select lunches & dinners',
      'All entrance fees & permits',
      '24/7 on-trip support'
    ],
    exclusions: [
      'International flights',
      'Travel insurance',
      'Personal expenses & gratuities'
    ],
    faqs: [
      { q: 'Can the itinerary be customized?', a: 'Yes. Every element is fully customizable—pace, experiences, room types and route.' },
      { q: 'What level of hotels do you use?', a: 'We recommend refined boutique properties; options range from premium to ultra-luxe.' },
      { q: 'Is this family-friendly?', a: 'Absolutely. We tailor activities and rooming to your family’s preferences and ages.' }
    ],
    reviews: [
      { name: 'Amelia R.', text: 'Impeccably organized. We felt cared for throughout and loved every hotel choice.' },
      { name: 'Marcus T.', text: 'Perfect balance of culture and relaxation. The private guide made all the difference.' }
    ],
    contact: { email: 'hello@sithuma.travel', phone: '+94 11 234 5678' }
  }), [base]);

  const [enquiry, setEnquiry] = useState({ name: '', email: '', phone: '', start: '', end: '', adults: '2', children: '0', message: '' });
  const onChange = (k) => (e) => setEnquiry((s) => ({ ...s, [k]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(`Enquiry submitted for ${base.title}:\n${JSON.stringify(enquiry, null, 2)}`);
    setEnquiry({ name: '', email: '', phone: '', start: '', end: '', adults: '2', children: '0', message: '' });
  };

  return (
    <div className="pkg-page">
      <nav className="pkg-breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden>›</span>
        <Link to="/packages">Packages</Link>
        <span aria-hidden>›</span>
        <span className="current" aria-current="page">{base.title}</span>
      </nav>

      <header className="pkg-hero" aria-label={`${base.title} hero`}>
        <div className="pkg-hero-media">
          <img className="pkg-hero-img" src={base.heroImage || DEFAULT_IMG} alt={base.title} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=DEFAULT_IMG;}} />
          <div className="pkg-hero-overlay" />
        </div>
        <div className="pkg-hero-content">
          <p className="pkg-kicker">{details.tagline}</p>
          <h1 className="pkg-title">{base.title}</h1>
          <p className="pkg-summary">{details.summary}</p>
          <div className="pkg-hero-meta">
            <div className="chip" aria-label="duration">{base.days} days</div>
            <div className="chip" aria-label="price">{base.priceFrom}</div>
            <div className="chip" aria-label="best time">Best: Dec–Apr, Jul–Sep</div>
          </div>
          <div className="pkg-hero-actions">
            <a href="#enquiry" className="btn btn-primary">Enquire now</a>
            <a href="#itinerary" className="btn btn-ghost">View itinerary</a>
          </div>
        </div>
      </header>

      <main className="pkg-main">
        <section className="pkg-overview" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="section-title">Overview</h2>
          <div className="pkg-overview-grid">
            <div className="pkg-overview-left">
              <p className="lead">
                {details.summary}
              </p>
              <ul className="pkg-highlights" role="list">
                {base.highlights.map(h => (
                  <li key={h} className="pkg-highlight-item">{h}</li>
                ))}
              </ul>
            </div>
            <div className="pkg-overview-right" role="list" aria-label="Quick facts">
              {details.quickFacts.map(f => (
                <Fact key={f.label} label={f.label} value={f.value} />
              ))}
            </div>
          </div>
        </section>

        <section className="pkg-gallery" aria-labelledby="gallery-heading">
          <div className="section-head">
            <h2 id="gallery-heading" className="section-title">Gallery</h2>
            <p className="section-sub">A glimpse of the journey</p>
          </div>
          <div className="pkg-gallery-grid">
            {details.gallery.map((src, i) => (
              <figure key={src} className={`pkg-gallery-item${i === 0 ? ' span-2' : ''}`}>
                <img src={src || DEFAULT_IMG} className="pkg-gallery-img" alt={`Trip photo ${i + 1}`} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=DEFAULT_IMG;}} />
              </figure>
            ))}
          </div>
        </section>

        <section id="itinerary" className="pkg-itinerary" aria-labelledby="itinerary-heading">
          <h2 id="itinerary-heading" className="section-title">Itinerary</h2>
          <ol className="pkg-steps">
            {details.itinerary.map((s) => (
              <li key={s.day} className="pkg-step">
                <div className="step-head">
                  <span className="step-day">{s.day}</span>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-loc">{s.location}</p>
                </div>
                <p className="step-desc">{s.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="pkg-stays" aria-labelledby="stays-heading">
          <h2 id="stays-heading" className="section-title">Where you’ll stay</h2>
          <div className="pkg-stays-grid">
            {details.accommodations.map(a => (
              <article key={a.name} className="stay-card">
                <div className="stay-media">
                  <img src={a.image || DEFAULT_IMG} alt={a.name} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=DEFAULT_IMG;}} />
                </div>
                <div className="stay-body">
                  <h3 className="stay-title">{a.name}</h3>
                  <ul className="stay-features" role="list">
                    {a.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pkg-activities" aria-labelledby="activities-heading">
          <h2 id="activities-heading" className="section-title">Activities</h2>
          <ul className="pkg-chips" role="list">
            {details.activities.map(a => <li key={a} className="chip chip-outline">{a}</li>)}
          </ul>
        </section>

        <section className="pkg-map" aria-labelledby="map-heading">
          <h2 id="map-heading" className="section-title">Route map</h2>
          <div className="pkg-map-embed">
            <MapContainer src="https://frozilla-design.travelmap.net" height={520} />
          </div>
        </section>

        <section className="pkg-inclusions" aria-labelledby="inclusions-heading">
          <h2 id="inclusions-heading" className="section-title">What’s included</h2>
          <div className="pkg-inclusions-grid">
            <div>
              <h3 className="subhead">Inclusions</h3>
              <ul className="list-check" role="list">
                {details.inclusions.map(x => <li key={x}>{x}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="subhead">Exclusions</h3>
              <ul className="list-cross" role="list">
                {details.exclusions.map(x => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="pkg-reviews" aria-labelledby="reviews-heading">
          <h2 id="reviews-heading" className="section-title">Guest reviews</h2>
          <div className="reviews-grid">
            {details.reviews.map(r => (
              <blockquote key={r.name} className="review-card">
                <p>“{r.text}”</p>
                <footer>— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="faqs" className="pkg-faqs" aria-labelledby="faqs-heading">
          <h2 id="faqs-heading" className="section-title">FAQs</h2>
          <Accordion items={details.faqs} />
        </section>

        <section id="enquiry" className="pkg-enquiry" aria-labelledby="enquiry-heading">
          <h2 id="enquiry-heading" className="section-title">Plan your trip</h2>
          <form className="enquiry-form" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" value={enquiry.name} onChange={onChange('name')} required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={enquiry.email} onChange={onChange('email')} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" value={enquiry.phone} onChange={onChange('phone')} />
              </div>
              <div className="form-field">
                <label htmlFor="adults">Adults</label>
                <select id="adults" value={enquiry.adults} onChange={onChange('adults')}>
                  {Array.from({ length: 8 }, (_, i) => String(i + 1)).map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="children">Children</label>
                <select id="children" value={enquiry.children} onChange={onChange('children')}>
                  {Array.from({ length: 6 }, (_, i) => String(i)).map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="start">Start date</label>
                <input id="start" type="date" value={enquiry.start} onChange={onChange('start')} />
              </div>
              <div className="form-field">
                <label htmlFor="end">End date</label>
                <input id="end" type="date" value={enquiry.end} onChange={onChange('end')} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field full">
                <label htmlFor="message">Trip preferences</label>
                <textarea id="message" rows={4} value={enquiry.message} onChange={onChange('message')} placeholder="Tell us about your ideal pace, interests and hotel style" />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Send enquiry</button>
              <a className="btn btn-ghost" href={`mailto:${details.contact.email}`}>Email us</a>
              <a className="btn btn-ghost" href={`tel:${details.contact.phone.replace(/\s/g,'')}`}>Call {details.contact.phone}</a>
            </div>
            <p className="form-note">We reply within 24 hours. No obligation, secure and private.</p>
          </form>
        </section>
      </main>

      <div className="pkg-sticky-mobile">
        <a href="#enquiry" className="btn btn-primary">Enquire</a>
        <a href={`tel:${details.contact.phone.replace(/\s/g,'')}`} className="btn btn-ghost">Call</a>
      </div>
    </div>
  );
}
