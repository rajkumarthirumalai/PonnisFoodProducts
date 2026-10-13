export const INITIAL_CATEGORIES = [
  {
    id: 'spices-powders',
    name: 'Spices & Powders',
    slug: 'spices-powders',
    description: 'Aromatic pure turmeric, red chilli, coriander, and essential spice powders ground from selected farm produce.',
    image: '/images/spices_powders.jpg',
    productCount: 14,
    order: 1
  },
  {
    id: 'cooking-oils',
    name: 'Cooking Oils',
    slug: 'cooking-oils',
    description: 'Pure and healthy oils for your everyday cooking.',
    bannerImage: '/images/cooking_oils_banner.jpg',
    image: '/images/cooking_oils.jpg',
    productCount: 8,
    order: 2
  },
  {
    id: 'blended-masalas',
    name: 'Blended Masalas',
    slug: 'blended-masalas',
    description: 'Time-honored recipes for Sambar, Biryani, Fish Curry, and Chettinad specialties.',
    image: '/images/blended_masalas.jpg',
    productCount: 12,
    order: 3
  },
  {
    id: 'whole-spices',
    name: 'Whole Spices',
    slug: 'whole-spices',
    description: 'Hand-picked star anise, rolled cinnamon, green cardamom, cloves and whole black pepper.',
    image: '/images/whole_spices.jpg',
    productCount: 9,
    order: 4
  },
  {
    id: 'flours-grains',
    name: 'Flours & Grains',
    slug: 'flours-grains',
    description: 'Premium polished Ponni rice, traditional toor dal, roasted gram flour and wholesome grains.',
    image: '/images/flours_grains.jpg',
    productCount: 7,
    order: 5
  },
  {
    id: 'pickles-pastes',
    name: 'Pickles & Pastes',
    slug: 'pickles-pastes',
    description: 'Sun-matured authentic South Indian mango pickle, lime pickle, and aromatic culinary pastes.',
    image: '/images/pickles_pastes.jpg',
    productCount: 6,
    order: 6
  },
  {
    id: 'ready-mix',
    name: 'Ready Mix',
    slug: 'ready-mix',
    description: 'Crispy instant dosa mix, fluffy idli batter mixes, and festive snack premixes.',
    image: '/images/ready_mix.jpg',
    productCount: 5,
    order: 7
  },
  {
    id: 'other-products',
    name: 'Other Products',
    slug: 'other-products',
    description: 'Traditional palm jaggery, aromatic compounding asafoetida (hing), and sun-dried papadums.',
    image: '/images/other_products.jpg',
    productCount: 5,
    order: 8
  }
];

export const INITIAL_PRODUCTS = [
  {
    id: 'groundnut-oil',
    name: 'Groundnut Oil',
    slug: 'groundnut-oil',
    categoryId: 'cooking-oils',
    categoryName: 'Cooking Oils',
    shortDescription: 'Premium quality groundnut oil, extracted from carefully selected peanuts. Ideal for everyday cooking.',
    description: 'Ponnis Groundnut Oil is extracted from premium sun-dried groundnuts using traditional cold-pressing methods. Free from chemical solvents and adulterants, it retains its natural golden hue, rich aroma, and high smoke point, making it perfect for deep-frying, tempering, and everyday Malaysian-Indian home cooking.',
    primaryImage: '/images/groundnut_oil_feature.jpg',
    images: [
      '/images/groundnut_oil_feature.jpg',
      '/images/cooking_oils.jpg',
      '/images/sesame_oil.jpg',
      '/images/cooking_oils_banner.jpg'
    ],
    sizes: [
      { size: '100 ml', image: '/images/groundnut_oil_feature.jpg' },
      { size: '200 ml', image: '/images/groundnut_oil_feature.jpg' },
      { size: '500 ml', image: '/images/groundnut_oil_feature.jpg' },
      { size: '1 Litre', image: '/images/groundnut_oil_feature.jpg' }
    ],
    status: 'published',
    featured: true,
    lastUpdated: 'Today, 10:30 AM'
  },
  {
    id: 'sesame-oil',
    name: 'Sesame Oil',
    slug: 'sesame-oil',
    categoryId: 'cooking-oils',
    categoryName: 'Cooking Oils',
    shortDescription: 'Pure cold-pressed gingelly sesame oil with rich nutty aroma and traditional depth.',
    description: 'Cold-pressed from premium quality white and black sesame seeds blended with palm jaggery for traditional tempering. Ponnis Pure Gingelly Sesame Oil imparts an authentic South Indian aroma to gravies, rasam, and traditional curries.',
    primaryImage: '/images/sesame_oil.jpg',
    images: [
      '/images/sesame_oil.jpg',
      '/images/cooking_oils.jpg',
      '/images/cooking_oils_banner.jpg'
    ],
    sizes: [
      { size: '100 ml', image: '/images/sesame_oil.jpg' },
      { size: '200 ml', image: '/images/sesame_oil.jpg' },
      { size: '500 ml', image: '/images/sesame_oil.jpg' },
      { size: '1 Litre', image: '/images/sesame_oil.jpg' }
    ],
    status: 'published',
    featured: true,
    lastUpdated: 'Yesterday, 04:15 PM'
  },
  {
    id: 'coconut-oil',
    name: 'Coconut Oil',
    slug: 'coconut-oil',
    categoryId: 'cooking-oils',
    categoryName: 'Cooking Oils',
    shortDescription: '100% pure virgin coconut oil made from mature coconuts, unrefined and fresh.',
    description: 'Extracted directly from fresh mature coconut flesh. Natural, light, and delicately fragrant. Ideal for coastal seafood curries, Kerala-style roasting, and hair & skin nourishment.',
    primaryImage: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
      '/images/cooking_oils.jpg'
    ],
    sizes: [
      { size: '100 ml', image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80' },
      { size: '200 ml', image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80' },
      { size: '500 ml', image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80' },
      { size: '1 Litre', image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80' }
    ],
    status: 'published',
    featured: true,
    lastUpdated: 'Oct 11, 2026'
  },
  {
    id: 'sunflower-oil',
    name: 'Sunflower Oil',
    slug: 'sunflower-oil',
    categoryId: 'cooking-oils',
    categoryName: 'Cooking Oils',
    shortDescription: 'Light, crystal clear cooking oil enriched with Vitamin E for light everyday dishes.',
    description: 'Naturally light in taste and high in polyunsaturated fats. Its clean flavor lets the authentic spices and flavors of your dishes shine through without greasiness.',
    primaryImage: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
      '/images/cooking_oils.jpg'
    ],
    sizes: [
      { size: '500 ml' },
      { size: '1 Litre' },
      { size: '2 Litre' },
      { size: '5 Litre' }
    ],
    status: 'published',
    featured: false,
    lastUpdated: 'Oct 09, 2026'
  },
  {
    id: 'mustard-oil',
    name: 'Mustard Oil',
    slug: 'mustard-oil',
    categoryId: 'cooking-oils',
    categoryName: 'Cooking Oils',
    shortDescription: 'Traditional cold-pressed mustard oil with a robust pungency and deep amber glow.',
    description: 'Extracted from the highest grade brown and black mustard seeds. Its distinctive sharpness adds an irreplaceable zing to fish curries, pickles, and stir fries.',
    primaryImage: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&w=800&q=80',
      '/images/cooking_oils.jpg'
    ],
    sizes: [
      { size: '100 ml' },
      { size: '200 ml' },
      { size: '500 ml' },
      { size: '1 Litre' }
    ],
    status: 'published',
    featured: false,
    lastUpdated: 'Oct 08, 2026'
  },
  {
    id: 'rice-bran-oil',
    name: 'Rice Bran Oil',
    slug: 'rice-bran-oil',
    categoryId: 'cooking-oils',
    categoryName: 'Cooking Oils',
    shortDescription: 'Health-conscious oil rich in natural Oryzanol with high smoking point.',
    description: 'Refined gently from the nutrient-dense outer husk of brown rice grains. Naturally heart-healthy and absorbs up to 20% less oil into foods while frying.',
    primaryImage: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=800&q=80',
      '/images/cooking_oils.jpg'
    ],
    sizes: [
      { size: '500 ml' },
      { size: '1 Litre' },
      { size: '2 Litre' }
    ],
    status: 'published',
    featured: false,
    lastUpdated: 'Oct 07, 2026'
  },
  {
    id: 'chilli-powder',
    name: 'Chilli Powder',
    slug: 'chilli-powder',
    categoryId: 'spices-powders',
    categoryName: 'Spices & Powders',
    shortDescription: 'Pure sun-dried stemless red chillies stone ground for vibrant color and fiery warmth.',
    description: 'Finely ground from selected Guntur and Byadgi red chillies. Guarantees vibrant natural red color and balanced pungency with zero artificial coloring.',
    primaryImage: '/images/spices_powders.jpg',
    images: ['/images/spices_powders.jpg', '/images/spice_hero_banner.jpg'],
    sizes: [
      { size: '50 g' },
      { size: '100 g' },
      { size: '250 g' },
      { size: '500 g' },
      { size: '1 kg' }
    ],
    status: 'published',
    featured: true,
    lastUpdated: 'Today, 09:10 AM'
  },
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    slug: 'turmeric-powder',
    categoryId: 'spices-powders',
    categoryName: 'Spices & Powders',
    shortDescription: 'Golden Erode turmeric with naturally high curcumin content and earthy fragrance.',
    description: 'Ground from mature, hand-polished turmeric rhizomes. Renowned for its golden yellow hue, potent aroma, and high curcumin content.',
    primaryImage: '/images/spices_powders.jpg',
    images: ['/images/spices_powders.jpg', '/images/spice_hero_banner.jpg'],
    sizes: [
      { size: '50 g' },
      { size: '100 g' },
      { size: '250 g' },
      { size: '500 g' }
    ],
    status: 'published',
    featured: true,
    lastUpdated: 'Today, 08:45 AM'
  },
  {
    id: 'madras-sambar-masala',
    name: 'Madras Sambar Masala',
    slug: 'madras-sambar-masala',
    categoryId: 'blended-masalas',
    categoryName: 'Blended Masalas',
    shortDescription: 'Authentic South Indian aromatic sambar powder roasted with 14 traditional spices.',
    description: 'Slow-roasted coriander seeds, red chillies, toor dal, chana dal, fenugreek, and hing blended to perfection for authentic fragrant sambar.',
    primaryImage: '/images/blended_masalas.jpg',
    images: ['/images/blended_masalas.jpg'],
    sizes: [
      { size: '100 g' },
      { size: '250 g' },
      { size: '500 g' }
    ],
    status: 'published',
    featured: true,
    lastUpdated: 'Yesterday, 11:20 AM'
  },
  {
    id: 'chettinad-spice-mix',
    name: 'Chettinad Spice Mix',
    slug: 'chettinad-spice-mix',
    categoryId: 'blended-masalas',
    categoryName: 'Blended Masalas',
    shortDescription: 'Fiery and deeply aromatic Chettinad blend infused with stone flower and star anise.',
    description: 'A signature regional blend combining kalpasi (black stone flower), marathi moggu, star anise, fennel seeds, and roasted dry coconut.',
    primaryImage: '/images/blended_masalas.jpg',
    images: ['/images/blended_masalas.jpg'],
    sizes: [
      { size: '100 g' },
      { size: '250 g' }
    ],
    status: 'published',
    featured: false,
    lastUpdated: 'Oct 10, 2026'
  },
  {
    id: 'whole-spices-collection',
    name: 'Aromatic Whole Spices',
    slug: 'whole-spices-collection',
    categoryId: 'whole-spices',
    categoryName: 'Whole Spices',
    shortDescription: 'Hand-sorted star anise, cinnamon quills, cloves, and whole green cardamom.',
    description: 'Directly sourced from hill plantations, dried naturally under sun, and packed hermetically to preserve their volatile essential oils.',
    primaryImage: '/images/whole_spices.jpg',
    images: ['/images/whole_spices.jpg'],
    sizes: [
      { size: '50 g' },
      { size: '100 g' },
      { size: '250 g' }
    ],
    status: 'published',
    featured: true,
    lastUpdated: 'Oct 09, 2026'
  },
  {
    id: 'spicy-mango-pickle',
    name: 'Traditional Mango Pickle',
    slug: 'spicy-mango-pickle',
    categoryId: 'pickles-pastes',
    categoryName: 'Pickles & Pastes',
    shortDescription: 'Tender raw mango cubes cured with pure gingelly oil, mustard, and crushed red chillies.',
    description: 'Prepared following grandmother recipes: sour raw mangoes, roasted mustard seeds, fenugreek powder, and seasoned with pure sesame oil.',
    primaryImage: '/images/pickles_pastes.jpg',
    images: ['/images/pickles_pastes.jpg'],
    sizes: [
      { size: '200 g' },
      { size: '450 g' },
      { size: '1 kg' }
    ],
    status: 'published',
    featured: true,
    lastUpdated: 'Oct 08, 2026'
  },
  {
    id: 'crispy-dosa-mix',
    name: 'Traditional Dosa Mix',
    slug: 'crispy-dosa-mix',
    categoryId: 'ready-mix',
    categoryName: 'Ready Mix',
    shortDescription: 'Golden, crispy restaurant-style dosas in minutes with pure ground rice and lentils.',
    description: 'Zero artificial preservatives or soda. Just mix with water and create paper-thin golden dosas with crisp lace edges.',
    primaryImage: '/images/ready_mix.jpg',
    images: ['/images/ready_mix.jpg'],
    sizes: [
      { size: '200 g' },
      { size: '500 g' },
      { size: '1 kg' }
    ],
    status: 'published',
    featured: true,
    lastUpdated: 'Oct 07, 2026'
  },
  {
    id: 'pure-palm-jaggery',
    name: 'Pure Palm Jaggery & Hing',
    slug: 'pure-palm-jaggery',
    categoryId: 'other-products',
    categoryName: 'Other Products',
    shortDescription: 'Unrefined mineral-rich palm jaggery blocks and potent compounding asafoetida.',
    description: 'Natural sweetening substitute for white sugar with earthy caramel undertones, and digestive compounding asafoetida resin.',
    primaryImage: '/images/other_products.jpg',
    images: ['/images/other_products.jpg'],
    sizes: [
      { size: '250 g' },
      { size: '500 g' },
      { size: '1 kg' }
    ],
    status: 'published',
    featured: false,
    lastUpdated: 'Oct 06, 2026'
  }
];
