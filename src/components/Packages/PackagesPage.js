import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Packages.css';
import { packagesData } from '../../data/packages';
import placeholderImg from '../../assets/package-placeholder.svg';

const IconCalendar = () => (
  <svg className="meta-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11.333 1.333V3.333M4.667 1.333V3.333M2 6H14M3.333 2.667H12.667C13.403 2.667 14 3.264 14 4V12.667C14 13.403 13.403 14 12.667 14H3.333C2.597 14 2 13.403 2 12.667V4C2 3.264 2.597 2.667 3.333 2.667Z" stroke="#030922" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTag = () => (
  <svg className="meta-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8.667 2H12a1.333 1.333 0 0 1 1.333 1.333v3.333a1.333 1.333 0 0 1-.39.943l-5.657 5.657a1.333 1.333 0 0 1-1.885 0L2.734 11.24a1.333 1.333 0 0 1 0-1.885L8.39 3.057A1.333 1.333 0 0 1 9.333 2.667V2Z" stroke="#030922" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10.333" cy="5" r="1" fill="#030922"/>
  </svg>
);

const IconCheck = () => (
  <svg className="highlight-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5.167 9.333L2.667 6.833 1.5 8l3.667 3.667L12.5 4.333 11.333 3.167 5.167 9.333Z" fill="#030922"/>
  </svg>
);

function parsePrice(value) {
  if (!value) return null;
  const n = parseInt(String(value).replace(/[^0-9]/g, ''), 10);
  return Number.isFinite(n) ? n : null;
}

export default function PackagesPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [expanded, setExpanded] = useState({});
  const [query, setQuery] = useState('');
  const [duration, setDuration] = useState('all'); // all | short | medium | long
  const [selectedTags, setSelectedTags] = useState(() => new Set());
  const [sort, setSort] = useState('relevance'); // relevance | daysAsc | daysDesc | priceAsc | priceDesc

  const pageSize = 9;
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));

  const uniqueTags = useMemo(() => {
    const counts = new Map();
    packagesData.forEach(p => {
      (p.highlights || []).forEach(h => counts.set(h, (counts.get(h) || 0) + 1));
    });
    return Array.from(counts.entries())
      .sort((a,b) => b[1]-a[1])
      .slice(0, 10)
      .map(([name]) => name);
  }, []);

  const toggleTag = (t) => {
    setSelectedTags(prev => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t); else next.add(t);
      return next;
    });
    setSearchParams({ page: '1' });
  };

  const filtered = useMemo(() => {
    let list = packagesData.slice();

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        (p.shortDescription || '').toLowerCase().includes(q) ||
        (p.details || '').toLowerCase().includes(q) ||
        (p.highlights || []).some(h => h.toLowerCase().includes(q))
      );
    }

    if (duration !== 'all') {
      list = list.filter(p => {
        const d = p.days || 0;
        if (duration === 'short') return d <= 7;
        if (duration === 'medium') return d >= 8 && d <= 10;
        return d >= 11; // long
      });
    }

    if (selectedTags.size) {
      list = list.filter(p => {
        const set = new Set(p.highlights || []);
        for (const t of selectedTags) if (!set.has(t)) return false;
        return true;
      });
    }

    if (sort !== 'relevance') {
      const cmp = {
        daysAsc: (a,b) => (a.days||0) - (b.days||0),
        daysDesc: (a,b) => (b.days||0) - (a.days||0),
        priceAsc: (a,b) => (parsePrice(a.priceFrom)||Infinity) - (parsePrice(b.priceFrom)||Infinity),
        priceDesc: (a,b) => (parsePrice(b.priceFrom)||-Infinity) - (parsePrice(a.priceFrom)||-Infinity),
      }[sort];
      list = list.slice().sort(cmp);
    }

    return list;
  }, [query, duration, selectedTags, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const sliceStart = (page - 1) * pageSize;
  const sliceEnd = sliceStart + pageSize;

  const goToPage = (p) => {
    const next = Math.min(totalPages, Math.max(1, p));
    setSearchParams({ page: String(next) });
  };

  const toggleExpand = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  const viewPackage = (packageId) => navigate(`/package/${packageId}`);

  return (
    <section id="packages" className="packages-section" aria-label="All Tour Packages">
      <div className="packages-container">
        <div className="packages-page-hero" role="region" aria-label="Packages overview">
          <span className="packages-badge">Packages</span>
          <div className="packages-hero-divider" aria-hidden="true"><span className="packages-divider-line"></span></div>
          <div className="packages-title-wrap">
            <div className="packages-decorative packages-decorative-left" aria-hidden="true">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_safari_icon)"><path d="M27.6345 12.7839C25.6725 13.0602 23.6945 13.2328 21.7325 13.4746C19.7707 13.7162 17.7927 13.8371 15.8307 13.9752C13.8723 14.2879 11.891 14.4036 9.91267 14.3204C7.88342 14.1376 5.89265 13.6192 4.01074 12.7839V12.3868C5.89265 11.5516 7.88342 11.0333 9.91267 10.8503C11.891 10.7672 13.8723 10.8828 15.8307 11.1956C17.7927 11.3337 19.7545 11.5063 21.7325 11.6963C23.7107 11.8862 25.6725 12.1106 27.6345 12.3868V12.7839Z" fill="#FCF8F7"/><path d="M7.9021 0.976394C7.45182 1.82237 6.93722 2.61655 6.45477 3.42799C5.97233 4.23944 5.42555 5.01635 4.84663 5.776C4.26769 6.53565 3.96214 7.50248 3.23848 8.00317C2.36858 8.57979 1.36619 8.8847 0.343826 8.88367L0.134766 8.64195C0.144877 7.54444 0.458312 6.47487 1.03533 5.56883C1.50169 4.72285 2.41833 4.39482 3.142 3.84235C3.86567 3.28988 4.6054 2.75467 5.36123 2.23673C6.11705 1.71878 6.88897 1.2181 7.70913 0.751953L7.9021 0.976394Z" fill="#FCF8F7"/><path d="M7.5799 24.7298C6.77582 24.2463 6.05215 23.6939 5.28022 23.1759C4.50831 22.6579 3.81681 22.0709 3.10921 21.4494C2.40162 20.8278 1.50105 20.4998 1.03468 19.7229C0.483483 18.7956 0.198279 17.7149 0.214525 16.6151L0.439666 16.3906C1.46275 16.3963 2.46042 16.7333 3.30218 17.3575C4.09018 17.8581 4.39573 18.8423 4.91035 19.6193C5.42496 20.3961 5.93957 21.1904 6.42202 22.0019C6.90447 22.8133 7.37083 23.642 7.80503 24.5053L7.5799 24.7298Z" fill="#FCF8F7"/></g><defs><clipPath id="clip0_safari_icon"><rect width="27.5" height="25" fill="white" transform="translate(0.134766 0.751953)"/></clipPath></defs></svg>
            </div>
            <h2 className="packages-title">All Packages</h2>
            <div className="packages-decorative packages-decorative-right" aria-hidden="true">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_safari_icon)"><path d="M27.6345 12.7839C25.6725 13.0602 23.6945 13.2328 21.7325 13.4746C19.7707 13.7162 17.7927 13.8371 15.8307 13.9752C13.8723 14.2879 11.891 14.4036 9.91267 14.3204C7.88342 14.1376 5.89265 13.6192 4.01074 12.7839V12.3868C5.89265 11.5516 7.88342 11.0333 9.91267 10.8503C11.891 10.7672 13.8723 10.8828 15.8307 11.1956C17.7927 11.3337 19.7545 11.5063 21.7325 11.6963C23.7107 11.8862 25.6725 12.1106 27.6345 12.3868V12.7839Z" fill="#FCF8F7"/><path d="M7.9021 0.976394C7.45182 1.82237 6.93722 2.61655 6.45477 3.42799C5.97233 4.23944 5.42555 5.01635 4.84663 5.776C4.26769 6.53565 3.96214 7.50248 3.23848 8.00317C2.36858 8.57979 1.36619 8.8847 0.343826 8.88367L0.134766 8.64195C0.144877 7.54444 0.458312 6.47487 1.03533 5.56883C1.50169 4.72285 2.41833 4.39482 3.142 3.84235C3.86567 3.28988 4.6054 2.75467 5.36123 2.23673C6.11705 1.71878 6.88897 1.2181 7.70913 0.751953L7.9021 0.976394Z" fill="#FCF8F7"/><path d="M7.5799 24.7298C6.77582 24.2463 6.05215 23.6939 5.28022 23.1759C4.50831 22.6579 3.81681 22.0709 3.10921 21.4494C2.40162 20.8278 1.50105 20.4998 1.03468 19.7229C0.483483 18.7956 0.198279 17.7149 0.214525 16.6151L0.439666 16.3906C1.46275 16.3963 2.46042 16.7333 3.30218 17.3575C4.09018 17.8581 4.39573 18.8423 4.91035 19.6193C5.42496 20.3961 5.93957 21.1904 6.42202 22.0019C6.90447 22.8133 7.37083 23.642 7.80503 24.5053L7.5799 24.7298Z" fill="#FCF8F7"/></g><defs><clipPath id="clip0_safari_icon"><rect width="27.5" height="25" fill="white" transform="translate(0.134766 0.751953)"/></clipPath></defs></svg>
            </div>
          </div>
          <div className="packages-hero-divider" aria-hidden="true"><span className="packages-divider-line"></span></div>
          <p className="packages-hero-subtitle">Browse our curated itineraries. Showing {Math.min(pageSize, filtered.length - sliceStart)} of {filtered.length}.</p>
          <div className="packages-toolbar" role="group" aria-label="Filters and sorting">
            <div className="packages-search">
              <label htmlFor="pkg-q" className="sr-only">Search packages</label>
              <input id="pkg-q" className="packages-search-input" type="search" placeholder="Search by title, highlight or description" value={query} onChange={(e)=>{ setQuery(e.target.value); setSearchParams({ page: '1' }); }} />
            </div>
            <div className="packages-filters" role="list" aria-label="Quick filters">
              <button className={`filter-chip${duration==='all' ? ' is-active' : ''}`} onClick={()=>{ setDuration('all'); setSearchParams({ page: '1' }); }}>All</button>
              <button className={`filter-chip${duration==='short' ? ' is-active' : ''}`} onClick={()=>{ setDuration('short'); setSearchParams({ page: '1' }); }} aria-label="Up to 7 days">≤7d</button>
              <button className={`filter-chip${duration==='medium' ? ' is-active' : ''}`} onClick={()=>{ setDuration('medium'); setSearchParams({ page: '1' }); }} aria-label="8 to 10 days">8–10d</button>
              <button className={`filter-chip${duration==='long' ? ' is-active' : ''}`} onClick={()=>{ setDuration('long'); setSearchParams({ page: '1' }); }} aria-label="11 days and above">11d+</button>
              <span className="filters-sep" aria-hidden>•</span>
              {uniqueTags.map(t => (
                <button key={t} className={`filter-chip${selectedTags.has(t) ? ' is-active' : ''}`} onClick={()=>toggleTag(t)}>{t}</button>
              ))}
            </div>
            <div className="packages-sort">
              <label htmlFor="pkg-sort" className="sr-only">Sort packages</label>
              <select id="pkg-sort" className="packages-sort-select" value={sort} onChange={(e)=>{ setSort(e.target.value); setSearchParams({ page: '1' }); }}>
                <option value="relevance">Relevance</option>
                <option value="daysAsc">Duration: Short to Long</option>
                <option value="daysDesc">Duration: Long to Short</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="packages-grid" role="list">
          {filtered.slice(sliceStart, sliceEnd).map((p) => (
            <article key={p.id} className="package-card" role="listitem">
              <div className="package-image-wrap">
                <img src={p.image || placeholderImg} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=placeholderImg;}} alt={p.title} className="package-image" />
                <div className="package-days" aria-label={`${p.days} days`}>{p.days} days</div>
              </div>
              <div className="package-content">
                <h3 className="package-title">{p.title}</h3>
                <div className="package-meta">
                  <span className="meta-item"><IconCalendar />{p.days} days</span>
                  <span className="meta-separator" aria-hidden="true">•</span>
                  <span className="meta-item"><IconTag />{p.priceFrom}</span>
                </div>
                <ul className="package-highlights">
                  {(p.highlights || []).map((h, i) => (
                    <li key={i} className="package-highlight"><IconCheck />{h}</li>
                  ))}
                </ul>
                <p className="package-description">{p.shortDescription}</p>
                {expanded[p.id] && (
                  <p className="package-details">{p.details}</p>
                )}
                <div className="package-actions">
                  <button className="package-see-more" onClick={() => toggleExpand(p.id)} aria-expanded={!!expanded[p.id]}>
                    {expanded[p.id] ? 'See less' : 'See more'}
                  </button>
                  <button className="package-view" onClick={() => viewPackage(p.id)}>
                    View Package
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="packages-pagination" role="navigation" aria-label="Pagination">
            <button className="packages-page-btn" onClick={() => goToPage(page - 1)} disabled={page === 1} aria-label="Previous page">Prev</button>
            <span className="packages-page-indicator">Page {page} of {totalPages}</span>
            <button className="packages-page-btn" onClick={() => goToPage(page + 1)} disabled={page === totalPages} aria-label="Next page">Next</button>
          </div>
        )}
      </div>
    </section>
  );
}
