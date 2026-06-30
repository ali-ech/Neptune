import { BRAND } from '../assets';

export const MINERALS = [
  { symbol: 'Ca²⁺', name: 'Calcium', value: '240 mg/L', desc: 'About 99% of the calcium in our bodies is in our bones and teeth.' },
  { symbol: 'Na⁺', name: 'Sodium', value: '5.2 mg/L', desc: "It's an important component for proper muscle and nerve function." },
  { symbol: 'NO₃⁻', name: 'Nitrate', value: '4.4 mg/L', desc: "It's great for health to drink water with levels of nitrate under 10 mg/L." },
  { symbol: 'Mg²⁺', name: 'Magnesium', value: '42 mg/L', desc: 'Magnesium is a nutrient that the body needs to stay healthy.' },
  { symbol: 'SO₄²⁻', name: 'Sulfate', value: '400 mg/L', desc: 'Sulfate is among the most important macronutrients in cells.' },
  { symbol: 'HCO₃⁻', name: 'Bicarbonate', value: '384 mg/L', desc: 'Bicarbonate is an antacid used to relieve heartburn and acid indigestion.' },
];

export const TESTIMONIALS = [
  { name: 'Ayesha Malik', city: 'Karachi', text: `${BRAND.fullName} has completely changed my perception of bottled water. From its refined taste to the elegant packaging, everything speaks of class and purity.` },
  { name: 'Usman Sheikh', city: 'Lahore', text: `We serve ${BRAND.name} at all our corporate meetings now. It reflects the premium image our brand stands for — simple, pure, and impressive in every detail.` },
  { name: 'Sara Khan', city: 'Islamabad', text: `There's something distinct about ${BRAND.name}. It's not just refreshing; it feels luxurious. Guests instantly notice the difference.` },
  { name: 'Bilal Ahmed', city: 'Faisalabad', text: `I tried ${BRAND.fullName} at a restaurant and immediately switched. The clarity, the smoothness — you can tell it's crafted for those who value quality.` },
];

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Leadership', path: '/leadership' },
  { label: 'Distributors', path: '/distributors' },
  { label: 'Partner', path: '/partner' },
  { label: 'Contact', path: '/contact' },
];

export const FOOTER_COLS = {
  getStarted: [
    { label: 'About', path: '/about' },
    { label: 'Why Choose Us', path: '/about#why' },
    { label: 'Distributors', path: '/distributors' },
    { label: 'Certification', path: '/certification' },
  ],
  moreInfo: [
    { label: 'Our Products', path: '/products' },
    { label: 'Origins & Source', path: '/origins-source' },
    { label: 'Quality', path: '/quality' },
    { label: 'Become a Partner', path: '/partner' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Sitemap', path: '/sitemap' },
    { label: 'Vision & Mission', path: '/#vision' },
  ],
  contact: {
    emails: ['info@neptunemineralwater.com', 'orders@neptunemineralwater.com'],
    phone: '+92 300 123 4567',
    phoneRaw: '923001234567',
    location: 'Pakistan',
  },
  social: [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
    { label: 'TikTok', href: 'https://tiktok.com' },
  ],
};

export const CONTACT = FOOTER_COLS.contact;

export const LEADERSHIP = [
  { name: 'Executive Leadership', role: 'Vision & Strategy', bio: `Guiding ${BRAND.fullName} with a commitment to purity, excellence, and sustainable quality across every market we serve.` },
  { name: 'Operations', role: 'Quality & Sourcing', bio: 'Ensuring every bottle meets the highest standards of mineral balance, safety, and premium presentation.' },
  { name: 'Partnerships', role: 'Distribution & Growth', bio: 'Building a nationwide network of distributors who share our vision of refined hydration.' },
];

export interface LeaderProfile {
  name: string;
  role: string;
  tag: string;
  initials: string;
  image: string;
  lead: string;
  paragraphs: string[];
}

export const CHAIRMAN: LeaderProfile = {
  name: 'Hassan Raza',
  role: 'Chairman & Founder',
  tag: 'Chairman',
  initials: 'HR',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
  lead: `Welcome to ${BRAND.fullName}.`,
  paragraphs: [
    `When I founded ${BRAND.name}, my vision was to create a premium bottled water brand for those who value purity, taste, and quality without compromise.`,
    'From advanced purification and mineral balance to hygienic bottling and secure packaging, every stage reflects our commitment to purity, reliability, and excellence.',
    `Designed for homes, offices, events, and hospitality partners, ${BRAND.fullName} is more than water — it is a statement of refined choice and modern living.`,
    'Thank you for visiting us. We look forward to serving you with excellence in every detail.',
  ],
};

export const FOUNDER = CHAIRMAN;

export const CEO: LeaderProfile = {
  name: 'Omar Farooq',
  role: 'Chief Executive Officer & Managing Director',
  tag: 'Executive',
  initials: 'OF',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
  lead: `At ${BRAND.fullName}, our clients expect more than hydration — they expect reliability, consistency, and a brand that elevates every table it reaches.`,
  paragraphs: [
    'As Chief Executive Officer, I lead day-to-day operations across production, logistics, and our distributor network — ensuring every order is fulfilled on time and every bottle meets our quality benchmarks.',
    'We invest in modern bottling practices, trained teams, and responsive client care. Our operations group coordinates closely with distributors and customers before, during, and after every delivery.',
    `${BRAND.fullName} has earned the trust of households, restaurants, and corporate partners across Pakistan. That record reflects the discipline of our people and the vision our Chairman established from the start.`,
    'Whether you need a single order or a long-term supply partnership, my commitment is the same: deliver exceptional service with integrity, efficiency, and care.',
  ],
};

export const LEADERSHIP_TEAM = [
  {
    name: 'Sara Ahmad',
    role: 'Head of Marketing',
    initials: 'SA',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    bio: 'Sara Ahmad leads brand strategy, digital campaigns, and retail visibility — ensuring Neptune stands out with a premium presence across Pakistan.',
  },
  {
    name: 'Bilal Hussain',
    role: 'Director of Operations',
    initials: 'BH',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    bio: 'Bilal Hussain oversees production planning, quality control, and supply chain logistics to keep every delivery accurate, timely, and consistent.',
  },
  {
    name: 'Nadia Karim',
    role: 'Regional Sales Director',
    initials: 'NK',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    bio: `Nadia Karim drives regional sales growth and distributor partnerships — connecting ${BRAND.fullName} with retailers, hotels, and corporate clients nationwide.`,
  },
];

export const LEADERSHIP_MISSION =
  `To deliver exceptional premium mineral water across Pakistan — with refined presentation, reliable logistics, and uncompromising quality — so every client enjoys purity and confidence in every bottle.`;

export const DISTRIBUTORS_INTRO =
  `${BRAND.fullName} offers a strong brand appeal, positioning itself as a high-margin premium product that truly resonates with quality-conscious consumers. Our distributors benefit from comprehensive marketing support, including access to professional media, digital campaigns, and in-store promotional assets that strengthen brand presence.`;

export interface Distributor {
  name: string;
  city: string;
  phone?: string;
  email?: string | null;
  address?: string;
  image?: string;
}

export const DISTRIBUTORS: Distributor[] = [
  {
    name: 'Al-Hamid Traders',
    city: 'Islamabad',
    phone: '03011234567',
    email: 'faisal.khan@alhamidtraders.pk',
    address: 'Plot 14, I-9 Industrial Area, Islamabad',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    name: 'Pure Flow Distribution',
    city: 'Lahore',
    phone: '03027654321',
    email: 'ayesha@pureflowdist.pk',
    address: '22-G Gulberg III, Lahore',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    name: 'Karakoram Beverages',
    city: 'Karachi',
    phone: '03039876543',
    email: 'tariq@karakorambeverages.com',
    address: 'Office 8, Clifton Block 5, Karachi',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    name: 'Blue Spring Enterprises',
    city: 'Rawalpindi',
    phone: '03001112233',
    email: 'sanaullah@bluespring.pk',
    address: 'Satellite Town, Rawalpindi',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    name: 'Aqua Elite Distributors',
    city: 'Peshawar',
    phone: '03004445566',
    email: 'kamran@aquaelite.pk',
    address: 'University Road, Peshawar',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    name: 'Gulf Stream Trading',
    city: 'Multan',
    phone: '03015556677',
    email: 'rabia@gulfstream.pk',
    address: 'Bosan Road, Multan',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    name: 'Crystal Waters Co.',
    city: 'Faisalabad',
    phone: '03028889900',
    email: 'danish@crystalwaters.pk',
    address: 'Susan Road, Faisalabad',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    name: 'Neptune Partners Abbottabad',
    city: 'Abbottabad',
    phone: '03123456789',
    email: 'zainab@neptunepartners.pk',
    address: 'Mandian, Abbottabad',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    name: 'Summit Hydration Services',
    city: 'Quetta',
    phone: '03331234567',
    email: 'imran@summithydration.pk',
    address: 'Jinnah Road, Quetta',
    image: 'https://images.unsplash.com/photo-1519345182560-28f9917c8314?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    name: 'Prime Source Trading',
    city: 'Hyderabad',
    phone: '03451234567',
    email: 'sadia@primesource.pk',
    address: 'Auto Bhan Road, Hyderabad',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
  },
];

export const DISTRIBUTOR_BENEFITS = [
  'Exclusive territory partnerships across Pakistan and beyond',
  'Premium branding assets and point-of-sale materials',
  'Dedicated account management and logistics support',
  'Marketing co-investment for launch campaigns',
  'Certified quality assurance and compliance documentation',
];

export const STATS = [
  { value: '50,000+', label: 'Satisfied Customers' },
  { value: '200+', label: 'Partner Outlets' },
  { value: '15+', label: 'Years of Excellence' },
  { value: '25+', label: 'Cities Served' },
];

export const WATER_CATEGORIES = [
  {
    title: 'Premium Collection',
    desc: 'Signature bottles crafted for homes, offices, and refined lifestyles.',
    path: '/products',
  },
  {
    title: 'Corporate Supply',
    desc: 'Bulk orders for offices, boardrooms, and executive meetings that reflect your brand.',
    path: '/partner',
  },
  {
    title: 'Events & Hospitality',
    desc: 'Hotels, restaurants, and ceremonies — premium hydration for memorable occasions.',
    path: '/distributors',
  },
];

export const WHY_CHOOSE = [
  {
    title: 'Certified Purity',
    desc: 'Every bottle meets rigorous mineral balance and safety standards — purity you can trust.',
  },
  {
    title: 'Premium Presentation',
    desc: 'Elegant packaging and refined branding designed for those who value detail.',
  },
  {
    title: 'Nationwide Reach',
    desc: 'Dedicated distribution network across Pakistan with reliable logistics and partner support.',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Browse collection',
    desc: 'Explore our 500ml and 1500ml premium bottles — crafted for purity in every sip.',
  },
  {
    step: '02',
    title: 'Choose your volume',
    desc: 'Select the size and quantity that fits your home, office, or event requirements.',
  },
  {
    step: '03',
    title: 'Partner or order',
    desc: 'Become a distributor or place a direct order — our team confirms availability instantly.',
  },
  {
    step: '04',
    title: 'Enjoy pure water',
    desc: `Receive premium mineral water bottled with care — ${BRAND.fullName}, delivered.`,
  },
];

export const ORIGINS_CONTENT = {
  intro: `The origin of ${BRAND.fullName} lies in the crystalline snowflakes that descend on the towering Karakoram and Himalayan peaks.`,
  journey: 'Over years, the water filters through layers of rock, gravel, and sand, giving it a unique mineral composition and crisp taste.',
  source: 'Bottled at source from a pristine aquifer — never exposed to air or human contact until you open the bottle.',
};

export const COMPOSITION_CONTENT = {
  intro: `${BRAND.fullName} contains a unique balance of minerals naturally present in the water — nothing is added, nothing is removed.`,
  note: 'Values below are typical. Natural variation may occur due to seasonal and geological factors.',
};

export const NATURAL_VS_OTHER = [
  {
    title: 'Natural Mineral Water',
    points: [
      'Sourced from a protected natural aquifer',
      'Minerals present naturally — nothing added or removed',
      'Bottled at source under strict hygiene standards',
      'Distinct taste from unique geological filtration',
    ],
    highlight: true,
  },
  {
    title: 'Purified / Other Waters',
    points: [
      'Often sourced from municipal supplies',
      'Minerals may be stripped and artificially re-added',
      'May undergo multiple chemical treatments',
      'Generic taste profile',
    ],
    highlight: false,
  },
];

export const QUALITY_POINTS = [
  { title: 'Source Protection', desc: 'Our aquifer is protected from external contamination through natural geological barriers and active monitoring.' },
  { title: 'Laboratory Testing', desc: 'Every batch is tested against national and international standards before delivery.' },
  { title: 'Hygienic Bottling', desc: 'State-of-the-art bottling facilities ensure your water remains pure from source to bottle.' },
  { title: 'Traceability', desc: 'Full batch traceability from source to delivery — transparency you can trust.' },
];

export const DELIVERY_POLICY = `Orders are delivered within Islamabad and Lahore metropolitan areas. Standard delivery is 1–3 business days. Cash on delivery is accepted for all orders.`;

export const PRIVACY_POLICY = `We respect your privacy. Personal information collected through our website or WhatsApp is used solely to process orders and respond to enquiries. We do not sell or share your data with third parties except as required to fulfil your order.`;

export const TERMS_OF_USE = `By using this website you agree to our terms. All content, branding, and product information are the property of ${BRAND.company}. Prices and availability are subject to change without notice.`;
