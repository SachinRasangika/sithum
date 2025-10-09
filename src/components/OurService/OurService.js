import React, { useState } from 'react';
import './OurService.css';

export default function OurService() {
  const [activeTab, setActiveTab] = useState('tailor-made');

  const serviceData = {
    'tailor-made': {
      title: 'Tailor Made',
      description: 'Every holiday we create is tailor-made to suit you. We design your itinerary around your interests, preferences and travel style, ensuring a truly personalised experience.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e11d4684790e1ad10748820230f4cd5b51e66c52?width=1392',
      buttonText: 'find out more'
    },
    'expert-guides': {
      title: 'Expert Guides',
      description: 'Our carefully selected local guides bring destinations to life with their deep knowledge, cultural insights and passion for sharing their homeland with you.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e11d4684790e1ad10748820230f4cd5b51e66c52?width=1392',
      buttonText: 'meet our guides'
    },
    'price-promise': {
      title: 'Price Promise',
      description: 'We guarantee the best value for your luxury travel experience. If you find the same itinerary for less elsewhere, we will match or beat the price.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e11d4684790e1ad10748820230f4cd5b51e66c52?width=1392',
      buttonText: 'learn more'
    },
    'family-operated': {
      title: 'Family Operated',
      description: 'As a family-run business, we bring personal attention and care to every aspect of your journey, treating each guest like a member of our own family.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e11d4684790e1ad10748820230f4cd5b51e66c52?width=1392',
      buttonText: 'our story'
    },
    'carbon-offset': {
      title: 'Carbon Offset',
      description: 'We are committed to sustainable travel and offset the carbon footprint of all our trips, contributing to environmental conservation projects worldwide.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e11d4684790e1ad10748820230f4cd5b51e66c52?width=1392',
      buttonText: 'sustainability'
    },
    'charity-commitment': {
      title: 'Charity Commitment',
      description: 'Through our charitable partnerships, we support local communities and conservation efforts in the destinations we visit, ensuring travel benefits everyone.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/e11d4684790e1ad10748820230f4cd5b51e66c52?width=1392',
      buttonText: 'our impact'
    }
  };

  const tabs = [
    { id: 'tailor-made', label: 'TAILOR-MADE' },
    { id: 'expert-guides', label: 'EXPERT GUIDES' },
    { id: 'price-promise', label: 'PRICE PROMISE' },
    { id: 'family-operated', label: 'FAMILY OPERATED' },
    { id: 'carbon-offset', label: 'CARBON OFFSET' },
    { id: 'charity-commitment', label: 'CHARITY COMMITMENT' }
  ];

  const currentService = serviceData[activeTab];

  return (
    <section className="our-service-section" aria-label="Our Service">
      <div className="our-service-container">
        <div className="our-service-header">
          <div className="service-title-container">
            <div className="decorative-icon decorative-icon-left" aria-hidden="true">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_safari_icon)"><path d="M27.6345 12.7839C25.6725 13.0602 23.6945 13.2328 21.7325 13.4746C19.7707 13.7162 17.7927 13.8371 15.8307 13.9752C13.8723 14.2879 11.891 14.4036 9.91267 14.3204C7.88342 14.1376 5.89265 13.6192 4.01074 12.7839V12.3868C5.89265 11.5516 7.88342 11.0333 9.91267 10.8503C11.891 10.7672 13.8723 10.8828 15.8307 11.1956C17.7927 11.3337 19.7545 11.5063 21.7325 11.6963C23.7107 11.8862 25.6725 12.1106 27.6345 12.3868V12.7839Z" fill="#FCF8F7"/><path d="M7.9021 0.976394C7.45182 1.82237 6.93722 2.61655 6.45477 3.42799C5.97233 4.23944 5.42555 5.01635 4.84663 5.776C4.26769 6.53565 3.96214 7.50248 3.23848 8.00317C2.36858 8.57979 1.36619 8.8847 0.343826 8.88367L0.134766 8.64195C0.144877 7.54444 0.458312 6.47487 1.03533 5.56883C1.50169 4.72285 2.41833 4.39482 3.142 3.84235C3.86567 3.28988 4.6054 2.75467 5.36123 2.23673C6.11705 1.71878 6.88897 1.2181 7.70913 0.751953L7.9021 0.976394Z" fill="#FCF8F7"/><path d="M7.5799 24.7298C6.77582 24.2463 6.05215 23.6939 5.28022 23.1759C4.50831 22.6579 3.81681 22.0709 3.10921 21.4494C2.40162 20.8278 1.50105 20.4998 1.03468 19.7229C0.483483 18.7956 0.198279 17.7149 0.214525 16.6151L0.439666 16.3906C1.46275 16.3963 2.46042 16.7333 3.30218 17.3575C4.09018 17.8581 4.39573 18.8423 4.91035 19.6193C5.42496 20.3961 5.93957 21.1904 6.42202 22.0019C6.90447 22.8133 7.37083 23.642 7.80503 24.5053L7.5799 24.7298Z" fill="#FCF8F7"/></g><defs><clipPath id="clip0_safari_icon"><rect width="27.5" height="25" fill="white" transform="translate(0.134766 0.751953)"/></clipPath></defs></svg>
            </div>
            
            <h2 className="service-title">Our Service</h2>
            
            <div className="decorative-icon decorative-icon-right" aria-hidden="true">
              <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.4307 15.1131C21.7973 15.1987 21.1642 15.2842 20.5333 15.3808C19.1693 15.5895 17.7955 15.7076 16.4289 15.8251C16.223 15.8428 16.0173 15.8605 15.8118 15.8784C14.2452 16.1893 12.6601 16.3042 11.0774 16.2216C9.45402 16.0398 7.86141 15.5246 6.35588 14.6943V14.2997C7.86141 13.4693 9.45402 12.9542 11.0774 12.7723C12.6601 12.6897 14.2452 12.8047 15.8118 13.1155C17.3813 13.2528 18.951 13.4244 20.5333 13.6132C22.1157 13.802 23.6854 14.025 25.2549 14.2997V14.6943C24.3163 14.8585 23.373 14.9859 22.4307 15.1131ZM9.46876 2.95843C9.21948 3.5403 8.94555 4.09753 8.67257 4.65284C8.55108 4.89997 8.42974 5.14679 8.31089 5.39517C7.92493 6.20169 7.48752 6.9739 7.02437 7.72894C6.85582 8.00371 6.71624 8.30576 6.57896 8.60282C6.33902 9.12204 6.10611 9.62605 5.73786 9.9426C5.04193 10.5157 4.24002 10.8188 3.42213 10.8178L3.25488 10.5775C3.26298 9.48666 3.51372 8.42356 3.97534 7.52302C4.23594 6.9357 4.67228 6.59954 5.10901 6.2631C5.29752 6.11787 5.48611 5.97257 5.66067 5.80701C6.2396 5.25788 6.83139 4.72592 7.43606 4.21112C8.04072 3.69632 8.65825 3.19867 9.31437 2.73535L9.46876 2.95843ZM8.01521 25.5773C8.40558 25.9179 8.795 26.2577 9.21136 26.5687L9.39147 26.3456C9.0441 25.4876 8.67101 24.6639 8.28505 23.8574C7.89909 23.0509 7.48741 22.2615 7.07571 21.4893C6.95159 21.2564 6.84266 21.0049 6.73378 20.7534C6.48154 20.1709 6.22951 19.5889 5.78919 19.2413C5.11577 18.6208 4.31763 18.2859 3.49917 18.2804L3.31906 18.5035C3.30606 19.5966 3.53422 20.6597 3.98573 21.5501C4.23594 22.1174 4.65903 22.4435 5.08251 22.7696C5.26762 22.9048 5.45281 23.0401 5.62407 23.1957C6.18977 23.7248 6.76829 24.2368 7.36001 24.7316C7.95173 25.2264 8.55665 25.7039 9.19848 26.1475L8.01521 25.5773Z" fill="white" />
              </svg>
            </div>
          </div>
          
          <p className="service-subtitle">
            Tailor-made itineraries, crafted by our experts
          </p>
        </div>

        <div className="service-content">
          <div className="tab-navigation">
            <div className="tab-list" role="tablist">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="tab-content">
            <div 
              className="tab-panel"
              role="tabpanel"
              id={`panel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
            >
              <div className="service-image-container">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="service-image"
                />
              </div>
              
              <div className="service-text-content">
                <h3 className="service-content-title">{currentService.title}</h3>
                <p className="service-description">{currentService.description}</p>
                <button className="service-cta-button">
                  {currentService.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
