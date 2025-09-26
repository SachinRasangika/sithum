import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PackageDetail.css';
import './PackageDetailNew.css';

const packagesData = {
  'ct-wildlife-beach': {
    id: 'ct-wildlife-beach',
    title: 'Timeless Kenya',
    location: 'Masai Mara & Lamu',
    duration: '7 nights from £2,780 per person',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/deed9e92130aa641227b8f4a045b13a0280cae29?width=1920',
    locationLabel: 'The Masai Mara',
    description: 'This 7-night itinerary offers a timeless safari experience, starting with 3 nights at Offbeat Mara, a traditional tented camp found in Masai Mara\'s Mara North Conservancy, before venturing to Kenya\'s northern coastline for a journey back in time to the ever-trending Lamu. Enjoy 4 nights at the renowned Peponi Hotel.',
    highlights: [
      'Embark on a thrilling adventure through the iconic Masai Mara and come face-to-face with the Big 5.',
      'Witness the awe-inspiring spectacle of the Great Migration.',
      'Soar high above the Masai Mara in a thrilling hot-air balloon.',
      'Immerse yourself in the vibrant culture of the Maasai people.',
      'Seamlessly transition from safari to the beach.',
      'Explore the captivating UNESCO Heritage Site of Lamu Town.',
      'Scuba dive into the depths of adventure.',
      'Set off in search of a blue marlin when deep sea fishing.',
      'Indulge your senses in Africa\'s finest cuisine.'
    ],
    itinerary: [
      {
        day: '1-4',
        title: 'Offbeat Mara',
        location: 'Masai Mara, Kenya',
        description: 'Offbeat Mara is a small, traditional tented camp located on the Olare Orok River within the 74,000 acre Mara North Conservancy. With just seven tents the camp offers a truly authentic safari experience known for excellent service, expert guides, delicious food and access to the Masai Mara National Reserve.',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/f987d50004730497e1e5e86a39bd8bb93437efa5?width=1056',
          'https://api.builder.io/api/v1/image/assets/TEMP/07bc5ea4e88f2a767be3fd450818ab7707dc1639?width=990',
          'https://api.builder.io/api/v1/image/assets/TEMP/646bdc996feac051b9d57cb79ff968205446535f?width=1222',
          'https://api.builder.io/api/v1/image/assets/TEMP/b497a8c110791e0a3eeb97e37c06021fc922c219?width=990',
          'https://api.builder.io/api/v1/image/assets/TEMP/caacd25803e6fed084df2c2843a8b05338fcc577?width=990'
        ]
      },
      {
        day: '4-8',
        title: 'Peponi Hotel',
        location: 'Lamu Archipelago, Kenya',
        description: 'Peponi Hotel is situated on the pristine shores of Shela Beach on Lamu Island. This boutique hotel offers an authentic Swahili experience with traditional dhow sailing, cultural excursions, and world-class cuisine in an intimate setting.',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/646bdc996feac051b9d57cb79ff968205446535f?width=1222'
        ]
      }
    ],
    mapImage: 'https://api.builder.io/api/v1/image/assets/TEMP/823a3eea6daa40ecab13e9d3a04a943b690d0466?width=1441'
  },
  'tea-trails-coast': {
    id: 'tea-trails-coast',
    title: 'Tea Trails & South Coast Bliss',
    location: 'Hatton Tea Country & Weligama Coast',
    duration: '8 nights from £1,650 per person',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/b2b1a5b49b0e4f0ebc2c8f1a7e9cf4a1a84a0b11?width=1600',
    locationLabel: 'Sri Lanka Highlands',
    description: 'Slow-paced escape between misty tea plantations and palm-fringed bays with boutique stays and excellent dining.',
    highlights: [
      'Stay in heritage bungalows amid tea gardens',
      'Take the famed Ella train through mountain landscapes',
      'Hike to spectacular waterfalls',
      'Unwind on the south coast with snorkeling',
      'Experience surf lessons in Weligama',
      'Enjoy sunset dinners on the bay'
    ],
    itinerary: [
      {
        day: '1-4',
        title: 'Ceylon Tea Trails',
        location: 'Hatton, Sri Lanka',
        description: 'Four nights in restored colonial bungalows surrounded by tea gardens.',
        images: ['https://api.builder.io/api/v1/image/assets/TEMP/f987d50004730497e1e5e86a39bd8bb93437efa5?width=1056']
      },
      {
        day: '5-8',
        title: 'Cape Weligama',
        location: 'Weligama Bay, Sri Lanka',
        description: 'Four nights of luxury beachfront relaxation.',
        images: ['https://api.builder.io/api/v1/image/assets/TEMP/07bc5ea4e88f2a767be3fd450818ab7707dc1639?width=990']
      }
    ],
    mapImage: 'https://api.builder.io/api/v1/image/assets/TEMP/823a3eea6daa40ecab13e9d3a04a943b690d0466?width=1441'
  },
  'family-adventure': {
    id: 'family-adventure',
    title: 'Family Adventure Sri Lanka',
    location: 'Udawalawe Elephants & Galle Fort',
    duration: '10 nights from £2,150 per person',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/7a7f8d4df4b247a6a0e8a07bc3f2cd7a131c1b50?width=1600',
    locationLabel: 'Sri Lanka Family Tour',
    description: 'Fun-filled itinerary balancing wildlife, culture and beach time; perfect for families with kids of all ages.',
    highlights: [
      'Spot elephants in Udawalawe National Park',
      'Cycle the ramparts of Galle Fort',
      'Go whale watching in Mirissa',
      'Visit traditional spice gardens',
      'Experience cultural shows in Kandy',
      'Relax in family-friendly beach resorts'
    ],
    itinerary: [
      {
        day: '1-4',
        title: 'Hotel Elephant Bay',
        location: 'Udawalawe, Sri Lanka',
        description: 'Family-friendly hotel near the national park.',
        images: ['https://api.builder.io/api/v1/image/assets/TEMP/646bdc996feac051b9d57cb79ff968205446535f?width=1222']
      },
      {
        day: '5-10',
        title: 'Anantara Peace Haven',
        location: 'Tangalle, Sri Lanka',
        description: 'Luxury family resort with kids club and beach access.',
        images: ['https://api.builder.io/api/v1/image/assets/TEMP/caacd25803e6fed084df2c2843a8b05338fcc577?width=990']
      }
    ],
    mapImage: 'https://api.builder.io/api/v1/image/assets/TEMP/823a3eea6daa40ecab13e9d3a04a943b690d0466?width=1441'
  }
};

export default function PackageDetail() {
  const { packageId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [selectedMonth, setSelectedMonth] = useState('jan');
  const [galleryCurrentIndex, setGalleryCurrentIndex] = useState(0);

  const packageData = packagesData[packageId];

  if (!packageData) {
    return (
      <div className="package-not-found">
        <h1>Package not found</h1>
        <Link to="/">Return to homepage</Link>
      </div>
    );
  }

  const nextImage = (dayIndex) => {
    const images = packageData.itinerary[dayIndex]?.images || [];
    if (images.length <= 1) return;
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [dayIndex]: ((prev[dayIndex] || 0) + 1) % images.length
    }));
  };

  const prevImage = (dayIndex) => {
    const images = packageData.itinerary[dayIndex]?.images || [];
    if (images.length <= 1) return;
    
    setCurrentImageIndex(prev => ({
      ...prev,
      [dayIndex]: ((prev[dayIndex] || 0) - 1 + images.length) % images.length
    }));
  };

  const DecorativeIcon = () => (
    <svg width="28" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_111_1011)">
        <path d="M28.1902 13.0017C26.2282 13.2779 24.2502 13.4506 22.2882 13.6923C20.3263 13.934 18.3483 14.0548 16.3863 14.193C14.4279 14.5057 12.4467 14.6213 10.4683 14.5382C8.43908 14.3553 6.44832 13.837 4.56641 13.0017V12.6046C6.44832 11.7693 8.43908 11.251 10.4683 11.0681C12.4467 10.985 14.4279 11.1006 16.3863 11.4134C18.3483 11.5515 20.3102 11.7241 22.2882 11.914C24.2663 12.1039 26.2282 12.3284 28.1902 12.6046V13.0017Z" fill="#030D34"/>
        <path d="M8.45679 1.19417C8.0065 2.04014 7.4919 2.83433 7.00945 3.64576C6.52702 4.45721 5.98024 5.23413 5.40132 5.99378C4.82238 6.75343 4.51683 7.72025 3.79317 8.22094C2.92327 8.79756 1.92087 9.10248 0.898513 9.10144L0.689453 8.85973C0.699565 7.76221 1.013 6.69264 1.59002 5.7866C2.05638 4.94063 2.97302 4.61259 3.69669 4.06013C4.42035 3.50765 5.16009 2.97244 5.91592 2.4545C6.67174 1.93656 7.44365 1.43588 8.26382 0.969727L8.45679 1.19417Z" fill="#030D34"/>
        <path d="M8.13556 24.9485C7.33149 24.465 6.60781 23.9126 5.83589 23.3946C5.06397 22.8766 4.37247 22.2896 3.66487 21.6681C2.95729 21.0465 2.05671 20.7185 1.59035 19.9416C1.03915 19.0144 0.753943 17.9336 0.770189 16.8339L0.995331 16.6094C2.01841 16.615 3.01609 16.952 3.85785 17.5763C4.64585 18.0769 4.9514 19.061 5.46601 19.838C5.98062 20.6149 6.49524 21.4091 6.97769 22.2206C7.46014 23.032 7.9265 23.8608 8.3607 24.724L8.13556 24.9485Z" fill="#030D34"/>
      </g>
      <defs>
        <clipPath id="clip0_111_1011">
          <rect width="27.5" height="25" fill="white" transform="translate(0.689453 0.969727)"/>
        </clipPath>
      </defs>
    </svg>
  );

  const PlaneIcon = () => (
    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.2972 7.05688C13.0956 7.12747 12.6337 7.3476 12.2709 7.54628C11.482 7.97805 11.2814 8.21939 11.2814 8.73608C11.2814 9.39547 11.3793 9.49919 12.9774 10.5365C13.7761 11.0549 14.43 11.495 14.4305 11.5147C14.4312 11.5344 13.6547 11.853 12.705 12.2226L10.9782 12.8948L9.53559 12.2682C8.7421 11.9236 7.97509 11.6256 7.83113 11.6062C7.54226 11.5674 7.26071 11.6871 6.19486 12.3029C5.46612 12.724 5.25391 12.9971 5.25391 13.5138C5.25391 13.8736 5.3841 14.1945 5.61154 14.3956C5.77075 14.5365 10.1145 17.2848 10.4307 17.4448C10.7957 17.6292 11.2284 17.5202 13.2911 16.7229C14.3765 16.3035 15.2724 15.9684 15.2824 15.9782C15.2923 15.988 15.0031 16.7542 14.6394 17.6807C14.0564 19.1664 13.9824 19.4062 14.0124 19.7115C14.0707 20.3065 14.4852 20.6969 15.1123 20.7478C15.4689 20.7768 15.5711 20.7468 16.249 20.4139C16.6588 20.2128 17.0955 19.9432 17.2195 19.8147C17.3436 19.6862 18.1631 18.297 19.0407 16.7275L20.6362 13.8739L22.7906 12.9397C23.9754 12.4261 25.069 11.9095 25.2206 11.792C25.3869 11.6632 25.5909 11.3907 25.7341 11.1062C25.9342 10.7088 25.971 10.5567 25.9672 10.1463C25.956 8.96256 25.0217 8.07301 23.7892 8.07301C23.3979 8.07301 23.101 8.16987 21.1127 8.94543C19.8825 9.42518 18.8412 9.81721 18.7988 9.81657C18.7562 9.81594 17.7648 9.22663 16.5957 8.50693C15.4266 7.78724 14.3875 7.15717 14.2867 7.10665C13.9512 6.93831 13.6758 6.9246 13.2972 7.05688Z" fill="#030922"/>
    </svg>
  );

  return (
    <div className="package-detail">
      {/* Hero Section */}
      <section className="package-hero-section">
        <div className="package-hero-container">
          {/* Breadcrumb */}
          <nav className="breadcrumb-nav">
            <Link to="/" className="breadcrumb-link">Itineraries</Link>
            <span className="breadcrumb-separator">></span>
            <span className="breadcrumb-current">{packageData.title}</span>
          </nav>

          <div className="hero-content-grid">
            <div className="hero-left-content">
              <div className="itinerary-badge">itinerary</div>
              
              <h1 className="hero-title">{packageData.title}</h1>
              <DecorativeIcon />

              <div className="package-info">
                <div className="info-group">
                  <label className="info-label">location</label>
                  <p className="info-value">{packageData.location}</p>
                </div>
                
                <div className="info-group">
                  <label className="info-label">duration</label>
                  <p className="info-value">{packageData.duration}</p>
                </div>
              </div>

              <p className="hero-description">{packageData.description}</p>
            </div>

            <div className="hero-right-content">
              <div className="hero-image-container">
                <img src={packageData.image} alt={packageData.title} className="hero-image" />
                <div className="image-location-tag">
                  <svg width="13" height="27" viewBox="0 0 13 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_111_1024" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="7" width="13" height="13">
                      <path d="M12.5 7.41992H0V19.9199H12.5V7.41992Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_111_1024)">
                      <path d="M10 12.1626C10 13.7435 8.18758 15.9693 7.08275 17.1793C6.62988 17.6752 5.87012 17.6752 5.41725 17.1793C4.31242 15.9693 2.5 13.7435 2.5 12.1626C2.5 11.0705 2.89509 10.0232 3.59835 9.25095C4.30161 8.47875 5.25544 8.04492 6.25 8.04492C7.24456 8.04492 8.19839 8.47875 8.90165 9.25095C9.60491 10.0232 10 11.0705 10 12.1626Z" fill="white"/>
                      <path d="M2.5 19.2949H10.8333" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                  </svg>
                  <span>{packageData.locationLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="package-navigation">
        <div className="nav-container">
          <button 
            className={`nav-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`nav-button ${activeTab === 'itinerary' ? 'active' : ''}`}
            onClick={() => setActiveTab('itinerary')}
          >
            Itinerary
          </button>
          <button 
            className={`nav-button ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            Gallery
          </button>
          <button 
            className={`nav-button ${activeTab === 'when-to-go' ? 'active' : ''}`}
            onClick={() => setActiveTab('when-to-go')}
          >
            When to go
          </button>
          <button 
            className={`nav-button ${activeTab === 'prices' ? 'active' : ''}`}
            onClick={() => setActiveTab('prices')}
          >
            Prices
          </button>
        </div>
      </section>

      {/* Content Area */}
      <div className="package-main-content">
        <div className="content-container">
          {activeTab === 'overview' && (
            <>
              {/* Highlights Section */}
              <section className="highlights-content">
                <div className="highlights-wrapper">
                  <div className="section-title-group">
                    <h2 className="section-title">Highlights</h2>
                    <DecorativeIcon />
                  </div>
                  
                  <div className="highlights-box">
                    <ul className="highlights-grid">
                      {packageData.highlights.map((highlight, index) => (
                        <li key={index} className="highlight-point">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Map Container */}
                <div className="map-container">
                  <img 
                    src={packageData.mapImage} 
                    alt="Destination Map" 
                    className="destination-map"
                  />
                </div>
              </section>

              {/* What you'll see Section */}
              <section className="gallery-content">
                <div className="section-title-group">
                  <h2 className="section-title">What you'll see</h2>
                  <DecorativeIcon />
                </div>

                <div className="gallery-carousel-container">
                  <div className="gallery-images-wrapper">
                    <div className="gallery-images-track" style={{transform: `translateX(-${galleryCurrentIndex * 100}%)`}}>
                      {[
                        'https://api.builder.io/api/v1/image/assets/TEMP/71acbdd75b47f16802064f9ddbe061ffdd3dff5e?width=1244',
                        'https://api.builder.io/api/v1/image/assets/TEMP/5be32ac48494bd3466f435ba75640b82eb469def?width=1050',
                        'https://api.builder.io/api/v1/image/assets/TEMP/f52a7ac814b059679e4dab4df7c409d0ee396827?width=1069',
                        'https://api.builder.io/api/v1/image/assets/TEMP/4c63083c228f49b04d367f319ff0ab506426154c?width=1050',
                        'https://api.builder.io/api/v1/image/assets/TEMP/88c5a1f1a59386256b143f4e251ba7f08c6542b3?width=1049'
                      ].map((img, index) => (
                        <img key={index} src={img} alt={`Safari landscape ${index + 1}`} className="gallery-carousel-image" />
                      ))}
                    </div>
                  </div>

                  <button
                    className="gallery-nav-button gallery-nav-prev"
                    onClick={() => setGalleryCurrentIndex(prev => prev > 0 ? prev - 1 : 4)}
                    aria-label="Previous image"
                  >
                    <svg width="16" height="9" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.6067 6.11719C15.9222 6.11789 16.1787 5.86262 16.1794 5.54703C16.1801 5.23144 15.9249 4.97503 15.6092 4.97433L15.6067 6.11719ZM1.49053 5.11037C1.26688 5.33303 1.26608 5.69484 1.48874 5.91849L5.1172 9.5631C5.33987 9.78676 5.70167 9.78756 5.92533 9.56489C6.14897 9.34223 6.14979 8.98043 5.92712 8.75678L2.70181 5.51712L5.94147 2.29182C6.16512 2.06915 6.16592 1.70735 5.94326 1.4837C5.7206 1.26004 5.35879 1.25924 5.13513 1.4819L1.49053 5.11037ZM15.6092 4.97433L1.89496 4.9439L1.89243 6.08676L15.6067 6.11719L15.6092 4.97433Z" fill="#272B25"/>
                    </svg>
                  </button>

                  <button
                    className="gallery-nav-button gallery-nav-next"
                    onClick={() => setGalleryCurrentIndex(prev => prev < 4 ? prev + 1 : 0)}
                    aria-label="Next image"
                  >
                    <svg width="16" height="9" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.39174 4.95881C1.07615 4.95881 0.820312 5.21465 0.820312 5.53024C0.820312 5.84583 1.07615 6.10167 1.39174 6.10167V4.95881ZM15.5101 5.9343C15.7332 5.71115 15.7332 5.34934 15.5101 5.12619L11.8736 1.48963C11.6504 1.26648 11.2886 1.26648 11.0654 1.48963C10.8423 1.71279 10.8423 2.0746 11.0654 2.29775L14.2979 5.53024L11.0654 8.76273C10.8423 8.98589 10.8423 9.34769 11.0654 9.57085C11.2886 9.79401 11.6504 9.79401 11.8736 9.57085L15.5101 5.9343ZM1.39174 6.10167H15.106V4.95881H1.39174V6.10167Z" fill="#272B25"/>
                    </svg>
                  </button>
                </div>
              </section>

              {/* When to go Section */}
              <section className="when-to-go-content">
                <div className="section-title-group">
                  <h2 className="section-title">When to go</h2>
                  <DecorativeIcon />
                </div>

                <div className="month-tabs-container">
                  {['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'].map((month) => (
                    <button
                      key={month}
                      className={`month-tab ${selectedMonth === month ? 'active' : ''}`}
                      onClick={() => setSelectedMonth(month)}
                    >
                      {month}
                    </button>
                  ))}
                </div>

                <div className="weather-info-container">
                  <div className="weather-stats">
                    <div className="weather-stat">
                      <span className="stat-label">Temp</span>
                      <div className="stat-value-container">
                        <div className="temp-icon">
                          <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="13.17" cy="13.35" r="12.5" fill="#FF6275"/>
                            <circle cx="13.17" cy="13.35" r="2.9" stroke="#FCF8F7" strokeWidth="1.6"/>
                            <path d="M13.17 7.55V8.44M13.17 18.26V19.15M18.97 13.35H18.08M8.26 13.35H7.37M17.28 9.24L16.64 9.88M9.7 16.82L9.06 17.46M17.28 17.46L16.64 16.82M9.7 9.88L9.06 9.24" stroke="#FCF8F7" strokeWidth="1.6" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <span className="stat-value temp-value">27°C</span>
                      </div>
                    </div>

                    <div className="weather-stat">
                      <span className="stat-label">Rain</span>
                      <div className="stat-value-container">
                        <div className="rain-icon">
                          <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="13.2" cy="13.35" r="12.5" fill="#62B4FF"/>
                            <path d="M16.95 14.89C16.95 12.97 13.2 8.35 13.2 8.35S9.45 12.97 9.45 14.89C9.45 15.81 9.84 16.69 10.55 17.34C11.25 17.99 12.2 18.35 13.2 18.35C14.19 18.35 15.15 17.99 15.85 17.34C16.55 16.69 16.95 15.81 16.95 14.89Z" stroke="#FCF8F7" strokeWidth="1.6"/>
                          </svg>
                        </div>
                        <span className="stat-value rain-value">55MM</span>
                      </div>
                    </div>
                  </div>

                  <div className="weather-description">
                    <p>On safari, January marks the start of the short dry season, although timings can be unpredictable. Expect lush, green conditions and sightings of newborn animals. It is hot with passing clouds, but brief afternoon showers cool things down without compromising your safari. On the coast, it will be hot with sunny, bright days and clear waters.</p>
                  </div>
                </div>
              </section>

              {/* Pricing and inclusions Section */}
              <section className="prices-content">
                <div className="section-title-group">
                  <h2 className="section-title">Pricing and inclusions</h2>
                  <DecorativeIcon />
                </div>

                <p className="pricing-subtitle">For honeymoon or family pricing, please contact us</p>

                <div className="pricing-layout">
                  <div className="pricing-table">
                    <div className="pricing-row">
                      <div className="period">January & February</div>
                      <div className="price">£3,114.00 per adult sharing</div>
                      <button className="enquire-button">Enquire now</button>
                    </div>

                    <div className="pricing-row">
                      <div className="period">March, April & May</div>
                      <div className="price">£2,780.00 per adult sharing</div>
                      <button className="enquire-button">Enquire now</button>
                    </div>

                    <div className="pricing-row">
                      <div className="period">July to September</div>
                      <div className="price">£3,869.00 per adult sharing</div>
                      <button className="enquire-button">Enquire now</button>
                    </div>

                    <div className="pricing-row">
                      <div className="period">October</div>
                      <div className="price">£3,599.00 per adult sharing</div>
                      <button className="enquire-button">Enquire now</button>
                    </div>

                    <div className="pricing-row">
                      <div className="period">November & December</div>
                      <div className="price">£2,983.00 per adult sharing</div>
                      <button className="enquire-button">Enquire now</button>
                    </div>

                    <p className="pricing-disclaimer">Disclaimer: Prices will be recalculated using the latest exchange rates and offers</p>
                  </div>

                  <div className="inclusions-section">
                    <div className="inclusions-block">
                      <h3 className="inclusions-title">Inclusions</h3>
                      <ul className="inclusions-list">
                        <li>All meals & drinks</li>
                        <li>Scheduled flight transfers</li>
                        <li>Airport & road transfers</li>
                        <li>Park & conservancy fees</li>
                        <li>In-camp activities</li>
                      </ul>
                    </div>

                    <div className="exclusions-block">
                      <h3 className="exclusions-title">Exclusions</h3>
                      <ul className="exclusions-list">
                        <li>International flights</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === 'itinerary' && (
            <section className="itinerary-content">
              <div className="section-title-group">
                <h2 className="section-title">Itinerary</h2>
                <DecorativeIcon />
              </div>

              {/* Arrival */}
              <div className="itinerary-milestone">
                <div className="milestone-line"></div>
                <div className="milestone-marker">
                  <PlaneIcon />
                  <span className="milestone-text">Arrive Nairobi</span>
                </div>
              </div>

              {/* Itinerary Items */}
              <div className="itinerary-timeline">
                {packageData.itinerary.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-day-indicator">
                      <div className="day-circle-container">
                        <div className="day-circle">
                          <span className="day-text">Day<br/>{item.day}</span>
                        </div>
                        {index < packageData.itinerary.length - 1 && (
                          <svg className="timeline-arrow" width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.7912 20.2197V2.71973M7.7912 2.71973L13.0293 7.58085M7.7912 2.71973L3.0293 7.58085" stroke="#030922" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>

                    <div className="timeline-content">
                      <h3 className="accommodation-title">{item.title}</h3>
                      <p className="accommodation-location">{item.location}</p>
                      
                      {item.images && item.images.length > 0 && (
                        <div className="accommodation-gallery">
                          <div className="gallery-wrapper">
                            <img 
                              src={item.images[currentImageIndex[index] || 0]} 
                              alt={item.title}
                              className="accommodation-image"
                            />
                            {item.images.length > 1 && (
                              <>
                                <button 
                                  className="gallery-control gallery-prev"
                                  onClick={() => prevImage(index)}
                                  aria-label="Previous image"
                                >
                                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.386 6.04395C15.7015 6.04465 15.958 5.78938 15.9587 5.47379C15.9594 5.1582 15.7042 4.90179 15.3885 4.90109L15.386 6.04395ZM1.26983 5.03713C1.04618 5.25979 1.04537 5.62159 1.26803 5.84525L4.8965 9.48986C5.11916 9.71351 5.48097 9.71431 5.70463 9.49165C5.92827 9.26899 5.92908 8.90718 5.70642 8.68354L2.48111 5.44388L5.72076 2.21858C5.94442 1.99591 5.94522 1.6341 5.72256 1.41045C5.49989 1.1868 5.13809 1.186 4.91443 1.40866L1.26983 5.03713ZM15.3885 4.90109L1.67426 4.87066L1.67172 6.01351L15.386 6.04395L15.3885 4.90109Z" fill="#272B25"/>
                                  </svg>
                                </button>
                                <button 
                                  className="gallery-control gallery-next"
                                  onClick={() => nextImage(index)}
                                  aria-label="Next image"
                                >
                                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.67299 4.88655C1.3574 4.88655 1.10156 5.14239 1.10156 5.45798C1.10156 5.77357 1.3574 6.02941 1.67299 6.02941V4.88655ZM15.7914 5.86203C16.0145 5.63888 16.0145 5.27707 15.7914 5.05392L12.1548 1.41737C11.9316 1.19421 11.5698 1.19421 11.3467 1.41737C11.1235 1.64052 11.1235 2.00233 11.3467 2.22549L14.5792 5.45798L11.3467 8.69047C11.1235 8.91362 11.1235 9.27543 11.3467 9.49858C11.5698 9.72175 11.9316 9.72175 12.1548 9.49858L15.7914 5.86203ZM1.67299 6.02941H15.3873V4.88655H1.67299V6.02941Z" fill="#272B25"/>
                                  </svg>
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                      
                      <p className="accommodation-description">{item.description}</p>
                      <button type="button" className="read-more-link">Read more</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Departure */}
              <div className="itinerary-milestone">
                <div className="milestone-line"></div>
                <div className="milestone-marker">
                  <PlaneIcon />
                  <span className="milestone-text">Depart Nairobi</span>
                </div>
              </div>
            </section>
          )}

          {/* Gallery Section - What you'll see */}
          {activeTab === 'gallery' && (
            <section className="gallery-content">
              <div className="section-title-group">
                <h2 className="section-title">What you'll see</h2>
                <DecorativeIcon />
              </div>

              <div className="gallery-carousel-container">
                <div className="gallery-images-wrapper">
                  <div className="gallery-images-track" style={{transform: `translateX(-${galleryCurrentIndex * 100}%)`}}>
                    {[
                      'https://api.builder.io/api/v1/image/assets/TEMP/71acbdd75b47f16802064f9ddbe061ffdd3dff5e?width=1244',
                      'https://api.builder.io/api/v1/image/assets/TEMP/5be32ac48494bd3466f435ba75640b82eb469def?width=1050',
                      'https://api.builder.io/api/v1/image/assets/TEMP/f52a7ac814b059679e4dab4df7c409d0ee396827?width=1069',
                      'https://api.builder.io/api/v1/image/assets/TEMP/4c63083c228f49b04d367f319ff0ab506426154c?width=1050',
                      'https://api.builder.io/api/v1/image/assets/TEMP/88c5a1f1a59386256b143f4e251ba7f08c6542b3?width=1049'
                    ].map((img, index) => (
                      <img key={index} src={img} alt={`Safari landscape ${index + 1}`} className="gallery-carousel-image" />
                    ))}
                  </div>
                </div>

                <button
                  className="gallery-nav-button gallery-nav-prev"
                  onClick={() => setGalleryCurrentIndex(prev => prev > 0 ? prev - 1 : 4)}
                  aria-label="Previous image"
                >
                  <svg width="16" height="9" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6067 6.11719C15.9222 6.11789 16.1787 5.86262 16.1794 5.54703C16.1801 5.23144 15.9249 4.97503 15.6092 4.97433L15.6067 6.11719ZM1.49053 5.11037C1.26688 5.33303 1.26608 5.69484 1.48874 5.91849L5.1172 9.5631C5.33987 9.78676 5.70167 9.78756 5.92533 9.56489C6.14897 9.34223 6.14979 8.98043 5.92712 8.75678L2.70181 5.51712L5.94147 2.29182C6.16512 2.06915 6.16592 1.70735 5.94326 1.4837C5.7206 1.26004 5.35879 1.25924 5.13513 1.4819L1.49053 5.11037ZM15.6092 4.97433L1.89496 4.9439L1.89243 6.08676L15.6067 6.11719L15.6092 4.97433Z" fill="#272B25"/>
                  </svg>
                </button>

                <button
                  className="gallery-nav-button gallery-nav-next"
                  onClick={() => setGalleryCurrentIndex(prev => prev < 4 ? prev + 1 : 0)}
                  aria-label="Next image"
                >
                  <svg width="16" height="9" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.39174 4.95881C1.07615 4.95881 0.820312 5.21465 0.820312 5.53024C0.820312 5.84583 1.07615 6.10167 1.39174 6.10167V4.95881ZM15.5101 5.9343C15.7332 5.71115 15.7332 5.34934 15.5101 5.12619L11.8736 1.48963C11.6504 1.26648 11.2886 1.26648 11.0654 1.48963C10.8423 1.71279 10.8423 2.0746 11.0654 2.29775L14.2979 5.53024L11.0654 8.76273C10.8423 8.98589 10.8423 9.34769 11.0654 9.57085C11.2886 9.79401 11.6504 9.79401 11.8736 9.57085L15.5101 5.9343ZM1.39174 6.10167H15.106V4.95881H1.39174V6.10167Z" fill="#272B25"/>
                  </svg>
                </button>
              </div>
            </section>
          )}

          {activeTab === 'when-to-go' && (
            <section className="when-to-go-content">
              <div className="section-title-group">
                <h2 className="section-title">When to go</h2>
                <DecorativeIcon />
              </div>

              <div className="month-tabs-container">
                {['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'].map((month) => (
                  <button
                    key={month}
                    className={`month-tab ${selectedMonth === month ? 'active' : ''}`}
                    onClick={() => setSelectedMonth(month)}
                  >
                    {month}
                  </button>
                ))}
              </div>

              <div className="weather-info-container">
                <div className="weather-stats">
                  <div className="weather-stat">
                    <span className="stat-label">Temp</span>
                    <div className="stat-value-container">
                      <div className="temp-icon">
                        <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="13.17" cy="13.35" r="12.5" fill="#FF6275"/>
                          <circle cx="13.17" cy="13.35" r="2.9" stroke="#FCF8F7" strokeWidth="1.6"/>
                          <path d="M13.17 7.55V8.44M13.17 18.26V19.15M18.97 13.35H18.08M8.26 13.35H7.37M17.28 9.24L16.64 9.88M9.7 16.82L9.06 17.46M17.28 17.46L16.64 16.82M9.7 9.88L9.06 9.24" stroke="#FCF8F7" strokeWidth="1.6" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="stat-value temp-value">27°C</span>
                    </div>
                  </div>

                  <div className="weather-stat">
                    <span className="stat-label">Rain</span>
                    <div className="stat-value-container">
                      <div className="rain-icon">
                        <svg width="25" height="25" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="13.2" cy="13.35" r="12.5" fill="#62B4FF"/>
                          <path d="M16.95 14.89C16.95 12.97 13.2 8.35 13.2 8.35S9.45 12.97 9.45 14.89C9.45 15.81 9.84 16.69 10.55 17.34C11.25 17.99 12.2 18.35 13.2 18.35C14.19 18.35 15.15 17.99 15.85 17.34C16.55 16.69 16.95 15.81 16.95 14.89Z" stroke="#FCF8F7" strokeWidth="1.6"/>
                        </svg>
                      </div>
                      <span className="stat-value rain-value">55MM</span>
                    </div>
                  </div>
                </div>

                <div className="weather-description">
                  <p>On safari, January marks the start of the short dry season, although timings can be unpredictable. Expect lush, green conditions and sightings of newborn animals. It is hot with passing clouds, but brief afternoon showers cool things down without compromising your safari. On the coast, it will be hot with sunny, bright days and clear waters.</p>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'prices' && (
            <section className="prices-content">
              <div className="section-title-group">
                <h2 className="section-title">Pricing and inclusions</h2>
                <DecorativeIcon />
              </div>

              <p className="pricing-subtitle">For honeymoon or family pricing, please contact us</p>

              <div className="pricing-layout">
                <div className="pricing-table">
                  <div className="pricing-row">
                    <div className="period">January & February</div>
                    <div className="price">£3,114.00 per adult sharing</div>
                    <button className="enquire-button">Enquire now</button>
                  </div>

                  <div className="pricing-row">
                    <div className="period">March, April & May</div>
                    <div className="price">£2,780.00 per adult sharing</div>
                    <button className="enquire-button">Enquire now</button>
                  </div>

                  <div className="pricing-row">
                    <div className="period">July to September</div>
                    <div className="price">£3,869.00 per adult sharing</div>
                    <button className="enquire-button">Enquire now</button>
                  </div>

                  <div className="pricing-row">
                    <div className="period">October</div>
                    <div className="price">£3,599.00 per adult sharing</div>
                    <button className="enquire-button">Enquire now</button>
                  </div>

                  <div className="pricing-row">
                    <div className="period">November & December</div>
                    <div className="price">£2,983.00 per adult sharing</div>
                    <button className="enquire-button">Enquire now</button>
                  </div>

                  <p className="pricing-disclaimer">Disclaimer: Prices will be recalculated using the latest exchange rates and offers</p>
                </div>

                <div className="inclusions-section">
                  <div className="inclusions-block">
                    <h3 className="inclusions-title">Inclusions</h3>
                    <ul className="inclusions-list">
                      <li>All meals & drinks</li>
                      <li>Scheduled flight transfers</li>
                      <li>Airport & road transfers</li>
                      <li>Park & conservancy fees</li>
                      <li>In-camp activities</li>
                    </ul>
                  </div>

                  <div className="exclusions-block">
                    <h3 className="exclusions-title">Exclusions</h3>
                    <ul className="exclusions-list">
                      <li>International flights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
