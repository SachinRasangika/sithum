import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PackageDetailNew.css';
import { packagesData as listPackages } from '../../data/packages';
import MapContainer from '../MapContainer/MapContainer';

function Fact({ label, value }) {
  return (
    <div className="pkg-fact" role="listitem">
      <span className="pkg-fact-label">{label}</span>
      <span className="pkg-fact-value">{value}</span>
    </div>
  );
}

function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="pkg-accordion" role="region" aria-label="Frequently asked questions">
      {items.map((it, i) => (
        <div key={it.q} className={`pkg-acc-item${openIdx === i ? ' is-open' : ''}`}>
          <button className="pkg-acc-header" onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-expanded={openIdx === i}>
            <span>{it.q}</span>
            <span className="pkg-acc-caret" aria-hidden>▾</span>
          </button>
          <div className="pkg-acc-panel">
            <p>{it.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop';

export default function PackageDetail() {
  const { packageId } = useParams();

  const base = useMemo(() => {
    const found = listPackages.find(p => p.id === packageId) || listPackages[0];
    const title = found?.title || 'Tailor-made Journey';
    const heroImage = found?.image || 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop';
    const days = found?.days || 7;
    const priceFrom = found?.priceFrom || 'From $1,990 pp';
    const highlights = found?.highlights || ['Signature sights', 'Boutique stays', 'Guided experiences'];
    return { id: found.id, title, heroImage, days, priceFrom, highlights };
  }, [packageId]);

  const details = useMemo(() => {
    const d = {
    tagline: 'World-class, worry-free travel',
    summary:
      'Designed for discerning travelers who want effortless exploration, this itinerary blends cultural depth, scenic variety and time to unwind. Every detail is handled by expert planners—so you simply enjoy the journey.',
    quickFacts: [
      { label: 'Duration', value: `${base.days} days` },
      { label: 'Ideal for', value: 'Couples, Friends, Families' },
      { label: 'Style', value: 'Private & Fully Tailored' },
      { label: 'Best time', value: 'Dec – Apr, Jul – Sep' },
    ],
    tourInfo: [
      { label: 'Tour Type', value: 'Private / Tailor-made' },
      { label: 'Suitable for', value: 'Solo, Couples, Families, Friends' },
      { label: 'Best Season', value: 'Year round' },
      { label: 'Transportation', value: 'Private A/C Vehicle' },
      { label: 'Accommodation', value: 'Star-class Hotels' },
      { label: 'Language', value: 'English & Other languages available' },
      { label: 'Payment', value: '20% advance to confirm' },
      { label: 'Cancellation', value: 'Free up to 45 days before' }
    ],
    gallery: [
      base.heroImage,
      'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519567241046-7f570eee3da3?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500534311731-49301a39d7dc?q=80&w=2080&auto=format&fit=crop'
    ],
    itinerary: [
      {
        day: `Day 1`,
        title: 'Arrival & Welcome',
        location: 'Colombo → Cultural Triangle',
        description:
          'Meet your private host on arrival. Transfer in comfort to your first boutique hotel. Sunset stroll and curated dinner reservation.'
      },
      {
        day: `Day 2–3`,
        title: 'Ancient Cities & Safaris',
        location: 'Sigiriya & Minneriya',
        description:
          'Climb Sigiriya Rock Fortress at golden hour, visit UNESCO sites and head out on an elephant-focused game drive with an expert ranger.'
      },
      {
        day: `Day 4–5`,
        title: 'Tea Country Slow Life',
        location: 'Hatton & Ella',
        description:
          'Scenic train ride through misty hills, private tea tasting, waterfall hikes and fireside aperitifs at your plantation bungalow.'
      },
      {
        day: `Day 6–${base.days - 1}`,
        title: 'Coastline & Cuisine',
        location: 'Galle & South Coast',
        description:
          'Explore Galle Fort with a historian, learn to cook with a local chef and unwind on palm-fringed beaches. Optional whale watching (seasonal).'
      },
      {
        day: `Day ${base.days}`,
        title: 'Depart',
        location: 'Colombo Airport',
        description: 'Private transfer to the airport and VIP assistance on departure.'
      }
    ],
    accommodations: [
      {
        name: 'Tea Trails Bungalow',
        image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=2080&auto=format&fit=crop',
        features: ['Butler service', 'Lake views', 'Gourmet dining']
      },
      {
        name: 'Boutique Beach Retreat',
        image: 'https://images.unsplash.com/photo-1501117716987-c8e998f57447?q=80&w=2080&auto=format&fit=crop',
        features: ['Oceanfront', 'Infinity pool', 'Spa']
      }
    ],
    activities: [
      'Guided fortress climb',
      'Safari game drive',
      'Scenic rail journey',
      'Tea tasting & blending',
      'Old town walking tour',
      'Optional whale watching'
    ],
    inclusions: [
      'Handpicked accommodations',
      'Private transport & driver-guide',
      'Daily breakfast; select lunches & dinners',
      'All entrance fees & permits',
      '24/7 on-trip support'
    ],
    exclusions: [
      'International flights',
      'Travel insurance',
      'Personal expenses & gratuities'
    ],
    faqs: [
      { q: 'Can the itinerary be customized?', a: 'Yes. Every element is fully customizable—pace, experiences, room types and route.' },
      { q: 'What level of hotels do you use?', a: 'We recommend refined boutique properties; options range from premium to ultra-luxe.' },
      { q: 'Is this family-friendly?', a: 'Absolutely. We tailor activities and rooming to your family\'s preferences and ages.' }
    ],
    reviews: [
      { name: 'Amelia R.', text: 'Impeccably organized. We felt cared for throughout and loved every hotel choice.' },
      { name: 'Marcus T.', text: 'Perfect balance of culture and relaxation. The private guide made all the difference.' }
    ],
    contact: { email: 'hello@sithuma.travel', phone: '+94 11 234 5678' }
  };
    if (base.id === 'sl-7day-holiday') {
      d.summary = 'An immersive 7-day journey through Sri Lanka\'s most iconic destinations—from ancient rock fortresses and sacred temples to misty tea plantations, thrilling wildlife safaris, and pristine beaches.';
      d.quickFacts = [
        { label: 'Duration', value: '7 days / 6 nights' },
        { label: 'Ideal for', value: 'Solo, Couples, Families, Friends' },
        { label: 'Style', value: 'Private & Tailor-made' },
        { label: 'Best time', value: 'Year round' },
      ];
      d.gallery = [
        'https://images.pexels.com/photos/999068/pexels-photo-999068.jpeg',
        'https://images.pexels.com/photos/322437/pexels-photo-322437.jpeg',
        'https://images.pexels.com/photos/319879/pexels-photo-319879.jpeg',
        'https://images.pexels.com/photos/2403209/pexels-photo-2403209.jpeg',
        'https://images.pexels.com/photos/33130315/pexels-photo-33130315.jpeg',
        'https://images.pexels.com/photos/330260/pexels-photo-330260.jpeg',
        'https://images.pexels.com/photos/12122565/pexels-photo-12122565.jpeg'
      ];
      d.itinerary = [
        {
          day: 'Day 01',
          title: 'Arrive at BIA & Drive to Cultural Triangle; Sigiriya',
          location: 'Colombo → Sigiriya',
          description: 'Arrive at Bandaranaike International Airport (BIA) in Colombo. Transfer to Sigiriya, a cultural triangle. Check into your hotel and have free time to relax. In the evening, visit the ancient Rock Fortress of Sigiriya and hike to Pidurangala rock for stunning views. Experience local culture and traditions.'
        },
        {
          day: 'Day 02',
          title: 'Drive to Hill Capital; Kandy',
          location: 'Sigiriya → Kandy',
          description: 'After breakfast at hotel, drive to Kandy. Stop at a Spice Garden to learn about Sri Lanka\'s diverse spices. Visit the Temple of the Tooth, housing a sacred relic of the Buddha. Take a leisurely stroll around Kandy Lake. Visit the lush Peradeniya gardens. Experience a traditional cultural show in the evening featuring dance and music performances.'
        },
        {
          day: 'Day 03',
          title: 'Drive to Little England; Nuwara Eliya',
          location: 'Kandy → Nuwara Eliya',
          description: 'After breakfast, proceed to Nuwara Eliya. En route, stop at Ramboda waterfall. Visit a tea plantation and factory to learn about tea-making. Explore Haggala botanical gardens and Ambewela Farm. Visit the historic Nuwara Eliya post office and Seetha Amman Kovil temple.'
        },
        {
          day: 'Day 04',
          title: 'A Scenic Train Ride from Nanu Oya to Ella',
          location: 'Nuwara Eliya → Ella',
          description: 'After breakfast, take a scenic train ride from Nanu Oya to Ella, enjoying breathtaking views of tea plantations and mountains. Visit the Nine Arch Bridge and Demodara Loop. Hike to Little Adam\'s Peak for panoramic views. Walk through tea plantations and visit Ravana Falls. Explore the charming town of Ella.'
        },
        {
          day: 'Day 05',
          title: 'Drive to Leopard\'s Kingdom; Yala',
          location: 'Ella → Yala',
          description: 'After breakfast, proceed to Yala. Embark on a thrilling jeep safari at Yala National Park to spot leopards, elephants, sloth bears, crocodiles, and bird species. Visit the Kataragama Temple to explore the sacred multi-religious pilgrimage site. Unwind at tranquil Yala Beach.'
        },
        {
          day: 'Day 06',
          title: 'Drive to South Coast Beaches; Mirissa',
          location: 'Yala → Mirissa',
          description: 'After breakfast, proceed to Mirissa. Visit Coconut Tree Hill for panoramic views of the coastline. Walk across the sandbar to Parrot Rock. Explore the secluded Secret Beach. Snorkel or dive to discover coral reefs and marine life. Relax on Mirissa Beach, swim in crystal-clear waters, and witness a breathtaking sunset over the Indian Ocean.'
        },
        {
          day: 'Day 07',
          title: 'Good Bye from Sri Lanka & Departure',
          location: 'Mirissa → Colombo → Airport',
          description: 'If time permits, embark on a whale watching boat tour from Mirissa Harbor to spot blue whales, sperm whales, and dolphins. Proceed to Colombo and enjoy city tour visiting independence monuments and colonial architecture. Explore local markets for shopping and souvenirs. Depart for Bandaranaike International Airport.'
        }
      ];
    }
    if (base.id === 'sl-family-7d') {
      d.itinerary = [
        {
          day: 'Day 01',
          title: 'Welcome to Sri Lanka – Relax in the Seaside Town of Negombo',
          location: 'CMB Airport → Negombo',
          description: 'Arrive at Bandaranaike International Airport (CMB). Meet your tour representative and transfer to your hotel in Negombo. Spend a relaxing afternoon by Negombo Beach, enjoying the sun, sand, and sea or optional water activities. Overnight stay at a 3-star hotel in Negombo.'
        },
        {
          day: 'Day 02',
          title: 'Coastal Charms & Journey to the Ancient Heartland – Sigiriya',
          location: 'Negombo → Sigiriya (via Pinnawala)',
          description: 'After breakfast, explore Negombo\'s early morning fish market for a glimpse of local life. Visit a temple or church, showcasing the city\'s multicultural heritage. Begin your scenic drive to Sigiriya, stopping for a refreshing cup of Ceylon tea along the way. En route, visit the Pinnawala Elephant Orphanage. Check in and relax for the evening. Overnight stay at a 3-star hotel in Sigiriya. 🍽️ Meals: Breakfast & Dinner'
        },
        {
          day: 'Day 03',
          title: 'Explore Ancient Wonders – Sigiriya & Dambulla',
          location: 'Sigiriya & Dambulla',
          description: 'After breakfast, climb the world-famous Sigiriya Rock Fortress (UNESCO Heritage Site). Admire the ancient frescoes and breathtaking summit views. Visit the Dambulla Cave Temple, renowned for its beautiful Buddha statues and murals. Optional: Go on a jeep safari at Minneriya National Park to spot wild elephants. Overnight stay at a 3-star hotel in Sigiriya. 🍽️ Meals: Breakfast & Dinner'
        },
        {
          day: 'Day 04',
          title: 'Through the Spice Trails to the Hill Capital – Kandy',
          location: 'Sigiriya → Kandy (via Matale)',
          description: 'After breakfast, drive to Kandy, the hill capital surrounded by lush greenery. Stop at a spice garden in Matale to learn about local herbs and spices. Visit the Royal Botanical Gardens in Peradeniya. In the evening, explore the sacred Temple of the Tooth Relic and optionally attend a Kandyan cultural dance show. Overnight stay at a 3-star hotel in Kandy. 🍽️ Meals: Breakfast & Dinner'
        },
        {
          day: 'Day 05',
          title: 'Into the Misty Hills – Nuwara Eliya, the Little England',
          location: 'Kandy → Nuwara Eliya',
          description: 'After breakfast, travel to Nuwara Eliya, a picturesque highland town. Stop at Ramboda Falls and a tea plantation to learn about Ceylon tea production and enjoy a tasting. Explore Seetha Amman Temple, the Old Post Office, and Victoria Park. Relax at Gregory Lake with a scenic walk or boat ride. Overnight stay at a 3-star hotel in Nuwara Eliya. 🍽️ Meals: Breakfast & Dinner'
        },
        {
          day: 'Day 06',
          title: 'Down to the Golden Coast – Bentota',
          location: 'Nuwara Eliya → Bentota',
          description: 'After breakfast, descend from the hills to the coastal paradise of Bentota. Check in to your beach hotel and relax by the sea. Spend your day sunbathing, swimming, or enjoying optional water sports such as jet skiing or banana boat rides. Overnight stay at a 3-star hotel in Bentota. 🍽️ Meals: Breakfast & Dinner'
        },
        {
          day: 'Day 07',
          title: 'Farewell Sri Lanka – Until We Meet Again',
          location: 'Bentota → Colombo / Airport',
          description: 'After breakfast, take a boat safari along the Bentota River, exploring mangroves and local wildlife. If time permits, enjoy a Colombo city tour — visiting Gangaramaya Temple, National Museum, and Pettah Market. Pick up some souvenirs before your transfer to the airport for departure. End of Tour. 🍽️ Meal: Breakfast'
        }
      ];
      d.gallery = [
        'https://upload.wikimedia.org/wikipedia/commons/9/97/Negombo_Beach%2C_Sri_Lanka.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/e/e1/Pinnawala_elephant_orphanage.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/5/51/Sigiriya_Rock_fortress.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/Dambulla_Cave_temple.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/2/2f/Peradeniya_Botanical_garden.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Estate_Nuwara_Eliya.jpg',
        'https://live.staticflickr.com/65535/50009234931_1a80fb78d1_c.jpg'
      ];
    }
    if (base.id === 'sl-5day-holiday') {
      d.summary = 'How to Enjoy Sri Lanka in 5 Days – A Complete Holiday Package. Experience Sri Lanka\'s most iconic destinations—from the ancient Sigiriya Rock Fortress and the sacred Temple of the Tooth in Kandy, to misty tea plantations in Nuwara Eliya, and beautiful beaches in Bentota with optional water activities.';
      d.quickFacts = [
        { label: 'Duration', value: '5 days / 4 nights' },
        { label: 'Ideal for', value: 'Solo, Couples, Families, Friends' },
        { label: 'Style', value: 'Tailor-made Tour' },
        { label: 'Best time', value: 'Year round' },
      ];
      d.itinerary = [
        {
          day: 'Day 01',
          title: 'Arrival to Colombo & Drive to Cultural Triangle; Sigiriya',
          location: 'CMB Airport → Sigiriya',
          description: 'Arrive at Bandaranaike International Airport (BIA) in Colombo. After clearing customs and immigration, you will be met by your driver/guide. Transfer to Sigiriya, home to the iconic Sigiriya Rock Fortress. Check-in at your hotel in Sigiriya and relax for the evening. Overnight stay in Sigiriya. 🍽️ Meal: Dinner'
        },
        {
          day: 'Day 02',
          title: 'Off to Hill Country; Kandy',
          location: 'Sigiriya → Kandy (via Pinnawala)',
          description: 'After breakfast, depart for Kandy, the cultural capital of Sri Lanka. En route, visit the Pinnawala Elephant Orphanage to see elephants up close. In Kandy, visit the Temple of the Tooth, a UNESCO World Heritage Site, and explore the city. Check-in at your hotel in Kandy for an overnight stay. 🍽️ Meals: Breakfast & Dinner'
        },
        {
          day: 'Day 03',
          title: 'Drive to Little England; Nuwara Eliya',
          location: 'Kandy → Nuwara Eliya',
          description: 'After breakfast, check out from your Kandy hotel. Drive to Nuwara Eliya, known as "Little England." En route, visit a tea plantation and factory to learn about tea production. Explore Nuwara Eliya\'s attractions, including Gregory Lake. Check-in at your hotel in Nuwara Eliya for an overnight stay. 🍽️ Meals: Breakfast & Dinner'
        },
        {
          day: 'Day 04',
          title: 'Drive to Beach Bliss; Bentota',
          location: 'Nuwara Eliya → Bentota',
          description: 'After breakfast, check out from your Nuwara Eliya hotel. Drive to Bentota, a coastal town known for its beautiful beaches and water activities. Check-in at your beachfront hotel and enjoy the beach. In the afternoon, you can choose to engage in water sports or take a boat tour along the Madu River (Optional). Overnight stay in Bentota. 🍽️ Meals: Breakfast & Dinner'
        },
        {
          day: 'Day 05',
          title: 'Good Bye from Sri Lanka & Departure',
          location: 'Bentota → Colombo / Airport',
          description: 'After breakfast, depart for Colombo, the commercial capital of Sri Lanka. Take a city tour of Colombo, visiting some of its prominent landmarks and attractions. Explore local markets for shopping and purchase some souvenirs. Depending on your flight schedule, transfer to the airport for your departure. 🍽️ Meal: Breakfast'
        }
      ];
      d.gallery = [
        'https://upload.wikimedia.org/wikipedia/commons/5/51/Sigiriya_Rock_fortress.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Sigiriya_Rock_fortress.jpg/1024px-Sigiriya_Rock_fortress.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/Dambulla_Cave_temple.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/e/e1/Pinnawala_elephant_orphanage.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/9/97/Negombo_Beach%2C_Sri_Lanka.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Kandy_Temple_of_the_Tooth%2C_Sri_Lanka.jpg/1024px-Kandy_Temple_of_the_Tooth%2C_Sri_Lanka.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/2/2f/Peradeniya_Botanical_garden.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Estate_Nuwara_Eliya.jpg',
        'https://live.staticflickr.com/65535/50009234931_1a80fb78d1_c.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/8/8f/Gangaramaya_temple%2C_captured_at_Colombo_City_Center.jpg'
      ];
      d.accommodations = [
        {
          name: 'Tropical Life Resort & Spa',
          image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Sigiriya_Rock_fortress.jpg',
          features: ['Sigiriya location', 'Pool & Spa', 'Traditional dining']
        },
        {
          name: 'Hotel Topaz',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Kandy_Temple_of_the_Tooth%2C_Sri_Lanka.jpg/1024px-Kandy_Temple_of_the_Tooth%2C_Sri_Lanka.jpg',
          features: ['Kandy location', 'City views', 'Restaurant']
        },
        {
          name: 'Araliya Red',
          image: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Tea_Estate_Nuwara_Eliya.jpg',
          features: ['Nuwara Eliya', 'Tea country views', 'Cozy ambiance']
        },
        {
          name: 'The Palms',
          image: 'https://live.staticflickr.com/65535/50009234931_1a80fb78d1_c.jpg',
          features: ['Bentota beach', 'Water sports', 'Oceanfront']
        }
      ];
    }
    return d;
  }, [base]);


  const [galleryLightbox, setGalleryLightbox] = useState({ isOpen: false, currentIndex: 0 });

  const openGalleryLightbox = (index) => {
    setGalleryLightbox({ isOpen: true, currentIndex: index });
  };

  const closeGalleryLightbox = () => {
    setGalleryLightbox({ isOpen: false, currentIndex: 0 });
  };

  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (!galleryLightbox.isOpen) return;
      if (e.key === 'Escape') closeGalleryLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [galleryLightbox.isOpen]);

  const nextImage = () => {
    setGalleryLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % details.gallery.length
    }));
  };

  const prevImage = () => {
    setGalleryLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + details.gallery.length) % details.gallery.length
    }));
  };

  const [enquiry, setEnquiry] = useState({ name: '', email: '', phone: '', start: '', end: '', adults: '2', children: '0', message: '' });
  const onChange = (k) => (e) => setEnquiry((s) => ({ ...s, [k]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    window.alert(`Enquiry submitted for ${base.title}:\n${JSON.stringify(enquiry, null, 2)}`);
    setEnquiry({ name: '', email: '', phone: '', start: '', end: '', adults: '2', children: '0', message: '' });
  };

  return (
    <div className="pkg-page">
      <header className="pkg-hero" aria-label={`${base.title} hero`}>
        <div className="pkg-hero-media">
          <img className="pkg-hero-img" src={base.heroImage || DEFAULT_IMG} alt={base.title} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=DEFAULT_IMG;}} />
          <div className="pkg-hero-overlay" />
        </div>
        <nav className="pkg-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden>›</span>
          <Link to="/packages">Packages</Link>
          <span aria-hidden>›</span>
          <span className="current" aria-current="page">{base.title}</span>
        </nav>
        <div className="pkg-hero-content">
          <p className="pkg-kicker">{details.tagline}</p>
          <h1 className="pkg-title">{base.title}</h1>
          <p className="pkg-summary">{details.summary}</p>
          <div className="pkg-hero-meta">
            <div className="chip" aria-label="duration">{base.days} days</div>
            <div className="chip" aria-label="price">{base.priceFrom}</div>
            <div className="chip" aria-label="best time">Best: Dec–Apr, Jul–Sep</div>
          </div>
          <div className="pkg-hero-actions">
            <a href="#enquiry" className="btn btn-primary">Enquire now</a>
          </div>
        </div>
      </header>

      <main className="pkg-main">
        <section className="pkg-overview" aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="section-title">Overview</h2>
          <div className="pkg-overview-grid">
            <div className="pkg-overview-left">
              <p className="lead">
                {details.summary}
              </p>
              <ul className="pkg-highlights" role="list">
                {base.highlights.map(h => (
                  <li key={h} className="pkg-highlight-item">{h}</li>
                ))}
              </ul>
              {details.tourInfo && (
                <div className="pkg-tour-info" role="list" aria-label="Tour information">
                  <div className="tour-info-grid">
                    {details.tourInfo.map(f => (
                      <div key={f.label} className="tour-info-item">
                        <span className="tour-info-label">{f.label}</span>
                        <span className="tour-info-value">{f.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="pkg-overview-right" role="list" aria-label="Quick facts">
              {details.quickFacts.map(f => (
                <Fact key={f.label} label={f.label} value={f.value} />
              ))}
            </div>
          </div>
        </section>


        <section className="pkg-gallery" aria-labelledby="gallery-heading">
          <div className="section-head">
            <h2 id="gallery-heading" className="section-title">Gallery</h2>
            <p className="section-sub">A glimpse of the journey</p>
          </div>
          <div className="pkg-gallery-grid">
            {details.gallery.map((src, i) => (
              <figure key={src} className={`pkg-gallery-item${i === 0 ? ' span-2' : ''}`} role="button" tabIndex={0} onClick={() => openGalleryLightbox(i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openGalleryLightbox(i); } }}>
                <img src={src || DEFAULT_IMG} className="pkg-gallery-img" alt={`Trip photo ${i + 1}`} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=DEFAULT_IMG;}} />
              </figure>
            ))}
          </div>
        </section>

        {galleryLightbox.isOpen && (
          <div className="gallery-lightbox" onClick={closeGalleryLightbox} role="dialog" aria-modal="true" aria-label="Image viewer">
            <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="gallery-lightbox-close" onClick={closeGalleryLightbox} aria-label="Close image viewer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="gallery-lightbox-nav gallery-lightbox-prev" onClick={prevImage} aria-label="Previous image">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 24L8 12L20 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <img src={details.gallery[galleryLightbox.currentIndex] || DEFAULT_IMG} className="gallery-lightbox-img" alt={`Trip photo ${galleryLightbox.currentIndex + 1}`} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=DEFAULT_IMG;}} />
              <button className="gallery-lightbox-nav gallery-lightbox-next" onClick={nextImage} aria-label="Next image">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0L24 12L12 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="gallery-lightbox-counter">
                <span>{galleryLightbox.currentIndex + 1}</span> / <span>{details.gallery.length}</span>
              </div>
              <div className="gallery-lightbox-thumbnails">
                {details.gallery.map((src, i) => (
                  <button
                    key={src}
                    className={`gallery-lightbox-thumb${i === galleryLightbox.currentIndex ? ' active' : ''}`}
                    onClick={() => setGalleryLightbox({ isOpen: true, currentIndex: i })}
                    aria-label={`Go to image ${i + 1}`}
                    aria-current={i === galleryLightbox.currentIndex ? 'true' : 'false'}
                  >
                    <img src={src || DEFAULT_IMG} alt={`Thumbnail ${i + 1}`} onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src=DEFAULT_IMG;}} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <section id="itinerary" className="pkg-itinerary" aria-labelledby="itinerary-heading">
          <h2 id="itinerary-heading" className="section-title">Itinerary</h2>
          <ol className="pkg-steps">
            {details.itinerary.map((s) => (
              <li key={s.day} className="pkg-step">
                <div className="step-head">
                  <span className="step-day">{s.day}</span>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-loc">{s.location}</p>
                </div>
                <p className="step-desc">{s.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="pkg-activities" aria-labelledby="activities-heading">
          <h2 id="activities-heading" className="section-title">Activities</h2>
          <ul className="pkg-chips" role="list">
            {details.activities.map(a => <li key={a} className="chip chip-outline">{a}</li>)}
          </ul>
        </section>

        <section className="pkg-map" aria-labelledby="map-heading">
          <h2 id="map-heading" className="section-title">Route map</h2>
          <div className="pkg-map-embed">
            <MapContainer src="https://frozilla-design.travelmap.net" height={520} />
          </div>
        </section>

        <section className="pkg-inclusions" aria-labelledby="inclusions-heading">
          <h2 id="inclusions-heading" className="section-title">What's included</h2>
          <div className="pkg-inclusions-grid">
            <div>
              <h3 className="subhead">Inclusions</h3>
              <ul className="list-check" role="list">
                {details.inclusions.map(x => <li key={x}>{x}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="subhead">Exclusions</h3>
              <ul className="list-cross" role="list">
                {details.exclusions.map(x => <li key={x}>{x}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="pkg-reviews" aria-labelledby="reviews-heading">
          <h2 id="reviews-heading" className="section-title">Guest reviews</h2>
          <div className="reviews-grid">
            {details.reviews.map(r => (
              <blockquote key={r.name} className="review-card">
                <p>"{r.text}"</p>
                <footer>— {r.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="faqs" className="pkg-faqs" aria-labelledby="faqs-heading">
          <h2 id="faqs-heading" className="section-title">FAQs</h2>
          <Accordion items={details.faqs} />
        </section>

        <section id="enquiry" className="pkg-enquiry" aria-labelledby="enquiry-heading">
          <h2 id="enquiry-heading" className="section-title">Plan your trip</h2>
          <form className="enquiry-form" onSubmit={onSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" value={enquiry.name} onChange={onChange('name')} required />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={enquiry.email} onChange={onChange('email')} required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" value={enquiry.phone} onChange={onChange('phone')} />
              </div>
              <div className="form-field">
                <label htmlFor="adults">Adults</label>
                <select id="adults" value={enquiry.adults} onChange={onChange('adults')}>
                  {Array.from({ length: 8 }, (_, i) => String(i + 1)).map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="children">Children</label>
                <select id="children" value={enquiry.children} onChange={onChange('children')}>
                  {Array.from({ length: 6 }, (_, i) => String(i)).map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="start">Start date</label>
                <input id="start" type="date" value={enquiry.start} onChange={onChange('start')} />
              </div>
              <div className="form-field">
                <label htmlFor="end">End date</label>
                <input id="end" type="date" value={enquiry.end} onChange={onChange('end')} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field full">
                <label htmlFor="message">Trip preferences</label>
                <textarea id="message" rows={4} value={enquiry.message} onChange={onChange('message')} placeholder="Tell us about your ideal pace, interests and hotel style" />
              </div>
            </div>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Send enquiry</button>
            </div>
            <p className="form-note">We reply within 24 hours. No obligation, secure and private.</p>
          </form>
        </section>
      </main>

      <div className="pkg-sticky-mobile">
        <a href="#enquiry" className="btn btn-primary">Enquire</a>
      </div>
    </div>
  );
}
