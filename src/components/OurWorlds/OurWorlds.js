import React, { useEffect, useMemo, useRef, useState } from 'react';
import './OurWorlds.css';

export default function OurWorlds() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [step, setStep] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const listRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDelta, setDragDelta] = useState(0);
  const dragStartX = useRef(0);

  const destinations = useMemo(() => [
    {
      id: 'cultural-triangle',
      title: 'Cultural Triangle',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/d97a19f6e0fd05b82ff53d7b778ea3c13a526c6b?width=993',
      alt: 'Sigiriya and ancient cities'
    },
    {
      id: 'hill-country',
      title: 'Hill Country',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/99713c0ce05e5ffd0a18cf83bddda473c57711f7?width=993',
      alt: 'Tea plantations and misty hills'
    },
    {
      id: 'wildlife-yala',
      title: 'Yala & Wildlife',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/0df1846e145424122a26358729525f9fb866a442?width=993',
      alt: 'Leopards and safaris in Yala'
    },
    {
      id: 'galle-south-coast',
      title: 'Galle & South Coast',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/6d524e8aa8a8e9c08843432dc1652cd3570fbf19?width=993',
      alt: 'Fort, beaches and sunset coastlines'
    },
    {
      id: 'east-coast',
      title: 'East Coast',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/644db230487d1ed57b8432191792ef0c13b462c3?width=993',
      alt: 'Trincomalee and Pasikudah beaches'
    },
    {
      id: 'jaffna-north',
      title: 'Jaffna & The North',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/810ee6505b64882920f0200b6b4fc9b6b6672ded?width=993',
      alt: 'Temples and remote islands'
    }
  ], []);

  useEffect(() => {
    const measure = () => {
      const listEl = listRef.current;
      const containerEl = containerRef.current;
      if (!listEl || !containerEl) return;
      const firstCard = listEl.querySelector('.destination-card');
      if (!firstCard) return;
      const cardRect = firstCard.getBoundingClientRect();
      const styles = window.getComputedStyle(listEl);
      const gapX = parseFloat(styles.columnGap || styles.gap || '0') || 0;
      const stepPx = cardRect.width + gapX;
      const containerWidth = containerEl.getBoundingClientRect().width;
      const visible = Math.max(1, Math.floor(containerWidth / stepPx));
      const max = Math.max(0, destinations.length - visible);
      setStep(stepPx);
      setMaxSlide(max);
      setCurrentSlide((prev) => Math.min(prev, max));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (listRef.current) ro.observe(listRef.current);
    window.addEventListener('orientationchange', measure);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', measure);
      window.removeEventListener('resize', measure);
    };
  }, [destinations.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));

  return (
    <section className="our-worlds-section" aria-label="Our Travel Destinations">
      <div className="our-worlds-background"></div>
      
      <div className="our-worlds-header">
        <div className="section-title-container">
          <div className="decorative-icon decorative-icon-left" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.13477 14.0199C4.07339 13.8558 5.0166 13.7283 5.95891 13.6011C6.59234 13.5156 7.22536 13.4301 7.8563 13.3335C9.22034 13.1247 10.5941 13.0067 11.9607 12.8892C12.1666 12.8715 12.3723 12.8538 12.5778 12.8359C14.1445 12.5249 15.7295 12.4101 17.3122 12.4926C18.9356 12.6745 20.5282 13.1897 22.0338 14.0199V14.4147C20.5282 15.2449 18.9356 15.76 17.3122 15.9419C15.7295 16.0245 14.1445 15.9096 12.5778 15.5987C11.0083 15.4614 9.43872 15.2898 7.8563 15.1011C6.27387 14.9123 4.70432 14.6892 3.13477 14.4147V14.0199Z" fill="#030D34"/>
            </svg>
          </div>
          
          <h2 className="section-title">Sri Lanka Regions</h2>
          
          <div className="decorative-icon decorative-icon-right" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.1504 14.5233C21.517 14.6089 20.884 14.6943 20.253 14.7909C18.889 14.9997 17.5152 15.1177 16.1487 15.2352C15.9428 15.2529 15.7371 15.2706 15.5316 15.2886C13.9649 15.5994 12.3799 15.7144 10.7972 15.6318C9.17375 15.4499 7.58113 14.9347 6.07561 14.1044V13.7098C7.58113 12.8795 9.17375 12.3643 10.7972 12.1825C12.3799 12.0999 13.9649 12.2148 15.5316 12.5257C17.1011 12.663 18.6707 12.8346 20.253 13.0233C21.8355 13.2121 23.4051 13.4352 24.9746 13.7098V14.1044C24.036 14.2687 23.0928 14.396 22.1504 14.5233Z" fill="#030D34"/>
            </svg>
          </div>
        </div>
        
        <p className="section-description">
          From the Cultural Triangle to the golden south coast, explore Sri Lanka’s most inspiring regions.
        </p>
      </div>
      
      <div className="section-divider"></div>

      <div ref={containerRef} className="destinations-container">
        <div
          ref={listRef}
          className={`destinations-list ${isDragging ? 'is-dragging' : ''}`}
          style={{ transform: `translateX(calc(-${currentSlide * step}px + ${dragDelta}px))` }}
          onPointerDown={(e) => {
            dragStartX.current = e.clientX;
            setIsDragging(true);
            setDragDelta(0);
            try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
          }}
          onPointerMove={(e) => {
            if (!isDragging) return;
            const delta = e.clientX - dragStartX.current;
            setDragDelta(delta);
          }}
          onPointerUp={(e) => {
            if (!isDragging) return;
            const threshold = Math.max(40, step * 0.25);
            if (dragDelta < -threshold) { setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1)); }
            else if (dragDelta > threshold) { setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1)); }
            setIsDragging(false);
            setDragDelta(0);
            try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
          }}
          onPointerCancel={() => { setIsDragging(false); setDragDelta(0); }}
          onPointerLeave={() => { if (isDragging) { setIsDragging(false); setDragDelta(0); } }}
        >
          {destinations.map((destination, index) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image-container">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className="destination-image"
                />
                <div className="destination-hover-cta">
                  <button type="button" className="destination-circle-button" aria-label={`View ${destination.title}`}>
                    <span className="destination-circle-text">{destination.title}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-button carousel-button-prev"
          onClick={prevSlide}
          aria-label="Previous destinations"
        >
          <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_103_151)">
              <path d="M15.72 5.26953C16.0355 5.27023 16.292 5.01496 16.2927 4.69937C16.2933 4.38379 16.0381 4.12737 15.7225 4.12668L15.72 5.26953ZM1.60381 4.26271C1.38016 4.48537 1.37936 4.84718 1.60202 5.07084L5.23048 8.71544C5.45315 8.9391 5.81495 8.9399 6.03861 8.71724C6.26226 8.49457 6.26307 8.13277 6.0404 7.90912L2.81509 4.66947L6.05475 1.44416C6.2784 1.2215 6.2792 0.85969 6.05654 0.636039C5.83388 0.412387 5.47207 0.411584 5.24842 0.634246L1.60381 4.26271ZM15.7225 4.12668L2.00824 4.09624L2.00571 5.2391L15.72 5.26953L15.7225 4.12668Z" fill="#272B25"/>
            </g>
            <defs>
              <clipPath id="clip0_103_151">
                <rect width="16" height="9.14286" fill="white" transform="translate(0.864258 0.111328)"/>
              </clipPath>
            </defs>
          </svg>
        </button>

        <button 
          className="carousel-button carousel-button-next"
          onClick={nextSlide}
          aria-label="Next destinations"
        >
          <svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_103_156)">
              <path d="M1.69741 4.11116C1.38181 4.11116 1.12598 4.367 1.12598 4.68259C1.12598 4.99818 1.38181 5.25402 1.69741 5.25402V4.11116ZM15.8158 5.08664C16.0389 4.86349 16.0389 4.50168 15.8158 4.27853L12.1792 0.641977C11.956 0.41882 11.5942 0.41882 11.3711 0.641977C11.1479 0.865133 11.1479 1.22694 11.3711 1.4501L14.6036 4.68259L11.3711 7.91508C11.1479 8.13823 11.1479 8.50004 11.3711 8.72319C11.5942 8.94636 11.956 8.94636 12.1792 8.72319L15.8158 5.08664ZM1.69741 5.25402H15.4117V4.11116H1.69741V5.25402Z" fill="#272B25"/>
            </g>
            <defs>
              <clipPath id="clip0_103_156">
                <rect width="16" height="9.14286" fill="white" transform="translate(0.554688 0.111328)"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

    </section>
  );
}
