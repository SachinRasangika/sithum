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
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.83496 14.6098C3.77358 14.4456 4.7168 14.3182 5.65911 14.191C6.29254 14.1054 6.92556 14.0199 7.55649 13.9234C8.92054 13.7146 10.2943 13.5965 11.6609 13.4791C11.8668 13.4614 12.0725 13.4437 12.278 13.4257C13.8447 13.1148 15.4297 12.9999 17.0124 13.0824C18.6358 13.2644 20.2284 13.7796 21.734 14.6098V15.0045C20.2284 15.8347 18.6358 16.3499 17.0124 16.5318C15.4297 16.6143 13.8447 16.4995 12.278 16.1886C10.7085 16.0512 9.13891 15.8796 7.55649 15.6909C5.97407 15.5022 4.40451 15.279 2.83496 15.0045V14.6098ZM18.6211 26.3456C18.8704 25.7638 19.1443 25.2065 19.4173 24.6512C19.5387 24.4041 19.6601 24.1572 19.779 23.9089C20.1649 23.1023 20.6023 22.3301 21.0654 21.5751C21.234 21.3003 21.3736 20.9983 21.5109 20.7012C21.7508 20.182 21.9838 19.678 22.352 19.3615C23.0479 18.7883 23.8498 18.4853 24.6678 18.4863L24.835 18.7265C24.8269 19.8174 24.5761 20.8805 24.1146 21.781C23.8539 22.3684 23.4176 22.7045 22.9808 23.041C22.7924 23.1862 22.6037 23.3315 22.4292 23.497C21.8503 24.0461 21.2585 24.5782 20.6538 25.093C20.0491 25.6078 19.4316 26.1054 18.7755 26.5687L18.6211 26.3456ZM20.0746 3.72668C19.6842 3.38609 19.2948 3.04635 18.8785 2.73535L18.6983 2.95844C19.0458 3.81644 19.4188 4.64012 19.8048 5.44664C20.1908 6.25317 20.6024 7.04253 21.0141 7.81473C21.1382 8.04755 21.2471 8.29911 21.356 8.55057C21.6083 9.13308 21.8603 9.7151 22.3007 10.0627C22.974 10.6831 23.7722 11.0181 24.5907 11.0237L24.7708 10.8006C24.7838 9.70745 24.5557 8.63333 24.1146 7.71177C23.8773 7.22058 23.4995 6.90992 23.1102 6.58986C22.8875 6.40676 22.661 6.22057 22.455 5.99577C21.889 5.378 21.3358 4.79456 20.7182 4.27976C20.5004 4.09817 20.2874 3.9123 20.0746 3.72668Z" fill="white"/>
              </svg>
            </div>
            
            <h2 className="service-title">Our Service</h2>
            
            <div className="decorative-icon decorative-icon-right" aria-hidden="true">
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.4307 15.1131C21.7973 15.1987 21.1642 15.2842 20.5333 15.3808C19.1693 15.5895 17.7955 15.7076 16.4289 15.8251C16.223 15.8428 16.0173 15.8605 15.8118 15.8784C14.2452 16.1893 12.6601 16.3042 11.0774 16.2216C9.45402 16.0398 7.86141 15.5246 6.35588 14.6943V14.2997C7.86141 13.4693 9.45402 12.9542 11.0774 12.7723C12.6601 12.6897 14.2452 12.8047 15.8118 13.1155C17.3813 13.2528 18.951 13.4244 20.5333 13.6132C22.1157 13.802 23.6854 14.025 25.2549 14.2997V14.6943C24.3163 14.8585 23.373 14.9859 22.4307 15.1131ZM9.46876 2.95843C9.21948 3.5403 8.94555 4.09753 8.67257 4.65284C8.55108 4.89997 8.42974 5.14679 8.31089 5.39517C7.92493 6.20169 7.48752 6.9739 7.02437 7.72894C6.85582 8.00371 6.71624 8.30576 6.57896 8.60282C6.33902 9.12204 6.10611 9.62605 5.73786 9.9426C5.04193 10.5157 4.24002 10.8188 3.42213 10.8178L3.25488 10.5775C3.26298 9.48666 3.51372 8.42356 3.97534 7.52302C4.23594 6.9357 4.67228 6.59954 5.10901 6.2631C5.29752 6.11787 5.48611 5.97257 5.66067 5.80701C6.2396 5.25788 6.83139 4.72592 7.43606 4.21112C8.04072 3.69632 8.65825 3.19867 9.31437 2.73535L9.46876 2.95843ZM8.01521 25.5773C8.40558 25.9179 8.795 26.2577 9.21136 26.5687L9.39147 26.3456C9.0441 25.4876 8.67101 24.6639 8.28505 23.8574C7.89909 23.0509 7.48741 22.2615 7.07571 21.4893C6.95159 21.2564 6.84266 21.0049 6.73378 20.7534C6.48154 20.1709 6.22951 19.5889 5.78919 19.2413C5.11577 18.6208 4.31763 18.2859 3.49917 18.2804L3.31906 18.5035C3.30606 19.5966 3.53422 20.6707 3.97518 21.5923C4.2125 22.0834 4.59037 22.3941 4.97964 22.7142C5.20235 22.8973 5.4288 23.0834 5.63481 23.3083C6.20088 23.926 6.75408 24.5095 7.37161 25.0243C7.58944 25.2059 7.80247 25.3917 8.01521 25.5773Z" fill="white"/>
              </svg>
            </div>
          </div>
          
          <p className="service-subtitle">
            Tailor-made Sri Lanka itineraries, crafted by our experts
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
