import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PackageDetailNew.css';
import MapContainer from '../MapContainer/MapContainer';

const packagesData = {
  'timeless-kenya': {
    id: 'timeless-kenya',
    title: 'Timeless Kenya',
    location: 'Masai Mara & Lamu',
    duration: '7 nights from £2,780 per person',
    heroImage: 'https://api.builder.io/api/v1/image/assets/TEMP/deed9e92130aa641227b8f4a045b13a0280cae29?width=1920',
    locationLabel: 'The Masai Mara',
    description: "This 7-night itinerary offers a timeless safari experience, starting with 3 nights at Offbeat Mara, a traditional tented camp found in Masai Mara's Mara North Conservancy, before venturing to Kenya's northern coastline for a journey back in time to the ever-trending Lamu. Enjoy 4 nights at the renowned Peponi Hotel.",
    highlights: [
      'Embark on a thrilling adventure through the iconic Masai Mara and come face-to-face with the Big 5.',
      'Witness the awe-inspiring spectacle of the Great Migration.',
      'Soar high above the Masai Mara in a thrilling hot-air balloon.',
      'Immerse yourself in the vibrant culture of the Maasai people.',
      'Seamlessly transition from safari to the beach.',
      'Explore the captivating UNESCO Heritage Site of Lamu Town.',
      'Scuba dive into the depths of adventure.',
      'Set off in search of a blue marlin when deep sea fishing.',
      "Indulge your senses in Africa's finest cuisine."
    ],
    itinerary: [
      {
        day: 'Day 1-4',
        title: 'Offbeat Mara',
        location: 'Masai Mara, Kenya',
        description: 'Offbeat Mara is a small, traditional tented camp located on the Olare Orok River within the 74,000 acre Mara North Conservancy. With just seven tents the camp offers a truly authentic safari experience known for excellent service, expert guides, delicious food and access to the Masai Mara National Reserve.',
        images: [
          'https://api.builder.io/api/v1/image/assets/TEMP/f987d50004730497e1e5e86a39bd8bb93437efa5?width=1056',
          'https://api.builder.io/api/v1/image/assets/TEMP/07bc5ea4e88f2a767be3fd450818ab7707dc1639?width=990',
          'https://api.builder.io/api/v1/image/assets/TEMP/646bdc996feac051b9d57cb79ff968205446535f?width=1222',
          'https://api.builder.io/api/v1/image/assets/TEMP/b497a8c110791e0a3eeb97e37c06021fc922c219?width=990',
          'https://api.builder.io/api/v1/image/assets/TEMP/caacd25803e6fed084df2c2843a8b05338fcc577?width=990'
        ],
        arriveIcon: true
      },
      {
        day: 'Day 4-8',
        title: 'Peponi Hotel',
        location: 'Lamu Archipelago, Kenya',
        description: 'Peponi Hotel is situated on the pristine shores of Shela Beach on Lamu Island.',
        images: [],
        departIcon: true
      }
    ],
    mapImage: 'https://api.builder.io/api/v1/image/assets/TEMP/823a3eea6daa40ecab13e9d3a04a943b690d0466?width=1441',
    galleryImages: [
      'https://api.builder.io/api/v1/image/assets/TEMP/71acbdd75b47f16802064f9ddbe061ffdd3dff5e?width=2489',
      'https://api.builder.io/api/v1/image/assets/TEMP/5be32ac48494bd3466f435ba75640b82eb469def?width=2101',
      'https://api.builder.io/api/v1/image/assets/TEMP/f52a7ac814b059679e4dab4df7c409d0ee396827?width=2138',
      'https://api.builder.io/api/v1/image/assets/TEMP/4c63083c228f49b04d367f319ff0ab506426154c?width=2100',
      'https://api.builder.io/api/v1/image/assets/TEMP/88c5a1f1a59386256b143f4e251ba7f08c6542b3?width=2098',
      'https://api.builder.io/api/v1/image/assets/TEMP/ce58480e15e4dc76189dc360b5a02e06957655e7?width=2099',
      'https://api.builder.io/api/v1/image/assets/TEMP/d851959e0c3aad442b047f7a91811fe1d128024d?width=2098',
      'https://api.builder.io/api/v1/image/assets/TEMP/82cba150fef1e70cfe7567a05ec64dd2b7777c47?width=2100',
      'https://api.builder.io/api/v1/image/assets/TEMP/c50161535fe7a48ca1ba2b257d3186853bcde6fa?width=1867',
      'https://api.builder.io/api/v1/image/assets/TEMP/a8742a558cd62a82acab0339a0c1c011edfe26a0?width=2498',
      'https://api.builder.io/api/v1/image/assets/TEMP/bb552a459b0d0b935ccc4cfdf2348b9821efeb5e?width=2498',
      'https://api.builder.io/api/v1/image/assets/TEMP/782c88efd5aa11a6d72c88dfae9560ab41e2f1b4?width=2280',
      'https://api.builder.io/api/v1/image/assets/TEMP/f855e77d4c92bebd7f523640ac838b2c7be3c658?width=2091',
      'https://api.builder.io/api/v1/image/assets/TEMP/524d68796ecf0f54d4d61b9dffbb868c37d1a8c6?width=1867',
      'https://api.builder.io/api/v1/image/assets/TEMP/25a9c2ec19d3fd918b6d4eae6ab9eceb7647e88b?width=2163'
    ],
    whenToGoInfo: {
      currentMonth: 'jan',
      temp: '27°C',
      rain: '55MM',
      description: 'On safari, January marks the start of the short dry season, although timings can be unpredictable. Expect lush, green conditions and sightings of newborn animals. It is hot with passing clouds, but brief afternoon showers cool things down without compromising your safari. On the coast, it will be hot with sunny, bright days and clear waters.'
    },
    pricing: [
      { period: 'January & February', price: '£3,114.00 per adult sharing', enquire: true },
      { period: 'March, April & May', price: '£2,780.00 per adult sharing', enquire: true },
      { period: 'July to September', price: '£3,869.00 per adult sharing', enquire: true },
      { period: 'October', price: '£3,599.00 per adult sharing', enquire: true },
      { period: 'November & December', price: '£2,983.00 per adult sharing', enquire: true }
    ],
    inclusions: [
      'All meals & drinks',
      'Scheduled flight transfers',
      'Airport & road transfers',
      'Park & conservancy fees',
      'In-camp activities'
    ],
    exclusions: [
      'International flights'
    ]
  }
};

export default function PackageDetail() {
  const { packageId } = useParams();
  const pkg = packagesData[packageId] || packagesData['timeless-kenya'];
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  const handlePrevGallery = () => {
    setCurrentGalleryIndex((prev) => 
      prev === 0 ? pkg.galleryImages.length - 1 : prev - 1
    );
  };

  const handleNextGallery = () => {
    setCurrentGalleryIndex((prev) => 
      prev === pkg.galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nev', 'dec'];

  return (
    <div className="package-detail-new">
      <section className="hero-section">
        <div className="hero-container">
          <nav className="breadcrumbs">
            <Link to="/" className="breadcrumb-link">Itineraries</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <Link to={`/package/${pkg.id}`} className="breadcrumb-link">Timeless Kenya</Link>
          </nav>

          <div className="hero-content-wrapper">
            <div className="hero-content">
              <span className="itinerary-tag">itinerary</span>

              <h1 className="hero-title">
                Timeless Kenya
                <svg className="title-icon" width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_111_1011)">
                    <path d="M28.1902 13.0017C26.2282 13.2779 24.2502 13.4506 22.2882 13.6923C20.3263 13.934 18.3483 14.0548 16.3863 14.193C14.4279 14.5057 12.4467 14.6213 10.4683 14.5382C8.43908 14.3553 6.44832 13.837 4.56641 13.0017V12.6046C6.44832 11.7693 8.43908 11.251 10.4683 11.0681C12.4467 10.985 14.4279 11.1006 16.3863 11.4134C18.3483 11.5515 20.3102 11.7241 22.2882 11.914C24.2663 12.1039 26.2282 12.3284 28.1902 12.6046V13.0017Z" fill="#030D34"/>
                    <path d="M8.45679 1.19417C8.0065 2.04014 7.4919 2.83433 7.00945 3.64576C6.52702 4.45721 5.98024 5.23413 5.40132 5.99378C4.82238 6.75343 4.51683 7.72025 3.79317 8.22094C2.92327 8.79756 1.92087 9.10248 0.898513 9.10144L0.689453 8.85973C0.699565 7.76221 1.013 6.69264 1.59002 5.7866C2.05638 4.94063 2.97302 4.61259 3.69669 4.06013C4.42035 3.50765 5.16009 2.97244 5.91592 2.4545C6.67174 1.93656 7.44365 1.43588 8.26382 0.969727L8.45679 1.19417Z" fill="#030D34"/>
                    <path d="M8.13556 24.9485C7.33149 24.465 6.60781 23.9126 5.83589 23.3946C5.06397 22.8766 4.37247 22.2896 3.66487 21.6681C2.95729 21.0465 2.05671 20.7185 1.59035 19.9416C1.03915 19.0144 0.753943 17.9336 0.770189 16.8339L0.995331 16.6094C2.01841 16.615 3.01609 16.952 3.85785 17.5763C4.64585 18.0769 4.9514 19.061 5.46601 19.838C5.98062 20.6149 6.49524 21.4091 6.97769 22.2206C7.46014 23.032 7.9265 23.8608 8.3607 24.724L8.13556 24.9485Z" fill="#030D34"/>
                  </g>
                </svg>
              </h1>

              <div className="hero-divider"></div>

              <div className="hero-info-section">
                <span className="info-label">location</span>
                <p className="info-value">Masai Mara & Lamu</p>
              </div>

              <div className="hero-info-section">
                <span className="info-label">duration</span>
                <p className="info-value">7 nights from £2,780 per person</p>
              </div>

              <div className="hero-divider"></div>

              <p className="hero-description">
                This 7-night itinerary offers a timeless safari experience, starting with 3 nights at
                Offbeat Mara, a traditional tented camp found in Masai Mara's Mara North
                Conservancy, before venturing to Kenya's northern coastline for a journey back in
                time to the ever-trending Lamu. Enjoy 4 nights at the renowned Peponi Hotel.
              </p>
            </div>

            <div className="hero-image-wrapper">
              <div className="hero-divider-vertical"></div>
              <img src={pkg.heroImage} alt="The Masai Mara" className="hero-image" />
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
                <span>The Masai Mara</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="tab-navigation">
        <div className="tab-divider"></div>
        <div className="tab-buttons">
          <button className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
            Overview
          </button>
          <button className={`tab-button ${activeTab === 'itinerary' ? 'active' : ''}`} onClick={() => setActiveTab('itinerary')}>
            Itinerary
          </button>
          <button className={`tab-button ${activeTab === 'gallery' ? 'active' : ''}`} onClick={() => setActiveTab('gallery')}>
            Gallery
          </button>
          <button className={`tab-button ${activeTab === 'when-to-go' ? 'active' : ''}`} onClick={() => setActiveTab('when-to-go')}>
            When to go
          </button>
          <button className={`tab-button ${activeTab === 'prices' ? 'active' : ''}`} onClick={() => setActiveTab('prices')}>
            Prices
          </button>
        </div>
        <div className="tab-divider"></div>
      </nav>

      {/* Main Content */}
      <div className="main-content-wrapper">
        <div className="content-container">
          {/* Highlights Section */}
          <section className="highlights-section">
            <h2 className="section-heading">
              Highlights
              <svg className="heading-icon" width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_111_1053)">
                  <path d="M28.0906 12.6824C26.1286 12.9586 24.1506 13.1312 22.1886 13.373C20.2267 13.6146 18.2487 13.7355 16.2867 13.8736C14.3283 14.1864 12.3471 14.302 10.3687 14.2189C8.33947 14.036 6.34871 13.5176 4.4668 12.6824V12.2853C6.34871 11.45 8.33947 10.9317 10.3687 10.7487C12.3471 10.6656 14.3283 10.7812 16.2867 11.094C18.2487 11.2321 20.2106 11.4048 22.1886 11.5947C24.1667 11.7846 26.1286 12.009 28.0906 12.2853V12.6824Z" fill="#030D34"/>
                  <path d="M8.35718 0.874832C7.90689 1.72081 7.39229 2.51499 6.90984 3.32643C6.42741 4.13788 5.88063 4.91479 5.30171 5.67444C4.72277 6.43409 4.41722 7.40092 3.69356 7.9016C2.82366 8.47823 1.82126 8.78314 0.798904 8.7821L0.589844 8.54039C0.599955 7.44288 0.91339 6.3733 1.49041 5.46727C1.95677 4.62129 2.87341 4.29325 3.59708 3.74079C4.32074 3.18832 5.06048 2.6531 5.81631 2.13517C6.57213 1.61722 7.34404 1.11654 8.16421 0.650391L8.35718 0.874832Z" fill="#030D34"/>
                  <path d="M8.03595 24.6292C7.23188 24.1457 6.5082 23.5933 5.73628 23.0753C4.96436 22.5573 4.27286 21.9703 3.56526 21.3488C2.85768 20.7272 1.9571 20.3992 1.49074 19.6223C0.939537 18.695 0.654334 17.6143 0.670579 16.5145L0.895721 16.29C1.9188 16.2957 2.91648 16.6327 3.75824 17.2569C4.54624 17.7575 4.85179 18.7417 5.3664 19.5187C5.88101 20.2955 6.39563 21.0898 6.87808 21.9013C7.36053 22.7127 7.82689 23.5414 8.26109 24.4047L8.03595 24.6292Z" fill="#030D34"/>
                </g>
              </svg>
            </h2>

            <div className="highlights-divider"></div>

            <div className="highlights-box">
              <div className="highlights-border-top"></div>
              <div className="highlights-border-left"></div>
              <div className="highlights-border-right"></div>
              <div className="highlights-border-bottom"></div>

              <ul className="highlights-list">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index} className="highlight-item">{highlight}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Map Sidebar */}
        <aside className="map-sidebar">
          <MapContainer src="https://frozilla-design.travelmap.net" height={550} />
        </aside>
      </div>

      {/* What you'll see Section */}
      <section className="gallery-section">
        <div className="gallery-section-header">
          <svg className="section-icon-left" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.56055 14.2172C4.49917 14.053 5.44238 13.9256 6.3847 13.7984C7.01812 13.7129 7.65114 13.6273 8.28208 13.5308C9.64612 13.322 11.0199 13.2039 12.3865 13.0865C12.5924 13.0688 12.7981 13.0511 13.0036 13.0331C14.5703 12.7222 16.1553 12.6074 17.738 12.6898C19.3614 12.8718 20.954 13.387 22.4596 14.2172V14.6119C20.954 15.4421 19.3614 15.9573 17.738 16.1392C16.1553 16.2218 14.5703 16.1069 13.0036 15.796C11.4341 15.6587 9.8645 15.4871 8.28208 15.2983C6.69965 15.1096 5.1301 14.8865 3.56055 14.6119V14.2172ZM19.3466 25.953C19.596 25.3712 19.8699 24.814 20.1429 24.2586C20.2643 24.0115 20.3857 23.7647 20.5046 23.5163C20.8905 22.7097 21.3279 21.9376 21.791 21.1825C21.9596 20.9078 22.0992 20.6057 22.2364 20.3086C22.4764 19.7894 22.7093 19.2854 23.0776 18.9689C23.7735 18.3957 24.5754 18.0927 25.3933 18.0937L25.5605 18.334C25.5525 19.4248 25.3017 20.4879 24.8401 21.3885C24.5795 21.9758 24.1432 22.3119 23.7064 22.6484C23.5179 22.7936 23.3293 22.9389 23.1548 23.1045C22.5759 23.6536 21.9841 24.1856 21.3794 24.7004C20.7747 25.2152 20.1572 25.7128 19.5011 26.1761L19.3466 25.953ZM20.8002 3.3341C20.4098 2.99352 20.0204 2.65377 19.604 2.34277L19.4239 2.56586C19.7713 3.42386 20.1444 4.24754 20.5303 5.05406C20.9163 5.86059 21.328 6.64995 21.7397 7.42215C21.8638 7.65498 21.9727 7.90653 22.0816 8.15799C22.3339 8.7405 22.5859 9.32252 23.0262 9.67011C23.6996 10.2906 24.4978 10.6255 25.3163 10.6311L25.4964 10.408C25.5094 9.31487 25.2812 8.24075 24.8402 7.31919C24.6029 6.82801 24.2251 6.51734 23.8357 6.19728C23.6131 6.01418 23.3866 5.828 23.1806 5.60319C22.6146 4.98542 22.0614 4.40198 21.4438 3.88718C21.226 3.70559 21.013 3.51972 20.8002 3.3341Z" fill="#030922"/>
          </svg>
          <h2 className="gallery-section-title">What you'll see</h2>
          <svg className="section-icon-right" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.5958 14.7205C21.9623 14.8061 21.3293 14.8916 20.6983 14.9882C19.3343 15.1969 17.9606 15.315 16.5941 15.4325L16.5922 15.4326C16.3869 15.4503 16.1817 15.4679 15.9769 15.4858C14.4102 15.7967 12.8252 15.9116 11.2425 15.829C9.61906 15.6472 8.02645 15.132 6.52092 14.3017V13.9071C8.02645 13.0768 9.61906 12.5616 11.2425 12.3797C12.8252 12.2971 14.4102 12.4121 15.9769 12.7229C17.5464 12.8602 19.116 13.0318 20.6983 13.2206C22.2808 13.4094 23.8504 13.6324 25.4199 13.9071V14.3017C24.4813 14.466 23.5381 14.5933 22.5958 14.7205ZM9.63379 2.56585C9.38452 3.14773 9.11059 3.70495 8.8376 4.26026C8.71612 4.50739 8.59478 4.75421 8.47592 5.00259C8.08997 5.80911 7.65256 6.58132 7.18941 7.33636C7.02086 7.61113 6.88128 7.91318 6.744 8.21024C6.50406 8.72947 6.27115 9.23348 5.9029 9.55002C5.20697 10.1232 4.40505 10.4262 3.58717 10.4252L3.41992 10.1849C3.42802 9.09408 3.67876 8.03098 4.14038 7.13044C4.40098 6.54312 4.83732 6.20696 5.27404 5.87052C5.46256 5.72529 5.65115 5.57999 5.8257 5.41443C6.40464 4.8653 6.99643 4.33334 7.60109 3.81854C8.20576 3.30374 8.82329 2.80609 9.47941 2.34277L9.63379 2.56585ZM8.18025 25.1847C8.57062 25.5254 8.96003 25.8651 9.37639 26.1761L9.55651 25.953C9.20914 25.095 8.83605 24.2713 8.45009 23.4648C8.06413 22.6583 7.65245 21.8689 7.24075 21.0967C7.11663 20.8638 7.0077 20.6123 6.89882 20.3609C6.64658 19.7783 6.39455 19.1963 5.95423 18.8487C5.28081 18.2282 4.48267 17.8933 3.66421 17.8878L3.4841 18.1109C3.4711 19.204 3.69926 20.2781 4.14022 21.1997C4.37754 21.6909 4.7554 22.0015 5.14468 22.3216C5.36739 22.5047 5.59384 22.6908 5.79985 22.9157C6.36591 23.5334 6.91912 24.1169 7.53665 24.6317C7.75448 24.8133 7.96751 24.9991 8.18025 25.1847Z" fill="#030922"/>
          </svg>
        </div>
        <div className="gallery-section-divider"></div>

        <div className="gallery-carousel">
          <button className="carousel-nav-btn prev" onClick={handlePrevGallery}>
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_112_262)">
                <path d="M15.6067 6.11719C15.9222 6.11789 16.1787 5.86262 16.1794 5.54703C16.1801 5.23144 15.9249 4.97503 15.6092 4.97433L15.6067 6.11719ZM1.49053 5.11037C1.26688 5.33303 1.26608 5.69484 1.48874 5.91849L5.1172 9.5631C5.33987 9.78676 5.70167 9.78756 5.92533 9.56489C6.14897 9.34223 6.14979 8.98042 5.92712 8.75678L2.70181 5.51712L5.94147 2.29182C6.16512 2.06915 6.16592 1.70735 5.94326 1.4837C5.7206 1.26004 5.35879 1.25924 5.13513 1.4819L1.49053 5.11037ZM15.6092 4.97433L1.89496 4.9439L1.89243 6.08676L15.6067 6.11719L15.6092 4.97433Z" fill="#272B25"/>
              </g>
            </svg>
          </button>
          
          <div className="gallery-track">
            {pkg.galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="gallery-image"
                style={{ transform: `translateX(-${currentGalleryIndex * 100}%)` }}
              />
            ))}
          </div>

          <button className="carousel-nav-btn next" onClick={handleNextGallery}>
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_112_267)">
                <path d="M1.39174 4.95881C1.07615 4.95881 0.820312 5.21465 0.820312 5.53024C0.820312 5.84583 1.07615 6.10167 1.39174 6.10167V4.95881ZM15.5101 5.9343C15.7332 5.71115 15.7332 5.34934 15.5101 5.12619L11.8736 1.48963C11.6504 1.26648 11.2886 1.26648 11.0654 1.48963C10.8423 1.71279 10.8423 2.0746 11.0654 2.29775L14.2979 5.53024L11.0654 8.76273C10.8423 8.98589 10.8423 9.34769 11.0654 9.57085C11.2886 9.79401 11.6504 9.79401 11.8736 9.57085L15.5101 5.9343ZM1.39174 6.10167H15.106V4.95881H1.39174V6.10167Z" fill="#272B25"/>
              </g>
            </svg>
          </button>
        </div>

        <div className="gallery-section-divider"></div>
      </section>

      {/* When to go Section */}
      <section className="when-to-go-section">
        <div className="when-divider-top"></div>
        
        <h2 className="section-heading centered">
          <svg className="section-icon-left" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.55078 14.6586C4.4894 14.4944 5.43262 14.367 6.37493 14.2398C7.00836 14.1543 7.64138 14.0687 8.27231 13.9722C9.63636 13.7634 11.0102 13.6453 12.3767 13.5279C12.5826 13.5102 12.7883 13.4925 12.9938 13.4745C14.5605 13.1636 16.1455 13.0488 17.7282 13.1313C19.3516 13.3132 20.9443 13.8284 22.4498 14.6586V15.0533C20.9443 15.8835 19.3516 16.3987 17.7282 16.5806C16.1455 16.6632 14.5605 16.5483 12.9938 16.2374C11.4243 16.1001 9.85473 15.9285 8.27231 15.7397C6.68989 15.551 5.12033 15.3279 3.55078 15.0533V14.6586ZM19.3369 26.3944C19.5862 25.8126 19.8601 25.2554 20.1331 24.7C20.2546 24.4529 20.3759 24.2061 20.4948 23.9577C20.8807 23.1512 21.3182 22.379 21.7813 21.6239C21.9498 21.3492 22.0894 21.0471 22.2267 20.75C22.4667 20.2308 22.6996 19.7269 23.0678 19.4103C23.7637 18.8371 24.5656 18.5341 25.3836 18.5351L25.5508 18.7754C25.5427 19.8662 25.2919 20.9293 24.8304 21.8299C24.5698 22.4172 24.1334 22.7533 23.6966 23.0898C23.5082 23.235 23.3195 23.3803 23.145 23.5459C22.5661 24.095 21.9743 24.627 21.3696 25.1418C20.765 25.6566 20.1474 26.1542 19.4913 26.6175L19.3369 26.3944ZM20.7904 3.77551C20.4 3.43492 20.0106 3.09518 19.5943 2.78418L19.4142 3.00727C19.7616 3.86527 20.1347 4.68895 20.5206 5.49547C20.9066 6.302 21.3183 7.09136 21.7299 7.86356C21.854 8.09638 21.9629 8.34793 22.0718 8.59939C22.3241 9.18191 22.5761 9.76393 23.0165 10.1115C23.6899 10.732 24.488 11.0669 25.3065 11.0725L25.4866 10.8494C25.4996 9.75627 25.2715 8.68216 24.8305 7.7606C24.5931 7.26941 24.2153 6.95874 23.826 6.63869C23.6033 6.45559 23.3768 6.2694 23.1708 6.0446C22.6048 5.42683 22.0516 4.84339 21.434 4.32859C21.2162 4.147 21.0032 3.96112 20.7904 3.77551Z" fill="#030922"/>
          </svg>
          When to go
          <svg className="section-icon-right" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.6153 15.1619C21.9819 15.2475 21.3488 15.333 20.7179 15.4296C19.3539 15.6383 17.9802 15.7564 16.6136 15.8739L16.6118 15.874C16.4064 15.8917 16.2013 15.9093 15.9964 15.9273C14.4297 16.2381 12.8447 16.353 11.262 16.2705C9.63859 16.0886 8.04598 15.5734 6.54045 14.7431V14.3485C8.04598 13.5182 9.63859 13.003 11.262 12.8211C12.8447 12.7385 14.4297 12.8535 15.9964 13.1643C17.5659 13.3016 19.1355 13.4732 20.7179 13.662C22.3003 13.8508 23.8699 14.0738 25.4394 14.3485V14.7431C24.5009 14.9074 23.5576 15.0347 22.6153 15.1619ZM9.54395 3.00726C9.29467 3.58913 9.02074 4.14636 8.74776 4.70166C8.62628 4.9488 8.50494 5.19562 8.38608 5.444C8.0095 6.25052 7.56209 7.02273 7.09894 7.77777C6.93039 8.05254 6.79081 8.35459 6.65353 8.65164C6.41359 9.17087 6.18068 9.67488 5.81243 9.99143C5.1165 10.5646 4.31459 10.8676 3.4967 10.8666L3.32945 10.6264C3.33755 9.53549 3.58829 8.47239 4.04991 7.57185C4.31051 6.98453 4.74685 6.64837 5.18358 6.31193C5.37209 6.1667 5.56068 6.0214 5.73524 5.85584C6.31417 5.30671 6.90597 4.77475 7.51063 4.25995C8.11529 3.74515 8.73282 3.2475 9.38894 2.78418L9.54395 3.00726ZM8.19978 25.6261C8.59015 25.9668 8.97957 26.3065 9.39593 26.6175L9.57604 26.3944C9.22867 25.5364 8.85558 24.7127 8.46962 23.9062C8.08366 23.0997 7.67198 22.3103 7.26028 21.5381C7.13616 21.3052 7.02723 21.0537 6.91835 20.8023C6.66611 20.2197 6.41408 19.6377 5.97376 19.2901C5.30034 18.6696 4.5022 18.3347 3.68374 18.3292L3.50363 18.5523C3.49063 19.6454 3.71879 20.7195 4.15975 21.6411C4.39707 22.1323 4.77494 22.4429 5.16421 22.763C5.38692 22.9461 5.61337 23.1323 5.81938 23.3571C6.38545 23.9749 6.93865 24.5583 7.55618 25.0731C7.77401 25.2547 7.98704 25.4405 8.19978 25.6261Z" fill="#030922"/>
          </svg>
        </h2>

        <div className="when-divider-center"></div>

        <div className="month-tabs">
          {months.map((month) => (
            <button
              key={month}
              className={`month-tab ${month === pkg.whenToGoInfo.currentMonth ? 'active' : ''}`}
            >
              {month}
            </button>
          ))}
        </div>

        <div className="weather-info">
          <div className="vertical-divider"></div>
          
          <div className="weather-item">
            <span className="weather-label">Temp</span>
            <div className="weather-badge">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_112_348)">
                  <path d="M13.1699 25.8506C20.0735 25.8506 25.6699 20.2541 25.6699 13.3506C25.6699 6.44703 20.0735 0.850586 13.1699 0.850586C6.26636 0.850586 0.669922 6.44703 0.669922 13.3506C0.669922 20.2541 6.26636 25.8506 13.1699 25.8506Z" fill="#FF6275"/>
                  <path d="M13.1713 16.2528C14.7739 16.2528 16.073 14.9536 16.073 13.351C16.073 11.7484 14.7739 10.4492 13.1713 10.4492C11.5687 10.4492 10.2695 11.7484 10.2695 13.351C10.2695 14.9536 11.5687 16.2528 13.1713 16.2528Z" stroke="#FCF8F7" strokeWidth="1.60714" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.1699 7.54688V8.43972" stroke="#FCF8F7" strokeWidth="1.60714" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.1699 18.2617V19.1546" stroke="#FCF8F7" strokeWidth="1.60714" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.9749 13.3506H18.082" stroke="#FCF8F7" strokeWidth="1.60714" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.26005 13.3506H7.36719" stroke="#FCF8F7" strokeWidth="1.60714" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.2784 9.24316L16.6445 9.87709" stroke="#FCF8F7" strokeWidth="1.60714" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.69644 16.8242L9.0625 17.4581" stroke="#FCF8F7" strokeWidth="1.60714" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.2784 17.4581L16.6445 16.8242" stroke="#FCF8F7" strokeWidth="1.60714" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.69644 9.87709L9.0625 9.24316" stroke="#FCF8F7" strokeWidth="1.60714" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
              <span className="weather-value temp">27°C</span>
            </div>
          </div>

          <div className="vertical-divider"></div>

          <div className="weather-item">
            <span className="weather-label">Rain</span>
            <div className="weather-badge">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_112_366)">
                  <path d="M13.1992 25.8506C20.1028 25.8506 25.6992 20.2541 25.6992 13.3506C25.6992 6.44703 20.1028 0.850586 13.1992 0.850586C6.29566 0.850586 0.699219 6.44703 0.699219 13.3506C0.699219 20.2541 6.29566 25.8506 13.1992 25.8506Z" fill="#62B4FF"/>
                  <path d="M16.9492 14.8891C16.9492 12.9737 13.1992 8.35059 13.1992 8.35059C13.1992 8.35059 9.44922 12.9737 9.44922 14.8891C9.44922 15.8071 9.84431 16.6876 10.5476 17.3367C11.2508 17.9858 12.2047 18.3506 13.1992 18.3506C14.1937 18.3506 15.1476 17.9858 15.8508 17.3367C16.5541 16.6876 16.9492 15.8071 16.9492 14.8891Z" stroke="#FCF8F7" strokeWidth="1.60714" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
              <span className="weather-value rain">55MM</span>
            </div>
          </div>

          <div className="vertical-divider"></div>
        </div>

        <div className="when-divider-center"></div>

        <p className="when-description">
          On safari, January marks the start of the short dry season, although timings can be unpredictable. Expect lush, green
          conditions and sightings of newborn animals. It is hot with passing clouds, but brief afternoon showers cool things down
          without compromising your safari. On the coast, it will be hot with sunny, bright days and clear waters.
        </p>

        <div className="when-divider-bottom"></div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-background"></div>
        
        <div className="pricing-content">
          <h2 className="section-heading">
            Pricing and inclusions
            <svg className="heading-icon" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M22.5059 14.6209C21.8725 14.7065 21.2394 14.792 20.6085 14.8886C19.2445 15.0973 17.8708 15.2154 16.5042 15.3329L16.5024 15.333C16.2971 15.3507 16.0919 15.3683 15.887 15.3862C14.3204 15.6971 12.7353 15.812 11.1526 15.7294C9.52922 15.5476 7.9366 15.0324 6.43108 14.2021V13.8075C7.9366 12.9771 9.52922 12.462 11.1526 12.2801C12.7353 12.1975 14.3204 12.3125 15.887 12.6233C17.4565 12.7606 19.0262 12.9322 20.6085 13.121C22.1909 13.3098 23.7606 13.5328 25.3301 13.8075V14.2021C24.3915 14.3664 23.4482 14.4937 22.5059 14.6209ZM9.54395 2.46624C9.29467 3.04812 9.02074 3.60534 8.74776 4.16065C8.62628 4.40778 8.50494 5.19562 8.38608 5.444C8.0095 6.25052 7.56271 7.02273 7.09957 7.23675C6.93102 7.51152 6.79144 7.81357 6.65416 8.11063C6.41421 8.62986 6.18131 9.13387 5.81305 9.45041C5.2265 10.0236 4.42459 10.3266 3.6067 10.3256L3.43945 10.0853C3.44755 8.99447 3.69829 7.93137 4.15991 7.03083C4.42051 6.44351 4.85685 6.10735 5.29358 5.77091C5.48209 5.62568 5.67068 5.48038 5.84524 5.31482C6.42417 4.76569 7.01597 4.23373 7.62063 3.71893C8.22529 3.20413 8.84282 2.70648 9.49894 2.24316L9.54395 2.46624ZM8.19978 25.0851C8.59015 25.4258 8.97957 25.7655 9.39593 26.0765L9.57604 25.8534C9.22867 24.9954 8.85558 24.1717 8.46962 23.3652C8.08366 22.5587 7.67198 21.7693 7.26028 20.9971C7.13616 20.7642 7.02723 20.5127 6.91835 20.2613C6.66611 19.6787 6.41408 19.0967 5.97376 18.7491C5.30034 18.1286 4.5022 17.7937 3.68374 17.7882L3.50363 18.0113C3.49063 19.1044 3.71879 20.1785 4.15975 21.1001C4.39707 21.5912 4.77494 21.9019 5.16421 22.222C5.38692 22.4051 5.61337 22.5912 5.81938 22.8161C6.38545 23.4338 6.82928 24.0173 7.44681 24.5321C7.66464 24.7137 7.87766 24.8995 8.19978 25.0851Z" fill="#030922"/>
            </svg>
          </h2>

          <p className="pricing-subtitle">For honeymoon or family pricing, please contact us</p>

          <div className="pricing-table">
            {pkg.pricing.map((tier, index) => (
              <div key={index} className="pricing-row">
                <span className="pricing-period">{tier.period}</span>
                <span className="pricing-price">{tier.price}</span>
                <button className="enquire-btn">Enquire now</button>
              </div>
            ))}
          </div>

          <p className="pricing-disclaimer">Disclaimer: Prices will be recalculated using the latest exchange rates and offers</p>

          <div className="inclusions-section">
            <div className="inclusions-border-top"></div>
            <div className="inclusions-border-left"></div>
            <div className="inclusions-border-right"></div>
            <div className="inclusions-border-bottom"></div>

            <div className="inclusions-grid">
              <div className="inclusions-column">
                <h3 className="inclusions-title">Inclusions</h3>
                <ul className="inclusions-list">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index} className="inclusion-item">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="exclusions-column">
                <h3 className="exclusions-title">Exclusions</h3>
                <ul className="exclusions-list">
                  {pkg.exclusions.map((item, index) => (
                    <li key={index} className="exclusion-item">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
