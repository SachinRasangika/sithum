import React, { useEffect, useMemo, useRef, useState } from 'react';
import './OurWorlds.css';

export default function OurWorlds() {
  const [step, setStep] = useState(0);
  const viewportRef = useRef(null);
  const listRef = useRef(null);

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
      if (!listEl) return;
      const firstCard = listEl.querySelector('.destination-card');
      if (!firstCard) return;
      const cardRect = firstCard.getBoundingClientRect();
      const styles = window.getComputedStyle(listEl);
      const gapX = parseFloat(styles.columnGap || styles.gap || '0') || 0;
      const stepPx = cardRect.width + gapX;
      setStep(stepPx);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (listRef.current) ro.observe(listRef.current);
    window.addEventListener('orientationchange', measure);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('orientationchange', measure);
      window.removeEventListener('resize', measure);
    };
  }, []);

  const scrollNext = () => {
    const viewport = viewportRef.current;
    if (!viewport || !step) return;
    const atEnd = Math.ceil(viewport.scrollLeft + viewport.clientWidth + 1) >= viewport.scrollWidth;
    if (atEnd) {
      viewport.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      viewport.scrollBy({ left: step, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    const viewport = viewportRef.current;
    if (!viewport || !step) return;
    const atStart = viewport.scrollLeft <= 0;
    if (atStart) {
      const maxLeft = viewport.scrollWidth - viewport.clientWidth;
      viewport.scrollTo({ left: Math.max(0, maxLeft), behavior: 'smooth' });
    } else {
      viewport.scrollBy({ left: -step, behavior: 'smooth' });
    }
  };

  return (
    <section className="our-worlds-section" aria-label="Our Travel Destinations">


      <div className="section-divider"></div>

      <div className="destinations-container">
        <div ref={viewportRef} className="destinations-viewport" aria-label="Destinations carousel" role="region">
          <div ref={listRef} className="destinations-list">
            {destinations.map((destination) => (
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
        </div>

        <button
          className="carousel-button carousel-button-prev"
          onClick={scrollPrev}
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
          onClick={scrollNext}
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
