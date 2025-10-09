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
      <div className="our-worlds-header">
        <div className="section-title-container">
          <div className="decorative-icon decorative-icon-left" aria-hidden="true">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.05469 14.6899C3.99331 14.5257 4.93652 14.3983 5.87884 14.271C6.51226 14.1855 7.14528 14.1 7.77622 14.0035C9.14026 13.7946 10.5141 13.6766 11.8806 13.5591C12.0865 13.5415 12.2922 13.5238 12.4977 13.5058C14.0644 13.1949 15.6494 13.08 17.2321 13.1625C18.8555 13.3445 20.4482 13.8596 21.9537 14.6899V15.0846C20.4482 15.9148 18.8555 16.43 17.2321 16.6118C15.6494 16.6944 14.0644 16.5796 12.4977 16.2686C10.9282 16.1313 9.35864 15.9597 7.77622 15.771C6.19379 15.5822 4.62424 15.3591 3.05469 15.0846V14.6899ZM18.8408 26.4257C19.0901 25.8439 19.364 25.2866 19.637 24.7313C19.7585 24.4842 19.8798 24.2373 19.9987 23.989C20.3846 23.1824 20.8221 22.4102 21.2852 21.6551C21.4537 21.3804 21.5934 21.0784 21.7306 20.7813C21.9706 20.2621 22.2035 19.7581 22.5717 19.4416C23.2676 18.8684 24.0695 18.5653 24.8875 18.5663L25.0547 18.8066C25.0466 19.8974 24.7958 20.9606 24.3343 21.8611C24.0737 22.4484 23.6373 22.7846 23.2005 23.1211C23.0121 23.2663 22.8234 23.4116 22.6489 23.5771C22.07 24.1262 21.4782 24.6582 20.8735 25.173C20.2689 25.6878 19.6513 26.1855 18.9952 26.6488L18.8408 26.4257ZM20.2943 3.80676C19.9039 3.46617 19.5145 3.12643 19.0982 2.81543L18.9181 3.03852C19.2655 3.89652 19.6386 4.7202 20.0245 5.52672C20.4105 6.33325 20.8222 7.12261 21.2338 7.89481C21.358 8.12763 21.4669 8.37918 21.5758 8.63064C21.828 9.21316 22.08 9.79518 22.5204 10.1428C23.1938 10.7632 23.9919 11.0982 24.8104 11.1038L24.9905 10.8806C25.0035 9.78752 24.7754 8.71341 24.3344 7.79185C24.097 7.30066 23.7192 6.98999 23.3299 6.66994C23.1072 6.48684 22.8807 6.30065 22.6747 6.07585C22.1087 5.45808 21.5555 4.87464 20.9379 4.35984C20.7201 4.17825 20.5071 3.99237 20.2943 3.80676Z" fill="#FCF8F7"/>
            </svg>
          </div>
          <h2 className="section-title">Our Travel Destinations</h2>
          <div className="decorative-icon decorative-icon-right" aria-hidden="true">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.2305 15.1932C21.5971 15.2788 20.9641 15.3642 20.3331 15.4608C18.9691 15.6696 17.5954 15.7876 16.2288 15.9052L16.227 15.9052C16.0217 15.9229 15.8165 15.9405 15.6116 15.9585C14.045 16.2693 12.46 16.3843 10.8772 16.3017C9.25383 16.1198 7.66121 15.6047 6.15569 14.7744V14.3797C7.66121 13.5494 9.25383 13.0342 10.8772 12.8524C12.46 12.7698 14.045 12.8847 15.6116 13.1956C17.1812 13.3329 18.7508 13.5045 20.3331 13.6932C21.9156 13.8821 23.4852 14.1051 25.0547 14.3797V14.7744C24.1161 14.9386 23.1729 15.0659 22.2305 15.1932ZM9.26856 3.03851C9.01928 3.62038 8.74535 4.17761 8.47237 4.73291C8.35088 4.98005 8.22955 5.22687 8.11069 5.47525C7.72474 6.28177 7.28732 7.05398 6.82418 7.80902C6.65563 8.08379 6.51605 8.38584 6.37877 8.68289C6.13882 9.20212 5.90592 9.70613 5.53766 10.0227C4.84174 10.5958 4.03982 10.8989 3.22193 10.8979L3.05469 10.6576C3.06278 9.56674 3.31353 8.50364 3.77514 7.6031C4.03574 7.01578 4.47208 6.67962 4.90881 6.34318C5.09732 6.19795 5.28592 6.05265 5.46047 5.88709C6.03941 5.33796 6.6312 4.806 7.23586 4.2912C7.84052 3.7764 8.45805 3.27875 9.11417 2.81543L9.26856 3.03851ZM7.81501 25.6574C8.20538 25.998 8.5948 26.3377 9.01116 26.6488L9.19128 26.4256C8.84391 25.5676 8.47081 24.7439 8.08486 23.9374C7.6989 23.131 7.28721 22.3415 6.87552 21.5693C6.75139 21.3365 6.64247 21.085 6.53358 20.8335C6.28134 20.251 6.02932 19.669 5.589 19.3214C4.91558 18.7009 4.11743 18.3659 3.29898 18.3604L3.11886 18.5836C3.10586 19.6767 3.33402 20.7507 3.77499 21.6724C4.0123 22.1635 4.39017 22.4742 4.77944 22.7943C5.00215 22.9773 5.22861 23.1635 5.43461 23.3884C6.00068 24.0061 6.55389 24.5896 7.17142 25.1044C7.38925 25.286 7.60227 25.4718 7.81501 25.6574Z" fill="#FCF8F7"/>
            </svg>
          </div>
        </div>
      </div>


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
