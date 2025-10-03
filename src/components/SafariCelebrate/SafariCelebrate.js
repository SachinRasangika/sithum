import React, { useState, useRef, useEffect, useMemo } from 'react';
import './SafariCelebrate.css';

export default function SafariCelebrate() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [step, setStep] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragDelta, setDragDelta] = useState(0);
  const listRef = useRef(null);
  const containerRef = useRef(null);
  const dragStartX = useRef(0);

  const safariTypes = useMemo(() => [
    {
      id: 'honeymoons',
      title: 'Safari Honeymoons',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/2a5fccba655428edea91daad5c8fd4dd6f3e5f5c?width=993',
      alt: 'Romantic safari honeymoon experience'
    },
    {
      id: 'family',
      title: 'Family Safaris',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/446e2e988c3d0d48544b27a7a896bfb0300e890a?width=993',
      alt: 'Family-friendly safari adventures'
    },
    {
      id: 'beach',
      title: 'Safari & Beach',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/9225112b1d47fd10c9c4d0ae9b48561565c94b8e?width=993',
      alt: 'Combined safari and beach experience'
    },
    {
      id: 'luxury',
      title: 'Luxury Safaris',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=993&q=80',
      alt: 'Luxury safari experiences with premium accommodations'
    },
    {
      id: 'adventure',
      title: 'Adventure Safaris',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d040dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=993&q=80',
      alt: 'Thrilling adventure safari expeditions'
    },
    {
      id: 'wildlife',
      title: 'Wildlife Photography',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=993&q=80',
      alt: 'Specialized wildlife photography safaris'
    }
  ], []);

  useEffect(() => {
    const measure = () => {
      const listEl = listRef.current;
      const containerEl = containerRef.current;
      if (!listEl || !containerEl) return;
      const firstCard = listEl.querySelector('.safari-card');
      if (!firstCard) return;
      const cardRect = firstCard.getBoundingClientRect();
      const styles = window.getComputedStyle(listEl);
      const gapX = parseFloat(styles.columnGap || styles.gap || '0') || 0;
      const stepPx = cardRect.width + gapX;
      const containerWidth = containerEl.getBoundingClientRect().width;
      const visible = Math.max(1, Math.floor(containerWidth / stepPx));
      const max = Math.max(0, safariTypes.length - visible);
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
  }, [safariTypes.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));

  return (
    <section className="safari-celebrate-section" aria-label="Safari Celebrations">
      <div className="safari-celebrate-container">
        <div className="safari-celebrate-content">
          <div className="safari-celebrate-header">
            <h2 className="safari-celebrate-title">Safaris to celebrate</h2>
            <p className="safari-celebrate-subtitle">
              Special occasions call for special holidays. Speak to our experts today.
            </p>
            
            <div className="safari-celebrate-controls">
              <button 
                className="safari-control-button safari-control-prev"
                onClick={prevSlide}
                disabled={currentSlide === 0 && maxSlide > 0}
                aria-label="Previous safari type"
              >
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_103_500)">
                    <path d="M14.971 5.9228H1.6377M1.6377 5.9228L5.3414 10.1133M1.6377 5.9228L5.3414 2.11328" stroke="#FCF8F7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_103_500">
                      <rect width="16" height="10.6667" fill="white" transform="translate(0.304688 0.779297)"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
              
              <button 
                className="safari-control-button safari-control-next"
                onClick={nextSlide}
                aria-label="Next safari type"
              >
                <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_103_505)">
                    <path d="M1.6377 6.30376H14.971M14.971 6.30376L11.2673 2.11328M14.971 6.30376L11.2673 10.1133" stroke="#FCF8F7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_103_505">
                      <rect width="16" height="10.6667" fill="white" transform="translate(0.304688 0.779297)"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>

          <div className="safari-celebrate-enquire">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c67b95a33b1daa7196424f8f8c1cd80f8cd138d2?width=400"
              alt="Enquire now"
              className="safari-enquire-icon"
            />
          </div>
        </div>

        <div ref={containerRef} className="safari-celebrate-slider">
          <div
            ref={listRef}
            className={`safari-celebrate-list ${isDragging ? 'is-dragging' : ''}`}
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
            {safariTypes.map((safari) => (
              <div key={safari.id} className="safari-card">
                <div className="safari-card-image-container">
                  <img
                    src={safari.image}
                    alt={safari.alt}
                    className="safari-card-image"
                  />
                </div>
                <h3 className="safari-card-title">{safari.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
