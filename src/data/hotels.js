export const hotels = [
  {
    id: 1,
    name: 'Ceylon Tea Trails',
    slug: 'ceylon-tea-trails',
    location: 'Hatton, Sri Lanka',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/166cc298ca17a9952a4537336b3859e9b6b45870?width=982',
    alt: 'Ceylon Tea Trails bungalows',
    description:
      'Iconic Relais & Châteaux bungalows across rolling tea country. Butler service, gourmet dining, and scenic hikes between estates create a refined, old‑world escape.',
    amenities: ['Butler service', 'Gourmet dining', 'Scenic hikes'],
    rating: 5,
    gallery: [
      'https://images.unsplash.com/photo-1542318421-1f61a182c23d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546955412-78b6bca91119?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: ['Breakfast included', 'Afternoon tea', 'Guided estate walks'],
    bookingBenefits: ['Best rate guarantee', 'No hidden fees', 'Flexible cancellation', '24/7 concierge'],
    interiors: ['Heritage suites', 'Fireplace lounges', 'Garden verandas'],
    mapSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=80.6,6.8,81.2,7.2&layer=mapnik',
    rooms: [
      {
        id: 'r1',
        type: 'Bungalow Suite',
        description: 'Private bungalow with tea-country views, ensuite, and dedicated butler service.',
        priceFrom: 450,
        currency: 'USD',
        images: ['https://images.unsplash.com/photo-1501117716987-c8e3f1f1ec2d?q=80&w=1200&auto=format&fit=crop'] ,
        amenities: ['Butler service', 'Private veranda', 'Ensuite bathroom']
      },
      {
        id: 'r2',
        type: 'Garden Room',
        description: 'Cozy ground-floor room with garden access and tea-plantation outlooks.',
        priceFrom: 280,
        currency: 'USD',
        images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop'],
        amenities: ['Tea tasting', 'Garden access']
      }
    ],
    policies: [
      { title: 'Check-in', text: 'From 14:00' },
      { title: 'Check-out', text: 'Until 11:00' },
      { title: 'Children', text: 'Children of all ages welcome. Extra beds available on request.' }
    ],
    faqs: [
      { q: 'Is Wi‑Fi available?', a: 'Complimentary Wi‑Fi is available in public areas and select rooms.' },
      { q: 'Are pets allowed?', a: 'No, pets are not permitted at this property.' }
    ],
    reviews: [
      { id: 1, name: 'Alex P', rating: 5, text: 'A magical stay — exceptional service and grounds.' },
      { id: 2, name: 'Maya R', rating: 5, text: 'Unforgettable dining and guided walks between estates.' }
    ],
    specialOffers: [
      { id: 'o1', title: 'Stay 3 Nights, Pay 2', description: 'Enjoy a complimentary night when you book three consecutive nights.' }
    ],
    nearbyExperiences: [
      { id: 'e1', title: 'Tea factory tour', distance: '5 km' },
      { id: 'e2', title: 'Waterfall hike', distance: '12 km' }
    ]
  },
  {
    id: 2,
    name: 'Chena Huts',
    slug: 'chena-huts',
    location: 'Yala, Sri Lanka',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/e020b772f5cd413a57d00578a44a52c9e7de5990?width=982',
    alt: 'Chena Huts by Uga in Yala',
    description:
      'Luxurious thatched pavilions beside the ocean and jungle. Private plunge pools, exceptional cuisine, and guided game drives in Yala National Park.',
    amenities: ['Private plunge pools', 'Guided game drives', 'Beachfront location'],
    rating: 5,
    gallery: [
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: ['All meals included', 'Evening game drives', 'Private plunge pool'],
    bookingBenefits: ['Exclusive add-ons', 'Instant confirmation', 'Secure payment'],
    interiors: ['Thatched pavilions', 'Ocean-view decks', 'Stone baths'],
    mapSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=81.3,6.0,81.6,6.4&layer=mapnik',
    rooms: [
      {
        id: 'r3',
        type: 'Ocean Pavilion',
        description: 'Thatched pavilion with private plunge pool and direct beach access.',
        priceFrom: 620,
        currency: 'USD',
        images: ['https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=1200&auto=format&fit=crop'],
        amenities: ['Private plunge pool', 'Beach access', 'Outdoor shower']
      },
      {
        id: 'r4',
        type: 'Jungle Suite',
        description: 'Elevated pavilion overlooking the jungle edge with immersive nature views.',
        priceFrom: 480,
        currency: 'USD',
        images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop'],
        amenities: ['Guided drives', 'Private terrace']
      }
    ],
    policies: [
      { title: 'Cancellation', text: 'Free cancellation up to 14 days prior.' },
      { title: 'Children', text: 'Children welcome with family pavilions available.' }
    ],
    faqs: [
      { q: 'Are game drives included?', a: 'Evening game drives are included for guests as listed in inclusions.' }
    ],
    reviews: [
      { id: 3, name: 'Sam K', rating: 5, text: 'Perfect safari escape — staff were superb.' }
    ],
    specialOffers: [
      { id: 'o2', title: 'Early Bird 10% Off', description: 'Book 90 days in advance and save 10% on your stay.' }
    ],
    nearbyExperiences: [
      { id: 'e3', title: 'Yala National Park safari', distance: '6 km' },
      { id: 'e4', title: 'Local fishing village visit', distance: '3 km' }
    ]
  },
  {
    id: 3,
    name: 'Cape Weligama',
    slug: 'cape-weligama',
    location: 'Weligama, Sri Lanka',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/b268a185c0ec777789c566afbaf9ef0d849a6cbe?width=982',
    alt: 'Cape Weligama luxury resort',
    description:
      'Clifftop suites and villas with sweeping bay views. Three pools, a renowned surf break nearby, and sundowner terraces define effortless coastal luxury.',
    amenities: ['Bay views', 'Multiple pools', 'Surf nearby'],
    rating: 5,
    gallery: [
      'https://images.unsplash.com/photo-1551882547-5d8b34f1c3df?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505692794403-34f21961ea41?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: ['Breakfast included', 'Cliff-edge infinity pool access'],
    bookingBenefits: ['Priority upgrades', 'Local expert support'],
    interiors: ['Teak furnishings', 'Panoramic terraces', 'Outdoor showers'],
    mapSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=80.4,5.9,80.7,6.1&layer=mapnik',
    rooms: [
      {
        id: 'r5',
        type: 'Clifftop Suite',
        description: 'Expansive suite with panoramic ocean views and private plunge.',
        priceFrom: 750,
        currency: 'USD',
        images: ['https://images.unsplash.com/photo-1551882547-5d8b34f1c3df?q=80&w=1200&auto=format&fit=crop'],
        amenities: ['Ocean view', 'Private terrace', 'Butler on request']
      }
    ],
    policies: [
      { title: 'Pets', text: 'Small pets allowed with prior notice.' }
    ],
    faqs: [
      { q: 'Is airport transfer available?', a: 'Yes, transfer can be arranged at an additional charge.' }
    ],
    reviews: [
      { id: 4, name: 'Lina Q', rating: 5, text: 'Stunning views and exceptional service.' }
    ],
    specialOffers: [],
    nearbyExperiences: [
      { id: 'e5', title: 'Surf lessons', distance: '1 km' }
    ]
  },
  {
    id: 4,
    name: 'Wild Coast Tented Lodge',
    slug: 'wild-coast-tented-lodge',
    location: 'Yala National Park, Sri Lanka',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/81cebc6e2622df4176e4add2fc10f17ec51c30c8?width=3355',
    alt: 'Wild Coast Tented Lodge in Yala',
    description:
      'A design-led lodge cocooned between jungle and the Indian Ocean, offering unforgettable game drives in Yala alongside beachfront relaxation and exceptional cuisine.',
    amenities: ['Design-led tents', 'Beachfront + jungle', 'Exceptional cuisine'],
    rating: 5,
    gallery: [
      'https://images.unsplash.com/photo-1501117716987-c8e3f1f1ec2d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1501117716987-4b3f1e30df2a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop'
    ],
    inclusions: ['Daily breakfast', 'Guided game drive'],
    bookingBenefits: ['Member-only offers', 'Dedicated trip designer'],
    interiors: ['Cocoon tents', 'Copper bathtubs', 'Canvas lounges'],
    mapSrc: 'https://www.openstreetmap.org/export/embed.html?bbox=81.2,6.1,81.7,6.5&layer=mapnik',
    rooms: [
      {
        id: 'r6',
        type: 'Tented Suite',
        description: 'Luxury tent with elevated views, private deck and open-air bath.',
        priceFrom: 520,
        currency: 'USD',
        images: ['https://images.unsplash.com/photo-1501117716987-4b3f1e30df2a?q=80&w=1200&auto=format&fit=crop'],
        amenities: ['Open-air bath', 'Private deck']
      }
    ],
    policies: [
      { title: 'Smoking', text: 'Smoking is not permitted inside rooms.' }
    ],
    faqs: [
      { q: 'Is the lodge wheelchair accessible?', a: 'Some public areas are accessible; please contact us for details.' }
    ],
    reviews: [
      { id: 5, name: 'Omar T', rating: 5, text: 'The tents are beautifully designed and the food was excellent.' }
    ],
    specialOffers: [
      { id: 'o3', title: 'Wild Coast Seasonal Offer', description: 'Complimentary guided sunset drive on 4+ night stays.' }
    ],
    nearbyExperiences: [
      { id: 'e6', title: 'Coastal birdwatching', distance: '2 km' }
    ]
  }
];

export const findHotelBySlug = (slug) => hotels.find((h) => h.slug === slug);
