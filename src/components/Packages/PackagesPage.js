import React, { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Packages.css';
import { packagesData } from '../../data/packages';
import placeholderImg from '../../assets/package-placeholder.svg';

const IconCalendar = () => (
  <svg className="meta-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11.333 1.333V3.333M4.667 1.333V3.333M2 6H14M3.333 2.667H12.667C13.403 2.667 14 3.264 14 4V12.667C14 13.403 13.403 14 12.667 14H3.333C2.597 14 2 13.403 2 12.667V4C2 3.264 2.597 2.667 3.333 2.667Z" stroke="#FCF8F7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconTag = () => (
  <svg className="meta-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8.667 2H12a1.333 1.333 0 0 1 1.333 1.333v3.333a1.333 1.333 0 0 1-.39.943l-5.657 5.657a1.333 1.333 0 0 1-1.885 0L2.734 11.24a1.333 1.333 0 0 1 0-1.885L8.39 3.057A1.333 1.333 0 0 1 9.333 2.667V2Z" stroke="#FCF8F7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10.333" cy="5" r="1" fill="#FCF8F7"/>
  </svg>
);

const IconCheck = () => (
  <svg className="highlight-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5.167 9.333L2.667 6.833 1.5 8l3.667 3.667L12.5 4.333 11.333 3.167 5.167 9.333Z" fill="#FCF8F7"/>
  </svg>
);

export default function PackagesPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [expanded, setExpanded] = useState({});
  const pageSize = 9;
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10));

  const totalPages = Math.max(1, Math.ceil(packagesData.length / pageSize));
  const { sliceStart, sliceEnd } = useMemo(() => ({
    sliceStart: (page - 1) * pageSize,
    sliceEnd: (page - 1) * pageSize + pageSize,
  }), [page]);

  const goToPage = (p) => {
    const next = Math.min(totalPages, Math.max(1, p));
    setSearchParams({ page: String(next) });
  };

  const toggleExpand = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  const viewPackage = (packageId) => navigate(`/package/${packageId}`);

  return (
    <section id="packages" className="packages-section" aria-label="All Tour Packages">
      <div className="packages-container">
        <div className="packages-header">
          <div className="packages-title-wrap">
            <div className="packages-decorative packages-decorative-left" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.13477 14.0199C4.07339 13.8558 5.0166 13.7283 5.95891 13.6011C6.59234 13.5156 7.22536 13.4301 7.8563 13.3335C9.22034 13.1247 10.5941 13.0067 11.9607 12.8892C12.1666 12.8715 12.3723 12.8538 12.5778 12.8359C14.1445 12.5249 15.7295 12.4101 17.3122 12.4926C18.9356 12.6745 20.5282 13.1897 22.0338 14.0199V14.4147C20.5282 15.2449 18.9356 15.76 17.3122 15.9419C15.7295 16.0245 14.1445 15.9096 12.5778 15.5987C11.0083 15.4614 9.43872 15.2898 7.8563 15.1011C6.27387 14.9123 4.70432 14.6892 3.13477 14.4147V14.0199Z" fill="#FCF8F7"/></svg>
            </div>
            <h2 className="packages-title">All Packages</h2>
            <div className="packages-decorative packages-decorative-right" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M22.1504 14.5233C21.517 14.6089 20.884 14.6943 20.253 14.7909C18.889 14.9997 17.5152 15.1177 16.1487 15.2352C15.9428 15.2529 15.7371 15.2706 15.5316 15.2886C13.9649 15.5994 12.3799 15.7144 10.7972 15.6318C9.17375 15.4499 7.58113 14.9347 6.07561 14.1044V13.7098C7.58113 12.8795 9.17375 12.3643 10.7972 12.1825C12.3799 12.0999 13.9649 12.2148 15.5316 12.5257C17.1011 12.663 18.6707 12.8346 20.253 13.0233C21.8355 13.2121 23.4051 13.4352 24.9746 13.7098V14.1044C24.036 14.2687 23.0928 14.396 22.1504 14.5233Z" fill="#FCF8F7"/></svg>
            </div>
          </div>
          <p className="packages-subtitle">Browse all our curated itineraries. Showing {Math.min(pageSize, packagesData.length - sliceStart)} of {packagesData.length}.</p>
        </div>

        <div className="packages-grid" role="list">
          {packagesData.slice(sliceStart, sliceEnd).map((p) => (
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
                  {p.highlights.map((h, i) => (
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
